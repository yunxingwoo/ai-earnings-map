/* ═══ 科技感动效:粒子网络 / 数字滚动 / 滚动显现 / 跑马灯
   全部遵守 prefers-reduced-motion;无依赖,file:// 直接可用 ═══ */
(function(){
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced){ document.querySelectorAll('.reveal').forEach(e=>e.classList.add('in')); return; }

  /* ── 数字滚动(读取页面上已计算好的最终值) ── */
  document.querySelectorAll('[data-count]').forEach(el=>{
    const m = el.textContent.match(/^([^\d]*)([\d,.]+)(.*)$/);
    if(!m) return;
    const [,pre,numStr,suf] = m;
    const target = parseFloat(numStr.replace(/,/g,''));
    const dec = (numStr.split('.')[1]||'').length;
    const t0 = performance.now(), dur = 1100;
    (function tick(t){
      const p = Math.min(1,(t-t0)/dur), e = 1-Math.pow(1-p,3);
      el.textContent = pre + (target*e).toFixed(dec) + suf;
      if(p<1) requestAnimationFrame(tick);
    })(t0);
  });

  /* ── 滚动显现(按同级序号交错) ── */
  const io = new IntersectionObserver(es=>{
    es.forEach(e=>{
      if(!e.isIntersecting) return;
      const idx = [...e.target.parentNode.children].indexOf(e.target);
      e.target.style.transitionDelay = Math.min((idx%8)*45,320)+'ms';
      e.target.classList.add('in');
      io.unobserve(e.target);
    });
  },{threshold:.1});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  /* ── Hero 粒子网络 ── */
  const cv = document.getElementById('fxCanvas');
  if(cv){
    const ctx = cv.getContext('2d');
    const COLORS = ['217,119,87','127,165,107','135,134,127'];
    let W,H,pts=[];
    function resize(){
      W = cv.width  = cv.offsetWidth  * devicePixelRatio;
      H = cv.height = cv.offsetHeight * devicePixelRatio;
      const n = Math.min(80, Math.floor(cv.offsetWidth*cv.offsetHeight/16000));
      pts = Array.from({length:n},()=>({
        x:Math.random()*W, y:Math.random()*H,
        vx:(Math.random()-.5)*.2*devicePixelRatio, vy:(Math.random()-.5)*.2*devicePixelRatio,
        r:(Math.random()*1.3+.6)*devicePixelRatio, c:COLORS[Math.random()*3|0]
      }));
    }
    resize(); addEventListener('resize',resize);
    const LINK = 110*devicePixelRatio;
    let running = true;
    document.addEventListener('visibilitychange',()=>{ running = !document.hidden; if(running) frame(); });
    (function frame(){
      if(!running) return;
      ctx.clearRect(0,0,W,H);
      for(const p of pts){
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>W)p.vx*=-1; if(p.y<0||p.y>H)p.vy*=-1;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,7);
        ctx.fillStyle = `rgba(${p.c},.45)`; ctx.fill();
      }
      for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
        const a=pts[i],b=pts[j],d=Math.hypot(a.x-b.x,a.y-b.y);
        if(d<LINK){
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
          ctx.strokeStyle=`rgba(217,119,87,${(1-d/LINK)*.13})`;
          ctx.lineWidth=devicePixelRatio*.6; ctx.stroke();
        }
      }
      requestAnimationFrame(frame);
    })();
  }
})();
