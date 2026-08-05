# AI 算力财报全景地图 — 设计文档

- 日期:2026-08-05(当日经多轮迭代定稿公司清单与分类)
- 状态:已获用户确认(设计阶段);视觉 DEMO(`demo.html`)已确认方向
- 项目位置:`~/ai-earnings-map/`(与 `~/ai-infra-1gw/` 并列)

## 1. 目的与成功标准

做一个纯静态 HTML 程序:以**官方财报/披露文件**为唯一数据来源,呈现中国与海外 AI 算力产业链(以北美数据中心为主线)上中下游的产业景气全景。

**核心原则(不可妥协):**
1. 每个数字可溯源——点击可看到来源文件名、URL、披露位置、采集日期
2. 同比/环比由公开公式机械计算,可复算
3. 沿同行与上下游做交叉验证,背离只标记、不调和
4. 缺失指标保持空白(`null` → 灰色 "—"),**严禁主观估算填分**
5. 区分龙头/核心/二线;区分上市/非上市(非上市无定期财报,大面积空白是预期行为)

**成功标准:**
- 双击 `index.html` 即可打开完整地图,无构建、无后端
- 全量 109 个公司节点出现在地图上;v1 核心约 30 家 × 近 4 季有真实数据
- 四条交叉验证链可运行;数据缺口墙集中公示所有空白
- `node validate.js` 通过:JSON 符合 schema、src 引用完整、YoY/QoQ 复算一致

## 2. 架构(三层分离)

```
ai-earnings-map/
├── index.html  app.js  styles.css      # 前端,原生 JS + JSON,零依赖
├── demo.html                           # 视觉 DEMO(虚构数据,仅预览)
├── validate.js                         # schema/溯源/复算校验(Node)
├── data/
│   ├── companies.json                  # 公司注册表(109 节点全量)
│   ├── metrics.json                    # 结构化指标(v1 核心公司 × 4 季)
│   ├── sources.json                    # 溯源索引
│   └── schema.md                       # 数据口径文档(管线的实现依据)
├── pipeline/
│   └── README.md                       # 首版只写采集管线设计约定(v2 实现)
└── docs/superpowers/specs/             # 本文档
```

浏览器无法跨域抓取 SEC/巨潮,**自动采集必须是本地脚本管线**,属 v2 范围。首版前端只读 `data/*.json`,不联网、不在采集侧做任何计算。

## 3. 数据 Schema(系统契约)

```jsonc
// companies.json
{ "id": "nvda", "name": "英伟达", "ticker": "NVDA", "market": "US",
  "chain": ["compute/ai-silicon"],     // 产业链坐标(细分环节),允许多挂
  "tier": "leader",                    // leader | core | second
  "listed": true,                      // false → 非上市;"pending" → 上市状态待核
  "currency": "USD",
  "ir_url": "https://investor.nvidia.com/...",
  "fiscal_offset": 1 }                 // 财季与自然季的偏移(月)

// metrics.json — 只存官方披露值;未披露 = 字段缺省/null(不是 0,不是估算)
{ "company": "nvda", "period": "2026Q1", "metrics": {
    "revenue":      { "value": 0, "unit": "USD_M", "src": "nvda-fy27q1-er" },
    "dc_revenue":   { "value": 0, "unit": "USD_M", "src": "nvda-fy27q1-er" },
    "gross_margin": { "value": 0.7, "src": "nvda-fy27q1-er" },
    "capex": null, "backlog": null, "guidance_next_q": null } }

// sources.json
{ "id": "nvda-fy27q1-er", "type": "earnings_release",
  "url": "https://...", "fetched_at": "2026-08-05",
  "archive": null,                     // v2 管线落地归档路径
  "locator": "press release p.3" }
```

- **YoY/QoQ 不存 JSON**,由 `app.js` 按页脚公开公式实时计算
- **财季归一**:全部映射到自然季度(如 NVDA FY27Q1 → 2026Q1),`fiscal_offset` 记录规则,卡片上标注公司原始财季名
- **指标字典(v1)**:`revenue, dc_revenue(数据中心/AI分部), gross_margin, opex_ratio, capex, backlog, guidance_next_q, monthly_revenue(台积电/台系 ODM 专有)`。公司无此披露口径则留空
- **币种**:存原始披露币种;前端悬停显示 USD 折算(汇率存 `data/fx.json`,标注日期与来源)

## 4. 产业链覆盖与公司清单(以用户 2026-08-05 提供的清单为准)

层级图例:★龙头 ●核心 ○二线 ☁非上市。双挂公司(三星=代工+存储、英特尔=芯片+代工、特斯拉=能源+AI应用)在主环节标注。

