import React from 'react';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import Link from 'next/link';
import { Button } from '@/components/atoms/Button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The History of the Rice Purity Test: From Campus to Internet | Rice Purity Test Guide & Tips',
  description: 'Read this guide on the history of the Rice Purity Test — learn key tips, explanations, and actionable insights about the Rice Purity Test and scores.',
  keywords: 'rice purity test history, rice purity test origins, rice university purity test history',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.ricepuritytestapp.com/rice-purity-test-history',
  },
};

export default function HistoryBlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'History' }
        ]} />
        <Heading as="h1" size="3xl" className="mb-6">
          The History of the Rice Purity Test: From Campus to Internet
        </Heading>
        <div className="text-sm text-gray-500 mb-8">
          Published: January 12, 2026 • 7 min read
        </div>

        <article className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <Text variant="large" className="leading-relaxed">
            The Rice Purity Test has been around for over 40 years. It started on paper. It survived the transition to the internet. It outlasted every other quiz trend of its era. Here's the story of how that happened — and why a questionnaire created by college students in the 1980s is still going viral today.
          </Text>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-500">
              Houston, 1980s: The Paper Version
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Rice University in Houston sits apart from many American universities — small (around 4,000 undergraduates), intensely academic, organized around a residential college system where students eat, live, and socialize within close-knit communities. It's the kind of place where freshman orientation matters more than at larger schools, because the bonds formed in that first week tend to last.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              At some point in the 1980s — the exact year and author are unknown — someone put together a paper questionnaire and started circulating it during orientation. The concept wasn't new: "purity tests" had existed on American campuses since at least the 1930s, and various universities had their own versions. But the Rice version found a format that worked: exactly 100 yes/no questions, scored by simple subtraction, covering a range of experiences broad enough to be relevant to almost anyone.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The tone was part of the appeal. The test was called a "purity" test, but the framing was winking — college students in the '80s were perfectly aware they were using the word ironically. Nobody was being genuinely judged against a moral standard. The point was to have a shared framework for talking about personal history in a context where people were brand-new to each other and needed a low-stakes conversation opener.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              It worked. The test became a Rice University tradition, passed from class to class, with students photocopying and distributing it each fall. Some students kept their scored sheets. Some compared with roommates. The ritual built up over years into something that incoming students expected as part of the orientation experience.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-500">
              The Internet Finds It — Late 1990s to Early 2000s
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              As the internet spread through American universities in the early-to-mid 1990s, students began posting things that had previously existed only on paper. Usenet groups, early mailing lists, and personal pages on university servers became repositories for campus culture that had never been digitized before. The Rice Purity Test showed up in these spaces.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              What happened next was gradual but significant. The test spread from Rice to other Texas schools, then to universities nationwide, then internationally. Students encountered it not from a classmate handing them a sheet of paper but from a forum post or a link emailed by a friend at another school. By the late 1990s, dedicated websites were hosting interactive versions — you could answer online and get your score calculated immediately.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The shift to digital changed something important about how people took it. On paper, in a group, there was social accountability. Online, alone, there wasn't. People could answer more honestly because no one was watching. This probably made digital scores more accurate — and made the test more personally meaningful, because it was now a private act of self-assessment rather than a performed social one.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              Different websites put out slightly different versions. Some edited the questions for clarity; some cut items that seemed dated or ambiguous; some added new ones. A loose consensus formed around a canonical 100-question set that felt true to the original without being a direct transcription. That's largely the version in widest circulation today.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-500">
              TikTok and the Second Wave — 2019 to Present
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              By the 2010s, the Rice Purity Test was well-established as an internet tradition but wasn't particularly trending. It was the kind of thing college freshmen still encountered, often introduced by older students, but it didn't generate much noise in the broader culture.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              TikTok changed that. Around 2019-2020, a new generation discovered it and started posting reaction videos: recording themselves taking the test, sharing their scores, debating what different numbers meant, tagging friends to compare. The hashtag #RicePurityTest accumulated hundreds of millions of views. Teenagers who had never heard of Rice University were suddenly asking their older siblings to explain what a "70" meant.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              The social media context introduced something the test had never had before: public scores. The original campus version was semi-private — you compared within your immediate social circle. TikTok made scores a kind of broadcast, with comment sections full of people processing their reactions and debating what various numbers implied about the people who got them.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              This came with friction that the original didn't have. Some people treated high scores as something to be proud of; others treated them as naive or sheltered. Some treated low scores as impressive; others as concerning. None of that was in the original test's design — but it emerged when the test scaled beyond intimate social circles into mass public sharing.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-4 text-green-500">
              What Kept It Alive Across Four Decades
            </Heading>
            <Text variant="body" className="leading-relaxed mb-4">
              Most internet quizzes are forgotten within a year or two. The Rice Purity Test has outlasted all of them. The explanation isn't really about the test's quality as a quiz — it's simple enough that any quiz-maker could replicate the format. The reason it survives is that it keeps solving the same human problem it was designed to solve in the 1980s.
            </Text>
            <Text variant="body" className="leading-relaxed mb-4">
              New students show up somewhere — a college dormitory, a group chat, a friend group — and need a way to figure out who they're around. The test gives them a shared reference point and a reason to talk about things that are usually off-limits in early conversations. That function doesn't go out of date. Every year a new cohort of 18-year-olds shows up somewhere new and rediscovers it.
            </Text>
            <Text variant="body" className="leading-relaxed">
              The questions themselves have barely changed. What changed is the context: paper to websites to social media to apps. But the social function stayed constant. That's a rare thing for any cultural artifact — to survive changing technology by being genuinely useful in a way that technology can't replace.
            </Text>
          </section>

          <section className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
            <Heading as="h2" size="lg" className="mb-4 text-green-600">
              Take the same test that started at Rice
            </Heading>
            <Text variant="body" className="mb-6 text-gray-700">
              Over 40 years later, the questions are largely the same. Your score becomes part of a very long chain.
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
