/* js/panels-map.js — 地图页增强: ① 环节×季度热力图 ② backlog 订单覆盖度 ③ 公司对比模式
   ④ 数据导出 CSV/JSON ⑤ 信号拐点提醒(依赖 data/signals-history.js) */
(function(){
'use strict';
const LPANEL = 'lp-panel';
const LINNER = 'lp-inner';

/* ═══ ① 环节 × 季度 YoY 热力图 ═══ */
(function(){
  const main = document.querySelector('main');
  if(!main || !document.getElementById('map')) return;
  const sec = document.createElement('section'); sec.className = LPANEL;
  sec.innerHTML = `<div class="${LINNER}" id="heatmap"></div>`;
  const mapSec = document.getElementById('map');
  (mapSec? mapSec : main).insertAdjacentElement(mapSec? 'afterend':'beforeend', sec); // 放在地图列表之后、订单可见度之前
  const host = document.getElementById('heatmap');
  // 最近 3 个季度轴(随数据自动滚动,当前=2025Q4~2026Q2)
  const periods = [];
  {
    let latest = '';
    for(const e of METRICS){ if(isQuarter(e.period) && e.period>latest) latest = e.period; }
    if(!latest) latest = '2026Q2';
    let y = +latest.slice(0,4), q = +latest.slice(5);
    for(let k=0;k<3;k++){ periods.unshift(y+'Q'+q); q--; if(q===0){q=4;y--;} }
  }
  const cell = v => {
    if(v==null) return 'hm-v hm-n';
    let bg, fg='#faf9f5';
    if(v<=0){ const a=Math.min(Math.abs(v)/30,1)*0.55+0.1; bg=`rgba(192,87,87,${a.toFixed(2)})`; }
    else { const a=Math.min(Math.sqrt(v)/Math.sqrt(120),1)*0.62+0.08; bg=`rgba(127,165,107,${a.toFixed(2)})`; }
    return `hm-v" style="background:${bg};color:${fg}`;
  };
  let rows = '';
  for(const L of LANE_DEFS){
    const cells = periods.map(p=>{
      const vals = [];
      for(const c of COMPANIES){
        if(c.lane!==L.lane) continue;
        const q = quarterly(BYCO[c.id]||[]);
        const idx = q.findIndex(e=>e.period===p);
        if(idx>=4){ const y = yoyAt(q,idx); if(y!=null) vals.push(y); }
      }
      if(!vals.length) return `<div class="hm-v hm-n"></div>`;
      vals.sort((a,b)=>a-b);
      const med = vals[Math.floor(vals.length/2)];
      return `<div class="${cell(med)}" title="${L.cn} ${p}: 中位 YoY ${med.toFixed(1)}% · 样本${vals.length}家">${med>=100?Math.round(med):med.toFixed(0)}</div>`;
    }).join('');
    const lsig = (()=>{ const s = COMPANIES.filter(c=>c.lane===L.lane).map(c=>signalOf(quarterly(BYCO[c.id]||[]))).filter(s=>s!=='gray');
      if(!s.length) return 'gray';
      if(s.filter(x=>x==='green').length>=s.length/2) return 'green';
      if(s.filter(x=>x==='red').length>s.length/2) return 'red';
      return 'yellow'; })();
    rows += `<div class="hm-row"><div class="hm-lane"><span class="dot ${lsig}"></span>${String(L.lane).padStart(2,'0')} ${L.cn}</div><div class="hm-cells">${cells}</div></div>`;
  }
  host.innerHTML = `
    <div class="kick">PULSE MATRIX · 全链景气矩阵</div>
    <h2>15 环节 × 最近 3 季 —— 营收 YoY 中位数</h2>
    <div class="hm-scroll"><div class="hm-grid">
      <div class="hm-row hm-head"><div class="hm-lane">环节</div><div class="hm-cells">${periods.map(p=>`<div class="hm-v hm-h">${p.replace('20','').replace('Q','·Q')}</div>`).join('')}</div></div>
      ${rows}
    </div></div>
    <div class="lp-foot">每格 = 环节内已披露公司 YoY 的中位数 · 颜色越绿增长越强(√压缩,负增长红色) · 空格=该季无足够样本 · 悬停看明细。逐行看水平方向=单个环节的加速/回落节奏;逐列看垂直方向=同一季度各环节的冷热对比。</div>`;
})();

/* ═══ ② backlog 订单覆盖度 ═══ */
(function(){
  const host = document.getElementById('backlog'); if(!host) return;
  const items = [];
  for(const c of COMPANIES){
    const q = quarterly(BYCO[c.id]||[]); if(!q.length) continue;
    let bl=null, blP=null, rev=null, revP=null, blUnit=null;
    for(let k=q.length-1;k>=0;k--){
      const m = q[k].metrics;
      if(bl==null && m.backlog && m.backlog.value!=null){ bl=m.backlog.value; blP=q[k].period; blUnit=m.backlog.unit||c.currency; }
      if(rev==null && m.revenue && m.revenue.value!=null){ rev=m.revenue.value; revP=q[k].period; }
      if(bl!=null&&rev!=null) break;
    }
    if(bl==null||rev==null||rev===0) continue;
    const cov = bl/rev;
    if(cov>0.3 && cov<40) items.push({c, bl, blP, rev, revP, cov, unit:blUnit||c.currency});
  }
  if(!items.length){ host.parentElement.style.display='none'; return; }
  items.sort((a,b)=>b.cov-a.cov);
  const maxCov = Math.max(...items.map(x=>x.cov));
  host.innerHTML = `
    <div class="kick">ORDER VISIBILITY · 订单可见度</div>
    <h2>Backlog ÷ 单季营收 —— 比增速更前瞻</h2>
    <div class="bl-rows">${items.map(x=>`
      <div class="bl-row">
        <div class="bl-name">${x.c.name}</div>
        <div class="bl-bar"><i style="width:${(x.cov/maxCov*100).toFixed(0)}%"></i></div>
        <div class="bl-cov num">${x.cov.toFixed(1)}×</div>
        <div class="bl-meta">${fmt(x.bl,x.unit)} backlog[${shortPeriod(x.blP)}] ÷ 营收 ${fmt(x.rev,x.c.currency)}[${shortPeriod(x.revP)}]</div>
      </div>`).join('')}
    </div>
    <div class="lp-foot">覆盖倍数 = 在手订单 ÷ 最近单季营收,相当于"已有订单可支撑几个季度的收入"。口径差异(合同额/交付额)见各公司抽屉溯源,只标记不调和。</div>`;
})();

/* ═══ ③ 对比模式 ═══ */
(function(){
  const drawer = document.getElementById('drawer'); if(!drawer) return;
  const picked = []; // {id,name}
  // 抽屉里的加入对比按钮(由 render-map.js 注入 .cmp-add)
  drawer.addEventListener('click', e=>{
    const b = e.target.closest('.cmp-add'); if(!b) return;
    const id = b.dataset.id, name = b.dataset.name;
    if(picked.some(x=>x.id===id)){ toast('已在对比列表'); return; }
    if(picked.length>=3){ toast('最多 3 家,先移除一家'); return; }
    picked.push({id,name}); renderBar();
    b.textContent='✓ 已加入'; setTimeout(()=>{b.textContent='＋ 对比';},1200);
  });
  function toast(msg){
    const t = document.createElement('div'); t.className='cmp-toast'; t.textContent=msg;
    document.body.appendChild(t); setTimeout(()=>t.classList.add('on'),10); setTimeout(()=>t.remove(),2200);
  }
  function renderBar(){
    let bar = document.getElementById('cmpbar');
    if(!picked.length){ if(bar) bar.remove(); return; }
    if(!bar){ bar = document.createElement('div'); bar.id='cmpbar'; document.body.appendChild(bar); }
    bar.innerHTML = picked.map((x,i)=>`<span class="cmp-chip" data-i="${i}">${x.name}<b>✕</b></span>`).join('')
      + `<button class="cmp-go">对比 →</button>`;
    bar.querySelectorAll('.cmp-chip b').forEach(el=>el.onclick=ev=>{
      ev.stopPropagation();
      const i = +el.parentElement.dataset.i; picked.splice(i,1); renderBar();
    });
    bar.querySelector('.cmp-go').onclick = showCompare;
  }
  function showCompare(){
    const qs = picked.map(x=>({x, q:quarterly(BYCO[x.id]||[])}));
    const co = id => COMPANIES.find(c=>c.id===id);
    const val = (q,key)=>{ const m=q[q.length-1].metrics; return m[key]&&m[key].value!=null? m[key].value : null; };
    const R = [
      ['信号灯', (q,c)=>{const s=signalOf(q); return `<span class="dot ${s}"></span>`;}],
      ['最新期间', q=>shortPeriod(q[q.length-1].period)],
      ['营收', (q,c)=>fmt(revOf(q[q.length-1]),c.currency)],
      ['YoY', q=>pct(yoyAt(q,q.length-1))],
      ['上季 YoY(加速度)', q=>q.length>=2?pct(yoyAt(q,q.length-2)):'—'],
      ['QoQ', q=>pct(qoqAt(q,q.length-1))],
      ['毛利率', q=>{const g=val(q,'gross_margin'); return g!=null?(g*100).toFixed(1)+'%':'—';}],
      ['净利润', (q,c)=>{const n=val(q,'net_income'); return n!=null?fmt(n,c.currency):'—';}],
      ['PE(TTM)', (q,c)=>{const v=(typeof VALUATION!=='undefined')&&VALUATION.quotes[c.id]; return v&&v.pe>0? v.pe.toFixed(1)+'x':'—';}],
      ['PB', (q,c)=>{const v=(typeof VALUATION!=='undefined')&&VALUATION.quotes[c.id]; return v&&v.pb>0? v.pb.toFixed(1)+'x':'—';}],
      ['年初至今', (q,c)=>{const v=(typeof VALUATION!=='undefined')&&VALUATION.quotes[c.id]; return v?(v.ytd>=0?'+':'')+v.ytd.toFixed(0)+'%':'—';}],
    ];
    let modal = document.getElementById('cmpmodal');
    if(!modal){ modal = document.createElement('div'); modal.id='cmpmodal';
      modal.innerHTML='<div class="cmp-box"></div>'; document.body.appendChild(modal);
      modal.onclick=e=>{ if(e.target===modal) modal.classList.remove('on'); }; }
    modal.querySelector('.cmp-box').innerHTML = `
      <button class="close" onclick="document.getElementById('cmpmodal').classList.remove('on')">✕</button>
      <div class="d-tier">COMPARE · 并排对比(估值快照 ${typeof VALUATION!=='undefined'?VALUATION.fetched_at:'—'})</div>
      <div class="cmp-table-wrap"><table class="ktable cmp-table">
        <tr><td></td>${qs.map(({x})=>`<th>${x.name}</th>`).join('')}</tr>
        ${R.map(([label,fn])=>`<tr><td>${label}</td>${qs.map(({x,q})=>`<td class="num">${fn(q,co(x.id))}</td>`).join('')}</tr>`).join('')}
      </table></div>
      <div class="lp-foot" style="margin-top:14px">在任意公司抽屉点「＋ 对比」添加(最多 3 家) · Esc 关闭</div>`;
    modal.classList.add('on');
  }
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ const m=document.getElementById('cmpmodal'); if(m) m.classList.remove('on'); }});
})();

