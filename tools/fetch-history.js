#!/usr/bin/env node
/* tools/fetch-history.js — 用 SEC XBRL 官方 API 批量补美股公司历史季度营收
   输出补丁 JSON 到 /tmp/sec-history-patch.json(人工核对后再入库) */
const fs = require('fs');
const path = require('path');
const UA = 'ai-earnings-map research lucky@localhost';
const sleep = ms => new Promise(r => setTimeout(r, ms));

const {COMPANIES} = require(path.join(__dirname, '..', 'data', 'companies.js'));
const {METRICS} = require(path.join(__dirname, '..', 'data', 'metrics.js'));

async function jget(url){
  const res = await fetch(url, {headers: {'User-Agent': UA}});
  if(!res.ok) throw new Error(res.status + ' ' + url);
  return res.json();
}

// 目标期间: 已到 2026Q2 → 补 2025Q1(2025-01-01~03-31) + 2025Q2(04-01~06-30)
// 停在 2026Q1 → 补 2024Q4(2024-10-01~12-31) + 2025Q1
function targets(latestPeriod){
  if(latestPeriod >= '2026Q2') return ['2025Q1','2025Q2'];
  if(latestPeriod >= '2026Q1') return ['2024Q4','2025Q1'];
  return [];
}
const WIN = {
  '2024Q4': ['2024-10-01','2024-12-31'],
  '2025Q1': ['2025-01-01','2025-03-31'],
  '2025Q2': ['2025-04-01','2025-06-30'],
};

async function main(){
  // 1. ticker→CIK 映射
  const tickers = await jget('https://www.sec.gov/files/company_tickers.json');
  const byTicker = {};
  for(const k in tickers){ byTicker[tickers[k].ticker.toUpperCase()] = String(tickers[k].cik_str).padStart(10,'0'); }

  // 2. 每家公司最新期间
  const latest = {};
  for(const m of METRICS){ if(!latest[m.company] || m.period > latest[m.company]) latest[m.company] = m.period; }

  // 3. 美股公司 × 需补期间
  const us = COMPANIES.filter(c => c.market === '美股' && c.listed === true && latest[c.id]);
  const jobs = [];
  for(const c of us){
    for(const p of targets(latest[c.id])){
      // 已有该期间则跳过
      const has = METRICS.some(m => m.company===c.id && m.period===p);
      if(!has) jobs.push({company: c.id, name: c.name, ticker: c.ticker, period: p});
    }
  }
  console.log('需补条目:', jobs.length, '家×期:', new Set(jobs.map(j=>j.company)).size, '家');

  const CONCEPTS = ['RevenueFromContractWithCustomerExcludingAssessedTax','Revenues','RevenueFromContractWithCustomerIncludingAssessedTax'];
  const patch = [], failed = [];
  for(const job of jobs){
    const cik = byTicker[job.ticker.toUpperCase()];
    if(!cik){ failed.push({...job, why:'no CIK'}); continue; }
    let found = null, usedConcept = null;
    for(const concept of CONCEPTS){
      try{
        await sleep(120);
        const data = await jget(`https://data.sec.gov/api/xbrl/companyconcept/CIK${cik}/us-gaap/${concept}.json`);
        const [wStart, wEnd] = WIN[job.period];
        const hits = (data.units.USD||[]).filter(u =>
          u.form==='10-Q' && u.start && u.end &&
          Math.abs(new Date(u.start)-new Date(wStart)) < 6*864e5 &&      // start 财季起点(财年错位公司有偏移,容忍)
          Math.abs(new Date(u.end)-new Date(wEnd)) < 20*864e5 &&          // end 对应季末
          (new Date(u.end)-new Date(u.start)) > 80*864e5 &&               // ~3个月期
          (new Date(u.end)-new Date(u.start)) < 100*864e5);
        if(hits.length){
          // 取最新申报的值
          hits.sort((a,b)=>(b.fy*10+(b.fp==='Q4'?9:0))-(a.fy*10+(a.fp==='Q4'?9:0)));
          found = hits[0]; usedConcept = concept; break;
        }
      }catch(e){ /* 该概念不存在,试下一个 */ }
    }
    if(found) patch.push({company: job.company, period: job.period, revenue: found.val,
      cik, concept: usedConcept, form: found.form, start: found.start, end: found.end, accn: found.accn});
    else failed.push({...job, cik, why:'no match'});
  }
  fs.writeFileSync('/tmp/sec-history-patch.json', JSON.stringify(patch, null, 1));
  fs.writeFileSync('/tmp/sec-history-failed.json', JSON.stringify(failed, null, 1));
  console.log('成功补丁:', patch.length, '条 → /tmp/sec-history-patch.json');
  console.log('失败:', failed.length, '条 → /tmp/sec-history-failed.json');
  for(const f of failed.slice(0,20)) console.log('  ✗', f.company, f.period, f.why);
}
main().catch(e => { console.error('FATAL', e); process.exit(1); });
