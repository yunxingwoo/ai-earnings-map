/* 汇总折算汇率(2026-08-05)— 来源:open.er-api.com/v6/latest/USD(UTC 当日)
   仅用于主页汇总折算;卡片/抽屉永远显示原始披露币种 */
const FX_RATES = {
  date: '2026-08-05',
  source: 'https://open.er-api.com/v6/latest/USD',
  perUSD: { EUR: 0.867784, CNY: 6.762932, TWD: 32.354871, KRW: 1428.890254, JPY: 157.619868 }
};

if (typeof module!=='undefined') module.exports = {FX_RATES};
