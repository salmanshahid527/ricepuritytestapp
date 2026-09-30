import type { ReactNode } from 'react';
import { Breadcrumbs, type Crumb } from '../molecules/Breadcrumbs';
import { TocMobile, TocSidebar, type TocItem } from '../molecules/Toc';

interface GuideLayoutProps {
  crumbs: Crumb[];
  title: ReactNode;
  /** e.g. "Last reviewed September 27, 2026 · For adults 18+" */
  meta?: ReactNode;
  /** Answer-first block, shown straight after the H1. */
  answer?: ReactNode;
  toc?: TocItem[];
  children: ReactNode;
  /** Rendered full width under the article (related guides, CTA). */
  footer?: ReactNode;
}

/**
 * Answer-first guide template: breadcrumbs, H1, key answer in the first
 * mobile viewport, then a readable ~68ch column with a table of contents
 * (collapsible on mobile, sticky sidebar on desktop).
 */
export function GuideLayout({ crumbs, title, meta, answer, toc, children, footer }: GuideLayoutProps) {
  return (
    <main id="main" className="page pb-4 pt-3 sm:pt-5">
      <Breadcrumbs items={crumbs} />
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-20">
        <article className="min-w-0">
          <header className="max-w-measure">
            <h1 className="mt-2 font-display text-h1 font-semibold text-ink">{title}</h1>
            {meta && <p className="mt-3 text-xs text-ink-3">{meta}</p>}
          </header>
          {answer && <div className="mt-6 max-w-measure">{answer}</div>}
          {toc && toc.length > 0 && (
            <div className="mt-5 max-w-measure">
              <TocMobile items={toc} />
            </div>
          )}
          <div className="prose-guide mt-8">{children}</div>
          {footer && <div className="max-w-measure">{footer}</div>}
        </article>
        {toc && toc.length > 0 && (
          <aside className="hidden pt-10 lg:block">
            <TocSidebar items={toc} />
          </aside>
        )}
      </div>
    </main>
  );
}
