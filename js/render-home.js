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

/* ── 云厂 capex 传导 + Kill Switch ── */
const CLOUD5 = [['msft','微软'],['goog','谷歌'],['amzn','亚马逊'],['meta','Meta'],['orcl','甲骨文']];
const TOP4 = ['msft','goog','amzn','meta'];
const KS_THRESHOLD = 14;
function capexAt(cid, period){
  const q = quarterly(BYCO_H[cid]||[]);
  const e = q.find(x=>x.period===period && x.metrics.capex && x.metrics.capex.value!=null);
  return e ? usdM(e.metrics.capex.value, e.metrics.capex.unit, FX_RATES) : null;
}
function latestCapexOf(cid){
  const q = quarterly(BYCO_H[cid]||[]);
  for(let i=q.length-1;i>=0;i--){ if(q[i].metrics.capex && q[i].metrics.capex.value!=null) return {m:q[i].metrics.capex, period:q[i].period}; }
  return null;
}
const prevYearP = p => (+p.slice(0,4)-1)+p.slice(4);
(function(){
  const ksEl = document.getElementById('killswitch'); if(!ksEl) return;
  // 最新共同 capex 季
  const latest = TOP4.map(latestCapexOf).filter(Boolean).map(x=>x.period).sort();
  const curP = latest[latest.length-1]; const yagoP = prevYearP(curP);
  const curSum = TOP4.reduce((s,c)=>s+(capexAt(c,curP)||0),0);
  const yagoSum = TOP4.reduce((s,c)=>s+(capexAt(c,yagoP)||0),0);
  const ksYoY = yagoSum>0 ? (curSum/yagoSum-1)*100 : null;
  const status = ksYoY==null ? {t:'数据不足',cls:'ks-gray'} :
    ksYoY < KS_THRESHOLD ? {t:'⚠️ 已跌破阈值',cls:'ks-red'} :
    ksYoY < KS_THRESHOLD*2 ? {t:'🟡 逼近阈值',cls:'ks-amber'} : {t:'🟢 远离阈值',cls:'ks-green'};
  const barW = ksYoY==null ? 0 : Math.min(100, ksYoY/(KS_THRESHOLD*4)*100);
  ksEl.innerHTML = `
    <div class="ks-status ${status.cls}">${status.t}</div>
    <div class="ks-big num">${ksYoY==null?'—':(ksYoY>=0?'+':'')+ksYoY.toFixed(1)+'%'}</div>
    <div class="ks-sub">Top-4 合计 CAPEX 同比 · ${curP}（上年同期基数 ${yagoP}）</div>
    <div class="ks-num-row"><span class="num">${curSum?fmtBig(curSum):'—'}</span> ← 合计（vs 上年 ${yagoSum?fmtBig(yagoSum):'—'}）</div>
    <div class="ks-bar"><i class="${status.cls.replace('ks-','')}" style="width:${barW}%"></i><b style="left:${Math.min(100,KS_THRESHOLD/(KS_THRESHOLD*4)*100)}%"></b></div>
    <div class="ks-scale"><span>0%</span><span>阈值 +14%</span><span>+56%</span></div>`;
})();
(function(){
  const listEl = document.getElementById('capexList'); if(!listEl) return;
  const rows = CLOUD5.map(([cid,name])=>{
    const got = latestCapexOf(cid); if(!got) return '';
    const y = capexAt(cid, prevYearP(got.period));
    const cur = usdM(got.m.value, got.m.unit, FX_RATES);
    const yoy = y!=null&&y>0 ? (cur/y-1)*100 : null;
    return `<div class="cpx-row">
      <span class="cpx-name">${name}</span>
      <span class="cpx-val num">${fmtBig(cur)}</span>
      <span class="cpx-yoy num ${yoy==null?'':yoy<0?'down':'up'}">${yoy==null?'—':(yoy>=0?'+':'')+yoy.toFixed(0)+'% YoY'}</span>
      <span class="cpx-p">${got.period}</span></div>`;
  }).join('');
  listEl.innerHTML = rows;
})();

/* ── 披露动态跑马灯(由 SOURCES 生成; 头部插入下一财报) ── */
const latestPeriodByCo = {};
for(const e of METRICS){ const c=e.company;
  if(!latestPeriodByCo[c] || periodKey(e.period)>periodKey(latestPeriodByCo[c])) latestPeriodByCo[c]=e.period; }
const TICKS = Object.entries(latestPeriodByCo)
  .sort((a,b)=>periodKey(b[1])-periodKey(a[1])).slice(0,14)
  .map(([cid,p])=>`${(COMPANIES.find(c=>c.id===cid)||{}).name||cid} ${p} 已披露`);
const NEXTS = (typeof nextEarnings==='function' ? nextEarnings() : []).slice(0,5)
  .map(e=>`下一财报：${e.name} ${e.event} · ${e.date.slice(5).replace('-','/')}${e.est?'(预计)':''}`);
const tk = document.getElementById('ticker');
tk.innerHTML = (NEXTS.concat(TICKS)).length
  ? NEXTS.concat(TICKS, NEXTS.concat(TICKS)).map(t=>`<span><i class="t-dot">●</i><b>${t}</b></span>`).join('')
  : '<span><b>首批财报数据采集进行中…</b></span>';

/* -- 导航栏:最近采集日期(取 SOURCES 最大 fetched_at) -- */
(function(){
  const el = document.getElementById('tzNote'); if(!el) return;
  const latest = SOURCES.reduce((m,s)=> (s.fetched_at>m ? s.fetched_at : m), '1970-01-01');
  el.textContent = '北京时区 · 最近采集 ' + latest.replace(/-/g,'.') + ' · 全部数字回链官方原文';
})();
