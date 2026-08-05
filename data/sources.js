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
 },
 {
  "id": "coreweave-q1-26-8k",
  "type": "sec_filing",
  "url": "https://www.sec.gov/Archives/edgar/data/1769628/000176962826000220/coreweave1q26earningspress.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "CoreWeave Q1 2026 财报新闻稿(2026-05-07, 8-K 附件99.1): CEO 引述 'We surpassed 1 GW of active power'; 要点栏 'Expanded total contracted power by more than 400 MW to over 3.5 GW'(均为 electrical power,非 IT 负载)"
 },
 {
  "id": "apld-polaris-forge-1",
  "type": "company_announcement",
  "url": "https://ir.applieddigital.com/news-events/press-releases/detail/157/applied-digital-delivers-second-building-at-polaris-forge-1",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "2026-07-01 新闻稿: 'At full build out, Polaris Forge 1 is contracted to deliver 400 MW of critical IT load'; 'total live capacity at the campus to 175 MW'(100 MW 一号楼 + 75 MW 二号楼一期,已投运;其余在建)"
 },
 {
  "id": "crusoe-abilene-1p2gw",
  "type": "company_announcement",
  "url": "https://www.crusoe.ai/resources/newsroom/crusoe-expands-ai-data-center-campus-in-abilene-to-1-2-gigawatts",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "2025-03-18 新闻稿: 二期开工后园区达 8 栋楼、'a total power capacity of 1.2 gigawatts (GW)',二期预计 2026 年中完工;另 2025-09-30 新闻稿('crusoe-announces-flagship-abilene-data-center-is-live')确认首批两栋楼已通电投运(OCI),即部分投运、整体在建"
 },
 {
  "id": "iren-sweetwater-1",
  "type": "company_announcement",
  "url": "https://www.globenewswire.com/news-release/2026/05/01/3286213/0/en/iren-announces-successful-energization-of-sweetwater-1.html",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "2026-05-01 官方新闻稿: 'successful energization of its 1.4GW Sweetwater 1 data center site in Texas'(接入 ERCOT 电网;电力随分期建设/调试逐步交付,属站点总电力);同稿提及 'the broader 2GW Sweetwater campus'"
 },
 {
  "id": "iren-childress-site",
  "type": "company_announcement",
  "url": "https://iren.com/locations/childress",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "IREN 官网 Locations 列表(经 iren.com 站点导航核实): 'Childress 750 MW, 576 Acres, Texas, USA';Sweetwater 单独标注 'Under construction'、Oklahoma 标注 'In Development',Childress 无在建标注(站点在运,750 MW 为站点电力口径)"
 },
 {
  "id": "meta-hyperion-richland",
  "type": "company_announcement",
  "url": "https://datacenters.atmeta.com/asset/richland-parish-data-center-info-sheet/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Meta 官方 Richland Parish 资料页(PDF,页面发布/更新时间 2026-07-14): 'delivering 5 gigawatts of compute capacity to house Hyperion, our largest multi-gigawatt AI cluster';$50B+ 投资,在建('compute capacity' 未区分 IT/总电力,mw_kind 记 unknown)"
 },
 {
  "id": "meta-el-paso",
  "type": "company_announcement",
  "url": "https://about.fb.com/news/2026/07/meta-announces-new-venture-with-blackrock-to-develop-data-center-in-el-paso/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "2026-07 about.fb.com 官方公告: 'The state-of-the-art data center campus, currently under construction in El Paso, Texas, will have 1 gigawatt of compute capacity',预计 2028 年起陆续上线"
 },
 {
  "id": "vantage-frontier",
  "type": "company_announcement",
  "url": "https://vantage-dc.com/news/vantage-data-centers-unveils-plans-for-frontier-a-25b-mega-campus-in-texas-to-meet-unprecedented-ai-demand/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "2025-08-19 官方新闻稿: '$25 billion to develop a mega-scale 1.4GW data center campus in Shackelford County, Texas';'1.4GW of GPU compute capacity';10 栋楼;已开工,首栋楼 2026 下半年交付"
 },
 {
  "id": "vantage-lighthouse-wi",
  "type": "company_announcement",
  "url": "https://vantage-dc.com/news/openai-oracle-and-vantage-data-centers-announce-stargate-data-center-site-in-wisconsin/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "2025-10-22 OpenAI/Oracle/Vantage 联合公告: Port Washington 园区(四栋楼)'providing close to a gigawatt of AI capacity',计划 2028 年完工;并称 Oracle 合作的 Stargate 园区合计 'over 4.5 gigawatts of IT capacity'(发布时建设即将开始,故记 announced;mw 按 'close to 1 GW' 取 1000)"
 },
 {
  "id": "crusoe-abilene-msft-900",
  "type": "company_announcement",
  "url": "https://www.crusoe.ai/resources/newsroom/crusoe-announces-new-900-mw-ai-factory-campus-in-abilene-texas-to-support-microsoft-ai-infrastructure",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "2026-03-27 官方新闻稿: 'the 900 MW site includes two new buildings and an onsite power plant',支持 Microsoft;场地清理已进行,首栋楼预计 2027 年中通电;建成后 Abilene 全站合计 2.1 GW"
 },
 {
  "id": "asml-2026q2-er",
  "type": "earnings_release",
  "url": "https://www.asml.com/en/news/press-releases/2026/q2-2026-financial-results",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "ASML Q2 2026 财报新闻稿(2026-07-15): 总净销售€9,326M, 毛利率54.0%(毛利€5,035M), 净利润€2,918M(EPS€7.59); 指引Q3净销售€11.0-12.0B"
 },
 {
  "id": "asml-2026q1-er",
  "type": "earnings_release",
  "url": "https://www.asml.com/en/news/press-releases/2026/q1-2026-financial-results",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "ASML Q1 2026 财报新闻稿(2026-04-15): 总净销售€8,767M, 毛利率53.0%(毛利€4,645M), 净利润€2,757M(EPS€7.15)"
 },
 {
  "id": "asml-2025q4-er",
  "type": "earnings_release",
  "url": "https://www.asml.com/en/news/press-releases/2026/q4-2025-financial-results",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "ASML Q4及全年2025新闻稿(2026-01-28): Q4总净销售€9,718M(创纪录), 毛利率52.2%, 净利润€2,840M; 年末backlog €38.8B(较Q3末€35.9B上升); 全年净销售€32,667M/净利€9,609M"
 },
 {
  "id": "asml-2025q3-er",
  "type": "earnings_release",
  "url": "https://www.asml.com/en/news/press-releases/2025/q3-2025-financial-results",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "ASML Q3 2025 财报新闻稿(2025-10-15): 总净销售€7,516M, 毛利率51.6%, 净利润€2,125M(EPS€5.49); 净预订€5,399M"
 },
 {
  "id": "amat-fy26q2-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/6951/000162828026035071/exhibit991q22026earningsre.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "AMAT 8-K EX-99.1(2026-05-14), FY26Q2财季止2026-04-26: 营收$7,910M(创纪录), GAAP毛利率49.9%, GAAP净利$2,806M/EPS$3.51"
 },
 {
  "id": "amat-fy26q1-er",
  "type": "earnings_release",
  "url": "https://investor.appliedmaterials.com/news-releases/news-release-details/applied-materials-announces-first-quarter-2026-results",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "AMAT FY26Q1 IR新闻稿(2026-02-12), 财季止2026-01-25: 营收$7,010M, GAAP毛利率49.0%, GAAP净利$2,026M/EPS$2.54"
 },
 {
  "id": "amat-fy25q4-er",
  "type": "earnings_release",
  "url": "https://investor.appliedmaterials.com/news-releases/news-release-details/applied-materials-announces-fourth-quarter-and-fiscal-year-2025",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "AMAT FY25Q4及全年IR新闻稿(2025-11-13), 财季止2025-10-26: 营收$6,800M, GAAP毛利率48.0%, GAAP净利$1,897M/EPS$2.38"
 },
 {
  "id": "amat-fy25q3-er",
  "type": "earnings_release",
  "url": "https://appliedmaterials.gcs-web.com/news-releases/news-release-details/applied-materials-announces-third-quarter-2025-results",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "AMAT FY25Q3 IR新闻稿(2025-08-14), 财季止2025-07-27: 营收$7,300M(创纪录), GAAP毛利率48.8%, GAAP净利$1,779M/EPS$2.22"
 },
 {
  "id": "lrcx-fy26q4-er",
  "type": "earnings_release",
  "url": "https://newsroom.lamresearch.com/2026-07-29-Lam-Research-Corporation-Reports-Financial-Results-for-the-Quarter-Ended-June-28,-2026",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "LRCX FY26Q4新闻稿(2026-07-29), 财季止2026-06-28: 营收$6,720M(创纪录), GAAP毛利率51.7%, GAAP净利$2,280M/EPS$1.81"
 },
 {
  "id": "lrcx-fy26q3-er",
  "type": "earnings_release",
  "url": "https://newsroom.lamresearch.com/2026-04-22-Lam-Research-Corporation-Reports-Financial-Results-for-the-Quarter-Ended-March-29,-2026",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "LRCX FY26Q3新闻稿(2026-04-22), 财季止2026-03-29: 营收$5,841,488千美元, GAAP毛利率49.8%, GAAP净利$1,825M/EPS$1.45"
 },
 {
  "id": "lrcx-fy26q2-er",
  "type": "earnings_release",
  "url": "https://newsroom.lamresearch.com/2026-01-28-Lam-Research-Corporation-Reports-Financial-Results-for-the-Quarter-Ended-December-28,-2025",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "LRCX FY26Q2新闻稿(2026-01-28), 财季止2025-12-28: 营收$5,344,791千美元, GAAP毛利率49.6%(毛利$2,651M), GAAP净利$1,594M/EPS$1.26"
 },
 {
  "id": "lrcx-fy26q1-er",
  "type": "earnings_release",
  "url": "https://newsroom.lamresearch.com/2025-10-22-Lam-Research-Corporation-Reports-Financial-Results-for-the-Quarter-Ended-September-28,-2025",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "LRCX FY26Q1新闻稿(2025-10-22), 财季止2025-09-28: 营收$5,324,173千美元, GAAP毛利率50.4%(毛利$2,685M), GAAP净利$1,569M/EPS$1.24"
 },
 {
  "id": "snps-fy26q2-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/883241/000119312526241911/d126227dex991.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SNPS 8-K EX-99.1(2026-05-27), FY26Q2止2026-04-30: 营收$2,276M, GAAP净利$17.1M/EPS$0.09(含收购摊销等影响); 上调全年指引至$9.665B"
 },
 {
  "id": "snps-fy26q1-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/883241/000119312526071601/d921168dex991.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SNPS 8-K EX-99.1(2026-02-25), FY26Q1止2026-01-31: 营收$2,409M, GAAP净利$65.0M/EPS$0.34"
 },
 {
  "id": "snps-fy25q4-er",
  "type": "earnings_release",
  "url": "https://news.synopsys.com/2025-12-10-Synopsys-Posts-Financial-Results-for-Fourth-Quarter-and-Fiscal-Year-2025",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SNPS FY25Q4及全年新闻稿(2025-12-10), 止2025-10-31: 营收$2,255M, GAAP净利$448.7M/EPS$2.39; 全年营收$7,054M"
 },
 {
  "id": "snps-fy25q3-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/883241/000119312525199178/d56931dex991.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SNPS 8-K EX-99.1(2025-09-09), FY25Q3止2025-07-31: 营收$1,740M, GAAP净利$242.5M/EPS$1.50"
 },
 {
  "id": "naura-2026q1",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-04-30/1225259650.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《北方华创2026年第一季度报告》(2026-04-30): 营业收入10,322,863,908.82元, 归母净利润1,634,739,048.68元(研发费用14.02亿元)"
 },
 {
  "id": "naura-2025fy",
  "type": "annual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-04-18/1225122918.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《北方华创2025年年度报告》分季度主要财务指标: Q2营收7,935,516,975.91/归母净利1,627,271,237.20, Q3营收11,159,833,472.07/归母净利1,922,364,079.12, Q4营收12,051,732,762.97/归母净利391,650,402.16元; 全年营收393.53亿元"
 }
];

if (typeof module!=='undefined') module.exports = {SOURCES};
