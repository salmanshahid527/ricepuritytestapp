import Link from 'next/link';
import type { GuideLink } from '@/lib/guides';

export function RelatedGuides({ guides, heading = 'Related guides' }: { guides: GuideLink[]; heading?: string }) {
  return (
    <section aria-labelledby="related-guides" className="mt-14">
      <h2 id="related-guides" className="font-display text-h2 font-semibold text-ink">
        {heading}
      </h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {guides.map((g) => (
          <li key={g.href}>
            <Link
              href={g.href}
              className="group flex h-full flex-col rounded-lg border border-line bg-surface p-5 shadow-card transition-[border-color,box-shadow] hover:border-brand hover:shadow-lift"
            >
              <span className="font-semibold text-ink group-hover:text-brand-deep">
                {g.label} <span aria-hidden="true">→</span>
              </span>
              <span className="mt-1 text-small text-ink-3">{g.blurb}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
