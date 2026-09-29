import Link from 'next/link';
import { datesFor, formatDate, type DatedPath } from '@/lib/dates';
import { CONTACT_EMAIL, PUBLISHER, SITE_NAME } from '@/lib/site';

export interface Source {
  href: string;
  label: string;
}

/**
 * Who / how / when for a guide, at the end of the article: the publisher as the
 * About page states it, the real review date, the editorial rules and the
 * sources. No people or credentials are named because none stand behind the
 * content; the site itself is the author in the BlogPosting markup.
 */
export function AboutThisGuide({ path, sources = [] }: { path: DatedPath; sources?: Source[] }) {
  const d = datesFor(path);
  return (
    <aside aria-labelledby="about-this-guide" className="mt-14 rounded-lg border border-line bg-surface p-5 text-small text-ink-2 sm:p-6">
      <h2 id="about-this-guide" className="font-display text-h3 font-semibold text-ink">
        About this guide
      </h2>
      <dl className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-[9.5rem_minmax(0,1fr)]">
        <dt className="font-semibold text-ink">Published by</dt>
        <dd>
          {SITE_NAME}, a site run by {PUBLISHER}.{' '}
          <Link href="/about#who-runs-it" className="link">
            About the site
          </Link>
        </dd>
        <dt className="font-semibold text-ink">Last reviewed</dt>
        <dd>
          <time dateTime={d.modified}>{formatDate(d.modified)}</time>
          {d.published && (
            <>
              {' '}
              (first published <time dateTime={d.published}>{formatDate(d.published)}</time>)
            </>
          )}
        </dd>
        <dt className="font-semibold text-ink">How it’s written</dt>
        <dd>
          No invented experts, reviews or statistics. Estimates are labelled as estimates, and facts link to their
          source.{' '}
          <Link href="/about#how-we-write" className="link">
            Our editorial standards
          </Link>
        </dd>
        {sources.length > 0 && (
          <>
            <dt className="font-semibold text-ink">Sources</dt>
            <dd>
              <ul className="space-y-1">
                {sources.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} rel="noopener" target="_blank" className="link">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </dd>
          </>
        )}
        <dt className="font-semibold text-ink">Spotted an error?</dt>
        <dd>
          Email{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="link">
            {CONTACT_EMAIL}
          </a>{' '}
          and we’ll correct it.
        </dd>
      </dl>
    </aside>
  );
}
