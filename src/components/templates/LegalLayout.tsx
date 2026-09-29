import type { ReactNode } from 'react';
import { Breadcrumbs } from '../molecules/Breadcrumbs';

/** Plain, readable layout for legal and site pages. */
export function LegalLayout({
  crumb,
  href,
  title,
  meta,
  children,
}: {
  crumb: string;
  href: string;
  title: string;
  meta?: ReactNode;
  children: ReactNode;
}) {
  return (
    <main id="main" className="page pb-4 pt-3 sm:pt-5">
      <Breadcrumbs items={[{ label: crumb, href }]} />
      <article className="max-w-measure">
        <h1 className="mt-2 font-display text-h1 font-semibold text-ink">{title}</h1>
        {meta && <p className="mt-3 text-xs text-ink-3">{meta}</p>}
        <div className="prose-guide mt-8">{children}</div>
      </article>
    </main>
  );
}
