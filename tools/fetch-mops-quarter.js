#!/usr/bin/env node
/* tools/fetch-mops-quarter.js — mops 历史月营收合成季度(台股灰灯清零)
   抓 2025(民国114)M1-M6 + 2024(民国113)M10-M12, 合成 foxconn/quanta/wiwynn/unimicron/delta 季度营收
   输出 /tmp/mops-quarter-patch.json; 附台积电合成值 vs 官方季报自校验 */
const {execSync} = require('child_process');
const fs = require('fs');

const TARGETS = { '鴻海':'foxconn', '廣達':'quanta', '緯穎':'wiwynn', '欣興':'unimicron', '台達電':'delta', '台積電':'tsmc' };
const PAGES = [ // [url, 民国年, 月]
  ['https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_113_1_0.html',2024,1],
  ['https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_113_2_0.html',2024,2],
  ['https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_113_3_0.html',2024,3],
  ['https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_113_4_0.html',2024,4],
  ['https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_113_5_0.html',2024,5],
  ['https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_113_6_0.html',2024,6],
  ['https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_113_7_0.html',2024,7],
  ['https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_113_8_0.html',2024,8],
  ['https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_113_9_0.html',2024,9],
  ['https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_113_10_0.html',2024,10],
  ['https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_113_11_0.html',2024,11],
  ['https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_113_12_0.html',2024,12],
  ['https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_114_1_0.html',2025,1],
  ['https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_114_2_0.html',2025,2],
  ['https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_114_3_0.html',2025,3],
  ['https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_114_4_0.html',2025,4],
  ['https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_114_5_0.html',2025,5],
  ['https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_114_6_0.html',2025,6],
];
const monthly = {}; // {companyId: {'2025M1': TWD_M, ...}}
for(const [url, yy, mm] of PAGES){
  execSync(`curl -s --max-time 30 '${url}' -o /tmp/mops_page.html`);
  const html = execSync('iconv -f big5 -t utf-8//IGNORE /tmp/mops_page.html 2>/dev/null').toString();
  for(const [name, cid] of Object.entries(TARGETS)){
    // 行结构: <td>2382</td><td>廣達</td><td nowrap>  154,010,874</td>... 名称后第一个数字单元格(当月营收,千元)
    const re = new RegExp('<td[^>]*>\\s*'+name+'\\s*</td>\\s*<td[^>]*>\\s*([\\d,]+)\\s*</td>', 'i');
    const m = html.match(re);
    if(m){ (monthly[cid]=monthly[cid]||{})[`${yy}M${mm}`] = +m[1].replace(/,/g,'')/1000; } // 千元→百万 TWD
  }
  process.stdout.write(`  M${mm}(${yy}) 抓到 ${Object.keys(monthly).length}家\r`);
}
console.log('\n月度数据:', Object.keys(monthly).join(' '));
// 校验: 台积电 2025Q1 合成 vs 官方 839,250
if(monthly.tsmc){
  const q1 = (monthly.tsmc['2025M1']||0)+(monthly.tsmc['2025M2']||0)+(monthly.tsmc['2025M3']||0);
  console.log(`校验: 台积电 2025Q1 合成=${q1.toFixed(0)} M TWD vs 官方 839,250 → 偏差 ${((q1/839250-1)*100).toFixed(2)}%`);
}
// 合成季度(TWD_M)
const sum = (cid, y, q) => { const m0=(q-1)*3+1; let s=0;
  for(let k=0;k<3;k++){ const key=`${y}M${m0+k}`; if(monthly[cid]&&monthly[cid][key]==null) return null; s+=monthly[cid]?monthly[cid][key]||0:0; }
  return s?+s.toFixed(0):null; };
const NEED = { tsmc:[['2024Q1',2024,1],['2024Q2',2024,2],['2024Q3',2024,3],['2024Q4',2024,4]],
  quanta:[['2024Q1',2024,1],['2024Q2',2024,2],['2024Q3',2024,3],['2024Q4',2024,4]],
  wiwynn:[['2024Q1',2024,1],['2024Q2',2024,2],['2024Q3',2024,3],['2024Q4',2024,4]] };
const patch = [];
for(const [cid, qs] of Object.entries(NEED)){
  for(const [period, y, q] of qs){ const v = sum(cid, y, q);
    if(v) patch.push({company:cid, period, revenue:v, unit:'TWD_M'});
    else console.error('✗ 合成失败', cid, period);
  }
}
fs.writeFileSync('/tmp/mops-quarter-patch.json', JSON.stringify(patch,null,1));
console.log(patch.map(p=>p.company+' '+p.period+'='+p.revenue).join(' | '));
console.log(patch.length+' 条 → /tmp/mops-quarter-patch.json');
