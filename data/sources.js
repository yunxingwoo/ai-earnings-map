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
 },
 {
  "id": "vrt-2026q2-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026050323/q22026exhibit991vrt07292026.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-07-29), Q2 2026 three months ended 2026-06-30: Net sales $3,274.3M, gross profit $1,234.9M (毛利率0.3771), net income $497.8M; 当季新闻稿未再披露 orders/backlog 数字"
 },
 {
  "id": "vrt-2026q1-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1674101/000162828026026379/q12026exhibit991vrt04222026.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-04-22), Q1 2026 three months ended 2026-03-31: Net sales $2,649.5M, gross profit $999.7M (毛利率0.3773), net income $390.1M; 当季新闻稿未披露 backlog"
 },
 {
  "id": "vrt-2025q4-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1674101/000167410126000006/exhibit991vrt02112026.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-02-11), Q4 2025 three months ended 2025-12-31: Net sales $2,880.0M, gross profit $1,121.4M (毛利率0.3894), net income $445.6M; backlog $15.0B (up 109% YoY)"
 },
 {
  "id": "vrt-2025q3-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1674101/000167410125000020/q32025exhibit991vrt10222025.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2025-10-22), Q3 2025 three months ended 2025-09-30: Net sales $2,675.8M, gross profit $1,010.7M (毛利率0.3777), net income $398.5M; backlog $9.5B (book-to-bill ~1.4x)"
 },
 {
  "id": "ev-2026q1-qr",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-04-21/1225131821.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《英维克2026年第一季度报告》(2026-04-21): 营业收入1,175,329,313.61元, 归母净利8,657,602.27元, 营业成本889,801,134.41元 → 毛利率0.2429"
 },
 {
  "id": "ev-2025fy-ar",
  "type": "annual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-04-21/1225131813.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《英维克2025年年度报告》(2026-04-21) 分季度主要财务指标: Q2营收1,640,553,679.64/净利167,629,951.15, Q3营收1,452,891,317.45/净利183,429,234.55, Q4营收2,041,728,313.20/净利122,845,111.89; 合并利润表全年营业成本4,377,125,780.98元"
 },
 {
  "id": "ev-2025q3-qr",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-10-14/1224708054.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《英维克2025年第三季度报告》(2025-10-14): 7-9月营业收入1,452,891,317.45元, 年初至报告期末(前三季)营业成本2,926,123,532.82元"
 },
 {
  "id": "ev-2025h1-sr",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-08-19/1224505163.pdf",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《英维克2025年半年度报告》(2025-08-19): 上半年营业收入2,573,139,460.90元, 营业成本1,900,373,241.80元"
 },
 {
  "id": "ev-2025q1-qr",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-04-22/1223190833.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《英维克2025年第一季度报告》(2025-04-22): 一季度营业收入932,585,781.26元, 营业成本685,885,751.25元"
 },
 {
  "id": "ev-2025q4-gm",
  "type": "annual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-04-21/1225131813.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "毛利率0.2893由ev-2025fy-ar全年成本4,377,125,780.98减ev-2025q3-qr前三季成本2,926,123,532.82=Q4成本1,451,002,248.16元, 除以年报分季度表Q4营收2,041,728,313.20元"
 },
 {
  "id": "ev-2025q3-gm",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-10-14/1224708054.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "毛利率0.2940由ev-2025q3-qr前三季成本2,926,123,532.82减ev-2025h1-sr上半年成本1,900,373,241.80=Q3成本1,025,750,291.02元, 除以Q3营收1,452,891,317.45元"
 },
 {
  "id": "ev-2025q2-gm",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-08-19/1224505163.pdf",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "毛利率0.2597由ev-2025h1-sr上半年成本1,900,373,241.80减ev-2025q1-qr一季度成本685,885,751.25=Q2成本1,214,487,490.55元, 除以年报分季度表Q2营收1,640,553,679.64元"
 },
 {
  "id": "sh-2026q1-qr",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-04-29/1225238227.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《胜宏科技2026年第一季度报告》(2026-04-29): 营业收入5,519,485,066.85元, 归母净利1,288,427,592.46元, 营业成本3,617,553,672.77元 → 毛利率0.3446"
 },
 {
  "id": "sh-2025fy-ar",
  "type": "annual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-03-13/1225007455.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《胜宏科技2025年年度报告》(2026-03-13) 分季度主要财务指标: Q2营收4,718,525,501.89/净利1,222,472,423.78, Q3营收5,086,426,434.81/净利1,101,706,640.17, Q4营收5,175,020,658.47/净利1,067,161,824.98; 合并利润表全年营业成本12,496,889,291.87元"
 },
 {
  "id": "sh-2025q3-qr",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-10-28/1224747048.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《胜宏科技2025年第三季度报告》(2025-10-28): 7-9月营业收入5,086,426,434.81元, 年初至报告期末(前三季)营业成本9,055,970,460.73元"
 },
 {
  "id": "sh-2025h1-sr",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-08-27/1224583516.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《胜宏科技2025年半年度报告》(2025-08-27): 上半年营业收入9,030,866,364.08元, 营业成本5,759,665,083.00元"
 },
 {
  "id": "sh-2025q1-qr",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-04-22/1223193364.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《胜宏科技2025年第一季度报告》(2025-04-22): 一季度营业收入4,312,340,862.19元, 营业成本2,873,109,795.11元"
 },
 {
  "id": "sh-2025q4-gm",
  "type": "annual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-03-13/1225007455.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "毛利率0.3351由sh-2025fy-ar全年成本12,496,889,291.87减sh-2025q3-qr前三季成本9,055,970,460.73=Q4成本3,440,918,831.14元, 除以年报分季度表Q4营收5,175,020,658.47元"
 },
 {
  "id": "sh-2025q3-gm",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-10-28/1224747048.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "毛利率0.3519由sh-2025q3-qr前三季成本9,055,970,460.73减sh-2025h1-sr上半年成本5,759,665,083.00=Q3成本3,296,305,377.73元, 除以Q3营收5,086,426,434.81元"
 },
 {
  "id": "sh-2025q2-gm",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-08-27/1224583516.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "毛利率0.3883由sh-2025h1-sr上半年成本5,759,665,083.00减sh-2025q1-qr一季度成本2,873,109,795.11=Q2成本2,886,555,287.89元, 除以年报分季度表Q2营收4,718,525,501.89元"
 },
 {
  "id": "wus-2026q1-qr",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-04-23/1225147393.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《沪电股份2026年第一季度报告》(2026-04-23): 营业收入6,214,156,406元, 归母净利1,242,081,367元, 营业成本3,999,902,225元 → 毛利率0.3563"
 },
 {
  "id": "wus-2025fy-ar",
  "type": "annual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-03-25/1225027832.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《沪电股份2025年年度报告》(2026-03-25) 分季度主要财务指标: Q2营收4,456,244,556/净利920,315,547, Q3营收5,018,518,348/净利1,034,837,048, Q4营收5,432,830,354/净利1,104,688,277; 合并利润表全年营业成本12,224,297,224元"
 },
 {
  "id": "wus-2025q3-qr",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-10-29/1224755010.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《沪电股份2025年第三季度报告》(2025-10-29): 7-9月营业收入5,018,518,348元, 年初至报告期末(前三季)营业成本8,728,624,634元"
 },
 {
  "id": "wus-2025h1-sr",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-08-22/1224535064.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《沪电股份2025年半年度报告》(2025-08-22): 上半年营业收入8,493,871,883元, 营业成本5,508,789,969元"
 },
 {
  "id": "wus-2025q1-qr",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-04-25/1223267176.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《沪电股份2025年第一季度报告》(2025-04-25): 一季度营业收入4,037,627,327元, 营业成本2,715,105,615元"
 },
 {
  "id": "wus-2025q4-gm",
  "type": "annual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-03-25/1225027832.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "毛利率0.3566由wus-2025fy-ar全年成本12,224,297,224减wus-2025q3-qr前三季成本8,728,624,634=Q4成本3,495,672,590元, 除以年报分季度表Q4营收5,432,830,354元"
 },
 {
  "id": "wus-2025q3-gm",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-10-29/1224755010.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "毛利率0.3584由wus-2025q3-qr前三季成本8,728,624,634减wus-2025h1-sr上半年成本5,508,789,969=Q3成本3,219,834,665元, 除以Q3营收5,018,518,348元"
 },
 {
  "id": "wus-2025q2-gm",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-08-22/1224535064.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "毛利率0.3731由wus-2025h1-sr上半年成本5,508,789,969减wus-2025q1-qr一季度成本2,715,105,615=Q2成本2,793,684,354元, 除以年报分季度表Q2营收4,456,244,556元"
 },
 {
  "id": "tsmc-2026q2-er",
  "type": "earnings_release",
  "url": "https://pr.tsmc.com/english/news/3326",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "TSMC 官方新聞稿 2026-07-16: 2026Q2 合併營收新台幣1,270.38B(US$40.20B, +36%YoY), 毛利率67.7%, 稅後淨利706.56B(+77%YoY), EPS NT$27.25"
 },
 {
  "id": "tsmc-2026q1-er",
  "type": "earnings_release",
  "url": "https://pr.tsmc.com/english/news/3297",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "TSMC 官方新聞稿 2026-04-16: 2026Q1 合併營收新台幣1,134.10B(US$35.90B, +35.1%YoY), 毛利率66.2%, 稅後淨利572.48B(+58.3%YoY), EPS NT$22.08"
 },
 {
  "id": "tsmc-2025q4-er",
  "type": "earnings_release",
  "url": "https://pr.tsmc.com/english/news/3281",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "TSMC 官方新聞稿 2026-01-15: 2025Q4 合併營收新台幣1,046.09B(+20.5%YoY), 毛利率62.3%, 稅後淨利505.74B(+35.0%YoY), EPS NT$19.50"
 },
 {
  "id": "tsmc-2025q3-er",
  "type": "earnings_release",
  "url": "https://pr.tsmc.com/english/news/3264",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "TSMC 官方新聞稿 2025-10-16: 2025Q3 合併營收新台幣989.92B(+30.3%YoY), 毛利率59.5%, 稅後淨利452.30B(+39.1%YoY), EPS NT$17.44"
 },
 {
  "id": "tsmc-monthly-2026m1",
  "type": "monthly_revenue",
  "url": "https://investor.tsmc.com/english/monthly-revenue/2026",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "TSMC 投資人關係 2026年月營收頁: 2026年1月合併營收401,255百萬台幣(+36.8%YoY)"
 },
 {
  "id": "tsmc-monthly-2026m2",
  "type": "monthly_revenue",
  "url": "https://investor.tsmc.com/english/monthly-revenue/2026",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "TSMC 投資人關係 2026年月營收頁: 2026年2月合併營收317,657百萬台幣(+22.2%YoY)"
 },
 {
  "id": "tsmc-monthly-2026m3",
  "type": "monthly_revenue",
  "url": "https://investor.tsmc.com/english/monthly-revenue/2026",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "TSMC 投資人關係 2026年月營收頁: 2026年3月合併營收415,191百萬台幣(+45.2%YoY)"
 },
 {
  "id": "tsmc-monthly-2026m4",
  "type": "monthly_revenue",
  "url": "https://investor.tsmc.com/english/monthly-revenue/2026",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "TSMC 投資人關係 2026年月營收頁: 2026年4月合併營收410,726百萬台幣(+17.5%YoY)"
 },
 {
  "id": "tsmc-monthly-2026m5",
  "type": "monthly_revenue",
  "url": "https://investor.tsmc.com/english/monthly-revenue/2026",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "TSMC 投資人關係 2026年月營收頁: 2026年5月合併營收416,975百萬台幣(+30.1%YoY)"
 },
 {
  "id": "tsmc-monthly-2026m6",
  "type": "monthly_revenue",
  "url": "https://investor.tsmc.com/english/monthly-revenue/2026",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "TSMC 投資人關係 2026年月營收頁: 2026年6月合併營收442,680百萬台幣(+67.9%YoY, 歷史新高; 上半年累計2,404.48B)"
 },
 {
  "id": "samsung-2026q2-er",
  "type": "earnings_release",
  "url": "https://news.samsung.com/global/samsung-electronics-announces-second-quarter-2026-results",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Samsung 官方新聞稿 2026-07-30: 2026Q2 合併營收171.5兆韓元(171.4995T, +130%YoY), 營業利潤89.49T(+1813.8%YoY), 淨利71.62T(+1299.9%YoY), 營業利潤率52.2%; 財報未披露合併毛利率"
 },
 {
  "id": "samsung-2026q1-er",
  "type": "earnings_release",
  "url": "https://news.samsung.com/global/samsung-electronics-announces-first-quarter-2026-results",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Samsung 官方新聞稿 2026-04-30: 2026Q1 合併營收133.87兆韓元(+69.2%YoY), 營業利潤57.2T(+756%YoY), 淨利47.23T(+474.3%YoY), EPS 7,123韓元"
 },
 {
  "id": "samsung-2025q4-er",
  "type": "earnings_release",
  "url": "https://news.samsung.com/global/samsung-electronics-announces-fourth-quarter-and-fy-2025-results",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Samsung 官方新聞稿 2026-01-29: 2025Q4 合併營收93.8兆韓元(+23.8%YoY), 營業利潤20.07T(+209%YoY), 淨利19.64T(+153.3%YoY; 其中歸母19.29T)"
 },
 {
  "id": "samsung-2025q3-er",
  "type": "earnings_release",
  "url": "https://news.samsung.com/global/samsung-electronics-announces-third-quarter-2025-results",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Samsung 官方新聞稿 2025-10-30: 2025Q3 合併營收86.06兆韓元(+8.8%YoY), 營業利潤12.17T(+32.5%YoY), 淨利12.22T(+21%YoY)"
 },
 {
  "id": "hynix-2026q2-er",
  "type": "earnings_release",
  "url": "https://news.skhynix.com/en/q2-2026-business-results/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SK hynix 官方新聞稿 2026-07-29: 2026Q2 營收79.32兆韓元(+257%YoY), 營業利潤60.54T(+557%YoY, 營業利潤率76%), 淨利93.92T(含Kioxia持股相關一次性投資收益約63.3T, 淨利率118%)"
 },
 {
  "id": "hynix-2026q1-er",
  "type": "earnings_release",
  "url": "https://news.skhynix.com/q1-2026-business-results/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SK hynix 官方新聞稿 2026-04-23: 2026Q1 營收52.5763兆韓元(+198.1%YoY), 營業利潤37.6103T(+405.5%YoY, 營業利潤率72%), 淨利40.3459T(+397.6%YoY)"
 },
 {
  "id": "hynix-2025q4-er",
  "type": "earnings_release",
  "url": "https://news.skhynix.com/en/sk-hynix-announces-fy25-financial-results/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SK hynix 官方新聞稿 2026-01-28 (FY25+4Q): 2025Q4 營收32.8267兆韓元(+66%YoY), 營業利潤19.1696T(+137%YoY, 營業利潤率58%), 淨利15.2460T(+90%YoY)"
 },
 {
  "id": "hynix-2025q3-er",
  "type": "earnings_release",
  "url": "https://news.skhynix.com/sk-hynix-announces-3q25-financial-results/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SK hynix 官方新聞稿 2025-10-29: 2025Q3 營收24.4489兆韓元(+39%YoY), 營業利潤11.3834T(+62%YoY, 營業利潤率47%), 淨利12.5975T(+119%YoY)"
 },
 {
  "id": "mu-fy26q3-er",
  "type": "8-K",
  "url": "https://www.sec.gov/Archives/edgar/data/723125/000072312526000013/a2026q3ex991-pressrelease.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 8-K EX-99.1 (2026-06-24): FQ3 FY26(截至2026-05-28, 屬自然季2026Q2) 營收$41,456M(+74%QoQ,+346%YoY), GAAP毛利率84.6%, GAAP淨利$28,243M, EPS $24.67"
 },
 {
  "id": "mu-fy26q2-er",
  "type": "8-K",
  "url": "https://www.sec.gov/Archives/edgar/data/723125/000072312526000004/a2026q2ex991-pressrelease.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 8-K EX-99.1 (2026-03-18): FQ2 FY26(截至2026-02-26, 屬自然季2026Q1) 營收$23,860M(+75%QoQ), GAAP毛利率74.4%, GAAP淨利$13,790M, EPS $12.07"
 },
 {
  "id": "mu-fy26q1-er",
  "type": "8-K",
  "url": "https://www.sec.gov/Archives/edgar/data/723125/000072312525000044/a2026q1ex991-pressrelease.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 8-K EX-99.1 (2025-12-17): FQ1 FY26(截至2025-11-27, 屬自然季2025Q4) 營收$13,640M(+57%YoY), GAAP毛利率56.0%, GAAP淨利$5,240M, EPS $4.60"
 },
 {
  "id": "mu-fy25q4-er",
  "type": "8-K",
  "url": "https://www.sec.gov/Archives/edgar/data/723125/000072312525000024/a2025q4ex991-pressrelease.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 8-K EX-99.1 (2025-09-23): FQ4 FY25(截至2025-08-28, 屬自然季2025Q3) 營收$11,320M(+22%QoQ,+46%YoY), GAAP毛利率44.7%, GAAP淨利$3,200M, EPS $2.83"
 },
 {
  "id": "smic-2026q1-er",
  "type": "earnings_release",
  "url": "https://www.smics.com/site/news_read/3719",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "中芯国际 官方新聞稿 2026-05-14: 2026Q1 銷售收入$2,505.5M(+11.5%YoY), 毛利率20.1%, 本公司擁有人應占利潤$197.4M(+5%YoY); 2026Q2指引收入+14%~16%, 毛利率20%~22%(8月發布,採集時未出)"
 },
 {
  "id": "smic-2025q4-er",
  "type": "earnings_release",
  "url": "https://www.smics.com/en/site/news_read/7949",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SMIC official release 2026-02-10: 2025Q4 revenue $2,488.7M(+4.5%QoQ,+12.8%YoY), gross margin 19.2%, profit attributable to owners $172.9M(+60.7%YoY)"
 },
 {
  "id": "smic-2025q3-er",
  "type": "financial_statement",
  "url": "https://www1.hkexnews.hk/listedco/listconews/sehk/2025/1113/2025111300757.pdf",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "HKEX 公告PDF (2025-11-13): 中芯國際2025年第三季度, 銷售收入$2,381.8M(+7.8%QoQ,+9.7%YoY), 毛利率22.0%, 本公司擁有人應占利潤$191.8M(+28.9%YoY)"
 },
 {
  "id": "smic-2025q2-er",
  "type": "earnings_release",
  "url": "https://www.smics.com/en/site/news_read/7928",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SMIC official release 2025-08-07: 2025Q2 revenue $2,209.1M(+16.2%YoY), gross margin 20.4%, profit attributable to owners $132.5M(-19.5%YoY)"
 },
 {
  "id": "cxmt-2026q1-prospectus",
  "type": "company_announcement",
  "url": "http://www.cninfo.com.cn/new/disclosure/detail?stockCode=688825&orgId=9920000008&announcementId=1225416304&announcementTime=2026-07-09",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮資訊網 長鑫科技(688825, 2026-07-27科創板上市) 招股意向書及附錄: 2026年一季度營業收入508億元(+719.13%YoY), 歸母淨利247.62億元(+1688.30%YoY); 尚未發布常規季報, 此為IPO招股書披露之最新季度數據"
 },
 {
  "id": "msft-fy26q4-er",
  "type": "earnings_release",
  "url": "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q4/press-release-webcast",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "微软IR FY26Q4新闻稿(2026-07-29), 三个月ended 2026-06-30: 营收$90.0B, GAAP净利$35.76B, 资本开支(含融资租赁)$41.0B"
 },
 {
  "id": "msft-fy26q3-er",
  "type": "earnings_release",
  "url": "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q3/press-release-webcast",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "微软IR FY26Q3新闻稿(2026-04-29), 三个月ended 2026-03-31: 营收$82.9B, GAAP净利$31.78B, 资本开支$31.9B"
 },
 {
  "id": "msft-fy26q2-er",
  "type": "earnings_release",
  "url": "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q2/press-release-webcast",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "微软IR FY26Q2新闻稿(2026-01-28), 三个月ended 2025-12-31: 营收$81.27B, GAAP净利$38.5B(含OpenAI会计变更一次性收益约$7.6B), 资本开支$37.5B"
 },
 {
  "id": "msft-fy26q1-er",
  "type": "earnings_release",
  "url": "https://www.microsoft.com/en-us/investor/earnings/fy-2026-q1/press-release-webcast",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "微软IR FY26Q1新闻稿(2025-10-29), 三个月ended 2025-09-30: 营收$77.67B, GAAP净利$27.75B, 资本开支$34.9B"
 },
 {
  "id": "goog-2026q2-er",
  "type": "earnings_release",
  "url": "https://abc.xyz/investor/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alphabet Q2 2026业绩公告(2026-07-22), 季度ended 2026-06-30: 营收$119.796B, GAAP净利$112.1B(含约$99B未实现投资公允价值收益), 资本开支$44.9B"
 },
 {
  "id": "goog-2026q1-er",
  "type": "earnings_release",
  "url": "https://abc.xyz/investor/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alphabet Q1 2026业绩公告(2026-04-29): 营收$109.9B, GAAP净利$62.6B(含$37.7B非上市股权收益), 资本开支$35.7B"
 },
 {
  "id": "goog-2025q4-er",
  "type": "earnings_release",
  "url": "https://abc.xyz/investor/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alphabet Q4 2025业绩公告(2026-02-04): 营收$113.8B, 净利$34.5B, 资本开支$27.85B"
 },
 {
  "id": "goog-2025q3-er",
  "type": "earnings_release",
  "url": "https://abc.xyz/investor/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alphabet Q3 2025业绩公告(2025-10-29): 营收$102.346B, 净利$34.979B, 资本开支约$24B"
 },
 {
  "id": "amzn-2026q2-er",
  "type": "earnings_release",
  "url": "https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Second-Quarter-Results/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Amazon Q2 2026新闻稿(2026-07-30), 季度ended 2026-06-30: 净销售额$200.6B, 净利$62.6B(含Anthropic投资税前收益$53.4B), 资本开支$54.2B"
 },
 {
  "id": "amzn-2026q1-er",
  "type": "earnings_release",
  "url": "https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-First-Quarter-Results/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Amazon Q1 2026新闻稿(2026-04-29): 净销售额$181.5B, 净利$30.3B(含Anthropic投资税前收益$16.8B), 资本开支$44.2B"
 },
 {
  "id": "amzn-2025q4-er",
  "type": "earnings_release",
  "url": "https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon-com-Announces-Fourth-Quarter-Results/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Amazon Q4 2025新闻稿(2026-02-05): 净销售额$213.4B, 净利$21.2B, 购置物业设备$39.5B"
 },
 {
  "id": "amzn-2025q3-er",
  "type": "earnings_release",
  "url": "https://ir.aboutamazon.com/news-release/news-release-details/2025/Amazon-com-Announces-Third-Quarter-Results/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Amazon Q3 2025新闻稿(2025-10-30): 净销售额$180.2B, 净利$21.2B(含Anthropic投资税前收益$9.5B), 资本开支$35.1B"
 },
 {
  "id": "meta-2026q2-er",
  "type": "earnings_release",
  "url": "https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Second-Quarter-2026-Results/default.aspx",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Meta Q2 2026新闻稿(2026-07-29), 季度ended 2026-06-30: 营收$60.80B, 净利$15.85B, 资本开支$31.08B"
 },
 {
  "id": "meta-2026q1-er",
  "type": "earnings_release",
  "url": "https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-First-Quarter-2026-Results/default.aspx",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Meta Q1 2026新闻稿(2026-04-29): 营收$56.31B, 净利$26.77B(含$8.03B一次性所得税收益), 资本开支$19.84B"
 },
 {
  "id": "meta-2025q4-er",
  "type": "earnings_release",
  "url": "https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Fourth-Quarter-and-Full-Year-2025-Results/default.aspx",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Meta Q4 2025新闻稿(2026-01-28): 营收$59.89B, 净利$22.77B, 资本开支$22.14B"
 },
 {
  "id": "meta-2025q3-er",
  "type": "earnings_release",
  "url": "https://investor.atmeta.com/investor-news/press-release-details/2025/Meta-Reports-Third-Quarter-2025-Results/default.aspx",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Meta Q3 2025新闻稿(2025-10-29): 营收$51.24B, GAAP净利$2.71B(含$15.93B一次性税费), 资本开支$19.37B"
 },
 {
  "id": "orcl-fy26q4-er",
  "type": "earnings_release",
  "url": "https://investor.oracle.com/investor-news/news-details/2026/Oracle-Announces-Record-Q4-and-FY-2026-Results-Driven-by-Cloud-Infrastructure--Cloud-Applications/default.aspx",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Oracle FY26Q4新闻稿(2026-06-10), 三个月ended 2026-05-31: 营收$19.2B, GAAP净利$4.2B, FY26资本开支$55.7B(Q4约$15.9B), RPO$638B"
 },
 {
  "id": "orcl-fy26q3-er",
  "type": "earnings_release",
  "url": "https://investor.oracle.com/investor-news/news-details/2026/Oracle-Announces-Fiscal-Year-2026-Third-Quarter-Financial-Results/default.aspx",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Oracle FY26Q3新闻稿(2026-03-10), 三个月ended 2026-02-28: 营收$17.19B, GAAP净利$3.72B, RPO$553B; Q1-Q3累计资本开支$39.2B"
 },
 {
  "id": "orcl-fy26q2-er",
  "type": "earnings_release",
  "url": "https://investor.oracle.com/investor-news/news-details/2025/Oracle-Announces-Fiscal-Year-2026-Second-Quarter-Financial-Results/default.aspx",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Oracle FY26Q2新闻稿(2025-12-10), 三个月ended 2025-11-30: 营收$16,058M, GAAP净利$6,135M(含Ampere出售税前收益$2.7B), RPO$523.3B"
 },
 {
  "id": "orcl-fy26q1-er",
  "type": "earnings_release",
  "url": "https://investor.oracle.com/investor-news/news-details/2025/Oracle-Announces-Fiscal-Year-2026-First-Quarter-Financial-Results/default.aspx",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Oracle FY26Q1新闻稿(2025-09-09), 三个月ended 2025-08-31: 营收$14.9B, GAAP净利$2.9B, 资本开支$9.57B, RPO$455B"
 },
 {
  "id": "crwv-2026q1-er",
  "type": "earnings_release",
  "url": "https://www.businesswire.com/news/home/20260507558197/en/CoreWeave-Reports-Strong-First-Quarter-2026-Results",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "CoreWeave Q1 2026新闻稿(businesswire, 2026-05-07): 营收$2,078M(+112% YoY), 净亏损$740M, 资本开支$6.8B(业绩演示), 在手订单$99.4B, Q2资本开支指引$7-9B"
 },
 {
  "id": "crwv-2025q4-er",
  "type": "earnings_release",
  "url": "https://investors.coreweave.com/financials/quarterly-results/default.aspx",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "CoreWeave Q4/FY2025新闻稿(2026-02-26): 营收$1.57B(+110%), 净亏损$452M, 在手订单$66.8B"
 },
 {
  "id": "crwv-2025q3-er",
  "type": "earnings_release",
  "url": "https://investors.coreweave.com/financials/quarterly-results/default.aspx",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "CoreWeave Q3 2025新闻稿(2025-11-10): 营收$1.36B(+134%), 净亏损$110M, 在手订单$55.6B"
 },
 {
  "id": "crwv-2025q2-er",
  "type": "earnings_release",
  "url": "https://investors.coreweave.com/financials/quarterly-results/default.aspx",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "CoreWeave Q2 2025新闻稿(2025-08-12): 营收$1.21B(+207%), 净亏损$290.5M, 在手订单$30.1B"
 },
 {
  "id": "nbis-2026q1-er",
  "type": "earnings_release",
  "url": "https://secure.businesswire.com/news/home/20260513568820/en/Nebius-reports-first-quarter-2026-financial-results",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Nebius Q1 2026新闻稿(businesswire, 2026-05-13): 营收$399.0M(+684% YoY), 持续经营净收入$621.2M(含一次性项目), 调整后净亏损$100.3M"
 },
 {
  "id": "nbis-2025q4-er",
  "type": "earnings_release",
  "url": "https://nebius.com/newsroom/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Nebius Q4/FY2025新闻稿(2026-02-12): 营收$227.7M(+547%), 持续经营净亏损$249.6M; 2026年资本开支指引$16-20B"
 },
 {
  "id": "nbis-2025q3-er",
  "type": "earnings_release",
  "url": "https://nebius.com/newsroom/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Nebius Q3 2025新闻稿(2025-11-11): 营收$146.1M, 净亏损$119.6M"
 },
 {
  "id": "nbis-2025q2-er",
  "type": "earnings_release",
  "url": "https://nebius.com/newsroom/nebius-reports-second-quarter-financial-results-and-raises-arr-guidance-for-2025",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Nebius Q2 2025新闻稿(2025-08-07): 营收$105.1M(+625%), 持续经营净收入$502.5M, 资本开支(购置物业设备)$510.6M"
 },
 {
  "id": "baba-fy26q4-er",
  "type": "earnings_release",
  "url": "https://www.alibabagroup.com/zh-HK/document-1991237455038119936",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "阿里巴巴2026年3月季度及2026财年业绩公告(2026-05-13): 营收RMB243,380M(2433.8亿,+3%), 归母净利254.76亿(+106%), 资本性支出268.87亿"
 },
 {
  "id": "baba-fy26q3-er",
  "type": "earnings_release",
  "url": "https://www.alibabagroup.com/en/ir/home",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "阿里巴巴2025年12月季度业绩公告(2026-03-19): 营收RMB284,343M(2843.43亿), 归母净利163.2亿(-67%), 资本性支出289.99亿"
 },
 {
  "id": "baba-fy26q2-er",
  "type": "earnings_release",
  "url": "https://www.alibabagroup.com/en/ir/home",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "阿里巴巴2025年9月季度业绩公告(2025-11-25): 营收RMB247,795M(2477.95亿), 归母净利209.9亿(-52%), 资本性支出315.01亿"
 },
 {
  "id": "baba-fy26q1-er",
  "type": "earnings_release",
  "url": "https://www.alibabagroup.com/en/ir/home",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "阿里巴巴2025年6月季度业绩公告(2025-08-13): 营收RMB247,652M(2476.5亿), 归母净利431.12亿(+78%), 资本性支出386亿"
 },
 {
  "id": "tencent-2026q1-er",
  "type": "earnings_release",
  "url": "https://www.tencent.com/zh-hk/investors.html?id=86372&l=0&s=0",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "腾讯2026年第一季度业绩公告(2026-05-13): 营收RMB196,458M(1964.58亿,+9%), 权益持有人应占盈利580.93亿(+21%), 资本开支RMB31.9B(319亿)"
 },
 {
  "id": "tencent-2025q4-er",
  "type": "earnings_release",
  "url": "https://www.tencent.com/zh-cn/investors.html",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "腾讯2025年第四季度及全年业绩公告(2026-03-18): 营收RMB194,370M(1943.7亿,+13%), 应占盈利583亿(+14%), 资本开支196亿"
 },
 {
  "id": "tencent-2025q3-er",
  "type": "earnings_release",
  "url": "https://www.tencent.com/zh-cn/investors.html",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "腾讯2025年第三季度业绩公告(2025-11-13): 营收RMB192,869M(1928.69亿,+15%), 应占盈利631亿(+19%), 资本开支129.8亿"
 },
 {
  "id": "tencent-2025q2-er",
  "type": "earnings_release",
  "url": "https://www.tencent.com/zh-cn/investors.html",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "腾讯2025年第二季度业绩公告(2025-08-13): 营收RMB184,504M(1845.04亿,+15%), 应占盈利556.28亿(+17%), 资本开支191.1亿(+119%)"
 },
 {
  "id": "nvda-fy27q1-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000051/q1fy27pr.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-05-20), Q1 FY27 quarter ended 2026-04-26: revenue $81,615M, Data Center revenue $75.2 billion (92% YoY), GAAP gross margin 74.9%, GAAP net income $58,321M"
 },
 {
  "id": "nvda-fy26q4-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581026000019/q4fy26pr.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-02-25), Q4 FY26 quarter ended 2026-01-25: revenue $68,127M, Data Center revenue $62.3 billion (75% YoY), GAAP gross margin 75.0%, GAAP net income $42,960M"
 },
 {
  "id": "nvda-fy26q3-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581025000228/q3fy26pr.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2025-11-19), Q3 FY26 quarter ended 2025-10-26: revenue $57,006M, Data Center revenue $51.2 billion (66% YoY), GAAP gross margin 73.4%, GAAP net income $31,910M"
 },
 {
  "id": "nvda-fy26q2-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1045810/000104581025000207/q2fy26pr.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2025-08-27), Q2 FY26 quarter ended 2025-07-27: revenue $46,743M, Data Center revenue $41.1 billion (56% YoY), GAAP gross margin 72.4%, GAAP net income $26,422M"
 },
 {
  "id": "amd-2026q2-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000121/q22026991.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-08-04), Q2 2026 quarter ended 2026-06-27: net revenue $11,536M, Data Center segment revenue $6,718M, GAAP gross margin 54%, GAAP net income $2,297M"
 },
 {
  "id": "amd-2026q1-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000072/q12026991.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-05-05), Q1 2026 quarter ended 2026-03-28: net revenue $10,253M, Data Center segment revenue $5,775M, GAAP gross margin 53%, GAAP net income $1,383M"
 },
 {
  "id": "amd-2025q4-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/2488/000000248826000014/q42025991.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-02-03), Q4 2025 quarter ended 2025-12-27: net revenue $10,270M, Data Center segment revenue $5,380M, GAAP gross margin 54%, GAAP net income $1,511M"
 },
 {
  "id": "amd-2025q3-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/2488/000000248825000163/q32025991.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2025-11-04), Q3 2025 quarter ended 2025-09-27: net revenue $9,246M, Data Center segment revenue $4,341M, GAAP gross margin 52%, GAAP net income $1,243M"
 },
 {
  "id": "avgo-fy26q2-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1730168/000173016826000051/avgo-05032026x8kxex99.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-06-03), Q2 FY26 quarter ended 2026-05-03: net revenue $22,187M, AI semiconductor revenue $10.8 billion (+143% YoY), GAAP net income $9,310M; GAAP gross margin 15,415/22,187=69.5% (P&L毛利润/营收)"
 },
 {
  "id": "avgo-fy26q1-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1730168/000173016826000011/avgo-02012026x8kxex99.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-03-04), Q1 FY26 quarter ended 2026-02-01: net revenue $19,311M, AI semiconductor revenue $8.4 billion (+106% YoY), GAAP net income $7,349M; GAAP gross margin 13,157/19,311=68.1%"
 },
 {
  "id": "avgo-fy25q4-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1730168/000173016825000116/avgo-11022025x8kxex99.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2025-12-11), Q4 FY25 quarter ended 2025-11-02: net revenue $18,015M, AI semiconductor revenue $6.5 billion (+74% YoY), GAAP net income $8,518M; GAAP gross margin 12,249/18,015=68.0%"
 },
 {
  "id": "avgo-fy25q3-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1730168/000173016825000094/avgo-08032025x8kxex99.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2025-09-04), Q3 FY25 quarter ended 2025-08-03: net revenue $15,952M, AI semiconductor revenue $5.2 billion (+63% YoY), GAAP net income $4,140M; GAAP gross margin 10,703/15,952=67.1%"
 },
 {
  "id": "mrvl-fy27q1-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000014/q127_8kx522026ex-991.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-05-27), Q1 FY27 quarter ended 2026-05-02: net revenue $2,417.8M, Data Center revenue $1,832.7M (76% of total), GAAP gross margin 1,260.8/2,417.8=52.1%, GAAP net income $34.5M"
 },
 {
  "id": "mrvl-fy26q4-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1835632/000183563226000006/q426_8kx1312026ex-991.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-03-05), Q4 FY26 quarter ended 2026-01-31: net revenue $2,218.7M, Data Center revenue $1,651.3M (74.4%), GAAP gross margin 1,147.9/2,218.7=51.7%, GAAP net income $396.1M"
 },
 {
  "id": "mrvl-fy26q3-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1835632/000183563225000193/q326_8kx1112025ex-991.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2025-12-02), Q3 FY26 quarter ended 2025-11-01: net revenue $2,074.5M, Data Center revenue $1,517.9M (73.2%), GAAP gross margin 1,069.8/2,074.5=51.6%, GAAP net income $1,901M(含出售汽车以太网业务约18亿美元税前收益)"
 },
 {
  "id": "mrvl-fy26q2-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1835632/000183563225000187/q226_8kx822025ex-991.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2025-08-28), Q2 FY26 quarter ended 2025-08-02: net revenue $2,006.1M, Data Center revenue $1,490.5M (74%), GAAP gross margin 1,010.6/2,006.1=50.4%, GAAP net income $194.8M"
 },
 {
  "id": "cambricon-2026q1",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-04-30/1225264337.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《寒武纪2026年第一季度报告》(2026-04-30): 营业收入2,884,696,746.86元(28.85亿, +159.56%), 归母净利润1,013,213,581.94元(10.13亿, +185.04%), 营业成本1,317,430,150.72元→毛利率54.33%"
 },
 {
  "id": "cambricon-2025fy",
  "type": "annual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-03-13/1225007336.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《寒武纪2025年年度报告》(2026-03-13) 分季度主要财务数据: Q2营收1,769,244,544.29/净利682,617,327.53, Q3营收1,726,780,892.57/净利566,563,175.54, Q4营收1,889,771,835.02/净利454,582,794.56(元); 全年营收6,497,196,198.68/净利2,059,228,538.67"
 },
 {
  "id": "cambricon-2025q3-gmderived",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-10-18/1224719401.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "三季报9M营业成本2,059,846,551.99−半年报H1成本1,269,633,413.86→Q3成本790,213,138.13; Q3营收1,726,780,892.57→毛利率54.24%"
 },
 {
  "id": "cambricon-2025h1-gmderived",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-08-27/1224586025.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "半年报H1营业成本1,269,633,413.86−2026Q1报上年同期Q1'25成本489,129,860.81→Q2成本780,503,553.05; Q2营收1,769,244,544.29→毛利率55.88%"
 },
 {
  "id": "montage-2026q1",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-04-28/1225206629.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《澜起科技2026年第一季度报告》(2026-04-28): 营业收入1,460,718,316.43元(14.61亿, +19.51%), 归母净利润847,375,292.29元(8.47亿, +61.30%), 报告文本披露毛利率69.8%"
 },
 {
  "id": "montage-2025fy",
  "type": "annual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-03-31/1225057736.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《澜起科技2025年年度报告》(2026-03-31) 分季度主要财务数据: Q2营收1,411,247,007.15/净利633,744,331.75, Q3营收1,424,232,009.73/净利473,213,606.21, Q4营收1,398,628,292.82/净利603,285,984.25(元); 全年营收5,456,316,783.63/净利2,235,569,970.18"
 },
 {
  "id": "montage-2025q3-gmderived",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-10-31/1224775589.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "三季报9M营业成本1,563,885,615.40−半年报H1成本1,041,822,849.88→Q3成本522,062,765.52; Q3营收1,424,232,009.73→毛利率63.34%"
 },
 {
  "id": "montage-2025h1-gmderived",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-08-30/1224627769.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "半年报H1营业成本1,041,822,849.88−2026Q1报上年同期Q1'25成本483,386,521.97→Q2成本558,436,327.91; Q2营收1,411,247,007.15→毛利率60.43%"
 },
 {
  "id": "cambricon-2025fy-gmderived",
  "type": "annual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-03-13/1225007336.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "年报全年营业成本2,913,883,194.49−三季报9M成本2,059,846,551.99→Q4成本854,036,642.50; Q4营收1,889,771,835.02→毛利率54.81%"
 },
 {
  "id": "montage-2025fy-gmderived",
  "type": "annual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-03-31/1225057736.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "年报全年营业成本2,060,961,088.35−三季报9M成本1,563,885,615.40→Q4成本497,075,472.95; Q4营收1,398,628,292.82→毛利率64.46%"
 },
 {
  "id": "anet-2026q2-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1596532/000159653226000174/ex991q226-earningsrelease.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-08-04), Q2 2026 three months ended 2026-06-30; Total revenue $3,035.7M, GAAP gross margin 62.9%, GAAP net income $1,212.9M"
 },
 {
  "id": "anet-2026q1-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1596532/000159653226000074/ex991q126-earningsrelease.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-05-05), Q1 2026 three months ended 2026-03-31; Total revenue $2,709.0M, GAAP gross margin 61.9%, GAAP net income $1,022.9M"
 },
 {
  "id": "anet-2025q4-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1596532/000159653226000010/ex991q425-earningsrelease.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-02-12), Q4 2025 three months ended 2025-12-31; Total revenue $2,487.8M, GAAP gross margin 62.9%, GAAP net income $955.8M"
 },
 {
  "id": "anet-2025q3-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1596532/000159653225000284/ex991q325-earningsrelease.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2025-11-04), Q3 2025 three months ended 2025-09-30; Total revenue $2,308.3M, GAAP gross margin 64.6%, GAAP net income $853.0M"
 },
 {
  "id": "cohr-fy26q3-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/820318/000119312526208972/d57080dex991.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-05-06), FY26Q3 three months ended 2026-03-31; Revenues $1,805.6M, GAAP gross margin 37.7%, Net Earnings Attributable to Coherent Corp. $191.4M"
 },
 {
  "id": "cohr-fy26q2-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/820318/000119312526037556/d101115dex991.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2026-02-04), FY26Q2 three months ended 2025-12-31; Revenues $1,685.6M, GAAP gross margin 36.9%, Net Earnings Attributable to Coherent Corp. $146.7M"
 },
 {
  "id": "cohr-fy26q1-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/820318/000119312525266951/d27982dex991.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2025-11-05), FY26Q1 three months ended 2025-09-30; Revenues $1,581.4M, GAAP gross margin 36.6%, Net Earnings Attributable to Coherent Corp. $226.3M"
 },
 {
  "id": "cohr-fy25q4-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/820318/000119312525179833/d22249dex991.htm",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "8-K EX-99.1 (2025-08-13), FY25Q4 three months ended 2025-06-30; Revenues $1,529.4M, GAAP gross margin 35.7%, Net Earnings (Loss) Attributable to Coherent Corp. $(95.6)M"
 },
 {
  "id": "innolight-2026q1",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-04-17/1225111941.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《中际旭创2026年第一季度报告》: 1-3月营业收入19,496,398,083.95元, 归母净利5,734,501,526.83元, 营业成本10,516,721,119.21元 → 毛利率0.4606"
 },
 {
  "id": "innolight-2025fy",
  "type": "annual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-03-31/1225056459.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《中际旭创2025年年度报告》分季度主要财务指标: Q4营收13,235,134,789.35元/归母净利3,665,321,863.75元, Q2营收8,114,898,350.57元/归母净利2,412,239,256.03元; 全年营业成本22,165,537,126.77元"
 },
 {
  "id": "innolight-2025q4-gmderived",
  "type": "annual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-03-31/1225056459.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Q4营业成本=年报全年22,165,537,126.77−三季报1-9月14,817,557,730.96=7,347,979,395.81元 → Q4毛利率0.4448"
 },
 {
  "id": "innolight-2025q3",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-10-31/1224773075.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《中际旭创2025年第三季度报告》: 7-9月营业收入10,215,726,013.52元, 归母净利3,136,817,052.00元; 1-9月营业成本14,817,557,730.96元"
 },
 {
  "id": "innolight-2025q3-gmderived",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-10-31/1224773075.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Q3营业成本=三季报1-9月14,817,557,730.96−半年报上半年8,972,966,839.76=5,844,590,891.20元 → Q3毛利率0.4279"
 },
 {
  "id": "innolight-2025h1",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-08-27/1224585964.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《中际旭创2025年半年度报告》: 上半年营业收入14,789,074,837.80元, 营业成本8,972,966,839.76元"
 },
 {
  "id": "innolight-2025q2-gmderived",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-08-27/1224585964.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Q2营业成本=半年报上半年8,972,966,839.76−2025Q1营业成本4,224,687,051.60(见2026Q1报告上年同期列)=4,748,279,788.16元 → Q2毛利率0.4149"
 },
 {
  "id": "eoptolink-2026q1",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-04-24/1225172606.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《新易盛2026年第一季度报告》: 1-3月营业收入8,337,902,040.74元, 归母净利2,780,222,960.23元, 营业成本4,238,909,758.12元 → 毛利率0.4916"
 },
 {
  "id": "eoptolink-2025fy",
  "type": "annual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-04-24/1225172598.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《新易盛2025年年度报告》分季度主要财务指标: Q4营收8,337,063,628.86元/归母净利3,204,830,222.33元, Q2营收6,384,913,727.13元/归母净利2,369,768,479.15元; 全年营业成本12,966,049,979.21元"
 },
 {
  "id": "eoptolink-2025q4-gmderived",
  "type": "annual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-04-24/1225172598.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Q4营业成本=年报全年12,966,049,979.21−三季报1-9月8,706,776,625.39=4,259,273,353.82元 → Q4毛利率0.4891"
 },
 {
  "id": "eoptolink-2025q3",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-10-30/1224761867.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《新易盛2025年第三季度报告》: 7-9月营业收入6,067,620,945.86元, 归母净利2,384,798,239.47元; 1-9月营业成本8,706,776,625.39元"
 },
 {
  "id": "eoptolink-2025q3-gmderived",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-10-30/1224761867.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Q3营业成本=三季报1-9月8,706,776,625.39−半年报上半年5,487,204,465.82=3,219,572,159.57元 → Q3毛利率0.4694"
 },
 {
  "id": "eoptolink-2025h1",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-08-26/1224571129.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "巨潮《新易盛2025年半年度报告》: 上半年营业收入10,437,170,265.50元, 营业成本5,487,204,465.82元"
 },
 {
  "id": "eoptolink-2025q2-gmderived",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2025-08-26/1224571129.PDF",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Q2营业成本=半年报上半年5,487,204,465.82−2025Q1营业成本2,080,439,291.73(见2026Q1报告上年同期列)=3,406,765,174.09元 → Q2毛利率0.4664"
 },
 {
  "id": "qveris-cn-tfc",
  "type": "exchange_filing_derived",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=300394",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris cn_financial_pro 提取自交易所披露: 2026Q1营收13.3亿元,净利4.92亿元; 2025Q4营收12.45亿元,净利5.52亿元; 2025Q3营收14.63亿元,净利5.66亿元; 2025Q2营收15.11亿元,净利5.62亿元"
 },
 {
  "id": "qveris-cn-dwmicro",
  "type": "exchange_filing_derived",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=301183",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris cn_financial_pro 提取自交易所披露: 2026Q1营收2.06亿元,净利0.28亿元; 2025Q4营收2.4亿元,净利0.21亿元; 2025Q3营收2.6亿元,净利0.29亿元; 2025Q2营收2.2亿元,净利0.31亿元"
 },
 {
  "id": "qveris-cn-sifo",
  "type": "exchange_filing_derived",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=688313",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris cn_financial_pro 提取自交易所披露: 2026Q2营收9.19亿元,净利1.99亿元; 2026Q1营收5.77亿元,净利1.16亿元; 2025Q4营收5.69亿元,净利0.73亿元; 2025Q3营收5.68亿元,净利0.83亿元"
 },
 {
  "id": "qveris-cn-ebphoton",
  "type": "exchange_filing_derived",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=688048",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris cn_financial_pro 提取自交易所披露: 2026Q1营收1.3亿元,净利0.04亿元; 2025Q4营收1.38亿元,净利0.01亿元; 2025Q3营收1.25亿元,净利0.12亿元; 2025Q2营收1.2亿元,净利0.16亿元"
 },
 {
  "id": "qveris-cn-yjsemi",
  "type": "exchange_filing_derived",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=688498",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris cn_financial_pro 提取自交易所披露: 2026Q1营收3.55亿元,净利1.79亿元; 2025Q4营收2.18亿元,净利0.85亿元; 2025Q3营收1.78亿元,净利0.6亿元; 2025Q2营收1.21亿元,净利0.32亿元"
 },
 {
  "id": "qveris-cn-tengjing",
  "type": "exchange_filing_derived",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=688195",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris cn_financial_pro 提取自交易所披露: 2026Q1营收1.71亿元,净利0.14亿元; 2025Q4营收1.6亿元,净利0.07亿元; 2025Q3营收1.62亿元,净利0.27亿元; 2025Q2营收1.5亿元,净利0.24亿元"
 },
 {
  "id": "aapl-2026q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=APPLE%20INC&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "APPLE INC 2026Q2 (10-Q, 三个月ended 2026-06-30): 营收$109,417M, 净利$29,789M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=109417000000, netIncome=29789000000)"
 },
 {
  "id": "aapl-2026q1-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=APPLE%20INC&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "APPLE INC 2026Q1 (10-Q, 三个月ended 2026-03-31): 营收$111,184M, 净利$29,578M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=111184000000, netIncome=29578000000)"
 },
 {
  "id": "aapl-2025q4-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=APPLE%20INC&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "APPLE INC 2025Q4 (10-Q, 三个月ended 2025-12-31): 营收$143,756M, 净利$42,097M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=143756000000, netIncome=42097000000)"
 },
 {
  "id": "aapl-2025q3-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=APPLE%20INC&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "APPLE INC 2025Q3 (10-Q, 三个月ended 2025-09-30): 营收$102,466M, 净利$27,466M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=102466000000, netIncome=27466000000)"
 },
 {
  "id": "iren-2026q1-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=IREN%20LTD&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "IREN LTD 2026Q1 (10-Q, 三个月ended 2026-03-31): 营收$145M, 净利$-248M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=144795000, netIncome=-247827000)"
 },
 {
  "id": "iren-2025q4-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=IREN%20LTD&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "IREN LTD 2025Q4 (10-Q, 三个月ended 2025-12-31): 营收$185M, 净利$-155M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=184692000, netIncome=-155407000)"
 },
 {
  "id": "iren-2025q3-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=IREN%20LTD&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "IREN LTD 2025Q3 (10-Q, 三个月ended 2025-09-30): 营收$240M, 净利$385M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=240295000, netIncome=384611000)"
 },
 {
  "id": "iren-2025q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=IREN%20LTD&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "IREN LTD 2025Q2 (10-Q, 三个月ended 2025-06-30): 营收$187M, 净利$96M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=187292000, netIncome=95546000)"
 },
 {
  "id": "gev-2026q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=GE%20VERNOVA&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "GE VERNOVA 2026Q2 (10-Q, 三个月ended 2026-06-30): 营收$11,104M, 净利$668M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=11104000000, netIncome=668000000)"
 },
 {
  "id": "gev-2026q1-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=GE%20VERNOVA&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "GE VERNOVA 2026Q1 (10-Q, 三个月ended 2026-03-31): 营收$9,339M, 净利$4,745M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=9339000000, netIncome=4745000000)"
 },
 {
  "id": "gev-2025q4-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=GE%20VERNOVA&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "GE VERNOVA 2025Q4 (10-Q, 三个月ended 2025-12-31): 营收$10,956M, 净利$3,664M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=10956000000, netIncome=3664000000)"
 },
 {
  "id": "gev-2025q3-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=GE%20VERNOVA&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "GE VERNOVA 2025Q3 (10-Q, 三个月ended 2025-09-30): 营收$9,969M, 净利$452M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=9969000000, netIncome=452000000)"
 },
 {
  "id": "vst-2026q1-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=VISTRA%20CORP&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "VISTRA CORP 2026Q1 (10-Q, 三个月ended 2026-03-31): 营收$4,654M, 净利$1,029M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=4654000000, netIncome=1029000000)"
 },
 {
  "id": "vst-2025q4-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=VISTRA%20CORP&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "VISTRA CORP 2025Q4 (10-Q, 三个月ended 2025-12-31): 营收$2,338M, 净利$233M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=2338000000, netIncome=233000000)"
 },
 {
  "id": "vst-2025q3-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=VISTRA%20CORP&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "VISTRA CORP 2025Q3 (10-Q, 三个月ended 2025-09-30): 营收$4,971M, 净利$652M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=4971000000, netIncome=652000000)"
 },
 {
  "id": "vst-2025q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=VISTRA%20CORP&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "VISTRA CORP 2025Q2 (10-Q, 三个月ended 2025-06-30): 营收$4,250M, 净利$327M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=4250000000, netIncome=327000000)"
 },
 {
  "id": "be-2026q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=BLOOM%20ENERGY%20CORP&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "BLOOM ENERGY CORP 2026Q2 (10-Q, 三个月ended 2026-06-30): 营收$1,065M, 净利$196M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=1065365000, netIncome=196290000)"
 },
 {
  "id": "be-2026q1-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=BLOOM%20ENERGY%20CORP&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "BLOOM ENERGY CORP 2026Q1 (10-Q, 三个月ended 2026-03-31): 营收$751M, 净利$71M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=751054000, netIncome=70653000)"
 },
 {
  "id": "be-2025q4-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=BLOOM%20ENERGY%20CORP&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "BLOOM ENERGY CORP 2025Q4 (10-Q, 三个月ended 2025-12-31): 营收$778M, 净利$1M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=777683000, netIncome=1091000)"
 },
 {
  "id": "be-2025q3-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=BLOOM%20ENERGY%20CORP&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "BLOOM ENERGY CORP 2025Q3 (10-Q, 三个月ended 2025-09-30): 营收$519M, 净利$-23M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=519048000, netIncome=-23093000)"
 },
 {
  "id": "flnc-2026q1-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=FLUENCE%20ENERGY&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FLUENCE ENERGY 2026Q1 (10-Q, 三个月ended 2026-03-31): 营收$465M, 净利$-21M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=464891000, netIncome=-20927000)"
 },
 {
  "id": "flnc-2025q4-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=FLUENCE%20ENERGY&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FLUENCE ENERGY 2025Q4 (10-Q, 三个月ended 2025-12-31): 营收$475M, 净利$-45M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=475234000, netIncome=-45070000)"
 },
 {
  "id": "flnc-2025q3-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=FLUENCE%20ENERGY&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FLUENCE ENERGY 2025Q3 (10-Q, 三个月ended 2025-09-30): 营收$1,042M, 净利$18M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=1041891000, netIncome=17946000)"
 },
 {
  "id": "flnc-2025q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=FLUENCE%20ENERGY&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FLUENCE ENERGY 2025Q2 (10-Q, 三个月ended 2025-06-30): 营收$603M, 净利$6M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=602533000, netIncome=6252000)"
 },
 {
  "id": "tsla-2026q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=TESLA%20INC&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "TESLA INC 2026Q2 (10-Q, 三个月ended 2026-06-30): 营收$28,236M, 净利$1,114M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=28236000000, netIncome=1114000000)"
 },
 {
  "id": "tsla-2026q1-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=TESLA%20INC&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "TESLA INC 2026Q1 (10-Q, 三个月ended 2026-03-31): 营收$22,387M, 净利$491M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=22387000000, netIncome=491000000)"
 },
 {
  "id": "tsla-2025q4-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=TESLA%20INC&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "TESLA INC 2025Q4 (10-Q, 三个月ended 2025-12-31): 营收$24,901M, 净利$840M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=24901000000, netIncome=840000000)"
 },
 {
  "id": "tsla-2025q3-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=TESLA%20INC&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "TESLA INC 2025Q3 (10-Q, 三个月ended 2025-09-30): 营收$28,095M, 净利$1,373M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=28095000000, netIncome=1373000000)"
 },
 {
  "id": "now-2026q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=SERVICENOW%20INC&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SERVICENOW INC 2026Q2 (10-Q, 三个月ended 2026-06-30): 营收$3,987M, 净利$298M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=3987000000, netIncome=298000000)"
 },
 {
  "id": "now-2026q1-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=SERVICENOW%20INC&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SERVICENOW INC 2026Q1 (10-Q, 三个月ended 2026-03-31): 营收$3,770M, 净利$469M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=3770000000, netIncome=469000000)"
 },
 {
  "id": "now-2025q4-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=SERVICENOW%20INC&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SERVICENOW INC 2025Q4 (10-Q, 三个月ended 2025-12-31): 营收$3,568M, 净利$401M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=3568000000, netIncome=401000000)"
 },
 {
  "id": "now-2025q3-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=SERVICENOW%20INC&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SERVICENOW INC 2025Q3 (10-Q, 三个月ended 2025-09-30): 营收$3,407M, 净利$502M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=3407000000, netIncome=502000000)"
 },
 {
  "id": "pltr-2026q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=PALANTIR%20TECHNOLOGIES&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "PALANTIR TECHNOLOGIES 2026Q2 (10-Q, 三个月ended 2026-06-30): 营收$1,935M, 净利$1,062M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=1935464000, netIncome=1061890000)"
 },
 {
  "id": "pltr-2026q1-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=PALANTIR%20TECHNOLOGIES&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "PALANTIR TECHNOLOGIES 2026Q1 (10-Q, 三个月ended 2026-03-31): 营收$1,633M, 净利$871M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=1632583000, netIncome=870527000)"
 },
 {
  "id": "pltr-2025q4-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=PALANTIR%20TECHNOLOGIES&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "PALANTIR TECHNOLOGIES 2025Q4 (10-Q, 三个月ended 2025-12-31): 营收$1,407M, 净利$609M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=1406802000, netIncome=608676000)"
 },
 {
  "id": "pltr-2025q3-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=PALANTIR%20TECHNOLOGIES&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "PALANTIR TECHNOLOGIES 2025Q3 (10-Q, 三个月ended 2025-09-30): 营收$1,181M, 净利$476M; 经Alpha Vantage INCOME_STATEMENT提取 (raw totalRevenue=1181092000, netIncome=475599000)"
 }
];

if (typeof module!=='undefined') module.exports = {SOURCES};
