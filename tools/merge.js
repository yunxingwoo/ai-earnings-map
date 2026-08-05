#!/usr/bin/env node
/* tools/merge.js — 把采集批次 JSON 合并进 data/metrics.js 与 data/sources.js
   用法:node tools/merge.js data/inbox/<batch>.json
   规则:company+period 去重(已存在则跳过并提示);gross_margin 去掉 unit 键;
        source id 去重;合并后自动跑 validate 由调用方执行 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const batch = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const {METRICS}   = require(path.join(ROOT,'data/metrics.js'));
const {SOURCES}   = require(path.join(ROOT,'data/sources.js'));
const {CAPACITY}  = require(path.join(ROOT,'data/capacity.js'));

let addedM=0, skipM=0, addedS=0, skipS=0;

if (batch.metrics){
  const seen = new Set(METRICS.map(e=>e.company+'|'+e.period));
  for(const e of batch.metrics){
    const k = e.company+'|'+e.period;
    if(seen.has(k)){ skipM++; continue; }
    for(const mm of Object.values(e.metrics)) if(mm && mm.unit==='decimal') delete mm.unit;
    METRICS.push(e); seen.add(k); addedM++;
  }
}
if (batch.sources){
  const seen = new Set(SOURCES.map(s=>s.id));
  for(const s of batch.sources){
    if(seen.has(s.id)){ skipS++; continue; }
    SOURCES.push(s); seen.add(s.id); addedS++;
  }
}
if (batch.capacity){
  const seen = new Set(CAPACITY.projects.map(p=>p.project));
  for(const p of batch.capacity){
    if(seen.has(p.project)){ continue; }
    CAPACITY.projects.push(p); seen.add(p.project);
  }
}

const hdrM = `/* 结构化指标(真实官方披露数据,分批采集填入)— 口径见 data/schema.md
   未披露 = 字段缺省;YoY/QoQ 不落库,由 js/calc.js 实时计算 */
`;
const hdrS = `/* 溯源索引 — 每份官方披露文件一条;METRICS 中的 src 必须在此存在 */
`;
const hdrC = `/* 北美 AIDC 容量项目 — 仅收录有官方容量披露的项目(口径见 schema.md) */
`;
const out = (hdr, name, obj, exp) =>
  hdr + `const ${name} = ${JSON.stringify(obj, null, 1)};\n\nif (typeof module!=='undefined') module.exports = {${exp}};\n`;

fs.writeFileSync(path.join(ROOT,'data/metrics.js'),  out(hdrM,'METRICS',METRICS,'METRICS'));
fs.writeFileSync(path.join(ROOT,'data/sources.js'),  out(hdrS,'SOURCES',SOURCES,'SOURCES'));
fs.writeFileSync(path.join(ROOT,'data/capacity.js'),
  hdrC + `const CAPACITY = ${JSON.stringify(CAPACITY, null, 1)};\n\nif (typeof module!=='undefined') module.exports = {CAPACITY};\n`);

console.log(`metrics +${addedM}(跳过重复 ${skipM}) · sources +${addedS}(跳过 ${skipS}) · capacity 共 ${CAPACITY.projects.length}`);
