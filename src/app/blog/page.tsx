import Link from 'next/link';
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { CtaBox } from '@/components/organisms/CtaBox';
import { BASE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Rice Purity Test Guides: Scores, Questions, Meaning & History',
  description: 'Guides to the Rice Purity Test: average scores by age, what each score range means, all 100 questions explained, and the history of the test.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: 'Rice Purity Test Guides: Scores, Questions, Meaning & History',
    description: 'Average scores by age, score meanings, all 100 questions explained, and the history of the test.',
    url: `${BASE_URL}/blog`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rice Purity Test Guides: Scores, Questions, Meaning & History',
    description: 'Average scores by age, score meanings, questions and history.',
  },
};

const guides = [
  {
    href: '/rice-purity-test-average-score-by-age',
    title: 'Rice Purity Test Average Score by Age',
    description: 'Typical score ranges for 18-22, 23-25, 26-30 and 31+, and how to compare your own result.',
  },
  {
    href: '/rice-purity-test-score',
    title: 'Rice Purity Test Score: What Your Score Means',
    description: 'How the score is calculated and what each range from 0 to 100 usually looks like in practice.',
  },
  {
    href: '/rice-purity-test-questions',
    title: 'All 100 Rice Purity Test Questions, Explained',
    description: 'Every question on the test, grouped by category, with notes on the ones people find confusing.',
  },
  {
    href: '/rice-purity-test-meaning',
    title: 'What Is the Rice Purity Test?',
    description: 'What the test is, what it is not, and how to read your result without over-reading it.',
  },
  {
    href: '/rice-purity-test-history',
    title: 'Rice Purity Test History',
    description: 'From a Rice University orientation handout to a TikTok trend: how the test spread.',
  },
  {
    href: '/blog/how-to-take-rice-purity-test',
    title: 'How to Take the Rice Purity Test: Tips for Accurate Results',
    description: 'How to handle ambiguous questions, why to answer for your whole life, and what to do with your score.',
  },
];

export default function BlogPage() {
  return (
    <main id="main" className="page pb-4 pt-3 sm:pt-5">
      <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />
      <h1 className="mt-2 font-display text-h1 font-semibold text-ink">Rice Purity Test Guides</h1>
      <p className="mt-4 max-w-measure text-lead text-ink-2">
        Everything we&apos;ve written about the Rice Purity Test in one place: what scores mean, how they vary by age, the
        questions themselves, and where the test came from.
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {guides.map((post) => (
          <li key={post.href}>
            <Link
              href={post.href}
              className="group flex h-full flex-col rounded-lg border border-line bg-surface p-6 shadow-card transition-[border-color,box-shadow] hover:border-brand hover:shadow-lift"
            >
              <h2 className="font-display text-[1.375rem] font-semibold leading-snug text-ink group-hover:text-brand-deep">
                {post.title}
              </h2>
              <p className="mt-2 text-ink-2">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="max-w-measure">
        <CtaBox heading="Take the test first">
          <p>Free, anonymous, about 10 minutes. Your answers stay in your browser.</p>
        </CtaBox>
      </div>
    </main>
  );
}
