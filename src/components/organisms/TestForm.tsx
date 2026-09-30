'use client';

import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions, QUESTION_GROUPS } from '@/lib/questions';
import { STORAGE_KEYS, TOTAL_QUESTIONS } from '@/lib/constants';
import { event } from '@/lib/analytics';
import { Icon } from '../atoms/Icon';

type Answers = Record<number, boolean>;

/** Same key and shape as before the redesign ({ [id]: boolean }), so saved progress survives. */
function readAnswers(): Answers {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.ANSWERS);
    const parsed: unknown = raw ? JSON.parse(raw) : null;
    if (parsed && typeof parsed === 'object') return parsed as Answers;
  } catch {
    /* storage blocked or corrupt: start empty */
  }
  return {};
}

function writeAnswers(a: Answers) {
  try {
    window.localStorage.setItem(STORAGE_KEYS.ANSWERS, JSON.stringify(a));
  } catch {
    /* private mode or quota: the test still works, it just won't be saved */
  }
}

const GROUPS = QUESTION_GROUPS.map((g, index) => ({
  ...g,
  index,
  items: questions.filter((q) => q.id >= g.from && q.id <= g.to),
}));

interface RowProps {
  id: number;
  text: string;
  checked: boolean;
  onToggle: (id: number, checked: boolean) => void;
}

/** One question. The whole row is the label, so the tap target is the full width. */
const QuestionRow = memo(function QuestionRow({ id, text, checked, onToggle }: RowProps) {
  return (
    <li>
      <label
        htmlFor={`q${id}`}
        className="flex min-h-[3.5rem] cursor-pointer items-start gap-3.5 px-4 py-3.5 hover:bg-sunken/70 has-[:checked]:bg-brand-soft sm:px-5"
      >
        <input
          id={`q${id}`}
          name={`q${id}`}
          type="checkbox"
          className="check"
          checked={checked}
          onChange={(e) => onToggle(id, e.target.checked)}
        />
        <span className="min-w-0 flex-1 break-words pt-0.5 text-ink">
          <span className="mr-1.5 font-semibold tabular-nums text-ink-3">{id}.</span>
          {text}
        </span>
      </label>
    </li>
  );
});

export function TestForm() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Answers>({});
  const answersRef = useRef<Answers>({});
  const [current, setCurrent] = useState(0);
  const [status, setStatus] = useState('');

  // Restore saved progress after mount (localStorage is client-only).
  useEffect(() => {
    const saved = readAnswers();
    answersRef.current = saved;
    setAnswers(saved);
    router.prefetch('/results');
  }, [router]);

  const commit = useCallback((next: Answers) => {
    answersRef.current = next;
    setAnswers(next);
    writeAnswers(next);
  }, []);

  const onToggle = useCallback(
    (id: number, checked: boolean) => commit({ ...answersRef.current, [id]: checked }),
    [commit],
  );

  // Which section is in the middle of the screen, for the sticky progress bar.
  useEffect(() => {
    const els = GROUPS.map((g) => document.getElementById(`group-${g.from}`)).filter((el): el is HTMLElement => !!el);
    if (!('IntersectionObserver' in window) || els.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setCurrent(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: '-35% 0px -60% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const { checkedCount, perGroup } = useMemo(() => {
    let total = 0;
    const counts = GROUPS.map((g) => {
      let n = 0;
      for (const q of g.items) if (answers[q.id]) n++;
      total += n;
      return n;
    });
    return { checkedCount: total, perGroup: counts };
  }, [answers]);

  const calculate = () => {
    const score = TOTAL_QUESTIONS - checkedCount;
    try {
      window.localStorage.setItem(STORAGE_KEYS.SCORE, String(score));
    } catch {
      /* storage unavailable (e.g. private mode): /results shows its no-score state. We never pass ?score=, so GA can't record it. */
    }
    event('test_complete');
    router.push('/results');
  };

  const reset = () => {
    if (checkedCount === 0) return;
    if (!window.confirm(`Clear all ${checkedCount} checked answers and start over?`)) return;
    commit({});
    try {
      window.localStorage.removeItem(STORAGE_KEYS.SCORE);
    } catch {
      /* ignore */
    }
    setStatus('All answers cleared.');
    window.scrollTo({ top: 0 });
  };

  const group = GROUPS[current];
  const sectionProgress = ((current + 1) / GROUPS.length) * 100;

  return (
    <div id="test-form">
      {/* Jump links and reset */}
      <div className="page-narrow mt-6">
        <nav aria-label="Test sections" className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
          <ul className="flex w-max gap-2 pb-1 sm:w-auto sm:flex-wrap">
            {GROUPS.map((g) => (
              <li key={g.from}>
                <a
                  href={`#group-${g.from}`}
                  className="inline-flex min-h-tap items-center whitespace-nowrap rounded-full border border-line bg-surface px-3.5 text-xs font-medium text-ink-2 hover:border-brand hover:text-brand-deep"
                >
                  {g.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Sticky progress + primary action. Fixed height: never shifts content. */}
      <div className="sticky top-0 z-20 mt-6 border-y border-line bg-paper shadow-[0_6px_16px_-12px_rgb(22_33_28/0.35)]">
        <div className="page-narrow flex h-[4.5rem] items-center gap-3">
          <div className="min-w-0 flex-1">
            <p className="text-small font-semibold text-ink">
              <span className="tabular-nums">{checkedCount}</span> of {TOTAL_QUESTIONS} checked
            </p>
            <p className="truncate text-xs text-ink-3">
              Section {current + 1} of {GROUPS.length} · {group.name}
            </p>
            <div className="mt-1 h-1.5 max-w-xs overflow-hidden rounded-full bg-line" aria-hidden="true">
              <div
                className="h-full rounded-full bg-brand transition-[width] duration-300"
                style={{ width: `${sectionProgress}%` }}
              />
            </div>
          </div>
          <button type="button" onClick={calculate} className="btn btn-primary shrink-0 px-4 sm:px-5">
            Calculate my score
          </button>
        </div>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); calculate(); }} aria-label="Rice Purity Test questions">
        {GROUPS.map((g, i) => (
          <section
            key={g.from}
            id={`group-${g.from}`}
            data-index={i}
            aria-labelledby={`group-${g.from}-title`}
            className="page-narrow scroll-mt-24 pt-10"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 id={`group-${g.from}-title`} className="font-display text-h2 font-semibold text-ink">
                {g.name}
              </h2>
              <p className="text-xs text-ink-3">
                <span className="tabular-nums">{perGroup[i]}</span> of {g.items.length} checked
              </p>
            </div>
            <ol className="card mt-4 divide-y divide-line overflow-hidden" start={g.from}>
              {g.items.map((q) => (
                <QuestionRow key={q.id} id={q.id} text={q.text} checked={!!answers[q.id]} onToggle={onToggle} />
              ))}
            </ol>
          </section>
        ))}

        <div className="page-narrow mt-10">
          <div className="card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <p className="font-display text-h3 font-semibold text-ink">
                You checked <span className="tabular-nums">{checkedCount}</span> of {TOTAL_QUESTIONS}.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button type="submit" className="btn btn-primary btn-lg">
                Calculate my score <Icon name="arrow-right" className="h-5 w-5" />
              </button>
              <button type="button" onClick={reset} className="btn btn-quiet" aria-disabled={checkedCount === 0}>
                <Icon name="reset" className="h-4 w-4" /> Reset answers
              </button>
            </div>
          </div>
        </div>
      </form>
      <p role="status" aria-live="polite" className="sr-only">
        {status}
      </p>
    </div>
  );
}