/* ═══ ④ 信号拐点提醒 ═══ */
(function(){
  if(typeof SIGNAL_HISTORY==='undefined' || !SIGNAL_HISTORY.length) return;
  const bar = document.createElement('div'); bar.className='sigdiff';
  const last = SIGNAL_HISTORY[SIGNAL_HISTORY.length-1];
  if(SIGNAL_HISTORY.length<2){
    bar.innerHTML = `<span class="sd-note">📍 信号快照自 ${last.date} 开始记录 · 次日起此处显示拐点变化(🟢→🟡 / 🟡→🔴 等)</span>`;
  } else {
    const prev = SIGNAL_HISTORY[SIGNAL_HISTORY.length-2];
    const changes = [];
    for(const [cid,s] of Object.entries(last.signals)){
      const p = prev.signals[cid];
      if(p && p!==s){
        const co = COMPANIES.find(c=>c.id===cid); if(!co) continue;
        changes.push({name:co.name, from:p, to:s});
      }
    }
    const order = {red:0,yellow:1,green:2,gray:3};
    changes.sort((a,b)=>(order[a.to]-order[b.to])||(order[b.from]-order[a.from]));
    bar.innerHTML = changes.length
      ? `<span class="sd-k">信号拐点 ${prev.date} → ${last.date}:</span>` + changes.map(c=>
          `<span class="sd-item"><b>${c.name}</b> <i class="dot ${c.from}"></i>→<i class="dot ${c.to}"></i></span>`).join('')
      : `<span class="sd-note">✓ ${prev.date} → ${last.date} 信号无变化 · 全部 ${Object.keys(last.signals).length} 家稳定</span>`;
  }
  const fb = document.querySelector('.filterbar');
  const parent = (fb && fb.parentElement) || document.getElementById('map');
  if(parent) parent.insertBefore(bar, fb? fb.nextSibling : parent.firstChild);
})();
})();
