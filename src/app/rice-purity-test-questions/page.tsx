import Link from 'next/link';
import type { Metadata } from 'next';
import { ArticleSchema } from '@/components/ArticleSchema';
import { GuideLayout } from '@/components/templates/GuideLayout';
import { AdSlot } from '@/components/organisms/AdSlot';
import { CtaBox } from '@/components/organisms/CtaBox';
import { RelatedGuides } from '@/components/organisms/RelatedGuides';
import { questions, QUESTION_GROUPS } from '@/lib/questions';
import { QUESTION_NOTES, MPS_NOTE } from '@/lib/questionNotes';
import { GUIDES } from '@/lib/guides';
import { BASE_URL } from '@/lib/site';

const URL = `${BASE_URL}/rice-purity-test-questions`;
const TITLE = 'Rice Purity Test Questions: All 100, Explained';
const DESCRIPTION =
  'The full list of 100 Rice Purity Test questions, grouped by theme, with plain-English meanings for the confusing ones (kissed horizontally, MPS, sensual context and more).';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

const REPLACED = [
  { id: 87, was: 'an item about incest' },
  { id: 88, was: 'an item about bestiality' },
  { id: 89, was: 'an item about attempted suicide' },
];

const TOC = [
  { id: 'full-list', label: 'The full list of 100 questions' },
  ...QUESTION_GROUPS.map((g) => ({ id: `group-${g.from}`, label: `${g.name} (${g.from}–${g.to})` })),
  { id: 'short-version', label: 'The short version' },
  { id: 'how-grouped', label: 'How the questions are grouped' },
  { id: 'mps', label: 'What MPS means' },
  { id: 'question-mark', label: 'The question mark' },
  { id: 'differences', label: 'How this version differs' },
  { id: 'before-you-start', label: 'Before you start' },
];

/**
 * Answer-first: the question list starts in the first mobile viewport. The
 * summary, grouping table and background follow the list.
 */
