/* 溯源索引 — 每份官方披露文件一条;METRICS 中的 src 必须在此存在 */
const SOURCES = [
 {
  "id": "eoptolink-2026h1-er",
  "type": "earnings_release",
  "url": "https://www.stcn.com/article/detail/4108576.html",
  "fetched_at": "2026-08-24",
  "archive": null,
  "locator": "新易盛2026年半年度报告(官方,2026-08-24披露): H1营收209.10亿(+100.34%)/归母75.29亿(+90.98%)/毛利率48.46%; Q2单季营收125.72亿(+96.9%)/归母47.49亿(+100.4%)/毛利率47.96%; 光互连产品产能2836万只(+86.57%), 800G稳定出货、1.6T放量提速"
 },
 {
  "id": "envicool-2026h1-er",
  "type": "earnings_release",
  "url": "https://www.cfi.net.cn/p20260824004178.html",
  "fetched_at": "2026-08-24",
  "archive": null,
  "locator": "英维克2026年半年度报告摘要(官方,2026-08-24披露): H1营收30.17亿(+17.24%)/归母1.85亿(-14.32%)/扣非1.75亿(-13.22%); Q2单季为H1-Q1派生: 营收18.42亿/归母1.76亿; 摘要未披露毛利率故不录"
 },
 {
  "id": "innolight-2026h1-er",
  "type": "earnings_release",
  "url": "https://m.cnfin.com/yw-lb/zixun/20260821/4458802_1.html",
  "fetched_at": "2026-08-22",
  "archive": null,
  "locator": "中际旭创2026年半年度报告(官方,2026-08-21披露): H1营收417.78亿(+182.5%)/归母136.51亿(+241.7%); Q2单季营收222.81亿(+174.6%)/归母79.17亿(+228.2%)/毛利率46.42%; 800G、1.6T高端光模块规模放量"
 },
 {
  "id": "naura-2026h1-kb",
  "type": "earnings_release",
  "url": "https://epaper.stcn.com/att/202508/29/ZQ29B532-CR_eBook.pdf",
  "fetched_at": "2026-08-24",
  "archive": null,
  "locator": "[已作废·勿再引用] 原入库的'北方华创2026H1快报:161.42亿/+29.51%/归母32.08亿'经核实系2025年半年报官方数字被二手媒体(雪球/eefocus)误传为2026年——证券时报披露PDF(2025-08-29刊)显示161.42亿恰为2025H1营收,且库内2025四季合计393.53亿与2025年报吻合。据此派生的2026Q2(58.19亿)已于2026-08-24移除。北方华创真实2026H1待官方快报/半年报核验后再入库,勿采用二手媒体'161.42亿'口径"
 },
 {
  "id": "spacex-s1",
  "type": "S-1",
  "url": "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "SpaceX S-1招股书(SEC官方, 2026-05-20递交, 2026-06-12纳斯达克IPO@\$135/募资\$857亿/估值约\$1.9万亿): 2025Q1营收\$4,067M/净亏\$528M; 2026Q1营收\$4,694M(+15.4%)/净亏\$4,276M(含xAI并表)/毛利率49.1%/capex\$10,107M(AI占76%); FY2023-2025营收10,387/14,015/18,674; 三分部:连接(Starlink)2025营收\$11,387M+运营利润\$4,423M、航天\$4,086M、AI\$3,201M运营亏\$6,355M"
 },
 {
  "id": "spacex-q2-26-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001181412&type=10-Q",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "SpaceX FY26Q2季报(2026-08-04发布): 2026Q2营收\$7,814M(+91.9% YoY)/净亏\$541M/毛利率53.8%; 2025Q2同比基数\$4,071M/净亏\$1,008M; 2025Q3/Q4官方未单独披露(FY25\$18,674M−H1\$8,138M=合计\$10,536M),按未披露不估算铁律留空"
 },
 {
  "id": "baba-fy27q1-er",
  "type": "earnings_release",
  "url": "https://www.alibabagroup.com/document-2026456290057781248",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "阿里巴巴2026年6月季度业绩公告(官方, 2026-08-20 19:36发布): 收入RMB268,953M(2689.53亿,+9%); 净利104.44亿(-75%,含商誉减值); 经调整EBITA 273.29亿(-30%); 分部重组:云智能+平头哥合并为AI云与算力服务,收入484.37亿(+45%),AI相关产品收入123.76亿(连续12季度三位数); ARR突破495亿,CEO预计下季AI ARR近\$100亿; capex 676.78亿(+75%,云基础设施); 自由现金流净流出446.70亿; 即时零售+45%,CMR -7%; 88VIP约6400万"
 },
 {
  "id": "mops-synth-tsmc-2024",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_113_1_0.html",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "公开资讯观测站t21月营收汇总表(民国113年1-12月)三个月机械合成: 2024Q1=592,644/Q2=673,510/Q3=759,692/Q4=868,461(TWD_M,千元÷1000); 同法合成2025Q1=839,254 vs 官方季报839,250偏差0.00%校验通过"
 },
 {
  "id": "mops-synth-quanta-2024",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_113_1_0.html",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "公开资讯观测站t21月营收汇总(民国113年)三个月机械合成广达: 2024Q1=258,939/Q2=309,954/Q3=424,549/Q4=415,662(TWD_M); 供时滞曲线10季窗口"
 },
 {
  "id": "mops-synth-wiwynn-2024",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_113_1_0.html",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "公开资讯观测站t21月营收汇总(民国113年)三个月机械合成纬颖: 2024Q1=69,628/Q2=77,481/Q3=97,818/Q4=115,614(TWD_M); 供时滞曲线10季窗口"
 },
 {
  "id": "westock-nvda-fy25",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usNVDA",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "腾讯自选股美股终端(usNVDA income): FinancialYear2025三季=NVDA FY25(自然2024): FY25Q1(止2024-04-28)\$26,044M→2024Q1/FY25Q2(止2024-07-28)\$30,040M→2024Q2/FY25Q3(止2024-10-27)\$35,082M→2024Q3; 注意westock财年错位公司标签比自然年晚一年; 值与NVDA官方新闻稿一致(FY25Q4 \$39.3B已于本轮前入库)"
 },
 {
  "id": "samsung-2024q-er",
  "type": "earnings_release",
  "url": "https://news.samsung.com/tw/",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "三星电子官方新闻室+韩联社最终核实: 2024Q1营收71.92兆/Q2 74.07兆/Q3 79.10兆/Q4 75.7883兆韩元(全年300.8709兆,同比+16.2%); KRW_B口径"
 },
 {
  "id": "hynix-2024q-er",
  "type": "earnings_release",
  "url": "https://news.skhynix.com/sk-hynix-announces-4q24-financial-results/",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "SK海力士官方新闻室: 2024Q1营收12.4296兆/Q2 16.4233兆/Q3 17.573兆(21世纪经济报道交叉)/Q4 19.7670兆韩元; 全年66.1930兆(+~102%); KRW_B口径"
 },
 {
  "id": "advt-fy24q4-er",
  "type": "earnings_release",
  "url": "https://www.advantest.com/document/en/investors/ir-library/result/E_BIZ_250729_ref2.pdf",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "爱德万测试官方IR资料(新报告分部重列FY2024): FY24Q4(2025年1-3月)营收¥232,349M(+71.1% YoY); FY24全年¥779,707M; 官方PDF表格: Q1 138,725/Q2 190,481/Q3 218,152/Q4 232,349"
 },
 {
  "id": "ibiden-fy24q4-qr",
  "type": "quarterly_report",
  "url": "https://finance.biggo.com.tw/news/jpx_tdnet_140120260220565976",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "揖斐电TDnet决算快报(东证镜像)+fintel(IBIDF)交叉: FY2024(2025年3月期)全年营收¥369,436M − 第3季累计(2024年4-12月)¥270,337M = FY24Q4(2025年1-3月)¥99,099M; 与库内2025Q2(FY25Q1 ¥97,464M)及官方2026年3月期第3季累计298,621M(=97,464+98,021+103,136校验一致)连续"
 },
 {
  "id": "kioxia-fy24q4-er",
  "type": "earnings_release",
  "url": "https://www.163.com/dy/article/JVK5KE670511DQFI.html",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "铠侠FY24Q4(2025年1-3月)决算(网易转官方): 营收¥3,471亿=¥347,100M(环比-23%,同比+7.8%); FY24全年¥17,065亿(+58.5%)"
 },
 {
  "id": "kioxia-fy25q1-er",
  "type": "earnings_release",
  "url": "https://m.memorys.com/news/183127",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "铠侠FY25Q1(2025年4-6月)决算(CFM闪存市场/Reuters表交叉): 营收¥342.8B=¥342,800M(环比-1%,同比-20%,超指引上限); Non-GAAP营业利润¥452亿"
 },
 {
  "id": "baba-fy25q4-er",
  "type": "earnings_release",
  "url": "https://www.alibabagroup.com/document-1859811057615241216",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "阿里巴巴集团官方公告(2025-05-15): 2025年3月季度(FY25Q4)营收RMB2,364.54亿(+7%); 阿里云+18%,AI产品收入连续七季度三位数增长; 归母净利123.82亿"
 },
 {
  "id": "shestu-fy26q1-er",
  "type": "earnings_release",
  "url": "https://www.shinetsu.co.jp/jp/",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "信越化学官方决算短信+みんかぶ/investing多源交叉: 2025Q1(自然季)=FY25Q4, 营收=FY25全年2,561,249−前三季累计1,929,698=631,551百万日元, 纯利=534,021−432,539=101,482百万; 2025Q2=FY26Q1决算短信(2025-07-24披露, 2025年4-6月): 营收628,549百万(+5.1%)、纯利126,428百万(含包括利益△6,468百万一次性)"
 },
 {
  "id": "adt-fy25q1-er",
  "type": "earnings_release",
  "url": "https://www.advantest.com/en/news/2025/c9kqiu0000000wt9-att/E_FR_FY2025_1Q.pdf",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "爱德万测试官方FY2025Q1决算短信(2025-07-29披露, 2025年4-6月对齐自然季2025Q2): 净销售额263,776百万日元(+90.1%YoY创单季新高)、营业利润123,952百万(+295.7%)、纯利90,180百万(+277.7%); SoC测试机191.3亿+存储测试机33.5亿; 2025Q1(FY24Q4)官方单季值未取得留待补"
 },
 {
  "id": "mops-synth-foxconn-2025",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_114_1_0.html",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "公开资讯观测站t21月营收汇总表(114年1-6月(2025Q1/Q2))三个月机械合成: 2025Q1=1642173M TWD; 2025Q2=1797347M TWD(TWD_M,千元/1000); 台积电同法合成2025Q1=839,254 vs 官方839,250偏差0.00%校验通过"
 },
 {
  "id": "mops-synth-quanta-2025",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_114_1_0.html",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "公开资讯观测站t21月营收汇总表(114年1-6月(2025Q1/Q2))三个月机械合成: 2025Q1=485672M TWD; 2025Q2=504122M TWD(TWD_M,千元/1000); 台积电同法合成2025Q1=839,254 vs 官方839,250偏差0.00%校验通过"
 },
 {
  "id": "mops-synth-wiwynn-2025",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_114_1_0.html",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "公开资讯观测站t21月营收汇总表(114年1-6月(2025Q1/Q2))三个月机械合成: 2025Q1=170655M TWD; 2025Q2=220744M TWD(TWD_M,千元/1000); 台积电同法合成2025Q1=839,254 vs 官方839,250偏差0.00%校验通过"
 },
 {
  "id": "mops-synth-unimicron-2024",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_114_1_0.html",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "公开资讯观测站t21月营收汇总表(113年10-12月(2024Q4)+114年1-3月(2025Q1))三个月机械合成: 2024Q4=29381M TWD; 2025Q1=30090M TWD(TWD_M,千元/1000); 台积电同法合成2025Q1=839,254 vs 官方839,250偏差0.00%校验通过"
 },
 {
  "id": "mops-synth-delta-2025",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_114_1_0.html",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "公开资讯观测站t21月营收汇总表(114年1-6月(2025Q1/Q2))三个月机械合成: 2025Q1=118919M TWD; 2025Q2=124035M TWD(TWD_M,千元/1000); 台积电同法合成2025Q1=839,254 vs 官方839,250偏差0.00%校验通过"
 },
 {
  "id": "westock-usGLW",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usGLW/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2025Q1营收3452M$/净利157; 2025Q2营收3862M$/净利469"
 },
 {
  "id": "westock-usARM",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usARM/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2025Q1营收939M$/净利223"
 },
 {
  "id": "westock-usASML",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usASML/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2025Q1营收7032.4M€; 2025Q2营收7524.9M€; ASML 20-F申报者; westock USD折算值×EUR 0.863128回折, 与库内2025Q3(7516 EUR_M)连续性验证通过; 财年自然历"
 },
 {
  "id": "westock-usLRCX",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usLRCX/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2025Q2营收4376M$/净利1191"
 },
 {
  "id": "westock-usKLAC",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usKLAC/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2025Q2营收3075.8M$/净利824.5"
 },
 {
  "id": "westock-usAEHR",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usAEHR/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2025Q2营收13.45M$/净利-1.03"
 },
 {
  "id": "westock-usGFS",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usGFS/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2025Q1营收1585M$/净利210; 2025Q2营收1688M$/净利228"
 },
 {
  "id": "westock-usTSEM",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usTSEM/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2025Q1营收358.2M$/净利40.1; 2025Q2营收372.1M$/净利46.6"
 },
 {
  "id": "westock-usASX",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usASX/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2025Q1营收143411M NT$/净利7313; 2025Q2营收155410M NT$/净利7753; 日月光; westock USD折算×TWD 31.8395回折, 与库内2025Q3(168569)连续"
 },
 {
  "id": "westock-usSTX",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usSTX/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2025Q2营收2325M$/净利336"
 },
 {
  "id": "westock-usSNDK",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usSNDK/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2025Q2营收1876M$/净利104"
 },
 {
  "id": "westock-usMRVL",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usMRVL/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2024Q4营收1426.5M$/净利-392.7; Marvell 财年1月底止; westock按自然季口径2024-12-31期单季值"
 },
 {
  "id": "westock-usNOK",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usNOK/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2025Q1营收3988.2M€; 2025Q2营收4452.3M€; 诺基亚; westock USD折算×0.863128回折EUR, 与库内2025Q3(4815)连续; 净利口径异常跳过"
 },
 {
  "id": "westock-usAAOI",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usAAOI/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2024Q4营收100.3M$/净利-119.7"
 },
 {
  "id": "westock-usORCL",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usORCL/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2025Q2营收14059M$/净利3151"
 },
 {
  "id": "westock-usNBIS",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usNBIS/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2025Q1营收55.3M$/净利-113.6; 2025Q2营收105.1M$/净利502.5; Nebius 2025Q2净利含约6.26亿美元一次性收益(NonOperating 625.6)"
 },
 {
  "id": "westock-usBE",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usBE/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2025Q1营收326M$/净利-23.8; 2025Q2营收401.2M$/净利-42.6"
 },
 {
  "id": "westock-usPOET",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/usPOET/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2024Q4营收0.03M$/净利-30.3; 2025Q1营收0.17M$/净利6.3; POET 微型公司, 季营收不足百万美元属正常披露"
 },
 {
  "id": "westock-sh688048",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sh688048/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2024Q4营收0.7亿/净利-0.36; 2025Q1营收0.94亿/净利-0.07"
 },
 {
  "id": "westock-sh688498",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sh688498/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2024Q4营收0.74亿/净利-0.06; 2025Q1营收0.84亿/净利0.14"
 },
 {
  "id": "westock-sh688195",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sh688195/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季Sales_Q/BasicNetIncome_Q, 源自公司法定披露): 2024Q4营收1.13亿/净利0.14; 2025Q1营收1.13亿/净利0.13"
 },
 {
  "id": "westock-hk01347",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/hk01347/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股港股终端(华虹半导体, 港元口径按联系汇率7.8折算USD): 2025Q1营收4,207,659,018.63港元→$539.4M; 2025Q2单季=H1 8,689,713,823.83−Q1 4,207,659,018.63=4,482,054,805.20港元→$574.6M; 与库内2025Q3($641M)规模趋势连续; 净利口径(ProfitToShareholders)未核跳过"
 }, {
  "id": "westock-sh600183",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sh600183/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收56.44亿/归母3.66亿; 2025Q1营收56.11亿/归母5.64亿"
 },
 {
  "id": "westock-sz002428",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sz002428/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收2.65亿/归母0.24亿; 2025Q1营收2.4亿/归母0.1亿"
 },
 {
  "id": "westock-sh688521",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sh688521/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收6.72亿/归母-2.05亿; 2025Q1营收3.9亿/归母-2.2亿"
 },
 {
  "id": "westock-sz002371",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sz002371/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收95.43亿/归母11.54亿; 2025Q1营收82.06亿/归母15.81亿"
 },
 {
  "id": "westock-sh688012",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sh688012/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收35.58亿/归母7.03亿; 2025Q1营收21.73亿/归母3.13亿"
 },
 {
  "id": "westock-sh688072",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sh688072/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收18.26亿/归母4.17亿; 2025Q1营收7.09亿/归母-1.47亿"
 },
 {
  "id": "westock-sh688409",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sh688409/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收7.25亿/归母0.13亿; 2025Q1营收7.62亿/归母-0.22亿"
 },
 {
  "id": "westock-sh600584",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sh600584/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收109.84亿/归母5.33亿; 2025Q1营收93.35亿/归母2.03亿"
 },
 {
  "id": "westock-sz002156",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sz002156/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收68亿/归母1.25亿; 2025Q1营收60.92亿/归母1.01亿"
 },
 {
  "id": "westock-sh688008",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sh688008/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收10.68亿/归母4.34亿; 2025Q1营收12.22亿/归母5.25亿"
 },
 {
  "id": "westock-sh603296",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sh603296/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收338.68亿/归母8.76亿; 2025Q1营收349.98亿/归母8.42亿"
 },
 {
  "id": "westock-sz300308",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sz300308/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收65.5亿/归母14.19亿; 2025Q1营收66.74亿/归母15.83亿"
 },
 {
  "id": "westock-sz300502",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sz300502/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收35.16亿/归母11.92亿; 2025Q1营收40.52亿/归母15.73亿"
 },
 {
  "id": "westock-sz300394",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sz300394/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收8.57亿/归母3.67亿; 2025Q1营收9.45亿/归母3.38亿"
 },
 {
  "id": "westock-sz300476",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sz300476/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收30.34亿/归母3.9亿; 2025Q1营收43.12亿/归母9.21亿"
 },
 {
  "id": "westock-sz002384",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sz002384/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收103.04亿/归母0.18亿; 2025Q1营收86.02亿/归母4.56亿"
 },
 {
  "id": "westock-sz002463",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sz002463/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收43.31亿/归母7.39亿; 2025Q1营收40.38亿/归母7.62亿"
 },
 {
  "id": "westock-sz002916",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sz002916/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收48.58亿/归母3.9亿; 2025Q1营收47.83亿/归母4.91亿"
 },
 {
  "id": "westock-sh603228",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sh603228/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收35.81亿/归母2.65亿; 2025Q1营收33.43亿/归母3.25亿"
 },
 {
  "id": "westock-sz002837",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sz002837/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2024Q4营收17.17亿/归母1亿; 2025Q1营收9.33亿/归母0.48亿"
 },
 {
  "id": "westock-sh688808",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sh688808/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2025Q1营收2.01亿/归母0.19亿"
 },
 {
  "id": "westock-sh688820",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sh688820/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2025Q1营收15.01亿/归母1.26亿"
 },
 {
  "id": "westock-sh688256",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sh688256/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2025Q1营收11.11亿/归母3.55亿; 2025Q2营收17.69亿/归母6.83亿"
 },
 {
  "id": "westock-sh601138",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sh601138/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2025Q1营收1604.15亿/归母52.31亿; 2025Q2营收2003.45亿/归母68.83亿"
 },
 {
  "id": "westock-sz301183",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sz301183/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2025Q1营收1.56亿/归母0.2亿; 2025Q2营收2.2亿/归母0.31亿"
 },
 {
  "id": "westock-sh688313",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/sh688313/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股行情终端利润表(单季口径OperatingRevenue_Q/NPParentCompanyOwners_Q, 源自公司法定披露;已与巨潮官方披露交叉验证——兆易创新2025Q1/Q2与官方中报推算值完全一致): 2025Q1营收4.36亿/归母0.93亿; 2025Q2营收5.56亿/归母1.23亿"
 },
 {
  "id": "westock-hk00981",
  "type": "quarterly_report",
  "url": "https://gu.qq.com/hk00981/gp",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯自选股港股终端(中芯国际, 港元口径按联系汇率7.8折算USD): 2025Q1营收17,479,772,236.57港元→$2,241M; 2025Q2单季=H1 34,980,682,015.57−Q1 17,479,772,236.57=17,500,909,779港元→$2,243.7M; 与公司官方美元披露口径一致(Q1官方$2,247M量级); 净利口径差异未核跳过"
 },
 {
  "id": "tsmc-2025q1-er",
  "type": "earnings_release",
  "url": "https://investor.tsmc.com/english/quarterly-results/2025",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "TSMC 2025Q1法说会(2025-04-17): 合并营收839,250百万新台币(+41.8%YoY)、净利361,560百万新台币(+60.3%YoY)、营业利益407,080百万(+63%); 多源交叉(台积电官方/百科/腾讯财经)"
 },
 {
  "id": "tsmc-2025q2-er",
  "type": "earnings_release",
  "url": "https://investor.tsmc.com/english/quarterly-results/2025",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "TSMC 2025Q2法说会(2025-07-17): 合并营收933,790百万新台币(+38.6%YoY/+11.3%QoQ)、净利398,270百万新台币(+60.7%YoY)、毛利率58.6%; 多源交叉"
 },
 {
  "id": "samsung-2025q1-er",
  "type": "earnings_release",
  "url": "https://images.samsung.com/is/content/samsung/assets/global/ir/docs/2025_1Q_conference_eng.pdf",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "Samsung官方IR Presentation 1Q25: 总营收79.14兆韩元(=79,140十亿KRW,+10%YoY)、营业利益6.7兆; DS部门营收25.1兆(存储19.1兆)"
 },
 {
  "id": "samsung-2025q2-er",
  "type": "earnings_release",
  "url": "https://news.samsung.com/tw/三星電子公布2025年第二季營運績效",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "Samsung官方新闻室(2025-07-31): 2025Q2合并营收74.57兆韩元(=74,570十亿KRW,+0.67%YoY)、营业利益4.68兆、归母净利4.93兆(=49,300十亿KRW); DS部门营收27.9兆"
 },
 {
  "id": "hynix-2025q1-er",
  "type": "earnings_release",
  "url": "https://news.skhynix.com/cn/sk-hynix-announces-2q25-financial-results",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SK海力士官方新闻稿(2025-07-24, 附1Q25对比): 2025Q1营收17,639.1十亿KRW、营业利润7,440.5十亿、净利8,108.2十亿"
 },
 {
  "id": "hynix-2025q2-er",
  "type": "earnings_release",
  "url": "https://news.skhynix.com/cn/sk-hynix-announces-2q25-financial-results",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SK海力士官方新闻稿(2025-07-24): 2025Q2营收22,232十亿KRW(+35%YoY/+26%QoQ, 创单季新高)、营业利润9,212.9十亿(利益率41%)、净利6,996.2十亿"
 },
 {
  "id": "tencent-2025q1-er",
  "type": "earnings_release",
  "url": "https://www1.hkexnews.hk/listedco/listconews/sehk/2025/0826/2025082600676.pdf",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "腾讯控股2025中期报告(港交所官方PDF, 2025-08-13披露, 附Q1对比): 2025Q1营收180,022百万人民币(+12.9%YoY)、归母净利47,821百万(+14.2%YoY)"
 },
 {
  "id": "sec-xbrl-snps",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0000883241/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2024Q4(止2025-01-31, 10-Q accn:0000883241-26-000014)营收$1455.3M; 2025Q1(止2025-04-30, 10-Q accn:0000883241-26-000018)营收$1604.3M"
 },
 {
  "id": "sec-xbrl-arm",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001973239/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q2(止2025-06-30, 6-K accn:0001973239-26-000114)营收$1053.0M"
 },
 {
  "id": "sec-xbrl-amat",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0000006951/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-04-27, 10-Q accn:0001628280-26-037227)营收$7100.0M; 2025Q2(止2025-07-27, 10-Q accn:0000006951-25-000037)营收$7302.0M"
 },
 {
  "id": "sec-xbrl-aehr",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001040470/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-02-28, 10-Q accn:0001654954-26-003348)营收$18.3M"
 },
 {
  "id": "sec-xbrl-mu",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0000723125/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-02-27, 10-Q accn:0000723125-26-000006)营收$8053.0M; 2025Q2(止2025-05-29, 10-Q accn:0000723125-26-000015)营收$9301.0M"
 },
 {
  "id": "sec-xbrl-wdc",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0000106040/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q2(止2025-06-27, 10-K accn:0000106040-25-000038)营收$2605.0M; 2025Q1(止2025-03-28, 10-Q accn:0001628280-26-029054)营收$2294.0M"
 },
 {
  "id": "sec-xbrl-nvda",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001045810/us-gaap/Revenues.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:Revenues): 2025Q1(止2025-04-27, 10-Q accn:0001045810-26-000052)营收$44062.0M"
 },
 {
  "id": "sec-xbrl-avgo",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001730168/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2024Q4(止2025-02-02, 10-Q accn:0001730168-26-000016)营收$14916.0M; 2025Q1(止2025-05-04, 10-Q accn:0001730168-26-000054)营收$15004.0M"
 },
 {
  "id": "sec-xbrl-mrvl",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001835632/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-05-03, 10-Q accn:0001835632-26-000019)营收$1895.3M"
 },
 {
  "id": "sec-xbrl-dell",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001571996/us-gaap/Revenues.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:Revenues): 2024Q4(止2025-01-31, 10-K accn:0001571996-25-000034)营收$23931.0M; 2025Q1(止2025-05-02, 10-Q accn:0001571996-26-000030)营收$23378.0M"
 },
 {
  "id": "sec-xbrl-csco",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0000858877/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-04-26, 10-Q accn:0000858877-26-000078)营收$14149.0M"
 },
 {
  "id": "sec-xbrl-orcl",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001341439/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-02-28, 10-Q accn:0001193125-26-101045)营收$14130.0M"
 },
 {
  "id": "sec-xbrl-linde",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001707925/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0001628280-26-029165)营收$8112.0M; 2025Q2(止2025-06-30, 10-Q accn:0001628280-26-051289)营收$8495.0M"
 },
 {
  "id": "sec-xbrl-axti",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001051627/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0001437749-26-017054)营收$19.4M; 2025Q2(止2025-06-30, 10-Q accn:0001437749-26-027677)营收$18.0M"
 },
 {
  "id": "sec-xbrl-lrcx",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0000707549/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-30, 10-Q accn:0000707549-26-000022)营收$4720.2M"
 },
 {
  "id": "sec-xbrl-klac",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0000319201/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0000319201-26-000016)营收$3063.0M"
 },
 {
  "id": "sec-xbrl-form",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001039399/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-29, 10-Q accn:0001039399-26-000023)营收$171.4M; 2025Q2(止2025-06-28, 10-Q accn:0001039399-26-000033)营收$195.8M"
 },
 {
  "id": "sec-xbrl-stx",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001137789/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-28, 10-Q accn:0001137789-26-000088)营收$2160.0M"
 },
 {
  "id": "sec-xbrl-sndk",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0002023554/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-28, 10-Q accn:0001628280-26-029401)营收$1695.0M"
 },
 {
  "id": "sec-xbrl-amd",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0000002488/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-29, 10-Q accn:0000002488-26-000076)营收$7438.0M; 2025Q2(止2025-06-28, 10-Q accn:0000002488-26-000123)营收$7685.0M"
 },
 {
  "id": "sec-xbrl-qcom",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0000804328/us-gaap/Revenues.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:Revenues): 2025Q1(止2025-03-30, 10-Q accn:0000804328-26-000061)营收$10979.0M; 2025Q2(止2025-06-29, 10-Q accn:0000804328-26-000086)营收$10365.0M"
 },
 {
  "id": "sec-xbrl-intc",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0000050863/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-29, 10-Q accn:0000050863-26-000079)营收$12667.0M; 2025Q2(止2025-06-28, 10-Q accn:0000050863-26-000157)营收$12859.0M"
 },
 {
  "id": "sec-xbrl-cerebras",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0002021728/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0001628280-26-044981)营收$99.5M; 2025Q2(止2025-06-30, 10-Q accn:0001628280-26-056357)营收$103.3M"
 },
 {
  "id": "sec-xbrl-anet",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001596532/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0001596532-26-000078)营收$2004.8M; 2025Q2(止2025-06-30, 10-Q accn:0001596532-26-000175)营收$2204.8M"
 },
 {
  "id": "sec-xbrl-cohr",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0000820318/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2024Q4(止2024-12-31, 10-Q accn:0000820318-26-000006)营收$1434.7M; 2025Q1(止2025-03-31, 10-Q accn:0000820318-26-000013)营收$1497.9M"
 },
 {
  "id": "sec-xbrl-lite",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001633978/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-29, 10-Q accn:0001628280-25-022788)营收$425.2M"
 },
 {
  "id": "sec-xbrl-fn",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001408710/us-gaap/Revenues.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:Revenues): 2024Q4(止2024-12-27, 10-Q accn:0001408710-26-000008)营收$833.6M; 2025Q1(止2025-03-28, 10-Q accn:0001408710-26-000016)营收$871.8M"
 },
 {
  "id": "sec-xbrl-aaoi",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001158114/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0001437749-26-015620)营收$99.9M"
 },
 {
  "id": "sec-xbrl-vrt",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001674101/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0001628280-26-026556)营收$2036.0M; 2025Q2(止2025-06-30, 10-Q accn:0001628280-26-050609)营收$2638.1M"
 },
 {
  "id": "sec-xbrl-eton",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001551182/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0001551182-26-000013)营收$6377.0M; 2025Q2(止2025-06-30, 10-Q accn:0001551182-26-000030)营收$7028.0M"
 },
 {
  "id": "sec-xbrl-msft",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0000789019/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0001193125-26-191507)营收$70066.0M"
 },
 {
  "id": "sec-xbrl-goog",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001652044/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0001652044-25-000043)营收$90234.0M; 2025Q2(止2025-06-30, 10-Q accn:0001652044-26-000071)营收$96428.0M"
 },
 {
  "id": "sec-xbrl-amzn",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001018724/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0001018724-26-000014)营收$155667.0M; 2025Q2(止2025-06-30, 10-Q accn:0001018724-26-000026)营收$167702.0M"
 },
 {
  "id": "sec-xbrl-meta",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001326801/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0001628280-26-028526)营收$42314.0M; 2025Q2(止2025-06-30, 10-Q accn:0001628280-26-050705)营收$47516.0M"
 },
 {
  "id": "sec-xbrl-aapl",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0000320193/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-29, 10-Q accn:0000320193-26-000013)营收$95359.0M; 2025Q2(止2025-06-28, 10-Q accn:0000320193-26-000020)营收$94036.0M"
 },
 {
  "id": "sec-xbrl-crwv",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001769628/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0001769628-26-000222)营收$982.0M; 2025Q2(止2025-06-30, 10-Q accn:0001769628-26-000366)营收$1212.0M"
 },
 {
  "id": "sec-xbrl-iren",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001878848/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2024Q4(止2024-12-31, 10-Q accn:0001878848-26-000015)营收$116.1M; 2025Q1(止2025-03-31, 10-Q accn:0001878848-26-000026)营收$144.8M"
 },
 {
  "id": "sec-xbrl-gev",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001996810/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0001996810-26-000064)营收$8032.0M; 2025Q2(止2025-06-30, 10-Q accn:0001996810-26-000148)营收$9111.0M"
 },
 {
  "id": "sec-xbrl-vst",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001692819/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0001692819-26-000014)营收$4250.0M; 2025Q2(止2025-06-30, 10-Q accn:0001692819-26-000019)营收$3753.0M"
 },
 {
  "id": "sec-xbrl-flnc",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001868941/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0001104659-26-056304)营收$431.6M; 2025Q2(止2025-06-30, 10-Q accn:0001868941-26-000029)营收$602.5M"
 },
 {
  "id": "sec-xbrl-tsla",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001318605/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0001628280-26-026673)营收$19335.0M; 2025Q2(止2025-06-30, 10-Q accn:0001628280-26-049270)营收$22496.0M"
 },
 {
  "id": "sec-xbrl-now",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001373715/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0001373715-26-000056)营收$3088.0M; 2025Q2(止2025-06-30, 10-Q accn:0001373715-26-000076)营收$3215.0M"
 },
 {
  "id": "sec-xbrl-pltr",
  "type": "10-Q",
  "url": "https://data.sec.gov/api/xbrl/companyconcept/CIK0001321655/us-gaap/RevenueFromContractWithCustomerExcludingAssessedTax.json",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "SEC XBRL官方结构化API(us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax): 2025Q1(止2025-03-31, 10-Q accn:0001321655-26-000028)营收$883.9M; 2025Q2(止2025-06-30, 10-Q accn:0001321655-26-000041)营收$1003.7M"
 },
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
  "id": "mops-t21-115m7",
  "type": "monthly_revenue",
  "url": "https://mopsov.twse.com.tw/nas/t21/sii/t21sc03_115_7_0.html",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "公开资讯观测站115年7月营收汇总表(千元), 经winvest/財報狗/DIGITIMES多源交叉验证: 广达366,274(月减4.91%/年增101.32%, 单月历史次高; 1-7月累计22,120.88亿+92.66%); 纬颖117,685,530(月增5.67%/年增39.23%; 1-7月累计6,723.46亿+41.27%)"
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
  "id": "tsmc-monthly-2026m7",
  "type": "monthly_revenue",
  "url": "https://pr.tsmc.com/english/news/3329",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "TSMC官方新闻稿(2026-08-10)及SEC 6-K: 2026年7月合并营收467,580百万新台币(+44.7%YoY/+5.6%MoM,连续3个月历史新高;1-7月累计2,872,064百万新台币+37.0%YoY)"
 },
 {
  "id": "msft-fy25q4-er",
  "type": "earnings_release",
  "url": "https://www.microsoft.com/en-us/investor/earnings/fy-2025-q4/press-release-online",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "微软FY25Q4(2025-07-30披露, 财季止2025-06-30对齐自然季2025Q2): 总资本开支(含融资租赁)$24.2B(+27%YoY/+13%QoQ), 营收$76.4B(+18%); FY26Q1指引capex超$30B; 经国信证券/通信行业综述/研报多源交叉(均引官方财报)"
 },
 {
  "id": "goog-2025q2-capex",
  "type": "earnings_release",
  "url": "https://abc.xyz/2025-q2-earnings-release/",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "Alphabet 2025Q2(2025-07-23披露): 资本开支$22.45B(+70%YoY), 全年capex指引由$75B上调至$85B; 营收$96.4B(+14%); 多源研报交叉核实"
 },
 {
  "id": "amzn-2025q2-capex",
  "type": "earnings_release",
  "url": "https://ir.aboutamazon.com/quarterly-results/default.aspx",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "Amazon 2025Q2(2025-07-31披露): 资本开支(PP&E购置)$31.37B(+91.5%YoY), 2025全年计划超$100B; 营收$167.7B(+13%); 多源研报交叉核实"
 },
 {
  "id": "meta-2025q2-capex",
  "type": "earnings_release",
  "url": "https://investor.atmeta.com/investor-news/default.aspx",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "Meta 2025Q2(2025-07-30披露): 资本开支(含融资租赁本金)$17.01B(+100.8%YoY), 全年指引上调至$66-72B; 营收$47.5B(+22%); 多源研报交叉核实"
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
  "id": "nvda-fy25q4-er",
  "type": "earnings_release",
  "url": "https://nvidianews.nvidia.com/news/q4-2025-financial-results-press-release",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "NVIDIA官方新闻稿(2025-02-26披露, FY25Q4财季止2025-01-26, 覆盖2024年11月-2025年1月对齐自然季2024Q4): 营收$39.3B(+78%YoY/+12%QoQ), 精确值39,331M; Q4 FY25 DC营收$35.6B"
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
 },
 {
  "id": "csco-2026q2-er",
  "type": "earnings_release",
  "url": "https://s21.q4cdn.com/812015656/files/doc_earnings/2026/q4/earnings-result/Q4FY26-Press-Release.pdf",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "Cisco官方新闻稿(2026-08-12披露, FY26Q4财季止2026-07-25, 覆盖5-7月对齐自然季2026Q2): 营收$17.3B(+18%YoY), GAAP净利$3.9B(+51%), GAAP毛利率64.1%, GAAP EPS $0.97(+52%); Q4产品订单+35%/网络产品订单+40%(连续8季双位数); AI基础设施Q4订单$4B/FY26累计$9.3B, FY27 AI营收预期$7.5B; Q1 FY27指引营收$18.0-18.2B(中值18100存guidance_next_q, 对应自然季2026Q3)"
 },
 {
  "id": "csco-2026q1-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=CISCO%20SYSTEMS&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2026-04-30(自然季2026Q1): 营收 15841M, 净利润 3373M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "csco-2025q4-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=CISCO%20SYSTEMS&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2026-01-31(自然季2025Q4): 营收 15349M, 净利润 3175M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "csco-2025q3-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=CISCO%20SYSTEMS&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2025-10-31(自然季2025Q3): 营收 14883M, 净利润 2860M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "csco-2025q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=CISCO%20SYSTEMS&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2025-07-31(自然季2025Q2): 营收 14673M, 净利润 2550M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "nok-2026q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=NOKIA%20CORP&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2026-06-30(自然季2026Q2): 营收 4815M, 净利润 2M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=EUR)"
 },
 {
  "id": "nok-2026q1-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=NOKIA%20CORP&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2026-03-31(自然季2026Q1): 营收 4497M, 净利润 86M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=EUR)"
 },
 {
  "id": "nok-2025q4-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=NOKIA%20CORP&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2025-12-31(自然季2025Q4): 营收 6125M, 净利润 542M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=EUR)"
 },
 {
  "id": "nok-2025q3-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=NOKIA%20CORP&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2025-09-30(自然季2025Q3): 营收 4828M, 净利润 78M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=EUR)"
 },
 {
  "id": "lite-2026q2-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1633978/000162828026055726/lite_ex991xq4fy26.htm",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "Lumentum 8-K EX-99.1 (2026-08-11披露, FY26Q4财季止2026-06-27, 对齐自然季2026Q2): 净营收1,006.3M(+109.3%YoY/+24.5%QoQ), GAAP毛利率47.4%(Non-GAAP 50.4%), GAAP净亏损-7,161.7M(含可转债equitization一次性非现金债务清偿损失7.8B, 非主营; Non-GAAP净利326.3M); FY27Q1指引营收1,225-1,275M"
 },
 {
  "id": "lite-2026q1-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=LUMENTUM%20HOLDINGS&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2026-03-31(自然季2026Q1): 营收 808.4M, 净利润 144.2M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "lite-2025q4-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=LUMENTUM%20HOLDINGS&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2025-12-31(自然季2025Q4): 营收 665.5M, 净利润 78.2M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "lite-2025q3-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=LUMENTUM%20HOLDINGS&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2025-09-30(自然季2025Q3): 营收 533.8M, 净利润 4.2M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "lite-2025q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=LUMENTUM%20HOLDINGS&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2025-06-30(自然季2025Q2): 营收 480.7M, 净利润 213.3M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "fn-2026q1-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=FABRINET&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2026-03-31(自然季2026Q1): 营收 1214.293M, 净利润 125.213M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "fn-2025q4-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=FABRINET&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2025-12-31(自然季2025Q4): 营收 1132.888M, 净利润 112.628M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "fn-2025q3-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=FABRINET&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2025-09-30(自然季2025Q3): 营收 978.128M, 净利润 92.964M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "fn-2025q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=FABRINET&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2025-06-30(自然季2025Q2): 营收 909.692M, 净利润 87.207M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "aaoi-2026q1-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=APPLIED%20OPTOELECTRONICS&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2026-03-31(自然季2026Q1): 营收 151.144M, 净利润 -14.281M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "aaoi-2025q4-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=APPLIED%20OPTOELECTRONICS&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2025-12-31(自然季2025Q4): 营收 134.274M, 净利润 -2.022M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "aaoi-2025q3-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=APPLIED%20OPTOELECTRONICS&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2025-09-30(自然季2025Q3): 营收 118.63M, 净利润 -17.936M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "aaoi-2025q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=APPLIED%20OPTOELECTRONICS&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2025-06-30(自然季2025Q2): 营收 102.952M, 净利润 -9.098M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "poet-2026q1-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=POET%20TECHNOLOGIES&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2026-03-31(自然季2026Q1): 营收 0.503M, 净利润 -12.344M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "poet-2025q4-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=POET%20TECHNOLOGIES&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2025-12-31(自然季2025Q4): 营收 0.341M, 净利润 -42.672M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "poet-2025q3-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=POET%20TECHNOLOGIES&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2025-09-30(自然季2025Q3): 营收 0.298M, 净利润 -9.37M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "poet-2025q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=POET%20TECHNOLOGIES&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "SEC 10-Q 检索页, 财季止2025-06-30(自然季2025Q2): 营收 0.268M, 净利润 -17.263M, 取自 Alpha Vantage INCOME_STATEMENT (reportedCurrency=USD)"
 },
 {
  "id": "qveris-av-linde",
  "type": "sec_xbrl_derived",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=LINDE%20PLC&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris Alpha Vantage INCOME_STATEMENT 标准化提取自 SEC 10-Q XBRL: 2026Q2(截至2026-06-30)营收9289M/净利1928M; 2026Q1(截至2026-03-31)营收8781M/净利1857M; 2025Q4(截至2025-12-31)营收8764M/净利1573M; 2025Q3(截至2025-09-30)营收8615M/净利1929M"
 },
 {
  "id": "qveris-av-glw",
  "type": "sec_xbrl_derived",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=CORNING%20INCORPORATED&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris Alpha Vantage INCOME_STATEMENT 标准化提取自 SEC 10-Q XBRL: 2026Q2(截至2026-06-30)营收4505M/净利559M; 2026Q1(截至2026-03-31)营收4144M/净利371M; 2025Q4(截至2025-12-31)营收4215M/净利540M; 2025Q3(截至2025-09-30)营收4100M/净利430M"
 },
 {
  "id": "qveris-av-axti",
  "type": "sec_xbrl_derived",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=AXT%20INC&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris Alpha Vantage INCOME_STATEMENT 标准化提取自 SEC 10-Q XBRL: 2026Q2(截至2026-06-30)营收47.589M/净利11.128M; 2026Q1(截至2026-03-31)营收26.924M/净利-1.62M; 2025Q4(截至2025-12-31)营收23.041M/净利-3.548M; 2025Q3(截至2025-09-30)营收27.955M/净利-1.906M"
 },
 {
  "id": "qveris-av-arm",
  "type": "sec_xbrl_derived",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=ARM%20HOLDINGS%20PLC&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris Alpha Vantage INCOME_STATEMENT 标准化提取自 SEC 10-Q XBRL(财年3月截止,按自然季映射): 2026Q2(截至2026-06-30)营收1289M/净利270M; 2026Q1(截至2026-03-31)营收1490M/净利313M; 2025Q4(截至2025-12-31)营收1242M/净利223M; 2025Q3(截至2025-09-30)营收1135M/净利238M"
 },
 {
  "id": "qveris-av-klac",
  "type": "sec_xbrl_derived",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=KLA%20CORPORATION&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris Alpha Vantage INCOME_STATEMENT 标准化提取自 SEC 10-Q XBRL: 2026Q2(截至2026-06-30)营收3657.556M/净利1363.059M; 2026Q1(截至2026-03-31)营收3415.078M/净利1200.99M; 2025Q4(截至2025-12-31)营收3297.146M/净利1145.682M; 2025Q3(截至2025-09-30)营收3209.696M/净利1121.04M"
 },
 {
  "id": "qveris-av-form",
  "type": "sec_xbrl_derived",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=FORMFACTOR%20INC&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris Alpha Vantage INCOME_STATEMENT 标准化提取自 SEC 10-Q XBRL: 2026Q2(截至2026-06-30)营收258.242M/净利56.207M; 2026Q1(截至2026-03-31)营收226.144M/净利20.384M; 2025Q4(截至2025-12-31)营收215.163M/净利23.218M; 2025Q3(截至2025-09-30)营收202.676M/净利15.656M"
 },
 {
  "id": "qveris-av-aehr",
  "type": "sec_xbrl_derived",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=AEHR%20TEST%20SYSTEMS&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris Alpha Vantage INCOME_STATEMENT 标准化提取自 SEC 10-Q XBRL(财年5月截止,按自然季映射): 2026Q2(截至2026-05-31)营收19.751M/净利1.391M; 2026Q1(截至2026-02-28)营收10.313M/净利-3.203M; 2025Q4(截至2025-11-30)营收9.884M/净利-3.23M; 2025Q3(截至2025-08-31)营收10.969M/净利-2.084M"
 },
 {
  "id": "qveris-fmp-shestu",
  "type": "quarterly_report",
  "url": "https://www.sdkworld.com/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris FMP As Reported 损益表提取自信越化学官方季报(reportedCurrency=JPY): 2026Q2(截至2026-06-30)营收662424M日元/净利130829M; 2026Q1(截至2026-03-31)营收639969M/净利90138M; 2025Q4(截至2025-12-31)营收649478M/净利126477M; 2025Q3(截至2025-09-30)营收655973M/净利131415M; 原始日元÷1e6换算JPY_M"
 },
 {
  "id": "qveris-fmp-adt",
  "type": "quarterly_report",
  "url": "https://www.advantest.com/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris FMP As Reported 损益表提取自爱德万官方季报(reportedCurrency=JPY): 2026Q2(截至2026-06-30)营收367473M日元/净利174780M; 2026Q1(截至2026-03-31)营收328073M/净利126827M; 2025Q4(截至2025-12-31)营收273804M/净利78713M; 2025Q3(截至2025-09-30)营收262957M/净利79633M; 原始日元÷1e6换算JPY_M"
 },
 {
  "id": "qveris-cn-sytech",
  "type": "exchange_filing_derived",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=600183",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris cn_financial_pro.income_statement.v1(type=1合并报表) 提取自交易所定期披露;自然季由累计报告差值还原:2026Q1=2026一季报;2025Q4=2025年报−2025三季报;2025Q3=2025三季报−2025半年报;2025Q2=2025半年报−2025一季报;单位人民币元→CNY_YI(÷1e8);营收/归母净利润:2026Q1=81.41亿/11.58亿;2025Q4=78.18亿/8.91亿;2025Q3=79.34亿/10.17亿;2025Q2=70.69亿/8.63亿"
 },
 {
  "id": "qveris-cn-ynge",
  "type": "exchange_filing_derived",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=002428",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris cn_financial_pro.income_statement.v1(type=1合并报表) 提取自交易所定期披露;自然季由累计报告差值还原:2026Q1=2026一季报;2025Q4=2025年报−2025三季报;2025Q3=2025三季报−2025半年报;2025Q2=2025半年报−2025一季报;单位人民币元→CNY_YI(÷1e8);营收/归母净利润:2026Q1=2.89亿/0.09亿;2025Q4=2.67亿/0.02亿;2025Q3=2.69亿/-0.04亿;2025Q2=2.89亿/0.12亿"
 },
 {
  "id": "qveris-cn-veri",
  "type": "exchange_filing_derived",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=688521",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris cn_financial_pro.income_statement.v1(type=1合并报表) 提取自交易所定期披露;自然季由累计报告差值还原:2026Q1=2026一季报;2025Q4=2025年报−2025三季报;2025Q3=2025三季报−2025半年报;2025Q2=2025半年报−2025一季报;单位人民币元→CNY_YI(÷1e8);营收/归母净利润:2026Q1=8.36亿/-3.41亿;2025Q4=8.98亿/-1.81亿;2025Q3=12.81亿/-0.27亿;2025Q2=5.84亿/-1.00亿"
 },
 {
  "id": "qveris-cn-amec",
  "type": "exchange_filing_derived",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=688012",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris cn_financial_pro.income_statement.v1(type=1合并报表) 提取自交易所定期披露;自然季由累计报告差值还原:2026Q1=2026一季报;2025Q4=2025年报−2025三季报;2025Q3=2025三季报−2025半年报;2025Q2=2025半年报−2025一季报;单位人民币元→CNY_YI(÷1e8);营收/归母净利润:2026Q1=29.15亿/9.30亿;2025Q4=43.22亿/9.00亿;2025Q3=31.02亿/5.05亿;2025Q2=27.87亿/3.93亿"
 },
 {
  "id": "qveris-cn-tuojing",
  "type": "exchange_filing_derived",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=688072",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris cn_financial_pro.income_statement.v1(type=1合并报表) 提取自交易所定期披露;自然季由累计报告差值还原:2026Q1=2026一季报;2025Q4=2025年报−2025三季报;2025Q3=2025三季报−2025半年报;2025Q2=2025半年报−2025一季报;单位人民币元→CNY_YI(÷1e8);营收/归母净利润:2026Q1=11.12亿/5.71亿;2025Q4=22.99亿/3.70亿;2025Q3=22.66亿/4.62亿;2025Q2=12.45亿/2.41亿"
 },
 {
  "id": "qveris-cn-fujing",
  "type": "exchange_filing_derived",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=688409",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris cn_financial_pro.income_statement.v1(type=1合并报表) 提取自交易所定期披露;自然季由累计报告差值还原:2026Q1=2026一季报;2025Q4=2025年报−2025三季报;2025Q3=2025三季报−2025半年报;2025Q2=2025半年报−2025一季报;单位人民币元→CNY_YI(÷1e8);营收/归母净利润:2026Q1=10.43亿/0.58亿;2025Q4=8.13亿/-0.46亿;2025Q3=10.06亿/0.25亿;2025Q2=9.62亿/0.34亿"
 },
 {
  "id": "qveris-av-gfs",
  "type": "exchange_filing_derived",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=GLOBALFOUNDRIES&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris alphavantage.income_statement(INCOME_STATEMENT) 提取自 SEC 披露季度报告;财季与自然季对齐(fiscal_offset=0);单位USD→USD_M(÷1e6);总营收/净利润:2026Q1=$1634.0M/$103.0M;2025Q4=$1830.0M/$199.0M;2025Q3=$1688.0M/$248.0M;2025Q2=$1688.0M/$228.0M"
 },
 {
  "id": "qveris-av-tower",
  "type": "exchange_filing_derived",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=TOWER+SEMICONDUCTOR&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "经 qveris alphavantage.income_statement(INCOME_STATEMENT) 提取自 SEC 披露季度报告;symbol TOWER 查询返回空,改用 TSEM(高塔半导体 Nasdaq 代码)取数;财季与自然季对齐(fiscal_offset=0);单位USD→USD_M(÷1e6);总营收/净利润:2026Q1=$413.6M/$65.0M;2025Q4=$440.2M/$80.1M;2025Q3=$395.7M/$53.6M;2025Q2=$372.1M/$46.6M"
 },
 {
  "id": "eton-2026Q2-10-q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=EATON%20CORP&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alpha Vantage INCOME_STATEMENT quarterlyReports 2026Q2 3mo ended 2026-06-30；revenue $8,531M / net income $821M，USD_M"
 },
 {
  "id": "eton-2026Q1-10-q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=EATON%20CORP&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alpha Vantage INCOME_STATEMENT quarterlyReports 2026Q1 3mo ended 2026-03-31；revenue $7,451M / net income $866M，USD_M"
 },
 {
  "id": "eton-2025Q4-10-q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=EATON%20CORP&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alpha Vantage INCOME_STATEMENT quarterlyReports 2025Q4 3mo ended 2025-12-31；revenue $7,055M / net income $1,133M，USD_M"
 },
 {
  "id": "eton-2025Q3-10-q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=EATON%20CORP&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alpha Vantage INCOME_STATEMENT quarterlyReports 2025Q3 3mo ended 2025-09-30；revenue $6,988M / net income $1,010M，USD_M"
 },
 {
  "id": "unimicron-2026Q1-qr",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t164sb04",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FMP income statement (3037.TW, period=quarter) 2026Q1 3mo ended 2026-03-31；营业收入 NT$37,446.46M / 净利润 NT$5,042.98M，TWD_M"
 },
 {
  "id": "unimicron-2025Q4-qr",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t164sb04",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FMP income statement (3037.TW, period=quarter) 2025Q4 3mo ended 2025-12-31；营业收入 NT$34,690.89M / 净利润 NT$3,534.50M，TWD_M"
 },
 {
  "id": "unimicron-2025Q3-qr",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t164sb04",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FMP income statement (3037.TW, period=quarter) 2025Q3 3mo ended 2025-09-30；营业收入 NT$33,994.42M / 净利润 NT$2,194.49M，TWD_M"
 },
 {
  "id": "unimicron-2025Q2-qr",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t164sb04",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FMP income statement (3037.TW, period=quarter) 2025Q2 3mo ended 2025-06-30；营业收入 NT$32,466.05M / 净利润 NT$29.61M，TWD_M"
 },
 {
  "id": "delta-2026Q2-qr",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t164sb04",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FMP income statement (2308.TW, period=quarter) 2026Q2 3mo ended 2026-06-30；营业收入 NT$183,256.08M / 净利润 NT$25,135.64M，TWD_M"
 },
 {
  "id": "delta-2026Q1-qr",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t164sb04",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FMP income statement (2308.TW, period=quarter) 2026Q1 3mo ended 2026-03-31；营业收入 NT$159,352.65M / 净利润 NT$23,834.55M，TWD_M"
 },
 {
  "id": "delta-2025Q4-qr",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t164sb04",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FMP income statement (2308.TW, period=quarter) 2025Q4 3mo ended 2025-12-31；营业收入 NT$161,613.10M / 净利润 NT$19,637.74M，TWD_M"
 },
 {
  "id": "delta-2025Q3-qr",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t164sb04",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FMP income statement (2308.TW, period=quarter) 2025Q3 3mo ended 2025-09-30；营业收入 NT$150,317.58M / 净利润 NT$18,605.72M，TWD_M"
 },
 {
  "id": "ibiden-2026Q1-qr",
  "type": "quarterly_report",
  "url": "https://www.ibiden.com/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FMP income statement (4062.T, period=quarter) FY财季映射自然季 FY2026 Q4 3mo ended 2026-03-31；营业收入 ¥117,580M / 净利润 ¥32,712M，JPY_M"
 },
 {
  "id": "ibiden-2025Q4-qr",
  "type": "quarterly_report",
  "url": "https://www.ibiden.com/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FMP income statement (4062.T, period=quarter) FY财季映射自然季 FY2026 Q3 3mo ended 2025-12-31；营业收入 ¥103,136M / 净利润 ¥8,932M，JPY_M"
 },
 {
  "id": "ibiden-2025Q3-qr",
  "type": "quarterly_report",
  "url": "https://www.ibiden.com/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FMP income statement (4062.T, period=quarter) FY财季映射自然季 FY2026 Q2 3mo ended 2025-09-30；营业收入 ¥98,021M / 净利润 ¥9,340M，JPY_M"
 },
 {
  "id": "ibiden-2025Q2-qr",
  "type": "quarterly_report",
  "url": "https://www.ibiden.com/",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FMP income statement (4062.T, period=quarter) FY财季映射自然季 FY2026 Q1 3mo ended 2025-06-30；营业收入 ¥97,464M / 净利润 ¥12,728M，JPY_M"
 },
 {
  "id": "dsbj-2026Q1-qr",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=002384",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "cn_financial_pro income_statement(合并,type=1) 2026一季报(period 0331)；直接取一季报：营业总收入 ¥131.38亿 / 净利润 ¥11.24亿(总净利含少数股东口径)，CNY_YI。【2026-08-22纠正】官方一季报归母净利润=1,109,892,942.38元=11.0989亿, 库内net_income已按归母口径修正(库内惯例归母口径), 保留旧值痕迹供复盘"
 },
 {
  "id": "dsbj-2025Q4-qr",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=002384",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "cn_financial_pro income_statement(合并,type=1) 2025年报(1231)-2025三季报(0930)；累计口径相减推导：营业总收入 ¥130.54亿 / 净利润 ¥1.69亿，CNY_YI"
 },
 {
  "id": "dsbj-2025Q3-qr",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=002384",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "cn_financial_pro income_statement(合并,type=1) 2025三季报(0930)-2025半年报(0630)；累计口径相减推导：营业总收入 ¥101.15亿 / 净利润 ¥4.65亿，CNY_YI"
 },
 {
  "id": "dsbj-2025Q2-qr",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=002384",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "cn_financial_pro income_statement(合并,type=1) 2025半年报(0630)-2025一季报(0331)；累计口径相减推导：营业总收入 ¥83.53亿 / 净利润 ¥3.02亿，CNY_YI"
 },
 {
  "id": "scc-2026Q1-qr",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=002916",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "cn_financial_pro income_statement(合并,type=1) 2026一季报(period 0331)；直接取一季报：营业总收入 ¥65.96亿 / 净利润 ¥8.51亿，CNY_YI"
 },
 {
  "id": "scc-2025Q4-qr",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=002916",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "cn_financial_pro income_statement(合并,type=1) 2025年报(1231)-2025三季报(0930)；累计口径相减推导：营业总收入 ¥68.93亿 / 净利润 ¥9.50亿，CNY_YI"
 },
 {
  "id": "scc-2025Q3-qr",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=002916",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "cn_financial_pro income_statement(合并,type=1) 2025三季报(0930)-2025半年报(0630)；累计口径相减推导：营业总收入 ¥63.01亿 / 净利润 ¥9.67亿，CNY_YI"
 },
 {
  "id": "scc-2025Q2-qr",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=002916",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "cn_financial_pro income_statement(合并,type=1) 2025半年报(0630)-2025一季报(0331)；累计口径相减推导：营业总收入 ¥56.71亿 / 净利润 ¥8.69亿，CNY_YI"
 },
 {
  "id": "jw-2026Q1-qr",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=603228",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "cn_financial_pro income_statement(合并,type=1) 2026一季报(period 0331)；直接取一季报：营业总收入 ¥38.92亿 / 净利润 ¥2.43亿(总净利含少数股东口径)，CNY_YI。【2026-08-22纠正】官方一季报归母净利润=232,685,696.17元=2.3269亿, 库内net_income已按归母口径修正(库内惯例归母口径), 保留旧值痕迹供复盘"
 },
 {
  "id": "jw-2025Q4-qr",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=603228",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "cn_financial_pro income_statement(合并,type=1) 2025年报(1231)-2025三季报(0930)；累计口径相减推导：营业总收入 ¥42.25亿 / 净利润 ¥2.83亿，CNY_YI"
 },
 {
  "id": "jw-2025Q3-qr",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=603228",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "cn_financial_pro income_statement(合并,type=1) 2025三季报(0930)-2025半年报(0630)；累计口径相减推导：营业总收入 ¥39.87亿 / 净利润 ¥3.07亿，CNY_YI"
 },
 {
  "id": "jw-2025Q2-qr",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=603228",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "cn_financial_pro income_statement(合并,type=1) 2025半年报(0630)-2025一季报(0331)；累计口径相减推导：营业总收入 ¥37.52亿 / 净利润 ¥3.23亿，CNY_YI"
 },
 {
  "id": "qcom-2026q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=QUALCOMM&type=10-Q",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "Alpha Vantage INCOME_STATEMENT API(symbol=QCOM) quarterlyReport fiscalDateEnding=2026-06-30(自然季2026Q2): totalRevenue=9,947,000,000 USD, netIncome=2,002,000,000 USD → USD_M(÷1e6)"
 },
 {
  "id": "qcom-2026q1-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=QUALCOMM&type=10-Q",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "Alpha Vantage INCOME_STATEMENT API(symbol=QCOM) quarterlyReport fiscalDateEnding=2026-03-31(自然季2026Q1): totalRevenue=10,599,000,000 USD, netIncome=7,370,000,000 USD(含一次性税收利益,incomeTaxExpense=-5,138,000,000) → USD_M(÷1e6)"
 },
 {
  "id": "qcom-2025q4-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=QUALCOMM&type=10-Q",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "Alpha Vantage INCOME_STATEMENT API(symbol=QCOM) quarterlyReport fiscalDateEnding=2025-12-31(自然季2025Q4): totalRevenue=12,252,000,000 USD, netIncome=3,004,000,000 USD → USD_M(÷1e6)"
 },
 {
  "id": "qcom-2025q3-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=QUALCOMM&type=10-Q",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "Alpha Vantage INCOME_STATEMENT API(symbol=QCOM) quarterlyReport fiscalDateEnding=2025-09-30(自然季2025Q3): totalRevenue=11,271,000,000 USD, netIncome=-3,117,000,000 USD → USD_M(÷1e6)"
 },
 {
  "id": "intc-2026q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=INTEL&type=10-Q",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "Alpha Vantage INCOME_STATEMENT API(symbol=INTC) quarterlyReport fiscalDateEnding=2026-06-30(自然季2026Q2): totalRevenue=16,128,000,000 USD, netIncome=-11,033,000,000 USD → USD_M(÷1e6)"
 },
 {
  "id": "intc-2026q1-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=INTEL&type=10-Q",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "Alpha Vantage INCOME_STATEMENT API(symbol=INTC) quarterlyReport fiscalDateEnding=2026-03-31(自然季2026Q1): totalRevenue=13,577,000,000 USD, netIncome=-3,728,000,000 USD → USD_M(÷1e6)"
 },
 {
  "id": "intc-2025q4-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=INTEL&type=10-Q",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "Alpha Vantage INCOME_STATEMENT API(symbol=INTC) quarterlyReport fiscalDateEnding=2025-12-31(自然季2025Q4): totalRevenue=13,674,000,000 USD, netIncome=-591,000,000 USD → USD_M(÷1e6)"
 },
 {
  "id": "intc-2025q3-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=INTEL&type=10-Q",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "Alpha Vantage INCOME_STATEMENT API(symbol=INTC) quarterlyReport fiscalDateEnding=2025-09-30(自然季2025Q3): totalRevenue=13,653,000,000 USD, netIncome=4,063,000,000 USD → USD_M(÷1e6)"
 },
 {
  "id": "foxconn-2026q1-qr",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t164sb04",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "FMP Income Statement API(symbol=2317.TW, period=quarter) date=2026-03-31(自然季2026Q1), reportedCurrency=TWD: revenue=2,119,533,391,000 TWD, netIncome=56,956,277,000 TWD → TWD_M(÷1e6)"
 },
 {
  "id": "foxconn-2025q4-qr",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t164sb04",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "FMP Income Statement API(symbol=2317.TW, period=quarter) date=2025-12-31(自然季2025Q4), reportedCurrency=TWD: revenue=2,606,372,027,000 TWD, netIncome=45,212,455,000 TWD(bottom-line,低于continuing ops 53,635,450,000,含一次性减项) → TWD_M(÷1e6)"
 },
 {
  "id": "foxconn-2025q3-qr",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t164sb04",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "FMP Income Statement API(symbol=2317.TW, period=quarter) date=2025-09-30(自然季2025Q3), reportedCurrency=TWD: revenue=2,058,949,127,000 TWD, netIncome=57,672,785,000 TWD → TWD_M(÷1e6)"
 },
 {
  "id": "foxconn-2025q2-qr",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t164sb04",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "FMP Income Statement API(symbol=2317.TW, period=quarter) date=2025-06-30(自然季2025Q2), reportedCurrency=TWD: revenue=1,793,468,046,000 TWD, netIncome=44,360,558,000 TWD → TWD_M(÷1e6)"
 },
 {
  "id": "huaqin-2026q1-qr",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=603296",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "cn_financial_pro income_statement(603296.SH, 2026年0331期, type=1 合并): 营业收入=40,745,694,661.84 CNY, 归母净利=1,060,584,628.61 CNY(2026Q1单季) → CNY_YI(÷1e8)"
 },
 {
  "id": "huaqin-2025q4-qr",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=603296",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "cn_financial_pro income_statement(603296.SH, type=1 合并) 单季推导: 2025Q4营收=2025-12-31全年累计171,436,926,673.40 − 2025-09-30前三季累计128,881,887,357.29 = 42,555,039,316.11 CNY; 归母净利=4,054,292,460.55 − 3,098,562,794.67 = 955,729,665.88 CNY → CNY_YI(÷1e8)"
 },
 {
  "id": "huaqin-2025q3-qr",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=603296",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "cn_financial_pro income_statement(603296.SH, type=1 合并) 单季推导: 2025Q3营收=2025-09-30前三季累计128,881,887,357.29 − 2025-06-30上半年累计83,939,258,404.31 = 44,942,628,952.98 CNY; 归母净利=3,098,562,794.67 − 1,888,969,589.70 = 1,209,593,204.97 CNY → CNY_YI(÷1e8)"
 },
 {
  "id": "huaqin-2025q2-qr",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=603296",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "cn_financial_pro income_statement(603296.SH, type=1 合并) 单季推导: 2025Q2营收=2025-06-30上半年累计83,939,258,404.31 − 2025-03-31一季度累计34,997,696,296.08 = 48,941,562,108.23 CNY; 归母净利=1,888,969,589.70 − 841,991,186.77 = 1,046,978,402.93 CNY → CNY_YI(÷1e8)"
 },
 {
  "id": "kioxia-2026q2-er",
  "type": "quarterly_report",
  "url": "https://www.kioxia-holdings.com/en-jp/ir.html",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FMP 285A.T(东京所) 铠侠FY2026Q1 三个月ended 2026-06-30: 营收1,767,117百万日元, 净利842,165百万日元; 单位JPY_M(reportedCurrency=JPY)"
 },
 {
  "id": "kioxia-2026q1-er",
  "type": "quarterly_report",
  "url": "https://www.kioxia-holdings.com/en-jp/ir.html",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FMP 285A.T 铠侠FY2025Q4 三个月ended 2026-03-31: 营收1,002,852百万日元, 净利407,734百万日元; 单位JPY_M"
 },
 {
  "id": "kioxia-2025q4-er",
  "type": "quarterly_report",
  "url": "https://www.kioxia-holdings.com/en-jp/ir.html",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FMP 285A.T 铠侠FY2025Q3 三个月ended 2025-12-31: 营收543,631百万日元, 净利87,810百万日元; 单位JPY_M"
 },
 {
  "id": "kioxia-2025q3-er",
  "type": "quarterly_report",
  "url": "https://www.kioxia-holdings.com/en-jp/ir.html",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "FMP 285A.T 铠侠FY2025Q2 三个月ended 2025-09-30: 营收448,346百万日元, 净利40,662百万日元; 单位JPY_M"
 },
 {
  "id": "wdc-2026q1-er",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=WESTERN%20DIGITAL&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alpha Vantage(SEC 10-Q映射) 西数FY2026Q3 三个月ended 2026-04-03: 营收$3,337M, 净利$3,205M(含税项估值准备等非经常项目); 单位USD_M"
 },
 {
  "id": "wdc-2025q4-er",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=WESTERN%20DIGITAL&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alpha Vantage(SEC 10-Q映射) 西数FY2026Q2 三个月ended 2026-01-02: 营收$3,017M, 净利$1,842M; 单位USD_M"
 },
 {
  "id": "wdc-2025q3-er",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=WESTERN%20DIGITAL&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alpha Vantage(SEC 10-Q映射) 西数FY2026Q1 三个月ended 2025-10-03: 营收$2,818M, 净利$1,182M; 单位USD_M"
 },
 {
  "id": "wdc-2025q2-er",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=WESTERN%20DIGITAL&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alpha Vantage(SEC 10-Q映射) 西数FY2025Q4 三个月ended 2025-06-27: 营收$2,605M, 净利$257M; 单位USD_M"
 },
 {
  "id": "stx-2026q2-er",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=SEAGATE&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alpha Vantage(SEC 10-Q映射) 希捷FY2026Q4 三个月ended 2026-06-30: 营收$3,629M, 净利$1,294M; 单位USD_M(reportedCurrency缺省按美元)"
 },
 {
  "id": "stx-2026q1-er",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=SEAGATE&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alpha Vantage(SEC 10-Q映射) 希捷FY2026Q3 三个月ended 2026-03-31: 营收$3,112M, 净利$748M; 单位USD_M"
 },
 {
  "id": "stx-2025q4-er",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=SEAGATE&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alpha Vantage(SEC 10-Q映射) 希捷FY2026Q2 三个月ended 2025-12-31: 营收$2,825M, 净利$593M; 单位USD_M"
 },
 {
  "id": "stx-2025q3-er",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=SEAGATE&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alpha Vantage(SEC 10-Q映射) 希捷FY2026Q1 三个月ended 2025-09-30: 营收$2,629M, 净利$549M; 单位USD_M"
 },
 {
  "id": "sndk-2026q1-er",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=SANDISK&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alpha Vantage+FMP交叉验证(SEC 10-Q) 闪迪FY2026Q3 三个月ended 2026-04-03: 营收$5,950M, 净利$3,615M; 单位USD_M"
 },
 {
  "id": "sndk-2025q4-er",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=SANDISK&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alpha Vantage+FMP交叉验证(SEC 10-Q) 闪迪FY2026Q2 三个月ended 2026-01-02: 营收$3,025M, 净利$803M; 单位USD_M"
 },
 {
  "id": "sndk-2025q3-er",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=SANDISK&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alpha Vantage+FMP交叉验证(SEC 10-Q) 闪迪FY2026Q1 三个月ended 2025-10-03: 营收$2,308M, 净利$112M; 单位USD_M"
 },
 {
  "id": "sndk-2025q2-er",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=SANDISK&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Alpha Vantage+FMP交叉验证(SEC 10-Q) 闪迪FY2025Q4 三个月ended 2025-06-27: 营收$1,901M, 净利-$23M; 单位USD_M"
 },
 {
  "id": "giga-2026h1-sr",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-08-19/1225480384.PDF",
  "fetched_at": "2026-08-19",
  "archive": null,
  "locator": "兆易创新2026年半年度报告(2026-08-18晚披露,巨潮): H1营收11,565,760,432.15元、归母净利6,856,786,413.68元、扣非净利4,883,033,478.93元、经营现金流净额6,048,341,057.06元。Q2单季=H1−Q1: 营收=115.6576−41.8808=73.7768亿≈73.78亿; 归母净利=68.5679−14.6125=53.9554亿≈53.96亿。利基DRAM/SLC NAND量价齐升;证券投资公允价值收益增厚归母净利(扣非48.83亿);无下季指引。2025Q1由上年同期推算: 营收=41.5031(2025H1)−22.41(2025Q2)=19.09亿; 归母净利=5.7548−3.41=2.35亿"
 },
 {
  "id": "giga-2026q1-er",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=603986",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "cn_financial_pro 合并利润表 2026Q1(期末2026-03-31,单季直接披露): 营收4,188,075,574元→41.88亿元, 归母净利1,461,248,353元→14.61亿元; 单位CNY_YI(÷1e8)"
 },
 {
  "id": "giga-2025q4-er",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=603986",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "cn_financial_pro 合并 2025年报(累计9,203,463,125元)-前三季(累计6,831,634,444元)=单季Q4: 营收2,371,828,681元→23.72亿元, 归母净利564,794,772元→5.65亿元; 单位CNY_YI(÷1e8)"
 },
 {
  "id": "giga-2025q3-er",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=603986",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "cn_financial_pro 合并 2025前三季(累计6,831,634,444元)-半年(累计4,150,308,633元)=单季Q3: 营收2,681,325,811元→26.81亿元, 归母净利507,752,274元→5.08亿元; 单位CNY_YI(÷1e8)"
 },
 {
  "id": "giga-2025q2-er",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=603986",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "cn_financial_pro 合并 2025半年(累计4,150,308,633元)-2025Q1(累计1,909,062,291元)=单季Q2: 营收2,241,246,342元→22.41亿元, 归母净利340,845,518元→3.41亿元; 单位CNY_YI(÷1e8)"
 },
 {
  "id": "ase-2026q2",
  "type": "earnings_release",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&ticker=ASX&type=6-K&dateb=&owner=include&count=40",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "Alpha Vantage INCOME_STATEMENT symbol=ASX quarterly fiscalDateEnding=2026-06-30, reportedCurrency=TWD: totalRevenue 191,064M TWD, netIncome 21,068M TWD (日月光 2026Q2 单季)"
 },
 {
  "id": "ase-2026q1",
  "type": "earnings_release",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&ticker=ASX&type=6-K&dateb=&owner=include&count=40",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "Alpha Vantage INCOME_STATEMENT symbol=ASX quarterly fiscalDateEnding=2026-03-31, reportedCurrency=TWD: totalRevenue 175,456,763千 TWD, netIncome 14,294,217千 TWD (2026Q1 单季)"
 },
 {
  "id": "ase-2025q4",
  "type": "earnings_release",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&ticker=ASX&type=6-K&dateb=&owner=include&count=40",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "Alpha Vantage INCOME_STATEMENT symbol=ASX quarterly fiscalDateEnding=2025-12-31, reportedCurrency=TWD: totalRevenue 179,596,474千 TWD, netIncome 14,852,052千 TWD (2025Q4 单季)"
 },
 {
  "id": "ase-2025q3",
  "type": "earnings_release",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&ticker=ASX&type=6-K&dateb=&owner=include&count=40",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "Alpha Vantage INCOME_STATEMENT symbol=ASX quarterly fiscalDateEnding=2025-09-30, reportedCurrency=TWD: totalRevenue 168,569,000千 TWD, netIncome 10,870,000千 TWD (2025Q3 单季)"
 },
 {
  "id": "huahong-2026q1",
  "type": "earnings_release",
  "url": "https://www.hua-hong.com/",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "FMP income statement symbol=1347.HK period=quarter, reportedCurrency=USD, 2026-03-31 (Q1 2026): revenue $665,994,981, netIncome $20,095,243 (华虹半导体 2026Q1 单季)"
 },
 {
  "id": "huahong-2025q4",
  "type": "earnings_release",
  "url": "https://www.hua-hong.com/",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "FMP income statement symbol=1347.HK period=quarter, reportedCurrency=USD, 2025-12-31 (Q4 2025): revenue $663,413,749, netIncome $17,662,137"
 },
 {
  "id": "huahong-2025q3",
  "type": "earnings_release",
  "url": "https://www.hua-hong.com/",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "FMP income statement symbol=1347.HK period=quarter, reportedCurrency=USD, 2025-09-30 (Q3 2025): revenue $641,210,000, netIncome $24,851,000"
 },
 {
  "id": "huahong-2025q2",
  "type": "earnings_release",
  "url": "https://www.hua-hong.com/",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "FMP income statement symbol=1347.HK period=quarter, reportedCurrency=USD, 2025-06-30 (Q2 2025): revenue $578,245,428, netIncome $6,623,642"
 },
 {
  "id": "jcet-2026q1",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=600584",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "cn_financial_pro income_statement 600584.SH 2026Q1(0331): 营业总收入 9,171,039,551.16元, 归母净利 290,272,770.67元 (单季)"
 },
 {
  "id": "jcet-2025q4",
  "type": "annual_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=600584",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "cn_financial_pro 600584.SH 2025年报(1231)减三季报(0930)推导: Q4营收 38,871,348,331.23-28,668,972,678.71=10,202,375,652.52元, 归母净利 1,565,238,036.45-953,748,492.90=611,489,543.55元"
 },
 {
  "id": "jcet-2025q3",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=600584",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "cn_financial_pro 600584.SH 2025三季报(0930)减半年报(0630)推导: Q3营收 28,668,972,678.71-18,605,224,056.33=10,063,748,622.38元, 归母净利 953,748,492.90-470,785,267.86=482,963,225.04元"
 },
 {
  "id": "jcet-2025q2",
  "type": "semiannual_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=600584",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "cn_financial_pro 600584.SH 2025半年报(0630)减一季报(0331)推导: Q2营收 18,605,224,056.33-9,335,146,486.99=9,270,077,569.34元, 归母净利 470,785,267.86-203,363,562.72=267,421,705.14元"
 },
 {
  "id": "tfme-2026q1",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=002156",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "cn_financial_pro income_statement 002156.SZ 2026Q1(0331): 营业总收入 7,481,674,677.05元, 归母净利 329,057,400.55元 (单季)"
 },
 {
  "id": "tfme-2025q4",
  "type": "annual_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=002156",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "cn_financial_pro 002156.SZ 2025年报(1231)减三季报(0930)推导: Q4营收 27,921,424,656.15-20,116,258,889.41=7,805,165,766.74元, 归母净利 1,218,708,143.38-860,491,079.82=358,217,063.56元"
 },
 {
  "id": "tfme-2025q3",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=002156",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "cn_financial_pro 002156.SZ 2025三季报(0930)减半年报(0630)推导: Q3营收 20,116,258,889.41-13,038,246,156.27=7,078,012,733.14元, 归母净利 860,491,079.82-412,092,154.12=448,398,925.70元"
 },
 {
  "id": "tfme-2025q2",
  "type": "semiannual_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=002156",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "cn_financial_pro 002156.SZ 2025半年报(0630)减一季报(0331)推导: Q2营收 13,038,246,156.27-6,092,434,550.56=6,945,811,605.71元, 归母净利 412,092,154.12-101,389,231.19=310,702,922.93元"
 },
 {
  "id": "sjsmi-2026q1",
  "type": "quarterly_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=688820",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "cn_financial_pro income_statement 688820.SH 2026Q1(0331): 营业总收入 1,698,374,915.96元, 归母净利 191,328,450.33元 (单季; 盛合晶微正确代码为 688820.SH, 任务给的 688532.SH 无数据)"
 },
 {
  "id": "sjsmi-2025q2",
  "type": "semiannual_report",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=688820",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "cn_financial_pro 688820.SH 2025半年报(0630)减一季报(0331)推导: Q2营收 3,177,996,180.51-1,501,193,200=1,676,802,980.51元, 归母净利 434,894,465.01-126,251,500=308,642,965.01元"
 },
 {
  "id": "sjsmi-2025q1",
  "type": "company_announcement",
  "url": "https://www.cninfo.com.cn/new/disclosure/stock?stockCode=688820",
  "fetched_at": "2026-08-06",
  "archive": null,
  "locator": "cn_financial_pro 688820.SH 2025Q1(0331): 营收 1,501,193,200元, 归母净利 126,251,500元 (盛合晶微新上市, 2025三季报/2026半年报未披露, 仅存3个自然季)"
 },
 {
  "id": "cerebras-2026q1-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/Archives/edgar/data/2021728/000162828026044981/cbrs-20260331.htm",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "Q1 10-Q(截至2026-03-31):Q1购建固定资产$131,970K,作为Q2 capex推导基数"
 },
 {
  "id": "cerebras-2025q4-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=CEREBRAS&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Cerebras 2025Q4 (10-Q, 三个月ended 2025-12-31): 营收$171.443M, 净利-$25.617M; 经 qveris Alpha Vantage INCOME_STATEMENT 提取自 SEC 披露 (raw totalRevenue=171443000, netIncome=-25617000)"
 },
 {
  "id": "cerebras-2025q3-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=CEREBRAS&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Cerebras 2025Q3 (10-Q, 三个月ended 2025-09-30): 营收$135.714M, 净利-$22.201M; 经 qveris Alpha Vantage INCOME_STATEMENT 提取自 SEC 披露 (raw totalRevenue=135714000, netIncome=-22201000)"
 },
 {
  "id": "cerebras-2025q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&company=CEREBRAS&type=10-Q",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "Cerebras 2025Q2 (10-Q, 三个月ended 2025-06-30): 营收$103.322M, 净利$309.512M(含大额非经常损益, 疑优先股/认股权公允价值变动); 经 qveris Alpha Vantage INCOME_STATEMENT 提取自 SEC 披露 (raw totalRevenue=103322000, netIncome=309512000)"
 },
 {
  "id": "lxyq-2026q1",
  "type": "quarterly_report",
  "url": "http://www.cninfo.com.cn/new/disclosure/stock?stockCode=688808",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "苏州联讯仪器 2026Q1 (一季报, 2026-03-31): 营收4.877亿元, 归母净利1.189亿元; 经 qveris cn_financial_pro INCOME_STATEMENT 提取 (raw 营收487,720,104.79元, 归母净利118,903,186.14元)"
 },
 {
  "id": "lxyq-2025q4-derived",
  "type": "annual_report",
  "url": "http://www.cninfo.com.cn/new/disclosure/stock?stockCode=688808",
  "fetched_at": "2026-08-05",
  "archive": null,
  "locator": "苏州联讯仪器 2025Q4 单季 = 2025年报全年 − 三季报9M累计 (均经 qveris cn_financial_pro 提取): 营收 1,194,068,403.51 − 805,621,511.07 = 388,446,892.44元(3.884亿), 归母净利 173,651,557.89 − 96,643,013.92 = 77,008,543.97元(0.770亿)"
 },
 {
  "id": "amat-2026q3-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/6951/000162828026056699/exhibit991q32026earningsre.htm",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "SEC EDGAR 8-K(2026-08-13)Exhibit 99.1:FY2026Q3(季末2026-07-26,对齐自然季2026Q2)。Revenue $9,115M、GAAP gross margin 50.3%、GAAP net income $2,538M 见经营表;capex $707M 见现金流量表;guidance_next_q 为 FY2026Q4 指引中值 $10,250M±$500M(non-GAAP EPS $4.02±$0.20)见 Business Outlook。backlog 未披露,缺省。"
 },
 {
  "id": "wdc-fy26q4-er",
  "type": "8-K",
  "url": "https://www.sec.gov/Archives/edgar/data/106040/000162828026053305/a4ex991-pressreleaseq426.htm",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "SEC 8-K(2026-08-05)Ex-99.1:FY2026Q4财季末2026-07-03,对齐自然季2026Q2。Revenue/GAAP毛利率54.1%见Q4FY26 Highlights表;净利润=Diluted Net Income Attributable to Common Shareholders $3,195M;capex=Purchases of PP&E net Q4FY26 $108M;guidance_next_q为FY27Q1指引中值$4,100M±$100M(non-GAAP毛利率55-56%,EPS~$4.00)见Business Outlook。backlog未披露,缺省。"
 },
 {
  "id": "sndk-fy26q4-er",
  "type": "8-K",
  "url": "https://www.sec.gov/Archives/edgar/data/2023554/000162828026053346/sndkq4-26ex991xpressrelease.htm",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "SEC 8-K(2026-08-05)Ex-99.1:FY2026Q4财季末2026-07-03,对齐自然季2026Q2。Revenue $8,965M、GAAP毛利率84.6%(Gross profit 7,582/8,965)见合并经营报表;净利润=GAAP Net income $6,903M;capex=Purchases of PP&E 三个月$43M;guidance_next_q为FY27Q1指引区间$10,300-$10,800中值(GAAP毛利率83.0-84.9%,non-GAAP EPS $44-46)见Business Outlook。backlog未披露,缺省。"
 },
 {
  "id": "dwmicro-2026h1-sr",
  "type": "semiannual_report",
  "url": "http://static.cninfo.com.cn/finalpage/2026-08-18/1225477254.PDF",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "《东田微:2026年半年度报告》(2026-08-18披露)。H1数:营收501,801,936.18元、归母净利86,959,147.21元、营业成本351,864,754.14元、购建固定资产等支付现金92,953,475.99元。Q2单季=H1−Q1(Q1取dwmicro-2026q1-qr):Q2营收295,633,569.85元=2.9563亿;Q2毛利率=(295,633,569.85−198,749,178.74)/295,633,569.85=0.3277;Q2归母净利58,893,770.08元=0.5889亿;Q2 capex 67,571,730.53元=0.6757亿"
 },
 {
  "id": "dwmicro-2026q1-qr",
  "type": "quarterly_report",
  "url": "http://static.cninfo.com.cn/finalpage/2026-04-27/1225179313.pdf",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "《东田微:2026年一季度报告》:营收206,168,366.33元、营业成本153,115,575.40元、归母净利28,065,377.13元、购建固定资产等支付现金25,381,745.46元,用于Q2=H1−Q1推导"
 },
 {
  "id": "cambricon-2026h1-sr",
  "type": "semiannual_report",
  "url": "http://static.cninfo.com.cn/finalpage/2026-08-08/1225464969.PDF",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "寒武纪2026年半年度报告(2026-08-08披露,巨潮):H1营收5,995,573,619.61元、营业成本2,682,984,830.53元、归母净利润2,310,912,080.33元、购建固定资产等支付现金439,828,512.96元。Q2单季=H1−Q1:营收=59.9557−28.8470=31.1088亿;毛利率=1−(26.8298−13.1743)/31.1088=0.5610;归母净利=23.1091−10.1321=12.9770亿;capex=4.3983−1.9894=2.4089亿。云端产品线H1收入59.94亿(单季拆分未披露,不计入);无下季指引"
 },
 {
  "id": "cambricon-2026q1-qr",
  "type": "quarterly_report",
  "url": "http://static.cninfo.com.cn/finalpage/2026-04-30/1225264337.PDF",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "寒武纪2026年第一季度报告(2026-04-30披露,巨潮):Q1营收2,884,696,746.86元、营业成本1,317,430,150.72元、归母净利润1,013,213,581.94元、购建固定资产支付现金198,942,045.76元,作为Q2推导基数"
 },
 {
  "id": "cerebras-2026q2-er",
  "type": "8-K",
  "url": "https://www.sec.gov/Archives/edgar/data/2021728/000162828026056186/cbrsannouncesfinancialresu.htm",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "2026-08-12 8-K EX-99.1(Q2截至2026-06-30,GAAP):总营收$180,110K(硬件$54,119K+云服务$125,991K);毛利率=$25,559K/$180,110K=14.19%;净亏损$450,528K;RPO $25.4B(2026-06-30);guidance_next_q为Q3'26 core(non-GAAP)营收指引$214-216M中值$215M(core毛利率38-40%);全年core营收指引上调至$880-890M"
 },
 {
  "id": "cerebras-2026q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/Archives/edgar/data/2021728/000162828026056357/cbrs-20260630.htm",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "10-Q(截至2026-06-30,2026-08-12披露):H1购建固定资产$548,873K;Q2单季capex=H1 $548.873M−Q1 $131.970M=$416.903M"
 },
 {
  "id": "gfs-2026q2-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1709048/000170904826000218/globalfoundries2q2026earni.htm",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "SEC 6-K(filed 2026-08-05)Ex-99.1 'GlobalFoundries Reports Second Quarter 2026 Financial Results':revenue/GM/net income 见 headline 与 Summary Quarterly Results;capex=Purchases of PP&E and intangible assets $411M(Q2现金流量表,net of government grants $408M);guidance_next_q为Q3 2026指引中值$1,885M±$25M(IFRS毛利率29.5%±100bps,EPS $0.37±$0.05)见Summary of Q3 Guidance;backlog未披露"
 },
 {
  "id": "tower-2026q2-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/928876/000117891326003776/exhibit_99-1.htm",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "SEC 6-K(filed 2026-08-04)Ex-99.1:revenue $460,079K、gross profit $137,772K(毛利率=137772/460079=0.299)、net profit attributable $90,769K 见合并经营表;capex=investments in property and equipment net $187M;guidance_next_q为Q3 2026营收指引$520M±5%;backlog未披露"
 },
 {
  "id": "smic-2026q2-er",
  "type": "earnings_release",
  "url": "https://smic.cdn.shwebspace.com/uploads/6a7d7c4f/ER_EN.pdf",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "公司官网IR(www.smics.com/en/site/company_financialSummary)2026Q2 earnings release PDF(2026-08-13):revenue $3,005.6M、gross margin 25.3% 见 highlights;net_income=Profit attributable to Owners $479,197K;capex $1,835.7M 见 Capex Summary;guidance_next_q为Q3 2026指引+2%~+4% QoQ取中值+3%×$3,005.6M=$3,095.8M(毛利率指引26%~28%);backlog未披露"
 },
 {
  "id": "huahong-2026q2-er",
  "type": "earnings_release",
  "url": "https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0813/2026081300401.pdf",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "HKEX披露易2026-08-13 'Hua Hong Grace Reports 2026 Second Quarter Results':revenue US$717.5M、gross margin 16.5%、net profit attributable US$38.6M;capex US$356,566K(12寸$325,883K+8寸$30,683K)见Capital Expenditures表;guidance_next_q为Q3 2026指引US$770-780M中值(毛利率16%~18%);backlog未披露"
 },
 {
  "id": "crwv-2026q2-er",
  "type": "earnings_release",
  "url": "https://investors.coreweave.com/news/news-details/2026/CoreWeave-Reports-Strong-Second-Quarter-2026-Results/default.aspx",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "财报新闻稿(2026-08-11):Q2 2026 revenue $2,575M、net loss $(626)M、Q2 purchases of PP&E incl. capitalized software $(6,422)M;gross_margin=(2,575−879)/2,575=0.659(cost of revenue $879M,与10-Q利润表一致)"
 },
 {
  "id": "crwv-2026q2-10q",
  "type": "10-Q",
  "url": "https://www.sec.gov/Archives/edgar/data/1769628/000176962826000366/crwv-20260630.htm",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "10-Q RPO附注:截至2026-06-30 unsatisfied RPO $103.7B(=103,700 USD_M);利润表确认 revenue 2,575/cost of revenue 879/net loss (626)"
 },
 {
  "id": "crwv-2026q2-outlook",
  "type": "earnings_release",
  "url": "https://s205.q4cdn.com/133937190/files/doc_financials/2026/q2/CoreWeave-Q2-26-Earnings-Outlook-Presentation.pdf",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "Q2'26 Outlook Presentation 指引页:Q3'26 revenue $3.45-3.60B,中值$3,525M(FY26 revenue $12.4-13.2B、capex $35-39B 未入库)"
 },
 {
  "id": "nbis-2026q2-er",
  "type": "earnings_release",
  "url": "https://assets.nebius.com/assets/dfe7a7f3-771e-4653-94e8-8f86bf126b1d/PR.pdf",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "Q2 2026业绩新闻稿(2026-08-12):revenues $582.3M;cost of revenues $133.6M(gross_margin=(582.3−133.6)/582.3=0.771);net loss from continuing operations $(190.4)M;Q2 purchases of PP&E and intangibles $(5,657.4)M;无正式RPO/backlog披露、无书面Q3指引(guidance_next_q缺省)"
 },
 {
  "id": "nbis-2026q2-shl",
  "type": "quarterly_report",
  "url": "https://assets.nebius.com/assets/4462517b-ce83-41f2-96ed-f2ac1bc06a05/SHLQ226%20(1).pdf",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "CEO致股东信:Nebius AI cloud revenue +514% YoY 至 $575M(ai_revenue);ARR $3.0B;提及$40B customer commitments但非正式backlog口径,不采"
 },
 {
  "id": "tencent-2026q2-er",
  "type": "earnings_release",
  "url": "https://www.tencent.com/wp-content/uploads/2026/08/Tencent-Announces-2026-Second-Quarter-Results.pdf",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "2026年第二季度业绩公告(2026-08-12)简明综合收益表2Q2026:revenues RMB204,785M=2,047.85亿元;gross margin公告口径58%;profit attributable to equity holders RMB56,022M=560.22亿元(IFRS);capital expenditures RMB52,784M=527.84亿元。腾讯不按云/AI分部披露收入,ai_revenue缺省;无下季指引"
 },
 {
  "id": "vst-2026q2-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1692819/000169281926000017/vistra-20260630xearningsre.htm",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "8-K Ex-99.1(2026-08-07):Q2 2026 operating revenues $4,017M;GAAP net income $305M。现金流量表仅六个月口径(Q2单季capex未披露,缺省);公用事业不报毛利率/在手订单,缺省;仅重申FY2026指引,无Q3指引"
 },
 {
  "id": "flnc-fy26q3-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1868941/000186894126000028/flncq3fy26earningspressrel.htm",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "FY2026 Q3业绩(财季=2026年4-6月,对齐2026Q2;2026-08-05):total revenue $649.8M;GAAP gross profit margin 5.1%;net loss $(44.3)M;backlog as of 2026-06-30约$6.4B(历史最高)。现金流量表仅九个月口径(Q3单季capex缺省);无下季指引"
 },
 {
  "id": "foxconn-2026h1-sr",
  "type": "semiannual_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t163sb04",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "公开资讯观测站>汇总报表>综合损益表(ajax_t163sb04,TYPEK=sii,year=115,season=02),鸿海行(新台币仟元):H1营收4,645,427,824/毛利285,513,881/归母净利109,893,220。Q2单季=H1−Q1:营收=4,645,427,824−2,119,533,391=2,525,894,433仟元(Q1同表season=01,与库内参考值一致);毛利率=(285,513,881−130,980,560)/2,525,894,433=0.0612;归母净利=109,893,220−49,919,449=59,973,771仟元"
 },
 {
  "id": "foxconn-2026h1-cf",
  "type": "semiannual_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t164sb05",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "公开资讯观测站>个别公司财务报表>合并现金流量表(ajax_t164sb05,co_id=2317):capex=取得不动产厂房及设备,Q2=H1 80,886,319−Q1 35,774,345=45,111,974仟元"
 },
 {
  "id": "quanta-2026h1-sr",
  "type": "semiannual_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t163sb04",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "同foxconn查询路径,广达(2382)行:H1营收1,845,813,767/毛利90,775,884/归母净利49,843,907仟元。Q2推导:营收=1,845,813,767−809,221,055=1,036,592,712仟元;毛利率=(90,775,884−38,697,031)/1,036,592,712=0.0502;归母净利=49,843,907−21,192,434=28,651,473仟元"
 },
 {
  "id": "quanta-2026h1-cf",
  "type": "semiannual_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t164sb05",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "合并现金流量表(co_id=2382):capex Q2=H1 21,595,496−Q1 6,011,664=15,583,832仟元"
 },
 {
  "id": "wiwynn-2026h1-sr",
  "type": "semiannual_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t163sb04",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "同foxconn查询路径,纬颖(6669)行:H1营收554,660,326/毛利46,644,117/归母净利29,083,507仟元。Q2推导:营收=554,660,326−276,507,734=278,152,592仟元;毛利率=(46,644,117−20,881,168)/278,152,592=0.0926;净利=29,083,507−14,114,409=14,969,098仟元"
 },
 {
  "id": "wiwynn-2026h1-cf",
  "type": "semiannual_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t164sb05",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "合并现金流量表(co_id=6669):capex Q2=H1 7,956,426−Q1 3,871,756=4,084,670仟元"
 },
 {
  "id": "fii-2026h1-sr",
  "type": "semiannual_report",
  "url": "http://static.cninfo.com.cn/finalpage/2026-08-12/1225468066.PDF",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "巨潮资讯,工业富联2026年半年度报告(2026-08-12披露)。合并利润表(仟元):H1营业收入557,860,645/营业成本517,969,798/归母净利润23,740,458;现金流量表:购建固定资产等支付现金9,091,884。Q2=H1−Q1(Q1取fii-2026q1-qr):营收=557,860,645−251,078,078=306,782,567仟元=3067.83亿;毛利率=[(557,860,645−517,969,798)−(251,078,078−232,622,564)]/306,782,567=0.0699;归母净利=23,740,458−10,594,857=13,145,601仟元=131.46亿;capex=9,091,884−3,868,534=5,223,350仟元=52.23亿"
 },
 {
  "id": "fii-2026q1-qr",
  "type": "quarterly_report",
  "url": "http://static.cninfo.com.cn/finalpage/2026-04-29/1225231598.PDF",
  "fetched_at": "2026-08-18",
  "archive": null,
  "locator": "巨潮资讯,工业富联2026年第一季度报告(2026-04-29):营业收入251,078,078仟元/营业成本232,622,564仟元/归母净利润10,594,857仟元/购建固定资产等支付现金3,868,534仟元,仅用于Q2推导"
 },
 {
  "id": "sytech-2026h1-er",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-08-15/1225475783.PDF",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "生益科技2026年半年度报告(巨潮官方PDF,2026-08-15): 2026H1营收190.256亿/营业成本131.862亿/归母32.870亿; 2026Q1(1225230175.PDF,2026-04-29)营收81.415亿/成本58.536亿/归母11.581亿; Q2单季=H1−Q1: 营收108.84亿/毛利35.52亿/毛利率32.63%/归母21.29亿(亿元,CNY_YI)"
 },
 {
  "id": "sytech-2026q1",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-04-29/1225230175.PDF",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "生益科技2026年第一季度报告(巨潮官方PDF,2026-04-29): 营收81.415亿/营业成本58.536亿/归母11.581亿; 用于Q2单季=H1−Q1派生"
 },
 {
  "id": "veri-2026h1-er",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-08-18/1225478749.PDF",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "芯原股份2026年半年度报告(巨潮官方PDF,2026-08-18): 2026H1营收18.635亿/营业成本12.795亿/归母-6.121亿; 2026Q1(1225263170.PDF,2026-04-30)营收8.357亿/成本5.658亿/归母-3.408亿; Q2单季=H1−Q1: 营收10.28亿/毛利3.14亿/毛利率30.57%/归母-2.71亿; Q2 capex=购建固定资产H1(8068万)−Q1(1170万)=6898万元(亿元,CNY_YI)"
 },
 {
  "id": "veri-2026q1",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-04-30/1225263170.PDF",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "芯原股份2026年第一季度报告(巨潮官方PDF,2026-04-30): 营收8.357亿/营业成本5.658亿/归母-3.408亿; 用于Q2单季=H1−Q1派生"
 },
 {
  "id": "amec-2026h1-er",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-08-20/1225482884.PDF",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "中微公司2026年半年度报告(巨潮官方PDF,2026-08-20): 2026H1营收66.913亿/营业成本40.321亿/归母28.252亿; 2026Q1(1225215453.PDF,2026-04-28)营收29.150亿/成本17.521亿/归母9.305亿; Q2单季=H1−Q1: 营收37.76亿/毛利14.96亿/毛利率39.63%/归母18.95亿(亿元,CNY_YI)"
 },
 {
  "id": "amec-2026q1",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-04-28/1225215453.PDF",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "中微公司2026年第一季度报告(巨潮官方PDF,2026-04-28): 营收29.150亿/营业成本17.521亿/归母9.305亿; 用于Q2单季=H1−Q1派生"
 },
 {
  "id": "sjsmi-2026h1-er",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-08-20/1225483707.PDF",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "盛合晶微2026年半年度报告(巨潮官方PDF,2026-08-20): 2026H1营收34.068亿/营业成本23.800亿/归母4.494亿; 2026Q1(1225262167.PDF,2026-04-30)营收16.984亿/成本11.958亿/归母1.913亿; Q2单季=H1−Q1: 营收17.08亿/毛利5.24亿/毛利率30.68%/归母2.58亿(亿元,CNY_YI)"
 },
 {
  "id": "tfc-2026h1-er",
  "type": "quarterly_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-08-19/1225480328.PDF",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "天孚通信2026年半年度报告(巨潮官方PDF,2026-08-19): 2026H1营收28.279亿/营业成本11.066亿/归母12.043亿; 2026Q1营收13.303亿/成本5.773亿/归母4.922亿(取自Q1报告文本); Q2单季=H1−Q1: 营收14.98亿/毛利9.68亿/毛利率64.66%/归母7.12亿(亿元,CNY_YI)"
 },
 {
  "id": "unimicron-2026Q2-qr",
  "type": "quarterly_report",
  "url": "https://mopsov.twse.com.tw/mops/web/t164sb04",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "公开资讯观测站>合併損益表(季別)(3037.TW 欣兴电子, t164sb04, TYPEK=sii, year=115=2026, season=02=2026Q2单季): 营业收入42,890/营业毛利10,638/归属母公司净利13,115(新台幣百萬元=TWD_M); 毛利率=10,638/42,890=24.80%。交叉核对欣兴电子官方2026Q2法人说明会合併綜合損益表(单位:百萬元): Q2-26营收42,890/毛利10,638/母公司業主淨利13,115, Q1-26营收37,446/淨利5,043 — 与已存Q1(37446.46/5042.98)一致。注: 此为单季数非H1累计, 直接采用而非H1−Q1。"
 },
 {
  "id": "cohr-fy26q4-er",
  "type": "earnings_release",
  "url": "https://www.coherent.com/news/press-releases/fourth-quarter-and-fiscal-year-2026-results",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "Coherent Corp. FY2026 Q4(止2026-06-30, 财季错位offset=1对齐自然2026Q2)官方新闻稿(2026-08-12): Revenue $2.05B / GAAP Gross Margin 38.5% / GAAP Net Income $240.5M(每股$1.19)。Datacenter&Communications segment $1.6B(+58.6% YoY)"
 },
 {
  "id": "fn-fy26q4-er",
  "type": "earnings_release",
  "url": "https://investor.fabrinet.com/news-releases/news-release-details/fabrinet-announces-fourth-quarter-and-fiscal-year-2026-financial",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "Fabrinet FY2026 Q4(止2026-06-26, offset=1对齐自然2026Q2)官方新闻稿(2026-08-17): GAAP Revenue $1,315.8M / GAAP Net Income $139.3M(每股$3.83) / 电话会披露Q4 capex $92M; GAAP毛利率=165.556M毛利/1,315.788M营收=12.58%。数据中心营收$669M(+68% YoY)占51%"
 },
 {
  "id": "aaoi-2026q2-er",
  "type": "earnings_release",
  "url": "https://www.sec.gov/Archives/edgar/data/1158114/000168316826006055/aaoi_ex9901.htm",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "Applied Optoelectronics 2026 Q2(止2026-06-30) 8-K Ex99.1(SEC, 2026-08-06): GAAP Revenue $191.9M / GAAP Gross Margin 27.7% / GAAP Net Loss $22.8M(每股$0.28)。数据中心营收$107.7M(+140% YoY)占56%"
 },
 {
  "id": "poet-2026q2-er",
  "type": "earnings_release",
  "url": "https://www.poet-technologies.com/news/poet-technologies-reports-second-quarter-2026-results-revenue-up-112-year-over-year-in-sixth-consecutive-quarter-of-sequential-growth",
  "fetched_at": "2026-08-20",
  "archive": null,
  "locator": "POET Technologies 2026 Q2(止2026-06-30) 官方新闻稿(2026-08-13, SEDAR+ filing): Revenue $569,925(+112% YoY) / Net Loss $11.3M(每股$0.07)。期末现金及短投$796.3M"
 },
 {
  "id": "tuojing-2026h1-er",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-08-21/1225486631.PDF",
  "fetched_at": "2026-08-22",
  "archive": null,
  "locator": "拓荆科技2026年半年度报告(巨潮官方PDF,2026-08-21): 2026H1营收29.1286亿/营业成本17.1846亿/归母13.4275亿; 2026Q1(1225222240.PDF,2026-04-28)营收11.1243亿/成本6.4867亿/归母5.7060亿; Q2单季=H1−Q1: 营收18.0043亿/毛利7.3064亿/毛利率40.58%/归母7.7215亿(亿元,CNY_YI)"
 },
 {
  "id": "jcet-2026h1-er",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-08-21/1225487900.PDF",
  "fetched_at": "2026-08-22",
  "archive": null,
  "locator": "长电科技2026年半年度报告(巨潮官方PDF,2026-08-21): 2026H1营收195.2722亿/营业成本165.6903亿/归母8.4464亿; 2026Q1(1225224901.PDF,2026-04-29)营收91.7104亿/成本78.3680亿/归母2.9027亿; Q2单季=H1−Q1: 营收103.5618亿/毛利16.2395亿/毛利率15.68%/归母5.5437亿(亿元,CNY_YI)"
 },
 {
  "id": "dsbj-2026h1-er",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-08-22/1225491182.PDF",
  "fetched_at": "2026-08-22",
  "archive": null,
  "locator": "东山精密2026年半年度报告(巨潮官方PDF,2026-08-22): 2026H1营收277.9768亿/营业成本221.9608亿/归母29.5690亿; 2026Q1(1225203581.PDF,2026-04-28)营收131.3764亿/成本105.9845亿/归母11.0989亿; Q2单季=H1−Q1: 营收146.6004亿/毛利30.6241亿/毛利率20.89%/归母18.4701亿; Q2 capex=购建固定资产H1 52.5336亿−Q1 21.5997亿=30.9339亿(亿元,CNY_YI)"
 },
 {
  "id": "jw-2026h1-er",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-08-22/1225493416.PDF",
  "fetched_at": "2026-08-22",
  "archive": null,
  "locator": "景旺电子2026年半年度报告(巨潮官方PDF,2026-08-22): 2026H1营收86.1148亿/营业成本68.6998亿/归母6.0162亿; 2026Q1(1225145542.PDF,2026-04-23)营收38.9197亿/成本31.6179亿/归母2.3269亿; Q2单季=H1−Q1: 营收47.1951亿/毛利10.1132亿/毛利率21.43%/归母3.6893亿 — 与中报正文披露「Q2营收47.20亿/归母3.69亿(同比+13.61%/环比+58.55%)」一致(亿元,CNY_YI)"
 },
 {
  "id": "ibiden-fy26q1-tanshin",
  "type": "quarterly_report",
  "url": "https://finance-frontend-pc-dist.west.edge.storage-yahoo.jp/disclosure/20260804/20260731504718.pdf",
  "fetched_at": "2026-08-22",
  "archive": null,
  "locator": "イビデン(4062.T)2027年3月期第1四半期決算短信〔日本基準〕(連結)(2026-08-04, TDnet开示, Yahoo开示镜像PDF): FY26Q1(2026-04-01~06-30, 财季错位对齐自然2026Q2)売上高123,219百万円(+26.4% YoY)/親会社株主に帰属する四半期純利益17,918百万円(+40.8% YoY)。上年同期(FY25Q1=自然2025Q2)97,464/12,728与库内2025Q2完全一致。通期指引上方修正: 売上高5,500億円/営業利益1,270億円(JPY_M)"
 },
 {
  "id": "nvda-fy27q2-er",
  "type": "earnings_release",
  "url": "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027",
  "fetched_at": "2026-08-27",
  "archive": null,
  "locator": "NVIDIA 8-K EX-99.1 (2026-08-26), Q2 FY27 ended 2026-07-26: revenue $96,221M (+106% YoY), Data Center revenue $89,000M (+117% YoY), GAAP gross margin 75.0%, GAAP net income $59,688M"
 },
 {
  "id": "snps-fy27q3-er",
  "type": "earnings_release",
  "url": "https://news.synopsys.com/2026-08-26-Synopsys-Reports-Results-for-Third-Quarter-Fiscal-2027",
  "fetched_at": "2026-08-27",
  "archive": null,
  "locator": "Synopsys 8-K EX-99.1 (2026-08-26), Q3 FY27 ended 2026-07-31: revenue $2,476M (+42.4% YoY), GAAP net income $545.8M / EPS $2.84"
 },
 {
  "id": "shenghong-2026h1-er",
  "type": "earnings_release",
  "url": "https://finance.eastmoney.com/a/202608273856727665.html",
  "fetched_at": "2026-08-27",
  "archive": null,
  "locator": "胜宏科技2026年半年度报告(2026-08-27披露): H1营收116.29亿(+28.77%)/归母28.57亿(+33.3%); Q2单季营收61.10亿、归母15.68亿(由H1减Q1推算)"
 },
 {
  "id": "wus-2026h1-er",
  "type": "earnings_release",
  "url": "https://www.cnstock.com/commonDetail/771650",
  "fetched_at": "2026-08-27",
  "archive": null,
  "locator": "沪电股份2026年半年度报告(2026-08-25披露): H1营收136.89亿(+61.17%)/归母29.23亿(+73.72%); Q2单季营收74.75亿、归母16.81亿(利润表单季)"
 },
 {
  "id": "ynge-2026h1-er",
  "type": "earnings_release",
  "url": "https://www.stcn.com/article/detail/4139455.html",
  "fetched_at": "2026-08-27",
  "archive": null,
  "locator": "云南锗业2026年半年度报告(2026-08-27披露): H1营收7.32亿(+38.21%)/归母7426.99万元(+235.31%); Q2单季营收4.43亿、归母0.65亿(利润表单单季)"
 },
 {
  "id": "huaqin-2026h1-er",
  "type": "earnings_release",
  "url": "https://www.cs.com.cn/ssgs/01/2026/08/25/detail_2026082510034045.html",
  "fetched_at": "2026-08-27",
  "archive": null,
  "locator": "华勤技术2026年半年度报告(2026-08-25披露): H1营收937.19亿(+11.65%)/归母30.0亿(+58.8%); Q2单季营收529.73亿、归母19.39亿(利润表单季)"
 },
 {
  "id": "scc-2026h1-er",
  "type": "earnings_release",
  "url": "https://static.cninfo.com.cn/finalpage/2026-08-27/1225512708.PDF",
  "fetched_at": "2026-08-27",
  "archive": null,
  "locator": "深南电路2026年半年度报告(2026-08-26披露): H1营收152.96亿(+46.33%)/归母22.51亿(+65.55%); Q2单季营收87.01亿、归母14.01亿(利润表单季)"
 },
 {
  "id": "naura-2026h1-er",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-08-26/1225501903.PDF",
  "fetched_at": "2026-08-27",
  "archive": null,
  "locator": "北方华创2026年半年度报告(巨潮官方PDF,2026-08-26): 2026H1营收201.6142亿(+24.90%)/营业成本120.8308亿/归母33.7002亿(+5.05%); 2026Q1(1225259650.PDF,2026-04-30)营收103.2286亿/成本61.1394亿/归母16.3474亿; Q2单季=H1−Q1: 营收98.3856亿/毛利38.6942亿/毛利率39.33%/归母17.3528亿(亿元,CNY_YI)。注: 8/24曾移除误传快报(161.42亿系2025H1数字被二手媒体误标2026), 本次为官方半年报核验入库"
 },
 {
  "id": "lxyq-2026h1-er",
  "type": "semiannual_report",
  "url": "https://static.cninfo.com.cn/finalpage/2026-08-27/1225511954.PDF",
  "fetched_at": "2026-08-27",
  "archive": null,
  "locator": "联讯仪器2026年半年度报告(巨潮官方PDF,2026-08-27): 2026H1营收15.3115亿(+208.71%)/营业成本4.4718亿/归母5.6713亿(+903.00%); 2026Q1(1225243326.PDF,2026-04-29)营收4.8772亿/成本1.6213亿/归母1.1890亿; Q2单季=H1−Q1: 营收10.4343亿/毛利7.5838亿/毛利率72.68%/归母4.4823亿(亿元,CNY_YI)"
 }
];

if (typeof module!=='undefined') module.exports = {SOURCES};
