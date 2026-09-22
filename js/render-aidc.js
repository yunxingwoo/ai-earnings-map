/* render-aidc.js — 北美 AIDC 州级建设图谱（aidc-us.html）
   数据：data/aidc-us.js（AIDC_US）+ data/us-map.js（US_MAP）
   约定：地图底色只表达 A 口径（美国数据中心容量），其余口径单列，不与 A 相加。 */
(function () {
  'use strict';
  if (typeof AIDC_US === 'undefined' || typeof US_MAP === 'undefined') return;

  const CN = {
    AL: '阿拉巴马', AK: '阿拉斯加', AZ: '亚利桑那', AR: '阿肯色', CA: '加利福尼亚', CO: '科罗拉多',
    CT: '康涅狄格', DE: '特拉华', DC: '哥伦比亚特区', FL: '佛罗里达', GA: '佐治亚', HI: '夏威夷',
    ID: '爱达荷', IL: '伊利诺伊', IN: '印第安纳', IA: '艾奥瓦', KS: '堪萨斯', KY: '肯塔基',
    LA: '路易斯安那', ME: '缅因', MD: '马里兰', MA: '马萨诸塞', MI: '密歇根', MN: '明尼苏达',
    MS: '密西西比', MO: '密苏里', MT: '蒙大拿', NE: '内布拉斯加', NV: '内华达', NH: '新罕布什尔',
    NJ: '新泽西', NM: '新墨西哥', NY: '纽约', NC: '北卡罗来纳', ND: '北达科他', OH: '俄亥俄',
    OK: '俄克拉何马', OR: '俄勒冈', PA: '宾夕法尼亚', RI: '罗得岛', SC: '南卡罗来纳', SD: '南达科他',
    TN: '田纳西', TX: '得克萨斯', UT: '犹他', VT: '佛蒙特', VA: '弗吉尼亚', WA: '华盛顿',
    WV: '西弗吉尼亚', WI: '威斯康星', WY: '怀俄明'
  };
  const CATS = ['operating', 'construction', 'announced', 'terminated'];
  const CAT_HEX = { operating: '#7fa56b', construction: '#d97757', announced: '#d9a057', terminated: '#c05757', mixed: '#87867f' };
  const CAT_CN = { operating: '已投运', construction: '在建', announced: '已宣布/规划', terminated: '已终止', mixed: '混合' };

  /* ── 业主角色：按工作簿 Customer 列判定（Owner 与 Customer 是否同一主体） ── */
  const ROLE_CN = { self: '自用', lease: '出租', tbd: '未定', mixed: '混合' };
  const ROLE_FULL = { self: '自用（业主即最终用户）', lease: '出租（已锁定第三方租户）', tbd: '租户未定', mixed: '自用 + 出租' };
  const TBD_RE = /待定|未披露|无锚定租户|尚无最终承诺|无签约租户|招商|谈判中|保密/;
  const SELF_RE = /自用|自建|自有/;
  const LEASE_RE = /对外出租|转租|长租|租户|出租/;
  const reEsc = s => String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  function roleOf(p) {
    const c = String(p.customer == null ? '' : p.customer).trim();
    const o = String(p.ownerShort || p.owner || '').trim();
    if (!c) return 'tbd';
    if (TBD_RE.test(c)) return 'tbd';
    const tok = o.split(/[+\/]/)[0].trim().split(/\s+/)[0];
    const startsOwn = tok && c.toLowerCase().indexOf(tok.toLowerCase()) === 0;
    if (startsOwn && SELF_RE.test(c) && LEASE_RE.test(c)) return 'mixed';
    if (startsOwn) return 'self';
    if (tok && SELF_RE.test(c) && new RegExp(reEsc(tok), 'i').test(c)) return 'self';
    return 'lease';
  }

  /* ── 业主聚合（只含 A 口径；与州级容量同源） ── */
  const OWN = (function () {
    const m = Object.create(null);
    AIDC_US.projects.forEach(p => {
      if (p.scope !== 'A') return;
      const k = p.ownerShort || p.owner || '—';
      const o = m[k] || (m[k] = { name: k, full: p.owner, gw: 0, n: 0, by: {}, catGW: {}, st: {}, role: {}, rows: [] });
      const r = roleOf(p);
      o.gw += p.gw || 0; o.n++;
      o.by[p.cat] = (o.by[p.cat] || 0) + 1;
      o.catGW[p.cat] = (o.catGW[p.cat] || 0) + (p.gw || 0);
      o.role[r] = (o.role[r] || 0) + (p.gw || 0);
      (p.states || []).forEach(s => { o.st[s] = (o.st[s] || 0) + (p.gw || 0); });
      o.rows.push(p);
    });
    const list = Object.keys(m).map(k => m[k]);
    list.forEach(o => {
      const re = Object.entries(o.role).sort((a, b) => b[1] - a[1]);
      o.dr = (re.length > 1 && re[1][1] / o.gw >= 0.35) ? 'mixed' : re[0][0];
      // 主建设状态按「容量」而非项目条数判定：8.00GW 在建 + 1.20GW 已宣布，条形应为在建色
      const ce = Object.entries(o.catGW).sort((a, b) => b[1] - a[1]);
      o.dc = (ce.length > 1 && ce[1][1] / o.gw >= 0.34) ? 'mixed' : ce[0][0];
      o.stList = Object.entries(o.st).sort((a, b) => b[1] - a[1]);
    });
    list.sort((a, b) => b.gw - a.gw);
    const total = list.reduce((s, o) => s + o.gw, 0);
    list.forEach((o, i) => { o.rk = i + 1; o.share = o.gw / total; });
    const byName = Object.create(null);
    list.forEach(o => { byName[o.name] = o; });
    const roleGW = { self: 0, lease: 0, tbd: 0, mixed: 0 };
    list.forEach(o => Object.keys(o.role).forEach(r => { roleGW[r] += o.role[r]; }));
    const roleN = { self: 0, lease: 0, tbd: 0, mixed: 0 };
    list.forEach(o => { roleN[o.dr]++; });
    const cum = n => list.slice(0, n).reduce((s, o) => s + o.gw, 0) / total;
    return { list, byName, total, roleGW, roleN, cum };
  })();
  const OWNERS = OWN.list;
  const O = n => OWN.byName[n];

  /* ── 锚定租户聚合（A 口径；按 Customer 列匹配，主打 OpenAI / Anthropic） ──
     口径说明：客户列含该租户的行全部计入；「自用+出租」混合行按全容量计入（卡片内注明） */
  const TENANTS = (function () {
    const defs = [
      { id: 'openai', name: 'OpenAI', re: /openai/i },
      { id: 'anthropic', name: 'Anthropic', re: /anthropic/i }
    ];
    return defs.map(d => {
      const rows = AIDC_US.projects.filter(p => p.scope === 'A' && d.re.test(p.customer || ''));
      const t = { id: d.id, name: d.name, gw: 0, n: rows.length, by: {}, catGW: {}, st: {}, rows: rows.slice() };
      const lm = Object.create(null);
      rows.forEach(p => {
        t.gw += p.gw || 0;
        t.by[p.cat] = (t.by[p.cat] || 0) + 1;
        t.catGW[p.cat] = (t.catGW[p.cat] || 0) + (p.gw || 0);
        (p.states || []).forEach(s => { t.st[s] = (t.st[s] || 0) + (p.gw || 0); });
        const k = p.ownerShort || p.owner || '—';
        const e = lm[k] || (lm[k] = { name: k, gw: 0 });
        e.gw += p.gw || 0;
      });
      t.stList = Object.entries(t.st).sort((a, b) => b[1] - a[1]);
      const ce = Object.entries(t.catGW).sort((a, b) => b[1] - a[1]);
      t.dc = (ce.length > 1 && ce[1][1] / t.gw >= 0.34) ? 'mixed' : ce[0][0];
      t.lords = Object.values(lm).sort((a, b) => b.gw - a.gw);
      t.share = t.gw / OWN.total;
      return t;
    });
  })();
  const tOf = id => TENANTS.filter(t => t.id === id)[0] || null;

  /* ── 色阶：以卡片底色为基准向主色插值 ── */
  const BG = [30, 30, 28], AC = [217, 119, 87];
  const mix = a => '#' + [0, 1, 2].map(i => Math.round(BG[i] + (AC[i] - BG[i]) * a).toString(16).padStart(2, '0')).join('');
  const ALPHAS = [0.20, 0.42, 0.66, 0.95];
  const RAMP = ALPHAS.map(mix);

  const METRICS = [
    { id: 'gw', name: '规划容量', unit: 'GW', domain: [0, 1, 3, 7], get: s => s.gw, fmt: v => v.toFixed(2) },
    { id: 'gwOpAll', name: '已投运容量', unit: 'GW', domain: [0, 0.4, 1.5, 3], get: s => s.gwOpAll, fmt: v => v.toFixed(2), note: 'A + F 口径（含美国存量市场）' },
    { id: 'n', name: '项目数', unit: '个', domain: [0, 1.5, 3.5, 5.5], get: s => s.n, fmt: v => String(v) },
    { id: 'cat', name: '建设状态', unit: '', cat: true }
  ];
  const STATE_CODES = Object.keys(US_MAP.states).sort();
  let cur = 'gw';
  let sel = null;
  let own = null;   // 高亮中的业主名（null = 未选）
  let ten = null;   // 高亮中的锚定租户 id（与业主高亮互斥）

  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const S = code => AIDC_US.states[code] || { n: 0, gw: 0, gwOp: 0, gwAll: 0, gwOpAll: 0, nAll: 0, by: {}, owners: [] };
  const domCat = s => {
    if (!s.n) return null;
    const vals = CATS.map(c => s.by[c] || 0);
    const mx = Math.max.apply(null, vals);
    if (!mx || mx / s.n < 0.5) return 'mixed';
    if (vals.filter(v => v === mx).length > 1) return 'mixed';
    return CATS[vals.indexOf(mx)];
  };
  const tierOf = (m, v) => { if (!(v > 0)) return -1; let t = 0; for (let i = 1; i < m.domain.length; i++) if (v >= m.domain[i]) t = i; return t; };
  const fillOf = (m, s, code) => {
    if (m.cat) { const c = domCat(s); return c ? CAT_HEX[c] : null; }
    const t = tierOf(m, m.get(s));
    return t < 0 ? null : RAMP[t];
  };

  /* ── 建图 ── */
  const svg = document.getElementById('usmap');
  if (!svg) return;
  svg.setAttribute('viewBox', US_MAP.vb);
  svg.innerHTML = '<g id="g-state"></g><g id="g-lead"></g><g id="g-label"></g>';
  const gS = svg.querySelector('#g-state'), gL = svg.querySelector('#g-lead'), gT = svg.querySelector('#g-label');
  STATE_CODES.forEach(code => {
    const m = US_MAP.states[code];
    const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    p.setAttribute('d', m.d); p.setAttribute('class', 'st'); p.dataset.code = code;
    gS.appendChild(p);
    if (m.lead) {
      const ln = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      ln.setAttribute('x1', m.ax); ln.setAttribute('y1', m.ay);
      ln.setAttribute('x2', m.lx); ln.setAttribute('y2', m.ly);
      ln.setAttribute('class', 'ld');
      gL.appendChild(ln);
    }
    const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t.setAttribute('x', m.lx); t.setAttribute('y', m.ly);
    t.setAttribute('class', 'lb'); t.setAttribute('font-size', m.fs); t.dataset.code = code;
    t.textContent = code;
    gT.appendChild(t);
  });

  /* ── 上色 ── */
  function paint() {
    const m = METRICS.filter(x => x.id === cur)[0];
    const hl = own ? (O(own) ? O(own).st : null) : (ten ? (tOf(ten) ? tOf(ten).st : null) : null);
    document.querySelectorAll('#usmap .st').forEach(p => {
      const code = p.dataset.code, s = S(code);
      let cls = 'st' + (s.n ? '' : ' nod') + (sel === code ? ' sel' : '');
      if (hl) {
        p.setAttribute('fill', hl[code] ? '#d97757' : '#242422');
        cls += hl[code] ? ' own' : ' dim';
      } else {
        p.setAttribute('fill', fillOf(m, s, code) || '#242422');
      }
      p.setAttribute('class', cls);
    });
    document.querySelectorAll('#usmap .lb').forEach(t => {
      const code = t.dataset.code, s = S(code), m2 = m.cat ? null : tierOf(m, m.get(s));
      let cls = 'lb';
      if (s.n) cls += ' d';
      if (sel === code) cls += ' on';
      if (hl) { if (hl[code]) cls += ' hot'; else cls += ' d dim'; if (sel === code) cls = cls.replace(' dim', ''); }
      else if (m.cat) { if (s.n) cls += ' hot'; }
      else if (m2 === 3) cls += ' hot';
      t.setAttribute('class', cls);
    });
    renderLegend(m);
  }

  function renderLegend(m) {
    const el = document.getElementById('mapLegend');
    if (!el) return;
    const noDat = '<span class="lp-lg dim"><i style="background:#242422;height:9px;border-radius:3px;border:1px solid rgba(250,249,245,.18)"></i>无项目</span>';
    if (ten) {
      const t = tOf(ten);
      const k = t ? t.stList.filter(x => x[1] > 0).length : 0;
      el.innerHTML = '<span class="lp-lg"><i style="background:#d97757;height:9px;border-radius:3px"></i>' +
        esc(t.name) + ' 锁定容量所在州（' + k + ' 个）</span>' +
        '<span class="lp-lg dim"><i style="background:#242422;height:9px;border-radius:3px;border:1px solid rgba(250,249,245,.18)"></i>其余州</span>' +
        '<span class="lp-lg dim">再点一次取消高亮</span>';
      return;
    }
    if (own) {
      const o = O(own);
      const k = o ? o.stList.filter(x => x[1] > 0).length : 0;
      el.innerHTML = '<span class="lp-lg"><i style="background:#d97757;height:9px;border-radius:3px"></i>' +
        esc(own) + ' 所在州（' + k + ' 个）</span>' +
        '<span class="lp-lg dim"><i style="background:#242422;height:9px;border-radius:3px;border:1px solid rgba(250,249,245,.18)"></i>其余州</span>' +
        '<span class="lp-lg dim">再点一次取消高亮</span>';
      return;
    }
    if (m.cat) {
      const present = CATS.filter(c => STATE_CODES.some(x => (S(x).by[c] || 0) > 0));
      el.innerHTML = present.map(c =>
        '<span class="lp-lg"><i style="background:' + CAT_HEX[c] + ';height:9px;border-radius:3px"></i>' + CAT_CN[c] + '</span>').join('') + noDat;
      return;
    }
    el.innerHTML = RAMP.map((c, i) => {
      const a = m.domain[i] === 0 ? '&lt; ' + m.domain[i + 1] : (m.domain[i + 1] == null ? '≥ ' + m.domain[i] : m.domain[i] + ' – ' + m.domain[i + 1]);
      return '<span class="lp-lg"><i style="background:' + c + ';height:9px;border-radius:3px"></i>' + a + ' ' + m.unit + '</span>';
    }).join('') + noDat;
  }

  /* ── 指标切换 ── */
  const bar = document.getElementById('metricBar');
  if (bar) {
    bar.innerHTML = METRICS.map(m => '<button data-m="' + m.id + '"' + (m.id === cur ? ' class="on"' : '') + '>' + m.name + '</button>').join('');
    bar.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      cur = b.dataset.m;
      bar.querySelectorAll('button').forEach(x => x.classList.toggle('on', x.dataset.m === cur));
      const n = document.getElementById('metricNote');
      const m = METRICS.filter(x => x.id === cur)[0];
      if (n) n.textContent = m.note ? m.note : '';
      if (own || ten) { own = null; ten = null; refreshOwner(); refreshTenants(); }   // 指标与高亮互斥，避免两套读法打架
      paint();
    });
  }

  /* ── 业主高亮：地图与业主榜双向同步 ── */
  const ownBar = document.getElementById('ownerBar');
  const ownNote = document.getElementById('ownerNote');
  const TOP_CHIPS = 10;
  const ownerNoteHTML = function () {
    if (!own) return '按业主高亮：点下方任一业主，地图上其所在州整体高亮，再点一次取消。';
    const o = O(own);
    if (!o) return '';
    const st = o.stList.filter(x => x[1] > 0);
    const foot = st.slice(0, 6).map(x => x[0] + ' ' + x[1].toFixed(2)).join(' · ') + (st.length > 6 ? ' 等 ' + st.length + ' 州' : '');
    return '<span class="sw"></span>高亮中 <b>' + esc(o.name) + '</b> · <b>' + o.gw.toFixed(2) + 'GW</b> · 占 A 口径 <b>' +
      (o.share * 100).toFixed(1) + '%</b> · ' + o.n + ' 个项目 · ' + ROLE_FULL[o.dr] + '<br>分布：' + foot;
  };
  function refreshOwner() {
    if (ownBar) ownBar.querySelectorAll('button').forEach(b => b.classList.toggle('on', (b.dataset.o || '') === (own || '')));
    if (ownNote) ownNote.innerHTML = ownerNoteHTML();
    document.querySelectorAll('.orow[data-o]').forEach(r => r.classList.toggle('on', r.dataset.o === own));
  }
  function setOwner(name) {
    const n = name || null;
    own = (n && own === n) ? null : n;   // 同一点第二次 = 取消
    if (own && ten) { ten = null; refreshTenants(); }   // 业主/租户高亮互斥
    refreshOwner(); paint();
  }
  if (ownBar) {
    ownBar.innerHTML = '<button data-o="">全部业主</button>' +
      OWNERS.slice(0, TOP_CHIPS).map(o => '<button data-o="' + esc(o.name) + '">' + esc(o.name) + '</button>').join('');
    ownBar.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      setOwner(b.dataset.o);
    });
  }

  /* ── 业主榜 ── */
  const ownList = document.getElementById('owners');
  const LIST_TOP = 15;
  const pct = (v, mx) => Math.min(100, Math.max(1.5, v / mx * 100));
  function orowHTML(o) {
    const st = o.stList.filter(x => x[1] > 0);
    const chips = st.slice(0, 5).map(x => '<i>' + x[0] + '<b>' + x[1].toFixed(2) + '</b></i>').join('') +
      (st.length > 5 ? '<i class="more">+ ' + (st.length - 5) + ' 州</i>' : '');
    return '<div class="orow" data-o="' + esc(o.name) + '">' +
      '<span class="ork">' + ('0' + o.rk).slice(-2) + '</span>' +
      '<span class="onm"><b>' + esc(o.name) + '</b><i class="otag ' + o.dr + '">' + ROLE_CN[o.dr] + '</i></span>' +
      '<span class="obar"><i class="c-' + o.dc + '" style="width:' + pct(o.gw, OWNERS[0].gw) + '%"></i></span>' +
      '<span class="ovl">' + o.gw.toFixed(2) + '<em>GW</em><u>' + (o.share * 100).toFixed(1) + '%</u></span>' +
      '<span class="ost"><i class="more">' + o.n + ' 个项目</i>' + chips + '</span></div>';
  }
  if (ownList) {
    const renderList = function (expanded) {
      const head = OWNERS.slice(0, LIST_TOP).map(orowHTML).join('');
      let rest;
      if (expanded) {
        rest = OWNERS.slice(LIST_TOP).map(orowHTML).join('');
      } else {
        const tail = OWNERS.slice(LIST_TOP), tgw = tail.reduce((s, o) => s + o.gw, 0);
        rest = '<div class="orow" style="cursor:default;opacity:.78">' +
          '<span class="ork">—</span>' +
          '<span class="onm"><b>其余 ' + tail.length + ' 家</b></span>' +
          '<span class="obar"><i class="c-mixed" style="width:' + pct(tgw, OWNERS[0].gw) + '%"></i></span>' +
          '<span class="ovl">' + tgw.toFixed(2) + '<em>GW</em><u>' + (tgw / OWN.total * 100).toFixed(1) + '%</u></span>' +
          '<span class="ost"><i>单家均 &lt; 1.30GW</i></span></div>';
      }
      ownList.innerHTML = head + rest + '<div class="olist-more"><button id="olistToggle">' +
        (expanded ? '收起' : '展开全部 ' + OWNERS.length + ' 家') + '</button></div>';
      const t = document.getElementById('olistToggle');
      if (t) t.addEventListener('click', () => { renderList(!expanded); refreshOwner(); });
    };
    ownList.addEventListener('click', e => {
      const r = e.target.closest('.orow');
      if (!r || !r.dataset.o) return;
      setOwner(r.dataset.o);
      const mb = document.getElementById('mapbox');
      if (mb) mb.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
    renderList(false);
  }
  refreshOwner();

  /* ── 悬浮提示 ── */
  const tip = document.getElementById('mtip');
  const box = document.getElementById('mapbox');
  function tipHTML(code) {
    const s = S(code);
    const rows = [];
    rows.push('<div class="tt">' + code + ' · ' + CN[code] + '</div>');
    if (!s.n) { rows.push('<div class="tr"><span>暂无已核实的 A 口径项目</span></div>'); return rows.join(''); }
    rows.push('<div class="tr"><span>规划容量</span><b>' + s.gw.toFixed(2) + ' GW</b></div>');
    rows.push('<div class="tr"><span>已投运</span><b>' + s.gwOpAll.toFixed(2) + ' GW</b></div>');
    rows.push('<div class="tr"><span>项目数</span><b>' + s.n + ' 项</b></div>');
    if (s.owners && s.owners.length) {
      rows.push('<div class="tr"><span>主力业主</span><b>' + esc(s.owners[0].name) + ' ' + s.owners[0].gw.toFixed(2) + '</b></div>');
    }
    rows.push('<div class="stbar">' + CATS.map(c => { const v = s.by[c] || 0; return v ? '<i style="flex:' + v + ';background:' + CAT_HEX[c] + '"></i>' : ''; }).join('') + '</div>');
    rows.push('<div class="stkey">' + CATS.filter(c => s.by[c]).map(c => '<span><i style="background:' + CAT_HEX[c] + '"></i>' + CAT_CN[c] + ' ' + s.by[c] + '</span>').join('') + '</div>');
    return rows.join('');
  }
  svg.addEventListener('mousemove', e => {
    const p = e.target.closest('.st');
    if (!p || !tip || !box) { hideTip(); return; }
    tip.innerHTML = tipHTML(p.dataset.code);
    tip.classList.add('on');
    const r = box.getBoundingClientRect();
    let x = e.clientX - r.left + 16, y = e.clientY - r.top + 14;
    if (x + tip.offsetWidth > r.width - 6) x = e.clientX - r.left - tip.offsetWidth - 16;
    if (y + tip.offsetHeight > r.height - 6) y = r.height - tip.offsetHeight - 6;
    tip.style.left = Math.max(6, x) + 'px'; tip.style.top = Math.max(6, y) + 'px';
  });
  svg.addEventListener('mouseleave', hideTip);
  function hideTip() { if (tip) tip.classList.remove('on'); }

  /* ── 州明细抽屉 ── */
  const overlay = document.getElementById('overlay'), drawer = document.getElementById('drawer');
  function closeDrawer() { if (overlay) overlay.classList.remove('on'); if (drawer) { drawer.classList.remove('on'); drawer.setAttribute('aria-hidden', 'true'); } sel = null; paint(); }
  function openState(code) {
    if (!drawer) return;
    const s = S(code);
    const items = AIDC_US.projects.filter(p => p.states && p.states.indexOf(code) >= 0);
    const parts = [];
    parts.push('<button class="close" id="dClose" aria-label="关闭">✕</button>');
    parts.push('<div class="d-tier">' + (s.n ? 'A 口径 · ' + (domCat(s) === 'mixed' ? '混合状态' : CAT_CN[domCat(s)]) : '暂无 A 口径项目') + '</div>');
    parts.push('<div class="d-name">' + CN[code] + '</div>');
    parts.push('<div class="d-tk">' + esc(s.name || code) + ' · ' + code + '</div>');
    parts.push('<div class="d-sec"><h3>容量与进度</h3><table class="ktable">' +
      '<tr><td>规划容量（A 口径）</td><td>' + s.gw.toFixed(2) + ' GW</td></tr>' +
      '<tr><td>已投运容量</td><td>' + s.gwOpAll.toFixed(2) + ' GW</td></tr>' +
      '<tr><td>已核实项目数</td><td>' + s.n + ' 项</td></tr>' +
      '<tr><td>业主家数（A 口径）</td><td>' + (s.owners ? s.owners.length : 0) + ' 家</td></tr>' +
      '<tr><td>含其它口径项目数</td><td>' + s.nAll + ' 项</td></tr></table></div>');
    if (s.n) {
      parts.push('<div class="d-sec"><h3>建设状态构成</h3><div class="stbar" style="height:11px">' +
        CATS.map(c => { const v = s.by[c] || 0; return v ? '<i style="flex:' + v + ';background:' + CAT_HEX[c] + '"></i>' : ''; }).join('') + '</div>' +
        '<div class="stkey">' + CATS.filter(c => s.by[c]).map(c => '<span><i style="background:' + CAT_HEX[c] + '"></i>' + CAT_CN[c] + ' ' + s.by[c] + ' 项</span>').join('') + '</div></div>');
      if (s.owners && s.owners.length) {
        const mx = s.owners[0].gw || 1;
        parts.push('<div class="d-sec"><h3>业主构成 · ' + s.owners.length + ' 家（按 A 口径容量）</h3><div class="ow-rows">' +
          s.owners.map(o => {
            const og = O(o.name);
            const tag = og ? '<i class="otag ' + og.dr + '">' + ROLE_CN[og.dr] + '</i>' : '';
            return '<div class="ow-row"><span class="ow-name"><b>' + esc(o.name) + '</b>' + tag + '</span>' +
              '<span class="ow-bar"><i style="width:' + Math.max(3, o.gw / mx * 100) + '%"></i></span>' +
              '<span class="ow-val">' + o.gw.toFixed(2) + '</span></div>';
          }).join('') + '</div></div>');
      }
    }
    if (items.length) {
      parts.push('<div class="d-sec"><h3>项目清单（全部口径 ' + items.length + ' 条）</h3><div class="pit">' +
        items.map(p => '<div class="pi"><div class="pi-h"><span class="pi-n">' + esc(p.project) + '</span><span class="chip chip-' + p.cat + '">' + CAT_CN[p.cat] + '</span></div>' +
          '<div class="pi-m">' + esc(p.ownerShort) + ' · 口径 ' + p.scope + ' · ' + (p.gw != null ? p.gw.toFixed(2) + ' GW' : '容量未披露') + '</div>' +
          '<div class="pi-s">' + esc(p.status) + (p.customer && p.customer !== '—' ? ' · 客户 ' + esc(p.customer.slice(0, 40)) : '') + '</div></div>').join('') +
        '</div></div>');
    }
    parts.push('<div class="d-demo">数据来源：AIDC_Owner-Campus-Customer_2026Q3_v2.5.xlsx（核实截至 2026-09-07），本页仅作结构化呈现，容量口径以工作簿 Sheet 4 定义为准。地图底色只表达 A 口径，勿与 B/C/F/G 相加。</div>');
    drawer.innerHTML = parts.join('');
    drawer.classList.add('on'); drawer.setAttribute('aria-hidden', 'false');
    if (overlay) overlay.classList.add('on');
    sel = code; paint();
    const c = drawer.querySelector('#dClose'); if (c) c.addEventListener('click', closeDrawer);
  }
  svg.addEventListener('click', e => { const p = e.target.closest('.st'); if (p) openState(p.dataset.code); });
  if (overlay) overlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });

  /* ── 州排行 ── */
  const rank = document.getElementById('rank');
  if (rank) {
    const list = STATE_CODES.map(c => ({ c: c, s: S(c) })).filter(x => x.s.n > 0).sort((a, b) => b.s.gw - a.s.gw);
    const mx = list.length ? list[0].s.gw : 1;
    rank.innerHTML = list.map(x =>
      '<div class="srow" data-code="' + x.c + '">' +
      '<span class="sc">' + x.c + '</span>' +
      '<span class="sn"><b>' + CN[x.c] + '</b><span class="sbar"><i style="width:' + (x.s.gw / mx * 100) + '%"></i></span></span>' +
      '<span class="sv">' + x.s.gw.toFixed(2) + '<em>GW</em></span></div>').join('') +
      '<div class="srow nod"><span class="sc">—</span><span class="sn"><b>多站点未披露</b><span class="sbar"><i style="width:' + (AIDC_US.unlocated.gw / mx * 100) + '%"></i></span></span><span class="sv">' + AIDC_US.unlocated.gw.toFixed(2) + '<em>GW</em></span></div>';
    rank.addEventListener('click', e => {
      const r = e.target.closest('.srow'); if (r && r.dataset.code) {
        openState(r.dataset.code);
        const p = svg.querySelector('.st[data-code="' + r.dataset.code + '"]');
        if (p) p.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    });
  }

  /* ── 口径对照 ── */
  const sc = document.getElementById('scopes');
  if (sc) {
    const T = AIDC_US.totals, order = ['a', 'a1', 'b', 'g', 'c', 'f', 'e', 'h'];
    const MAXW = Math.max.apply(null, order.map(k => T[k].gw || 0));
    sc.innerHTML = order.map(k => {
      const t = T[k], w = t.gw == null ? 0 : t.gw / MAXW * 100, inA = (k === 'a');
      return '<div class="scope-row' + (inA ? ' hot' : '') + '">' +
        '<span class="stag">' + t.tag + '</span>' +
        '<span class="slabel">' + t.label + (inA ? '<b>核心口径</b>' : '') + '<em>' + t.desc + '</em></span>' +
        '<span class="sbar"><i style="width:' + w + '%"></i></span>' +
        '<span class="sval">' + (t.gw == null ? '—' : t.gw.toFixed(2) + '<em>GW</em>') + '<u>' + t.n + ' 条</u></span></div>';
    }).join('');
  }

  /* ── 头部统计 ── */
  const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  set('stProj', AIDC_US.projects.length + ' 条');
  set('stGW', AIDC_US.totals.a.gw.toFixed(2) + ' GW');
  set('stOwn', OWNERS.length + ' 家业主');
  set('stStates', STATE_CODES.filter(c => S(c).n > 0).length + ' 个州');

  /* ── 业主数据卡 ── */
  const ost = document.getElementById('ownerStats');
  if (ost) {
    const gp = v => (v / OWN.total * 100).toFixed(1) + '%';
    const tbdTop = OWNERS.filter(o => o.dr === 'tbd');
    const tbdList = tbdTop.slice(0, 4).map(o => esc(o.name) + ' ' + o.gw.toFixed(2)).join('、');
    ost.innerHTML = [
      { no: '01', num: OWNERS.length + ' 家', label: 'A 口径业主总数',
        note: AIDC_US.totals.a.n + ' 条项目共 ' + OWN.total.toFixed(2) + 'GW，平均每家 ' + (OWN.total / OWNERS.length).toFixed(2) + 'GW' },
      { no: '02', num: (OWN.cum(5) * 100).toFixed(1) + '%', label: '前五家容量集中度',
        note: esc(OWNERS.slice(0, 5).map(o => o.name).join(' / ')) },
      { no: '03', num: gp(OWN.roleGW.lease), label: '出租型容量占比',
        note: OWN.roleGW.lease.toFixed(2) + 'GW 已锁定第三方租户（OpenAI / Anthropic / CoreWeave 等）' },
      { no: '04', num: gp(OWN.roleGW.tbd), label: '租户未定容量占比',
        note: OWN.roleGW.tbd.toFixed(2) + 'GW 无锚定租户 · ' + tbdList + ' 等 ' + tbdTop.length + ' 家' }
    ].map(c => '<div class="bstat"><div class="bs-no">' + c.no + '</div><div class="bs-num">' + c.num +
      '</div><div class="bs-label">' + c.label + '</div><div class="bs-note">' + c.note + '</div></div>').join('');
  }

  /* ── 锚定租户视图（主打 OpenAI / Anthropic：租户≠业主，资产在开发商名下） ── */
  const tCards = document.getElementById('tenantCards');
  function tcardHTML(t) {
    const chips = CATS.filter(c => t.catGW[c]).map(c =>
      '<span class="tc-cat"><i style="background:' + CAT_HEX[c] + '"></i>' + CAT_CN[c] + ' ' + t.catGW[c].toFixed(2) + 'GW · ' + t.by[c] + '项</span>').join('');
    const lords = t.lords.slice(0, 4).map(l => '<i>' + esc(l.name) + '<b>' + l.gw.toFixed(2) + '</b></i>').join('') +
      (t.lords.length > 4 ? '<i class="more">+ ' + (t.lords.length - 4) + ' 家</i>' : '');
    const rows = t.rows.slice().sort((a, b) => (b.gw || 0) - (a.gw || 0)).map(p =>
      '<div class="trow"><span class="ts">' + (p.states || []).join('/') + '</span>' +
      '<span class="tn">' + esc(p.ownerShort) + ' · ' + esc(p.project) + '</span>' +
      '<span class="tv">' + (p.gw != null ? p.gw.toFixed(2) + 'GW' : '—') + '</span>' +
      '<i class="chip chip-' + p.cat + '">' + CAT_CN[p.cat] + '</i></div>').join('');
    return '<div class="tcard' + (ten === t.id ? ' on' : '') + '" data-t="' + t.id + '">' +
      '<div class="tcard-h"><span class="tnm">' + esc(t.name) + '</span>' +
      '<span class="tgw num">' + t.gw.toFixed(2) + '<em>GW</em></span></div>' +
      '<div class="tcard-sub">A 口径 ' + t.n + ' 个项目 · 占 A 口径 <b>' + (t.share * 100).toFixed(1) + '%</b> · 主状态 ' + CAT_CN[t.dc] + '</div>' +
      '<div class="tchips">' + chips + '</div>' +
      '<div class="tlord"><span class="tlk">供地业主</span><span class="tlv">' + lords + '</span></div>' +
      '<div class="trows">' + rows + '</div>' +
      '<div class="tgo">' + (ten === t.id ? '高亮中 · 再点一次取消' : '点击卡片 → 地图高亮其锁定州') + '</div>' +
      '</div>';
  }
  function refreshTenants() {
    if (tCards) tCards.innerHTML = TENANTS.map(tcardHTML).join('');
  }
  if (tCards) {
    refreshTenants();
    tCards.addEventListener('click', e => {
      const c = e.target.closest('.tcard'); if (!c) return;
      ten = (ten === c.dataset.t) ? null : c.dataset.t;
      if (ten && own) { own = null; refreshOwner(); }
      refreshTenants(); paint();
      const mb = document.getElementById('mapbox');
      if (mb && ten) mb.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
  }

  paint();
  const m0 = METRICS.filter(x => x.id === cur)[0];
  const n0 = document.getElementById('metricNote');
  if (n0 && m0.note) n0.textContent = m0.note;
})();
