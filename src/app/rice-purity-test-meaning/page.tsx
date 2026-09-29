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
import { MPS_NOTE } from '@/lib/questionNotes';

const BASE_URL = 'https://www.ricepuritytestapp.com';
const URL = `${BASE_URL}/rice-purity-test-meaning`;
const TITLE = 'What Is the Rice Purity Test? Meaning, Origin and How It Works';
const DESCRIPTION =
  'What the Rice Purity Test is, what "purity" actually means here, where it came from, what MPS stands for, and what your result can and cannot tell you.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESCRIPTION, url: URL, type: 'article' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
};

export default function MeaningPage() {
  return (
    <div className="min-h-screen bg-white">
      <ArticleSchema headline={TITLE} datePublished="2026-01-12" dateModified="2026-09-27" url={URL} description={DESCRIPTION} />
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'What Is the Rice Purity Test?' }]} />

        <Heading as="h1" size="3xl" className="mb-2">
          What Is the Rice Purity Test?
        </Heading>
        <Text variant="small" color="muted" className="mb-6">Last reviewed September 27, 2026 · For adults 18+</Text>

        <article className="space-y-8 text-gray-700">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <Heading as="h2" size="lg" className="mb-3">The short answer</Heading>
            <Text variant="body" className="leading-relaxed">
              The Rice Purity Test is a 100-item &ldquo;have you ever&hellip;&rdquo; checklist about dating, sex, alcohol,
              drugs and run-ins with the law. You check everything that applies, and your score is 100 minus the number of
              checks. It comes from a long-running student tradition at Rice University in Houston, and it&apos;s meant
              as a light-hearted way to compare notes with friends, not as a measure of anyone&apos;s worth.
            </Text>
          </div>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">What &ldquo;purity&rdquo; means here</Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              &ldquo;Purity&rdquo; sounds like a moral verdict, but on this test it never was one. Students used the word
              with a wink: the joke was that anyone could be ranked by a checklist of mostly harmless milestones. A higher
              score only means fewer boxes checked.
            </Text>
            <Text variant="body" className="leading-relaxed">
              That irony has faded as the test spread to people without the campus context. Some treat a high score as
              something to be proud of and a low one as something to hide. Neither makes sense. The most accurate reading
              of your result is simply: &ldquo;this many items on this particular list apply to me.&rdquo;
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">Why is it called the Rice Purity Test?</Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Because it comes from Rice University. The student newspaper, the <em>Rice Thresher</em>, published an
              informal ten-question &ldquo;purity&rdquo; survey of undergraduates as far back as 1924, and the paper
              revisited and expanded the idea many times after that. Similar tests circulated at other colleges through
              the twentieth century, but the Rice version is the one that stuck, moved online, and became the
              100-question list people know today.
            </Text>
            <Text variant="body" className="leading-relaxed">
              Rice University does not run or endorse any website that hosts the test, including this one. The full story
              is on our <Link href="/rice-purity-test-history" className="text-green-600 underline">history page</Link>.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">How it works</Heading>
            <ul className="list-disc ml-5 space-y-2">
              <li>There are 100 items, ordered roughly from common (held hands romantically) to rare.</li>
              <li>You check every item that has ever applied to you. Recent or not doesn&apos;t matter.</li>
              <li>Each check subtracts one point from 100. All items weigh the same.</li>
              <li>
                You can read every item first on the{' '}
                <Link href="/rice-purity-test-questions" className="text-green-600 underline">questions page</Link>, and
                see what your number means on the{' '}
                <Link href="/rice-purity-test-score" className="text-green-600 underline">score guide</Link>.
              </li>
            </ul>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">What does MPS mean?</Heading>
            <Text variant="body" className="leading-relaxed">{MPS_NOTE}</Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">Why people take it</Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Mostly social comparison. People want to know how they stack up against friends, a partner or a roommate.
              That&apos;s not a flaw; it&apos;s the point. The campus version worked because it gave a room full of
              strangers something to talk about, and sharing a score still opens conversations that are hard to start
              directly.
            </Text>
            <Text variant="body" className="leading-relaxed">
              A single number is also oddly satisfying. You can&apos;t easily compare life experiences, but &ldquo;I got
              a 62, you got a 74&rdquo; is instantly understandable, even if it hides almost everything interesting.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">What it can and can&apos;t tell you</Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              It tells you one thing reliably: how many of its 100 items you&apos;ve experienced. The list leans heavily
              toward romantic, sexual and risk-taking experiences and ignores almost everything else about a life, such as
              travel, work, friendships or creativity.
            </Text>
            <Text variant="body" className="leading-relaxed">
              It also can&apos;t see context. Something that happened once, years ago, counts the same as something that
              is part of your life now. Treat the score as a prompt for reflection, not a conclusion. If your number
              surprises you, the more interesting question is what you expected and why.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-600">Is it official, and is it private?</Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              There is no official online version. Many sites host the list, usually with small wording changes; ours is
              explained on the questions page, including the three items we replaced.
            </Text>
            <Text variant="body" className="leading-relaxed">
              On this site your answers stay in your browser and are never sent to us.
              {process.env.NEXT_PUBLIC_STATS_ENABLED === '1' &&
                ' After you finish, you can choose to add just your score and age band to our anonymous statistics, or not.'}
            </Text>
          </section>

          <Text variant="small" color="muted">
            Source for historical dates:{' '}
            <a href="https://en.wikipedia.org/wiki/Purity_test" className="underline" rel="noopener" target="_blank">
              Wikipedia, &ldquo;Purity test&rdquo;
            </a>
            .
          </Text>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6">
            <Heading as="h2" size="lg" className="mb-3 text-green-700">Try it yourself</Heading>
            <Text variant="body" className="mb-5">About 10 minutes, no sign-up, adults only.</Text>
            <Link href="/test"><Button size="lg">Take the test</Button></Link>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
