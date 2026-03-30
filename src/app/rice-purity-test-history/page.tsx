import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import type { Metadata } from 'next';

const BASE_URL = 'https://www.ricepuritytestapp.com';

export const metadata: Metadata = {
  title: 'Rice Purity Test History | Origins & Evolution',
  description: 'Learn about the history of the Rice Purity Test, from its origins at Rice University to becoming a viral internet phenomenon.',
  keywords: 'rice purity test history, rice purity test origins, rice university purity test',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/rice-purity-test-history` },
  openGraph: {
    title: 'Rice Purity Test History | Origins & Evolution',
    description: 'The history of the Rice Purity Test, from Rice University to the internet.',
    url: `${BASE_URL}/rice-purity-test-history`,
  },
  twitter: { card: 'summary_large_image' },
};

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Rice Purity Test History' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6">
          The History of the Rice Purity Test
        </Heading>

        <article className="space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            The Rice Purity Test is one of the oldest surviving internet quizzes — but it predates the internet by at least a decade. Its history moves in three distinct phases: a paper era, an early internet era, and a social media era. Each one changed how people took it and why.
          </Text>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              The Paper Era — Rice University in the 1980s
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Rice University is a small private research university in Houston, Texas — selective, intense, and known for a strong residential college culture where students live and eat together in close-knit communities. In that environment, freshmen arriving in the fall of the 1980s would have had a lot to figure out quickly: who to trust, what the social norms were, how to find their people.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Someone — the original author has never been definitively identified — put together a paper questionnaire and started passing it around during orientation week. The concept was borrowed from older "purity tests" that had circulated on campuses since at least the 1930s, but this version found its form at Rice: 100 yes/no questions, a simple subtraction formula, a score between 0 and 100.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The tone was playful. The framing of "purity" was self-aware — almost a joke about the very concept. Students would fill it out, compare numbers, and use the results as a way into conversations about experiences that can be hard to bring up directly. It worked precisely because it was lighthearted enough to feel safe. Nobody was being judged; everyone was just being counted.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              For years, the test remained local. It circulated at Rice, occasionally spread to neighboring campuses, and existed entirely on paper. The questions stayed relatively consistent because people copied them by hand or on early photocopiers.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Going Digital — The Late 1990s and Early 2000s
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The internet changed everything, but not immediately. In the early-to-mid 1990s, as universities began getting networked, students started posting text versions of the Rice Purity Test to Usenet groups, listservs, and personal pages. The test spread university-by-university — first to other Texas schools, then nationally, then internationally.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              By the late 1990s, dedicated websites appeared that let users answer questions online and have their score calculated automatically. This was a meaningful shift. Paper tests required some social context — you handed it to someone, sat nearby while they answered. Online, the test became private. You could take it alone, honestly, without worrying about what the person sitting next to you thought.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              This change in context changed how people took it. The campus icebreaker became a personal exercise. People started taking it out of pure curiosity rather than as part of an organized social event. The score still felt like something to share — but now you chose who you shared it with.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              During this period, different versions multiplied. Some hosts edited the questions, some added new ones, some removed items that seemed dated. The original Rice University version became one version among many. The questions in widest circulation today largely reflect the consensus that settled out of those early 2000s iterations.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              The Social Media Era — 2010s to Now
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              The test had been culturally relevant for decades before social media, but TikTok — more than any other platform — turned it into a genuinely mass-media phenomenon. Around 2019-2020, a new wave of teenagers discovered it, started filming reaction videos, and began discussing scores publicly in ways earlier generations never had. #RicePurityTest accumulated millions of views.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The dynamic that social media added was scale and spectacle. The original campus version worked because it was intimate — you compared scores with people you actually knew. TikTok made scores semi-public, which produced a different kind of conversation: reactions to high scores ("that's so innocent"), reactions to low ones, debates about which questions were "fair," whole comment sections processing what particular numbers meant.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              What's notable is that the test itself barely changed through all of this. The same questions from the 1980s were going viral in the 2020s. A test created on paper handouts at one Texas university became part of how a generation of young people worldwide talked about growing up.
            </Text>
          </section>

          <section>
            <Heading size="xl" className="mb-4 text-green-500">
              Why the Test Has Lasted
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Most internet quizzes disappear within a few years. The Rice Purity Test has lasted over 40. The explanation probably has less to do with the test itself and more to do with what it enables: an easy, low-stakes way to talk about experiences that are usually private.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Each generation of college students rediscovers it because the social function it serves doesn't go away. New students still need to figure out who they're living with. Friends still want to compare notes on their histories. The test provides a shared language for that — a number that opens conversation without requiring anyone to lead with the most sensitive parts of their story.
            </Text>
            <Text variant="body" className="leading-relaxed">
              That's a surprisingly resilient design. Not because of the technology, but because of the human need it taps into.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading size="lg" className="mb-4 text-green-600">
              Add Yourself to the History
            </Heading>
            <Text variant="body" className="mb-6 text-gray-700">
              Forty-plus years of people taking this test. Find out where you land.
            </Text>
            <Link href="/test">
              <Button size="lg">Take the Test</Button>
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
