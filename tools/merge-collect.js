#!/usr/bin/env node
/* merge-collect.js — 把采集代理返回的 JSON 合并进 data/metrics.js + data/sources.js
   用法: node tools/merge-collect.js <result.json> [<result2.json> ...]
   result.json 形如 {"results":[{"company","status","metricsRow","sourceRows",...}]}
   幂等:同 company+period 的 metricsRow、同 id 的 sourceRow 会被覆盖而非重复追加 */
const fs = require('fs');

const METRICS_PATH = 'data/metrics.js';
const SOURCES_PATH = 'data/sources.js';
const METRICS_HEADER = `/* 结构化指标(真实官方披露数据,分批采集填入)— 口径见 data/schema.md
   未披露 = 字段缺省;YoY/QoQ 不落库,由 js/calc.js 实时计算 */
`;
const SOURCES_HEADER = `/* 溯源索引 — 每份官方披露文件一条;METRICS 中的 src 必须在此存在 */
`;

const {METRICS} = require('../' + METRICS_PATH);
const {SOURCES} = require('../' + SOURCES_PATH);

let addedM = 0, addedS = 0;
const skipped = [];
for (const file of process.argv.slice(2)) {
  const doc = JSON.parse(fs.readFileSync(file, 'utf8'));
  for (const r of doc.results || []) {
    if (r.status !== 'collected') { skipped.push(`${r.company}:${r.status}`); continue; }
    if (r.metricsRow) {
      const i = METRICS.findIndex(m => m.company === r.metricsRow.company && m.period === r.metricsRow.period);
      if (i >= 0) METRICS[i] = r.metricsRow; else METRICS.push(r.metricsRow);
      addedM++;
    }
    for (const s of r.sourceRows || []) {
      const i = SOURCES.findIndex(x => x.id === s.id);
      if (i >= 0) SOURCES[i] = s; else SOURCES.push(s);
      addedS++;
    }
  }
}

/* schema: 每家公司保留最新 4 个已披露季度(月度行不限) */
const isQ = p => /^\d{4}Q[1-4]$/.test(p);
let pruned = 0;
{
  const byCo = {};
  METRICS.forEach((m, i) => { if (isQ(m.period)) (byCo[m.company] ||= []).push(i); });
  const drop = new Set();
  for (const idxs of Object.values(byCo)) {
    if (idxs.length <= 4) continue;
    idxs.sort((a, b) => METRICS[a].period.localeCompare(METRICS[b].period));
    for (const i of idxs.slice(0, idxs.length - 4)) { drop.add(i); pruned++; }
  }
  for (const i of [...drop].sort((a, b) => b - a)) METRICS.splice(i, 1);
}

const dump = (header, name, arr, exp) =>
  header + `const ${name} = ` + JSON.stringify(arr, null, 1) + ';\n\n' + exp + '\n';
fs.writeFileSync(METRICS_PATH, dump(METRICS_HEADER, 'METRICS', METRICS, "if (typeof module!=='undefined') module.exports = {METRICS};"));
fs.writeFileSync(SOURCES_PATH, dump(SOURCES_HEADER, 'SOURCES', SOURCES, "if (typeof module!=='undefined') module.exports = {SOURCES};"));

console.log(`metrics +${addedM} · sources +${addedS} · 淘汰旧季 ${pruned} · 跳过: ${skipped.join(', ') || '无'}`);
