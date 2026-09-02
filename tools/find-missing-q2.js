// 找出「有 2026Q1 但无 2026Q2」的公司清单（不硬编码列表，以库内实际状态为准）
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const { METRICS } = require(path.join(ROOT, 'data/metrics.js'));
const { COMPANIES } = require(path.join(ROOT, 'data/companies.js'));

const TARGET_Q1 = process.env.Q1 || '2026Q1';
const TARGET_Q2 = process.env.Q2 || '2026Q2';

const byCo = {};
for (const m of METRICS) {
  if (!byCo[m.company]) byCo[m.company] = new Set();
  byCo[m.company].add(m.period);
}

console.log('总指标条目: ' + METRICS.length);
console.log('公司数: ' + COMPANIES.length);
console.log('');

const missing = [];
const hasQ2 = [];
for (const c of COMPANIES) {
  const p = byCo[c.id];
  if (!p) { console.log('!! 无任何指标: ' + c.id + ' ' + (c.name_zh || '')); continue; }
  if (p.has(TARGET_Q2)) { hasQ2.push(c.id); continue; }
  if (p.has(TARGET_Q1)) missing.push(c);
}

console.log('=== 有 ' + TARGET_Q1 + ' 但无 ' + TARGET_Q2 + '：' + missing.length + ' 家 ===');
for (const c of missing) {
  const periods = Array.from(byCo[c.id]).sort();
  const cols = [
    c.id.padEnd(12),
    String(c.name_zh || '').padEnd(12),
    String(c.ticker || '').padEnd(14),
    'lane=' + (c.lane_id || c.lane || '?'),
    'fo=' + (c.fiscal_offset === undefined ? '-' : c.fiscal_offset),
    'n=' + periods.length,
    'last=' + periods.slice(-2).join(',')
  ];
  console.log(cols.join(' '));
}
console.log('');
console.log('=== 已有 ' + TARGET_Q2 + '：' + hasQ2.length + ' 家 ===');
