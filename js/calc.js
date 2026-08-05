/* js/calc.js — 公开公式层(浏览器与 Node 双端;YoY/QoQ/信号灯的唯一实现) */
(function(root, factory){
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else Object.assign(root, api);
})(typeof self !== 'undefined' ? self : globalThis, function(){

const UNIT_LABEL = {USD_M:'USD',CNY_YI:'CNY',EUR_M:'EUR',TWD_M:'TWD',KRW_B:'KRW',JPY_M:'JPY'};

/* 期间:"2026Q2"→季度;"2026M6"→月度(不参与季度序列) */
function periodKey(p){
  const q = /^(\d{4})Q([1-4])$/.exec(p); if(q) return +q[1]*10 + (+q[2]);
  const m = /^(\d{4})M(\d{1,2})$/.exec(p); if(m) return +m[1]*100 + (+m[2]);
  return 0;
}
const isQuarter = p => /^\d{4}Q[1-4]$/.test(p);

/* METRICS → {companyId: [{period, metrics}]} 按期间升序 */
function byCompany(METRICS){
  const map = {};
  for(const e of METRICS){ (map[e.company] = map[e.company] || []).push(e); }
  for(const k in map) map[k].sort((a,b)=>periodKey(a.period)-periodKey(b.period));
  return map;
}
const quarterly = entries => (entries||[]).filter(e=>isQuarter(e.period));
const monthly   = entries => (entries||[]).filter(e=>!isQuarter(e.period));

const revOf = e => (e && e.metrics.revenue && e.metrics.revenue.value!=null) ? e.metrics.revenue.value : null;
function yoyAt(q, i){ const a=revOf(q[i]), b=revOf(q[i-4]); if(a==null||b==null||b===0) return null; return (a/b-1)*100; }
function qoqAt(q, i){ const a=revOf(q[i]), b=revOf(q[i-1]); if(a==null||b==null||b===0) return null; return (a/b-1)*100; }

/* 信号灯:🟢 YoY>20% 且加速 · 🟡 正增长减速或 0–20% · 🔴 负增长 · ⚪ 数据不足 */
function signalOf(q){
  if(!q || q.length<5) return 'gray';
  const i=q.length-1, y0=yoyAt(q,i), y1=yoyAt(q,i-1);
  if(y0==null||y1==null) return 'gray';
  if(y0<0) return 'red';
  if(y0>20 && y0>y1) return 'green';
  return 'yellow';
}

/* 原始币种显示 */
function fmt(v, unit){
  if(v==null) return '—';
  switch(unit){
    case 'USD_M': return v>=1000 ? '$'+(v/1000).toFixed(1)+'B' : '$'+v.toLocaleString()+'M';
    case 'EUR_M': return v>=1000 ? '€'+(v/1000).toFixed(1)+'B' : '€'+v.toLocaleString()+'M';
    case 'CNY_YI': return '¥'+v.toLocaleString()+'亿';
    case 'TWD_M': return v>=1000 ? 'NT$'+(v/1000).toFixed(1)+'B' : 'NT$'+v.toLocaleString()+'M';
    case 'KRW_B': return v>=1000 ? '₩'+(v/1000).toFixed(1)+'T' : '₩'+v.toLocaleString()+'B';
    case 'JPY_M': return v>=1000 ? 'JP¥'+(v/1000).toFixed(1)+'B' : 'JP¥'+v.toLocaleString()+'M';
    default: return String(v);
  }
}
const pct = v => v==null ? '—' : (v>=0?'+':'')+v.toFixed(1)+'%';

/* 汇总折算(仅主页) */
function usdM(v, unit, FX){
  if(v==null) return null;
  const r = FX.perUSD;
  switch(unit){
    case 'USD_M': return v;
    case 'EUR_M': return v / r.EUR;
    case 'CNY_YI': return v*100 / r.CNY;
    case 'TWD_M': return v / r.TWD;
    case 'KRW_B': return v*1000 / r.KRW;
    case 'JPY_M': return v / r.JPY;
    default: return null;
  }
}
function fmtBig(vM){ if(vM==null) return '—'; return vM>=1e6 ? '$'+(vM/1e6).toFixed(2)+'T' : '$'+Math.round(vM/1e3)+'B'; }

return {UNIT_LABEL, periodKey, isQuarter, byCompany, quarterly, monthly,
        revOf, yoyAt, qoqAt, signalOf, fmt, pct, usdM, fmtBig};
});
