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
 }
];

if (typeof module!=='undefined') module.exports = {METRICS};