| 环节 | 海外 | 中国 |
|---|---|---|
| 01 上游·材料/气体/硅片 | ●林德LIN ★信越化学 ●康宁GLW ○AXT | ★生益科技(覆铜板) ○云南锗业 |
| 02 上游·EDA/IP 授权 | ★新思科技SNPS ●ARM | ●芯原股份 |
| 03 上游·设备/测试 | ★ASML ★应用材料AMAT ★泛林LRCX ●科磊KLAC ●爱德万测试ATEYY ○FormFactor ○Aehr | ★北方华创 ●中微公司 ●拓荆科技 ○富创精密 ○联讯仪器(待核) |
| 04 上游·晶圆制造 | ★台积电 ★三星电子 ●格芯GFS ○高塔TOWER | ★中芯国际 ●华虹半导体 |
| 05 上游·封装测试 | ★日月光ASX | ●长电科技 ●通富微电 ●盛合晶微(2.5D/3D,已上市) |
| 06 上游·存储 | ★SK海力士 ★美光MU ●铠侠KXIAY ●西数WDC ●希捷STX ○闪迪SNDK | ●长鑫存储(科创板) ☁长江存储 ○兆易创新 |
| 07 中游·AI芯片/互连芯片 | ★英伟达 ●AMD ●博通 ●Marvell ●高通 ○英特尔 ○Cerebras(CBRS,待核) | ★寒武纪 ★澜起科技 ☁华为昇腾 |
| 08 中游·整机/ODM | ★富士康/鸿海 ★广达 ●纬颖 ●戴尔DELL | ●工业富联 ●华勤技术 |
| 09 中游·网络/光互联 | ★Arista ●思科 ○诺基亚 ●Coherent ●Lumentum ●Fabrinet ○AAOI ○POET | ★中际旭创 ●新易盛 ●天孚通信 ○东田微 ○仕佳光子 ○长光华芯 ○源杰科技 ○腾景科技 |
| 10 中游·PCB/封装基板 | ★揖斐电Ibiden ●欣兴电子 | ★胜宏科技 ★沪电股份 ●深南电路 ●东山精密 ●景旺电子 |
| 11 中游·供电/散热 | ★Vertiv ★伊顿 ★施耐德 ●台达 | ★英维克 |
| 12 下游·云厂/Neocloud/互联网 | ★微软 ★谷歌 ★亚马逊 ★Meta ★甲骨文 ★苹果AAPL ●CoreWeave ●Nebius ○IREN | ★阿里巴巴 ★腾讯 ☁字节跳动 |
| 13 下游·能源/电力 | ●GE Vernova ●Vistra ○Bloom Energy ○Fluence ●特斯拉(储能/Dojo) | (暂无) |
| 14 下游·大模型 | ☁OpenAI ☁Anthropic | ☁DeepSeek ☁智谱(IPO待核) ☁MiniMax(IPO待核) ☁月之暗面Kimi |
| 15 下游·AI应用/软件 | ●ServiceNow ●Palantir | (暂无) |

**待核清单**:`listed: "pending"`——Cerebras(CBRS)、智谱、MiniMax、联讯仪器;核查后转为上市(采数据)或非上市(留空)。长鑫存储、盛合晶微已确认上市(科创板)。

**v1 真实数据范围**:约 30–35 家 × 2025Q3–2026Q2 四季,实现计划阶段锁定名单。建议主干:英伟达、AMD、博通、Marvell、台积电、三星、SK海力士、美光、ASML、应用材料、泛林、新思、日月光、戴尔、广达、纬颖、工业富联、Arista、Coherent、中际旭创、澜起科技、胜宏科技、Vertiv、英维克、微软、谷歌、亚马逊、Meta、甲骨文、CoreWeave、Nebius、阿里、腾讯、寒武纪、中芯国际、北方华创。

## 5. 首版数据录入方法

- 每个数字取自官方披露文件(SEC 10-Q/8-K/新闻稿、公司 IR、台积电/台系 ODM 月营收公告、巨潮资讯),通过联网检索获取,逐条带 URL + 披露位置 + 采集日期
- 取不到官方出处的字段一律留空;不凭模型记忆填任何数字
- 录入分批进行:云厂 capex → GPU/芯片 → 晶圆/HBM → ODM → 光模块 → 电力/散热 → 中国链,每批可验收

## 6. 景气信号灯(机械规则,印在页脚)

对单一公司(需有 revenue 及上年同期值):
- 🟢 营收 YoY > 20% 且 YoY 较上季加速
- 🟡 正增长但减速,或 YoY ∈ [0%, 20%]
- 🔴 YoY < 0%
- ⚪ 数据不足(任一输入缺失)

