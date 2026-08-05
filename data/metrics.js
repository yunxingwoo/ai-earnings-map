/* 结构化指标(真实官方披露数据,分批采集填入)— 口径见 data/schema.md
   未披露 = 字段缺省;YoY/QoQ 不落库,由 js/calc.js 实时计算 */
const METRICS = [
 {
  "company": "dell",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 43842,
    "unit": "USD_M",
    "src": "dell-fy27q1-er"
   },
   "gross_margin": {
    "value": 0.1775,
    "src": "dell-fy27q1-er"
   },
   "net_income": {
    "value": 3438,
    "unit": "USD_M",
    "src": "dell-fy27q1-er"
   },
   "backlog": {
    "value": 51300,
    "unit": "USD_M",
    "src": "dell-fy27q1-pr"
   }
  }
 },
 {
  "company": "dell",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 33379,
    "unit": "USD_M",
    "src": "dell-fy26q4-er"
   },
   "gross_margin": {
    "value": 0.2016,
    "src": "dell-fy26q4-er"
   },
   "net_income": {
    "value": 2259,
    "unit": "USD_M",
    "src": "dell-fy26q4-er"
   },
   "backlog": {
    "value": 43000,
    "unit": "USD_M",
    "src": "dell-fy26q4-er"
   }
  }
 },
 {
  "company": "dell",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 27005,
    "unit": "USD_M",
    "src": "dell-fy26q3-er"
   },
   "gross_margin": {
    "value": 0.2071,
    "src": "dell-fy26q3-er"
   },
   "net_income": {
    "value": 1548,
    "unit": "USD_M",
    "src": "dell-fy26q3-er"
   },
   "backlog": {
    "value": 18400,
    "unit": "USD_M",
    "src": "dell-fy26q3-er"
   }
  }
 },
 {
  "company": "dell",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 29776,
    "unit": "USD_M",
    "src": "dell-fy26q2-er"
   },
   "gross_margin": {
    "value": 0.1829,
    "src": "dell-fy26q2-er"
   },
   "net_income": {
    "value": 1164,
    "unit": "USD_M",
    "src": "dell-fy26q2-er"
   },
   "backlog": {
    "value": 11700,
    "unit": "USD_M",
    "src": "dell-fy26q2-pr"
   }
  }
 },
 {
  "company": "quanta",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 809221.06,
    "unit": "TWD_M",
    "src": "mops-2382-115q1"
   },
   "gross_margin": {
    "value": 0.0478,
    "src": "mops-2382-115q1"
   },
   "net_income": {
    "value": 21192.43,
    "unit": "TWD_M",
    "src": "mops-2382-115q1"
   }
  }
 },
 {
  "company": "quanta",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 638637.42,
    "unit": "TWD_M",
    "src": "mops-2382-114fy-q4derived"
   },
   "gross_margin": {
    "value": 0.0633,
    "src": "mops-2382-114fy-q4derived"
   },
   "net_income": {
    "value": 22197.28,
    "unit": "TWD_M",
    "src": "mops-2382-114fy-q4derived"
   }
  }
 },
 {
  "company": "quanta",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 495258.38,
    "unit": "TWD_M",
    "src": "mops-2382-114q3"
   },
   "gross_margin": {
    "value": 0.0685,
    "src": "mops-2382-114q3"
   },
   "net_income": {
    "value": 16431.31,
    "unit": "TWD_M",
    "src": "mops-2382-114q3"
   }
  }
 },
 {
  "company": "quanta",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 504121.65,
    "unit": "TWD_M",
    "src": "mops-2382-114h1"
   },
   "gross_margin": {
    "value": 0.0705,
    "src": "mops-2382-114h1"
   },
   "net_income": {
    "value": 16860.64,
    "unit": "TWD_M",
    "src": "mops-2382-114h1"
   }
  }
 },
 {
  "company": "quanta",
  "period": "2026M1",
  "metrics": {
   "monthly_revenue": {
    "value": 230834.86,
    "unit": "TWD_M",
    "src": "mops-t21-115m1"
   }
  }
 },
 {
  "company": "quanta",
  "period": "2026M2",
  "metrics": {
   "monthly_revenue": {
    "value": 215583.15,
    "unit": "TWD_M",
    "src": "mops-t21-115m2"
   }
  }
 },
 {
  "company": "quanta",
  "period": "2026M3",
  "metrics": {
   "monthly_revenue": {
    "value": 362803.05,
    "unit": "TWD_M",
    "src": "mops-t21-115m3"
   }
  }
 },
 {
  "company": "quanta",
  "period": "2026M4",
  "metrics": {
   "monthly_revenue": {
    "value": 339921.32,
    "unit": "TWD_M",
    "src": "mops-t21-115m4"
   }
  }
 },
 {
  "company": "quanta",
  "period": "2026M5",
  "metrics": {
   "monthly_revenue": {
    "value": 311481.02,
    "unit": "TWD_M",
    "src": "mops-t21-115m5"
   }
  }
 },
 {
  "company": "quanta",
  "period": "2026M6",
  "metrics": {
   "monthly_revenue": {
    "value": 385190.82,
    "unit": "TWD_M",
    "src": "mops-t21-115m6"
   }
  }
 },
 {
  "company": "wiwynn",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 276507.73,
    "unit": "TWD_M",
    "src": "mops-6669-115q1"
   },
   "gross_margin": {
    "value": 0.0755,
    "src": "mops-6669-115q1"
   },
   "net_income": {
    "value": 14114.41,
    "unit": "TWD_M",
    "src": "mops-6669-115q1"
   }
  }
 },
 {
  "company": "wiwynn",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 292440.48,
    "unit": "TWD_M",
    "src": "mops-6669-114fy-q4derived"
   },
   "gross_margin": {
    "value": 0.0723,
    "src": "mops-6669-114fy-q4derived"
   },
   "net_income": {
    "value": 13791.51,
    "unit": "TWD_M",
    "src": "mops-6669-114fy-q4derived"
   }
  }
 },
 {
  "company": "wiwynn",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 266824.04,
    "unit": "TWD_M",
    "src": "mops-6669-114q3"
   },
   "gross_margin": {
    "value": 0.0882,
    "src": "mops-6669-114q3"
   },
   "net_income": {
    "value": 15410.91,
    "unit": "TWD_M",
    "src": "mops-6669-114q3"
   }
  }
 },
 {
  "company": "wiwynn",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 220743.5,
    "unit": "TWD_M",
    "src": "mops-6669-114h1"
   },
   "gross_margin": {
    "value": 0.0858,
    "src": "mops-6669-114h1"
   },
   "net_income": {
    "value": 12122.37,
    "unit": "TWD_M",
    "src": "mops-6669-114h1"
   }
  }
 },
 {
  "company": "wiwynn",
  "period": "2026M1",
  "metrics": {
   "monthly_revenue": {
    "value": 83225.29,
    "unit": "TWD_M",
    "src": "mops-t21-115m1"
   }
  }
 },
 {
  "company": "wiwynn",
  "period": "2026M2",
  "metrics": {
   "monthly_revenue": {
    "value": 94633.14,
    "unit": "TWD_M",
    "src": "mops-t21-115m2"
   }
  }
 },
 {
  "company": "wiwynn",
  "period": "2026M3",
  "metrics": {
   "monthly_revenue": {
    "value": 98649.31,
    "unit": "TWD_M",
    "src": "mops-t21-115m3"
   }
  }
 },
 {
  "company": "wiwynn",
  "period": "2026M4",
  "metrics": {
   "monthly_revenue": {
    "value": 82731,
    "unit": "TWD_M",
    "src": "mops-t21-115m4"
   }
  }
 },
 {
  "company": "wiwynn",
  "period": "2026M5",
  "metrics": {
   "monthly_revenue": {
    "value": 84050.47,
    "unit": "TWD_M",
    "src": "mops-t21-115m5"
   }
  }
 },
 {
  "company": "wiwynn",
  "period": "2026M6",
  "metrics": {
   "monthly_revenue": {
    "value": 111371.12,
    "unit": "TWD_M",
    "src": "mops-t21-115m6"
   }
  }
 },
 {
  "company": "fii",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 2510.78,
    "unit": "CNY_YI",
    "src": "fii-2026q1"
   },
   "gross_margin": {
    "value": 0.0735,
    "src": "fii-2026q1"
   },
   "net_income": {
    "value": 105.95,
    "unit": "CNY_YI",
    "src": "fii-2026q1"
   }
  }
 },
 {
  "company": "fii",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 2989.56,
    "unit": "CNY_YI",
    "src": "fii-2025fy"
   },
   "gross_margin": {
    "value": 0.0741,
    "src": "fii-2025fy-gmderived"
   },
   "net_income": {
    "value": 127.99,
    "unit": "CNY_YI",
    "src": "fii-2025fy"
   }
  }
 },
 {
  "company": "fii",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 2431.72,
    "unit": "CNY_YI",
    "src": "fii-2025q3"
   },
   "gross_margin": {
    "value": 0.07,
    "src": "fii-2025q3-gmderived"
   },
   "net_income": {
    "value": 103.73,
    "unit": "CNY_YI",
    "src": "fii-2025q3"
   }
  }
 },
 {
  "company": "fii",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 2003.45,
    "unit": "CNY_YI",
    "src": "fii-2025fy"
   },
   "gross_margin": {
    "value": 0.065,
    "src": "fii-2025h1-gmderived"
   },
   "net_income": {
    "value": 68.83,
    "unit": "CNY_YI",
    "src": "fii-2025fy"
   }
  }
 },
 {
  "company": "asml",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 9326,
    "unit": "EUR_M",
    "src": "asml-2026q2-er"
   },
   "gross_margin": {
    "value": 0.54,
    "src": "asml-2026q2-er"
   },
   "net_income": {
    "value": 2918,
    "unit": "EUR_M",
    "src": "asml-2026q2-er"
   }
  }
 },
 {
  "company": "asml",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 8767,
    "unit": "EUR_M",
    "src": "asml-2026q1-er"
   },
   "gross_margin": {
    "value": 0.53,
    "src": "asml-2026q1-er"
   },
   "net_income": {
    "value": 2757,
    "unit": "EUR_M",
    "src": "asml-2026q1-er"
   }
  }
 },
 {
  "company": "asml",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 9718,
    "unit": "EUR_M",
    "src": "asml-2025q4-er"
   },
   "gross_margin": {
    "value": 0.522,
    "src": "asml-2025q4-er"
   },
   "net_income": {
    "value": 2840,
    "unit": "EUR_M",
    "src": "asml-2025q4-er"
   },
   "backlog": {
    "value": 38800,
    "unit": "EUR_M",
    "src": "asml-2025q4-er"
   }
  }
 },
 {
  "company": "asml",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 7516,
    "unit": "EUR_M",
    "src": "asml-2025q3-er"
   },
   "gross_margin": {
    "value": 0.516,
    "src": "asml-2025q3-er"
   },
   "net_income": {
    "value": 2125,
    "unit": "EUR_M",
    "src": "asml-2025q3-er"
   },
   "backlog": {
    "value": 35900,
    "unit": "EUR_M",
    "src": "asml-2025q4-er"
   }
  }
 },
 {
  "company": "amat",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 7910,
    "unit": "USD_M",
    "src": "amat-fy26q2-er"
   },
   "gross_margin": {
    "value": 0.499,
    "src": "amat-fy26q2-er"
   },
   "net_income": {
    "value": 2806,
    "unit": "USD_M",
    "src": "amat-fy26q2-er"
   }
  }
 },
 {
  "company": "amat",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 7010,
    "unit": "USD_M",
    "src": "amat-fy26q1-er"
   },
   "gross_margin": {
    "value": 0.49,
    "src": "amat-fy26q1-er"
   },
   "net_income": {
    "value": 2026,
    "unit": "USD_M",
    "src": "amat-fy26q1-er"
   }
  }
 },
 {
  "company": "amat",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 6800,
    "unit": "USD_M",
    "src": "amat-fy25q4-er"
   },
   "gross_margin": {
    "value": 0.48,
    "src": "amat-fy25q4-er"
   },
   "net_income": {
    "value": 1897,
    "unit": "USD_M",
    "src": "amat-fy25q4-er"
   }
  }
 },
 {
  "company": "amat",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 7300,
    "unit": "USD_M",
    "src": "amat-fy25q3-er"
   },
   "gross_margin": {
    "value": 0.488,
    "src": "amat-fy25q3-er"
   },
   "net_income": {
    "value": 1779,
    "unit": "USD_M",
    "src": "amat-fy25q3-er"
   }
  }
 },
 {
  "company": "lrcx",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 6720,
    "unit": "USD_M",
    "src": "lrcx-fy26q4-er"
   },
   "gross_margin": {
    "value": 0.517,
    "src": "lrcx-fy26q4-er"
   },
   "net_income": {
    "value": 2280,
    "unit": "USD_M",
    "src": "lrcx-fy26q4-er"
   }
  }
 },
 {
  "company": "lrcx",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 5841.49,
    "unit": "USD_M",
    "src": "lrcx-fy26q3-er"
   },
   "gross_margin": {
    "value": 0.498,
    "src": "lrcx-fy26q3-er"
   },
   "net_income": {
    "value": 1825,
    "unit": "USD_M",
    "src": "lrcx-fy26q3-er"
   }
  }
 },
 {
  "company": "lrcx",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 5344.79,
    "unit": "USD_M",
    "src": "lrcx-fy26q2-er"
   },
   "gross_margin": {
    "value": 0.496,
    "src": "lrcx-fy26q2-er"
   },
   "net_income": {
    "value": 1594,
    "unit": "USD_M",
    "src": "lrcx-fy26q2-er"
   }
  }
 },
 {
  "company": "lrcx",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 5324.17,
    "unit": "USD_M",
    "src": "lrcx-fy26q1-er"
   },
   "gross_margin": {
    "value": 0.504,
    "src": "lrcx-fy26q1-er"
   },
   "net_income": {
    "value": 1569,
    "unit": "USD_M",
    "src": "lrcx-fy26q1-er"
   }
  }
 },
 {
  "company": "snps",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 2276,
    "unit": "USD_M",
    "src": "snps-fy26q2-er"
   },
   "net_income": {
    "value": 17.1,
    "unit": "USD_M",
    "src": "snps-fy26q2-er"
   }
  }
 },
 {
  "company": "snps",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 2409,
    "unit": "USD_M",
    "src": "snps-fy26q1-er"
   },
   "net_income": {
    "value": 65,
    "unit": "USD_M",
    "src": "snps-fy26q1-er"
   }
  }
 },
 {
  "company": "snps",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 2255,
    "unit": "USD_M",
    "src": "snps-fy25q4-er"
   },
   "net_income": {
    "value": 448.7,
    "unit": "USD_M",
    "src": "snps-fy25q4-er"
   }
  }
 },
 {
  "company": "snps",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 1740,
    "unit": "USD_M",
    "src": "snps-fy25q3-er"
   },
   "net_income": {
    "value": 242.5,
    "unit": "USD_M",
    "src": "snps-fy25q3-er"
   }
  }
 },
 {
  "company": "naura",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 103.23,
    "unit": "CNY_YI",
    "src": "naura-2026q1"
   },
   "net_income": {
    "value": 16.35,
    "unit": "CNY_YI",
    "src": "naura-2026q1"
   }
  }
 },
 {
  "company": "naura",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 120.52,
    "unit": "CNY_YI",
    "src": "naura-2025fy"
   },
   "net_income": {
    "value": 3.92,
    "unit": "CNY_YI",
    "src": "naura-2025fy"
   }
  }
 },
 {
  "company": "naura",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 111.6,
    "unit": "CNY_YI",
    "src": "naura-2025fy"
   },
   "net_income": {
    "value": 19.22,
    "unit": "CNY_YI",
    "src": "naura-2025fy"
   }
  }
 },
 {
  "company": "naura",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 79.36,
    "unit": "CNY_YI",
    "src": "naura-2025fy"
   },
   "net_income": {
    "value": 16.27,
    "unit": "CNY_YI",
    "src": "naura-2025fy"
   }
  }
 },
 {
  "company": "vrt",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 3274.3,
    "unit": "USD_M",
    "src": "vrt-2026q2-er"
   },
   "gross_margin": {
    "value": 0.3771,
    "src": "vrt-2026q2-er"
   },
   "net_income": {
    "value": 497.8,
    "unit": "USD_M",
    "src": "vrt-2026q2-er"
   }
  }
 },
 {
  "company": "vrt",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 2649.5,
    "unit": "USD_M",
    "src": "vrt-2026q1-er"
   },
   "gross_margin": {
    "value": 0.3773,
    "src": "vrt-2026q1-er"
   },
   "net_income": {
    "value": 390.1,
    "unit": "USD_M",
    "src": "vrt-2026q1-er"
   }
  }
 },
 {
  "company": "vrt",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 2880,
    "unit": "USD_M",
    "src": "vrt-2025q4-er"
   },
   "gross_margin": {
    "value": 0.3894,
    "src": "vrt-2025q4-er"
   },
   "net_income": {
    "value": 445.6,
    "unit": "USD_M",
    "src": "vrt-2025q4-er"
   },
   "backlog": {
    "value": 15000,
    "unit": "USD_M",
    "src": "vrt-2025q4-er"
   }
  }
 },
 {
  "company": "vrt",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 2675.8,
    "unit": "USD_M",
    "src": "vrt-2025q3-er"
   },
   "gross_margin": {
    "value": 0.3777,
    "src": "vrt-2025q3-er"
   },
   "net_income": {
    "value": 398.5,
    "unit": "USD_M",
    "src": "vrt-2025q3-er"
   },
   "backlog": {
    "value": 9500,
    "unit": "USD_M",
    "src": "vrt-2025q3-er"
   }
  }
 },
 {
  "company": "envicool",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 11.75,
    "unit": "CNY_YI",
    "src": "ev-2026q1-qr"
   },
   "gross_margin": {
    "value": 0.2429,
    "src": "ev-2026q1-qr"
   },
   "net_income": {
    "value": 0.0866,
    "unit": "CNY_YI",
    "src": "ev-2026q1-qr"
   }
  }
 },
 {
  "company": "envicool",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 20.42,
    "unit": "CNY_YI",
    "src": "ev-2025fy-ar"
   },
   "gross_margin": {
    "value": 0.2893,
    "src": "ev-2025q4-gm"
   },
   "net_income": {
    "value": 1.23,
    "unit": "CNY_YI",
    "src": "ev-2025fy-ar"
   }
  }
 },
 {
  "company": "envicool",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 14.53,
    "unit": "CNY_YI",
    "src": "ev-2025fy-ar"
   },
   "gross_margin": {
    "value": 0.294,
    "src": "ev-2025q3-gm"
   },
   "net_income": {
    "value": 1.83,
    "unit": "CNY_YI",
    "src": "ev-2025fy-ar"
   }
  }
 },
 {
  "company": "envicool",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 16.41,
    "unit": "CNY_YI",
    "src": "ev-2025fy-ar"
   },
   "gross_margin": {
    "value": 0.2597,
    "src": "ev-2025q2-gm"
   },
   "net_income": {
    "value": 1.68,
    "unit": "CNY_YI",
    "src": "ev-2025fy-ar"
   }
  }
 },
 {
  "company": "shenghong",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 55.19,
    "unit": "CNY_YI",
    "src": "sh-2026q1-qr"
   },
   "gross_margin": {
    "value": 0.3446,
    "src": "sh-2026q1-qr"
   },
   "net_income": {
    "value": 12.88,
    "unit": "CNY_YI",
    "src": "sh-2026q1-qr"
   }
  }
 },
 {
  "company": "shenghong",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 51.75,
    "unit": "CNY_YI",
    "src": "sh-2025fy-ar"
   },
   "gross_margin": {
    "value": 0.3351,
    "src": "sh-2025q4-gm"
   },
   "net_income": {
    "value": 10.67,
    "unit": "CNY_YI",
    "src": "sh-2025fy-ar"
   }
  }
 },
 {
  "company": "shenghong",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 50.86,
    "unit": "CNY_YI",
    "src": "sh-2025fy-ar"
   },
   "gross_margin": {
    "value": 0.3519,
    "src": "sh-2025q3-gm"
   },
   "net_income": {
    "value": 11.02,
    "unit": "CNY_YI",
    "src": "sh-2025fy-ar"
   }
  }
 },
 {
  "company": "shenghong",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 47.19,
    "unit": "CNY_YI",
    "src": "sh-2025fy-ar"
   },
   "gross_margin": {
    "value": 0.3883,
    "src": "sh-2025q2-gm"
   },
   "net_income": {
    "value": 12.22,
    "unit": "CNY_YI",
    "src": "sh-2025fy-ar"
   }
  }
 },
 {
  "company": "wus",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 62.14,
    "unit": "CNY_YI",
    "src": "wus-2026q1-qr"
   },
   "gross_margin": {
    "value": 0.3563,
    "src": "wus-2026q1-qr"
   },
   "net_income": {
    "value": 12.42,
    "unit": "CNY_YI",
    "src": "wus-2026q1-qr"
   }
  }
 },
 {
  "company": "wus",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 54.33,
    "unit": "CNY_YI",
    "src": "wus-2025fy-ar"
   },
   "gross_margin": {
    "value": 0.3566,
    "src": "wus-2025q4-gm"
   },
   "net_income": {
    "value": 11.05,
    "unit": "CNY_YI",
    "src": "wus-2025fy-ar"
   }
  }
 },
 {
  "company": "wus",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 50.19,
    "unit": "CNY_YI",
    "src": "wus-2025fy-ar"
   },
   "gross_margin": {
    "value": 0.3584,
    "src": "wus-2025q3-gm"
   },
   "net_income": {
    "value": 10.35,
    "unit": "CNY_YI",
    "src": "wus-2025fy-ar"
   }
  }
 },
 {
  "company": "wus",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 44.56,
    "unit": "CNY_YI",
    "src": "wus-2025fy-ar"
   },
   "gross_margin": {
    "value": 0.3731,
    "src": "wus-2025q2-gm"
   },
   "net_income": {
    "value": 9.2,
    "unit": "CNY_YI",
    "src": "wus-2025fy-ar"
   }
  }
 },
 {
  "company": "tsmc",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 1270380,
    "unit": "TWD_M",
    "src": "tsmc-2026q2-er"
   },
   "gross_margin": {
    "value": 0.677,
    "src": "tsmc-2026q2-er"
   },
   "net_income": {
    "value": 706560,
    "unit": "TWD_M",
    "src": "tsmc-2026q2-er"
   }
  }
 },
 {
  "company": "tsmc",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 1134100,
    "unit": "TWD_M",
    "src": "tsmc-2026q1-er"
   },
   "gross_margin": {
    "value": 0.662,
    "src": "tsmc-2026q1-er"
   },
   "net_income": {
    "value": 572480,
    "unit": "TWD_M",
    "src": "tsmc-2026q1-er"
   }
  }
 },
 {
  "company": "tsmc",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 1046090,
    "unit": "TWD_M",
    "src": "tsmc-2025q4-er"
   },
   "gross_margin": {
    "value": 0.623,
    "src": "tsmc-2025q4-er"
   },
   "net_income": {
    "value": 505740,
    "unit": "TWD_M",
    "src": "tsmc-2025q4-er"
   }
  }
 },
 {
  "company": "tsmc",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 989920,
    "unit": "TWD_M",
    "src": "tsmc-2025q3-er"
   },
   "gross_margin": {
    "value": 0.595,
    "src": "tsmc-2025q3-er"
   },
   "net_income": {
    "value": 452300,
    "unit": "TWD_M",
    "src": "tsmc-2025q3-er"
   }
  }
 },
 {
  "company": "tsmc",
  "period": "2026M6",
  "metrics": {
   "monthly_revenue": {
    "value": 442680,
    "unit": "TWD_M",
    "src": "tsmc-monthly-2026m6"
   }
  }
 },
 {
  "company": "tsmc",
  "period": "2026M5",
  "metrics": {
   "monthly_revenue": {
    "value": 416975,
    "unit": "TWD_M",
    "src": "tsmc-monthly-2026m5"
   }
  }
 },
 {
  "company": "tsmc",
  "period": "2026M4",
  "metrics": {
   "monthly_revenue": {
    "value": 410726,
    "unit": "TWD_M",
    "src": "tsmc-monthly-2026m4"
   }
  }
 },
 {
  "company": "tsmc",
  "period": "2026M3",
  "metrics": {
   "monthly_revenue": {
    "value": 415191,
    "unit": "TWD_M",
    "src": "tsmc-monthly-2026m3"
   }
  }
 },
 {
  "company": "tsmc",
  "period": "2026M2",
  "metrics": {
   "monthly_revenue": {
    "value": 317657,
    "unit": "TWD_M",
    "src": "tsmc-monthly-2026m2"
   }
  }
 },
 {
  "company": "tsmc",
  "period": "2026M1",
  "metrics": {
   "monthly_revenue": {
    "value": 401255,
    "unit": "TWD_M",
    "src": "tsmc-monthly-2026m1"
   }
  }
 },
 {
  "company": "samsung",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 171499.5,
    "unit": "KRW_B",
    "src": "samsung-2026q2-er"
   },
   "net_income": {
    "value": 71620,
    "unit": "KRW_B",
    "src": "samsung-2026q2-er"
   }
  }
 },
 {
  "company": "samsung",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 133870,
    "unit": "KRW_B",
    "src": "samsung-2026q1-er"
   },
   "net_income": {
    "value": 47230,
    "unit": "KRW_B",
    "src": "samsung-2026q1-er"
   }
  }
 },
 {
  "company": "samsung",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 93800,
    "unit": "KRW_B",
    "src": "samsung-2025q4-er"
   },
   "net_income": {
    "value": 19640,
    "unit": "KRW_B",
    "src": "samsung-2025q4-er"
   }
  }
 },
 {
  "company": "samsung",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 86060,
    "unit": "KRW_B",
    "src": "samsung-2025q3-er"
   },
   "net_income": {
    "value": 12220,
    "unit": "KRW_B",
    "src": "samsung-2025q3-er"
   }
  }
 },
 {
  "company": "hynix",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 79320,
    "unit": "KRW_B",
    "src": "hynix-2026q2-er"
   },
   "net_income": {
    "value": 93920,
    "unit": "KRW_B",
    "src": "hynix-2026q2-er"
   }
  }
 },
 {
  "company": "hynix",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 52576.3,
    "unit": "KRW_B",
    "src": "hynix-2026q1-er"
   },
   "net_income": {
    "value": 40345.9,
    "unit": "KRW_B",
    "src": "hynix-2026q1-er"
   }
  }
 },
 {
  "company": "hynix",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 32826.7,
    "unit": "KRW_B",
    "src": "hynix-2025q4-er"
   },
   "net_income": {
    "value": 15246,
    "unit": "KRW_B",
    "src": "hynix-2025q4-er"
   }
  }
 },
 {
  "company": "hynix",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 24448.9,
    "unit": "KRW_B",
    "src": "hynix-2025q3-er"
   },
   "net_income": {
    "value": 12597.5,
    "unit": "KRW_B",
    "src": "hynix-2025q3-er"
   }
  }
 },
 {
  "company": "mu",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 41456,
    "unit": "USD_M",
    "src": "mu-fy26q3-er"
   },
   "gross_margin": {
    "value": 0.846,
    "src": "mu-fy26q3-er"
   },
   "net_income": {
    "value": 28243,
    "unit": "USD_M",
    "src": "mu-fy26q3-er"
   }
  }
 },
 {
  "company": "mu",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 23860,
    "unit": "USD_M",
    "src": "mu-fy26q2-er"
   },
   "gross_margin": {
    "value": 0.744,
    "src": "mu-fy26q2-er"
   },
   "net_income": {
    "value": 13790,
    "unit": "USD_M",
    "src": "mu-fy26q2-er"
   }
  }
 },
 {
  "company": "mu",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 13640,
    "unit": "USD_M",
    "src": "mu-fy26q1-er"
   },
   "gross_margin": {
    "value": 0.56,
    "src": "mu-fy26q1-er"
   },
   "net_income": {
    "value": 5240,
    "unit": "USD_M",
    "src": "mu-fy26q1-er"
   }
  }
 },
 {
  "company": "mu",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 11320,
    "unit": "USD_M",
    "src": "mu-fy25q4-er"
   },
   "gross_margin": {
    "value": 0.447,
    "src": "mu-fy25q4-er"
   },
   "net_income": {
    "value": 3200,
    "unit": "USD_M",
    "src": "mu-fy25q4-er"
   }
  }
 },
 {
  "company": "smic",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 2505.5,
    "unit": "USD_M",
    "src": "smic-2026q1-er"
   },
   "gross_margin": {
    "value": 0.201,
    "src": "smic-2026q1-er"
   },
   "net_income": {
    "value": 197.4,
    "unit": "USD_M",
    "src": "smic-2026q1-er"
   }
  }
 },
 {
  "company": "smic",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 2488.7,
    "unit": "USD_M",
    "src": "smic-2025q4-er"
   },
   "gross_margin": {
    "value": 0.192,
    "src": "smic-2025q4-er"
   },
   "net_income": {
    "value": 172.9,
    "unit": "USD_M",
    "src": "smic-2025q4-er"
   }
  }
 },
 {
  "company": "smic",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 2381.8,
    "unit": "USD_M",
    "src": "smic-2025q3-er"
   },
   "gross_margin": {
    "value": 0.22,
    "src": "smic-2025q3-er"
   },
   "net_income": {
    "value": 191.8,
    "unit": "USD_M",
    "src": "smic-2025q3-er"
   }
  }
 },
 {
  "company": "smic",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 2209.1,
    "unit": "USD_M",
    "src": "smic-2025q2-er"
   },
   "gross_margin": {
    "value": 0.204,
    "src": "smic-2025q2-er"
   },
   "net_income": {
    "value": 132.5,
    "unit": "USD_M",
    "src": "smic-2025q2-er"
   }
  }
 },
 {
  "company": "cxmt",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 508,
    "unit": "CNY_YI",
    "src": "cxmt-2026q1-prospectus"
   },
   "net_income": {
    "value": 247.62,
    "unit": "CNY_YI",
    "src": "cxmt-2026q1-prospectus"
   }
  }
 },
 {
  "company": "msft",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 90000,
    "unit": "USD_M",
    "src": "msft-fy26q4-er"
   },
   "capex": {
    "value": 41000,
    "unit": "USD_M",
    "src": "msft-fy26q4-er"
   },
   "net_income": {
    "value": 35760,
    "unit": "USD_M",
    "src": "msft-fy26q4-er"
   }
  }
 },
 {
  "company": "msft",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 82900,
    "unit": "USD_M",
    "src": "msft-fy26q3-er"
   },
   "capex": {
    "value": 31900,
    "unit": "USD_M",
    "src": "msft-fy26q3-er"
   },
   "net_income": {
    "value": 31778,
    "unit": "USD_M",
    "src": "msft-fy26q3-er"
   }
  }
 },
 {
  "company": "msft",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 81270,
    "unit": "USD_M",
    "src": "msft-fy26q2-er"
   },
   "capex": {
    "value": 37500,
    "unit": "USD_M",
    "src": "msft-fy26q2-er"
   },
   "net_income": {
    "value": 38500,
    "unit": "USD_M",
    "src": "msft-fy26q2-er"
   }
  }
 },
 {
  "company": "msft",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 77673,
    "unit": "USD_M",
    "src": "msft-fy26q1-er"
   },
   "capex": {
    "value": 34900,
    "unit": "USD_M",
    "src": "msft-fy26q1-er"
   },
   "net_income": {
    "value": 27747,
    "unit": "USD_M",
    "src": "msft-fy26q1-er"
   }
  }
 },
 {
  "company": "goog",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 119796,
    "unit": "USD_M",
    "src": "goog-2026q2-er"
   },
   "capex": {
    "value": 44900,
    "unit": "USD_M",
    "src": "goog-2026q2-er"
   },
   "net_income": {
    "value": 112100,
    "unit": "USD_M",
    "src": "goog-2026q2-er"
   }
  }
 },
 {
  "company": "goog",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 109900,
    "unit": "USD_M",
    "src": "goog-2026q1-er"
   },
   "capex": {
    "value": 35700,
    "unit": "USD_M",
    "src": "goog-2026q1-er"
   },
   "net_income": {
    "value": 62600,
    "unit": "USD_M",
    "src": "goog-2026q1-er"
   }
  }
 },
 {
  "company": "goog",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 113800,
    "unit": "USD_M",
    "src": "goog-2025q4-er"
   },
   "capex": {
    "value": 27850,
    "unit": "USD_M",
    "src": "goog-2025q4-er"
   },
   "net_income": {
    "value": 34500,
    "unit": "USD_M",
    "src": "goog-2025q4-er"
   }
  }
 },
 {
  "company": "goog",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 102346,
    "unit": "USD_M",
    "src": "goog-2025q3-er"
   },
   "capex": {
    "value": 24000,
    "unit": "USD_M",
    "src": "goog-2025q3-er"
   },
   "net_income": {
    "value": 34979,
    "unit": "USD_M",
    "src": "goog-2025q3-er"
   }
  }
 },
 {
  "company": "amzn",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 200600,
    "unit": "USD_M",
    "src": "amzn-2026q2-er"
   },
   "capex": {
    "value": 54200,
    "unit": "USD_M",
    "src": "amzn-2026q2-er"
   },
   "net_income": {
    "value": 62600,
    "unit": "USD_M",
    "src": "amzn-2026q2-er"
   }
  }
 },
 {
  "company": "amzn",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 181500,
    "unit": "USD_M",
    "src": "amzn-2026q1-er"
   },
   "capex": {
    "value": 44200,
    "unit": "USD_M",
    "src": "amzn-2026q1-er"
   },
   "net_income": {
    "value": 30300,
    "unit": "USD_M",
    "src": "amzn-2026q1-er"
   }
  }
 },
 {
  "company": "amzn",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 213400,
    "unit": "USD_M",
    "src": "amzn-2025q4-er"
   },
   "capex": {
    "value": 39500,
    "unit": "USD_M",
    "src": "amzn-2025q4-er"
   },
   "net_income": {
    "value": 21200,
    "unit": "USD_M",
    "src": "amzn-2025q4-er"
   }
  }
 },
 {
  "company": "amzn",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 180200,
    "unit": "USD_M",
    "src": "amzn-2025q3-er"
   },
   "capex": {
    "value": 35100,
    "unit": "USD_M",
    "src": "amzn-2025q3-er"
   },
   "net_income": {
    "value": 21200,
    "unit": "USD_M",
    "src": "amzn-2025q3-er"
   }
  }
 },
 {
  "company": "meta",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 60800,
    "unit": "USD_M",
    "src": "meta-2026q2-er"
   },
   "capex": {
    "value": 31080,
    "unit": "USD_M",
    "src": "meta-2026q2-er"
   },
   "net_income": {
    "value": 15850,
    "unit": "USD_M",
    "src": "meta-2026q2-er"
   }
  }
 },
 {
  "company": "meta",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 56310,
    "unit": "USD_M",
    "src": "meta-2026q1-er"
   },
   "capex": {
    "value": 19840,
    "unit": "USD_M",
    "src": "meta-2026q1-er"
   },
   "net_income": {
    "value": 26770,
    "unit": "USD_M",
    "src": "meta-2026q1-er"
   }
  }
 },
 {
  "company": "meta",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 59890,
    "unit": "USD_M",
    "src": "meta-2025q4-er"
   },
   "capex": {
    "value": 22140,
    "unit": "USD_M",
    "src": "meta-2025q4-er"
   },
   "net_income": {
    "value": 22770,
    "unit": "USD_M",
    "src": "meta-2025q4-er"
   }
  }
 },
 {
  "company": "meta",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 51240,
    "unit": "USD_M",
    "src": "meta-2025q3-er"
   },
   "capex": {
    "value": 19370,
    "unit": "USD_M",
    "src": "meta-2025q3-er"
   },
   "net_income": {
    "value": 2710,
    "unit": "USD_M",
    "src": "meta-2025q3-er"
   }
  }
 },
 {
  "company": "orcl",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 19200,
    "unit": "USD_M",
    "src": "orcl-fy26q4-er"
   },
   "capex": {
    "value": 15900,
    "unit": "USD_M",
    "src": "orcl-fy26q4-er"
   },
   "net_income": {
    "value": 4220,
    "unit": "USD_M",
    "src": "orcl-fy26q4-er"
   },
   "backlog": {
    "value": 638000,
    "unit": "USD_M",
    "src": "orcl-fy26q4-er"
   }
  }
 },
 {
  "company": "orcl",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 17190,
    "unit": "USD_M",
    "src": "orcl-fy26q3-er"
   },
   "net_income": {
    "value": 3720,
    "unit": "USD_M",
    "src": "orcl-fy26q3-er"
   },
   "backlog": {
    "value": 553000,
    "unit": "USD_M",
    "src": "orcl-fy26q3-er"
   }
  }
 },
 {
  "company": "orcl",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 16058,
    "unit": "USD_M",
    "src": "orcl-fy26q2-er"
   },
   "net_income": {
    "value": 6135,
    "unit": "USD_M",
    "src": "orcl-fy26q2-er"
   },
   "backlog": {
    "value": 523300,
    "unit": "USD_M",
    "src": "orcl-fy26q2-er"
   }
  }
 },
 {
  "company": "orcl",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 14900,
    "unit": "USD_M",
    "src": "orcl-fy26q1-er"
   },
   "capex": {
    "value": 9570,
    "unit": "USD_M",
    "src": "orcl-fy26q1-er"
   },
   "net_income": {
    "value": 2900,
    "unit": "USD_M",
    "src": "orcl-fy26q1-er"
   },
   "backlog": {
    "value": 455000,
    "unit": "USD_M",
    "src": "orcl-fy26q1-er"
   }
  }
 },
 {
  "company": "crwv",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 2078,
    "unit": "USD_M",
    "src": "crwv-2026q1-er"
   },
   "capex": {
    "value": 6800,
    "unit": "USD_M",
    "src": "crwv-2026q1-er"
   },
   "net_income": {
    "value": -740,
    "unit": "USD_M",
    "src": "crwv-2026q1-er"
   },
   "backlog": {
    "value": 99400,
    "unit": "USD_M",
    "src": "crwv-2026q1-er"
   }
  }
 },
 {
  "company": "crwv",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 1570,
    "unit": "USD_M",
    "src": "crwv-2025q4-er"
   },
   "net_income": {
    "value": -452,
    "unit": "USD_M",
    "src": "crwv-2025q4-er"
   },
   "backlog": {
    "value": 66800,
    "unit": "USD_M",
    "src": "crwv-2025q4-er"
   }
  }
 },
 {
  "company": "crwv",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 1360,
    "unit": "USD_M",
    "src": "crwv-2025q3-er"
   },
   "net_income": {
    "value": -110,
    "unit": "USD_M",
    "src": "crwv-2025q3-er"
   },
   "backlog": {
    "value": 55600,
    "unit": "USD_M",
    "src": "crwv-2025q3-er"
   }
  }
 },
 {
  "company": "crwv",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 1210,
    "unit": "USD_M",
    "src": "crwv-2025q2-er"
   },
   "net_income": {
    "value": -290.5,
    "unit": "USD_M",
    "src": "crwv-2025q2-er"
   },
   "backlog": {
    "value": 30100,
    "unit": "USD_M",
    "src": "crwv-2025q2-er"
   }
  }
 },
 {
  "company": "nbis",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 399,
    "unit": "USD_M",
    "src": "nbis-2026q1-er"
   },
   "net_income": {
    "value": 621.2,
    "unit": "USD_M",
    "src": "nbis-2026q1-er"
   }
  }
 },
 {
  "company": "nbis",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 227.7,
    "unit": "USD_M",
    "src": "nbis-2025q4-er"
   },
   "net_income": {
    "value": -249.6,
    "unit": "USD_M",
    "src": "nbis-2025q4-er"
   }
  }
 },
 {
  "company": "nbis",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 146.1,
    "unit": "USD_M",
    "src": "nbis-2025q3-er"
   },
   "net_income": {
    "value": -119.6,
    "unit": "USD_M",
    "src": "nbis-2025q3-er"
   }
  }
 },
 {
  "company": "nbis",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 105.1,
    "unit": "USD_M",
    "src": "nbis-2025q2-er"
   },
   "capex": {
    "value": 510.6,
    "unit": "USD_M",
    "src": "nbis-2025q2-er"
   },
   "net_income": {
    "value": 502.5,
    "unit": "USD_M",
    "src": "nbis-2025q2-er"
   }
  }
 },
 {
  "company": "baba",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 2433.8,
    "unit": "CNY_YI",
    "src": "baba-fy26q4-er"
   },
   "capex": {
    "value": 268.87,
    "unit": "CNY_YI",
    "src": "baba-fy26q4-er"
   },
   "net_income": {
    "value": 254.76,
    "unit": "CNY_YI",
    "src": "baba-fy26q4-er"
   }
  }
 },
 {
  "company": "baba",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 2843.43,
    "unit": "CNY_YI",
    "src": "baba-fy26q3-er"
   },
   "capex": {
    "value": 289.99,
    "unit": "CNY_YI",
    "src": "baba-fy26q3-er"
   },
   "net_income": {
    "value": 163.2,
    "unit": "CNY_YI",
    "src": "baba-fy26q3-er"
   }
  }
 },
 {
  "company": "baba",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 2477.95,
    "unit": "CNY_YI",
    "src": "baba-fy26q2-er"
   },
   "capex": {
    "value": 315.01,
    "unit": "CNY_YI",
    "src": "baba-fy26q2-er"
   },
   "net_income": {
    "value": 209.9,
    "unit": "CNY_YI",
    "src": "baba-fy26q2-er"
   }
  }
 },
 {
  "company": "baba",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 2476.5,
    "unit": "CNY_YI",
    "src": "baba-fy26q1-er"
   },
   "capex": {
    "value": 386,
    "unit": "CNY_YI",
    "src": "baba-fy26q1-er"
   },
   "net_income": {
    "value": 431.12,
    "unit": "CNY_YI",
    "src": "baba-fy26q1-er"
   }
  }
 },
 {
  "company": "tencent",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 1964.58,
    "unit": "CNY_YI",
    "src": "tencent-2026q1-er"
   },
   "capex": {
    "value": 319,
    "unit": "CNY_YI",
    "src": "tencent-2026q1-er"
   },
   "net_income": {
    "value": 580.93,
    "unit": "CNY_YI",
    "src": "tencent-2026q1-er"
   }
  }
 },
 {
  "company": "tencent",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 1943.7,
    "unit": "CNY_YI",
    "src": "tencent-2025q4-er"
   },
   "capex": {
    "value": 196,
    "unit": "CNY_YI",
    "src": "tencent-2025q4-er"
   },
   "net_income": {
    "value": 583,
    "unit": "CNY_YI",
    "src": "tencent-2025q4-er"
   }
  }
 },
 {
  "company": "tencent",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 1928.69,
    "unit": "CNY_YI",
    "src": "tencent-2025q3-er"
   },
   "capex": {
    "value": 129.8,
    "unit": "CNY_YI",
    "src": "tencent-2025q3-er"
   },
   "net_income": {
    "value": 631,
    "unit": "CNY_YI",
    "src": "tencent-2025q3-er"
   }
  }
 },
 {
  "company": "tencent",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 1845.04,
    "unit": "CNY_YI",
    "src": "tencent-2025q2-er"
   },
   "capex": {
    "value": 191.1,
    "unit": "CNY_YI",
    "src": "tencent-2025q2-er"
   },
   "net_income": {
    "value": 556.28,
    "unit": "CNY_YI",
    "src": "tencent-2025q2-er"
   }
  }
 },
 {
  "company": "nvda",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 81615,
    "unit": "USD_M",
    "src": "nvda-fy27q1-er"
   },
   "dc_revenue": {
    "value": 75200,
    "unit": "USD_M",
    "src": "nvda-fy27q1-er"
   },
   "gross_margin": {
    "value": 0.749,
    "src": "nvda-fy27q1-er"
   },
   "net_income": {
    "value": 58321,
    "unit": "USD_M",
    "src": "nvda-fy27q1-er"
   }
  }
 },
 {
  "company": "nvda",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 68127,
    "unit": "USD_M",
    "src": "nvda-fy26q4-er"
   },
   "dc_revenue": {
    "value": 62300,
    "unit": "USD_M",
    "src": "nvda-fy26q4-er"
   },
   "gross_margin": {
    "value": 0.75,
    "src": "nvda-fy26q4-er"
   },
   "net_income": {
    "value": 42960,
    "unit": "USD_M",
    "src": "nvda-fy26q4-er"
   }
  }
 },
 {
  "company": "nvda",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 57006,
    "unit": "USD_M",
    "src": "nvda-fy26q3-er"
   },
   "dc_revenue": {
    "value": 51200,
    "unit": "USD_M",
    "src": "nvda-fy26q3-er"
   },
   "gross_margin": {
    "value": 0.734,
    "src": "nvda-fy26q3-er"
   },
   "net_income": {
    "value": 31910,
    "unit": "USD_M",
    "src": "nvda-fy26q3-er"
   }
  }
 },
 {
  "company": "nvda",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 46743,
    "unit": "USD_M",
    "src": "nvda-fy26q2-er"
   },
   "dc_revenue": {
    "value": 41100,
    "unit": "USD_M",
    "src": "nvda-fy26q2-er"
   },
   "gross_margin": {
    "value": 0.724,
    "src": "nvda-fy26q2-er"
   },
   "net_income": {
    "value": 26422,
    "unit": "USD_M",
    "src": "nvda-fy26q2-er"
   }
  }
 },
 {
  "company": "amd",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 11536,
    "unit": "USD_M",
    "src": "amd-2026q2-er"
   },
   "dc_revenue": {
    "value": 6718,
    "unit": "USD_M",
    "src": "amd-2026q2-er"
   },
   "gross_margin": {
    "value": 0.54,
    "src": "amd-2026q2-er"
   },
   "net_income": {
    "value": 2297,
    "unit": "USD_M",
    "src": "amd-2026q2-er"
   }
  }
 },
 {
  "company": "amd",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 10253,
    "unit": "USD_M",
    "src": "amd-2026q1-er"
   },
   "dc_revenue": {
    "value": 5775,
    "unit": "USD_M",
    "src": "amd-2026q1-er"
   },
   "gross_margin": {
    "value": 0.53,
    "src": "amd-2026q1-er"
   },
   "net_income": {
    "value": 1383,
    "unit": "USD_M",
    "src": "amd-2026q1-er"
   }
  }
 },
 {
  "company": "amd",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 10270,
    "unit": "USD_M",
    "src": "amd-2025q4-er"
   },
   "dc_revenue": {
    "value": 5380,
    "unit": "USD_M",
    "src": "amd-2025q4-er"
   },
   "gross_margin": {
    "value": 0.54,
    "src": "amd-2025q4-er"
   },
   "net_income": {
    "value": 1511,
    "unit": "USD_M",
    "src": "amd-2025q4-er"
   }
  }
 },
 {
  "company": "amd",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 9246,
    "unit": "USD_M",
    "src": "amd-2025q3-er"
   },
   "dc_revenue": {
    "value": 4341,
    "unit": "USD_M",
    "src": "amd-2025q3-er"
   },
   "gross_margin": {
    "value": 0.52,
    "src": "amd-2025q3-er"
   },
   "net_income": {
    "value": 1243,
    "unit": "USD_M",
    "src": "amd-2025q3-er"
   }
  }
 },
 {
  "company": "avgo",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 22187,
    "unit": "USD_M",
    "src": "avgo-fy26q2-er"
   },
   "ai_revenue": {
    "value": 10800,
    "unit": "USD_M",
    "src": "avgo-fy26q2-er"
   },
   "gross_margin": {
    "value": 0.695,
    "src": "avgo-fy26q2-er"
   },
   "net_income": {
    "value": 9310,
    "unit": "USD_M",
    "src": "avgo-fy26q2-er"
   }
  }
 },
 {
  "company": "avgo",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 19311,
    "unit": "USD_M",
    "src": "avgo-fy26q1-er"
   },
   "ai_revenue": {
    "value": 8400,
    "unit": "USD_M",
    "src": "avgo-fy26q1-er"
   },
   "gross_margin": {
    "value": 0.681,
    "src": "avgo-fy26q1-er"
   },
   "net_income": {
    "value": 7349,
    "unit": "USD_M",
    "src": "avgo-fy26q1-er"
   }
  }
 },
 {
  "company": "avgo",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 18015,
    "unit": "USD_M",
    "src": "avgo-fy25q4-er"
   },
   "ai_revenue": {
    "value": 6500,
    "unit": "USD_M",
    "src": "avgo-fy25q4-er"
   },
   "gross_margin": {
    "value": 0.68,
    "src": "avgo-fy25q4-er"
   },
   "net_income": {
    "value": 8518,
    "unit": "USD_M",
    "src": "avgo-fy25q4-er"
   }
  }
 },
 {
  "company": "avgo",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 15952,
    "unit": "USD_M",
    "src": "avgo-fy25q3-er"
   },
   "ai_revenue": {
    "value": 5200,
    "unit": "USD_M",
    "src": "avgo-fy25q3-er"
   },
   "gross_margin": {
    "value": 0.671,
    "src": "avgo-fy25q3-er"
   },
   "net_income": {
    "value": 4140,
    "unit": "USD_M",
    "src": "avgo-fy25q3-er"
   }
  }
 },
 {
  "company": "mrvl",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 2417.8,
    "unit": "USD_M",
    "src": "mrvl-fy27q1-er"
   },
   "dc_revenue": {
    "value": 1832.7,
    "unit": "USD_M",
    "src": "mrvl-fy27q1-er"
   },
   "gross_margin": {
    "value": 0.521,
    "src": "mrvl-fy27q1-er"
   },
   "net_income": {
    "value": 34.5,
    "unit": "USD_M",
    "src": "mrvl-fy27q1-er"
   }
  }
 },
 {
  "company": "mrvl",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 2218.7,
    "unit": "USD_M",
    "src": "mrvl-fy26q4-er"
   },
   "dc_revenue": {
    "value": 1651.3,
    "unit": "USD_M",
    "src": "mrvl-fy26q4-er"
   },
   "gross_margin": {
    "value": 0.517,
    "src": "mrvl-fy26q4-er"
   },
   "net_income": {
    "value": 396.1,
    "unit": "USD_M",
    "src": "mrvl-fy26q4-er"
   }
  }
 },
 {
  "company": "mrvl",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 2074.5,
    "unit": "USD_M",
    "src": "mrvl-fy26q3-er"
   },
   "dc_revenue": {
    "value": 1517.9,
    "unit": "USD_M",
    "src": "mrvl-fy26q3-er"
   },
   "gross_margin": {
    "value": 0.516,
    "src": "mrvl-fy26q3-er"
   },
   "net_income": {
    "value": 1901,
    "unit": "USD_M",
    "src": "mrvl-fy26q3-er"
   }
  }
 },
 {
  "company": "mrvl",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 2006.1,
    "unit": "USD_M",
    "src": "mrvl-fy26q2-er"
   },
   "dc_revenue": {
    "value": 1490.5,
    "unit": "USD_M",
    "src": "mrvl-fy26q2-er"
   },
   "gross_margin": {
    "value": 0.504,
    "src": "mrvl-fy26q2-er"
   },
   "net_income": {
    "value": 194.8,
    "unit": "USD_M",
    "src": "mrvl-fy26q2-er"
   }
  }
 },
 {
  "company": "cambricon",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 28.85,
    "unit": "CNY_YI",
    "src": "cambricon-2026q1"
   },
   "gross_margin": {
    "value": 0.5433,
    "src": "cambricon-2026q1"
   },
   "net_income": {
    "value": 10.13,
    "unit": "CNY_YI",
    "src": "cambricon-2026q1"
   }
  }
 },
 {
  "company": "cambricon",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 18.9,
    "unit": "CNY_YI",
    "src": "cambricon-2025fy"
   },
   "gross_margin": {
    "value": 0.5481,
    "src": "cambricon-2025fy-gmderived"
   },
   "net_income": {
    "value": 4.55,
    "unit": "CNY_YI",
    "src": "cambricon-2025fy"
   }
  }
 },
 {
  "company": "cambricon",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 17.27,
    "unit": "CNY_YI",
    "src": "cambricon-2025fy"
   },
   "gross_margin": {
    "value": 0.5424,
    "src": "cambricon-2025q3-gmderived"
   },
   "net_income": {
    "value": 5.67,
    "unit": "CNY_YI",
    "src": "cambricon-2025fy"
   }
  }
 },
 {
  "company": "cambricon",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 17.69,
    "unit": "CNY_YI",
    "src": "cambricon-2025fy"
   },
   "gross_margin": {
    "value": 0.5588,
    "src": "cambricon-2025h1-gmderived"
   },
   "net_income": {
    "value": 6.83,
    "unit": "CNY_YI",
    "src": "cambricon-2025fy"
   }
  }
 },
 {
  "company": "montage",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 14.61,
    "unit": "CNY_YI",
    "src": "montage-2026q1"
   },
   "gross_margin": {
    "value": 0.698,
    "src": "montage-2026q1"
   },
   "net_income": {
    "value": 8.47,
    "unit": "CNY_YI",
    "src": "montage-2026q1"
   }
  }
 },
 {
  "company": "montage",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 13.99,
    "unit": "CNY_YI",
    "src": "montage-2025fy"
   },
   "gross_margin": {
    "value": 0.6446,
    "src": "montage-2025fy-gmderived"
   },
   "net_income": {
    "value": 6.03,
    "unit": "CNY_YI",
    "src": "montage-2025fy"
   }
  }
 },
 {
  "company": "montage",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 14.24,
    "unit": "CNY_YI",
    "src": "montage-2025fy"
   },
   "gross_margin": {
    "value": 0.6334,
    "src": "montage-2025q3-gmderived"
   },
   "net_income": {
    "value": 4.73,
    "unit": "CNY_YI",
    "src": "montage-2025fy"
   }
  }
 },
 {
  "company": "montage",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 14.11,
    "unit": "CNY_YI",
    "src": "montage-2025fy"
   },
   "gross_margin": {
    "value": 0.6043,
    "src": "montage-2025h1-gmderived"
   },
   "net_income": {
    "value": 6.34,
    "unit": "CNY_YI",
    "src": "montage-2025fy"
   }
  }
 },
 {
  "company": "anet",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 3035.7,
    "unit": "USD_M",
    "src": "anet-2026q2-er"
   },
   "gross_margin": {
    "value": 0.629,
    "src": "anet-2026q2-er"
   },
   "net_income": {
    "value": 1212.9,
    "unit": "USD_M",
    "src": "anet-2026q2-er"
   }
  }
 },
 {
  "company": "anet",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 2709,
    "unit": "USD_M",
    "src": "anet-2026q1-er"
   },
   "gross_margin": {
    "value": 0.619,
    "src": "anet-2026q1-er"
   },
   "net_income": {
    "value": 1022.9,
    "unit": "USD_M",
    "src": "anet-2026q1-er"
   }
  }
 },
 {
  "company": "anet",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 2487.8,
    "unit": "USD_M",
    "src": "anet-2025q4-er"
   },
   "gross_margin": {
    "value": 0.629,
    "src": "anet-2025q4-er"
   },
   "net_income": {
    "value": 955.8,
    "unit": "USD_M",
    "src": "anet-2025q4-er"
   }
  }
 },
 {
  "company": "anet",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 2308.3,
    "unit": "USD_M",
    "src": "anet-2025q3-er"
   },
   "gross_margin": {
    "value": 0.646,
    "src": "anet-2025q3-er"
   },
   "net_income": {
    "value": 853,
    "unit": "USD_M",
    "src": "anet-2025q3-er"
   }
  }
 },
 {
  "company": "cohr",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 1805.6,
    "unit": "USD_M",
    "src": "cohr-fy26q3-er"
   },
   "gross_margin": {
    "value": 0.377,
    "src": "cohr-fy26q3-er"
   },
   "net_income": {
    "value": 191.4,
    "unit": "USD_M",
    "src": "cohr-fy26q3-er"
   }
  }
 },
 {
  "company": "cohr",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 1685.6,
    "unit": "USD_M",
    "src": "cohr-fy26q2-er"
   },
   "gross_margin": {
    "value": 0.369,
    "src": "cohr-fy26q2-er"
   },
   "net_income": {
    "value": 146.7,
    "unit": "USD_M",
    "src": "cohr-fy26q2-er"
   }
  }
 },
 {
  "company": "cohr",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 1581.4,
    "unit": "USD_M",
    "src": "cohr-fy26q1-er"
   },
   "gross_margin": {
    "value": 0.366,
    "src": "cohr-fy26q1-er"
   },
   "net_income": {
    "value": 226.3,
    "unit": "USD_M",
    "src": "cohr-fy26q1-er"
   }
  }
 },
 {
  "company": "cohr",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 1529.4,
    "unit": "USD_M",
    "src": "cohr-fy25q4-er"
   },
   "gross_margin": {
    "value": 0.357,
    "src": "cohr-fy25q4-er"
   },
   "net_income": {
    "value": -95.6,
    "unit": "USD_M",
    "src": "cohr-fy25q4-er"
   }
  }
 },
 {
  "company": "innolight",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 194.96,
    "unit": "CNY_YI",
    "src": "innolight-2026q1"
   },
   "gross_margin": {
    "value": 0.4606,
    "src": "innolight-2026q1"
   },
   "net_income": {
    "value": 57.35,
    "unit": "CNY_YI",
    "src": "innolight-2026q1"
   }
  }
 },
 {
  "company": "innolight",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 132.35,
    "unit": "CNY_YI",
    "src": "innolight-2025fy"
   },
   "gross_margin": {
    "value": 0.4448,
    "src": "innolight-2025q4-gmderived"
   },
   "net_income": {
    "value": 36.65,
    "unit": "CNY_YI",
    "src": "innolight-2025fy"
   }
  }
 },
 {
  "company": "innolight",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 102.16,
    "unit": "CNY_YI",
    "src": "innolight-2025q3"
   },
   "gross_margin": {
    "value": 0.4279,
    "src": "innolight-2025q3-gmderived"
   },
   "net_income": {
    "value": 31.37,
    "unit": "CNY_YI",
    "src": "innolight-2025q3"
   }
  }
 },
 {
  "company": "innolight",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 81.15,
    "unit": "CNY_YI",
    "src": "innolight-2025fy"
   },
   "gross_margin": {
    "value": 0.4149,
    "src": "innolight-2025q2-gmderived"
   },
   "net_income": {
    "value": 24.12,
    "unit": "CNY_YI",
    "src": "innolight-2025fy"
   }
  }
 },
 {
  "company": "eoptolink",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 83.38,
    "unit": "CNY_YI",
    "src": "eoptolink-2026q1"
   },
   "gross_margin": {
    "value": 0.4916,
    "src": "eoptolink-2026q1"
   },
   "net_income": {
    "value": 27.8,
    "unit": "CNY_YI",
    "src": "eoptolink-2026q1"
   }
  }
 },
 {
  "company": "eoptolink",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 83.37,
    "unit": "CNY_YI",
    "src": "eoptolink-2025fy"
   },
   "gross_margin": {
    "value": 0.4891,
    "src": "eoptolink-2025q4-gmderived"
   },
   "net_income": {
    "value": 32.05,
    "unit": "CNY_YI",
    "src": "eoptolink-2025fy"
   }
  }
 },
 {
  "company": "eoptolink",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 60.68,
    "unit": "CNY_YI",
    "src": "eoptolink-2025q3"
   },
   "gross_margin": {
    "value": 0.4694,
    "src": "eoptolink-2025q3-gmderived"
   },
   "net_income": {
    "value": 23.85,
    "unit": "CNY_YI",
    "src": "eoptolink-2025q3"
   }
  }
 },
 {
  "company": "eoptolink",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 63.85,
    "unit": "CNY_YI",
    "src": "eoptolink-2025fy"
   },
   "gross_margin": {
    "value": 0.4664,
    "src": "eoptolink-2025q2-gmderived"
   },
   "net_income": {
    "value": 23.7,
    "unit": "CNY_YI",
    "src": "eoptolink-2025fy"
   }
  }
 },
 {
  "company": "tfc",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 13.3,
    "unit": "CNY_YI",
    "src": "qveris-cn-tfc"
   },
   "net_income": {
    "value": 4.92,
    "unit": "CNY_YI",
    "src": "qveris-cn-tfc"
   }
  }
 },
 {
  "company": "tfc",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 12.45,
    "unit": "CNY_YI",
    "src": "qveris-cn-tfc"
   },
   "net_income": {
    "value": 5.52,
    "unit": "CNY_YI",
    "src": "qveris-cn-tfc"
   }
  }
 },
 {
  "company": "tfc",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 14.63,
    "unit": "CNY_YI",
    "src": "qveris-cn-tfc"
   },
   "net_income": {
    "value": 5.66,
    "unit": "CNY_YI",
    "src": "qveris-cn-tfc"
   }
  }
 },
 {
  "company": "tfc",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 15.11,
    "unit": "CNY_YI",
    "src": "qveris-cn-tfc"
   },
   "net_income": {
    "value": 5.62,
    "unit": "CNY_YI",
    "src": "qveris-cn-tfc"
   }
  }
 },
 {
  "company": "dwmicro",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 2.06,
    "unit": "CNY_YI",
    "src": "qveris-cn-dwmicro"
   },
   "net_income": {
    "value": 0.28,
    "unit": "CNY_YI",
    "src": "qveris-cn-dwmicro"
   }
  }
 },
 {
  "company": "dwmicro",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 2.4,
    "unit": "CNY_YI",
    "src": "qveris-cn-dwmicro"
   },
   "net_income": {
    "value": 0.21,
    "unit": "CNY_YI",
    "src": "qveris-cn-dwmicro"
   }
  }
 },
 {
  "company": "dwmicro",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 2.6,
    "unit": "CNY_YI",
    "src": "qveris-cn-dwmicro"
   },
   "net_income": {
    "value": 0.29,
    "unit": "CNY_YI",
    "src": "qveris-cn-dwmicro"
   }
  }
 },
 {
  "company": "dwmicro",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 2.2,
    "unit": "CNY_YI",
    "src": "qveris-cn-dwmicro"
   },
   "net_income": {
    "value": 0.31,
    "unit": "CNY_YI",
    "src": "qveris-cn-dwmicro"
   }
  }
 },
 {
  "company": "sifo",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 9.19,
    "unit": "CNY_YI",
    "src": "qveris-cn-sifo"
   },
   "net_income": {
    "value": 1.99,
    "unit": "CNY_YI",
    "src": "qveris-cn-sifo"
   }
  }
 },
 {
  "company": "sifo",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 5.77,
    "unit": "CNY_YI",
    "src": "qveris-cn-sifo"
   },
   "net_income": {
    "value": 1.16,
    "unit": "CNY_YI",
    "src": "qveris-cn-sifo"
   }
  }
 },
 {
  "company": "sifo",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 5.69,
    "unit": "CNY_YI",
    "src": "qveris-cn-sifo"
   },
   "net_income": {
    "value": 0.73,
    "unit": "CNY_YI",
    "src": "qveris-cn-sifo"
   }
  }
 },
 {
  "company": "sifo",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 5.68,
    "unit": "CNY_YI",
    "src": "qveris-cn-sifo"
   },
   "net_income": {
    "value": 0.83,
    "unit": "CNY_YI",
    "src": "qveris-cn-sifo"
   }
  }
 },
 {
  "company": "ebphoton",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 1.3,
    "unit": "CNY_YI",
    "src": "qveris-cn-ebphoton"
   },
   "net_income": {
    "value": 0.04,
    "unit": "CNY_YI",
    "src": "qveris-cn-ebphoton"
   }
  }
 },
 {
  "company": "ebphoton",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 1.38,
    "unit": "CNY_YI",
    "src": "qveris-cn-ebphoton"
   },
   "net_income": {
    "value": 0.01,
    "unit": "CNY_YI",
    "src": "qveris-cn-ebphoton"
   }
  }
 },
 {
  "company": "ebphoton",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 1.25,
    "unit": "CNY_YI",
    "src": "qveris-cn-ebphoton"
   },
   "net_income": {
    "value": 0.12,
    "unit": "CNY_YI",
    "src": "qveris-cn-ebphoton"
   }
  }
 },
 {
  "company": "ebphoton",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 1.2,
    "unit": "CNY_YI",
    "src": "qveris-cn-ebphoton"
   },
   "net_income": {
    "value": 0.16,
    "unit": "CNY_YI",
    "src": "qveris-cn-ebphoton"
   }
  }
 },
 {
  "company": "yjsemi",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 3.55,
    "unit": "CNY_YI",
    "src": "qveris-cn-yjsemi"
   },
   "net_income": {
    "value": 1.79,
    "unit": "CNY_YI",
    "src": "qveris-cn-yjsemi"
   }
  }
 },
 {
  "company": "yjsemi",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 2.18,
    "unit": "CNY_YI",
    "src": "qveris-cn-yjsemi"
   },
   "net_income": {
    "value": 0.85,
    "unit": "CNY_YI",
    "src": "qveris-cn-yjsemi"
   }
  }
 },
 {
  "company": "yjsemi",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 1.78,
    "unit": "CNY_YI",
    "src": "qveris-cn-yjsemi"
   },
   "net_income": {
    "value": 0.6,
    "unit": "CNY_YI",
    "src": "qveris-cn-yjsemi"
   }
  }
 },
 {
  "company": "yjsemi",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 1.21,
    "unit": "CNY_YI",
    "src": "qveris-cn-yjsemi"
   },
   "net_income": {
    "value": 0.32,
    "unit": "CNY_YI",
    "src": "qveris-cn-yjsemi"
   }
  }
 },
 {
  "company": "tengjing",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 1.71,
    "unit": "CNY_YI",
    "src": "qveris-cn-tengjing"
   },
   "net_income": {
    "value": 0.14,
    "unit": "CNY_YI",
    "src": "qveris-cn-tengjing"
   }
  }
 },
 {
  "company": "tengjing",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 1.6,
    "unit": "CNY_YI",
    "src": "qveris-cn-tengjing"
   },
   "net_income": {
    "value": 0.07,
    "unit": "CNY_YI",
    "src": "qveris-cn-tengjing"
   }
  }
 },
 {
  "company": "tengjing",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 1.62,
    "unit": "CNY_YI",
    "src": "qveris-cn-tengjing"
   },
   "net_income": {
    "value": 0.27,
    "unit": "CNY_YI",
    "src": "qveris-cn-tengjing"
   }
  }
 },
 {
  "company": "tengjing",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 1.5,
    "unit": "CNY_YI",
    "src": "qveris-cn-tengjing"
   },
   "net_income": {
    "value": 0.24,
    "unit": "CNY_YI",
    "src": "qveris-cn-tengjing"
   }
  }
 }
];

if (typeof module!=='undefined') module.exports = {METRICS};
