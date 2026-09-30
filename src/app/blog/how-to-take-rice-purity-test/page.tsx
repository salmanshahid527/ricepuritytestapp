import Link from 'next/link';
import type { Metadata } from 'next';
import { ArticleSchema } from '@/components/ArticleSchema';
import { AboutThisGuide } from '@/components/molecules/AboutThisGuide';
import { GuideLayout } from '@/components/templates/GuideLayout';
import { AdSlot } from '@/components/organisms/AdSlot';
import { CtaBox } from '@/components/organisms/CtaBox';
import { RelatedGuides } from '@/components/organisms/RelatedGuides';
import { GUIDES } from '@/lib/guides';
import { PAGE_DATES } from '@/lib/dates';
import { BASE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'How to Take the Rice Purity Test: Tips for Accurate Results',
  description: 'How to take the Rice Purity Test and get a score that feels right: reading ambiguous questions, answering for your whole life, and what to do with the result.',
  keywords: 'how to take rice purity test, rice purity test tips, rice purity test guide',
  alternates: { canonical: `${BASE_URL}/blog/how-to-take-rice-purity-test` },
  openGraph: {
    title: 'How to Take the Rice Purity Test: Tips for Accurate Results',
    description: 'Tips for getting the most accurate Rice Purity Test results. Step-by-step guide.',
    url: `${BASE_URL}/blog/how-to-take-rice-purity-test`,
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title: 'How to Take the Rice Purity Test', description: 'Tips for accurate results.' },
  robots: { index: true, follow: true },
};

const STEPS = [
  {
    heading: 'Read each question once, then decide',
    text: "Don't rush, but don't linger either. Read the question, let your gut react, then move on. Your first instinct after a clear read is almost always your honest answer. The longer you sit with an ambiguous question, the more likely you are to rationalize your way to the wrong answer — usually in the direction of \"well, technically no, because...\"",
  },
  {
    heading: 'When a question is ambiguous, lean toward yes',
    text: 'Some questions are deliberately broad. If your honest reaction is "yes, kind of" or "yes, once" or "yes, in a loose sense" — check it. The test is designed to count experiences, not to make fine distinctions. Holding out for a perfectly literal "yes" will give you a score that\'s artificially high. If it applies even loosely, it probably belongs checked.',
  },
  {
    heading: "Don't answer for who you want to be",
    text: "This is the subtle version of dishonesty — not outright lying, but quietly skipping things that feel inconsistent with how you see yourself. If something happened but you've moved on from it, it still counts. The test is a historical record, not a character statement. Check what actually happened, not what represents the current you.",
  },
  {
    heading: 'Your progress saves automatically',
    text: "If you need to pause, close the tab, and come back later — that works. Your answers are saved in this browser until you reset the test or clear your browsing data. No account needed, nothing synced anywhere. Just reopen the page and you'll be where you left off.",
  },
];

const TOC = [
  { id: 'before-you-start', label: 'Before you start' },
  { id: 'going-through', label: 'Going through the questions' },
  { id: 'one-mistake', label: 'The one mistake that ruins scores' },
  { id: 'after', label: 'After you get your score' },
];

