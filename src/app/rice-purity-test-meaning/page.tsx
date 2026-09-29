import Link from 'next/link';
import type { Metadata } from 'next';
import { ArticleSchema } from '@/components/ArticleSchema';
import { KeyAnswer } from '@/components/molecules/KeyAnswer';
import { AboutThisGuide } from '@/components/molecules/AboutThisGuide';
import { GuideLayout } from '@/components/templates/GuideLayout';
import { AdSlot } from '@/components/organisms/AdSlot';
import { CtaBox } from '@/components/organisms/CtaBox';
import { RelatedGuides } from '@/components/organisms/RelatedGuides';
import { MPS_NOTE } from '@/lib/questionNotes';
import { GUIDES } from '@/lib/guides';
import { PAGE_DATES, reviewedOn } from '@/lib/dates';
import { SOURCES } from '@/lib/sources';
import { BASE_URL, STATS_ENABLED } from '@/lib/site';

const PATH = '/rice-purity-test-meaning';
const URL = `${BASE_URL}${PATH}`;
const DATES = PAGE_DATES[PATH];
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

const TOC = [
  { id: 'purity', label: 'What “purity” means here' },
  { id: 'why-rice', label: 'Why it’s called the Rice Purity Test' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'mps', label: 'What MPS means' },
  { id: 'why-people-take-it', label: 'Why people take it' },
  { id: 'can-and-cant', label: 'What it can and can’t tell you' },
  { id: 'official-private', label: 'Is it official, and is it private?' },
];

export default function MeaningPage() {
  return (
    <>
      <ArticleSchema headline={TITLE} datePublished={DATES.published} dateModified={DATES.modified} url={URL} description={DESCRIPTION} />
      <GuideLayout
        crumbs={[{ label: 'What Is the Rice Purity Test?', href: PATH }]}
        title="What Is the Rice Purity Test?"
        meta={`Last reviewed ${reviewedOn(PATH)} · For adults 18+`}
        toc={TOC}
        answer={
          <KeyAnswer question="What the Rice Purity Test means">
            <p>
              The Rice Purity Test is a 100-item &ldquo;have you ever&hellip;&rdquo; checklist about dating, sex, alcohol,
              drugs and run-ins with the law. You check everything that applies, and your score is 100 minus the number of
              checks. It comes from a long-running student tradition at Rice University in Houston, and it&apos;s meant as a
              light-hearted way to compare notes with friends, not as a measure of anyone&apos;s worth.
            </p>
            <p className="text-small">
              Looking for what your number means? See{' '}
              <Link href={GUIDES.score.href} className="link">
                Rice Purity score meaning, range by range
              </Link>
              .
            </p>
          </KeyAnswer>
        }
        footer={
          <>
            <AboutThisGuide path={PATH} sources={[SOURCES.thresher1924, SOURCES.thresher2017, SOURCES.wikipedia]} />
            <AdSlot name="meaning-end" className="mt-14" />
            <RelatedGuides guides={[GUIDES.score, GUIDES.questions, GUIDES.history, GUIDES.age]} />
            <CtaBox heading="Try it yourself">
              <p>About 10 minutes, no sign-up, adults only.</p>
            </CtaBox>
          </>
        }
      >
        <h2 id="purity" style={{ marginTop: 0 }}>
          What &ldquo;purity&rdquo; means here
        </h2>
        <p>
          &ldquo;Purity&rdquo; sounds like a moral verdict, but on this test it never was one. Students used the word with a
          wink: the joke was that anyone could be ranked by a checklist of mostly harmless milestones. A higher score only
          means fewer boxes checked.
        </p>
        <p>
          That irony has faded as the test spread to people without the campus context. Some treat a high score as
          something to be proud of and a low one as something to hide. Neither makes sense. The most accurate reading of
          your result is simply: &ldquo;this many items on this particular list apply to me.&rdquo;
        </p>

        <h2 id="why-rice">Why is it called the Rice Purity Test?</h2>
        <p>
          Because it comes from Rice University. The student newspaper, the <em>Rice Thresher</em>, published an informal
          ten-question &ldquo;purity&rdquo; survey of undergraduates as far back as 1924, and the paper revisited and
          expanded the idea many times after that. Similar tests circulated at other colleges through the twentieth
          century, but the Rice version is the one that stuck, moved online, and became the 100-question list people know
          today.
        </p>

        <p>
          Rice University does not run or endorse any website that hosts the test, including this one. The full story is on
          our <Link href="/rice-purity-test-history">history page</Link>.
        </p>

        <AdSlot name="meaning-mid" />

        <h2 id="how-it-works">How it works</h2>
        <ul>
          <li>There are 100 items, ordered roughly from common (held hands romantically) to rare.</li>
          <li>You check every item that has ever applied to you. Recent or not doesn&apos;t matter.</li>
          <li>Each check subtracts one point from 100. All items weigh the same.</li>
          <li>
            You can read every item first on the <Link href="/rice-purity-test-questions">questions page</Link>, see
            what your number means on the <Link href="/rice-purity-test-score">score guide</Link>, and compare it with{' '}
            <Link href={GUIDES.age.href}>typical scores by age</Link>.
          </li>
        </ul>

        <h2 id="mps">What does MPS mean on the Rice Purity Test?</h2>
        <p>{MPS_NOTE}</p>

        <h2 id="why-people-take-it">Why people take it</h2>
        <p>
          Mostly social comparison. People want to know how they stack up against friends, a partner or a roommate.
          That&apos;s not a flaw; it&apos;s the point. The campus version worked because it gave a room full of strangers
          something to talk about, and sharing a score still opens conversations that are hard to start directly.
        </p>
        <p>
          A single number is also oddly satisfying. You can&apos;t easily compare life experiences, but &ldquo;I got a 62,
          you got a 74&rdquo; is instantly understandable, even if it hides almost everything interesting.
        </p>

        <h2 id="can-and-cant">What it can and can&apos;t tell you</h2>
        <p>
          It tells you one thing reliably: how many of its 100 items you&apos;ve experienced. The list leans heavily toward
          romantic, sexual and risk-taking experiences and ignores almost everything else about a life, such as travel,
          work, friendships or creativity.
        </p>
        <p>
          It also can&apos;t see context. Something that happened once, years ago, counts the same as something that is
          part of your life now. Treat the score as a prompt for reflection, not a conclusion. If your number surprises you,
          the more interesting question is what you expected and why.
        </p>

        <h2 id="official-private">Is it official, and is it private?</h2>
        <p>
          There is no official online version. Many sites host the list, usually with small wording changes; ours is
          explained on the questions page, including the three items we replaced.
        </p>
        <p>
          On this site your answers stay in your browser and are never sent to us.
          {STATS_ENABLED &&
            ' After you finish, you can choose to add just your score and age band to our anonymous statistics, or not.'}
        </p>

        <p className="text-small text-ink-3">
          Sources for historical dates: the{' '}
          <a href={SOURCES.thresher1924.href} rel="noopener" target="_blank">
            1924 <em>Thresher</em> issue
          </a>{' '}
          in Rice University&apos;s digital collections, and{' '}
          <a href={SOURCES.wikipedia.href} rel="noopener" target="_blank">
            Wikipedia, &ldquo;Purity test&rdquo;
          </a>
          .
        </p>
      </GuideLayout>
    </>
  );
}
