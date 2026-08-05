# 数据口径契约(schema v1)

本文件是 `data/*.js` 的权威定义,也是 v2 采集管线的实现依据。

## 文件与全局变量

| 文件 | 全局变量 | 内容 |
|---|---|---|
| `companies.js` | `LANE_DEFS`, `COMPANIES` | 产业链环节定义 + 公司注册表 |
| `metrics.js` | `METRICS` | 结构化指标(公司 × 季度 × 指标) |
| `sources.js` | `SOURCES` | 溯源索引(每份披露文件一条) |
| `capacity.js` | `CAPACITY` | 北美 AIDC 容量项目清单 |
| `fx.js` | `FX_RATES` | 汇总折算汇率(带日期与来源) |

所有文件末尾必须带 `if (typeof module!=='undefined') module.exports = {...}`,供 `validate.js`(Node)加载。

## 期间(period)

- 季度:`YYYYQn`(如 `2026Q2`),**一律自然季**。财年错位公司在 `companies.js` 记 `fiscal_offset`(财季末比自然季末晚的月数,如 NVDA=1),录入时按"财季覆盖月份最多的自然季"对齐。
- 月度:`YYYYMm`(如 `2026M6`),仅用于台积电/台系 ODM 的 `monthly_revenue`。
- 每家公司保留**最新 4 个已披露季度**;不足 4 季(新上市)有几季存几季。

## COMPANIES 字段

`id`(唯一 slug)、`name`、`ticker`、`market`、`lane`(1–15,对应 LANE_DEFS)、`tier`(`leader|core|second`)、`listed`(`true|false|"pending"` 待核)、`currency`(披露币种单位,见下)、`fiscal_offset`、`size`(`lg|md|sm`,卡片尺寸∝体量)、`note`(可选)、`cloud`(非上市标记)、`ir_url`(官方 IR/公告入口,未知留空串)。

## METRICS 结构

```js
{ company:'nvda', period:'2026Q1', metrics:{
    revenue:      { value: 0, unit:'USD_M', src:'nvda-fy27q1-er' },
    gross_margin: { value: 0.60, src:'nvda-fy27q1-er' },   // 小数,无 unit
    ... } }
```

**指标字典**(缺披露 = 整个字段缺省,禁止 0/估算/插值):

| key | 含义 | 单位 |
|---|---|---|
| revenue | 总营收 | 公司披露币种 |
| dc_revenue / ai_revenue / ds_revenue / datacom_revenue | 数据中心/AI/DS/datacom 分部 | 同上 |
| gross_margin | 毛利率 | 小数 |
| net_income | 净利润 | 币种 |
| capex | 资本开支 | 币种 |
| backlog | 在手订单 | 币种 |
| bookings | 季度净预订(ASML) | 币种 |
| monthly_revenue | 月营收 | 币种 |
| guidance_next_q | 下季指引中值 | 币种 |

单位码:`USD_M`(百万美元)、`CNY_YI`(亿元人民币)、`EUR_M`、`TWD_M`(百万新台币)、`KRW_B`(十亿韩元)、`JPY_M`(百万日元)。

## SOURCES 结构

`id`(公司-季度-类型,如 `nvda-fy27q1-er`、`tsmc-2026m6-mr`)、`type`(`earnings_release|10-Q|8-K|quarterly_report|monthly_revenue|company_announcement`)、`url`(官方链接,sec.gov / 公司 IR / cninfo / mops)、`fetched_at`(采集日期)、`archive`(归档路径,v2 前为 null)、`locator`(披露位置描述)。

## CAPACITY 结构

`projects`: `project, operator, location, mw(数值), mw_kind('it_load|total_power|unknown'), status('operating|construction|announced'), src(→SOURCES)`。无官方容量数字的项目不收录。

## 铁律

1. 每个数字必须有 `src`,且该 src 在 SOURCES 存在、url 为官方域名
2. 未披露 = 字段缺省;`null` 仅用于"公司该口径存在但当季未给数"
3. YoY/QoQ/信号灯由 `js/calc.js` 公开公式实时计算,不落库
4. 汇率仅用于主页汇总折算,卡片与抽屉永远显示原始披露币种
