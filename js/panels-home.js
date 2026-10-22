/* js/panels-home.js — 首页增强面板: ① 传导时滞曲线(通俗版) ② 估值散点(全标注+自适应轴) ③ 云厂指引注入 */
(function(){
'use strict';
const C = (typeof COMPANIES!=='undefined')?COMPANIES:[];
const byName = id => (C.find(c=>c.id===id)||{});
const COLORS = {nvda:'#d97757', tsmc:'#7fa56b', hynix:'#8a9ac4', quanta:'#d9a857', samsung:'#b087c0', wiwynn:'#6fb3ae'};

/* ═══ ① 传导链时滞曲线(通俗版) ═══ */
(function(){
  const host = document.getElementById('lagpanel'); if(!host) return;
  const SERIES = [
    {id:'nvda',   label:'英伟达 · AI芯片',      stage:'第①棒 最先动'},
    {id:'tsmc',   label:'台积电 · 芯片制造',     stage:'第②棒 慢约1季'},
    {id:'hynix',  label:'SK海力士 · 存储涨价',   stage:'第②棒 慢约1季'},
    {id:'quanta', label:'广达 · AI服务器组装',   stage:'第③棒 慢约2季'},
    {id:'samsung',label:'三星 · 参考', dim:true},
    {id:'wiwynn', label:'纬颖 · 参考', dim:true},
  ];
  const allPeriods = new Set();
  const data = {};
  for(const s of SERIES){
    const q = quarterly(BYCO_H[s.id]||[]);
    const pts = [];
    for(let i=4;i<q.length;i++){
      const y = yoyAt(q,i);
      if(y!=null){ pts.push({period:q[i].period, y}); allPeriods.add(q[i].period); }
    }
    data[s.id] = pts;
  }
  const periods = [...allPeriods].sort();
  if(!periods.length){ host.innerHTML='<div class="lp-empty">历史季数据积累中…</div>'; return; }
  const W=880, H=400, L=52, R=112, T=30, B=44;
  const x = p => L + (W-L-R) * periods.indexOf(p)/Math.max(periods.length-1,1);
  let maxV = 0; for(const s of SERIES) for(const pt of data[s.id]) maxV=Math.max(maxV,pt.y);
  maxV = Math.min(Math.ceil(maxV/20)*20, 300);
  const y = v => T + (H-T-B) * (1 - Math.min(v,maxV)/maxV);
  const line = pts => pts.map((pt,i)=>(i?'L':'M')+x(pt.period).toFixed(1)+' '+y(pt.y).toFixed(1)).join(' ');
  const cn = {};
  for(const s of SERIES) cn[s.id] = (byName(s.id).name||s.id);
  let g = '';
  for(let v=0; v<=maxV; v+=maxV/5){
    g += `<line x1="${L}" y1="${y(v)}" x2="${W-R}" y2="${y(v)}" stroke="rgba(255,255,255,.07)"/>`+
         `<text x="${L-8}" y="${y(v)+4}" text-anchor="end" class="lp-tick">${Math.round(v)}%</text>`;
  }
  for(const p of periods)
    g += `<text x="${x(p)}" y="${H-16}" text-anchor="middle" class="lp-tick">${p.replace('20','').replace('Q','年Q')}</text>`;
  g += `<line x1="${L}" y1="${y(0)}" x2="${W-R}" y2="${y(0)}" stroke="rgba(255,255,255,.18)"/>`;
  let paths='', legend='';
  for(const s of SERIES){
    const pts = data[s.id]; if(!pts.length) continue;
    const col = COLORS[s.id]||'#999', op = s.dim? '0.45':'1';
    paths += `<path d="${line(pts)}" fill="none" stroke="${col}" stroke-width="${s.dim?1.2:2.4}" opacity="${op}" stroke-linecap="round" stroke-linejoin="round"/>`;
    for(const pt of pts) if(!s.dim)
      paths += `<circle cx="${x(pt.period).toFixed(1)}" cy="${y(pt.y).toFixed(1)}" r="3" fill="${col}" opacity=".9"><title>${cn[s.id]} ${pt.period}：营收同比 ${pt.y.toFixed(1)}%</title></circle>`;
    const last = pts[pts.length-1];
    if(!s.dim){
      paths += `<circle cx="${x(last.period)}" cy="${y(last.y)}" r="4" fill="${col}"/>`+
        `<text x="${x(last.period)+8}" y="${y(last.y)-7}" class="lp-last" fill="${col}">${cn[s.id]} ${last.y.toFixed(0)}%</text>`;
    }
    legend += `<span class="lp-lg${s.dim?' dim':''}"><i style="background:${col}"></i>${s.label}${s.stage?'<em>'+s.stage+'</em>':''}</span>`;
  }
  host.innerHTML = `
    <div class="kick">PROPAGATION · 传导的时间差</div>
    <h2>谁先涨，谁后涨 —— 沿产业链逐棒兑现</h2>
    <div class="lp-sub">纵轴=营收同比增速。曲线的位置越高、出现得越早，说明景气启动越早。</div>
    <div class="lp-wrap"><svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="传导时滞曲线">${g}${paths}</svg></div>
    <div class="lp-legend">${legend}</div>
    <div class="lp-foot"><b>怎么看这张图：</b>英伟达先接到云厂订单、营收先涨 → 约 1 个季度后台积电的晶圆收入跟上、海力士的存储开始涨价 → 再过约 1 个季度，广达的 AI 服务器才整机组装出货、营收兑现。<b>错开的这 1-2 个季度就是"时间差"</b>——上游报表里已经兑现的增速，就是下游未来 1-2 个季度的先行指标。悬停圆点可看各公司各季增速。三星/纬颖(淡色)为参考序列。</div>`;
})();

/* ═══ ② 估值散点(全公司标注 + 自适应横轴) ═══ */
(function(){
  const host = document.getElementById('scatter'); if(!host) return;
  if(typeof VALUATION==='undefined'){ host.style.display='none'; return; }
  const pts = [];
  for(const [cid,q] of Object.entries(VALUATION.quotes)){
    const co = byName(cid); if(!co.id) continue;
    if(!q.pe || q.pe<=0 || q.pe>320) continue;
    const cq = quarterly(BYCO_H[cid]||[]);
    let yoy = null;
    if(cq.length>=5){ const yy = yoyAt(cq,cq.length-1); if(yy!=null) yoy=yy; }
    if(yoy==null) continue;
    pts.push({cid, name:co.name, market:co.market||'', pe:q.pe, yoy, signal:signalOf(cq)});
  }
  if(pts.length<4){ host.innerHTML='<div class="lp-empty">估值数据积累中…</div>'; return; }
  // 自适应横轴:贴合实际数据范围,负增长不占多余空间
  const ys = pts.map(p=>p.yoy);
  const X0 = Math.floor(Math.min(-10, Math.min(...ys)-5)/10)*10;
  const X1 = Math.ceil((Math.max(...ys)+15)/20)*20;
  const Y1 = Math.ceil(Math.max(...pts.map(p=>p.pe))/40)*40;
  const W=980, H=520, L=56, R=26, T=30, B=48;
  const x = v => L + (W-L-R)*(Math.max(Math.min(v,X1),X0)-X0)/(X1-X0);
  const y = v => T + (H-T-B)*(1-Math.min(Math.max(v,0),Y1)/Y1);
  const SCOL = {green:'#7fa56b', yellow:'#d9a857', red:'#c05757', gray:'#87867f'};
  // 自适应刻度
  const xStep = Math.max(10, Math.round((X1-X0)/6/10)*10);
  const yStep = Math.max(20, Math.round(Y1/5/20)*20);
  let g='';
  for(let v=X0; v<=X1; v+=xStep) g+=`<line x1="${x(v)}" y1="${T}" x2="${x(v)}" y2="${H-B}" stroke="rgba(255,255,255,.06)"/><text x="${x(v)}" y="${H-24}" text-anchor="middle" class="lp-tick">${v>=0?'+'+v:v}%</text>`;
  for(let v=0; v<=Y1; v+=yStep) g+=`<line x1="${L}" y1="${y(v)}" x2="${W-R}" y2="${y(v)}" stroke="rgba(255,255,255,.06)"/><text x="${L-8}" y="${y(v)+4}" text-anchor="end" class="lp-tick">${v}x</text>`;
  g+=`<line x1="${x(0)}" y1="${T}" x2="${x(0)}" y2="${H-B}" stroke="rgba(255,255,255,.2)"/>`;
  // PEG≈1 参考线(只在轴范围内画)
  const pegEnd = Math.min(X1, Y1);
  if(pegEnd>0) g+=`<line x1="${x(0)}" y1="${y(0)}" x2="${x(pegEnd)}" y2="${y(pegEnd)}" stroke="rgba(217,119,87,.55)" stroke-dasharray="5 5"/><text x="${x(pegEnd*0.8)}" y="${y(pegEnd*0.8)-8}" class="lp-tick" fill="#d97757" text-anchor="middle">PEG≈1(估值与增速匹配)</text>`;
  // 全公司标注:贪心防重叠布局
  const est = t => { let w=0; for(const ch of t) w += ch.charCodeAt(0)>255?10:5.6; return w; };
  const placed = [];
  const fits = (bx,by,w,h) => !placed.some(b=> bx<b.x+b.w && bx+w>b.x && by<b.y+b.h && by+h>b.y);
  pts.sort((a,b)=>b.yoy-a.yoy); // 高增长的先挑位置
  let dots='';
  for(const p of pts){
    const col = SCOL[p.signal]||'#87867f';
    const px = x(p.yoy), py = y(p.pe), tw = est(p.name)+4, th = 13;
    let lx=null, ly=null;
    const cands = [[px+8,py-4],[px+8,py+9],[px-8-tw,py-4],[px-8-tw,py+9],[px+8,py-17],[px+8,py+22],[px-tw/2,py-19],[px-tw/2,py+24]];
    for(const [cx,cy] of cands){
      if(cx>L && cx+tw<W-R && cy>T+2 && fits(cx,cy,tw,th)){ lx=cx; ly=cy; break; }
    }
    if(lx==null){ // 兜底:垂直步进找空位
      for(let dy=-56; dy<=56 && lx==null; dy+=13){
        for(const cx of [px+8, px-8-tw]){
          const cy = py+dy-4;
          if(cx>L && cx+tw<W-R && cy>T+2 && fits(cx,cy,tw,th)){ lx=cx; ly=cy; break; }
        }
      }
    }
    dots += `<circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="4.5" fill="${col}" fill-opacity=".9" stroke="rgba(0,0,0,.35)"><title>${p.name} · PE(TTM) ${p.pe.toFixed(1)}x · 营收YoY ${p.yoy.toFixed(1)}% · ${{green:'🟢加速',yellow:'🟡温和',red:'🔴负增长',gray:'⚪数据不足'}[p.signal]||p.signal}</title></circle>`;
    if(lx!=null){ placed.push({x:lx,y:ly,w:tw,h:th}); dots += `<text x="${lx.toFixed(1)}" y="${(ly+9).toFixed(1)}" class="sp-label">${p.name}</text>`; }
  }
  const lg = Object.entries(SCOL).map(([k,v])=>`<span class="lp-lg"><i style="background:${v}"></i>${({green:'🟢 加速',yellow:'🟡 温和增长',red:'🔴 负增长',gray:'⚪ 数据不足'})[k]}</span>`).join('');
  host.innerHTML = `
    <div class="kick">VALUATION × GROWTH</div>
    <h2>贵不贵，看增速 —— 估值 vs 成长全景</h2>
    <div class="lp-sub">纵轴=PE(TTM)，横轴=最新季营收同比。落在虚线(PEG≈1)下方=增速跑赢估值，上方=估值快过增速。</div>
    <div class="lp-wrap"><svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="估值散点">${g}${dots}</svg></div>
    <div class="lp-legend">${lg}<span class="lp-lg dim">共 ${pts.length} 家(亏损/PE&gt;320 不显示) · 全部已标注</span></div>
    <div class="lp-foot">横轴范围自适应数据(负增长不过度占幅)。快照 ${VALUATION.fetched_at} · 腾讯自选股终端取数,每周一自动更新。估值仅供参照,不参与信号合成;悬停圆点看精确数值。</div>`;
})();

/* ═══ ③ 云厂 FY26 指引注入 capex 面板 ═══ */
(function(){
  const foot = document.querySelector('.cp-foot'); if(!foot || typeof GUIDANCE==='undefined') return;
  if(foot.dataset.gdDone) return; foot.dataset.gdDone = '1';
  const rows = GUIDANCE.entries.map(e=>{
    const v = e.point? ('$'+e.capex_high+'B') : ('$'+e.capex_low+'-'+e.capex_high+'B');
    return `<span class="gd-item"><b>${e.label}</b> ${v}</span>`;
  }).join('');
  const tot = GUIDANCE.entries.filter(e=>e.company!=='orcl').reduce((s,e)=>s+(e.point?e.capex_high:(e.capex_low+e.capex_high)/2),0);
  foot.insertAdjacentHTML('beforeend',
    `<div class="gd-row"><span class="gd-kick">FY26 全年指引</span>${rows}
     <span class="gd-item"><b>Top-4 合计</b> ≈$${Math.round(tot)}B</span></div>
     <div class="gd-note">指引为电话会口径(${GUIDANCE.fetched_at} 快照): 谷歌 $195-205B(上调) · Meta $130-145B(收窄) · 微软 ~$175B · 亚马逊 $220B(上调) · 甲骨文 ~$35B。指引会随电话会滚动,以最新披露为准。</div>`);
})();
})();
