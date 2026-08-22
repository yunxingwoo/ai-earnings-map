#!/usr/bin/env node
/* tools/apply-history.js — 把 /tmp/sec-history-patch.json 写入 metrics.js / sources.js
   策略:按公司条目区首行降序做文本插入(从文件尾往前,避免行号漂移);写前备份,写后语法+validate */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const patch = JSON.parse(fs.readFileSync('/tmp/sec-history-patch.json', 'utf8'));
if(!patch.length){ console.error('补丁为空'); process.exit(1); }

// 备份
for(const f of ['data/metrics.js', 'data/sources.js']){
  fs.copyFileSync(path.join(ROOT, f), path.join(ROOT, f + '.bak-' + Date.now()));
}

/* ── sources: 每公司一条 sec-xbrl-{id} ── */
const byCompany = {};
for(const p of patch){ (byCompany[p.company] = byCompany[p.company] || []).push(p); }
let srcText = fs.readFileSync(path.join(ROOT, 'data/sources.js'), 'utf8');
const SRC_SNIPPETS = [];
for(const [cid, items] of Object.entries(byCompany)){
  const cik = items[0].cik, concept = items[0].concept;
  const loc = items.map(i => `${i.period}(止${i.end}, ${i.form} accn:${i.accn})营收$${(i.revenue/1e6).toFixed(1)}M`).join('; ');
  SRC_SNIPPETS.push(` {
  "id": "sec-xbrl-${cid}",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK${cik}/us-gaap/${concept}.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:${concept}): ${loc}"
 },`);
}
// 插到 SOURCES 数组第一个元素之前(文件里第一个 "id" 前的 { 处)
const firstSrcIdx = srcText.indexOf('\n {\n  "id"');
srcText = srcText.slice(0, firstSrcIdx+1) + SRC_SNIPPETS.join('\n') + '\n' + srcText.slice(firstSrcIdx+1);
fs.writeFileSync(path.join(ROOT, 'data/sources.js'), srcText);

/* ── metrics: 按插入点降序文本插入 ── */
let metText = fs.readFileSync(path.join(ROOT, 'data/metrics.js'), 'utf8');
// 每个补丁:插入到该公司条目区第一行前
const ops = [];
for(const [cid, items] of Object.entries(byCompany)){
  const anchor = `\n {\n  "company": "${cid}",`;
  const idx = metText.indexOf(anchor);
  if(idx < 0){ console.error('找不到锚点:', cid); process.exit(1); }
  // 按期间降序插入(每个都插同一锚点前 → 最终升序)
  const sorted = items.sort((a,b)=>b.period.localeCompare(a.period));
  ops.push({idx: idx+1, cid, items: sorted});
}
ops.sort((a,b)=>b.idx-a.idx); // 从后往前
for(const op of ops){
  const blocks = op.items.map(i => ` {
  "company": "${i.company}",
  "period": "${i.period}",
  "metrics": {
   "revenue": {
    "value": ${+(i.revenue/1e6).toFixed(1)},
    "unit": "USD_M",
    "src": "sec-xbrl-${i.company}"
   }
  }
 },`).join('\n');
  metText = metText.slice(0, op.idx) + blocks + '\n' + metText.slice(op.idx);
}
fs.writeFileSync(path.join(ROOT, 'data/metrics.js'), metText);
console.log('已写入', patch.length, '条 metrics 补丁,', SRC_SNIPPETS.length, '条 sources');

/* ── 语法验证 ── */
const {METRICS} = require(path.join(ROOT, 'data/metrics.js'));
const {SOURCES} = require(path.join(ROOT, 'data/sources.js'));
console.log('语法OK: METRICS', METRICS.length, '/ SOURCES', SOURCES.length);
