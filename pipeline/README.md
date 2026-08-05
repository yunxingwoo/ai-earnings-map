# 采集管线设计约定(v2 实现,v1 仅约定)

v1 的 `data/*.js` 由人工+子代理从官方来源采集;v2 由本管线自动化替代,**产出同一 schema,前端不变**。

## 数据源

| 目标 | 来源 | 方式 |
|---|---|---|
| 美股 | SEC EDGAR full-text search / 8-K EX-99.1 / 10-Q | `efts.sec.gov/LATEST/search-index?q=` + Archives 文档 |
| A 股 | 巨潮资讯 | `www.cninfo.com.cn/new/fulltextSearch?keyWord=` + 公告 PDF |
| 台股月营收 | 公开资讯观测站 | `mops.twse.com.tw` 月营收公告 |
| 台积电 | investor.tsmc.com | 月营收 + 季报页面 |
| 韩股 | 公司 IR(三星 / SK 海力士) | IR 新闻稿 PDF |
| 日股 | 公司 IR(信越 / 揖斐电 / 爱德万 / 铠侠) | IR 页面 |
| 港股 | 公司 IR(中芯 / 华虹 / 腾讯) | IR 公告 |

## 约定

1. 每份文件下载归档到 `archive/<company>-<period>-<type>.pdf`,并在 `sources.js` 回填 `archive` 路径
2. 解析只提取 `data/schema.md` 指标字典内的字段;取不到 → 字段缺省
3. 每次运行后必须 `node validate.js` 全绿才允许提交
4. 汇率更新独立任务:覆盖 `data/fx.js` 并改 `date`/`source`
5. 财报季运行节奏:核心 38 家财报日历驱动,披露后 24h 内入库
