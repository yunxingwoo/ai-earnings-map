/* 溯源索引 — 每份官方披露文件一条;METRICS 中的 src 必须在此存在 */
const SOURCES = [
 {
  "id": "dell-fy27q1-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1571996/000157199626000021/exhibit991earnings8kq1fy27.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-05-28), FY27Q1 three months ended 2026-05-01; Net revenue $43,842M, GAAP gross margin $7,782M (17.8%), net income $3,438M"
 },
 {
  "id": "dell-fy27q1-pr",
  "type": "ir_presentation",
  "url": "https://investors.delltechnologies.com/static-files/a75bf8cc-b60f-4f72-8413-2e4090e46f93",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Q1 FY27 Performance Review PDF, Overview slide: 'backlog of $51.3B exiting Q1' (AI server backlog)"
 },
 {
  "id": "dell-fy26q4-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1571996/000157199626000003/exhibit991earnings8kq4fy26.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-02-26), FY26Q4 three months ended 2026-01-30; Net revenue $33,379M, gross margin $6,730M (20.2%), net income $2,259M; COO quote: 'entering FY27 with record backlog of $43 billion' (AI-optimized server backlog)"
 },
 {
  "id": "dell-fy26q3-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1571996/000157199625000118/exhibit991earnings8kq3fy26.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2025-11-25), FY26Q3 three months ended 2025-10-31; Net revenue $27,005M, gross margin $5,593M (20.7%), net income $1,548M; COO quote: '$18.4 billion backlog' (AI servers)"
 },
 {
  "id": "dell-fy26q2-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1571996/000157199625000096/exhibit991earnings8kq2fy26.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2025-08-28), FY26Q2 three months ended 2025-08-01; Net revenue $29,776M, gross margin $5,447M (18.3%), net income $1,164M"
 },
 {
  "id": "dell-fy26q2-pr",
  "type": "ir_presentation",
  "url": "https://investors.delltechnologies.com/static-files/454d3647-eebb-410c-bde3-92056cdf569f",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Q2 FY26 Performance Review PDF: 'AI backlog of $11.7B exiting Q2'"
 },
 {
  "id": "mops-2382-115q1",
  "type": "financial_statement",
  "url": "https://mopsov.twse.com.tw/mops/web/ajax_t164sb04",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "公开资讯观测站 t164sb04 (POST co_id=2382 year=115 season=01), 2026Q1合并损益表: 营收809,221,055千元, 毛利38,697,031千元(4.78%), 归母净利21,192,434千元"
 },
 {
  "id": "mops-2382-114q3",
  "type": "financial_statement",
  "url": "https://mopsov.twse.com.tw/mops/web/ajax_t164sb04",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "公开资讯观测站 t164sb04 (POST co_id=2382 year=114 season=03), 2025Q3单季栏: 营收495,258,381千元, 毛利净额33,918,394千元(6.85%), 归母净利16,431,309千元"
 },
 {
  "id": "mops-2382-114h1",
  "type": "financial_statement",
  "url": "https://mopsov.twse.com.tw/mops/web/ajax_t164sb04",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "公开资讯观测站 t164sb04 (POST co_id=2382 year=114 season=02), 2025Q2单季栏: 营收504,121,652千元, 毛利净额35,533,230千元(7.05%), 归母净利16,860,640千元"
 },
 {
  "id": "mops-2382-114fy-q4derived",
  "type": "financial_statement",
  "url": "https://mopsov.twse.com.tw/mops/web/ajax_t164sb04",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "公开资讯观测站 t164sb04; 2025Q4=年度-前3季累计: 营收638,637,424千元(与10-12月月营收合计一致), 毛利40,398,185千元, 归母净利22,197,283千元"
 },
 {
  "id": "mops-6669-115q1",
  "type": "financial_statement",
  "url": "https://mopsov.twse.com.tw/mops/web/ajax_t164sb04",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "公开资讯观测站 t164sb04 (POST co_id=6669 year=115 season=01), 2026Q1合并损益表: 营收276,507,734千元, 毛利20,881,168千元(7.55%), 归母净利14,114,409千元"
 },
 {
  "id": "mops-6669-114q3",
  "type": "financial_statement",
  "url": "https://mopsov.twse.com.tw/mops/web/ajax_t164sb04",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "公开资讯观测站 t164sb04 (POST co_id=6669 year=114 season=03), 2025Q3单季栏: 营收266,824,045千元, 毛利净额23,531,641千元(8.82%), 归母净利15,410,908千元"
 },
 {
  "id": "mops-6669-114h1",
  "type": "financial_statement",
  "url": "https://mopsov.twse.com.tw/mops/web/ajax_t164sb04",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "公开资讯观测站 t164sb04 (POST co_id=6669 year=114 season=02), 2025Q2单季栏: 营收220,743,500千元, 毛利净额18,943,441千元(8.58%), 归母净利12,122,374千元"
 },
 {
  "id": "mops-6669-114fy-q4derived",
  "type": "financial_statement",
  "url": "https://mopsov.twse.com.tw/mops/web/ajax_t164sb04",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "公开资讯观测站 t164sb04; 2025Q4=年度-前3季累计: 营收292,440,481千元(与10-12月月营收合计一致), 毛利21,129,466千元, 归母净利13,791,511千元"
 },
 {
  "id": "mops-t21-115m1",
  "type": "monthly_revenue",
  "url": "https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_115_1_0.html",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "公开资讯观测站 115年1月营收汇总表(千元): 广达230,834,858; 纬颖83,225,290"
 },
 {
  "id": "mops-t21-115m2",
  "type": "monthly_revenue",
  "url": "https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_115_2_0.html",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "公开资讯观测站 115年2月营收汇总表(千元): 广达215,583,149; 纬颖94,633,137"
 },
 {
  "id": "mops-t21-115m3",
  "type": "monthly_revenue",
  "url": "https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_115_3_0.html",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "公开资讯观测站 115年3月营收汇总表(千元): 广达362,803,048; 纬颖98,649,307"
 },
 {
  "id": "mops-t21-115m4",
  "type": "monthly_revenue",
  "url": "https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_115_4_0.html",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "公开资讯观测站 115年4月营收汇总表(千元): 广达339,921,315; 纬颖82,730,996"
 },
 {
  "id": "mops-t21-115m5",
  "type": "monthly_revenue",
  "url": "https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_115_5_0.html",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "公开资讯观测站 115年5月营收汇总表(千元): 广达311,481,017; 纬颖84,050,473"
 },
 {
  "id": "mops-t21-115m6",
  "type": "monthly_revenue",
  "url": "https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_115_6_0.html",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "公开资讯观测站 115年6月营收汇总表(千元): 广达385,190,820; 纬颖111,371,123"
 },
 {
  "id": "fii-2026q1",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-04-29/1225231598.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《工业富联2026年第一季度报告》: 营业收入251,078,078千元, 归母净利10,594,857千元; 成本232,622,564千元 → 毛利率0.0735"
 },
 {
  "id": "fii-2025fy",
  "type": "annual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-03-11/1225004420.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《工业富联2025年年度报告》分季度表: Q4营收298,955,758千元/净利12,798,793千元, Q2营收200,344,602千元/净利6,882,582千元"
 },
 {
  "id": "fii-2025fy-gmderived",
  "type": "annual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-03-11/1225004420.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "2025年报全年营业成本839,901,600千元; Q4成本=全年-前三季563,085,829=276,815,771千元 → Q4毛利率0.0741"
 },
 {
  "id": "fii-2025q3",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-10-30/1224761584.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《工业富联2025年第三季度报告》: 7-9月营收243,171,777千元, 归母净利10,373,411千元"
 },
 {
  "id": "fii-2025q3-gmderived",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-10-30/1224761584.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Q3单季成本=前三季563,085,829-上半年336,934,278=226,151,551千元 → Q3毛利率0.0700"
 },
 {
  "id": "fii-2025h1-gmderived",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-08-11/1224442889.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《2025年半年度报告》: 上半年营收360,759,653/成本336,934,278千元; Q2成本=上半年-Q1 149,611,900=187,322,378千元 → Q2毛利率0.0650"
 }
];

if (typeof module!=='undefined') module.exports = {SOURCES};
