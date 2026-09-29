# ricepuritytestapp.com redesign (tk-ricepurity-redesign)

Branch: `redesign/ricepurity` (from `origin/main` at `ff83f69`). Not pushed, no PR, nothing deployed.

## Stage status

| Stage | Status | Owner approval |
|---|---|---|
| 1. Content audit | Done (below). GSC per-page query data was not available to this run (`gsc_property: TODO`), so the audit uses the figures in the brief plus the live HTML. | **Pending** |
| 2. Design proposal | Done as a working build plus screenshots (see "Design system" and the screenshot list). No Vercel preview yet. | **Pending** |
| 3. Build | Done on the branch. `npx tsc --noEmit` and `npm run build` pass. | **Pending** |
| 4. Before/after + PR | Before/after is below. PR not opened (parent session pushes after review). `tk-reviewer` Mode B not run yet. | **Pending** |

The skill gates each stage on an owner approval. These stages were run back to back at the parent session's request, so **no approvals are recorded yet**. Record them here, with dates, before merging.

### Timing flags (owner decision)

- **28-day rule.** The core content was rewritten on 2026-09-27. This branch changes the same pages again (layout for all, title and meta on two). Shipping before **2026-10-25** means the 09-27 rewrite and the redesign can't be measured separately.
- **Ranking update.** Google's *September 2026 spam update* started on 2026-09-24 and was still rolling out on 2026-09-29. The policy check says not to judge results during a rollout or within 7 days after it. Deploy at least 7 days after it completes.

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
| `/privacy`, `/terms`, `/cookies` | Legal | **Keep** (wording unchanged) | age sections kept | **Owner to review, not changed here:** the cookie table lists `rpt_progress`, `rpt_age_ok` and `rpt_consent`, but the code stores `rice-purity-answers`, `rice-purity-score` and `rpt-score-submitted`. There's no age gate or consent tool in the code, and no "manage choices" link in the footer. The privacy table also mentions an age confirmation. |

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
- **Dates.** No `dateModified`, visible "Last reviewed" date or sitemap `lastmod` was changed. The two metadata edits and the new lookup are not a reason to bump them under tk-page-fix, since tk-page-fix treats title/meta tweaks as non-substantive.
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

Also checked: the **September 2026 spam update** (started 2026-09-24) was still rolling out on 2026-09-29. Don't deploy, or judge results, until 7 days after it completes.


## Change-log rows (copy into `seo/changelog.md` at merge)

| Date | URL | Change | Why | GSC 28-day baseline | Review on |
|---|---|---|---|---|---|
| (merge date) | all routes | Visual/UX redesign; content kept | Mobile UX, a11y, CWV | pull at merge | merge + 28d |
| (merge date) | /rice-purity-test-average-score-by-age | Title, meta and first line state the estimated average (62–68) | "average rice purity score": 1,223 impr, pos 10, 0 clicks | pull at merge | merge + 28d |
| (merge date) | /rice-purity-test-score | One "is my score good" lookup table; meta mentions it | "is N a good score" queries | pull at merge | merge + 28d |
| (merge date) | /results | noindex,nofollow → noindex,follow; self canonical | Let crawlers follow links from a noindexed page | n/a | — |
