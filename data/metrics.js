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
 },
 {
  "company": "aapl",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 109417,
    "unit": "USD_M",
    "src": "aapl-2026q2-10q"
   },
   "net_income": {
    "value": 29789,
    "unit": "USD_M",
    "src": "aapl-2026q2-10q"
   }
  }
 },
 {
  "company": "aapl",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 111184,
    "unit": "USD_M",
    "src": "aapl-2026q1-10q"
   },
   "net_income": {
    "value": 29578,
    "unit": "USD_M",
    "src": "aapl-2026q1-10q"
   }
  }
 },
 {
  "company": "aapl",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 143756,
    "unit": "USD_M",
    "src": "aapl-2025q4-10q"
   },
   "net_income": {
    "value": 42097,
    "unit": "USD_M",
    "src": "aapl-2025q4-10q"
   }
  }
 },
 {
  "company": "aapl",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 102466,
    "unit": "USD_M",
    "src": "aapl-2025q3-10q"
   },
   "net_income": {
    "value": 27466,
    "unit": "USD_M",
    "src": "aapl-2025q3-10q"
   }
  }
 },
 {
  "company": "iren",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 144.795,
    "unit": "USD_M",
    "src": "iren-2026q1-10q"
   },
   "net_income": {
    "value": -247.827,
    "unit": "USD_M",
    "src": "iren-2026q1-10q"
   }
  }
 },
 {
  "company": "iren",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 184.692,
    "unit": "USD_M",
    "src": "iren-2025q4-10q"
   },
   "net_income": {
    "value": -155.407,
    "unit": "USD_M",
    "src": "iren-2025q4-10q"
   }
  }
 },
 {
  "company": "iren",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 240.295,
    "unit": "USD_M",
    "src": "iren-2025q3-10q"
   },
   "net_income": {
    "value": 384.611,
    "unit": "USD_M",
    "src": "iren-2025q3-10q"
   }
  }
 },
 {
  "company": "iren",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 187.292,
    "unit": "USD_M",
    "src": "iren-2025q2-10q"
   },
   "net_income": {
    "value": 95.546,
    "unit": "USD_M",
    "src": "iren-2025q2-10q"
   }
  }
 },
 {
  "company": "gev",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 11104,
    "unit": "USD_M",
    "src": "gev-2026q2-10q"
   },
   "net_income": {
    "value": 668,
    "unit": "USD_M",
    "src": "gev-2026q2-10q"
   }
  }
 },
 {
  "company": "gev",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 9339,
    "unit": "USD_M",
    "src": "gev-2026q1-10q"
   },
   "net_income": {
    "value": 4745,
    "unit": "USD_M",
    "src": "gev-2026q1-10q"
   }
  }
 },
 {
  "company": "gev",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 10956,
    "unit": "USD_M",
    "src": "gev-2025q4-10q"
   },
   "net_income": {
    "value": 3664,
    "unit": "USD_M",
    "src": "gev-2025q4-10q"
   }
  }
 },
 {
  "company": "gev",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 9969,
    "unit": "USD_M",
    "src": "gev-2025q3-10q"
   },
   "net_income": {
    "value": 452,
    "unit": "USD_M",
    "src": "gev-2025q3-10q"
   }
  }
 },
 {
  "company": "vst",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 4654,
    "unit": "USD_M",
    "src": "vst-2026q1-10q"
   },
   "net_income": {
    "value": 1029,
    "unit": "USD_M",
    "src": "vst-2026q1-10q"
   }
  }
 },
 {
  "company": "vst",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 2338,
    "unit": "USD_M",
    "src": "vst-2025q4-10q"
   },
   "net_income": {
    "value": 233,
    "unit": "USD_M",
    "src": "vst-2025q4-10q"
   }
  }
 },
 {
  "company": "vst",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 4971,
    "unit": "USD_M",
    "src": "vst-2025q3-10q"
   },
   "net_income": {
    "value": 652,
    "unit": "USD_M",
    "src": "vst-2025q3-10q"
   }
  }
 },
 {
  "company": "vst",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 4250,
    "unit": "USD_M",
    "src": "vst-2025q2-10q"
   },
   "net_income": {
    "value": 327,
    "unit": "USD_M",
    "src": "vst-2025q2-10q"
   }
  }
 },
 {
  "company": "be",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 1065.365,
    "unit": "USD_M",
    "src": "be-2026q2-10q"
   },
   "net_income": {
    "value": 196.29,
    "unit": "USD_M",
    "src": "be-2026q2-10q"
   }
  }
 },
 {
  "company": "be",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 751.054,
    "unit": "USD_M",
    "src": "be-2026q1-10q"
   },
   "net_income": {
    "value": 70.653,
    "unit": "USD_M",
    "src": "be-2026q1-10q"
   }
  }
 },
 {
  "company": "be",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 777.683,
    "unit": "USD_M",
    "src": "be-2025q4-10q"
   },
   "net_income": {
    "value": 1.091,
    "unit": "USD_M",
    "src": "be-2025q4-10q"
   }
  }
 },
 {
  "company": "be",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 519.048,
    "unit": "USD_M",
    "src": "be-2025q3-10q"
   },
   "net_income": {
    "value": -23.093,
    "unit": "USD_M",
    "src": "be-2025q3-10q"
   }
  }
 },
 {
  "company": "flnc",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 464.891,
    "unit": "USD_M",
    "src": "flnc-2026q1-10q"
   },
   "net_income": {
    "value": -20.927,
    "unit": "USD_M",
    "src": "flnc-2026q1-10q"
   }
  }
 },
 {
  "company": "flnc",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 475.234,
    "unit": "USD_M",
    "src": "flnc-2025q4-10q"
   },
   "net_income": {
    "value": -45.07,
    "unit": "USD_M",
    "src": "flnc-2025q4-10q"
   }
  }
 },
 {
  "company": "flnc",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 1041.891,
    "unit": "USD_M",
    "src": "flnc-2025q3-10q"
   },
   "net_income": {
    "value": 17.946,
    "unit": "USD_M",
    "src": "flnc-2025q3-10q"
   }
  }
 },
 {
  "company": "flnc",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 602.533,
    "unit": "USD_M",
    "src": "flnc-2025q2-10q"
   },
   "net_income": {
    "value": 6.252,
    "unit": "USD_M",
    "src": "flnc-2025q2-10q"
   }
  }
 },
 {
  "company": "tsla",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 28236,
    "unit": "USD_M",
    "src": "tsla-2026q2-10q"
   },
   "net_income": {
    "value": 1114,
    "unit": "USD_M",
    "src": "tsla-2026q2-10q"
   }
  }
 },
 {
  "company": "tsla",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 22387,
    "unit": "USD_M",
    "src": "tsla-2026q1-10q"
   },
   "net_income": {
    "value": 491,
    "unit": "USD_M",
    "src": "tsla-2026q1-10q"
   }
  }
 },
 {
  "company": "tsla",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 24901,
    "unit": "USD_M",
    "src": "tsla-2025q4-10q"
   },
   "net_income": {
    "value": 840,
    "unit": "USD_M",
    "src": "tsla-2025q4-10q"
   }
  }
 },
 {
  "company": "tsla",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 28095,
    "unit": "USD_M",
    "src": "tsla-2025q3-10q"
   },
   "net_income": {
    "value": 1373,
    "unit": "USD_M",
    "src": "tsla-2025q3-10q"
   }
  }
 },
 {
  "company": "now",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 3987,
    "unit": "USD_M",
    "src": "now-2026q2-10q"
   },
   "net_income": {
    "value": 298,
    "unit": "USD_M",
    "src": "now-2026q2-10q"
   }
  }
 },
 {
  "company": "now",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 3770,
    "unit": "USD_M",
    "src": "now-2026q1-10q"
   },
   "net_income": {
    "value": 469,
    "unit": "USD_M",
    "src": "now-2026q1-10q"
   }
  }
 },
 {
  "company": "now",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 3568,
    "unit": "USD_M",
    "src": "now-2025q4-10q"
   },
   "net_income": {
    "value": 401,
    "unit": "USD_M",
    "src": "now-2025q4-10q"
   }
  }
 },
 {
  "company": "now",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 3407,
    "unit": "USD_M",
    "src": "now-2025q3-10q"
   },
   "net_income": {
    "value": 502,
    "unit": "USD_M",
    "src": "now-2025q3-10q"
   }
  }
 },
 {
  "company": "pltr",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 1935.464,
    "unit": "USD_M",
    "src": "pltr-2026q2-10q"
   },
   "net_income": {
    "value": 1061.89,
    "unit": "USD_M",
    "src": "pltr-2026q2-10q"
   }
  }
 },
 {
  "company": "pltr",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 1632.583,
    "unit": "USD_M",
    "src": "pltr-2026q1-10q"
   },
   "net_income": {
    "value": 870.527,
    "unit": "USD_M",
    "src": "pltr-2026q1-10q"
   }
  }
 },
 {
  "company": "pltr",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 1406.802,
    "unit": "USD_M",
    "src": "pltr-2025q4-10q"
   },
   "net_income": {
    "value": 608.676,
    "unit": "USD_M",
    "src": "pltr-2025q4-10q"
   }
  }
 },
 {
  "company": "pltr",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 1181.092,
    "unit": "USD_M",
    "src": "pltr-2025q3-10q"
   },
   "net_income": {
    "value": 475.599,
    "unit": "USD_M",
    "src": "pltr-2025q3-10q"
   }
  }
 },
 {
  "company": "csco",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 15841,
    "unit": "USD_M",
    "src": "csco-2026q1-10q"
   },
   "net_income": {
    "value": 3373,
    "unit": "USD_M",
    "src": "csco-2026q1-10q"
   }
  }
 },
 {
  "company": "csco",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 15349,
    "unit": "USD_M",
    "src": "csco-2025q4-10q"
   },
   "net_income": {
    "value": 3175,
    "unit": "USD_M",
    "src": "csco-2025q4-10q"
   }
  }
 },
 {
  "company": "csco",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 14883,
    "unit": "USD_M",
    "src": "csco-2025q3-10q"
   },
   "net_income": {
    "value": 2860,
    "unit": "USD_M",
    "src": "csco-2025q3-10q"
   }
  }
 },
 {
  "company": "csco",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 14673,
    "unit": "USD_M",
    "src": "csco-2025q2-10q"
   },
   "net_income": {
    "value": 2550,
    "unit": "USD_M",
    "src": "csco-2025q2-10q"
   }
  }
 },
 {
  "company": "nok",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 4815,
    "unit": "EUR_M",
    "src": "nok-2026q2-10q"
   },
   "net_income": {
    "value": 2,
    "unit": "EUR_M",
    "src": "nok-2026q2-10q"
   }
  }
 },
 {
  "company": "nok",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 4497,
    "unit": "EUR_M",
    "src": "nok-2026q1-10q"
   },
   "net_income": {
    "value": 86,
    "unit": "EUR_M",
    "src": "nok-2026q1-10q"
   }
  }
 },
 {
  "company": "nok",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 6125,
    "unit": "EUR_M",
    "src": "nok-2025q4-10q"
   },
   "net_income": {
    "value": 542,
    "unit": "EUR_M",
    "src": "nok-2025q4-10q"
   }
  }
 },
 {
  "company": "nok",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 4828,
    "unit": "EUR_M",
    "src": "nok-2025q3-10q"
   },
   "net_income": {
    "value": 78,
    "unit": "EUR_M",
    "src": "nok-2025q3-10q"
   }
  }
 },
 {
  "company": "lite",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 808.4,
    "unit": "USD_M",
    "src": "lite-2026q1-10q"
   },
   "net_income": {
    "value": 144.2,
    "unit": "USD_M",
    "src": "lite-2026q1-10q"
   }
  }
 },
 {
  "company": "lite",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 665.5,
    "unit": "USD_M",
    "src": "lite-2025q4-10q"
   },
   "net_income": {
    "value": 78.2,
    "unit": "USD_M",
    "src": "lite-2025q4-10q"
   }
  }
 },
 {
  "company": "lite",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 533.8,
    "unit": "USD_M",
    "src": "lite-2025q3-10q"
   },
   "net_income": {
    "value": 4.2,
    "unit": "USD_M",
    "src": "lite-2025q3-10q"
   }
  }
 },
 {
  "company": "lite",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 480.7,
    "unit": "USD_M",
    "src": "lite-2025q2-10q"
   },
   "net_income": {
    "value": 213.3,
    "unit": "USD_M",
    "src": "lite-2025q2-10q"
   }
  }
 },
 {
  "company": "fn",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 1214.293,
    "unit": "USD_M",
    "src": "fn-2026q1-10q"
   },
   "net_income": {
    "value": 125.213,
    "unit": "USD_M",
    "src": "fn-2026q1-10q"
   }
  }
 },
 {
  "company": "fn",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 1132.888,
    "unit": "USD_M",
    "src": "fn-2025q4-10q"
   },
   "net_income": {
    "value": 112.628,
    "unit": "USD_M",
    "src": "fn-2025q4-10q"
   }
  }
 },
 {
  "company": "fn",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 978.128,
    "unit": "USD_M",
    "src": "fn-2025q3-10q"
   },
   "net_income": {
    "value": 92.964,
    "unit": "USD_M",
    "src": "fn-2025q3-10q"
   }
  }
 },
 {
  "company": "fn",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 909.692,
    "unit": "USD_M",
    "src": "fn-2025q2-10q"
   },
   "net_income": {
    "value": 87.207,
    "unit": "USD_M",
    "src": "fn-2025q2-10q"
   }
  }
 },
 {
  "company": "aaoi",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 151.144,
    "unit": "USD_M",
    "src": "aaoi-2026q1-10q"
   },
   "net_income": {
    "value": -14.281,
    "unit": "USD_M",
    "src": "aaoi-2026q1-10q"
   }
  }
 },
 {
  "company": "aaoi",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 134.274,
    "unit": "USD_M",
    "src": "aaoi-2025q4-10q"
   },
   "net_income": {
    "value": -2.022,
    "unit": "USD_M",
    "src": "aaoi-2025q4-10q"
   }
  }
 },
 {
  "company": "aaoi",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 118.63,
    "unit": "USD_M",
    "src": "aaoi-2025q3-10q"
   },
   "net_income": {
    "value": -17.936,
    "unit": "USD_M",
    "src": "aaoi-2025q3-10q"
   }
  }
 },
 {
  "company": "aaoi",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 102.952,
    "unit": "USD_M",
    "src": "aaoi-2025q2-10q"
   },
   "net_income": {
    "value": -9.098,
    "unit": "USD_M",
    "src": "aaoi-2025q2-10q"
   }
  }
 },
 {
  "company": "poet",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 0.503,
    "unit": "USD_M",
    "src": "poet-2026q1-10q"
   },
   "net_income": {
    "value": -12.344,
    "unit": "USD_M",
    "src": "poet-2026q1-10q"
   }
  }
 },
 {
  "company": "poet",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 0.341,
    "unit": "USD_M",
    "src": "poet-2025q4-10q"
   },
   "net_income": {
    "value": -42.672,
    "unit": "USD_M",
    "src": "poet-2025q4-10q"
   }
  }
 },
 {
  "company": "poet",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 0.298,
    "unit": "USD_M",
    "src": "poet-2025q3-10q"
   },
   "net_income": {
    "value": -9.37,
    "unit": "USD_M",
    "src": "poet-2025q3-10q"
   }
  }
 },
 {
  "company": "poet",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 0.268,
    "unit": "USD_M",
    "src": "poet-2025q2-10q"
   },
   "net_income": {
    "value": -17.263,
    "unit": "USD_M",
    "src": "poet-2025q2-10q"
   }
  }
 },
 {
  "company": "linde",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 9289,
    "unit": "USD_M",
    "src": "qveris-av-linde"
   },
   "net_income": {
    "value": 1928,
    "unit": "USD_M",
    "src": "qveris-av-linde"
   }
  }
 },
 {
  "company": "linde",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 8781,
    "unit": "USD_M",
    "src": "qveris-av-linde"
   },
   "net_income": {
    "value": 1857,
    "unit": "USD_M",
    "src": "qveris-av-linde"
   }
  }
 },
 {
  "company": "linde",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 8764,
    "unit": "USD_M",
    "src": "qveris-av-linde"
   },
   "net_income": {
    "value": 1573,
    "unit": "USD_M",
    "src": "qveris-av-linde"
   }
  }
 },
 {
  "company": "linde",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 8615,
    "unit": "USD_M",
    "src": "qveris-av-linde"
   },
   "net_income": {
    "value": 1929,
    "unit": "USD_M",
    "src": "qveris-av-linde"
   }
  }
 },
 {
  "company": "glw",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 4505,
    "unit": "USD_M",
    "src": "qveris-av-glw"
   },
   "net_income": {
    "value": 559,
    "unit": "USD_M",
    "src": "qveris-av-glw"
   }
  }
 },
 {
  "company": "glw",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 4144,
    "unit": "USD_M",
    "src": "qveris-av-glw"
   },
   "net_income": {
    "value": 371,
    "unit": "USD_M",
    "src": "qveris-av-glw"
   }
  }
 },
 {
  "company": "glw",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 4215,
    "unit": "USD_M",
    "src": "qveris-av-glw"
   },
   "net_income": {
    "value": 540,
    "unit": "USD_M",
    "src": "qveris-av-glw"
   }
  }
 },
 {
  "company": "glw",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 4100,
    "unit": "USD_M",
    "src": "qveris-av-glw"
   },
   "net_income": {
    "value": 430,
    "unit": "USD_M",
    "src": "qveris-av-glw"
   }
  }
 },
 {
  "company": "axti",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 47.589,
    "unit": "USD_M",
    "src": "qveris-av-axti"
   },
   "net_income": {
    "value": 11.128,
    "unit": "USD_M",
    "src": "qveris-av-axti"
   }
  }
 },
 {
  "company": "axti",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 26.924,
    "unit": "USD_M",
    "src": "qveris-av-axti"
   },
   "net_income": {
    "value": -1.62,
    "unit": "USD_M",
    "src": "qveris-av-axti"
   }
  }
 },
 {
  "company": "axti",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 23.041,
    "unit": "USD_M",
    "src": "qveris-av-axti"
   },
   "net_income": {
    "value": -3.548,
    "unit": "USD_M",
    "src": "qveris-av-axti"
   }
  }
 },
 {
  "company": "axti",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 27.955,
    "unit": "USD_M",
    "src": "qveris-av-axti"
   },
   "net_income": {
    "value": -1.906,
    "unit": "USD_M",
    "src": "qveris-av-axti"
   }
  }
 },
 {
  "company": "arm",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 1289,
    "unit": "USD_M",
    "src": "qveris-av-arm"
   },
   "net_income": {
    "value": 270,
    "unit": "USD_M",
    "src": "qveris-av-arm"
   }
  }
 },
 {
  "company": "arm",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 1490,
    "unit": "USD_M",
    "src": "qveris-av-arm"
   },
   "net_income": {
    "value": 313,
    "unit": "USD_M",
    "src": "qveris-av-arm"
   }
  }
 },
 {
  "company": "arm",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 1242,
    "unit": "USD_M",
    "src": "qveris-av-arm"
   },
   "net_income": {
    "value": 223,
    "unit": "USD_M",
    "src": "qveris-av-arm"
   }
  }
 },
 {
  "company": "arm",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 1135,
    "unit": "USD_M",
    "src": "qveris-av-arm"
   },
   "net_income": {
    "value": 238,
    "unit": "USD_M",
    "src": "qveris-av-arm"
   }
  }
 },
 {
  "company": "klac",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 3657.556,
    "unit": "USD_M",
    "src": "qveris-av-klac"
   },
   "net_income": {
    "value": 1363.059,
    "unit": "USD_M",
    "src": "qveris-av-klac"
   }
  }
 },
 {
  "company": "klac",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 3415.078,
    "unit": "USD_M",
    "src": "qveris-av-klac"
   },
   "net_income": {
    "value": 1200.99,
    "unit": "USD_M",
    "src": "qveris-av-klac"
   }
  }
 },
 {
  "company": "klac",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 3297.146,
    "unit": "USD_M",
    "src": "qveris-av-klac"
   },
   "net_income": {
    "value": 1145.682,
    "unit": "USD_M",
    "src": "qveris-av-klac"
   }
  }
 },
 {
  "company": "klac",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 3209.696,
    "unit": "USD_M",
    "src": "qveris-av-klac"
   },
   "net_income": {
    "value": 1121.04,
    "unit": "USD_M",
    "src": "qveris-av-klac"
   }
  }
 },
 {
  "company": "form",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 258.242,
    "unit": "USD_M",
    "src": "qveris-av-form"
   },
   "net_income": {
    "value": 56.207,
    "unit": "USD_M",
    "src": "qveris-av-form"
   }
  }
 },
 {
  "company": "form",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 226.144,
    "unit": "USD_M",
    "src": "qveris-av-form"
   },
   "net_income": {
    "value": 20.384,
    "unit": "USD_M",
    "src": "qveris-av-form"
   }
  }
 },
 {
  "company": "form",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 215.163,
    "unit": "USD_M",
    "src": "qveris-av-form"
   },
   "net_income": {
    "value": 23.218,
    "unit": "USD_M",
    "src": "qveris-av-form"
   }
  }
 },
 {
  "company": "form",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 202.676,
    "unit": "USD_M",
    "src": "qveris-av-form"
   },
   "net_income": {
    "value": 15.656,
    "unit": "USD_M",
    "src": "qveris-av-form"
   }
  }
 },
 {
  "company": "aehr",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 19.751,
    "unit": "USD_M",
    "src": "qveris-av-aehr"
   },
   "net_income": {
    "value": 1.391,
    "unit": "USD_M",
    "src": "qveris-av-aehr"
   }
  }
 },
 {
  "company": "aehr",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 10.313,
    "unit": "USD_M",
    "src": "qveris-av-aehr"
   },
   "net_income": {
    "value": -3.203,
    "unit": "USD_M",
    "src": "qveris-av-aehr"
   }
  }
 },
 {
  "company": "aehr",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 9.884,
    "unit": "USD_M",
    "src": "qveris-av-aehr"
   },
   "net_income": {
    "value": -3.23,
    "unit": "USD_M",
    "src": "qveris-av-aehr"
   }
  }
 },
 {
  "company": "aehr",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 10.969,
    "unit": "USD_M",
    "src": "qveris-av-aehr"
   },
   "net_income": {
    "value": -2.084,
    "unit": "USD_M",
    "src": "qveris-av-aehr"
   }
  }
 },
 {
  "company": "shestu",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 662424,
    "unit": "JPY_M",
    "src": "qveris-fmp-shestu"
   },
   "net_income": {
    "value": 130829,
    "unit": "JPY_M",
    "src": "qveris-fmp-shestu"
   }
  }
 },
 {
  "company": "shestu",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 639969,
    "unit": "JPY_M",
    "src": "qveris-fmp-shestu"
   },
   "net_income": {
    "value": 90138,
    "unit": "JPY_M",
    "src": "qveris-fmp-shestu"
   }
  }
 },
 {
  "company": "shestu",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 649478,
    "unit": "JPY_M",
    "src": "qveris-fmp-shestu"
   },
   "net_income": {
    "value": 126477,
    "unit": "JPY_M",
    "src": "qveris-fmp-shestu"
   }
  }
 },
 {
  "company": "shestu",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 655973,
    "unit": "JPY_M",
    "src": "qveris-fmp-shestu"
   },
   "net_income": {
    "value": 131415,
    "unit": "JPY_M",
    "src": "qveris-fmp-shestu"
   }
  }
 },
 {
  "company": "adt",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 367473,
    "unit": "JPY_M",
    "src": "qveris-fmp-adt"
   },
   "net_income": {
    "value": 174780,
    "unit": "JPY_M",
    "src": "qveris-fmp-adt"
   }
  }
 },
 {
  "company": "adt",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 328073,
    "unit": "JPY_M",
    "src": "qveris-fmp-adt"
   },
   "net_income": {
    "value": 126827,
    "unit": "JPY_M",
    "src": "qveris-fmp-adt"
   }
  }
 },
 {
  "company": "adt",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 273804,
    "unit": "JPY_M",
    "src": "qveris-fmp-adt"
   },
   "net_income": {
    "value": 78713,
    "unit": "JPY_M",
    "src": "qveris-fmp-adt"
   }
  }
 },
 {
  "company": "adt",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 262957,
    "unit": "JPY_M",
    "src": "qveris-fmp-adt"
   },
   "net_income": {
    "value": 79633,
    "unit": "JPY_M",
    "src": "qveris-fmp-adt"
   }
  }
 },
 {
  "company": "sytech",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 81.41,
    "unit": "CNY_YI",
    "src": "qveris-cn-sytech"
   },
   "net_income": {
    "value": 11.58,
    "unit": "CNY_YI",
    "src": "qveris-cn-sytech"
   }
  }
 },
 {
  "company": "sytech",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 78.18,
    "unit": "CNY_YI",
    "src": "qveris-cn-sytech"
   },
   "net_income": {
    "value": 8.91,
    "unit": "CNY_YI",
    "src": "qveris-cn-sytech"
   }
  }
 },
 {
  "company": "sytech",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 79.34,
    "unit": "CNY_YI",
    "src": "qveris-cn-sytech"
   },
   "net_income": {
    "value": 10.17,
    "unit": "CNY_YI",
    "src": "qveris-cn-sytech"
   }
  }
 },
 {
  "company": "sytech",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 70.69,
    "unit": "CNY_YI",
    "src": "qveris-cn-sytech"
   },
   "net_income": {
    "value": 8.63,
    "unit": "CNY_YI",
    "src": "qveris-cn-sytech"
   }
  }
 },
 {
  "company": "ynge",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 2.89,
    "unit": "CNY_YI",
    "src": "qveris-cn-ynge"
   },
   "net_income": {
    "value": 0.09,
    "unit": "CNY_YI",
    "src": "qveris-cn-ynge"
   }
  }
 },
 {
  "company": "ynge",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 2.67,
    "unit": "CNY_YI",
    "src": "qveris-cn-ynge"
   },
   "net_income": {
    "value": 0.02,
    "unit": "CNY_YI",
    "src": "qveris-cn-ynge"
   }
  }
 },
 {
  "company": "ynge",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 2.69,
    "unit": "CNY_YI",
    "src": "qveris-cn-ynge"
   },
   "net_income": {
    "value": -0.04,
    "unit": "CNY_YI",
    "src": "qveris-cn-ynge"
   }
  }
 },
 {
  "company": "ynge",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 2.89,
    "unit": "CNY_YI",
    "src": "qveris-cn-ynge"
   },
   "net_income": {
    "value": 0.12,
    "unit": "CNY_YI",
    "src": "qveris-cn-ynge"
   }
  }
 },
 {
  "company": "veri",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 8.36,
    "unit": "CNY_YI",
    "src": "qveris-cn-veri"
   },
   "net_income": {
    "value": -3.41,
    "unit": "CNY_YI",
    "src": "qveris-cn-veri"
   }
  }
 },
 {
  "company": "veri",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 8.98,
    "unit": "CNY_YI",
    "src": "qveris-cn-veri"
   },
   "net_income": {
    "value": -1.81,
    "unit": "CNY_YI",
    "src": "qveris-cn-veri"
   }
  }
 },
 {
  "company": "veri",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 12.81,
    "unit": "CNY_YI",
    "src": "qveris-cn-veri"
   },
   "net_income": {
    "value": -0.27,
    "unit": "CNY_YI",
    "src": "qveris-cn-veri"
   }
  }
 },
 {
  "company": "veri",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 5.84,
    "unit": "CNY_YI",
    "src": "qveris-cn-veri"
   },
   "net_income": {
    "value": -1,
    "unit": "CNY_YI",
    "src": "qveris-cn-veri"
   }
  }
 },
 {
  "company": "amec",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 29.15,
    "unit": "CNY_YI",
    "src": "qveris-cn-amec"
   },
   "net_income": {
    "value": 9.3,
    "unit": "CNY_YI",
    "src": "qveris-cn-amec"
   }
  }
 },
 {
  "company": "amec",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 43.22,
    "unit": "CNY_YI",
    "src": "qveris-cn-amec"
   },
   "net_income": {
    "value": 9,
    "unit": "CNY_YI",
    "src": "qveris-cn-amec"
   }
  }
 },
 {
  "company": "amec",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 31.02,
    "unit": "CNY_YI",
    "src": "qveris-cn-amec"
   },
   "net_income": {
    "value": 5.05,
    "unit": "CNY_YI",
    "src": "qveris-cn-amec"
   }
  }
 },
 {
  "company": "amec",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 27.87,
    "unit": "CNY_YI",
    "src": "qveris-cn-amec"
   },
   "net_income": {
    "value": 3.93,
    "unit": "CNY_YI",
    "src": "qveris-cn-amec"
   }
  }
 },
 {
  "company": "tuojing",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 11.12,
    "unit": "CNY_YI",
    "src": "qveris-cn-tuojing"
   },
   "net_income": {
    "value": 5.71,
    "unit": "CNY_YI",
    "src": "qveris-cn-tuojing"
   }
  }
 },
 {
  "company": "tuojing",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 22.99,
    "unit": "CNY_YI",
    "src": "qveris-cn-tuojing"
   },
   "net_income": {
    "value": 3.7,
    "unit": "CNY_YI",
    "src": "qveris-cn-tuojing"
   }
  }
 },
 {
  "company": "tuojing",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 22.66,
    "unit": "CNY_YI",
    "src": "qveris-cn-tuojing"
   },
   "net_income": {
    "value": 4.62,
    "unit": "CNY_YI",
    "src": "qveris-cn-tuojing"
   }
  }
 },
 {
  "company": "tuojing",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 12.45,
    "unit": "CNY_YI",
    "src": "qveris-cn-tuojing"
   },
   "net_income": {
    "value": 2.41,
    "unit": "CNY_YI",
    "src": "qveris-cn-tuojing"
   }
  }
 },
 {
  "company": "fujing",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 10.43,
    "unit": "CNY_YI",
    "src": "qveris-cn-fujing"
   },
   "net_income": {
    "value": 0.58,
    "unit": "CNY_YI",
    "src": "qveris-cn-fujing"
   }
  }
 },
 {
  "company": "fujing",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 8.13,
    "unit": "CNY_YI",
    "src": "qveris-cn-fujing"
   },
   "net_income": {
    "value": -0.46,
    "unit": "CNY_YI",
    "src": "qveris-cn-fujing"
   }
  }
 },
 {
  "company": "fujing",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 10.06,
    "unit": "CNY_YI",
    "src": "qveris-cn-fujing"
   },
   "net_income": {
    "value": 0.25,
    "unit": "CNY_YI",
    "src": "qveris-cn-fujing"
   }
  }
 },
 {
  "company": "fujing",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 9.62,
    "unit": "CNY_YI",
    "src": "qveris-cn-fujing"
   },
   "net_income": {
    "value": 0.34,
    "unit": "CNY_YI",
    "src": "qveris-cn-fujing"
   }
  }
 },
 {
  "company": "gfs",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 1634,
    "unit": "USD_M",
    "src": "qveris-av-gfs"
   },
   "net_income": {
    "value": 103,
    "unit": "USD_M",
    "src": "qveris-av-gfs"
   }
  }
 },
 {
  "company": "gfs",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 1830,
    "unit": "USD_M",
    "src": "qveris-av-gfs"
   },
   "net_income": {
    "value": 199,
    "unit": "USD_M",
    "src": "qveris-av-gfs"
   }
  }
 },
 {
  "company": "gfs",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 1688,
    "unit": "USD_M",
    "src": "qveris-av-gfs"
   },
   "net_income": {
    "value": 248,
    "unit": "USD_M",
    "src": "qveris-av-gfs"
   }
  }
 },
 {
  "company": "gfs",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 1688,
    "unit": "USD_M",
    "src": "qveris-av-gfs"
   },
   "net_income": {
    "value": 228,
    "unit": "USD_M",
    "src": "qveris-av-gfs"
   }
  }
 },
 {
  "company": "tower",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 413.6,
    "unit": "USD_M",
    "src": "qveris-av-tower"
   },
   "net_income": {
    "value": 65,
    "unit": "USD_M",
    "src": "qveris-av-tower"
   }
  }
 },
 {
  "company": "tower",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 440.2,
    "unit": "USD_M",
    "src": "qveris-av-tower"
   },
   "net_income": {
    "value": 80.1,
    "unit": "USD_M",
    "src": "qveris-av-tower"
   }
  }
 },
 {
  "company": "tower",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 395.7,
    "unit": "USD_M",
    "src": "qveris-av-tower"
   },
   "net_income": {
    "value": 53.6,
    "unit": "USD_M",
    "src": "qveris-av-tower"
   }
  }
 },
 {
  "company": "tower",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 372.1,
    "unit": "USD_M",
    "src": "qveris-av-tower"
   },
   "net_income": {
    "value": 46.6,
    "unit": "USD_M",
    "src": "qveris-av-tower"
   }
  }
 },
 {
  "company": "eton",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 8531,
    "unit": "USD_M",
    "src": "eton-2026Q2-10-q"
   },
   "net_income": {
    "value": 821,
    "unit": "USD_M",
    "src": "eton-2026Q2-10-q"
   }
  }
 },
 {
  "company": "eton",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 7451,
    "unit": "USD_M",
    "src": "eton-2026Q1-10-q"
   },
   "net_income": {
    "value": 866,
    "unit": "USD_M",
    "src": "eton-2026Q1-10-q"
   }
  }
 },
 {
  "company": "eton",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 7055,
    "unit": "USD_M",
    "src": "eton-2025Q4-10-q"
   },
   "net_income": {
    "value": 1133,
    "unit": "USD_M",
    "src": "eton-2025Q4-10-q"
   }
  }
 },
 {
  "company": "eton",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 6988,
    "unit": "USD_M",
    "src": "eton-2025Q3-10-q"
   },
   "net_income": {
    "value": 1010,
    "unit": "USD_M",
    "src": "eton-2025Q3-10-q"
   }
  }
 },
 {
  "company": "unimicron",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 37446.46,
    "unit": "TWD_M",
    "src": "unimicron-2026Q1-qr"
   },
   "net_income": {
    "value": 5042.98,
    "unit": "TWD_M",
    "src": "unimicron-2026Q1-qr"
   }
  }
 },
 {
  "company": "unimicron",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 34690.89,
    "unit": "TWD_M",
    "src": "unimicron-2025Q4-qr"
   },
   "net_income": {
    "value": 3534.5,
    "unit": "TWD_M",
    "src": "unimicron-2025Q4-qr"
   }
  }
 },
 {
  "company": "unimicron",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 33994.42,
    "unit": "TWD_M",
    "src": "unimicron-2025Q3-qr"
   },
   "net_income": {
    "value": 2194.49,
    "unit": "TWD_M",
    "src": "unimicron-2025Q3-qr"
   }
  }
 },
 {
  "company": "unimicron",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 32466.05,
    "unit": "TWD_M",
    "src": "unimicron-2025Q2-qr"
   },
   "net_income": {
    "value": 29.61,
    "unit": "TWD_M",
    "src": "unimicron-2025Q2-qr"
   }
  }
 },
 {
  "company": "delta",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 183256.08,
    "unit": "TWD_M",
    "src": "delta-2026Q2-qr"
   },
   "net_income": {
    "value": 25135.64,
    "unit": "TWD_M",
    "src": "delta-2026Q2-qr"
   }
  }
 },
 {
  "company": "delta",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 159352.65,
    "unit": "TWD_M",
    "src": "delta-2026Q1-qr"
   },
   "net_income": {
    "value": 23834.55,
    "unit": "TWD_M",
    "src": "delta-2026Q1-qr"
   }
  }
 },
 {
  "company": "delta",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 161613.1,
    "unit": "TWD_M",
    "src": "delta-2025Q4-qr"
   },
   "net_income": {
    "value": 19637.74,
    "unit": "TWD_M",
    "src": "delta-2025Q4-qr"
   }
  }
 },
 {
  "company": "delta",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 150317.58,
    "unit": "TWD_M",
    "src": "delta-2025Q3-qr"
   },
   "net_income": {
    "value": 18605.72,
    "unit": "TWD_M",
    "src": "delta-2025Q3-qr"
   }
  }
 },
 {
  "company": "ibiden",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 117580,
    "unit": "JPY_M",
    "src": "ibiden-2026Q1-qr"
   },
   "net_income": {
    "value": 32712,
    "unit": "JPY_M",
    "src": "ibiden-2026Q1-qr"
   }
  }
 },
 {
  "company": "ibiden",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 103136,
    "unit": "JPY_M",
    "src": "ibiden-2025Q4-qr"
   },
   "net_income": {
    "value": 8932,
    "unit": "JPY_M",
    "src": "ibiden-2025Q4-qr"
   }
  }
 },
 {
  "company": "ibiden",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 98021,
    "unit": "JPY_M",
    "src": "ibiden-2025Q3-qr"
   },
   "net_income": {
    "value": 9340,
    "unit": "JPY_M",
    "src": "ibiden-2025Q3-qr"
   }
  }
 },
 {
  "company": "ibiden",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 97464,
    "unit": "JPY_M",
    "src": "ibiden-2025Q2-qr"
   },
   "net_income": {
    "value": 12728,
    "unit": "JPY_M",
    "src": "ibiden-2025Q2-qr"
   }
  }
 },
 {
  "company": "dsbj",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 131.38,
    "unit": "CNY_YI",
    "src": "dsbj-2026Q1-qr"
   },
   "net_income": {
    "value": 11.24,
    "unit": "CNY_YI",
    "src": "dsbj-2026Q1-qr"
   }
  }
 },
 {
  "company": "dsbj",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 130.54,
    "unit": "CNY_YI",
    "src": "dsbj-2025Q4-qr"
   },
   "net_income": {
    "value": 1.69,
    "unit": "CNY_YI",
    "src": "dsbj-2025Q4-qr"
   }
  }
 },
 {
  "company": "dsbj",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 101.15,
    "unit": "CNY_YI",
    "src": "dsbj-2025Q3-qr"
   },
   "net_income": {
    "value": 4.65,
    "unit": "CNY_YI",
    "src": "dsbj-2025Q3-qr"
   }
  }
 },
 {
  "company": "dsbj",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 83.53,
    "unit": "CNY_YI",
    "src": "dsbj-2025Q2-qr"
   },
   "net_income": {
    "value": 3.02,
    "unit": "CNY_YI",
    "src": "dsbj-2025Q2-qr"
   }
  }
 },
 {
  "company": "scc",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 65.96,
    "unit": "CNY_YI",
    "src": "scc-2026Q1-qr"
   },
   "net_income": {
    "value": 8.51,
    "unit": "CNY_YI",
    "src": "scc-2026Q1-qr"
   }
  }
 },
 {
  "company": "scc",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 68.93,
    "unit": "CNY_YI",
    "src": "scc-2025Q4-qr"
   },
   "net_income": {
    "value": 9.5,
    "unit": "CNY_YI",
    "src": "scc-2025Q4-qr"
   }
  }
 },
 {
  "company": "scc",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 63.01,
    "unit": "CNY_YI",
    "src": "scc-2025Q3-qr"
   },
   "net_income": {
    "value": 9.67,
    "unit": "CNY_YI",
    "src": "scc-2025Q3-qr"
   }
  }
 },
 {
  "company": "scc",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 56.71,
    "unit": "CNY_YI",
    "src": "scc-2025Q2-qr"
   },
   "net_income": {
    "value": 8.69,
    "unit": "CNY_YI",
    "src": "scc-2025Q2-qr"
   }
  }
 },
 {
  "company": "jw",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 38.92,
    "unit": "CNY_YI",
    "src": "jw-2026Q1-qr"
   },
   "net_income": {
    "value": 2.43,
    "unit": "CNY_YI",
    "src": "jw-2026Q1-qr"
   }
  }
 },
 {
  "company": "jw",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 42.25,
    "unit": "CNY_YI",
    "src": "jw-2025Q4-qr"
   },
   "net_income": {
    "value": 2.83,
    "unit": "CNY_YI",
    "src": "jw-2025Q4-qr"
   }
  }
 },
 {
  "company": "jw",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 39.87,
    "unit": "CNY_YI",
    "src": "jw-2025Q3-qr"
   },
   "net_income": {
    "value": 3.07,
    "unit": "CNY_YI",
    "src": "jw-2025Q3-qr"
   }
  }
 },
 {
  "company": "jw",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 37.52,
    "unit": "CNY_YI",
    "src": "jw-2025Q2-qr"
   },
   "net_income": {
    "value": 3.23,
    "unit": "CNY_YI",
    "src": "jw-2025Q2-qr"
   }
  }
 },
 {
  "company": "qcom",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 9947,
    "unit": "USD_M",
    "src": "qcom-2026q2-10q"
   },
   "net_income": {
    "value": 2002,
    "unit": "USD_M",
    "src": "qcom-2026q2-10q"
   }
  }
 },
 {
  "company": "qcom",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 10599,
    "unit": "USD_M",
    "src": "qcom-2026q1-10q"
   },
   "net_income": {
    "value": 7370,
    "unit": "USD_M",
    "src": "qcom-2026q1-10q"
   }
  }
 },
 {
  "company": "qcom",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 12252,
    "unit": "USD_M",
    "src": "qcom-2025q4-10q"
   },
   "net_income": {
    "value": 3004,
    "unit": "USD_M",
    "src": "qcom-2025q4-10q"
   }
  }
 },
 {
  "company": "qcom",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 11271,
    "unit": "USD_M",
    "src": "qcom-2025q3-10q"
   },
   "net_income": {
    "value": -3117,
    "unit": "USD_M",
    "src": "qcom-2025q3-10q"
   }
  }
 },
 {
  "company": "intc",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 16128,
    "unit": "USD_M",
    "src": "intc-2026q2-10q"
   },
   "net_income": {
    "value": -11033,
    "unit": "USD_M",
    "src": "intc-2026q2-10q"
   }
  }
 },
 {
  "company": "intc",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 13577,
    "unit": "USD_M",
    "src": "intc-2026q1-10q"
   },
   "net_income": {
    "value": -3728,
    "unit": "USD_M",
    "src": "intc-2026q1-10q"
   }
  }
 },
 {
  "company": "intc",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 13674,
    "unit": "USD_M",
    "src": "intc-2025q4-10q"
   },
   "net_income": {
    "value": -591,
    "unit": "USD_M",
    "src": "intc-2025q4-10q"
   }
  }
 },
 {
  "company": "intc",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 13653,
    "unit": "USD_M",
    "src": "intc-2025q3-10q"
   },
   "net_income": {
    "value": 4063,
    "unit": "USD_M",
    "src": "intc-2025q3-10q"
   }
  }
 },
 {
  "company": "foxconn",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 2119533.391,
    "unit": "TWD_M",
    "src": "foxconn-2026q1-qr"
   },
   "net_income": {
    "value": 56956.277,
    "unit": "TWD_M",
    "src": "foxconn-2026q1-qr"
   }
  }
 },
 {
  "company": "foxconn",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 2606372.027,
    "unit": "TWD_M",
    "src": "foxconn-2025q4-qr"
   },
   "net_income": {
    "value": 45212.455,
    "unit": "TWD_M",
    "src": "foxconn-2025q4-qr"
   }
  }
 },
 {
  "company": "foxconn",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 2058949.127,
    "unit": "TWD_M",
    "src": "foxconn-2025q3-qr"
   },
   "net_income": {
    "value": 57672.785,
    "unit": "TWD_M",
    "src": "foxconn-2025q3-qr"
   }
  }
 },
 {
  "company": "foxconn",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 1793468.046,
    "unit": "TWD_M",
    "src": "foxconn-2025q2-qr"
   },
   "net_income": {
    "value": 44360.558,
    "unit": "TWD_M",
    "src": "foxconn-2025q2-qr"
   }
  }
 },
 {
  "company": "huaqin",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 407.46,
    "unit": "CNY_YI",
    "src": "huaqin-2026q1-qr"
   },
   "net_income": {
    "value": 10.61,
    "unit": "CNY_YI",
    "src": "huaqin-2026q1-qr"
   }
  }
 },
 {
  "company": "huaqin",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 425.55,
    "unit": "CNY_YI",
    "src": "huaqin-2025q4-qr"
   },
   "net_income": {
    "value": 9.56,
    "unit": "CNY_YI",
    "src": "huaqin-2025q4-qr"
   }
  }
 },
 {
  "company": "huaqin",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 449.43,
    "unit": "CNY_YI",
    "src": "huaqin-2025q3-qr"
   },
   "net_income": {
    "value": 12.1,
    "unit": "CNY_YI",
    "src": "huaqin-2025q3-qr"
   }
  }
 },
 {
  "company": "huaqin",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 489.42,
    "unit": "CNY_YI",
    "src": "huaqin-2025q2-qr"
   },
   "net_income": {
    "value": 10.47,
    "unit": "CNY_YI",
    "src": "huaqin-2025q2-qr"
   }
  }
 },
 {
  "company": "kioxia",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 1767117,
    "unit": "JPY_M",
    "src": "kioxia-2026q2-er"
   },
   "net_income": {
    "value": 842165,
    "unit": "JPY_M",
    "src": "kioxia-2026q2-er"
   }
  }
 },
 {
  "company": "kioxia",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 1002852,
    "unit": "JPY_M",
    "src": "kioxia-2026q1-er"
   },
   "net_income": {
    "value": 407734,
    "unit": "JPY_M",
    "src": "kioxia-2026q1-er"
   }
  }
 },
 {
  "company": "kioxia",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 543631,
    "unit": "JPY_M",
    "src": "kioxia-2025q4-er"
   },
   "net_income": {
    "value": 87810,
    "unit": "JPY_M",
    "src": "kioxia-2025q4-er"
   }
  }
 },
 {
  "company": "kioxia",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 448346,
    "unit": "JPY_M",
    "src": "kioxia-2025q3-er"
   },
   "net_income": {
    "value": 40662,
    "unit": "JPY_M",
    "src": "kioxia-2025q3-er"
   }
  }
 },
 {
  "company": "wdc",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 3337,
    "unit": "USD_M",
    "src": "wdc-2026q1-er"
   },
   "net_income": {
    "value": 3205,
    "unit": "USD_M",
    "src": "wdc-2026q1-er"
   }
  }
 },
 {
  "company": "wdc",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 3017,
    "unit": "USD_M",
    "src": "wdc-2025q4-er"
   },
   "net_income": {
    "value": 1842,
    "unit": "USD_M",
    "src": "wdc-2025q4-er"
   }
  }
 },
 {
  "company": "wdc",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 2818,
    "unit": "USD_M",
    "src": "wdc-2025q3-er"
   },
   "net_income": {
    "value": 1182,
    "unit": "USD_M",
    "src": "wdc-2025q3-er"
   }
  }
 },
 {
  "company": "wdc",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 2605,
    "unit": "USD_M",
    "src": "wdc-2025q2-er"
   },
   "net_income": {
    "value": 257,
    "unit": "USD_M",
    "src": "wdc-2025q2-er"
   }
  }
 },
 {
  "company": "stx",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 3629,
    "unit": "USD_M",
    "src": "stx-2026q2-er"
   },
   "net_income": {
    "value": 1294,
    "unit": "USD_M",
    "src": "stx-2026q2-er"
   }
  }
 },
 {
  "company": "stx",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 3112,
    "unit": "USD_M",
    "src": "stx-2026q1-er"
   },
   "net_income": {
    "value": 748,
    "unit": "USD_M",
    "src": "stx-2026q1-er"
   }
  }
 },
 {
  "company": "stx",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 2825,
    "unit": "USD_M",
    "src": "stx-2025q4-er"
   },
   "net_income": {
    "value": 593,
    "unit": "USD_M",
    "src": "stx-2025q4-er"
   }
  }
 },
 {
  "company": "stx",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 2629,
    "unit": "USD_M",
    "src": "stx-2025q3-er"
   },
   "net_income": {
    "value": 549,
    "unit": "USD_M",
    "src": "stx-2025q3-er"
   }
  }
 },
 {
  "company": "sndk",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 5950,
    "unit": "USD_M",
    "src": "sndk-2026q1-er"
   },
   "net_income": {
    "value": 3615,
    "unit": "USD_M",
    "src": "sndk-2026q1-er"
   }
  }
 },
 {
  "company": "sndk",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 3025,
    "unit": "USD_M",
    "src": "sndk-2025q4-er"
   },
   "net_income": {
    "value": 803,
    "unit": "USD_M",
    "src": "sndk-2025q4-er"
   }
  }
 },
 {
  "company": "sndk",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 2308,
    "unit": "USD_M",
    "src": "sndk-2025q3-er"
   },
   "net_income": {
    "value": 112,
    "unit": "USD_M",
    "src": "sndk-2025q3-er"
   }
  }
 },
 {
  "company": "sndk",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 1901,
    "unit": "USD_M",
    "src": "sndk-2025q2-er"
   },
   "net_income": {
    "value": -23,
    "unit": "USD_M",
    "src": "sndk-2025q2-er"
   }
  }
 },
 {
  "company": "giga",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 41.88,
    "unit": "CNY_YI",
    "src": "giga-2026q1-er"
   },
   "net_income": {
    "value": 14.61,
    "unit": "CNY_YI",
    "src": "giga-2026q1-er"
   }
  }
 },
 {
  "company": "giga",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 23.72,
    "unit": "CNY_YI",
    "src": "giga-2025q4-er"
   },
   "net_income": {
    "value": 5.65,
    "unit": "CNY_YI",
    "src": "giga-2025q4-er"
   }
  }
 },
 {
  "company": "giga",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 26.81,
    "unit": "CNY_YI",
    "src": "giga-2025q3-er"
   },
   "net_income": {
    "value": 5.08,
    "unit": "CNY_YI",
    "src": "giga-2025q3-er"
   }
  }
 },
 {
  "company": "giga",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 22.41,
    "unit": "CNY_YI",
    "src": "giga-2025q2-er"
   },
   "net_income": {
    "value": 3.41,
    "unit": "CNY_YI",
    "src": "giga-2025q2-er"
   }
  }
 },
 {
  "company": "ase",
  "period": "2026Q2",
  "metrics": {
   "revenue": {
    "value": 191064,
    "unit": "TWD_M",
    "src": "ase-2026q2"
   },
   "net_income": {
    "value": 21068,
    "unit": "TWD_M",
    "src": "ase-2026q2"
   }
  }
 },
 {
  "company": "ase",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 175456.76,
    "unit": "TWD_M",
    "src": "ase-2026q1"
   },
   "net_income": {
    "value": 14294.22,
    "unit": "TWD_M",
    "src": "ase-2026q1"
   }
  }
 },
 {
  "company": "ase",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 179596.47,
    "unit": "TWD_M",
    "src": "ase-2025q4"
   },
   "net_income": {
    "value": 14852.05,
    "unit": "TWD_M",
    "src": "ase-2025q4"
   }
  }
 },
 {
  "company": "ase",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 168569,
    "unit": "TWD_M",
    "src": "ase-2025q3"
   },
   "net_income": {
    "value": 10870,
    "unit": "TWD_M",
    "src": "ase-2025q3"
   }
  }
 },
 {
  "company": "huahong",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 665.99,
    "unit": "USD_M",
    "src": "huahong-2026q1"
   },
   "net_income": {
    "value": 20.1,
    "unit": "USD_M",
    "src": "huahong-2026q1"
   }
  }
 },
 {
  "company": "huahong",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 663.41,
    "unit": "USD_M",
    "src": "huahong-2025q4"
   },
   "net_income": {
    "value": 17.66,
    "unit": "USD_M",
    "src": "huahong-2025q4"
   }
  }
 },
 {
  "company": "huahong",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 641.21,
    "unit": "USD_M",
    "src": "huahong-2025q3"
   },
   "net_income": {
    "value": 24.85,
    "unit": "USD_M",
    "src": "huahong-2025q3"
   }
  }
 },
 {
  "company": "huahong",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 578.25,
    "unit": "USD_M",
    "src": "huahong-2025q2"
   },
   "net_income": {
    "value": 6.62,
    "unit": "USD_M",
    "src": "huahong-2025q2"
   }
  }
 },
 {
  "company": "jcet",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 91.71,
    "unit": "CNY_YI",
    "src": "jcet-2026q1"
   },
   "net_income": {
    "value": 2.9,
    "unit": "CNY_YI",
    "src": "jcet-2026q1"
   }
  }
 },
 {
  "company": "jcet",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 102.02,
    "unit": "CNY_YI",
    "src": "jcet-2025q4"
   },
   "net_income": {
    "value": 6.11,
    "unit": "CNY_YI",
    "src": "jcet-2025q4"
   }
  }
 },
 {
  "company": "jcet",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 100.64,
    "unit": "CNY_YI",
    "src": "jcet-2025q3"
   },
   "net_income": {
    "value": 4.83,
    "unit": "CNY_YI",
    "src": "jcet-2025q3"
   }
  }
 },
 {
  "company": "jcet",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 92.7,
    "unit": "CNY_YI",
    "src": "jcet-2025q2"
   },
   "net_income": {
    "value": 2.67,
    "unit": "CNY_YI",
    "src": "jcet-2025q2"
   }
  }
 },
 {
  "company": "tfme",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 74.82,
    "unit": "CNY_YI",
    "src": "tfme-2026q1"
   },
   "net_income": {
    "value": 3.29,
    "unit": "CNY_YI",
    "src": "tfme-2026q1"
   }
  }
 },
 {
  "company": "tfme",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 78.05,
    "unit": "CNY_YI",
    "src": "tfme-2025q4"
   },
   "net_income": {
    "value": 3.58,
    "unit": "CNY_YI",
    "src": "tfme-2025q4"
   }
  }
 },
 {
  "company": "tfme",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 70.78,
    "unit": "CNY_YI",
    "src": "tfme-2025q3"
   },
   "net_income": {
    "value": 4.48,
    "unit": "CNY_YI",
    "src": "tfme-2025q3"
   }
  }
 },
 {
  "company": "tfme",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 69.46,
    "unit": "CNY_YI",
    "src": "tfme-2025q2"
   },
   "net_income": {
    "value": 3.11,
    "unit": "CNY_YI",
    "src": "tfme-2025q2"
   }
  }
 },
 {
  "company": "sjsmi",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 16.98,
    "unit": "CNY_YI",
    "src": "sjsmi-2026q1"
   },
   "net_income": {
    "value": 1.91,
    "unit": "CNY_YI",
    "src": "sjsmi-2026q1"
   }
  }
 },
 {
  "company": "sjsmi",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 16.77,
    "unit": "CNY_YI",
    "src": "sjsmi-2025q2"
   },
   "net_income": {
    "value": 3.09,
    "unit": "CNY_YI",
    "src": "sjsmi-2025q2"
   }
  }
 },
 {
  "company": "sjsmi",
  "period": "2025Q1",
  "metrics": {
   "revenue": {
    "value": 15.01,
    "unit": "CNY_YI",
    "src": "sjsmi-2025q1"
   },
   "net_income": {
    "value": 1.26,
    "unit": "CNY_YI",
    "src": "sjsmi-2025q1"
   }
  }
 },
 {
  "company": "cerebras",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 193.406,
    "unit": "USD_M",
    "src": "cerebras-2026q1-10q"
   },
   "net_income": {
    "value": -14.006,
    "unit": "USD_M",
    "src": "cerebras-2026q1-10q"
   }
  }
 },
 {
  "company": "cerebras",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 171.443,
    "unit": "USD_M",
    "src": "cerebras-2025q4-10q"
   },
   "net_income": {
    "value": -25.617,
    "unit": "USD_M",
    "src": "cerebras-2025q4-10q"
   }
  }
 },
 {
  "company": "cerebras",
  "period": "2025Q3",
  "metrics": {
   "revenue": {
    "value": 135.714,
    "unit": "USD_M",
    "src": "cerebras-2025q3-10q"
   },
   "net_income": {
    "value": -22.201,
    "unit": "USD_M",
    "src": "cerebras-2025q3-10q"
   }
  }
 },
 {
  "company": "cerebras",
  "period": "2025Q2",
  "metrics": {
   "revenue": {
    "value": 103.322,
    "unit": "USD_M",
    "src": "cerebras-2025q2-10q"
   },
   "net_income": {
    "value": 309.512,
    "unit": "USD_M",
    "src": "cerebras-2025q2-10q"
   }
  }
 },
 {
  "company": "lxyq",
  "period": "2026Q1",
  "metrics": {
   "revenue": {
    "value": 4.877,
    "unit": "CNY_YI",
    "src": "lxyq-2026q1"
   },
   "net_income": {
    "value": 1.189,
    "unit": "CNY_YI",
    "src": "lxyq-2026q1"
   }
  }
 },
 {
  "company": "lxyq",
  "period": "2025Q4",
  "metrics": {
   "revenue": {
    "value": 3.884,
    "unit": "CNY_YI",
    "src": "lxyq-2025q4-derived"
   },
   "net_income": {
    "value": 0.77,
    "unit": "CNY_YI",
    "src": "lxyq-2025q4-derived"
   }
  }
 }
];

if (typeof module!=='undefined') module.exports = {METRICS};
