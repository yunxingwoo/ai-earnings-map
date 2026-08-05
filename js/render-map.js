/* js/render-map.js — 全景地图渲染(只读真实数据层,无任何演示数据)
   依赖全局:LANE_DEFS, COMPANIES, METRICS, SOURCES + js/calc.js 公式层 */
const TIER = {leader:'★ 龙头',core:'● 核心',second:'○ 二线'};
const SRC  = Object.fromEntries(SOURCES.map(s=>[s.id,s]));
const BYCO = byCompany(METRICS);
const COBYID = Object.fromEntries(COMPANIES.map(c=>[c.id,c]));

function coQuarterly(id){ return quarterly(BYCO[id]||[]); }
function gapReason(c){
  if(c.listed===false) return '非上市 · 无定期财报';
  if(c.listed==='pending') return '上市状态待核';
  return '待采集（v2 管线）';
}
const shortPeriod = p => p.replace(/^\d{2}(\d{2})Q([1-4])$/,'$1Q$2');

/* ── 地图 ── */
const mapEl = document.getElementById('map');
LANE_DEFS.forEach((L,i)=>{
  const cos = COMPANIES.filter(c=>c.lane===L.lane);
  const sigs = cos.map(c=>signalOf(coQuarterly(c.id))).filter(s=>s!=='gray');
  const laneSig = !sigs.length ? 'gray'
    : sigs.filter(s=>s==='green').length >= sigs.length/2 ? 'green'
    : sigs.filter(s=>s==='red').length > sigs.length/2 ? 'red' : 'yellow';
  const el = document.createElement('div');
  el.className='lane reveal'; el.id='lane-'+L.lane;
  el.innerHTML = `<div class="lane-label">
      <div class="lane-idx">${String(L.lane).padStart(2,'0')} · ${L.en}</div>
      <div class="lane-name">${L.cn}</div>
      <div class="lane-signal"><span class="dot ${laneSig}${laneSig==='green'?' live':''}"></span>${sigs.length} 家已披露 · 共 ${cos.length} 家</div>
    </div><div class="cards"></div>`;
  const box = el.querySelector('.cards');
  cos.forEach(c=>{
    const q = coQuarterly(c.id);
    const latest = q[q.length-1];
    const b = document.createElement('button');
    if(!latest || revOf(latest)==null){
      b.className='card '+c.size+' nodata';
      b.innerHTML = `<div class="nm">${c.name}${c.cloud?'<span class="cloudtag">☁</span>':''}</div>
        <div class="tk">${c.ticker} · ${c.market} · ${TIER[c.tier]}${c.note?' · '+c.note:''}</div>
        <div class="rev num">—</div><div class="why">${gapReason(c)}</div>`;
    } else {
      const i = q.length-1, y = yoyAt(q,i), y1 = yoyAt(q,i-1), s = signalOf(q);
      const accel = y!=null && y1!=null && y>20 && y>y1;
      b.className='card '+c.size; b.dataset.id=c.id;
      b.innerHTML = `<span class="dot ${s}"></span>
        <div class="nm">${c.name}</div>
        <div class="tk">${c.ticker} · ${c.market} · ${TIER[c.tier]}${c.note?' · '+c.note:''}</div>
        <div class="rev num">${fmt(revOf(latest),c.currency)}</div>
        <div class="yoy num ${y==null?'':y<0?'down':accel?'up':'flat'}">YoY ${pct(y)} <span class="acc">${y==null?'数据不足':y<0?'':accel?'↑加速':'→减速'} · ${shortPeriod(latest.period)}</span></div>`;
      b.onclick=()=>openDrawer(c,b);
    }
    box.appendChild(b);
  });
  mapEl.appendChild(el);
});

