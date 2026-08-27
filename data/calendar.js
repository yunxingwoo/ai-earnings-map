/* data/calendar.js — 财报日历(供首页/地图页动态渲染"下一财报";日期为预计,以公司 IR 公告为准) */
const EARNINGS_CALENDAR = [
  { company:'spacex',   name:'SpaceX',    date:'2026-11-05', event:'FY26Q3', est:true },
  { company:'nvda',     name:'英伟达',    date:'2026-08-26', event:'FY27Q2', est:true },
  { company:'snps',     name:'新思科技',  date:'2026-08-26', event:'FY27Q3', est:true },
  { company:'mrvl',     name:'Marvell',   date:'2026-08-27', event:'FY27Q3', est:true },
  { company:'iren',     name:'IREN',      date:'2026-08-27', event:'FY26Q4/全年', est:true },
  { company:'dell',     name:'戴尔',      date:'2026-09-01', event:'FY27Q2', est:true },
  { company:'avgo',     name:'博通',      date:'2026-09-02', event:'FY27Q3', est:true },
  { company:'naura',    name:'北方华创',  date:'2026-08-29', event:'2026 中报', est:true },
  { company:'lite',     name:'Lumentum',  date:'2026-11-05', event:'FY27Q1', est:true },
  { company:'amzn',      name:'亚马逊',   date:'2026-10-30', event:'2026Q3', est:true },
  { company:'msft',      name:'微软',     date:'2026-10-29', event:'FY27Q1', est:true },
  { company:'goog',      name:'谷歌',     date:'2026-10-28', event:'2026Q3', est:true },
  { company:'meta',      name:'Meta',     date:'2026-10-29', event:'2026Q3', est:true },
  { company:'tsmc',      name:'台积电',   date:'2026-10-16', event:'2026Q3', est:true },
  { company:'hynix',     name:'SK海力士', date:'2026-10-22', event:'2026Q3', est:true },
  { company:'samsung',   name:'三星电子', date:'2026-10-29', event:'2026Q3', est:true },
  { company:'tencent',   name:'腾讯',     date:'2026-11-11', event:'2026Q3', est:true },
];
const nextEarnings = (today) => {
  const t = today || new Date().toISOString().slice(0,10);
  return EARNINGS_CALENDAR.filter(e => e.date >= t).sort((a,b)=>a.date<b.date?-1:1);
};
if (typeof module!=='undefined') module.exports = {EARNINGS_CALENDAR, nextEarnings};
