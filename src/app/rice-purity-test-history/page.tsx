import Link from 'next/link';
import type { Metadata } from 'next';
import { ArticleSchema } from '@/components/ArticleSchema';
import { GuideLayout } from '@/components/templates/GuideLayout';
import { AdSlot } from '@/components/organisms/AdSlot';
import { CtaBox } from '@/components/organisms/CtaBox';
import { RelatedGuides } from '@/components/organisms/RelatedGuides';
import { GUIDES } from '@/lib/guides';
import { BASE_URL } from '@/lib/site';

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

const TOC = [
  { id: 'timeline', label: 'Timeline' },
  { id: 'campus-era', label: 'The campus era' },
  { id: 'going-online', label: 'Going online' },
  { id: 'tiktok-era', label: 'The TikTok era' },
  { id: 'why-it-lasted', label: 'Why it has lasted' },
];

export default function HistoryPage() {
  return (
    <>
      <ArticleSchema headline={TITLE} datePublished="2026-01-12" dateModified="2026-09-27" url={URL} description={DESCRIPTION} />
      <GuideLayout
        crumbs={[{ label: 'Rice Purity Test History', href: '/rice-purity-test-history' }]}
        title="The History of the Rice Purity Test"
        meta="Last reviewed September 27, 2026"
        toc={TOC}
        footer={
          <>
            <AdSlot name="history-end" className="mt-14" />
            <RelatedGuides guides={[GUIDES.meaning, GUIDES.questions, GUIDES.age, GUIDES.score]} />
            <CtaBox heading="Add yourself to the history">
              <p>Take the 100-question test and see where you land.</p>
            </CtaBox>
          </>
        }
      >
        <p className="text-lead" style={{ marginTop: 0 }}>
          The Rice Purity Test is about a century older than TikTok. It started as a student-newspaper survey at Rice
          University in Houston, spent decades as a campus in-joke, moved onto the early internet, and then became one of
          the most shared quizzes of the social-media era.
        </p>

        <h2 id="timeline">Timeline</h2>
        <ol className="!list-none !pl-0">
          {TIMELINE.map((t) => (
            <li key={t.year} className="relative grid grid-cols-[4.5rem_minmax(0,1fr)] gap-4 border-l-2 border-brand-tint pb-5 pl-5 last:pb-0" style={{ marginTop: 0 }}>
              <span aria-hidden="true" className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-brand" />
              <span className="font-display text-[1.25rem] font-semibold text-ink">{t.year}</span>
              <span>{t.text}</span>
            </li>
          ))}
        </ol>

        <h2 id="campus-era">The campus era</h2>
        <p>
          Rice is a small, residential university where new students live and eat together in close-knit colleges. A
          questionnaire that everyone fills out and then compares is a natural icebreaker in that setting, and the student
          paper leaned into it. The <em>Thresher</em> printed and reprinted versions over the years, usually in a joking
          tone: &ldquo;purity&rdquo; was never meant as a moral verdict.
        </p>
        <p>
          The questions changed with the times. Early versions asked about things like dancing and drinking; later lists
          grew to cover dating, sex, drugs and trouble with the law, and became far longer than the 100 items most people
          know today.
        </p>

        <AdSlot name="history-mid" />

        <h2 id="going-online">Going online</h2>
        <p>
          Purity tests were being passed around online well before the web, and the first web-based version appeared in
          1994. Websites that scored your answers automatically changed how people took the test: a campus ritual done in a
          group became something you could do alone, out of curiosity, and then choose whether to share.
        </p>
        <p>
          Versions multiplied. Sites edited, added and removed items, so the &ldquo;Rice&rdquo; test became one version
          among many. The list on this site is based on the widely circulated 100-question version with gender-neutral
          wording and three items replaced; the <Link href="/rice-purity-test-questions">questions page</Link> explains
          exactly what changed.
        </p>

        <h2 id="tiktok-era">The TikTok era</h2>
        <p>
          Social media gave the test scale. In the early 2020s, videos of people revealing their scores spread on TikTok,
          and the 100-question version reached an audience far beyond college campuses. Scores became semi-public, which
          produced a different kind of conversation: reactions, comparisons and arguments about what a &ldquo;normal&rdquo;
          score is.
        </p>
        <p>
          That&apos;s also when the test&apos;s audience got younger. Because the questions are about sex, drugs and the
          law, this site is for adults only.
        </p>

        <h2 id="why-it-lasted">Why it has lasted</h2>
        <p>
          Most quizzes disappear within a few years. This one keeps coming back because of what it enables: an easy,
          low-stakes way to talk about experiences that are usually private. A number opens the conversation without anyone
          having to lead with the most sensitive part of their story.
        </p>
        <p>
          Each new group of students rediscovers it for the same reason the first ones enjoyed it: it&apos;s a shared joke
          with just enough truth in it to be interesting.
        </p>

        <p className="text-small text-ink-3">
          Sources:{' '}
          <a href="https://en.wikipedia.org/wiki/Purity_test" rel="noopener" target="_blank">
            Wikipedia, &ldquo;Purity test&rdquo;
          </a>{' '}
          (which cites the <em>Rice Thresher</em> archives and The Independent, 2021).
        </p>
      </GuideLayout>
    </>
  );
}
