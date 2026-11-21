/* 北美 AIDC 容量项目 — 仅收录有官方容量披露的项目(口径见 schema.md) */
const CAPACITY = {
 "note": "按运营商官方披露容量合计",
 "projects": [
  {
   "project": "CoreWeave — active power（组合口径）",
   "operator": "CoreWeave",
   "location": "United States (portfolio)",
   "mw": 1500,
   "mw_kind": "total_power",
   "status": "operating",
   "src": "crwv-2026q2-er"
  },
  {
   "project": "CoreWeave — total contracted power（组合口径）",
   "operator": "CoreWeave",
   "location": "United States (portfolio)",
   "mw": 3700,
   "mw_kind": "total_power",
   "status": "construction",
   "src": "crwv-2026q2-er"
  },
  {
   "project": "Polaris Forge 1",
   "operator": "Applied Digital",
   "location": "Ellendale, ND",
   "mw": 400,
   "mw_kind": "it_load",
   "status": "construction",
   "src": "apld-polaris-forge-1"
  },
  {
   "project": "Stargate I (Abilene)",
   "operator": "Oracle / OpenAI (开发商: Crusoe, Lancium)",
   "location": "Abilene, TX",
   "mw": 1200,
   "mw_kind": "total_power",
   "status": "construction",
   "src": "crusoe-abilene-1p2gw"
  },
  {
   "project": "Sweetwater 1",
   "operator": "IREN",
   "location": "Sweetwater, TX",
   "mw": 1400,
   "mw_kind": "total_power",
   "status": "construction",
   "src": "iren-sweetwater-1"
  },
  {
   "project": "Childress",
   "operator": "IREN",
   "location": "Childress, TX",
   "mw": 750,
   "mw_kind": "total_power",
   "status": "operating",
   "src": "iren-childress-site"
  },
  {
   "project": "Hyperion (Richland Parish Data Center)",
   "operator": "Meta",
   "location": "Richland Parish, LA",
   "mw": 5000,
   "mw_kind": "unknown",
   "status": "construction",
   "src": "meta-hyperion-richland"
  },
  {
   "project": "Meta El Paso Data Center",
   "operator": "Meta / BlackRock 合资",
   "location": "El Paso, TX",
   "mw": 1000,
   "mw_kind": "unknown",
   "status": "construction",
   "src": "meta-el-paso"
  },
  {
   "project": "Frontier",
   "operator": "Vantage Data Centers",
   "location": "Shackelford County, TX",
   "mw": 1400,
   "mw_kind": "it_load",
   "status": "construction",
   "src": "vantage-frontier"
  },
  {
   "project": "Lighthouse (Stargate Wisconsin)",
   "operator": "Vantage Data Centers / Oracle / OpenAI",
   "location": "Port Washington, WI",
   "mw": 1000,
   "mw_kind": "it_load",
   "status": "announced",
   "src": "vantage-lighthouse-wi"
  },
  {
   "project": "Crusoe Abilene AI Factory Campus (Microsoft)",
   "operator": "Crusoe (支持 Microsoft AI 基础设施)",
   "location": "Abilene, TX",
   "mw": 900,
   "mw_kind": "total_power",
   "status": "construction",
   "src": "crusoe-abilene-msft-900"
  }
 ]
};

if (typeof module!=='undefined') module.exports = {CAPACITY};
