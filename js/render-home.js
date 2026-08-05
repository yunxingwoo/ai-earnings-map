/* js/render-home.js — 主页汇总渲染(只读真实数据层)
   依赖全局:LANE_DEFS, COMPANIES, METRICS, SOURCES, CAPACITY, FX_RATES + js/calc.js */
const BYCO_H = byCompany(METRICS);
const hasData = c => { const q=quarterly(BYCO_H[c.id]||[]); return q.length && revOf(q[q.length-1])!=null; };
const withData  = COMPANIES.filter(hasData);
const gaps      = COMPANIES.filter(c=>!hasData(c));
const nonListed = gaps.filter(c=>c.listed===false);
const pending   = gaps.filter(c=>c.listed==='pending');

/* 最新季度取值 */
function latestOf(c, key){
  const q = quarterly(BYCO_H[c.id]||[]);
  for(let i=q.length-1;i>=0;i--){ const m=q[i].metrics[key]; if(m&&m.value!=null) return m; }
  return null;
}
const sumLatest = key => withData.reduce((s,c)=>{ const m=latestOf(c,key); return m? s+usdM(m.value,m.unit||c.currency,FX_RATES):s; },0);

/* ── 覆盖状态面板 ── */
document.getElementById('hpTotal').textContent = COMPANIES.length;
document.getElementById('b1').style.width = (withData.length/COMPANIES.length*100)+'%';
document.getElementById('b2').style.width = (pending.length/COMPANIES.length*100)+'%';
document.getElementById('b3').style.width = (nonListed.length/COMPANIES.length*100)+'%';
document.getElementById('hpRows').innerHTML = [
  ['green','已披露(有官方数据)',withData.length],
  ['yellow','待核(上市状态核查中)',pending.length],
  ['gray','非上市(指标区整体留空)',nonListed.length],
].map(r=>`<div class="hp-row"><span class="dot ${r[0]}"></span>${r[1]}<b class="num">${String(r[2]).padStart(2,'0')}</b></div>`).join('');

/* ── 链条步骤 ── */
const STEPS = [
  ['01','半导体基础','材料 · EDA · 设备 · 制造 · 封测 · 存储','lane-1'],
  ['02','算力芯片','GPU · ASIC · 互连芯片','lane-7'],
  ['03','整机与互联','ODM · 网络 · 光模块 · PCB','lane-8'],
  ['04','供电与散热','电源 · 液冷 · 温控','lane-11'],
  ['05','CSP 与能源','云厂 · Neocloud · 电力','lane-12'],
  ['06','大模型与 AI 应用','模型厂 · 软件','lane-14'],
];
document.getElementById('chain').innerHTML = STEPS.map(s=>
 `<a class="step" href="map.html#${s[3]}"><span class="arr">→</span>
   <span class="no">${s[0]}</span><span class="sn">${s[1]}</span><span class="sd">${s[2]}</span></a>`).join('');

/* ── 大数字带 ── */
document.getElementById('stRev').textContent   = fmtBig(withData.length? sumLatest('revenue') : null);
document.getElementById('stCapex').textContent = fmtBig(sumLatest('capex') || null);
const niSet = withData.filter(c=>latestOf(c,'net_income'));
document.getElementById('stNI').textContent    = niSet.length? fmtBig(sumLatest('net_income')) : '—';
document.getElementById('stNILabel').textContent = `覆盖公司净利润合计（${niSet.length} 家已披露）`;
const cap = CAPACITY.projects.filter(p=>p.status!=='announced');
const totalMW = cap.reduce((s,p)=>s+(p.mw||0),0);
document.getElementById('stGW').textContent = totalMW? (totalMW/1000).toFixed(1)+' GW' : '—';
document.querySelectorAll('.bstat .bs-note')[1].textContent =
  totalMW? `${cap.length} 个项目 · 按运营商官方披露容量合计` : '暂无官方容量数据，留空不估算';

/* ── 五卡概览 ── */
const laneSigCount = LANE_DEFS.filter(L=>
  COMPANIES.some(c=>c.lane===L.lane && signalOf(quarterly(BYCO_H[c.id]||[]))!=='gray')).length;
document.getElementById('cLanes').textContent   = LANE_DEFS.length;
document.getElementById('cPool').textContent    = COMPANIES.length;
document.getElementById('cListed').textContent  = withData.length;
document.getElementById('cListedNote').textContent =
  `非上市 ${nonListed.length} 家 · 待核 ${pending.length} 家 · 待采集 ${gaps.length-nonListed.length-pending.length} 家`;
document.getElementById('cSignals').textContent = laneSigCount;
document.getElementById('cArchived').textContent = SOURCES.length || '—';
document.getElementById('cArchivedNote').textContent =
  SOURCES.length? '全部保留官方原文链接，逐条可溯' : '采集进行中，留空不估算';

/* ── 披露动态跑马灯(由 SOURCES 生成) ── */
const latestPeriodByCo = {};
for(const e of METRICS){ const c=e.company;
  if(!latestPeriodByCo[c] || periodKey(e.period)>periodKey(latestPeriodByCo[c])) latestPeriodByCo[c]=e.period; }
const TICKS = Object.entries(latestPeriodByCo)
  .sort((a,b)=>periodKey(b[1])-periodKey(a[1])).slice(0,14)
  .map(([cid,p])=>`${(COMPANIES.find(c=>c.id===cid)||{}).name||cid} ${p} 已披露`);
const tk = document.getElementById('ticker');
tk.innerHTML = TICKS.length
  ? TICKS.concat(TICKS).map(t=>`<span><i class="t-dot">●</i><b>${t}</b></span>`).join('')
  : '<span><b>首批财报数据采集进行中…</b></span>';
