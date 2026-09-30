import type { ReactNode } from 'react';

/**
 * The answer-first box at the top of a guide. `question` is the page's main
 * search question in the reader's words; the first child answers it directly.
 */
export function KeyAnswer({ question, children, id = 'short-answer' }: { question: string; children: ReactNode; id?: string }) {
  return (
    <section aria-labelledby={id} className="rounded-lg border border-brand-tint bg-brand-soft p-5 text-ink-2 sm:p-6">
      <h2 id={id} className="font-display text-[1.25rem] font-semibold leading-snug text-brand-deep sm:text-[1.375rem]">
        {question}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
