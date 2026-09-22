#!/usr/bin/env node
/* tools/prune-window.js — 按 schema 滚动窗口修剪超窗季度(只删最旧季,绝不动最新季)
   规则: 普通公司保留最新 6 季(=最新4季+上年同期2季); 时滞曲线公司保留 12 季
   安全: 复算比对(signalOf/YoY/QoQ 修剪前后必须一致) → 备份 → 文本级删除 → 写回校验
   用法: node tools/prune-window.js [--dry] */
const fs = require('fs');
const path = require('path');
const calc = require('../js/calc.js');

const LAG_COMPANIES = new Set(['tsmc', 'quanta', 'wiwynn', 'nvda', 'samsung', 'hynix']);
const WINDOW_NORMAL = 6;
const WINDOW_LAG = 12;

const FILE = path.join(__dirname, '..', 'data', 'metrics.js');
const DRY = process.argv.includes('--dry');

const raw = fs.readFileSync(FILE, 'utf8');
const i = raw.indexOf('['), j = raw.lastIndexOf(']');
const head = raw.slice(0, i);
const body = raw.slice(i, j + 1);
const tail = raw.slice(j + 1);
const data = JSON.parse(body);

/* 定位每个条目的 "company" 键位置 */
const positions = [];
const keyRe = /"company":\s*"([^"]+)"/g;
let m;
while ((m = keyRe.exec(body))) positions.push(m.index);
if (positions.length !== data.length) {
  console.error(`条目定位失败: 文本 ${positions.length} vs JSON ${data.length}`);
  process.exit(1);
}
for (let k = 0; k < positions.length; k++) {
  if (body[positions[k] - 4] !== '{') {
    console.error(`条目 ${k} (${data[k].company} ${data[k].period}) 起始花括号定位异常`);
    process.exit(1);
  }
}

/* 计算待删条目: 每家只砍最旧的超窗季 */
const byCo = {};
data.forEach((e, k) => { (byCo[e.company] = byCo[e.company] || []).push(k); });
const drop = new Set();
const plan = [];
for (const [cid, ks] of Object.entries(byCo)) {
  const qks = ks
    .filter(k => calc.isQuarter(data[k].period))
    .sort((a, b) => calc.periodKey(data[a].period) - calc.periodKey(data[b].period));
  const win = LAG_COMPANIES.has(cid) ? WINDOW_LAG : WINDOW_NORMAL;
  if (qks.length <= win) continue;
  const cut = qks.slice(0, qks.length - win);
  cut.forEach(k => drop.add(k));
  plan.push({ cid, before: qks.length, after: win, dropped: cut.map(k => data[k].period) });
}

if (!drop.size) { console.log('无需修剪:所有公司均在滚动窗口内'); process.exit(0); }

/* 复算比对:
   - signalOf(最新季信号灯)必须完全一致 —— 否则中止
   - 保留季的 YoY/QoQ: 数值不得改变,也不得凭空出现;
     仅允许"非空 → 空"(该季的对比期落在窗口外,属预期降级) */
const kept = data.filter((_, k) => !drop.has(k));
const before = calc.byCompany(data);
const after = calc.byCompany(kept);
const mismatch = [], degraded = [];
for (const cid of Object.keys(before)) {
  const q0 = calc.quarterly(before[cid]);
  const q1 = calc.quarterly(after[cid] || []);
  if (calc.signalOf(q0) !== calc.signalOf(q1)) {
    mismatch.push(`${cid}: 信号灯 ${calc.signalOf(q0)} → ${calc.signalOf(q1)}`);
  }
  const off = q0.length - q1.length;
  for (let x = 0; x < q1.length; x++) {
    for (const [label, fn] of [['YoY', calc.yoyAt], ['QoQ', calc.qoqAt]]) {
      const b0 = fn(q0, x + off), a0 = fn(q1, x);
      if (b0 !== null && a0 !== null && b0 !== a0) {
        mismatch.push(`${cid} ${q1[x].period}: ${label} 数值变化 ${b0} → ${a0}`);
      } else if (b0 === null && a0 !== null) {
        mismatch.push(`${cid} ${q1[x].period}: ${label} 凭空出现`);
      } else if (b0 !== null && a0 === null) {
        degraded.push(`${cid} ${q1[x].period} ${label}`);
      }
    }
  }
}
if (mismatch.length) {
  console.error('修剪会改变复算结果,已中止:');
  mismatch.slice(0, 20).forEach(x => console.error('  ' + x));
  process.exit(1);
}

/* 文本级删除: 只摘掉目标条目,其余字节原样保留 */
let out = body;
for (const k of [...drop].sort((a, b) => b - a)) {
  const s = positions[k] - 6;
  const e = (k + 1 < positions.length) ? positions[k + 1] - 6 : body.length - 2;
  out = out.slice(0, s) + out.slice(e);
}

/* 写回前校验 */
const reparsed = JSON.parse(out);
if (reparsed.length !== kept.length) {
  console.error(`写回校验失败: 解析条目 ${reparsed.length} != 预期 ${kept.length}`);
  process.exit(1);
}
for (let k = 0; k < kept.length; k++) {
  if (reparsed[k].company !== kept[k].company || reparsed[k].period !== kept[k].period) {
    console.error(`写回校验失败: 第 ${k} 条不一致`);
    process.exit(1);
  }
}

console.log(`待修剪 ${plan.length} 家公司, 共删除 ${drop.size} 条季度记录:`);
plan.forEach(p => console.log(`  ${p.cid.padEnd(12)} ${p.before} → ${p.after} 季  (删 ${p.dropped.join(', ')})`));
console.log(`\n信号灯复核: ${plan.length} 家公司全部一致(未变灯)`);
if (degraded.length) {
  console.log(`窗口外计算降级 ${degraded.length} 项(对比期移出滚动窗口,页面显示为 "—",属 schema 预期):`);
  degraded.slice(0, 30).forEach(x => console.log('  ' + x));
  if (degraded.length > 30) console.log(`  ... 其余 ${degraded.length - 30} 项`);
}

if (DRY) { console.log('\n--dry 模式:未写入文件'); process.exit(0); }

const bak = FILE + '.bak-prune-' + Date.now();
fs.copyFileSync(FILE, bak);
fs.writeFileSync(FILE, head + out + tail);
console.log(`\n已写入 data/metrics.js   备份: ${path.basename(bak)}`);
console.log(`指标条目 ${data.length} → ${reparsed.length}`);
