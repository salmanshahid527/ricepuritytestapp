import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { Button } from '@/components/atoms/Button';
import { ArticleSchema } from '@/components/ArticleSchema';
import { questions, QUESTION_GROUPS } from '@/lib/questions';
import { QUESTION_NOTES, MPS_NOTE } from '@/lib/questionNotes';

const BASE_URL = 'https://www.ricepuritytestapp.com';
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

export default function QuestionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <ArticleSchema
        headline={TITLE}
        datePublished="2026-01-10"
        dateModified="2026-09-27"
        url={URL}
        description={DESCRIPTION}
      />
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Rice Purity Test Questions' }]} />

        <Heading as="h1" size="3xl" className="mb-4">
          Rice Purity Test Questions: All 100, Explained
        </Heading>
        <Text variant="small" color="muted" className="mb-6">
          Last reviewed September 27, 2026 · For adults 18+
        </Text>

        <article className="space-y-8 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            Below is every question on this site&apos;s version of the Rice Purity Test, grouped by theme, with
            short plain-English notes under the ones people most often ask about. Each item starts with an unspoken
            &ldquo;Have you ever&hellip;&rdquo;, so you check it if it has happened at any point in your life.
          </Text>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
            <Heading as="h2" size="lg" className="mb-3">The short version</Heading>
            <ul className="list-disc ml-5 space-y-2">
              <li>There are 100 questions and every one is worth one point.</li>
              <li>Your score is 100 minus the number of boxes you check, so 30 checks gives a 70.</li>
              <li>The list runs roughly from mild (holding hands) to rare (items near the end).</li>
              <li>
                Your answers stay in your browser. For what a given number means, see the{' '}
                <Link href="/rice-purity-test-score" className="text-green-600 underline">score guide</Link>.
              </li>
            </ul>
          </div>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">How the 100 questions are grouped</Heading>
            <Text variant="body" className="mb-4 leading-relaxed">
              The list isn&apos;t split into official sections, but it clusters into six themes. Knowing where each
              theme sits helps explain why two people with the same score can have very different histories: one may
              have checked mostly alcohol and school items, the other mostly dating ones.
            </Text>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="py-2 pr-4 font-semibold text-gray-800">Theme</th>
                    <th className="py-2 pr-4 font-semibold text-gray-800">Questions</th>
                    <th className="py-2 font-semibold text-gray-800">What it covers</th>
                  </tr>
                </thead>
                <tbody>
                  {QUESTION_GROUPS.map((g) => (
                    <tr key={g.name} className="border-b border-gray-100 align-top">
                      <td className="py-2 pr-4 font-medium">
                        <a href={`#group-${g.from}`} className="text-green-600 underline">{g.name}</a>
                      </td>
                      <td className="py-2 pr-4 whitespace-nowrap">
                        {g.from}–{g.to} ({g.to - g.from + 1})
                      </td>
                      <td className="py-2">{g.summary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-2 text-green-600">The full list of 100 questions</Heading>
            <Text variant="body" className="mb-6 leading-relaxed">
              Notes in grey explain wording that trips people up. They describe what a phrase means, not whether you
              should have done it.
            </Text>
            <div className="space-y-8">
              {QUESTION_GROUPS.map((g) => (
                <div key={g.name} id={`group-${g.from}`}>
                  <Heading as="h3" size="lg" className="mb-3">
                    {g.name} <span className="text-gray-500 font-normal">(questions {g.from}–{g.to})</span>
                  </Heading>
                  <ol start={g.from} className="list-decimal ml-6 space-y-2">
                    {questions
                      .filter((q) => q.id >= g.from && q.id <= g.to)
                      .map((q) => {
                        const note = QUESTION_NOTES[q.id];
                        return (
                          <li key={q.id} className="pl-1">
                            <span>{q.text}</span>
                            {note && (
                              <span className="block text-sm text-gray-500 mt-1">
                                <strong className="text-gray-600">{note.term}:</strong> {note.note}
                              </span>
                            )}
                          </li>
                        );
                      })}
                  </ol>
                </div>
              ))}
            </div>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-green-600">What does MPS mean on the Rice Purity Test?</Heading>
            <Text variant="body" className="leading-relaxed">{MPS_NOTE}</Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-green-600">What does the question mark mean?</Heading>
            <Text variant="body" className="leading-relaxed">
              Nothing special. Every item is phrased as a question (&ldquo;Been on a date?&rdquo;) because each one is
              short for &ldquo;Have you ever been on a date?&rdquo;. A question mark never changes how an item is scored,
              and there are no trick or bonus questions.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-green-600">How this version differs from the original Rice list</Heading>
            <Text variant="body" className="mb-3 leading-relaxed">
              The questions most sites use trace back to a list published by Rice University&apos;s student newspaper,
              the <em>Thresher</em>. We changed it in two ways:
            </Text>
            <ul className="list-disc ml-5 space-y-2">
              <li>
                <strong>Gender-neutral wording.</strong> Items that said &ldquo;MPS&rdquo; now say &ldquo;non-family
                member&rdquo; or &ldquo;someone you were attracted to&rdquo;.
              </li>
              <li>
                <strong>Three items replaced.</strong> We don&apos;t think these belong in a party quiz, so questions{' '}
                {REPLACED.map((r) => r.id).join(', ')} replace {REPLACED.map((r) => r.was).join(', ')} with milder
                night-out questions. Scores stay comparable with other versions to within a few points.
              </li>
            </ul>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-green-600">Before you start</Heading>
            <ul className="list-disc ml-5 space-y-2">
              <li>Answer for your whole life, not just the last year. The test asks &ldquo;ever&rdquo;, not &ldquo;recently&rdquo;.</li>
              <li>If an item is ambiguous and your first reaction is &ldquo;technically, yes&rdquo;, check it.</li>
              <li>Nobody sees your answers, so there&apos;s no reason to round up or down.</li>
            </ul>
            <Text variant="small" color="muted" className="mt-4 leading-relaxed">
              Some items touch on sex, substances and the law. If answering brings up something difficult, you
              don&apos;t have to finish, and it can help to talk to someone. In the US you can call or text 988; outside
              the US, findahelpline.com lists free services by country.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6">
            <Heading as="h2" size="lg" className="mb-3 text-green-700">Ready to count yours?</Heading>
            <Text variant="body" className="mb-5">
              The test page shows the same 100 items with checkboxes and adds up your score as you go.
            </Text>
            <div className="flex flex-wrap gap-3">
              <Link href="/test"><Button size="lg">Take the test</Button></Link>
              <Link href="/rice-purity-test-average-score-by-age"><Button size="lg" variant="secondary">See averages by age</Button></Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
