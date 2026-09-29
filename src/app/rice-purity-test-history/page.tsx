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

const BASE_URL = 'https://www.ricepuritytestapp.com';
const URL = `${BASE_URL}/rice-purity-test-history`;
const TITLE = 'Rice Purity Test History: From a 1924 Campus Survey to TikTok';
const DESCRIPTION =
  'How the Rice Purity Test began as a Rice Thresher survey in 1924, spread across campuses, moved online in the 1990s and went viral on TikTok in the 2020s.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

const TIMELINE = [
  { year: '1924', text: 'The Rice Thresher, Rice University’s student newspaper, prints the results of an informal ten-question survey of 119 undergraduate women.' },
  { year: '1930s', text: 'Similar "purity" and "virtue" tests appear at other colleges, including Barnard, the University of Toronto and Indiana University.' },
  { year: '1980s', text: 'The Thresher keeps revisiting the idea, often on its satirical back page, and the lists grow much longer; one 1988 version runs to 150 questions.' },
  { year: '1990s', text: 'Text versions circulate online, and the first web-based purity test appears in 1994.' },
  { year: '2020s', text: 'A 100-question version becomes a TikTok trend; The Independent reported on the craze among Gen Z users in 2021.' },
];

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <ArticleSchema headline={TITLE} datePublished="2026-01-12" dateModified="2026-09-27" url={URL} description={DESCRIPTION} />
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Rice Purity Test History' }]} />

        <Heading as="h1" size="3xl" className="mb-2">
          The History of the Rice Purity Test
        </Heading>
        <Text variant="small" color="muted" className="mb-6">Last reviewed September 27, 2026</Text>

        <article className="space-y-8 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            The Rice Purity Test is about a century older than TikTok. It started as a student-newspaper survey at Rice
            University in Houston, spent decades as a campus in-joke, moved onto the early internet, and then became one
            of the most shared quizzes of the social-media era.
          </Text>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">Timeline</Heading>
            <ol className="space-y-4 border-l-2 border-green-200 ml-2">
              {TIMELINE.map((t) => (
                <li key={t.year} className="pl-4">
                  <span className="font-bold text-gray-800">{t.year}</span>
                  <span className="block leading-relaxed">{t.text}</span>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">The campus era</Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Rice is a small, residential university where new students live and eat together in close-knit colleges. A
              questionnaire that everyone fills out and then compares is a natural icebreaker in that setting, and the
              student paper leaned into it. The <em>Thresher</em> printed and reprinted versions over the years, usually
              in a joking tone: &ldquo;purity&rdquo; was never meant as a moral verdict.
            </Text>
            <Text variant="body" className="leading-relaxed">
              The questions changed with the times. Early versions asked about things like dancing and drinking; later
              lists grew to cover dating, sex, drugs and trouble with the law, and became far longer than the 100 items
              most people know today.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">Going online</Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Purity tests were being passed around online well before the web, and the first web-based version appeared
              in 1994. Websites that scored your answers automatically changed how people took the test: a campus ritual
              done in a group became something you could do alone, out of curiosity, and then choose whether to share.
            </Text>
            <Text variant="body" className="leading-relaxed">
              Versions multiplied. Sites edited, added and removed items, so the &ldquo;Rice&rdquo; test became one
              version among many. The list on this site is based on the widely circulated 100-question version with
              gender-neutral wording and three items replaced; the{' '}
              <Link href="/rice-purity-test-questions" className="text-green-600 underline">questions page</Link> explains
              exactly what changed.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">The TikTok era</Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Social media gave the test scale. In the early 2020s, videos of people revealing their scores spread on
              TikTok, and the 100-question version reached an audience far beyond college campuses. Scores became
              semi-public, which produced a different kind of conversation: reactions, comparisons and arguments about
              what a &ldquo;normal&rdquo; score is.
            </Text>
            <Text variant="body" className="leading-relaxed">
              That&apos;s also when the test&apos;s audience got younger. Because the questions are about sex, drugs and
              the law, this site is for adults only.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">Why it has lasted</Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Most quizzes disappear within a few years. This one keeps coming back because of what it enables: an easy,
              low-stakes way to talk about experiences that are usually private. A number opens the conversation without
              anyone having to lead with the most sensitive part of their story.
            </Text>
            <Text variant="body" className="leading-relaxed">
              Each new group of students rediscovers it for the same reason the first ones enjoyed it: it&apos;s a
              shared joke with just enough truth in it to be interesting.
            </Text>
          </section>

          <Text variant="small" color="muted">
            Sources:{' '}
            <a href="https://en.wikipedia.org/wiki/Purity_test" className="underline" rel="noopener" target="_blank">
              Wikipedia, &ldquo;Purity test&rdquo;
            </a>{' '}
            (which cites the <em>Rice Thresher</em> archives and The Independent, 2021).
          </Text>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6">
            <Heading as="h2" size="lg" className="mb-3 text-green-700">Add yourself to the history</Heading>
            <Text variant="body" className="mb-5">Take the 100-question test and see where you land.</Text>
            <Link href="/test"><Button size="lg">Take the test</Button></Link>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
