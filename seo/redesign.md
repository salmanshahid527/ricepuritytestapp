# ricepuritytestapp.com redesign (tk-ricepurity-redesign)

Branch: `redesign/ricepurity` (from `origin/main` at `ff83f69`). [PR #4](https://github.com/salmanshahid527/ricepuritytestapp/pull/4) is open and **not merged**; nothing is deployed. The second pass (v2) adds commits on top of `4e4157f`.

## Stage status

| Stage | Status | Owner approval |
|---|---|---|
| 1. Content audit | Done (below). GSC per-page query data was not available to this run (`gsc_property: TODO`), so the audit uses the figures in the brief plus the live HTML. | **Pending** |
| 2. Design proposal | Done as a working build plus screenshots (see "Design system" and the screenshot list). No Vercel preview yet. | **Pending** |
| 3. Build | Done on the branch. `npx tsc --noEmit` and `npm run build` pass. | **Pending** |
| 4. Before/after + PR | Before/after is below. PR #4 open. `tk-reviewer` Mode B not run yet. | **Pending** |
| v2. Second pass (query gaps, trust, AdSense readiness) | Done on the branch (see "Second pass (v2)"). | **Pending** |

The skill gates each stage on an owner approval. These stages were run back to back at the parent session's request, so **no approvals are recorded yet**. Record them here, with dates, before merging.

### Timing flags (owner decision)

- **28-day rule.** The core content was rewritten on 2026-09-27. This branch changes the same pages again (layout for all, title and meta on two, and in v2 new answer sections on the age, score and questions pages). Shipping before **2026-10-25** means the 09-27 rewrite and the redesign can't be measured separately.
- **Ranking update.** Google's *September 2026 spam update* started on 2026-09-24 and was still rolling out on 2026-09-30. The policy check says not to judge results during a rollout or within 7 days after it. Deploy at least 7 days after it completes.

## Second pass (v2, 2026-09-30): query gaps, trust and AdSense readiness

Goals: rank better for the queries the site already earns, and fix what the AdSense "Low value content" rejection (2026-09-19) points at. The topic counts as restricted sexual content, so limited ads are expected even after approval. Same branch, new local commits on top of `4e4157f`: nothing new is pushed, merged or deployed.

Data: dashboard `/api/seo/gsc`, 28 days (2026-08-30 → 2026-09-26), 469 query×page rows (1,645 daily rows). **24 under-18 queries (219 impressions) were dropped before any analysis** and are not targeted anywhere.

### What changed, page by page

| Page | Change | Why (query data) |
|---|---|---|
| `/rice-purity-test-average-score-by-age` (protected) | Answer box is now headed by the question itself ("What is the average Rice Purity score?"). New H2s: "What is a normal Rice Purity score?", "Average score at 19, 20, 21 and 22", "Is my score normal for my age?" (the old "doesn't match" section, with a direct answer first). The 18-year-old answer now leads with the estimated range. "Where these numbers come from" became **"How we estimate these ranges"**: a 4-step method, the Rice Thresher's published figure (average 65 for ~274 tests in Houston on one day in August 2017) as the only outside check, and the source link. "About this guide" block at the end. | 992 impr / 1 click for the overall-average cluster at pos 9.4; "normal / good" 52 impr answered nowhere on the page; 19–22 ages 31 impr only in one sentence; 252 impr for specific numbers ("68 rice purity score") with no pointer to the lookup. |
| `/rice-purity-test-score` | Answer box headed "What does your Rice Purity score mean?" with a direct 50-word answer. H2s now mirror the questions ("How is the Rice Purity score calculated?", "Rice Purity score chart, from 100 to 0"); the calculation answers "weighted" and "out of 100". Every lookup row has an anchor (`#score-71` etc.) and highlights when linked. "The numbers people ask about most" answers 85, 77, 68/65 and 55 with nearby numbers folded in (one section, no per-score pages). FAQ answers lead with what high and low mean. Contextual links to the meaning and age pages. Chart labels wrap on mobile. | 375 impr for "score meaning" at pos 12.9 with the answer only in the title; 117 impr for specific numbers; 32 impr for "how is it calculated / weighted". |
| `/rice-purity-test-questions` (protected) | Notes extended from 18 to **55 items** (every item whose wording is slang, ambiguous or has a "does X count?" question; plain items stay unannotated). Every item has an anchor (`#q14`) and highlights when linked. A scrollable "Items people often ask about" row jumps to the most-asked items, MPS and the question mark. The summary is a compact 2×2 so the list heading and jump row sit in the first mobile viewport. Links to the age page and how-to guide. | "questions explained" earns 38 impr at pos 7.8 with a 31.6% CTR; "kissed for more than two hours consecutively meaning" ranks #1 (on home) with no deep link; MPS and question-mark queries. |
| `/rice-purity-test-meaning` | Answer box headed "What the Rice Purity Test means", with a first-paragraph link to the score page (the owner of "score meaning"). MPS H2 mirrors the query. 1924 source added. | 135 impr for "test meaning" at pos 12.7; 66 impr of "score meaning" landing here at pos 32 (cannibalization, fixed with a link, not a retitle). |
| `/rice-purity-test-history` | 1924 average (62) and the 2017 visit count (1.5M in a year), both from the Thresher's own 2017 article; primary-source links (1924 issue in Rice's digital collections). **Correction:** The Independent's article is from July 2022, not 2021. | E-E-A-T: sources, first-party archive. |
| `/blog` | Rebuilt as a guides hub: three sections (before the test, after your score, background), each card showing the guide's key answer, a summary and its real "Last reviewed" date, plus "How these guides are made". CollectionPage + ItemList JSON-LD matching the cards. Breadcrumb label "Guides" (URL unchanged). **Correction:** the old history blurb said "orientation handout". | AdSense site-quality: a substantive page behind the "Guides" nav item. |
| `/about` | "Who runs it" (Teknoesis, both addresses: only what the page and footer already state), new **"How we write and review the guides"** (no invented people, estimates labelled, real figures only from 50+ submissions, sources linked, non-explicit wording, honest dates), corrections policy, precise "how the data works". AboutPage JSON-LD. | E-E-A-T Who/How/Why. |
| `/privacy`, `/cookies` | **Rewritten to match the code** (see "Legal pages" below). | They listed `rpt_progress`, `rpt_age_ok`, `rpt_consent`, an age gate and a "manage choices" link, none of which exist. |
| `/results` (noindex) | Opt-in panel rebuilt (below). "Next steps" are now about the reader's number: their lookup row, their age group, the notes, what a score can't tell you. | Engagement, a linkable data asset. |
| `/`, `/test`, `/blog/how-to-take-rice-purity-test`, `/contact`, `/disclaimer` | Home FAQ deep-links "kissed horizontally" (#q10) and "kissed for more than two hours consecutively" (#q14). How-to: "saved in your browser session" was wrong (it's local storage); links to the notes and the calculation. Help line linked on contact/disclaimer. ContactPage JSON-LD. | Accuracy and internal links. |
| All guides | "About this guide" block: publisher, real review date and first-published date (both already in the BlogPosting markup), editorial rules, sources, corrections address. `.eyebrow` labels are sentence case. | Trust signals for readers and AdSense reviewers. |

No title, H1, canonical, robots value or URL changed in v2.

### Query coverage (tk-seo-run 3c)

#### Cluster summary (28 days, 2026-08-30 → 2026-09-26, under-18 queries removed)

Close variants are merged into one answer. "Before" is the branch as reviewed (`4e4157f`); "after" is this pass.

| Page | Query cluster | Queries | Impr | Clicks | CTR | Pos | Answered before | Answered after |
|---|---|---|---|---|---|---|---|---|
| `/rice-purity-test-average-score-by-age` | Overall average ("average rice purity score", "what is the average…") | 36 | 992 | 1 | 0.1% | 9.4 | Title, H1, first paragraph | Title, H1, H2 (answer box: "What is the average Rice Purity score?"), first paragraph |
| `/rice-purity-test-average-score-by-age` | Average by age | 8 | 517 | 69 | 13.3% | 3.1 | Title, H1, H2 table | Title, H1, H2 table |
| `/rice-purity-test-average-score-by-age` | A specific number ("68 rice purity score", "is 55 bad") | 70 | 252 | 0 | 0.0% | 9.9 | Nowhere (score-page lookup, one link) | H2 "Is my score normal for my age?" + link to the lookup (one table, no per-score pages) |
| `/rice-purity-test-average-score-by-age` | Average / normal at 18 | 7 | 101 | 10 | 9.9% | 3.7 | H2 "…for an 18-year-old?" (range in words only) | H2 "…for an 18-year-old?" + 40–60 word answer with the estimated range |
| `/rice-purity-test-average-score-by-age` | Normal / good score ("what is a normal rice purity score") | 14 | 52 | 0 | 0.0% | 10.4 | Nowhere on this page (score-page FAQ only) | H2 "What is a normal Rice Purity score?" |
| `/rice-purity-test-average-score-by-age` | Ranges / chart | 8 | 39 | 0 | 0.0% | 10.7 | H2 table | H2 table |
| `/rice-purity-test-average-score-by-age` | Specific adult ages 19–22 ("…for 19 year old", "im 19") | 5 | 31 | 0 | 0.0% | 5.6 | Body (one sentence) | H2 "Average score at 19, 20, 21 and 22" |
| `/rice-purity-test-average-score-by-age` | Navigational / brand / competitor / off-topic | 6 | 12 | 0 | 0.0% | 10.8 | n/a | n/a (not targeted) |
| `/rice-purity-test-average-score-by-age` | Statistics / distribution / rankings | 5 | 12 | 0 | 0.0% | 11.5 | Body ("Where these numbers come from") | H2 "How we estimate these ranges" (method + the Rice Thresher's published figure) |
| `/rice-purity-test-average-score-by-age` | Score meaning (belongs to /rice-purity-test-score) | 3 | 9 | 0 | 0.0% | 10.7 | Link to score lookup | Link to score page (owner) |
| `/rice-purity-test-average-score-by-age` | Other adult ages ("i'm 28") | 1 | 1 | 0 | 0.0% | 1.0 | H3 (26–30 group) | H3 (26–30 group) |
| `/blog/average-rice-purity-test-score` | Overall average ("average rice purity score", "what is the average…") | 11 | 67 | 0 | 0.0% | 32.5 | Answered on the age page (the 301 target) | Answered on the age page (the 301 target) |
| `/blog/average-rice-purity-test-score` | A specific number ("68 rice purity score", "is 55 bad") | 7 | 28 | 0 | 0.0% | 42.2 | Answered on the age page (the 301 target) | Answered on the age page (the 301 target) |
| `/blog/average-rice-purity-test-score` | Ranges / chart | 4 | 16 | 0 | 0.0% | 26.8 | Answered on the age page (the 301 target) | Answered on the age page (the 301 target) |
| `/blog/average-rice-purity-test-score` | Average by age | 4 | 11 | 0 | 0.0% | 36.4 | Answered on the age page (the 301 target) | Answered on the age page (the 301 target) |
| `/blog/average-rice-purity-test-score` | Statistics / distribution / rankings | 5 | 11 | 0 | 0.0% | 13.8 | Answered on the age page (the 301 target) | Answered on the age page (the 301 target) |
| `/blog/average-rice-purity-test-score` | Normal / good score ("what is a normal rice purity score") | 6 | 8 | 0 | 0.0% | 39.8 | Answered on the age page (the 301 target) | Answered on the age page (the 301 target) |
| `/blog/average-rice-purity-test-score` | Navigational / brand / competitor / off-topic | 2 | 6 | 0 | 0.0% | 20.7 | Answered on the age page (the 301 target) | Answered on the age page (the 301 target) |
| `/blog/average-rice-purity-test-score` | Average / normal at 18 | 1 | 1 | 0 | 0.0% | 18.0 | Answered on the age page (the 301 target) | Answered on the age page (the 301 target) |
| `/rice-purity-test-score` | Score meaning ("rice purity test score meaning") | 29 | 377 | 2 | 0.5% | 12.8 | Title, H1 | Title, H1, H2 (answer box: "What does your Rice Purity score mean?"), first paragraph |
| `/rice-purity-test-score` | "Rice purity (test) score(s)", results, typos | 17 | 218 | 2 | 0.9% | 12.1 | Title, H1 | Title, H1 |
| `/rice-purity-test-score` | A specific number ("77 rice purity score", "is 85 good") | 54 | 117 | 0 | 0.0% | 12.4 | H2 lookup + H3 for 77, 55, 76/68 | H2 lookup (every row has an anchor) + H3 "The numbers people ask about most": 85, 77, 68/65, 55, with nearby numbers folded in |
| `/rice-purity-test-score` | How it is calculated / scored / works / weighted | 15 | 32 | 0 | 0.0% | 12.3 | H2 "How the score is calculated" | H2 "How is the Rice Purity score calculated?" (covers weighting and "out of 100") |
| `/rice-purity-test-score` | Scale / chart / range | 10 | 29 | 0 | 0.0% | 19.8 | H2 "Rice Purity score chart" | H2 "Rice Purity score chart, from 100 to 0" (first line names the scale) |
| `/rice-purity-test-score` | Navigational / brand / competitor / off-topic | 11 | 28 | 0 | 0.0% | 23.4 | n/a | n/a (not targeted) |
| `/rice-purity-test-score` | High / low / bad / better / highest | 11 | 19 | 0 | 0.0% | 26.3 | H3 FAQ | H3 FAQ, answers lead with what high and low mean |
| `/rice-purity-test-score` | Belongs to another guide (average by age, test meaning, stats) | 5 | 10 | 0 | 0.0% | 33.9 | Related-guide cards | Contextual links to /rice-purity-test-average-score-by-age and /rice-purity-test-meaning in the first sections |
| `/rice-purity-test-meaning` | Test meaning / definition ("rice purity test meaning") | 13 | 135 | 0 | 0.0% | 12.7 | Title, H1 ("What Is…"), first paragraph | Title, H1, H2 (answer box: "What the Rice Purity Test means"), first paragraph |
| `/rice-purity-test-meaning` | Score meaning (owner: /rice-purity-test-score) | 7 | 66 | 0 | 0.0% | 32.3 | Body link (fourth section) | Link in the first paragraph to the owner page |
| `/rice-purity-test-meaning` | Navigational / brand / competitor / off-topic | 1 | 5 | 0 | 0.0% | 13.6 | n/a | n/a (not targeted) |
| `/rice-purity-test-meaning` | MPS meaning | 3 | 3 | 0 | 0.0% | 27.3 | H2 "What does MPS mean?" | H2 "What does MPS mean on the Rice Purity Test?" |
| `/rice-purity-test-meaning` | When it was made | 1 | 1 | 0 | 0.0% | 10.0 | H2 "Why is it called…" (1924 in body) | Same, plus the 1924 source |
| `/rice-purity-test-questions` | Questions explained / meaning | 4 | 38 | 12 | 31.6% | 7.8 | Title, H1 | Title, H1, notes on 55 items |
| `/rice-purity-test-questions` | The question list ("rice purity test questions", "all 100") | 11 | 29 | 0 | 0.0% | 21.3 | Title, H1, H2 | Title, H1, H2 |
| `/rice-purity-test-questions` | Navigational / brand / competitor / off-topic | 4 | 8 | 0 | 0.0% | 21.2 | n/a | n/a (not targeted) |
| `/rice-purity-test-questions` | Belongs to another guide (how the score works, what it says about you, meaning) | 4 | 4 | 0 | 0.0% | 46.5 | Related-guide cards | Contextual links to /rice-purity-test-score |
| `/rice-purity-test-questions` | "What does the question mark mean" | 1 | 2 | 0 | 0.0% | 9.5 | H2 | H2 (and linked from the jump list) |
| `/rice-purity-test-questions` | Categories | 1 | 1 | 0 | 0.0% | 10.0 | H2 "How the 100 questions are grouped" | H2 + first line uses "categories" |
| `/` | Navigational / brand / competitor / off-topic | 13 | 28 | 0 | 0.0% | 15.9 | n/a | n/a (not targeted) |
| `/` | Free test | 3 | 27 | 1 | 3.7% | 10.1 | Title, hero line | Title, hero line |
| `/` | 100 questions | 3 | 6 | 0 | 0.0% | 7.5 | Title, H2 (hero) | Title, H2 (hero) |
| `/` | Item 14, "kissed for more than two hours consecutively" | 3 | 4 | 0 | 0.0% | 1.0 | Nowhere on home (note on /rice-purity-test-questions) | Home FAQ links to the note (#q14) on the questions page |
| `/blog/how-to-take-rice-purity-test` | Navigational / brand / competitor / off-topic | 2 | 4 | 1 | 25.0% | 10.0 | n/a | n/a (not targeted) |
| `/blog/how-to-take-rice-purity-test` | How the score works (belongs to /rice-purity-test-score) | 2 | 2 | 0 | 0.0% | 65.5 | Body link | Link to the calculation section |
| `/blog/how-to-take-rice-purity-test` | "Streaking" (not an item on this list) | 1 | 1 | 0 | 0.0% | 35.0 | Nowhere | Nowhere, not on the list (no action) |

Dropped before analysis: 24 under-18 queries (219 impressions). They are not targeted anywhere.

Pages with only navigational impressions (`/about`, `/blog`, `/contact`, `/cookies`, `/disclaimer`, `/privacy`, `/terms`, `/test`) are left out of the summary; their queries are brand or off-topic. `/rice-purity-test-history` had no query rows in this window.

The per-query rows are in the appendix at the end of this file. The table is built by the script `coverage.py` (kept in the session scratchpad) from the dashboard export.

What was **not** added, on purpose:
- No per-score or per-age pages, and no heading per number. The specific-number queries go to one lookup table and four merged answers.
- Nothing for the 24 dropped under-18 queries. "What about people under 18?" is unchanged: it asks them to skip the test.
- "kissed horizontally" and "sensual context" have no impressions in this 28-day window (0 rows), but they are the phrases readers most often misread, so their notes stay and they are in the jump row.
- "Streaking", "rice purity test for kinks", competitor domains and other off-topic or navigational queries: not targeted.

### Answer placement (first mobile viewport, 390×844)

| Page | Primary answer | In the first viewport? |
|---|---|---|
| Age | "The average Rice Purity score is an estimated 62 to 68" + the two figures | Yes (`v2-age-390-fold.png`) |
| Score | "Your score is … 100 minus the number of boxes you check" | Yes (`v2-score-390-fold.png`) |
| Questions | Four-fact summary, then the list heading and jump row | Yes; the first group starts just below (`v2-questions-390-fold.png`) |
| Meaning | The one-paragraph definition | Yes |
| History, how-to | Lead paragraph | Yes |

Every in-page anchor and internal link on the 16 routes was crawled on the local build (TOC entries, `#q14`, `#score-71`, `#where-numbers-come-from`, `#normal-score`, `/about#how-we-write`, `/privacy#score-submission`, `/cookies#consent-cookies`): no broken link, anchor or JSON-LD block.

### Internal links added (contextual, never footer)

| From | To | Anchor |
|---|---|---|
| Age (method, step 1) | Questions | "100 questions" |
| Age ("normal" answer) | Score `#common-questions` | "whether a higher or lower score is better" |
| Age ("Is my score normal…") | Score `#score-lookup` | "score lookup" |
| Score (calculation) | Questions; Meaning | "100 questions"; "what the Rice Purity Test is" |
| Score (lookup intro, FAQ) | Age `#where-numbers-come-from`, `#normal-score` | "how we estimate them"; "what counts as normal at each age" |
| Questions (grouping) | Age | "average score by age" |
| Questions (before you start) | How-to | "how to take the test" |
| Meaning (answer box; how it works) | Score; Age | "Rice Purity score meaning, range by range"; "typical scores by age" |
| Home FAQ | Questions `#q10`, `#q14` | the item's own wording |
| How-to | Questions; Score `#how-calculated` | "questions page"; "how the score is calculated" |
| Results "Next steps" | Score `#score-<band>`, Age `#at-a-glance`, Questions, Meaning | "What a 72 means", "Compare with your age group", … |

### E-E-A-T and trust

- **Who:** "Rice Purity Test App, a site run by Teknoesis" on every guide and on `/about`, with the two email addresses already in the footer. No people, credentials or bios are named, because none stand behind the content. BlogPosting `author` stays the Organization.
- **How:** `/about#how-we-write` (editorial rules) and the age page's "How we estimate these ranges" (method, the one outside figure, its limits, the 50-response rule for real data).
- **Sources:** Rice Thresher 2017 article (`ricethresher.org`), the 1924 *Thresher* issue (Rice University Digital Collections), The Independent (July 11, 2022), Wikipedia. All links checked on 2026-09-30. Every new number on the site traces to one of them.
- **Dates:** one module (`src/lib/dates.ts`) feeds the visible "Last reviewed", BlogPosting `dateModified` and sitemap `lastmod`. Moved to 2026-09-30 only where the main content changed: age, score, questions, history, `/blog`, `/about`, `/privacy`, `/cookies`. Unchanged: home, test, meaning, how-to, contact, terms. The how-to's BlogPosting now carries its real `dateModified` (2026-09-27, as in the sitemap) instead of defaulting to its publish date.
- **Structured data:** Organization gains `email`, two `contactPoint`s (support, press), `parentOrganization` Teknoesis and `publishingPrinciples` → `/about#how-we-write`, all visible on the site. New: AboutPage, ContactPage, CollectionPage + ItemList on `/blog`. Still no FAQPage, HowTo or ratings.

### Opt-in score submission (off unless `NEXT_PUBLIC_STATS_ENABLED=1` and the Upstash env are set)

- **One tap:** eight age-band buttons; tapping one sends the score and that band. No pre-selection, and nothing is sent until a band is tapped.
- **Consent first:** the text above the buttons says exactly what is sent (score, band, 18+ confirmation), what isn't (answers), and that the country is counted separately, with a link to `/privacy#score-submission`. The old text said "only the number and the age band", but the API also counts the country, so it was fixed.
- **No dark patterns:** a "No thanks" button of the same weight ("Nothing was sent"), plain error text ("nothing was added"), and no nagging (the `rpt-score-submitted` marker stops it reappearing). Screens: `v2-results-optin-panel-*.png` and `v2-results-optin-done-*.png`.
- **Linkable asset:** the age page's method section already promises real figures once a band has 50 responses; `LiveStats` shows them with the count. The band reads now run in parallel (`Promise.all`).

### Legal pages (checked against the code)

| Item | Where it comes from | Now stated |
|---|---|---|
| `rice-purity-answers`, `rice-purity-score` | `lib/constants.ts`, `TestForm`, `ResultsView` | Local storage, never sent, cleared by reset / "Start over" / clearing site data |
| `rpt-score-submitted` | `ScoreSubmit` | Local storage, only after an opt-in submission |
| Cookies set by the site's own code | none (`document.cookie` is never used) | "The site's own code sets no cookies" |
| `_ga`, `_ga_<ID>` (2 years) | GA4 tag in `layout.tsx` (live ID present in production) | GA section with Google's cookie page and opt-out add-on; the `test_complete` event carries no score |
| `__gads`, `__gpi` (13 months), `__eoi` (6 months), `id` on doubleclick.net (13 months EEA/UK, 24 elsewhere), `test_cookie` (15 min) | AdSense tag in `layout.tsx`; lifetimes from Google's "Cookies used by Google advertising products" | AdSense section with the required disclosures, Ads Settings, aboutads.info, youronlinechoices.eu, and "How Google uses information from sites or apps that use our services" |
| `FCCDCF` (13 months), `FCNEC` (365 days) | Google's consent message, once the owner turns it on | "Consent in the EEA, the UK and Switzerland": shown to visitors there; to change a choice, clear the site's cookies and reload |
| Score submission | `api/scores/route.ts`, `lib/stats.ts` | Counters per score and band, a separate country counter, a 12-hour one-way IP hash for rate limiting, Upstash, 50-response publishing rule; says so when the feature is off |
| Request logs | Vercel hosting | Standard log data, Vercel's privacy notice |
| Removed | — | `rpt_progress`, `rpt_age_ok`, `rpt_consent`, the age gate, the "manage choices" footer link, "legal basis is your consent" for everything |

### AdSense "low value content" readiness

| Check | Status | Evidence |
|---|---|---|
| Every nav item leads to a substantive, original page | Done | Header: questions, score, age, `/blog` hub, test. Footer: 6 guides, about, contact, 4 legal pages. `/blog` is now a real hub. |
| About, contact, privacy, terms, cookies, disclaimer work and are accurate | Done | All 200; privacy and cookies rewritten from the code; about names the publisher and editorial rules. |
| No thin, placeholder or empty pages on indexable URLs | Done | `LiveStats` and the opt-in render nothing when off, and the copy around them says so. `/results` stays noindex. No "coming soon". |
| No broken links | Done | Local crawl of 16 routes: 0 broken links or anchors. External links checked 2026-09-30. |
| 18+ notice visible | Done | Home hero, start of `/test`, every footer; "For adults 18+" meta line on every guide. |
| Non-explicit content | Done | New notes are one-line, clinical definitions of wording or scope; items that are already plain have no note, and nothing describes an act. Guides unchanged in tone. |
| Original value | Done | Item-by-item notes on 55 items, the estimate method with a primary source, the lookup, the history's primary sources. |
| Ads never above the main answer, never in the test, ≤ 2 per guide | Done (code off) | `AdSlot` positions unchanged: guides `*-mid` below the answer + `*-end` after the article; home 1; results 1; `/test` none. Off unless `NEXT_PUBLIC_ADSENSE_SLOTS` is set. |
| Privacy & messaging GDPR message | **Owner** | Must be ON before this merges, or the privacy page's consent section is inaccurate. |
| Re-apply | **Owner** | After the merge is live and the consent message shows (see below). |

#### Recommended AdSense setup (owner, in AdSense)

1. **Privacy & messaging → European regulations → create and publish** the GDPR message for ricepuritytestapp.com. In its settings, turn on **consent mode for advertising purposes and for analytics purposes** (so the choice also covers Google Analytics, as the privacy page says), and turn on Google's revocation link so visitors can reopen their choice.
2. **Auto ads: off** for this site, or, if kept, turn **off anchor and vignette ads on mobile** and keep in-page formats only. The one CLS spike measured on production (0.72, see "Before / after") pointed to auto-ads.
3. **Manual units at the `AdSlot` positions** only, after the owner approves the placements: `*-mid` (after the main answer) and `*-end` (after the article) on guides, `home-mid`, `results-mid`. Each slot reserves 280px (250px from 768px), so a responsive display unit fills it without layout shift. Nothing on `/test`.
4. Keep `ads.txt` as is. The site will likely get **limited ads** because of the topic. That's expected and not a policy problem.

### Ad slot positions (unchanged in v2)

| Page | Slots | Positions |
|---|---|---|
| Age, score, questions, meaning, history, how-to | 2 each | `*-mid`: below the answer box and the first section; `*-end`: after the article and "About this guide", before related guides |
| Home | 1 | after the score table |
| Results | 1 | after share and opt-in |
| Test | 0 | — |

### Verification (v2)

Lighthouse 12.8, mobile, simulated throttling, 3 runs per page on the final local build (own headless Chrome 153):

| Page | Perf (runs) | A11y | Best practices | SEO | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|
| `/` | **99** (99/99/99) | 100 | 79 | 100 | 2.2s | 12ms | 0.000 |
| `/test` | **99** (99/99/99) | 100 | 79 | 100 | 2.1s | 10ms | 0.000 |
| `/rice-purity-test-average-score-by-age` | **99** (99/99/99) | 100 | 79 | 100 | 2.2s | 0ms | 0.000 |
| `/rice-purity-test-questions` | **99** (99/99/99) | 100 | 79 | 100 | 2.2s | 0ms | 0.000 |

Target (≥ 99 / 100 / 100) met on every run. Best practices stays at 79 for the same reason as v1: the AdSense tag's third-party cookie (`third-party-cookies`, `inspector-issues`), which is the only failing audit.

Word count of the main content (same method for both columns: text inside `<main>`, breadcrumbs excluded, related-guide cards and CTA included):

| Route | v1 | v2 | Main reason |
|---|---|---|---|
| `/rice-purity-test-average-score-by-age` | 1451 | 1885 | Method section, normal-score and 19–22 answers, "About this guide" |
| `/rice-purity-test-score` | 1346 | 1609 | Direct answer, merged answers for four numbers, "About this guide" |
| `/rice-purity-test-questions` | 1944 | 2583 | Notes on 37 more items, jump row |
| `/rice-purity-test-meaning` | 794 | 920 | Answer-box link, sources, "About this guide" |
| `/rice-purity-test-history` | 648 | 861 | Sourced facts, 2017 entry, sources |
| `/blog` | 194 | 424 | Hub: key answers, summaries, "How these guides are made" |
| `/blog/how-to-take-rice-purity-test` | 825 | 922 | Link paragraph, "About this guide" |
| `/about` | 370 | 599 | Editorial standards, corrections |
| `/privacy` | 580 | 1274 | Rewrite |
| `/cookies` | 165 | 580 | Rewrite |
| `/` | 1474 | 1484 | FAQ links |

- `npm ci`, `npx tsc --noEmit` and `npm run build` pass. The build's route list is identical to v1 and production.
- **Sitemap:** the same 13 URLs in the same order. `lastmod` moved to 2026-09-30 for the 7 of them whose content changed (age, score, questions, history, `/blog`, `/about`, `/privacy`), matching `dateModified`. `/cookies` and `/disclaimer` are still not in the sitemap (unchanged; worth adding in a later change).
- **Screenshots:** `redesign-shots/v2-<page>-390.png`, `-1280.png` and `-fold` variants for home, test, results, age, score, questions, meaning, history, blog, how-to, about, privacy and cookies; opt-in states in `v2-results-optin-*`. No horizontal scroll at 390px on any page.

### Policy check (tk-policy-check on `git diff 4e4157f...HEAD`)

**POLICY CHECK: PASS.** Two items need the owner at PR: the protected pages' content changes (#11) and turning on the consent message before merge (#13). Policy file `last_verified: 2026-09-29`.

| # | Rule | Result | Evidence |
|---|---|---|---|
| 1 | Scaled content | PASS | No new pages or URLs. New text lives on existing pages: notes on one page, one merged "numbers people ask about" section, one method section. |
| 2 | Doorways | PASS | No per-score, per-age or per-keyword pages. Specific numbers are answered in one table and one section; ages 19–22 share one H2. |
| 3 | Keyword stuffing / hidden text | PASS | Each new H2 mirrors one question once ("What is a normal Rice Purity score?", "Average score at 19, 20, 21 and 22", "Is my score normal for my age?"). Close variants are merged into one answer. No hidden text added; the jump row and all notes are visible. |
| 4 | Link spam / network | PASS | No links to any site in `seo/sites.yaml`. New external links: ricethresher.org, digitalcollections.rice.edu, independent.co.uk, Google policy pages, Vercel's privacy notice, aboutads.info, youronlinechoices.eu, findahelpline.com. None paid; all `rel="noopener"`. New internal links are contextual, not footer or sitewide. |
| 5 | Fake people / experience | PASS | No authors, bios, credentials, reviews or ratings. The publisher is stated as the About page already did ("run by Teknoesis"). Every new number is sourced and linked: Thresher 2017 (65 average on one day, ~274 tests, 1.5M visits, the 1924 average of 62 and the 58/119 and 4/119 answers). |
| 6 | Helpful content | PASS | Answers the unanswered query clusters in the coverage table; the notes explain real wording. Accuracy fixes: privacy/cookies, how-to "session", The Independent's date (2022, not 2021), the 55-score answer ("late twenties onward", matching the estimates), the hub's "orientation handout" blurb, and the opt-in text that omitted the country count. |
| 7 | Fake freshness | PASS | `dateModified`, visible "Last reviewed" and sitemap `lastmod` moved to 2026-09-30 only on pages whose main content changed (age, score, questions, history, /blog, /about, /privacy, /cookies). Home, test, meaning, how-to, contact and terms keep their dates. No year in any title. |
| 8 | Titles | PASS | No title, meta description or H1 changed in v2. |
| 9 | Structured data | PASS | Organization adds `email`, `contactPoint` (support, press), `parentOrganization` and `publishingPrinciples`, all visible on the site. AboutPage, ContactPage and CollectionPage + ItemList match visible content. No FAQPage, HowTo, ratings or reviews. All 16 routes' JSON-LD parses. |
| 10 | Indexability | PASS | Robots, canonicals and the www host unchanged. The sitemap has the same 13 URLs; the route list is identical. |
| 11 | Protected URLs | PASS (confirm) | `/rice-purity-test-average-score-by-age` and `/rice-purity-test-questions` keep their paths, titles and H1s. Their content grows (new answer sections; notes on 55 items): **owner approval at PR**, as for v1. |
| 12 | 18+ | PASS | The 24 under-18 queries were dropped before analysis and nothing targets them. The notes don't address minors. Opt-in bands start at 18 and the tap confirms 18+. The 18+ notices are unchanged: hero, test, footer, guide meta lines. |
| 13 | AdSense | PASS (confirm) | No ad code, tag, `ads.txt` or `AdSlot` position changed; still ≤ 2 slots per guide and none on `/test`. New notes are short and clinical and never describe acts. The privacy page now carries AdSense's required disclosures. **The consent section describes Google's consent message, so the owner must turn it on before merging.** |
| 14 | AI images | PASS | No images added. |
| 15 | Human gate | PASS | Local commits only. Nothing pushed, merged, deployed or redirected, and no page created. |
| 16 | Indexing API | PASS | Not used. |

Also checked: the **September 2026 spam update** (started 2026-09-24) was still rolling out on 2026-09-30. Don't deploy, or judge results, until 7 days after it completes. The 28-day rule from the 2026-09-27 rewrite still applies (earliest clean ship date 2026-10-25).

## Content audit (Stage 1)

Known search data (from the brief, 3 months): 437 clicks and 31.5K impressions, average position 9.6. 58% of clicks land on `/rice-purity-test-average-score-by-age` and `/rice-purity-test-questions` comes second. The query "average rice purity score" has 1,223 impressions at position 10 with 0 clicks. No other per-page GSC numbers were available. Under-18 queries are excluded by rule.

| Route | Intent | Decision | 18+ check | Notes |
|---|---|---|---|---|
| `/` | Take the test / what it is | **Keep**, restructure | "For adults 18+" note in hero, FAQ age answer, footer | The page was `'use client'`, with pulsing and fade-in animations that delayed LCP. Now a server component. Accuracy: "answers are not stored" was wrong (they're saved in the browser); now "never leave your browser". |
| `/test` | Take the test | **Keep**, rebuild UI | 18+ notice at start and in footer | Same 100 questions in HTML, same localStorage key. |
| `/results` | Personal result | **Keep**, rebuild UI | footer notice | Was `noindex, nofollow` with the home canonical inherited. Now `noindex, follow` with a self canonical. |
| `/rice-purity-test-average-score-by-age` | Average score, by age (protected) | **Keep**, answer-first, retitle | "What about people under 18?" says no under-18 figures and asks them to skip | Estimate now in the title, meta and first line, still labelled as an estimate. |
| `/rice-purity-test-questions` | The question list (protected) | **Keep**, list first | "For adults 18+" meta line | The list now starts in the first mobile viewport. Per-question explanations for every item are a known opportunity that was **not** done (new content needs its own change). |
| `/rice-purity-test-score` | Score meaning, "is N good" | **Keep**, add one lookup table | meta line | Cannibalization with `/rice-purity-test-meaning` is limited: score = what a number means, meaning = what the test is. Titles unchanged, so no re-targeting was needed. |
| `/rice-purity-test-meaning` | What the test is | **Keep**, restyle | meta line | Content unchanged. |
| `/rice-purity-test-history` | History | **Keep**, restyle | adults-only line kept | Content unchanged. |
| `/blog` | Guide hub | **Keep**, restyle | — | Content unchanged. |
| `/blog/how-to-take-rice-purity-test` | How to take it | **Keep**, restyle | — | Accuracy: "nothing stored" contradicted "progress saves automatically"; fixed. "Expert tips" removed from its OG/schema descriptions (no expert stands behind it). |
| `/about` | Who runs the site | **Keep**, restyle | "intended for adults aged 18 and over" | "tell me and I will fix it" → "tell us and we will fix it" (company-run site). |
| `/contact`, `/disclaimer` | Contact / legal | **Keep**, restyle | disclaimer has an age section | Both linked to `/help`, which returns 404. Replaced with the support pointers already used on the questions page (988 in the US, findahelpline.com). No new page. |
| `/privacy`, `/terms`, `/cookies` | Legal | **Keep**; privacy and cookies **rewritten in v2** | age sections kept | v1 left these unchanged and flagged them: the cookie table listed `rpt_progress`, `rpt_age_ok` and `rpt_consent`, an age gate and a "manage choices" footer link, none of which exist. **Fixed in v2:** both pages now match the code (see "Legal pages" under "Second pass (v2)"). |

No page was merged, removed or redirected. No new indexable page was created.

## Design system (Stage 2)

- **Palette** (tokens in `src/app/globals.css`, mapped in `tailwind.config.ts`). Warm paper `#FAF8F3` background, white surfaces, ink `#16211C` text (15.6:1), secondary text (8.6:1 and 5.2:1), deep green brand `#0B6E53` (white on brand 6.2:1), soft green answer boxes, an amber "note" pair for estimates and the 18+ notice (6.0:1), and a blue focus ring `#1D4ED8`. Checkbox borders meet 3:1 (WCAG 1.4.11). Light mode only. Dark mode was left out on purpose: auto ads render on light backgrounds, and a half-tested dark theme would be worse than none.
- **Type.** Headings use Fraunces 600, self-hosted via `next/font` (one 18 KB woff2, size-adjusted fallback, so no layout shift). Body text uses the system UI stack, so it costs no bytes and paints instantly. The fluid scale runs display, h1, h2, h3, lead, body (17px), small and xs. Reading measure is 68ch.
- **Shape and space.** Radius 6/10/16/22px, two shadow levels, a 44px `tap` spacing token for every control, and Tailwind's 4px spacing scale.
- **Components.** `Button`/`ButtonLink`, `Logo`, `Icon`, `JsonLd` (atoms); `Breadcrumbs` (visible + JSON-LD), `KeyAnswer`, `AdultNotice`, `Toc`, `ScoreScale` (molecules); `Header`, `Footer`, `TestForm`, `ResultsView`, `SharePanel`, `ScoreSubmit`, `LiveStats`, `RelatedGuides`, `CtaBox`, `AdSlot` (organisms); `GuideLayout`, `LegalLayout` (templates).
- **Motion.** Colour and border transitions only, plus a 700 ms score count-down on results. `prefers-reduced-motion` turns them off.

### Key screens

1. **Home.** Value proposition, one primary CTA and the 18+ note. The scoring card shows the estimated average on a 0–100 scale. Guide cards show their answer (for example "Estimated average: 62–68" and each age's range).
2. **Test.** Six themed sections, a fixed-height sticky bar ("x of 100 checked", section x of 6, "Calculate my score"), full-width tap rows, and reset with confirmation.
3. **Results.** Large score, band and meaning; a scale with the reader's marker; the estimated range per age bracket with within/above/below (labelled as estimates); share; opt-in submission when enabled; next steps.
4. **Guides.** Answer-first: the key answer sits in the first mobile viewport (the average on the age page, the list start on the questions page), with a table of contents, related guides and a CTA.

## Decisions

- **URLs.** Every route keeps its path. The build route list and `sitemap.xml` are byte-identical to production. `next.config.js`, `vercel.json` and `public/` (ads.txt, robots.txt, llms.txt, manifest, images) are untouched. The redirects, CSP and headers are unchanged.
- **AdSense.** The `<head>` script and `google-adsense-account` meta are unchanged on every page. `AdSlot` reserves space at 1–2 positions per page (home: after the score table; guides: after the main answer and before related guides; results: after share). It renders only when `NEXT_PUBLIC_ADSENSE_SLOTS` is set and contains no ad code. It never sits on `/test` or between a question and its answer.
- **Structured data.** Organization and WebSite are in one `@graph`. WebApplication (free, `suggestedMinAge` 18, no ratings) now appears only on `/` and `/test`, where the test is. BlogPosting stays on the guides with the Organization as author and unchanged dates. BreadcrumbList is now JSON-LD on every page with breadcrumbs. No FAQPage anywhere: those rich results are retired, and the policy check fails new FAQ markup.
- **Dates (v1).** No `dateModified`, visible "Last reviewed" date or sitemap `lastmod` was changed. (v2 moves them only on the pages whose content changed; see "E-E-A-T and trust" under "Second pass (v2)".) The two metadata edits and the new lookup are not a reason to bump them under tk-page-fix, since tk-page-fix treats title/meta tweaks as non-substantive.
- **Estimates.** The ranges live once in `src/lib/estimates.ts` and appear on the age, score, home and results pages with "estimate" labels. Real figures appear only through `LiveStats` (opt-in data, 50+ responses per band).
- **Client JS.** Only the test form, the results view, share and opt-in submit are client components. Home, guides and legal pages ship no page-level JS beyond the Next.js runtime.

## Before / after (Stage 4)

Lighthouse 12.8 (mobile, simulated throttling), median of 3 runs. The PageSpeed Insights API returned "quota exceeded" for anonymous use, so every run used local Lighthouse against headless Chrome 154. **Prod** = the live site today. **Main (local)** = `origin/main` built and served locally, the fair comparison for **Redesign (local)**.

| Page | Build | Perf | A11y | Best practices | SEO | LCP | TBT | CLS |
|---|---|---|---|---|---|---|---|---|
| `/` | Prod | **47** (38/47/92) | 95 | 79 | 100 | 4.4s | 21ms | 0.721 |
| `/` | Main (local) | **82** (82/82/85) | 95 | 79 | 100 | 4.9s | 0ms | 0.000 |
| `/` | Redesign (local) | **99** (99/99/99) | 100 | 79 | 100 | 2.2s | 10ms | 0.000 |
| `/test` | Prod | **50** (44/50/77) | 100 | 79 | 100 | 4.6s | 13ms | 0.519 |
| `/test` | Main (local) | **99** (99/99/99) | 100 | 79 | 100 | 2.2s | 5ms | 0.000 |
| `/test` | Redesign (local) | **99** (99/99/99) | 100 | 79 | 100 | 2.2s | 0ms | 0.000 |
| `/rice-purity-test-average-score-by-age` | Prod | **80** (49/80/91) | 96 | 79 | 100 | 3.7s | 30ms | 0.001 |
| `/rice-purity-test-average-score-by-age` | Main (local) | **99** (99/99/100) | 96 | 79 | 100 | 2.2s | 8ms | 0.000 |
| `/rice-purity-test-average-score-by-age` | Redesign (local) | **99** (99/99/99) | 100 | 79 | 100 | 2.2s | 0ms | 0.000 |
| `/rice-purity-test-questions` | Prod | **74** (55/74/77) | 96 | 79 | 100 | 4.5s | 12ms | 0.000 |
| `/rice-purity-test-questions` | Main (local) | **98** (98/98/98) | 96 | 79 | 100 | 2.3s | 2ms | 0.000 |
| `/rice-purity-test-questions` | Redesign (local) | **99** (99/99/99) | 100 | 79 | 100 | 2.2s | 0ms | 0.000 |

- **Performance and accessibility: target met.** The redesign scores 99 on every page, every run, with CLS 0 and TBT at most 10 ms. On `main`, the home page was at 82 (the hero fade-in animation delayed LCP to 4.9s), and accessibility was 95–96 because of low-contrast green text and buttons.
- **Best practices is capped at 79 by AdSense, on both builds.** The only failing audits are `third-party-cookies` (Google's `test_cookie` from `googleads.g.doubleclick.net`, set by the AdSense auto-ads request) and the matching `inspector-issues` cookie warning. Together they weigh 6 of 28 points, so no page can score above 79 while that tag runs. With `*googlesyndication.com*` and `*doubleclick.net*` blocked, the redesigned age page scores 98 / 100 / **100** / 100. Keeping the AdSense tag unchanged is a hard constraint, so this is an owner decision, not a code fix.
- **Production variance.** Prod performance swings 38–92 between runs because of network TTFB and ad loading. One of the three home runs recorded CLS 0.72 from a whole-body shift that never happens locally. That points to live AdSense auto-ads, which only serve on the approved domain. Re-measure on the Vercel preview and after deploy (PSI or CrUX). If it recurs, it comes from auto-ads settings, which are outside the code.

### Metadata changes

| Route | Field | Before | After |
|---|---|---|---|
| `/rice-purity-test-average-score-by-age` | title | Average Rice Purity Score by Age (18 to 31+) | Average Rice Purity Score by Age: an Estimated 62–68 |
| `/rice-purity-test-average-score-by-age` | description | The average Rice Purity score is estimated in the mid-60s, and most adults land between 55 and 75. Typical ranges for ages 18, 19-22, 23-25, 26-30 and 31+, and how to read yours. | The average Rice Purity score is an estimated 62 to 68, and most adults land between 55 and 75. Typical ranges for ages 18, 19-22, 23-25, 26-30 and 31+, and how to read yours. |
| `/rice-purity-test-average-score-by-age` | first line | The overall average Rice Purity score is roughly 62 to 68, so most people check about a third of the list. | **The average Rice Purity score is an estimated 62 to 68**, so most people check about a third of the list. |
| `/rice-purity-test-score` | description | What your Rice Purity score means, from 100 down to 0: how it is calculated, a score chart, what counts as normal, and whether a high or low score is better. | …a score chart, **a lookup for any number**, what counts as normal, and whether a high or low score is better. |
| `/results` | robots / canonical / description | noindex, nofollow / home URL / home description | noindex, follow / `/results` / its own description |
| `/blog/how-to-take-rice-purity-test` | OG, Twitter and schema description | "Expert tips…" | "Tips…" |

Every other title, description, H1, canonical and robots value is identical to production. H1s are unchanged on every page. `/results` gains a visible H1 ("Your Rice Purity score"); it previously had none.

### JSON-LD types per page

| Page group | Before | After |
|---|---|---|
| `/` | Organization, WebApplication, WebSite | Organization, WebSite (@graph), WebApplication |
| `/test` | Organization, WebApplication, WebSite | Organization, WebSite, WebApplication |
| Guides (5 + how-to) | BlogPosting, Organization, WebApplication, WebSite | BlogPosting, BreadcrumbList, Organization, WebSite |
| Blog index, about, legal | Organization, WebApplication, WebSite | BreadcrumbList, Organization, WebSite |
| `/results` | Organization, WebApplication, WebSite | Organization, WebSite |

All blocks parse as valid JSON. Markup matches visible content, with no ratings, reviews, FAQPage or HowTo.

### Word count of the main content

Counted from `<main>`, excluding nav, breadcrumbs and ad placeholders. Before = production HTML, after = local build.

| Route | Before | After | Change | Note |
|---|---|---|---|---|
| `/` | 1315 | 1491 | +13% | Key answers on the guide cards |
| `/test` | 787 | 892 | +13% | Section headings and counters |
| `/results` | 1 | 7 | +600% | Client-rendered; the HTML only has the heading and loading text |
| `/about` | 371 | 371 | +0% |  |
| `/contact` | 118 | 134 | +14% |  |
| `/cookies` | 169 | 169 | +0% |  |
| `/disclaimer` | 187 | 198 | +6% |  |
| `/privacy` | 583 | 583 | +0% |  |
| `/terms` | 269 | 269 | +0% |  |
| `/blog` | 175 | 193 | +10% |  |
| `/blog/how-to-take-rice-purity-test` | 685 | 770 | +12% |  |
| `/rice-purity-test-average-score-by-age` | 1288 | 1380 | +7% |  |
| `/rice-purity-test-history` | 549 | 623 | +13% |  |
| `/rice-purity-test-meaning` | 648 | 717 | +11% |  |
| `/rice-purity-test-questions` | 1780 | 1953 | +10% |  |
| `/rice-purity-test-score` | 953 | 1362 | +43% | The approved "is N a good score" lookup (20 rows) accounts for the increase; everything else is within ±15% |

A sentence-by-sentence check found every production sentence in the new pages. The exceptions are the deliberate accuracy fixes listed in the audit, the replaced `/help` references, and old UI strings (the logo's tagline "Mind. Unfiltered. Data.", "Start the Test", the old progress text).

### Screenshots

Stored outside the repo in the session scratchpad `redesign-shots/`, as `before-<page>-<w>.png` (production) and `after-<page>-<w>.png` (local build), for home, test, results (28 boxes checked, score 72), age and questions at 390px and 1280px. Each page has a full-page shot and a first-viewport `-fold` shot. `adslots-age-390.png` shows the reserved ad positions with `NEXT_PUBLIC_ADSENSE_SLOTS=1`.

### Checks run

- `npm ci`, `npx tsc --noEmit` and `npm run build` pass. Lighthouse numbers are above.
- A Playwright walkthrough at 390px confirmed that clicking row labels and pressing Space checks items, answers survive a reload, focus is never hidden under the sticky bar, and "Calculate my score" leads to results. Empty `/results` redirects to `/test`, "Start over" and reset (with confirm) clear storage, and `?score=` links work. There is no horizontal scroll on any page at 390px, and no console errors.
- With `NEXT_PUBLIC_ADSENSE_SLOTS=1`, the slots reserve 280px each and CLS stays 0.000 on all four pages.

### URL list

The build route list is identical before and after: `/`, `/about`, `/api/scores`, `/blog`, `/blog/how-to-take-rice-purity-test`, `/contact`, `/cookies`, `/disclaimer`, `/icon.svg`, `/privacy`, `/results`, `/rice-purity-test-average-score-by-age`, `/rice-purity-test-history`, `/rice-purity-test-meaning`, `/rice-purity-test-questions`, `/rice-purity-test-score`, `/sitemap.xml`, `/terms`, `/test`. `sitemap.xml` output is byte-identical, and the redirects in `next.config.js` and `vercel.json` are untouched.

### Policy check (tk-policy-check on `git diff ff83f69...HEAD`)

**POLICY CHECK: PASS.** One item needs the owner's confirmation at PR (#13). Policy file `last_verified: 2026-09-29`.

| # | Rule | Result | Evidence |
|---|---|---|---|
| 1 | Scaled content | PASS | No new pages. The one lookup table lives on the existing score page. |
| 2 | Doorways | PASS | No variant pages; no per-score or per-age URLs. |
| 3 | Keyword stuffing / hidden text | PASS | The age title uses the query once, with the estimate. `sr-only` text remains only for the skip link, an empty live region on /test and the noindexed /results. The score-lookup caption and home "Step N" labels are now visible (commit "Replace visually hidden labels…"). `AdSlot` renders an empty `aria-hidden` box. |
| 4 | Link spam / network | PASS | No links to any site in `seo/sites.yaml`. New links are same-site guide links. The only external links are the existing Wikipedia sources and user-initiated share intents. |
| 5 | Fake people / experience | PASS | No authors, ratings, reviews or stats added. "Expert tips" and the first-person "tell me / I will" were removed. BlogPosting author stays the Organization. |
| 6 | Helpful content | PASS | Copy kept (see the sentence check). Five accuracy fixes where the old copy said answers were "not stored". Estimates are labelled everywhere they appear. |
| 7 | Fake freshness | PASS | No change to `dateModified`, the visible "Last reviewed" dates, sitemap `lastmod` or years in titles. |
| 8 | Titles | PASS | One title changed, accurate and labelled as an estimate. H1s unchanged. |
| 9 | Structured data | PASS | Types match visible content. No FAQPage, HowTo, ratings or reviews. WebApplication's `suggestedMinAge` 18 matches the visible 18+ notices. |
| 10 | Indexability | PASS | No marketing page noindexed. `/results` goes from noindex,nofollow to noindex,follow. Canonicals and www host unchanged. robots.txt and sitemap unchanged. |
| 11 | Protected URLs | PASS | `/rice-purity-test-average-score-by-age` and `/rice-purity-test-questions` keep their paths. Their layout (both) and title/meta (age page only) change: **owner approval needed at PR**. |
| 12 | 18+ | PASS | "For adults 18+ only … If you're under 18, please skip this test" at the start of /test, in the home hero and in every footer. No text targets minors. The existing "What about people under 18?" section only asks them to skip. |
| 13 | AdSense | PASS (confirm) | The AdSense `<head>` tag, meta and ads.txt are unchanged, and no ad code was added. `AdSlot` adds reserved *positions* for future ad units, off unless `NEXT_PUBLIC_ADSENSE_SLOTS` is set. The brief asked for it, but the owner should confirm the placements before the flag is set or any unit is added. No explicit content. |
| 14 | AI images | PASS | No images added. |
| 15 | Human gate | PASS | Local commits only. Nothing pushed, merged, deployed or redirected, and no page created. |
| 16 | Indexing API | PASS | Not used. |

Also checked: the **September 2026 spam update** (started 2026-09-24) was still rolling out on 2026-09-30. Don't deploy, or judge results, until 7 days after it completes.


## Change-log rows (copy into `seo/changelog.md` at merge)

| Date | URL | Change | Why | GSC 28-day baseline | Review on |
|---|---|---|---|---|---|
| (merge date) | all routes | Visual/UX redesign; content kept | Mobile UX, a11y, CWV | pull at merge | merge + 28d |
| (merge date) | /rice-purity-test-average-score-by-age | Title, meta and first line state the estimated average (62–68) | "average rice purity score": 1,223 impr, pos 10, 0 clicks | pull at merge | merge + 28d |
| (merge date) | /rice-purity-test-score | One "is my score good" lookup table; meta mentions it | "is N a good score" queries | pull at merge | merge + 28d |
| (merge date) | /results | noindex,nofollow → noindex,follow; self canonical | Let crawlers follow links from a noindexed page | n/a | — |

## Appendix: every query behind the v2 coverage table

Under-18 queries are removed. 28 days, 2026-08-30 → 2026-09-26. "Cluster" maps each row to the summary table.

| Page | Query | Impr | Clicks | CTR | Pos | Cluster |
|---|---|---|---|---|---|---|
| `/rice-purity-test-average-score-by-age` | average rice purity score | 466 | 1 | 0.2% | 9.1 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | average rice purity score by age | 306 | 51 | 16.7% | 2.9 | Average by age |
| `/rice-purity-test-average-score-by-age` | rice purity test average score by age | 158 | 12 | 7.6% | 3.6 | Average by age |
| `/rice-purity-test-average-score-by-age` | average rice purity test | 68 | 0 | 0.0% | 9.0 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | rice purity test average | 67 | 0 | 0.0% | 11.6 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | average rice purity test score | 66 | 0 | 0.0% | 9.6 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | rice purity test average score | 58 | 0 | 0.0% | 9.3 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | average rice purity score for 18 year old | 56 | 4 | 7.1% | 3.5 | Average / normal at 18 |
| `/rice-purity-test-average-score-by-age` | what is the average rice purity score | 50 | 0 | 0.0% | 9.9 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | what is the average rice purity test score | 40 | 0 | 0.0% | 9.1 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | 76 rice purity test | 26 | 0 | 0.0% | 18.4 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | average rice purity | 22 | 0 | 0.0% | 8.9 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | whats the average rice purity score | 20 | 0 | 0.0% | 11.4 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | rice purity score by age | 18 | 2 | 11.1% | 4.2 | Average by age |
| `/rice-purity-test-average-score-by-age` | what's the average rice purity score | 18 | 0 | 0.0% | 8.7 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | 68 rice purity score | 17 | 0 | 0.0% | 7.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 65 rice purity score | 16 | 0 | 0.0% | 8.2 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | average rice purity score for 19 year old | 14 | 0 | 0.0% | 7.4 | Specific adult ages 19–22 ("…for 19 year old", "im 19") |
| `/rice-purity-test-average-score-by-age` | normal rice purity score for 18 year old | 13 | 3 | 23.1% | 3.4 | Average / normal at 18 |
| `/rice-purity-test-average-score-by-age` | average rice purity test score by age | 13 | 2 | 15.4% | 3.1 | Average by age |
| `/rice-purity-test-average-score-by-age` | average rice purity score for 20 year old | 13 | 0 | 0.0% | 4.4 | Specific adult ages 19–22 ("…for 19 year old", "im 19") |
| `/rice-purity-test-average-score-by-age` | average score on rice purity test | 13 | 0 | 0.0% | 9.0 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | rice purity test for 18 year olds | 11 | 1 | 9.1% | 5.9 | Average / normal at 18 |
| `/rice-purity-test-average-score-by-age` | 85 rice purity score | 11 | 0 | 0.0% | 9.4 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | what is average rice purity score | 11 | 0 | 0.0% | 8.6 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | what is a normal rice purity score | 10 | 0 | 0.0% | 9.9 | Normal / good score ("what is a normal rice purity score") |
| `/rice-purity-test-average-score-by-age` | whats the average rice purity test score | 10 | 0 | 0.0% | 10.3 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | rice purity average score by age | 9 | 1 | 11.1% | 2.0 | Average by age |
| `/rice-purity-test-average-score-by-age` | 78 rice purity score | 9 | 0 | 0.0% | 7.9 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 38 rice purity score | 8 | 0 | 0.0% | 9.9 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 62 rice purity score | 8 | 0 | 0.0% | 8.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 75 rice purity score | 8 | 0 | 0.0% | 10.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | rice purity score average | 8 | 0 | 0.0% | 9.8 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | rice purity test score ranges | 8 | 0 | 0.0% | 8.8 | Ranges / chart |
| `/rice-purity-test-average-score-by-age` | what is the average score on the rice purity test | 8 | 0 | 0.0% | 9.4 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | what's a normal rice purity score | 8 | 0 | 0.0% | 9.9 | Normal / good score ("what is a normal rice purity score") |
| `/rice-purity-test-average-score-by-age` | rice purity test average by age | 7 | 1 | 14.3% | 2.3 | Average by age |
| `/rice-purity-test-average-score-by-age` | 18 rice purity score | 7 | 0 | 0.0% | 7.9 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 31 rice purity score | 7 | 0 | 0.0% | 7.6 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | average score rice purity test | 7 | 0 | 0.0% | 8.7 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | rice purity score chart | 7 | 0 | 0.0% | 9.7 | Ranges / chart |
| `/rice-purity-test-average-score-by-age` | rice purity score range | 7 | 0 | 0.0% | 10.0 | Ranges / chart |
| `/rice-purity-test-average-score-by-age` | rice purity test ranges | 7 | 0 | 0.0% | 11.3 | Ranges / chart |
| `/rice-purity-test-average-score-by-age` | whats a normal rice purity score | 7 | 0 | 0.0% | 9.7 | Normal / good score ("what is a normal rice purity score") |
| `/rice-purity-test-average-score-by-age` | average rice purity score 18 year old | 6 | 1 | 16.7% | 3.5 | Average / normal at 18 |
| `/rice-purity-test-average-score-by-age` | average rice purity test score for 18 year old | 6 | 1 | 16.7% | 3.0 | Average / normal at 18 |
| `/rice-purity-test-average-score-by-age` | 22 rice purity score | 6 | 0 | 0.0% | 10.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 55 rice purity score | 6 | 0 | 0.0% | 8.8 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 60 rice purity score | 6 | 0 | 0.0% | 9.3 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | avg rice purity score | 6 | 0 | 0.0% | 9.2 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | normal rice purity score | 6 | 0 | 0.0% | 11.0 | Normal / good score ("what is a normal rice purity score") |
| `/rice-purity-test-average-score-by-age` | rice purity average score | 6 | 0 | 0.0% | 10.3 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | what is the average rice purity score for an 18 year old | 6 | 0 | 0.0% | 3.0 | Average / normal at 18 |
| `/rice-purity-test-average-score-by-age` | 30 rice purity score | 5 | 0 | 0.0% | 9.4 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 32 rice purity score | 5 | 0 | 0.0% | 7.4 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 78 rice purity | 5 | 0 | 0.0% | 9.2 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | average purity test score | 5 | 0 | 0.0% | 9.0 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | average score for rice purity test | 5 | 0 | 0.0% | 7.6 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | is 53 a bad rice purity score | 5 | 0 | 0.0% | 8.2 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 55 rice purity bad | 5 | 0 | 0.0% | 9.4 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 68 a good rice purity score | 5 | 0 | 0.0% | 7.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | rice purity test range | 5 | 0 | 0.0% | 8.8 | Ranges / chart |
| `/rice-purity-test-average-score-by-age` | rice purity test score meaning 23 | 5 | 0 | 0.0% | 8.8 | Score meaning (belongs to /rice-purity-test-score) |
| `/rice-purity-test-average-score-by-age` | www.ricepuritytestapp.com | 5 | 0 | 0.0% | 14.8 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-average-score-by-age` | 28 rice purity score | 4 | 0 | 0.0% | 8.8 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 45 rice purity score | 4 | 0 | 0.0% | 10.8 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 60 rice purity test | 4 | 0 | 0.0% | 10.2 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | average rice ourity score | 4 | 0 | 0.0% | 9.8 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | average rice purity by age | 4 | 0 | 0.0% | 3.0 | Average by age |
| `/rice-purity-test-average-score-by-age` | is 85 rice purity good | 4 | 0 | 0.0% | 7.8 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | rice purity average | 4 | 0 | 0.0% | 7.8 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | rice purity score distribution | 4 | 0 | 0.0% | 8.8 | Statistics / distribution / rankings |
| `/rice-purity-test-average-score-by-age` | rice purity score of 65 | 4 | 0 | 0.0% | 9.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | rice purity test score average | 4 | 0 | 0.0% | 8.2 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | what is a good score for rice purity test | 4 | 0 | 0.0% | 13.0 | Normal / good score ("what is a normal rice purity score") |
| `/rice-purity-test-average-score-by-age` | what is an average rice purity score | 4 | 0 | 0.0% | 10.0 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | what is the average rice purity test | 4 | 0 | 0.0% | 8.8 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | what's an average rice purity score | 4 | 0 | 0.0% | 9.8 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | whats an average rice purity score | 4 | 0 | 0.0% | 10.0 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | 55 on rice purity test | 3 | 0 | 0.0% | 8.7 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | average rice purity score at 18 | 3 | 0 | 0.0% | 3.7 | Average / normal at 18 |
| `/rice-purity-test-average-score-by-age` | is 48 a bad rice purity score | 3 | 0 | 0.0% | 6.3 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 55 a bad rice purity score | 3 | 0 | 0.0% | 9.7 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 75 rice purity good | 3 | 0 | 0.0% | 9.7 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | rice purity score ranges | 3 | 0 | 0.0% | 14.7 | Ranges / chart |
| `/rice-purity-test-average-score-by-age` | rice purity test score meaning | 3 | 0 | 0.0% | 3.0 | Score meaning (belongs to /rice-purity-test-score) |
| `/rice-purity-test-average-score-by-age` | rice purity test statistics | 3 | 0 | 0.0% | 9.3 | Statistics / distribution / rankings |
| `/rice-purity-test-average-score-by-age` | rice purity test stats | 3 | 0 | 0.0% | 20.0 | Statistics / distribution / rankings |
| `/rice-purity-test-average-score-by-age` | what is a good score for the rice purity test | 3 | 0 | 0.0% | 9.7 | Normal / good score ("what is a normal rice purity score") |
| `/rice-purity-test-average-score-by-age` | what is a normal rice purity test score | 3 | 0 | 0.0% | 13.3 | Normal / good score ("what is a normal rice purity score") |
| `/rice-purity-test-average-score-by-age` | 26 rice purity score | 2 | 0 | 0.0% | 11.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 38 rice purity test | 2 | 0 | 0.0% | 9.5 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 58 rice purity score | 2 | 0 | 0.0% | 8.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 58 rice purity test | 2 | 0 | 0.0% | 9.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 62 rice purity test | 2 | 0 | 0.0% | 8.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | average rice | 2 | 0 | 0.0% | 9.0 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-average-score-by-age` | average rice purity score for 21 year old | 2 | 0 | 0.0% | 5.5 | Specific adult ages 19–22 ("…for 19 year old", "im 19") |
| `/rice-purity-test-average-score-by-age` | common rice purity test score | 2 | 0 | 0.0% | 10.0 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | is 58 rice purity bad | 2 | 0 | 0.0% | 27.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 68 rice purity bad | 2 | 0 | 0.0% | 8.5 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 73 rice purity good | 2 | 0 | 0.0% | 11.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 74 a good rice purity score | 2 | 0 | 0.0% | 10.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 80 rice purity test good | 2 | 0 | 0.0% | 9.5 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 83 a good rice purity score | 2 | 0 | 0.0% | 9.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 86 a good rice purity score | 2 | 0 | 0.0% | 10.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 87 a good rice purity score | 2 | 0 | 0.0% | 9.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | rice purity score average by age | 2 | 0 | 0.0% | 2.0 | Average by age |
| `/rice-purity-test-average-score-by-age` | rice purity test 2026 | 2 | 0 | 0.0% | 12.5 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-average-score-by-age` | rice purity test normal score | 2 | 0 | 0.0% | 10.5 | Normal / good score ("what is a normal rice purity score") |
| `/rice-purity-test-average-score-by-age` | what is a good rice purity test score | 2 | 0 | 0.0% | 10.0 | Normal / good score ("what is a normal rice purity score") |
| `/rice-purity-test-average-score-by-age` | what is a good score on rice purity test | 2 | 0 | 0.0% | 9.0 | Normal / good score ("what is a normal rice purity score") |
| `/rice-purity-test-average-score-by-age` | whats a good score on rice purity test | 2 | 0 | 0.0% | 10.0 | Normal / good score ("what is a normal rice purity score") |
| `/rice-purity-test-average-score-by-age` | 22 | 1 | 0 | 0.0% | 1.0 | Specific adult ages 19–22 ("…for 19 year old", "im 19") |
| `/rice-purity-test-average-score-by-age` | 25 rice purity score | 1 | 0 | 0.0% | 8.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 32 rice purity test | 1 | 0 | 0.0% | 10.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 41 rice purity score | 1 | 0 | 0.0% | 12.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 57 rice purity score | 1 | 0 | 0.0% | 12.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 58 on rice purity test | 1 | 0 | 0.0% | 8.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 60 on rice purity test | 1 | 0 | 0.0% | 11.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 63 rice purity score | 1 | 0 | 0.0% | 11.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | 85 on rice purity test | 1 | 0 | 0.0% | 15.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | age demo | 1 | 0 | 0.0% | 3.0 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-average-score-by-age` | average rice purity scores | 1 | 0 | 0.0% | 7.0 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | average score on the rice purity test | 1 | 0 | 0.0% | 9.0 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | avg rice purity test | 1 | 0 | 0.0% | 9.0 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | im 19 | 1 | 0 | 0.0% | 2.0 | Specific adult ages 19–22 ("…for 19 year old", "im 19") |
| `/rice-purity-test-average-score-by-age` | is 44 a bad rice purity score | 1 | 0 | 0.0% | 9.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 45 a bad rice purity score | 1 | 0 | 0.0% | 10.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 46 rice purity bad | 1 | 0 | 0.0% | 8.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 56 a bad rice purity score | 1 | 0 | 0.0% | 11.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 56 rice purity bad | 1 | 0 | 0.0% | 11.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 62 a bad rice purity score | 1 | 0 | 0.0% | 6.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 63 a good rice purity score | 1 | 0 | 0.0% | 4.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 65 a bad rice purity score | 1 | 0 | 0.0% | 7.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 76 on the rice purity test good | 1 | 0 | 0.0% | 11.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 77 a good rice purity score | 1 | 0 | 0.0% | 15.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 78 a good rice purity score | 1 | 0 | 0.0% | 8.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 80 a good rice purity score | 1 | 0 | 0.0% | 9.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 81 a good rice purity score | 1 | 0 | 0.0% | 8.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 82 a good rice purity score | 1 | 0 | 0.0% | 8.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 85 a good rice purity score | 1 | 0 | 0.0% | 8.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is 91 a good rice purity score | 1 | 0 | 0.0% | 9.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is a rice purity score of 40 bad | 1 | 0 | 0.0% | 11.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | is the rice purity test supposed to be high or low | 1 | 0 | 0.0% | 9.0 | Normal / good score ("what is a normal rice purity score") |
| `/rice-purity-test-average-score-by-age` | i’m 28 | 1 | 0 | 0.0% | 1.0 | Other adult ages ("i'm 28") |
| `/rice-purity-test-average-score-by-age` | modern rice purity test | 1 | 0 | 0.0% | 6.0 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-average-score-by-age` | most common rice purity score | 1 | 0 | 0.0% | 8.0 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | purity rice test | 1 | 0 | 0.0% | 3.0 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-average-score-by-age` | rice purity score 55 | 1 | 0 | 0.0% | 9.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | rice purity stats | 1 | 0 | 0.0% | 6.0 | Statistics / distribution / rankings |
| `/rice-purity-test-average-score-by-age` | rice purity test 38 | 1 | 0 | 0.0% | 9.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | rice purity test 45 | 1 | 0 | 0.0% | 4.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | rice purity test 65 | 1 | 0 | 0.0% | 8.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/rice-purity-test-average-score-by-age` | rice purity test average scores | 1 | 0 | 0.0% | 9.0 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | rice purity test distribution | 1 | 0 | 0.0% | 9.0 | Statistics / distribution / rankings |
| `/rice-purity-test-average-score-by-age` | rice purity test score chart | 1 | 0 | 0.0% | 11.0 | Ranges / chart |
| `/rice-purity-test-average-score-by-age` | rice purity test score range | 1 | 0 | 0.0% | 32.0 | Ranges / chart |
| `/rice-purity-test-average-score-by-age` | what is considered a good rice purity score | 1 | 0 | 0.0% | 10.0 | Normal / good score ("what is a normal rice purity score") |
| `/rice-purity-test-average-score-by-age` | what is the average score for the rice purity test | 1 | 0 | 0.0% | 9.0 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | what rice purity score is normal | 1 | 0 | 0.0% | 10.0 | Normal / good score ("what is a normal rice purity score") |
| `/rice-purity-test-average-score-by-age` | what rice purity score means | 1 | 0 | 0.0% | 43.0 | Score meaning (belongs to /rice-purity-test-score) |
| `/rice-purity-test-average-score-by-age` | what's the average rice purity test score | 1 | 0 | 0.0% | 10.0 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-average-score-by-age` | whats the average score on the rice purity test | 1 | 0 | 0.0% | 11.0 | Overall average ("average rice purity score", "what is the average…") |
| `/blog/average-rice-purity-test-score` | average rice purity score | 26 | 0 | 0.0% | 35.4 | Overall average ("average rice purity score", "what is the average…") |
| `/blog/average-rice-purity-test-score` | 76 rice purity test | 22 | 0 | 0.0% | 46.4 | A specific number ("68 rice purity score", "is 55 bad") |
| `/blog/average-rice-purity-test-score` | rice purity test scores | 11 | 0 | 0.0% | 26.6 | Ranges / chart |
| `/blog/average-rice-purity-test-score` | rice purity test average | 10 | 0 | 0.0% | 30.2 | Overall average ("average rice purity score", "what is the average…") |
| `/blog/average-rice-purity-test-score` | average rice purity test | 8 | 0 | 0.0% | 36.4 | Overall average ("average rice purity score", "what is the average…") |
| `/blog/average-rice-purity-test-score` | average rice purity test score | 7 | 0 | 0.0% | 33.0 | Overall average ("average rice purity score", "what is the average…") |
| `/blog/average-rice-purity-test-score` | rice purity test average score by age | 5 | 0 | 0.0% | 37.2 | Average by age |
| `/blog/average-rice-purity-test-score` | www.ricepuritytestapp.com | 5 | 0 | 0.0% | 14.6 | Navigational / brand / competitor / off-topic |
| `/blog/average-rice-purity-test-score` | average rice purity score by age | 4 | 0 | 0.0% | 36.0 | Average by age |
| `/blog/average-rice-purity-test-score` | rice purity test average score | 4 | 0 | 0.0% | 37.2 | Overall average ("average rice purity score", "what is the average…") |
| `/blog/average-rice-purity-test-score` | rice purity test stats | 4 | 0 | 0.0% | 22.0 | Statistics / distribution / rankings |
| `/blog/average-rice-purity-test-score` | whats the average rice purity score | 4 | 0 | 0.0% | 36.8 | Overall average ("average rice purity score", "what is the average…") |
| `/blog/average-rice-purity-test-score` | what's the average rice purity test score | 3 | 0 | 0.0% | 7.3 | Overall average ("average rice purity score", "what is the average…") |
| `/blog/average-rice-purity-test-score` | rice purity score ranges | 2 | 0 | 0.0% | 32.5 | Ranges / chart |
| `/blog/average-rice-purity-test-score` | rice purity score rankings | 2 | 0 | 0.0% | 10.5 | Statistics / distribution / rankings |
| `/blog/average-rice-purity-test-score` | rice purity test distribution | 2 | 0 | 0.0% | 10.0 | Statistics / distribution / rankings |
| `/blog/average-rice-purity-test-score` | rice purity test range | 2 | 0 | 0.0% | 21.0 | Ranges / chart |
| `/blog/average-rice-purity-test-score` | rice purity test score distribution | 2 | 0 | 0.0% | 11.0 | Statistics / distribution / rankings |
| `/blog/average-rice-purity-test-score` | what is a good rice purity test score | 2 | 0 | 0.0% | 45.5 | Normal / good score ("what is a normal rice purity score") |
| `/blog/average-rice-purity-test-score` | what is the average rice purity score | 2 | 0 | 0.0% | 32.5 | Overall average ("average rice purity score", "what is the average…") |
| `/blog/average-rice-purity-test-score` | whats a good rice purity score | 2 | 0 | 0.0% | 51.0 | Normal / good score ("what is a normal rice purity score") |
| `/blog/average-rice-purity-test-score` | 26 rice purity score | 1 | 0 | 0.0% | 11.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/blog/average-rice-purity-test-score` | 41 rice purity score | 1 | 0 | 0.0% | 33.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/blog/average-rice-purity-test-score` | 57 rice purity score | 1 | 0 | 0.0% | 42.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/blog/average-rice-purity-test-score` | 70 rice purity score | 1 | 0 | 0.0% | 11.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/blog/average-rice-purity-test-score` | 74 rice purity score | 1 | 0 | 0.0% | 11.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/blog/average-rice-purity-test-score` | 81 rice purity score | 1 | 0 | 0.0% | 53.0 | A specific number ("68 rice purity score", "is 55 bad") |
| `/blog/average-rice-purity-test-score` | average rice purity score for 18 year old | 1 | 0 | 0.0% | 18.0 | Average / normal at 18 |
| `/blog/average-rice-purity-test-score` | average rice purity test score by age | 1 | 0 | 0.0% | 31.0 | Average by age |
| `/blog/average-rice-purity-test-score` | good rice purity score | 1 | 0 | 0.0% | 39.0 | Normal / good score ("what is a normal rice purity score") |
| `/blog/average-rice-purity-test-score` | highest rice purity score | 1 | 0 | 0.0% | 11.0 | Normal / good score ("what is a normal rice purity score") |
| `/blog/average-rice-purity-test-score` | rice purity average score | 1 | 0 | 0.0% | 36.0 | Overall average ("average rice purity score", "what is the average…") |
| `/blog/average-rice-purity-test-score` | rice purity test arealme | 1 | 0 | 0.0% | 51.0 | Navigational / brand / competitor / off-topic |
| `/blog/average-rice-purity-test-score` | rice purity test average by age | 1 | 0 | 0.0% | 39.0 | Average by age |
| `/blog/average-rice-purity-test-score` | rice purity test rankings | 1 | 0 | 0.0% | 1.0 | Statistics / distribution / rankings |
| `/blog/average-rice-purity-test-score` | rice purity test score chart | 1 | 0 | 0.0% | 29.0 | Ranges / chart |
| `/blog/average-rice-purity-test-score` | what is a good score on the rice purity test | 1 | 0 | 0.0% | 27.0 | Normal / good score ("what is a normal rice purity score") |
| `/blog/average-rice-purity-test-score` | what is a high rice purity score | 1 | 0 | 0.0% | 48.0 | Normal / good score ("what is a normal rice purity score") |
| `/blog/average-rice-purity-test-score` | what's the average score on the rice purity test | 1 | 0 | 0.0% | 7.0 | Overall average ("average rice purity score", "what is the average…") |
| `/blog/average-rice-purity-test-score` | whats an average rice purity score | 1 | 0 | 0.0% | 10.0 | Overall average ("average rice purity score", "what is the average…") |
| `/rice-purity-test-score` | rice purity test score meaning | 267 | 1 | 0.4% | 11.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | rice purity test score | 146 | 1 | 0.7% | 11.5 | "Rice purity (test) score(s)", results, typos |
| `/rice-purity-test-score` | rice purity score | 39 | 0 | 0.0% | 9.6 | "Rice purity (test) score(s)", results, typos |
| `/rice-purity-test-score` | rice purity score meaning | 33 | 1 | 3.0% | 19.3 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | rice purity test scores meaning | 24 | 0 | 0.0% | 22.8 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | 76 rice purity test | 18 | 0 | 0.0% | 27.3 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 77 rice purity score | 12 | 0 | 0.0% | 8.2 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | rice purity test score scale | 12 | 0 | 0.0% | 9.3 | Scale / chart / range |
| `/rice-purity-test-score` | how is rice purity test calculated | 11 | 0 | 0.0% | 7.7 | How it is calculated / scored / works / weighted |
| `/rice-purity-test-score` | rice purity test scores | 9 | 0 | 0.0% | 19.4 | "Rice purity (test) score(s)", results, typos |
| `/rice-purity-test-score` | rice score | 9 | 0 | 0.0% | 43.1 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-score` | rice purity scores | 8 | 1 | 12.5% | 13.5 | "Rice purity (test) score(s)", results, typos |
| `/rice-purity-test-score` | 81 rice purity score | 7 | 0 | 0.0% | 12.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | rice purity score meanings | 6 | 0 | 0.0% | 15.7 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | 83 rice purity score | 5 | 0 | 0.0% | 15.6 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | rice purity test results meaning | 5 | 0 | 0.0% | 8.2 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | rice purity test score meanings | 5 | 0 | 0.0% | 13.4 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | what is a bad rice purity score | 5 | 0 | 0.0% | 40.4 | High / low / bad / better / highest |
| `/rice-purity-test-score` | fsp en rice purity test | 4 | 0 | 0.0% | 9.0 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-score` | how does the rice purity test work | 4 | 0 | 0.0% | 10.2 | How it is calculated / scored / works / weighted |
| `/rice-purity-test-score` | rice purity score ranges | 4 | 0 | 0.0% | 39.8 | Scale / chart / range |
| `/rice-purity-test-score` | what does a high rice purity score mean | 4 | 0 | 0.0% | 10.0 | High / low / bad / better / highest |
| `/rice-purity-test-score` | www.ricepuritytestapp.com | 4 | 0 | 0.0% | 12.5 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-score` | 54 rice purity test | 3 | 0 | 0.0% | 7.7 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 65 rice purity score | 3 | 0 | 0.0% | 9.7 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 82 rice purity score | 3 | 0 | 0.0% | 8.7 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 85 on rice purity test | 3 | 0 | 0.0% | 23.3 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 88 rice purity score | 3 | 0 | 0.0% | 9.7 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 97 rice purity score | 3 | 0 | 0.0% | 9.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | is 77 on rice purity test good | 3 | 0 | 0.0% | 8.7 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | rice purity score chart | 3 | 0 | 0.0% | 17.3 | Scale / chart / range |
| `/rice-purity-test-score` | rice purity scores meaning | 3 | 0 | 0.0% | 13.7 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | rice purity test meaning score | 3 | 0 | 0.0% | 9.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | rice purity test scoring | 3 | 0 | 0.0% | 16.0 | How it is calculated / scored / works / weighted |
| `/rice-purity-test-score` | rice purity test stats | 3 | 0 | 0.0% | 41.0 | Belongs to another guide (average by age, test meaning, stats) |
| `/rice-purity-test-score` | the rice purity test score meaning | 3 | 0 | 0.0% | 7.3 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | what does the rice purity score mean | 3 | 0 | 0.0% | 39.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | 47 rice purity score | 2 | 0 | 0.0% | 8.5 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 53 rice purity score | 2 | 0 | 0.0% | 7.5 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 58 rice purity test | 2 | 0 | 0.0% | 6.5 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 59 rice purity score | 2 | 0 | 0.0% | 8.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 67 rice purity score | 2 | 0 | 0.0% | 9.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 71 rice purity score | 2 | 0 | 0.0% | 9.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 73 rice purity score | 2 | 0 | 0.0% | 9.5 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 87 rice purity score | 2 | 0 | 0.0% | 5.5 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 97 rice purity test | 2 | 0 | 0.0% | 7.5 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | average rice purity score by age | 2 | 0 | 0.0% | 55.0 | Belongs to another guide (average by age, test meaning, stats) |
| `/rice-purity-test-score` | dsmp rice purity test | 2 | 0 | 0.0% | 5.0 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-score` | how is the rice purity test calculated | 2 | 0 | 0.0% | 8.0 | How it is calculated / scored / works / weighted |
| `/rice-purity-test-score` | how is the rice purity test scored | 2 | 0 | 0.0% | 10.0 | How it is calculated / scored / works / weighted |
| `/rice-purity-test-score` | is 77 a good rice purity score | 2 | 0 | 0.0% | 8.5 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | purity test score meaning | 2 | 0 | 0.0% | 9.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | race purity test scores | 2 | 0 | 0.0% | 29.0 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-score` | rice purit score | 2 | 0 | 0.0% | 28.5 | "Rice purity (test) score(s)", results, typos |
| `/rice-purity-test-score` | rice purity meaning | 2 | 0 | 0.0% | 10.0 | Belongs to another guide (average by age, test meaning, stats) |
| `/rice-purity-test-score` | rice purity results meaning | 2 | 0 | 0.0% | 10.5 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | rice purity score range | 2 | 0 | 0.0% | 7.0 | Scale / chart / range |
| `/rice-purity-test-score` | rice purity test 40 | 2 | 0 | 0.0% | 6.5 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | rice purity test arealme | 2 | 0 | 0.0% | 27.0 | "Rice purity (test) score(s)", results, typos |
| `/rice-purity-test-score` | rice purity test explained | 2 | 0 | 0.0% | 6.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | rice purity test meaning | 2 | 0 | 0.0% | 13.0 | Belongs to another guide (average by age, test meaning, stats) |
| `/rice-purity-test-score` | rice purity test range | 2 | 0 | 0.0% | 38.5 | Scale / chart / range |
| `/rice-purity-test-score` | rice purity test results | 2 | 0 | 0.0% | 6.0 | "Rice purity (test) score(s)", results, typos |
| `/rice-purity-test-score` | rice purity test scale | 2 | 0 | 0.0% | 32.0 | Scale / chart / range |
| `/rice-purity-test-score` | rice purity test score interpretation | 2 | 0 | 0.0% | 7.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | rice test score | 2 | 0 | 0.0% | 19.5 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-score` | what is rice purity score mean | 2 | 0 | 0.0% | 6.5 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | what is rice purity test score meaning | 2 | 0 | 0.0% | 11.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | whats a good rice purity score | 2 | 0 | 0.0% | 51.5 | High / low / bad / better / highest |
| `/rice-purity-test-score` | 27 rice purity score | 1 | 0 | 0.0% | 10.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 32 rice purity score | 1 | 0 | 0.0% | 7.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 34 rice purity score | 1 | 0 | 0.0% | 8.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 36 rice purity score | 1 | 0 | 0.0% | 6.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 39 rice purity test | 1 | 0 | 0.0% | 10.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 40 rice purity score | 1 | 0 | 0.0% | 7.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 42 rice purity test | 1 | 0 | 0.0% | 8.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 43 rice purity score | 1 | 0 | 0.0% | 11.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 44 on rice purity test | 1 | 0 | 0.0% | 7.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 46 rice purity test | 1 | 0 | 0.0% | 5.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 51 rice purity score | 1 | 0 | 0.0% | 10.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 53 on rice purity test | 1 | 0 | 0.0% | 7.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 54 on rice purity test | 1 | 0 | 0.0% | 10.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 54 rice purity score | 1 | 0 | 0.0% | 10.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 61 on rice purity test | 1 | 0 | 0.0% | 9.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 63 rice purity score | 1 | 0 | 0.0% | 10.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 64 rice purity test | 1 | 0 | 0.0% | 8.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 66 rice purity score | 1 | 0 | 0.0% | 5.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 71 rice purity test | 1 | 0 | 0.0% | 9.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 81 on rice purity test | 1 | 0 | 0.0% | 11.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 86 rice purity test | 1 | 0 | 0.0% | 7.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 90 on rice purity test | 1 | 0 | 0.0% | 29.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | 93 on rice purity test | 1 | 0 | 0.0% | 10.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | damp rice purity test | 1 | 0 | 0.0% | 11.0 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-score` | how do rice purity scores work | 1 | 0 | 0.0% | 10.0 | How it is calculated / scored / works / weighted |
| `/rice-purity-test-score` | how does rice purity score work | 1 | 0 | 0.0% | 34.0 | How it is calculated / scored / works / weighted |
| `/rice-purity-test-score` | how does the rice purity score work | 1 | 0 | 0.0% | 7.0 | How it is calculated / scored / works / weighted |
| `/rice-purity-test-score` | how does the rice purity test score work | 1 | 0 | 0.0% | 29.0 | How it is calculated / scored / works / weighted |
| `/rice-purity-test-score` | how is rice purity test scored | 1 | 0 | 0.0% | 11.0 | How it is calculated / scored / works / weighted |
| `/rice-purity-test-score` | how to calculate rice purity test | 1 | 0 | 0.0% | 5.0 | How it is calculated / scored / works / weighted |
| `/rice-purity-test-score` | is 77 rice purity good | 1 | 0 | 0.0% | 9.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | is 78 a good rice purity score | 1 | 0 | 0.0% | 9.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | is 82 a good rice purity score | 1 | 0 | 0.0% | 7.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | is 84 on rice purity test good | 1 | 0 | 0.0% | 11.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | is 86 a good rice purity score | 1 | 0 | 0.0% | 7.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | is a lower rice purity score better | 1 | 0 | 0.0% | 9.0 | High / low / bad / better / highest |
| `/rice-purity-test-score` | is higher or lower rice purity score better | 1 | 0 | 0.0% | 10.0 | High / low / bad / better / highest |
| `/rice-purity-test-score` | rice pirity score | 1 | 0 | 0.0% | 34.0 | "Rice purity (test) score(s)", results, typos |
| `/rice-purity-test-score` | rice purity 44 | 1 | 0 | 0.0% | 11.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | rice purity dcore | 1 | 0 | 0.0% | 10.0 | "Rice purity (test) score(s)", results, typos |
| `/rice-purity-test-score` | rice purity score explained | 1 | 0 | 0.0% | 5.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | rice purity score scale | 1 | 0 | 0.0% | 6.0 | Scale / chart / range |
| `/rice-purity-test-score` | rice purity scoring | 1 | 0 | 0.0% | 40.0 | How it is calculated / scored / works / weighted |
| `/rice-purity-test-score` | rice purity scre | 1 | 0 | 0.0% | 7.0 | "Rice purity (test) score(s)", results, typos |
| `/rice-purity-test-score` | rice purity test | 1 | 0 | 0.0% | 9.0 | "Rice purity (test) score(s)", results, typos |
| `/rice-purity-test-score` | rice purity test 36 | 1 | 0 | 0.0% | 11.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | rice purity test 56 | 1 | 0 | 0.0% | 7.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | rice purity test 57 | 1 | 0 | 0.0% | 9.0 | A specific number ("77 rice purity score", "is 85 good") |
| `/rice-purity-test-score` | rice purity test average score by age | 1 | 0 | 0.0% | 60.0 | Belongs to another guide (average by age, test meaning, stats) |
| `/rice-purity-test-score` | rice purity test chart | 1 | 0 | 0.0% | 31.0 | Scale / chart / range |
| `/rice-purity-test-score` | rice purity test free | 1 | 0 | 0.0% | 11.0 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-score` | rice purity test higher or lower | 1 | 0 | 0.0% | 10.0 | High / low / bad / better / highest |
| `/rice-purity-test-score` | rice purity test highest score | 1 | 0 | 0.0% | 10.0 | High / low / bad / better / highest |
| `/rice-purity-test-score` | rice purity test how does it work | 1 | 0 | 0.0% | 10.0 | How it is calculated / scored / works / weighted |
| `/rice-purity-test-score` | rice purity test result | 1 | 0 | 0.0% | 36.0 | "Rice purity (test) score(s)", results, typos |
| `/rice-purity-test-score` | rice purity test result meaning | 1 | 0 | 0.0% | 11.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | rice purity test score chart | 1 | 0 | 0.0% | 11.0 | Scale / chart / range |
| `/rice-purity-test-score` | rice purity test score range | 1 | 0 | 0.0% | 48.0 | Scale / chart / range |
| `/rice-purity-test-score` | rice puriy score | 1 | 0 | 0.0% | 8.0 | "Rice purity (test) score(s)", results, typos |
| `/rice-purity-test-score` | rice score calculator | 1 | 0 | 0.0% | 36.0 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-score` | rice spirit test | 1 | 0 | 0.0% | 8.0 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-score` | rice test score meaning | 1 | 0 | 0.0% | 6.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | weighted rice purity test | 1 | 0 | 0.0% | 10.0 | How it is calculated / scored / works / weighted |
| `/rice-purity-test-score` | what do rice purity scores mean | 1 | 0 | 0.0% | 10.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | what does my rice purity score mean | 1 | 0 | 0.0% | 35.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | what does my rice purity test score mean | 1 | 0 | 0.0% | 8.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | what does rice purity score mean | 1 | 0 | 0.0% | 36.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | what does rice purity test score mean | 1 | 0 | 0.0% | 27.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | what does the rice purity test score mean | 1 | 0 | 0.0% | 21.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | what does the score on rice purity test mean | 1 | 0 | 0.0% | 9.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | what does your rice purity score mean | 1 | 0 | 0.0% | 11.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | what is a good rice purity score | 1 | 0 | 0.0% | 55.0 | High / low / bad / better / highest |
| `/rice-purity-test-score` | what is a high rice purity score | 1 | 0 | 0.0% | 32.0 | High / low / bad / better / highest |
| `/rice-purity-test-score` | what is a low rice purity score | 1 | 0 | 0.0% | 17.0 | High / low / bad / better / highest |
| `/rice-purity-test-score` | what is a rice purity score | 1 | 0 | 0.0% | 33.0 | "Rice purity (test) score(s)", results, typos |
| `/rice-purity-test-score` | what is a rice purity test score | 1 | 0 | 0.0% | 6.0 | "Rice purity (test) score(s)", results, typos |
| `/rice-purity-test-score` | what is rice purity score | 1 | 0 | 0.0% | 37.0 | "Rice purity (test) score(s)", results, typos |
| `/rice-purity-test-score` | what is rice purity test score | 1 | 0 | 0.0% | 6.0 | "Rice purity (test) score(s)", results, typos |
| `/rice-purity-test-score` | what is the highest rice purity score | 1 | 0 | 0.0% | 11.0 | High / low / bad / better / highest |
| `/rice-purity-test-score` | what is the rice purity test score out of | 1 | 0 | 0.0% | 29.0 | How it is calculated / scored / works / weighted |
| `/rice-purity-test-score` | what rice purity score means | 1 | 0 | 0.0% | 29.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | what's the rice purity test score mean | 1 | 0 | 0.0% | 8.0 | Score meaning ("rice purity test score meaning") |
| `/rice-purity-test-score` | white rice test | 1 | 0 | 0.0% | 7.0 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-meaning` | rice purity test meaning | 91 | 0 | 0.0% | 10.2 | Test meaning / definition ("rice purity test meaning") |
| `/rice-purity-test-meaning` | rice purity test score meaning | 34 | 0 | 0.0% | 24.1 | Score meaning (owner: /rice-purity-test-score) |
| `/rice-purity-test-meaning` | rice.purity test meaning | 16 | 0 | 0.0% | 10.8 | Test meaning / definition ("rice purity test meaning") |
| `/rice-purity-test-meaning` | rice purity meaning | 14 | 0 | 0.0% | 14.4 | Test meaning / definition ("rice purity test meaning") |
| `/rice-purity-test-meaning` | rice purity test scores meaning | 13 | 0 | 0.0% | 41.8 | Score meaning (owner: /rice-purity-test-score) |
| `/rice-purity-test-meaning` | rice purity score meaning | 10 | 0 | 0.0% | 43.0 | Score meaning (owner: /rice-purity-test-score) |
| `/rice-purity-test-meaning` | www.ricepuritytestapp.com | 5 | 0 | 0.0% | 13.6 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-meaning` | rice purity score meanings | 3 | 0 | 0.0% | 43.3 | Score meaning (owner: /rice-purity-test-score) |
| `/rice-purity-test-meaning` | rice purity test score meanings | 3 | 0 | 0.0% | 32.7 | Score meaning (owner: /rice-purity-test-score) |
| `/rice-purity-test-meaning` | purity test meaning | 2 | 0 | 0.0% | 65.5 | Test meaning / definition ("rice purity test meaning") |
| `/rice-purity-test-meaning` | rice purity test definition | 2 | 0 | 0.0% | 15.5 | Test meaning / definition ("rice purity test meaning") |
| `/rice-purity-test-meaning` | rice purity test explained | 2 | 0 | 0.0% | 28.0 | Test meaning / definition ("rice purity test meaning") |
| `/rice-purity-test-meaning` | rice purity test meanings | 2 | 0 | 0.0% | 24.5 | Test meaning / definition ("rice purity test meaning") |
| `/rice-purity-test-meaning` | what does rice purity score mean | 2 | 0 | 0.0% | 39.5 | Score meaning (owner: /rice-purity-test-score) |
| `/rice-purity-test-meaning` | mps meaning rice purity | 1 | 0 | 0.0% | 24.0 | MPS meaning |
| `/rice-purity-test-meaning` | mps meaning rice purity test | 1 | 0 | 0.0% | 31.0 | MPS meaning |
| `/rice-purity-test-meaning` | mps rice purity meaning | 1 | 0 | 0.0% | 27.0 | MPS meaning |
| `/rice-purity-test-meaning` | purity test definition | 1 | 0 | 0.0% | 36.0 | Test meaning / definition ("rice purity test meaning") |
| `/rice-purity-test-meaning` | rice purity test mean | 1 | 0 | 0.0% | 33.0 | Test meaning / definition ("rice purity test meaning") |
| `/rice-purity-test-meaning` | rice purity test results meaning | 1 | 0 | 0.0% | 35.0 | Score meaning (owner: /rice-purity-test-score) |
| `/rice-purity-test-meaning` | the rice purity test meaning | 1 | 0 | 0.0% | 9.0 | Test meaning / definition ("rice purity test meaning") |
| `/rice-purity-test-meaning` | what does rice purity mean | 1 | 0 | 0.0% | 5.0 | Test meaning / definition ("rice purity test meaning") |
| `/rice-purity-test-meaning` | what is a rice purity test | 1 | 0 | 0.0% | 30.0 | Test meaning / definition ("rice purity test meaning") |
| `/rice-purity-test-meaning` | what is the rice purity | 1 | 0 | 0.0% | 31.0 | Test meaning / definition ("rice purity test meaning") |
| `/rice-purity-test-meaning` | when was the rice purity test made | 1 | 0 | 0.0% | 10.0 | When it was made |
| `/rice-purity-test-questions` | rice purity test questions explained | 30 | 11 | 36.7% | 5.6 | Questions explained / meaning |
| `/rice-purity-test-questions` | rice purity test questions | 10 | 0 | 0.0% | 26.5 | The question list ("rice purity test questions", "all 100") |
| `/rice-purity-test-questions` | rice purity questions | 5 | 0 | 0.0% | 13.8 | The question list ("rice purity test questions", "all 100") |
| `/rice-purity-test-questions` | www.ricepuritytestapp.com | 5 | 0 | 0.0% | 16.8 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-questions` | rice purity questions explained | 3 | 1 | 33.3% | 6.7 | Questions explained / meaning |
| `/rice-purity-test-questions` | rice purity test explained | 3 | 0 | 0.0% | 30.0 | Questions explained / meaning |
| `/rice-purity-test-questions` | rice purity test question | 3 | 0 | 0.0% | 40.7 | The question list ("rice purity test questions", "all 100") |
| `/rice-purity-test-questions` | all rice purity test questions | 2 | 0 | 0.0% | 8.5 | The question list ("rice purity test questions", "all 100") |
| `/rice-purity-test-questions` | innocence test 100 questions | 2 | 0 | 0.0% | 9.0 | The question list ("rice purity test questions", "all 100") |
| `/rice-purity-test-questions` | rice purity test more questions | 2 | 0 | 0.0% | 26.5 | The question list ("rice purity test questions", "all 100") |
| `/rice-purity-test-questions` | rice purity test questions meaning | 2 | 0 | 0.0% | 8.0 | Questions explained / meaning |
| `/rice-purity-test-questions` | what does the question mark mean in the rice purity test | 2 | 0 | 0.0% | 9.5 | "What does the question mark mean" |
| `/rice-purity-test-questions` | give me all the questions | 1 | 0 | 0.0% | 7.0 | The question list ("rice purity test questions", "all 100") |
| `/rice-purity-test-questions` | how does rice purity score work | 1 | 0 | 0.0% | 53.0 | Belongs to another guide (how the score works, what it says about you, meaning) |
| `/rice-purity-test-questions` | purity test 100 questions | 1 | 0 | 0.0% | 30.0 | The question list ("rice purity test questions", "all 100") |
| `/rice-purity-test-questions` | rice purity test 100 | 1 | 0 | 0.0% | 21.0 | The question list ("rice purity test questions", "all 100") |
| `/rice-purity-test-questions` | rice purity test 2 | 1 | 0 | 0.0% | 41.0 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-questions` | rice purity test categories | 1 | 0 | 0.0% | 10.0 | Categories |
| `/rice-purity-test-questions` | rice purity test full questions list | 1 | 0 | 0.0% | 6.0 | The question list ("rice purity test questions", "all 100") |
| `/rice-purity-test-questions` | rice purity test meaning | 1 | 0 | 0.0% | 37.0 | Belongs to another guide (how the score works, what it says about you, meaning) |
| `/rice-purity-test-questions` | rice purity test questions list | 1 | 0 | 0.0% | 10.0 | The question list ("rice purity test questions", "all 100") |
| `/rice-purity-test-questions` | rice purity test svenska | 1 | 0 | 0.0% | 39.0 | Navigational / brand / competitor / off-topic |
| `/rice-purity-test-questions` | what your rice purity score says about you | 1 | 0 | 0.0% | 55.0 | Belongs to another guide (how the score works, what it says about you, meaning) |
| `/rice-purity-test-questions` | what your rice purity test says about you | 1 | 0 | 0.0% | 41.0 | Belongs to another guide (how the score works, what it says about you, meaning) |
| `/rice-purity-test-questions` | 簡単にして | 1 | 0 | 0.0% | 6.0 | Navigational / brand / competitor / off-topic |
| `/` | rice purity test free | 12 | 0 | 0.0% | 10.8 | Free test |
| `/` | free rice purity test | 9 | 1 | 11.1% | 9.7 | Free test |
| `/` | purity test free | 6 | 0 | 0.0% | 9.3 | Free test |
| `/` | rights purity test | 5 | 0 | 0.0% | 4.6 | Navigational / brand / competitor / off-topic |
| `/` | 100 rice purity test | 4 | 0 | 0.0% | 8.5 | 100 questions |
| `/` | https://ricepuritytest.com | 4 | 0 | 0.0% | 5.2 | Navigational / brand / competitor / off-topic |
| `/` | https://ricepuritytest.com/ | 4 | 0 | 0.0% | 7.2 | Navigational / brand / competitor / off-topic |
| `/` | ricepuritytest.com | 4 | 0 | 0.0% | 66.5 | Navigational / brand / competitor / off-topic |
| `/` | www.ricepuritytestapp.com | 3 | 0 | 0.0% | 2.3 | Navigational / brand / competitor / off-topic |
| `/` | kissed for more than two hours consecutively meaning | 2 | 0 | 0.0% | 1.0 | Item 14, "kissed for more than two hours consecutively" |
| `/` | can you list them | 1 | 0 | 0.0% | 8.0 | Navigational / brand / competitor / off-topic |
| `/` | innocent test 100 questions | 1 | 0 | 0.0% | 3.0 | 100 questions |
| `/` | kissed for more than 2 hours consecutively meaning | 1 | 0 | 0.0% | 1.0 | Item 14, "kissed for more than two hours consecutively" |
| `/` | officialricepuritytest.com | 1 | 0 | 0.0% | 33.0 | Navigational / brand / competitor / off-topic |
| `/` | rice iq test | 1 | 0 | 0.0% | 11.0 | Navigational / brand / competitor / off-topic |
| `/` | rice paper test | 1 | 0 | 0.0% | 10.0 | Navigational / brand / competitor / off-topic |
| `/` | rice purity core | 1 | 0 | 0.0% | 9.0 | Navigational / brand / competitor / off-topic |
| `/` | rice purity monkey | 1 | 0 | 0.0% | 11.0 | Navigational / brand / competitor / off-topic |
| `/` | rice purity test .com | 1 | 0 | 0.0% | 9.0 | Navigational / brand / competitor / off-topic |
| `/` | rice purity test 100 | 1 | 0 | 0.0% | 8.0 | 100 questions |
| `/` | rice purity test بالعربي | 1 | 0 | 0.0% | 8.0 | Navigational / brand / competitor / off-topic |
| `/` | what does kissed for more than two hours consecutively mean | 1 | 0 | 0.0% | 1.0 | Item 14, "kissed for more than two hours consecutively" |
| `/blog/how-to-take-rice-purity-test` | www.ricepuritytestapp.com | 3 | 0 | 0.0% | 12.7 | Navigational / brand / competitor / off-topic |
| `/blog/how-to-take-rice-purity-test` | かんたんにして | 1 | 1 | 100.0% | 2.0 | Navigational / brand / competitor / off-topic |
| `/blog/how-to-take-rice-purity-test` | how does rice purity score work | 1 | 0 | 0.0% | 64.0 | How the score works (belongs to /rice-purity-test-score) |
| `/blog/how-to-take-rice-purity-test` | how does the rice purity test score work | 1 | 0 | 0.0% | 67.0 | How the score works (belongs to /rice-purity-test-score) |
| `/blog/how-to-take-rice-purity-test` | what is streaking rice purity test | 1 | 0 | 0.0% | 35.0 | "Streaking" (not an item on this list) |
