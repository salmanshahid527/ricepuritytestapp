import Link from 'next/link';
import { JsonLd } from '../atoms/JsonLd';
import { BASE_URL } from '@/lib/site';

export interface Crumb {
  label: string;
  /** Path of the page. The last crumb is the current page. */
  href: string;
}

/** Visible breadcrumb trail plus matching BreadcrumbList JSON-LD. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ label: 'Home', href: '/' }, ...items];
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: trail.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: c.label,
            item: `${BASE_URL}${c.href === '/' ? '' : c.href}`,
          })),
        }}
      />
      <nav aria-label="Breadcrumb" className="text-xs text-ink-3">
        <ol className="flex flex-wrap items-center gap-x-1">
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-x-1">
                {last ? (
                  <span aria-current="page" className="py-2 text-ink-2">
                    {c.label}
                  </span>
                ) : (
                  <>
                    <Link href={c.href} className="inline-flex min-h-6 items-center py-2 underline-offset-2 hover:text-brand-deep hover:underline">
                      {c.label}
                    </Link>
                    <span aria-hidden="true" className="px-0.5 text-line-strong">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
