# Boardroom Intelligence — Weekly Comparison

Standalone weekly comparison dashboard for Wk7 versus Wk6 performance, executive KPIs, store and ARM exploration, retail-excellence signals, and priority actions.

## Run and deploy

Open `index.html` locally, or publish the repository through **GitHub Settings → Pages → Deploy from a branch → main / root**.

## Validation

Run `npm test` with Node.js 18 or later.

## Data note

The dashboard is a static, source-backed snapshot. Refresh the embedded dataset and labels together when advancing the reporting week.

## Quality controls

- `dashboard-config.js` is the single reporting-period and benchmark contract.
- `retail-metrics.js` defines reusable growth, percentage-point, run-rate, projection, and reconciliation formulas.
- `METRIC_DICTIONARY.md` documents the standard business definitions.
- `npm test` validates both the HTML contract and the shared formula contract.
- The responsive executive UI layer improves hierarchy, navigation, KPI cards, comparison tables, and accessible focus behavior without altering business logic.