export default function HowToTakeTestPage() {
  return (
    <>
      <ArticleSchema
        headline="How to Take the Rice Purity Test: Tips for Accurate Results"
        datePublished="2026-01-11"
        dateModified={PAGE_DATES['/blog/how-to-take-rice-purity-test'].modified}
        url={`${BASE_URL}/blog/how-to-take-rice-purity-test`}
        description="Tips for getting the most accurate Rice Purity Test results."
      />
      <GuideLayout
        crumbs={[
          { label: 'Guides', href: '/blog' },
          { label: 'How to Take the Test', href: '/blog/how-to-take-rice-purity-test' },
        ]}
        title="How to Take the Rice Purity Test: Tips for Accurate Results"
        meta="Published: January 11, 2026 • 4 min read"
        toc={TOC}
        footer={
          <>
            <AboutThisGuide path="/blog/how-to-take-rice-purity-test" />
            <AdSlot name="howto-end" className="mt-14" />
            <RelatedGuides guides={[GUIDES.questions, GUIDES.score, GUIDES.age, GUIDES.meaning]} />
            <CtaBox heading="Ready to go?" cta="Start the Rice Purity Test">
              <p>Free, anonymous, takes about 10-15 minutes. Your answers stay on your device.</p>
            </CtaBox>
          </>
        }
      >
        <p className="text-lead" style={{ marginTop: 0 }}>
          The Rice Purity Test doesn&apos;t require preparation — it&apos;s a checkbox list, not an exam. But there are a few
          things that genuinely affect whether your score ends up meaningful or just a number you typed out too quickly.
          Here&apos;s how to take it in a way that&apos;s actually worth doing.
        </p>

        <h2 id="before-you-start">Before You Start</h2>
        <p>
          You&apos;ll need about 10-15 minutes and some privacy. Not because the test requires concentration exactly, but
          because answering honestly is easier when you&apos;re not doing it with someone reading over your shoulder. Your
          answers are processed entirely in your browser — nothing is sent anywhere, and nothing is stored outside it — so
          the only audience that matters is you.
        </p>
        <p>
          One thing worth settling before you start: are you going to answer for your whole life, or just recently? The test
          asks &ldquo;have you ever&rdquo; — not &ldquo;do you currently&rdquo; or &ldquo;in the past year.&rdquo; If
          something happened five years ago and hasn&apos;t happened since, it still counts. People who answer with their
          present-day self in mind typically undercount significantly. Decide upfront that you&apos;re answering for
          everything, ever.
        </p>

        <h2 id="going-through">Going Through the Questions</h2>
        <ol className="!list-none space-y-4 !pl-0">
          {STEPS.map((s, i) => (
            <li key={s.heading} className="card flex gap-4 p-5" style={{ marginTop: i === 0 ? 0 : undefined }}>
              <span className="font-display text-[1.5rem] font-semibold leading-none text-brand">{i + 1}</span>
              <div>
                <h3 style={{ marginTop: 0 }}>{s.heading}</h3>
                <p className="mt-1">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p>
          Not sure what an item means? Slang and confusing wording, from &ldquo;kissed horizontally&rdquo; to MPS, is
          explained item by item on the <Link href="/rice-purity-test-questions">questions page</Link>.
        </p>

        <AdSlot name="howto-mid" />

        <h2 id="one-mistake">The One Mistake That Ruins Scores</h2>
        <p>
          The most common way to get a score that doesn&apos;t feel accurate: answering only for your recent past. People do
          this instinctively — you&apos;re answering now, so you think about now. But the test covers your whole life. High
          school, early college, any period where your circumstances were different than they are today — all of that
          counts.
        </p>
        <p>
          If you take the test and get a score that seems too high (meaning you feel like you&apos;ve checked too few boxes),
          the most likely explanation is that you were unconsciously filtering out older experiences. Go back through and ask
          yourself: not &ldquo;do I do this now&rdquo; but &ldquo;have I ever done this at any point in my life.&rdquo;
        </p>

        <h2 id="after">After You Get Your Score</h2>
        <p>
          The number is most useful when you share it with someone you trust and actually talk about the differences. You
          and a close friend with similar backgrounds often score differently — and the questions where you diverge tell you
          something more interesting than the total.
        </p>
        <p>
          For context on what your score actually means in terms of ranges and averages, the{' '}
          <Link href="/rice-purity-test-score">score guide</Link> has the breakdown, including{' '}
          <Link href="/rice-purity-test-score#how-calculated">how the score is calculated</Link>. For how it compares by age group, see
          the <Link href="/rice-purity-test-average-score-by-age">average score by age</Link> page.
        </p>
        <p>
          And if you rushed through and feel like the score doesn&apos;t represent your honest history — retake it.
          There&apos;s no limit, and you can reset your answers to start fresh.
        </p>
      </GuideLayout>
    </>
  );
}