/* ── 交叉验证(从真实指标计算;缺侧显示 —) ── */
const CHAINS = [
 { name:'GPU 需求链', note:'同季方向对照；背离只标记不解读', sides:[
   ['nvda','dc_revenue','英伟达 DC 营收'],['tsmc','revenue','台积电营收'],
   ['hynix','revenue','海力士营收'],['quanta','revenue','广达营收'],['dell','backlog','戴尔 AI backlog']]},
 { name:'光模块链', note:'模块增速 vs 下游 capex', sides:[
   ['innolight','revenue','旭创营收'],['eoptolink','revenue','新易盛营收'],
   ['cohr','datacom_revenue','Coherent datacom'],['meta','capex','Meta capex'],['goog','capex','谷歌 capex']]},
 { name:'电力链', note:'电力允许领先设备 1–2 季', sides:[
   ['vrt','backlog','Vertiv backlog'],['msft','capex','微软 capex'],
   ['vst','revenue','Vistra 营收'],['gev','revenue','GEV 营收']]},
 { name:'中国对照链', note:'芯片 ↔ 整机 ↔ 云厂 capex ↔ 制造', sides:[
   ['cambricon','revenue','寒武纪营收'],['fii','revenue','工业富联营收'],
   ['baba','capex','阿里 capex'],['smic','revenue','中芯营收']]},
];
function latestMetric(coId, key){
  const q = coQuarterly(coId);
  for(let i=q.length-1;i>=0;i--){ const m=q[i].metrics[key]; if(m && m.value!=null) return {m, period:q[i].period, q, i}; }
  return null;
}
function chainCell(coId, key, label){
  const co = COBYID[coId], got = latestMetric(coId, key);
  if(!got) return {html:`${label} <b>—</b>`, yoy:null};
  let yoy = null;
  if(key==='revenue' || key==='dc_revenue' || key==='datacom_revenue'){
    const y = yoyAt(got.q, got.i); if(y!=null) yoy = y;
  }
  const val = fmt(got.m.value, got.m.unit||co.currency);
  return {html:`${label} <b>${val}</b>${yoy!=null?`(<span class="num">${pct(yoy)}</span>)`:''}`, yoy};
}
document.getElementById('vchain').innerHTML = CHAINS.map(ch=>{
  const cells = ch.sides.map(s=>chainCell(...s));
  const yoys = cells.map(c=>c.yoy).filter(v=>v!=null);
  let mark='—', cls='gray';
  if(yoys.length >= Math.ceil(ch.sides.length*0.6)){
    const allPos = yoys.every(v=>v>0);
    const spread = Math.max(...yoys)-Math.min(...yoys);
    if(allPos && spread<=60){ mark='✓'; cls='green'; } else { mark='⚠'; cls='amber'; }
  }
  return `<div class="vrow"><div class="mark" style="color:var(--${cls==='green'?'green':cls==='amber'?'amber':'gray'})">${mark}</div>
    <div class="vn">${ch.name}</div>
    <div><div class="pair num">${cells.map(c=>c.html).join(' ↔ ')}</div>
    <div class="note">${ch.note}${mark==='—'?' · 数据不足，本季不判定':''}</div></div></div>`;
}).join('');

/* ── 缺口墙(自动汇总) ── */
document.getElementById('gaplist').innerHTML = COMPANIES
  .filter(c=>{ const q=coQuarterly(c.id); return !q.length || revOf(q[q.length-1])==null; })
  .map(c=>`<div class="gaprow"><span class="gn">${c.name}</span><span class="gr">${gapReason(c)}</span></div>`).join('');

/* ── 顶栏统计 ── */
const nData = COMPANIES.filter(c=>{ const q=coQuarterly(c.id); return q.length && revOf(q[q.length-1])!=null; }).length;
const statEl = document.getElementById('stat');
if(statEl) statEl.innerHTML = `已披露 <b class="num">${nData}</b> / ${COMPANIES.length}`;

/* ── 公司抽屉 ── */
const drawer=document.getElementById('drawer'), overlay=document.getElementById('overlay');
let sel=null;
const METRIC_LABEL = {dc_revenue:'数据中心分部',ai_revenue:'AI 营收',ds_revenue:'DS 分部营收',
  datacom_revenue:'Datacom 分部',net_income:'净利润',capex:'资本开支 capex',
  backlog:'在手订单 backlog',bookings:'净预订 bookings',guidance_next_q:'下季指引'};
