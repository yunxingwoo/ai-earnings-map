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
 }
];

if (typeof module!=='undefined') module.exports = {METRICS};
