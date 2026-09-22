// 交叉核验：用 locator 里声明的 H1 同比增速反推上年同期 H1，与库内 2025Q1+2025Q2 对账。
// 这是抓 naura 型污染（把上年数字误当本年）的核心手段：若 locator 的 H1 与库内上年同期
// 之比 ≠ 声明的同比，说明来源数字张冠李戴。
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const { METRICS } = require(path.join(ROOT, 'data/metrics.js'));
const { SOURCES } = require(path.join(ROOT, 'data/sources.js'));
const { COMPANIES } = require(path.join(ROOT, 'data/companies.js'));

const rev = (co, p) => {
  const m = METRICS.find(x => x.company === co && x.period === p);
  return m && m.metrics.revenue ? m.metrics.revenue.value : null;
};
const srcMap = {};
for (const s of SOURCES) srcMap[s.id] = s;

const OFFICIAL = ['cninfo.com.cn', 'sse.com.cn', 'szse.cn', 'sec.gov', 'twse.com.tw', 'mops.twse.com.tw'];

const rows = [];
for (const c of COMPANIES) {
  if (c.market !== 'A股') continue;
  const q1 = rev(c.id, '2026Q1'), q2 = rev(c.id, '2026Q2');
  if (q1 === null || q2 === null) continue;
  const p1 = rev(c.id, '2025Q1'), p2 = rev(c.id, '2025Q2');
  const s = srcMap[c.id + '-2026h1-er'];
  const h1 = q1 + q2;
  const prior = (p1 !== null && p2 !== null) ? p1 + p2 : null;
  const actualYoY = prior ? (h1 / prior - 1) * 100 : null;

  // 从 locator 抽取声明的同比，形如 "H1营收116.29亿(+28.77%)"
  let claimedH1 = null, claimedYoY = null;
  if (s && s.locator) {
    const m = String(s.locator).match(/H1\s*营收\s*([\d.]+)\s*亿\s*\(?\s*([+-][\d.]+)%/);
    if (m) { claimedH1 = parseFloat(m[1]); claimedYoY = parseFloat(m[2]); }
  }
  const url = s ? s.url : '';
  const isOfficial = OFFICIAL.some(d => url.includes(d));

  let flag = 'OK';
  const notes = [];
  if (claimedH1 !== null && Math.abs(claimedH1 - h1) > Math.max(0.05, h1 * 0.002)) {
    notes.push('H1对不上(库内' + h1.toFixed(2) + ' vs 声明' + claimedH1 + ')'); flag = 'ERR';
  }
  if (claimedYoY !== null && actualYoY !== null && Math.abs(claimedYoY - actualYoY) > 1.5) {
    notes.push('同比背离(库内' + actualYoY.toFixed(2) + '% vs 声明' + claimedYoY + '%)'); flag = 'ERR';
  }
  if (!prior) notes.push('无上年同期两季,无法对账');
  if (!isOfficial) { notes.push('非官方域名'); if (flag === 'OK') flag = 'WARN'; }

  rows.push({ id: c.id, name: c.name, h1, claimedH1, actualYoY, claimedYoY, flag, notes, url });
}

rows.sort((a, b) => (a.flag === b.flag ? 0 : a.flag === 'ERR' ? -1 : b.flag === 'ERR' ? 1 : a.flag === 'WARN' ? -1 : 1));
let err = 0, warn = 0;
for (const r of rows) {
  if (r.flag === 'ERR') err++; if (r.flag === 'WARN') warn++;
  const yoy = r.actualYoY === null ? 'n/a' : r.actualYoY.toFixed(2) + '%';
  const cy = r.claimedYoY === null ? 'n/a' : r.claimedYoY + '%';
  console.log(
    r.flag.padEnd(5) + r.id.padEnd(11) + String(r.name).padEnd(8) +
    ' H1=' + r.h1.toFixed(2).padStart(9) +
    ' 库内YoY=' + yoy.padStart(8) + ' 声明YoY=' + cy.padStart(8) +
    (r.notes.length ? '  << ' + r.notes.join('; ') : '')
  );
}
console.log('\n合计 ' + rows.length + ' 家A股有2026Q2 | 严重不一致 ' + err + ' | 仅域名/对账提示 ' + warn);