环节信号 = 取环节内全部已披露公司的营收 YoY 中位数,套用同一套阈值规则;环节内全部缺数据 → 环节 ⚪。capex 传导指标 = 云五家(微软/谷歌/亚马逊/Meta/Oracle)合计 capex YoY 及指引修正方向,单独成卡展示。

## 7. 交叉验证设计(只标记,不调和)

| 验证链 | 对照关系 | 背离处理 |
|---|---|---|
| GPU 需求链 | 英伟达DC营收 ↔ 台积电HPC营收 ↔ 海力士HBM ↔ 广达/纬颖AI服务器 ↔ 戴尔 backlog | 同季方向不一致 → 连线变红 ⚠️,面板并陈列出双方原始数字与来源,不写结论性解读 |
| 光模块链 | 旭创+新易盛 ↔ Coherent/Lumentum ↔ Meta/谷歌 capex | 同上 |
| 电力链 | Vertiv 订单/backlog ↔ 云厂 capex ↔ Vistra/GEV 营收与签约 | 内置时滞容忍:电力允许领先设备 1–2 季 |
| 中国对照链 | 寒武纪 ↔ 工业富联 ↔ 阿里/腾讯 capex ↔ 中芯国际产能利用率 | 同上 |

缺数据的对照格子显示 "—",不参与判定。

## 8. 页面结构(4 视图 + 顶栏)

1. **顶栏**(sticky):财报季进度(已披露/待披露)+ 各环节信号灯条 + 下次财报日
2. **视图① 全景泳道图**(主视图,深底):15 条细分泳道按 上游(材料→EDA→设备→制造→封测→存储)→ 中游(芯片→整机→网络光互联→PCB→供电散热)→ 下游(云厂→能源→模型→应用) 排列;节点卡片大小 ∝ 营收体量,颜色 = 信号灯;泳道间连线在验证背离处变红
3. **视图② 公司抽屉**(深底):点击节点滑出——近 8 季营收/毛利迷你图(数据不足 8 季则有几季画几季)、YoY/QoQ 表、原文链接 + 披露位置、与上下游同季对照
4. **视图③ 交叉验证矩阵**(深底):四链 × 当前季度,✓ / ⚠️ / —
5. **视图④ 数据缺口墙**(深底):全部空白指标按公司/环节聚合公示,注明"未披露/待核/待采集"——空白即可信度

## 9. 视觉系统

参照 `/Users/lucky/awesome-design-md/design-md/claude/DESIGN.md` 的**深色侧**(用户 2026-08-05 确认全深色呈现):

- **基底**:Near Black `#141413` 主画布;卡片 `#1e1e1c` + `1px solid #2b2b28`;次级章节 `#181816`;全系统禁冷灰、禁渐变
- **字体**:全局雅黑栈 `"Microsoft YaHei","微软雅黑","PingFang SC",system-ui`(macOS 未装雅黑时回退苹方);标题 weight 500 封顶;财务数字 `font-variant-numeric: tabular-nums`;mono 仅限代码性内容(ticker、accession 号、URL)
- **语义色**(深色适配,保持暖调):上行 `#7fa56b` / 减速 `#d9a057` / 下行 `#c05757` / 空白 `#87867f` 虚线框;强调色 Coral `#d97757`(链接、选中态、进度),Terracotta `#c96442` 备用
- **深度**:ring shadow(`0 0 0 1px #4d4c48`)代替投影;圆角卡片 10px、抽屉 0(通高)
- **动效**:仅抽屉滑出与信号色过渡;`prefers-reduced-motion` 下全部禁用
- **响应式断点**:1440 / 1024 / 768 / 479

## 10. 验证方式

- `node validate.js`:① JSON 符合 schema ② 每个 src 在 sources.json 存在且含 url/fetched_at ③ YoY/QoQ 复算与前端逻辑一致 ④ 空白字段无默认值污染
- 浏览器人工核对四视图渲染;截图检查 1440/768 两档
- 数字抽查:每批录入后随机抽 3 家,对照官方原文复核

## 11. 假设与边界

- 位置 `~/ai-earnings-map/`;中文 UI;每财报季手动更新(v2 后由管线替代)
- **v1 不做**:自动采集脚本、财报 PDF 归档目录、USD 统一折算列(仅悬停)、历史超过 4 季的数据、任何评分/指数类主观合成
- **v2 范围**:pipeline/(SEC EDGAR + 巨潮 + IR 页采集、PDF 归档、自动解析、定时运行)

## 12. 后续阶段

1. v1:本 spec → 实现计划 → schema + 前端骨架 → 分批录入 → 验收
2. v2:采集管线实现,替换手工录入,前端不变(读同一 schema)
