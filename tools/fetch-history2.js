#!/usr/bin/env node
/* tools/fetch-history2.js — SEC XBRL 补历史(改进版:宽窗口/多form/多币种/手动CIK)
   输出 /tmp/sec-history-patch2.json */
const fs = require('fs');
const path = require('path');
const UA = 'ai-earnings-map research lucky@localhost';
const sleep = ms => new Promise(r => setTimeout(r, ms));
const {COMPANIES} = require(path.join(__dirname, '..', 'data', 'companies.js'));
const {METRICS} = require(path.join(__dirname, '..', 'data', 'metrics.js'));

const MANUAL_CIK = { 'TSM':'0001046179', 'TSEM':'0001329703', 'ASX':'0001029479', 'ARM':'0001973239' };

async function jget(url){
  const res = await fetch(url, {headers: {'User-Agent': UA}});
  if(!res.ok) throw new Error(res.status);
  return res.json();
}
function gapQuarters(){
  const calc = require(path.join(__dirname, '..', 'js', 'calc.js'));
  const BYCO = calc.byCompany(METRICS);
  const out = [];
  for(const c of COMPANIES){
    if(c.listed!==true || c.market==='A股') continue;          // A股不走SEC
    const q = calc.quarterly(BYCO[c.id]||[]);
    if(!q.length) continue;
    const lp = q[q.length-1].period;
    const have = new Set(q.map(e=>e.period));
    let [yy,qq] = [+lp.slice(0,4), +lp.slice(5)];
    const all6 = [];
    for(let i=0;i<6;i++){ all6.unshift(yy+'Q'+qq); qq--; if(qq===0){qq=4;yy--;} }
    for(const p of all6.filter(p=>!have.has(p))) out.push({company:c.id, ticker:c.ticker, currency:c.currency, period:p});
  }
  return out;
}
const WIN = {
  '2024Q4': ['2024-10-01','2024-12-31'], '2025Q1': ['2025-01-01','2025-03-31'],
  '2025Q2': ['2025-04-01','2025-06-30'], '2025Q3': ['2025-07-01','2025-09-30'],
  '2025Q4': ['2025-10-01','2025-12-31'],
};
const FORMS = new Set(['10-Q','10-K','20-F','6-K']);
const CONCEPTS = ['RevenueFromContractWithCustomerExcludingAssessedTax','Revenues','RevenueFromContractWithCustomerIncludingAssessedTax'];

async function main(){
  const jobs = gapQuarters();
  console.log('SEC 可补条目:', jobs.length, '家:', new Set(jobs.map(j=>j.company)).size);
  const tickers = await jget('https://www.sec.gov/files/company_tickers.json');
  const byTicker = {};
  for(const k in tickers){ byTicker[tickers[k].ticker.toUpperCase()] = String(tickers[k].cik_str).padStart(10,'0'); }

  const patch = [], failed = [];
  for(const job of jobs){
    const cik = MANUAL_CIK[job.ticker.toUpperCase()] || byTicker[job.ticker.toUpperCase()];
    if(!cik){ failed.push({...job, why:'no CIK'}); continue; }
    let found = null, used = null;
    for(const concept of CONCEPTS){
      try{
        await sleep(110);
        const data = await jget(`https://data.sec.gov/api/xbrl/companyconcept/CIK${cik}/us-gaap/${concept}.json`);
        const unitKey = Object.keys(data.units)[0];            // USD/TWD/EUR...
        const [wStart, wEnd] = WIN[job.period];
        const dur = d => (new Date(d.end) - new Date(d.start)) / 864e5;
        const hits = (data.units[unitKey]||[]).filter(u =>
          FORMS.has(u.form) && u.start && u.end &&
          Math.abs(new Date(u.end) - new Date(wEnd)) <= 45*864e5 &&   // 宽窗口:容纳财年错位(±45天)
          dur(u) > 70 && dur(u) < 105);                              // ~3个月期
        if(hits.length){
          hits.sort((a,b)=> new Date(b.filed||b.end) - new Date(a.filed||a.end));
          found = {...hits[0], unit: unitKey}; used = concept; break;
        }
      }catch(e){}
    }
    if(found) patch.push({company: job.company, period: job.period, revenue: found.val, unit: found.unit,
      cik, concept: used, form: found.form, start: found.start, end: found.end, accn: found.accn, currency: job.currency});
    else failed.push({...job, cik, why:'no match'});
  }
  fs.writeFileSync('/tmp/sec-history-patch2.json', JSON.stringify(patch, null, 1));
  fs.writeFileSync('/tmp/sec-history-failed2.json', JSON.stringify(failed, null, 1));
  console.log('成功:', patch.length, '| 失败:', failed.length);
  for(const f of failed) console.log('  ✗', f.company, f.period, f.why);
}
main().catch(e => { console.error('FATAL', e); process.exit(1); });
