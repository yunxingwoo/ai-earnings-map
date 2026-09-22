/* 汇总折算汇率(2026-08-18)— 来源:open.er-api.com/v6/latest/USD(UTC 当日)
   仅用于主页汇总折算;卡片/抽屉永远显示原始披露币种 */
const FX_RATES = {
  date: '2026-08-18',
  source: 'https://open.er-api.com/v6/latest/USD',
  perUSD: { EUR: 0.863128, CNY: 6.753148, TWD: 31.839500, KRW: 1414.423042, JPY: 159.313933 }
};

if (typeof module!=='undefined') module.exports = {FX_RATES};
