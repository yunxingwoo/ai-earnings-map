#!/usr/bin/env node
/* tools/fetch-mops.js — 公开资讯观测站月营收采集(台积电/广达/纬颖)
   用法: node tools/fetch-mops.js 2026 8   → 抓 2026 年 8 月(民国115年)公布的 7 月营收
   输出 /tmp/mops-patch.json 供人工核对后按 schema 入库 */
const {execSync} = require('child_process');

const TARGETS = [
  {id:'tsmc',   row:'台積電', name:'台积电'},
  {id:'quanta', row:'廣達',   name:'广达'},
  {id:'wiwynn', row:'緯穎',   name:'纬颖'},
];
const [,, yy, mm] = process.argv;
if(!yy || !mm){ console.error('用法: node tools/fetch-mops.js <公元年> <公布月:1-12>'); process.exit(1); }
const roc = +yy - 1911;
const url = `https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_${roc}_${+mm}_0.html`;

// mops 页面为 big5;用 curl 拉取后 node 内转码(避免依赖 iconv)
const html = execSync(`curl -s --max-time 30 '${url}'`).toString('latin1');
// 页面行结构: 公司名 ... 当月营收(千元) ... 上月 ... 去年同月 ... 累计
const patch = [];
for(const t of TARGETS){
  // 匹配公司名开始的表格行,取行内前几个数字
  const rowRe = new RegExp('<td[^>]*>\\s*'+t.row+'[\\s\\S]*?</tr>', 'i');
  const row = html.match(rowRe);
  if(!row){ console.error('✗ 未找到', t.name); continue; }
  const nums = row[0].match(/[\d,]{6,}/g) || [];
  const clean = nums.map(s=>+s.replace(/,/g,''));
  const monthly = clean[0]; // 当月营收(新台币千元)
  if(!monthly){ console.error('✗', t.name, '无数字'); continue; }
  patch.push({company:t.id, name:t.name,
    period: `${yy}M${+mm-1 < 1 ? 12 : +mm-1}`,  // 公布月 m 的数据是 m-1 月
    monthly_revenue: +(monthly/1000).toFixed(2),  // 千元→百万(TWD_M)
    unit:'TWD_M', url, note:`mops t21 ${roc}年${mm}月汇总表, 当月营收${nums[0]}千元`});
  console.log('✓', t.name, patch[patch.length-1].period, (monthly/1e8).toFixed(1)+'亿新台币');
}
require('fs').writeFileSync('/tmp/mops-patch.json', JSON.stringify(patch,null,1));
console.log(patch.length+' 条 → /tmp/mops-patch.json (核对后按 schema 写入 metrics.js+sources.js, src 建议命名 mops-t21-XXXm'+(+mm-1)+')');
