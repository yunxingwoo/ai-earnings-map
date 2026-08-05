# AI 算力财报全景地图 · v1 实现计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 把 DEMO 升级为生产版:113 节点注册表 + 约 38 家核心公司 × 最新 4 季真实财报数据(官方来源、逐条溯源),主页/地图页全部改读真实数据层。

**Architecture:** 纯静态、零构建。数据层为 `data/*.js`(全局赋值 + `module.exports` 守卫),浏览器 `<script src>` 直读(file:// 下 fetch 被禁,故不用 .json),Node `require` 同一文件做校验。前端计算层 `js/calc.js` 双端复用。

**Tech Stack:** 原生 HTML/CSS/JS;Node(仅校验脚本,`node:test` 内置 runner);无第三方依赖。

## Global Constraints

- **严禁虚构数字**:每个指标值必须来自官方披露(SEC 8-K/10-Q、IR 新闻稿、巨潮、台积电/台系月营收、公司官方博客),逐条带 `src` id;`sources.js` 中每个 src 含 `url, fetched_at, locator`。取不到 → 字段缺省,前端显示 "—"。
- YoY/QoQ/信号灯只由 `js/calc.js` 公开公式计算,不存衍生值。
- 数据基准日 2026-08-05;每公司取**已披露的最新 4 个季度**,按自然季对齐(fiscal_offset 标注)。
- 中文 UI;深色视觉(#141413 系);雅黑字体栈;动效遵守 prefers-reduced-motion。
- 演示生成器(PAT/mkSeries)不得出现在生产页。
- 每完成任务即 `git commit`(conventional commits)。

## 文件结构

```
ai-earnings-map/
├── index.html  map.html  styles.css  fx.js   # 已有,改造
├── js/calc.js            # 公式层(双端)
├── js/render-home.js     # 主页渲染(从 index.html 内联迁出)
├── js/render-map.js      # 地图渲染(从 map.html 内联迁出)
├── data/
│   ├── schema.md         # 口径契约
│   ├── companies.js      # COMPANIES 注册表(113 节点)
│   ├── metrics.js        # METRICS(真实数据,分批填充)
│   ├── sources.js        # SOURCES 溯源索引
│   ├── capacity.js       # CAPACITY 北美 AIDC 项目(逐项目带 src)
│   └── fx.js             # FX_RATES(带 fx_date/source)
├── validate.js           # node validate.js 全量校验
├── tests/calc.test.js    # node --test
└── demo.html  data.js    # DEMO 遗留(data.js 不再被生产页引用)
```

## 任务序列

- [ ] **T1 骨架与契约**:git init;schema.md;companies.js 全量注册表;metrics/sources/capacity/fx 空壳;calc.js + calc.test.js;commit
- [ ] **T2 validate.js**:schema 校验 + src 引用完整性 + YoY/QoQ 复算 + 空白检查;`node validate.js` 绿
- [ ] **T3 地图页迁移**:render-map.js 按 COMPANIES+METRICS 渲染(有数据→实卡,无→虚线卡);抽屉读 metrics+sources;删除对 data.js 依赖;浏览器目视
- [ ] **T4 主页迁移**:render-home.js 汇总(总收入/capex/净利润/信号数/覆盖数);capacity.js 结构 + GW 卡(无数据显示 "—");ticker 改为读 SOURCES 最近采集
- [ ] **T5 批次A·云厂9家**:MSFT GOOG AMZN META ORCL CRWV NBIS BABA 腾讯 → 最新4季 revenue/capex(+gm/ni 可及)
- [ ] **T6 批次B·AI芯片6家**:NVDA AMD AVGO MRVL 寒武纪 澜起 → +dc_revenue(NVDA/AMD)
- [ ] **T7 批次C·制造存储6家**:TSM(含月营收) 三星 SK海力士 MU 中芯 长鑫
- [ ] **T8 批次D·设备EDA5家**:ASML AMAT LRCX SNPS 北方华创
- [ ] **T9 批次E·整机4家**:DELL(backlog) 广达(月营收) 纬颖(月营收) 工业富联
- [ ] **T10 批次F·网络光互联4家**:Arista COHR 中际旭创 新易盛
- [ ] **T11 批次G·供电PCB4家**:Vertiv(backlog) 英维克 胜宏 沪电
- [ ] **T12 capacity.js**:北美 AIDC 项目容量(CoreWeave/IREN/Stargate-Abilene/xAI Colossus/Vantage 等,仅官方披露口径)
- [ ] **T13 交叉验证真实化**:VCHAINS 从 METRICS 取数生成对照行;缺侧显示 "—"
- [ ] **T14 终验**:validate 全绿;抽查 3 家对照官方原文;1440/768 截图;commit

## 数据批次通用步骤(T5–T11)

1. 逐家检索官方来源:SEC EDGAR 8-K EX-99.1 / 10-Q(`efts.sec.gov/LATEST/search-index`)、公司 IR newsroom、`www.cninfo.com.cn` 全文检索、台积电 investor 月营收页、公开资讯观测站(台系)
2. 按模板录入 `metrics.js`/`sources.js`(格式见 schema.md;period 用自然季 "2026Q2" 等)
3. `node validate.js` 必须全绿
4. 浏览器抽查该公司卡片 + 抽屉渲染
5. `git commit -m "feat(data): 批次X N 家真实财报"`

## 录入模板(格式示例,值为占位示意,执行时必须以官方披露为准)

```js
// metrics.js
{ company:'nvda', period:'2026Q1', metrics:{
    revenue:{ value:44062, unit:'USD_M', src:'nvda-fy2xq1-er' },
    dc_revenue:{ value:39112, unit:'USD_M', src:'nvda-fy2xq1-er' },
    gross_margin:{ value:0.605, src:'nvda-fy2xq1-er' },
    capex:null, backlog:null, guidance_next_q:null } }
// sources.js
{ id:'nvda-fy2xq1-er', type:'earnings_release',
  url:'https://investor.nvidia.com/.../press-release', fetched_at:'2026-08-05',
  archive:null, locator:'press release, 合并损益表' }
```
