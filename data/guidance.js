/* data/guidance.js — 云厂 FY2026 全年 capex 指引(前瞻数据,不入 METRICS 历史层)
   来源: 各公司 2026Q2 财报电话会(2026-07 下旬), CFO 原话; 合计约 $730B
   用途: Kill Switch 面板"将要花"前瞻层; 指引会随电话会上调, fetched_at 标注 */
const GUIDANCE = {
  fetched_at: "2026-08-20",
  fy: "2026",
  note: "单位 USD_B(十亿美元); range 为指引区间, point 为点值指引; 全部为电话会口径",
  entries: [
    { company: "msft", label: "微软", capex_low: 175, capex_high: 175, point: true,
      note: "Amy Hood Q4 FY26 电话会: 2026 自然年 capex 约 $175B; 含部件涨价影响; FY27 起厂房折旧年限 15→25 年",
      src: "https://www.microsoft.com/en-us/investor" },
    { company: "goog", label: "谷歌", capex_low: 195, capex_high: 205, point: false,
      note: "CFO Anat Ashkenazi Q2 电话会: 上调至 $195-205B(原 $180-190B), 因产能交付加速; 2027 将显著增加",
      src: "https://abc.xyz/investor/" },
    { company: "amzn", label: "亚马逊", capex_low: 220, capex_high: 220, point: true,
      note: "CEO Andy Jassy Q2 电话会: 上调至 $220B(原约 $200B); 称该规模仍不够满足 2026-2028 需求",
      src: "https://ir.aboutamazon.com/" },
    { company: "meta", label: "Meta", capex_low: 130, capex_high: 145, point: false,
      note: "CFO Susan Li Q2 电话会: 收窄至 $130-145B(原 $125-145B); 服务器+数据中心+网络",
      src: "https://investor.atmeta.com/" },
    { company: "orcl", label: "甲骨文", capex_low: 35, capex_high: 35, point: true,
      note: "FY26 指引约 $35B(管理层口径, 较前期预测大幅上修); RPO 验收挂钩确认收入",
      src: "https://www.oracle.com/investor/" }
  ]
};
if (typeof module !== "undefined") module.exports = { GUIDANCE };
