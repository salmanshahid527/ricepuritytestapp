import type { ReactNode } from 'react';

/**
 * The answer-first box at the top of a guide. `question` is the page's main
 * search question in the reader's words; the first child answers it directly.
 */
export function KeyAnswer({ question, children, id = 'short-answer' }: { question: string; children: ReactNode; id?: string }) {
  return (
    <section aria-labelledby={id} className="overflow-hidden rounded-lg border border-brand-tint bg-brand-soft text-ink-2">
      <h2 id={id} className="bg-brand-deep px-5 py-3.5 font-display text-[1.25rem] font-semibold leading-snug text-white sm:px-6 sm:text-[1.375rem]">
        {question}
      </h2>
      <div className="space-y-3 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">{children}</div>
    </section>
  );
}