function openDrawer(c,btn){
  if(sel) sel.classList.remove('selected'); sel=btn; btn.classList.add('selected');
  const q = coQuarterly(c.id), mo = monthly(BYCO[c.id]||[]);
  const i = q.length-1, latest = q[i], m = latest.metrics;
  const shown = q.slice(-4), max = Math.max(...shown.map(e=>revOf(e)||0));
  const bars = shown.map(e=>{const v=revOf(e);const cur=e===latest;
    return `<div class="bar ${cur?'cur':''}"><i data-h="${v!=null?Math.max(3,v/max*100):3}" style="height:3px"></i><span>${shortPeriod(e.period)}</span></div>`}).join('');
  const row=(k,v)=>`<tr><td>${k}</td><td class="num">${v}</td></tr>`;
  const val=(key)=> m[key]&&m[key].value!=null ? fmt(m[key].value,m[key].unit||c.currency) : '— 未披露';
  let rows = row('营收('+latest.period+')', fmt(revOf(latest),c.currency))
    + row('同比 YoY', pct(yoyAt(q,i)))
    + row('环比 QoQ', pct(qoqAt(q,i)))
    + row('上季同比(加速度)', i>=1?pct(yoyAt(q,i-1)):'—')
    + row('毛利率', m.gross_margin&&m.gross_margin.value!=null ? (m.gross_margin.value*100).toFixed(1)+'%' : '— 未披露');
  for(const k of Object.keys(METRIC_LABEL)) if(m[k]!==undefined) rows += row(METRIC_LABEL[k], val(k));
  if(mo.length){ const lm = mo[mo.length-1];
    rows += row('月营收('+lm.period+')', fmt(lm.metrics.monthly_revenue.value, lm.metrics.monthly_revenue.unit||c.currency)); }
  const srcIds = new Set();
  for(const e of [...q, ...mo]) for(const mm of Object.values(e.metrics)) if(mm&&mm.src) srcIds.add(mm.src);
  const srcs = [...srcIds].map(id=>SRC[id]).filter(Boolean);
  drawer.innerHTML = `
    <button class="close" onclick="closeDrawer()">✕</button>
    <div class="d-tier">${TIER[c.tier]} · ${c.market}${c.note?' · '+c.note:''}</div>
    <div class="d-name">${c.name}</div>
    <div class="d-tk mono">${c.ticker} · 自然季对齐(fiscal_offset=${c.fiscal_offset}) · 单位：${c.currency}</div>
    <div class="d-sec"><h3>营收 · 最近 ${shown.length} 季</h3><div class="bars">${bars}</div></div>
    <div class="d-sec"><h3>指标(${latest.period})</h3><table class="ktable">${rows}</table></div>
    <div class="d-sec"><h3>溯源(${srcs.length} 份官方文件)</h3>
      ${srcs.map(s=>`<div class="src" style="margin-bottom:10px">
        <a href="${s.url}" target="_blank" rel="noopener">${s.id} · ${s.type}</a>
        <div class="meta">${s.locator||''} · 采集于 ${s.fetched_at}${s.archive?' · 归档：'+s.archive:''}</div></div>`).join('') || '<div class="src">— 暂无溯源记录</div>'}
    </div>`;
  drawer.classList.add('on'); overlay.classList.add('on'); drawer.setAttribute('aria-hidden','false');
  drawer.querySelectorAll('.bar i').forEach((el,k)=>setTimeout(()=>el.style.height=el.dataset.h+'%', 80+k*70));
}
function closeDrawer(){ drawer.classList.remove('on'); overlay.classList.remove('on');
  drawer.setAttribute('aria-hidden','true'); if(sel) sel.classList.remove('selected'); sel=null; }
overlay.onclick=closeDrawer;
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDrawer()});
