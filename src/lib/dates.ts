/**
 * Content dates for every indexable page, in one place.
 *
 * `modified` moves only when a page's main content changed substantively (new or
 * rewritten sections, new facts or corrections). Title, link, layout and schema
 * tweaks don't count (tk-page-fix). The same value feeds the visible "Last
 * reviewed" line, BlogPosting `dateModified` and the sitemap `lastmod`, so the
 * three never disagree. `published` is set only where the page shows or marks
 * up a publication date, and it never changes.
 */
interface ContentDates {
  modified: string;
  published?: string;
}

export const PAGE_DATES = {
  '/': { modified: '2026-09-27' },
  '/test': { modified: '2026-09-27' },
  '/rice-purity-test-average-score-by-age': { published: '2026-01-20', modified: '2026-09-30' },
  '/rice-purity-test-score': { published: '2026-01-15', modified: '2026-09-30' },
  '/rice-purity-test-questions': { published: '2026-01-10', modified: '2026-09-30' },
  '/rice-purity-test-meaning': { published: '2026-01-12', modified: '2026-09-27' },
  '/rice-purity-test-history': { published: '2026-01-12', modified: '2026-09-30' },
  '/blog': { modified: '2026-09-30' },
  '/blog/how-to-take-rice-purity-test': { published: '2026-01-11', modified: '2026-09-27' },
  '/about': { modified: '2026-09-30' },
  '/contact': { modified: '2026-08-14' },
  '/privacy': { modified: '2026-09-30' },
  '/terms': { modified: '2026-08-14' },
  '/cookies': { modified: '2026-09-30' },
} satisfies Record<string, ContentDates>;

export type DatedPath = keyof typeof PAGE_DATES;

const LONG = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' });

/** "September 30, 2026". Dates are UTC calendar days, so server and client agree. */
export function formatDate(iso: string): string {
  return LONG.format(new Date(`${iso}T00:00:00Z`));
}

export function reviewedOn(path: DatedPath): string {
  return formatDate(PAGE_DATES[path].modified);
}

export function datesFor(path: DatedPath): ContentDates {
  return PAGE_DATES[path];
}
