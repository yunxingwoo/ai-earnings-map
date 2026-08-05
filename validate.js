#!/usr/bin/env node
/* validate.js — 全量校验:schema / 溯源完整性 / 复算 / 空白规则
   用法:node validate.js  (退出码非 0 = 校验失败) */
const {LANE_DEFS, COMPANIES} = require('./data/companies.js');
const {METRICS}   = require('./data/metrics.js');
const {SOURCES}   = require('./data/sources.js');
const {CAPACITY}  = require('./data/capacity.js');
const {FX_RATES}  = require('./data/fx.js');
const calc = require('./js/calc.js');

const errors = [], warns = [];
const err  = m => errors.push(m);
const warn = m => warns.push(m);

const OFFICIAL_HOST = /(sec\.gov|\.gov|investor|ir\.|\.ir\.|cninfo\.com\.cn|twse\.com\.tw|sse\.com\.cn|hkex|samsung\.com|skhynix\.com|tsmc\.com|micron\.com|broadcom\.com|nvidia\.com|amd\.com|marvell\.com|asml\.com|appliedmaterials\.com|lamresearch\.com|synopsys\.com|vertiv\.com|arista\.com|coherent\.com|delltechnologies\.com|coreweave\.com|nebius\.com|alibabagroup\.com|tencent\.com|microsoft\.com|abc\.xyz|aboutamazon\.com|atmeta\.com|oracle\.com|openai\.com|x\.ai|spacex\.com|crusoe\.ai|vantage-dc\.com|iren\.com|applieddigital\.com|globenewswire\.com|about\.fb\.com|businesswire\.com|prnewswire\.com|gcs-web\.com|smics\.com|sdkworld\.com|advantest\.com|se\.com|ibiden\.com)/i;

const VALUE_METRICS = new Set(['revenue','dc_revenue','ai_revenue','ds_revenue','datacom_revenue',
  'net_income','capex','backlog','bookings','monthly_revenue','guidance_next_q']);
const KNOWN_METRICS = new Set([...VALUE_METRICS, 'gross_margin']);
const UNITS = new Set(['USD_M','CNY_YI','EUR_M','TWD_M','KRW_B','JPY_M']);

/* ── 1. 公司注册表 ── */
const ids = new Set(), lanes = new Set(LANE_DEFS.map(l=>l.lane));
for(const c of COMPANIES){
  if(ids.has(c.id)) err(`company id 重复: ${c.id}`);
  ids.add(c.id);
  if(!lanes.has(c.lane)) err(`${c.id}: lane 越界 ${c.lane}`);
  if(!['leader','core','second'].includes(c.tier)) err(`${c.id}: tier 非法 ${c.tier}`);
  if(!(c.listed===true||c.listed===false||c.listed==='pending')) err(`${c.id}: listed 非法 ${c.listed}`);
  if(!UNITS.has(c.currency)) err(`${c.id}: currency 非法 ${c.currency}`);
  if(!['lg','md','sm'].includes(c.size)) err(`${c.id}: size 非法 ${c.size}`);
}

/* ── 2. 溯源索引 ── */
const srcIds = new Set();
for(const s of SOURCES){
  if(srcIds.has(s.id)) err(`source id 重复: ${s.id}`);
  srcIds.add(s.id);
  if(!s.url || !/^https?:\/\//.test(s.url)) err(`source ${s.id}: url 缺失/非法`);
  else if(!OFFICIAL_HOST.test(s.url)) warn(`source ${s.id}: 域名不在官方白名单,请人工确认 → ${s.url}`);
  if(!s.fetched_at) err(`source ${s.id}: fetched_at 缺失`);
}

/* ── 3. 指标完整性 ── */
for(const e of METRICS){
  const co = COMPANIES.find(c=>c.id===e.company);
  if(!co){ err(`metrics: 未注册公司 ${e.company}`); continue; }
  if(!calc.isQuarter(e.period) && !/^\d{4}M\d{1,2}$/.test(e.period)) err(`${e.company} ${e.period}: period 格式非法`);
  for(const [k,v] of Object.entries(e.metrics)){
    if(!KNOWN_METRICS.has(k)) warn(`${e.company} ${e.period}: 未知指标 ${k}(请加入 schema)`);
    if(v==null) continue;                                   // null = 该口径存在但当季未给数
    if(!v.src) err(`${e.company} ${e.period} ${k}: 缺 src`);
    else if(!srcIds.has(v.src)) err(`${e.company} ${e.period} ${k}: src '${v.src}' 不在 sources.js`);
    if(k==='gross_margin'){
      if(typeof v.value!=='number' || v.value<=0 || v.value>=1) warn(`${e.company} ${e.period} gross_margin: ${v.value} 应在 (0,1) 区间`);
    } else {
      if(v.value==null) err(`${e.company} ${e.period} ${k}: value 缺失`);
      if(v.value===0) warn(`${e.company} ${e.period} ${k}: value 为 0(请确认非估算占位)`);
      if(!v.unit) err(`${e.company} ${e.period} ${k}: 缺 unit`);
      else if(!UNITS.has(v.unit)) err(`${e.company} ${e.period} ${k}: unit 非法 ${v.unit}`);
      else if(v.unit!==co.currency) warn(`${e.company} ${e.period} ${k}: unit ${v.unit} 与公司披露币种 ${co.currency} 不一致`);
    }
  }
}

/* ── 4. 复算抽查(YoY/QoQ 可复现,无 NaN) ── */
const BYCO = calc.byCompany(METRICS);
for(const [cid, entries] of Object.entries(BYCO)){
  const q = calc.quarterly(entries);
  for(let i=0;i<q.length;i++){
    const y = calc.yoyAt(q,i), qo = calc.qoqAt(q,i);
    if(y!==null && !isFinite(y)) err(`${cid} ${q[i].period}: YoY 非有限值`);
    if(qo!==null && !isFinite(qo)) err(`${cid} ${q[i].period}: QoQ 非有限值`);
  }
  if(q.length>4) warn(`${cid}: 季度数 ${q.length} > 4(schema 建议保留最新 4 季)`);
}

/* ── 5. CAPACITY ── */
for(const p of CAPACITY.projects){
  if(!p.project || !p.mw || !p.src) err(`capacity: 字段缺失 ${JSON.stringify(p)}`);
  if(p.src && !srcIds.has(p.src)) err(`capacity ${p.project}: src '${p.src}' 不在 sources.js`);
  if(!['operating','construction','announced'].includes(p.status)) err(`capacity ${p.project}: status 非法`);
}

/* ── 6. FX ── */
for(const k of ['EUR','CNY','TWD','KRW','JPY']) if(!FX_RATES.perUSD[k]) err(`fx: 缺 ${k}`);
if(!FX_RATES.date) err('fx: 缺日期');

/* ── 输出 ── */
const nData = new Set(METRICS.map(e=>e.company)).size;
console.log(`公司 ${COMPANIES.length} · 有数据 ${nData} · 指标条目 ${METRICS.length} · 溯源 ${SOURCES.length} · 容量项目 ${CAPACITY.projects.length}`);
for(const w of warns) console.log('  ⚠ ' + w);
if(errors.length){ for(const e of errors) console.error('  ✗ ' + e); console.error(`\nFAIL: ${errors.length} 个错误, ${warns.length} 个警告`); process.exit(1); }
console.log(`PASS${warns.length? ` (${warns.length} 个警告)`:''}`);
