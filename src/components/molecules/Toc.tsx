export interface TocItem {
  id: string;
  label: string;
}

function TocList({ items }: { items: TocItem[] }) {
  return (
    <ol className="space-y-0.5 text-small">
      {items.map((t) => (
        <li key={t.id}>
          <a
            href={`#${t.id}`}
            className="block rounded-sm border-l-2 border-line py-1.5 pl-3 text-ink-2 hover:border-brand hover:text-brand-deep"
          >
            {t.label}
          </a>
        </li>
      ))}
    </ol>
  );
}

/** Collapsible table of contents for small screens. */
export function TocMobile({ items }: { items: TocItem[] }) {
  return (
    <details className="group rounded-md border border-line bg-surface lg:hidden">
      <summary className="flex min-h-tap cursor-pointer list-none items-center justify-between px-4 text-small font-semibold text-ink [&::-webkit-details-marker]:hidden">
        On this page
        <svg viewBox="0 0 20 20" className="h-4 w-4 text-ink-3 transition-transform group-open:rotate-180" aria-hidden="true">
          <path d="M5 7.5l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </summary>
      <nav aria-label="On this page" className="px-4 pb-4">
        <TocList items={items} />
      </nav>
    </details>
  );
}

/** Sticky table of contents for wide screens. */
export function TocSidebar({ items }: { items: TocItem[] }) {
  return (
    <nav aria-label="On this page" className="sticky top-6">
      <p className="eyebrow mb-3 text-ink-3">On this page</p>
      <TocList items={items} />
    </nav>
  );
}