export default function QuestionsPage() {
  return (
    <>
      <ArticleSchema headline={TITLE} datePublished="2026-01-10" dateModified="2026-09-27" url={URL} description={DESCRIPTION} />
      <GuideLayout
        crumbs={[{ label: 'Rice Purity Test Questions', href: '/rice-purity-test-questions' }]}
        title="Rice Purity Test Questions: All 100, Explained"
        meta="Last reviewed September 27, 2026 · For adults 18+"
        toc={TOC}
        footer={
          <>
            <AdSlot name="questions-end" className="mt-14" />
            <RelatedGuides guides={[GUIDES.score, GUIDES.age, GUIDES.meaning, GUIDES.howTo]} />
            <CtaBox heading="Ready to count yours?" secondary={{ href: GUIDES.age.href, label: 'See averages by age' }}>
              <p>The test page shows the same 100 items with checkboxes and adds up your score as you go.</p>
            </CtaBox>
          </>
        }
      >
        <p className="sm:text-lead" style={{ marginTop: 0 }}>
          Below is every question on this site&apos;s version of the Rice Purity Test, grouped by theme, with short
          plain-English notes under the ones people most often ask about. Each item starts with an unspoken &ldquo;Have you
          ever&hellip;&rdquo;, so you check it if it has happened at any point in your life.
        </p>

        <section aria-labelledby="full-list">
          <h2 id="full-list" style={{ marginTop: '1.1em' }}>
            The full list of 100 questions
          </h2>
          <p className="mt-1 text-small text-ink-3">
            Notes in grey explain wording that trips people up. They describe what a phrase means, not whether you should
            have done it.
          </p>
          <div className="mt-5 space-y-10">
            {QUESTION_GROUPS.map((g) => (
              <section key={g.name} id={`group-${g.from}`} aria-labelledby={`group-${g.from}-h`}>
                <h3 id={`group-${g.from}-h`} className="flex flex-wrap items-baseline gap-x-2" style={{ marginTop: 0 }}>
                  {g.name}{' '}
                  <span className="text-small font-normal text-ink-3">
                    (questions {g.from}–{g.to})
                  </span>
                </h3>
                <ol start={g.from} className="card mt-3 divide-y divide-line !pl-0" style={{ listStyle: 'none' }}>
                  {questions
                    .filter((q) => q.id >= g.from && q.id <= g.to)
                    .map((q) => {
                      const note = QUESTION_NOTES[q.id];
                      return (
                        <li key={q.id} className="flex gap-3 px-4 py-3 sm:px-5" style={{ marginTop: 0 }}>
                          <span className="w-7 shrink-0 text-right font-semibold tabular-nums text-ink-3">{q.id}.</span>
                          <span className="min-w-0 flex-1">
                            <span className="text-ink">{q.text}</span>
                            {note && (
                              <span className="mt-1.5 block rounded-md bg-sunken px-3 py-2 text-small text-ink-2">
                                <strong>{note.term}:</strong> {note.note}
                              </span>
                            )}
                          </span>
                        </li>
                      );
                    })}
                </ol>
              </section>
            ))}
          </div>
        </section>

        <AdSlot name="questions-mid" />

        <section aria-labelledby="short-version" className="rounded-lg border border-brand-tint bg-brand-soft p-5 sm:p-6">
          <h2 id="short-version" style={{ marginTop: 0 }}>
            The short version
          </h2>
          <ul className="mt-3">
            <li>There are 100 questions and every one is worth one point.</li>
            <li>Your score is 100 minus the number of boxes you check, so 30 checks gives a 70.</li>
            <li>The list runs roughly from mild (holding hands) to rare (items near the end).</li>
            <li>
              Your answers stay in your browser. For what a given number means, see the{' '}
              <Link href="/rice-purity-test-score">score guide</Link>.
            </li>
          </ul>
        </section>

        <h2 id="how-grouped">How the 100 questions are grouped</h2>
        <p>
          The list isn&apos;t split into official sections, but it clusters into six themes. Knowing where each theme sits
          helps explain why two people with the same score can have very different histories: one may have checked mostly
          alcohol and school items, the other mostly dating ones.
        </p>
        <div className="table-wrap">
          <table className="table-clean">
            <thead>
              <tr>
                <th scope="col">Theme</th>
                <th scope="col">Questions</th>
                <th scope="col">What it covers</th>
              </tr>
            </thead>
            <tbody>
              {QUESTION_GROUPS.map((g) => (
                <tr key={g.name}>
                  <td className="font-semibold">
                    <a href={`#group-${g.from}`}>{g.name}</a>
                  </td>
                  <td className="whitespace-nowrap">
                    {g.from}–{g.to} ({g.to - g.from + 1})
                  </td>
                  <td>{g.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="mps">What does MPS mean on the Rice Purity Test?</h2>
        <p>{MPS_NOTE}</p>

        <h2 id="question-mark">What does the question mark mean?</h2>
        <p>
          Nothing special. Every item is phrased as a question (&ldquo;Been on a date?&rdquo;) because each one is short for
          &ldquo;Have you ever been on a date?&rdquo;. A question mark never changes how an item is scored, and there are no
          trick or bonus questions.
        </p>

        <h2 id="differences">How this version differs from the original Rice list</h2>
        <p>
          The questions most sites use trace back to a list published by Rice University&apos;s student newspaper, the{' '}
          <em>Thresher</em>. We changed it in two ways:
        </p>
        <ul>
          <li>
            <strong>Gender-neutral wording.</strong> Items that said &ldquo;MPS&rdquo; now say &ldquo;non-family
            member&rdquo; or &ldquo;someone you were attracted to&rdquo;.
          </li>
          <li>
            <strong>Three items replaced.</strong> We don&apos;t think these belong in a party quiz, so questions{' '}
            {REPLACED.map((r) => r.id).join(', ')} replace {REPLACED.map((r) => r.was).join(', ')} with milder night-out
            questions. Scores stay comparable with other versions to within a few points.
          </li>
        </ul>

        <h2 id="before-you-start">Before you start</h2>
        <ul>
          <li>Answer for your whole life, not just the last year. The test asks &ldquo;ever&rdquo;, not &ldquo;recently&rdquo;.</li>
          <li>If an item is ambiguous and your first reaction is &ldquo;technically, yes&rdquo;, check it.</li>
          <li>Nobody sees your answers, so there&apos;s no reason to round up or down.</li>
        </ul>
        <p className="text-small text-ink-3">
          Some items touch on sex, substances and the law. If answering brings up something difficult, you don&apos;t have
          to finish, and it can help to talk to someone. In the US you can call or text 988; outside the US,
          findahelpline.com lists free services by country.
        </p>
      </GuideLayout>
    </>
  );
}
