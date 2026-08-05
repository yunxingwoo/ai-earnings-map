const test = require('node:test');
const assert = require('node:assert/strict');
const C = require('../js/calc.js');

const FX = { perUSD:{ EUR:0.867784, CNY:6.762932, TWD:32.354871, KRW:1428.890254, JPY:157.619868 } };
const mkQ = (revs, startY=2025, startQ=1) => revs.map((v,i)=>{
  const qn = (startQ-1+i)%4+1, y = startY + Math.floor((startQ-1+i)/4);
  return { period:`${y}Q${qn}`, metrics:{ revenue:{ value:v, unit:'USD_M', src:'t' } } };
});

test('periodKey 季度排序正确', ()=>{
  assert.ok(C.periodKey('2025Q4') < C.periodKey('2026Q1'));
  assert.equal(C.isQuarter('2026Q2'), true);
  assert.equal(C.isQuarter('2026M6'), false);
});

test('byCompany 按期间升序分组', ()=>{
  const m = [{company:'a',period:'2026Q2',metrics:{}},{company:'a',period:'2025Q4',metrics:{}}];
  const g = C.byCompany(m);
  assert.deepEqual(g.a.map(e=>e.period), ['2025Q4','2026Q2']);
});

test('yoyAt/qoqAt 与缺失处理', ()=>{
  const q = mkQ([100,110,120,130,140,150]);
  assert.ok(Math.abs(C.yoyAt(q,5) - (150/110-1)*100) < 1e-9);
  assert.ok(Math.abs(C.qoqAt(q,5) - (150/140-1)*100) < 1e-9);
  assert.equal(C.yoyAt(q,3), null);           // 无上年同期 → null
  const q2 = mkQ([100,0,120,130,140,150]);
  assert.equal(C.yoyAt(q2,5), null);          // 基数为 0 → null,不崩溃
});

test('信号灯规则(公开阈值)', ()=>{
  assert.equal(C.signalOf(mkQ([100,100,100,100,130,140])), 'green');  // 加速且>20%
  assert.equal(C.signalOf(mkQ([100,100,100,100,135,125])), 'yellow'); // 减速
  assert.equal(C.signalOf(mkQ([100,100,100,100,110,115])), 'yellow'); // 0-20%
  assert.equal(C.signalOf(mkQ([100,100,100,100,105,95])),  'red');    // 负增长
  assert.equal(C.signalOf(mkQ([100,110,120,130])),         'gray');   // 不足5季
  assert.equal(C.signalOf([]), 'gray');
});

test('格式与折算', ()=>{
  assert.equal(C.fmt(44062,'USD_M'), '$44.1B');
  assert.equal(C.fmt(43.4,'CNY_YI'), '¥43.4亿');
  assert.equal(C.fmt(null,'USD_M'), '—');
  assert.equal(C.pct(36.36), '+36.4%');
  assert.equal(C.pct(null), '—');
  assert.ok(Math.abs(C.usdM(100,'CNY_YI',FX) - 10000/6.762932) < 1e-6); // 100亿CNY→USD_M
  assert.ok(Math.abs(C.usdM(1000,'EUR_M',FX) - 1000/0.867784) < 1e-6);
  assert.equal(C.fmtBig(1269303), '$1.27T');
  assert.equal(C.fmtBig(111436), '$111B');
});
