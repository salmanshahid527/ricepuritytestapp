# SEO change log: www.ricepuritytestapp.com

Rule 8: change a page at most once every 28 days, log every change with its GSC baseline, and record the result 28 days later. Baselines are 28-day sums from the dashboard's `/api/seo/gsc` (query×page rows; anonymised queries excluded, so a little below Search Console's page totals). Position is impression-weighted.

| date | url | change | finding | baseline clicks/impr/ctr/pos (28d, 2026-08-30 → 09-26) | review on | result |
|---|---|---|---|---|---|---|
| 2026-09-29 | /rice-purity-test-average-score-by-age | Content rewrite (PR #3): answer-first summary, estimates labelled, 18-year-old section, under-18 note | gsc: average score queries, low CTR | 80 / 2236 / 3.6% / 7.6 | 2026-10-27 | |
| 2026-09-29 | /rice-purity-test-questions | Content rewrite (PR #3): all 100 questions grouped by theme, with notes on the most-searched items | gsc: "questions explained" CTR | 12 / 82 / 14.6% / 15.8 | 2026-10-27 | |
| 2026-09-29 | /rice-purity-test-score | Content rewrite (PR #3): score chart, "is 77 good" answers | gsc: score meaning | 4 / 831 / 0.5% / 13.7 | 2026-10-27 | |
| 2026-09-29 | /rice-purity-test-meaning | Content rewrite (PR #3): refocused on what the test is and MPS, to stop competing with /score | gsc: cannibalization score vs meaning | 0 / 210 / 0.0% / 19.1 | 2026-10-27 | |
| 2026-09-29 | / | Content rewrite (PR #3): fabricated social proof removed, sections trimmed | policy: invented stats | 1 / 65 / 1.5% / 11.8 | 2026-10-27 | |
| _pending merge_ | all pages | Redesign (branch redesign/ricepurity): design system, rebuilt test and results, answer-first guide template. URLs, content and metadata kept, except the rows below | project: tk-ricepurity-redesign | see rows above | merge + 28 days | |
| _pending merge_ | /rice-purity-test-average-score-by-age | Title → "Average Rice Purity Score by Age (Estimated 62–68 Overall)"; the description states "an estimated 62 to 68". **Needs owner approval** (protected page) | gsc: "average rice purity score" 1,223 impr, 0 clicks | 80 / 2236 / 3.6% / 7.6 | merge + 28 days | |
| _pending merge_ | /rice-purity-test-score | New "Is my score good?" lookup table (one table, not per-score pages) | gsc: "is N a good score" queries | 4 / 831 / 0.5% / 13.7 | merge + 28 days | |
