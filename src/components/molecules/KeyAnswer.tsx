import type { ReactNode } from 'react';

/** The answer-first box at the top of a guide. */
export function KeyAnswer({ label = 'The short answer', children, id }: { label?: string; children: ReactNode; id?: string }) {
  return (
    <section
      aria-labelledby={id ?? 'short-answer'}
      className="rounded-lg border border-brand-tint bg-brand-soft p-5 text-ink-2 sm:p-6"
    >
      <h2 id={id ?? 'short-answer'} className="eyebrow text-brand-deep">
        {label}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
