globalThis.DASHBOARD_CONFIG = Object.freeze({
  id: "weekly-comparison",
  title: "Boardroom Intelligence — Weekly Comparison",
  reporting: Object.freeze({
    label: "Wk7 versus Wk6",
    currentPeriod: "Wk7",
    comparablePeriod: "Wk6",
    periodUnit: "week"
  }),
  governance: Object.freeze({
    source: "JAS weekly comparison source workbook",
    dataThrough: "Wk7",
    published: "22 Aug 2026",
    expectedStores: 69,
    expectedArms: 15
  }),
  benchmarks: Object.freeze({ loanAttachPct: 25, tradeInPct: 10 }),
  dataClassification: "Internal business reporting"
});
