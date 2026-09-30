import Link from 'next/link';
import { ButtonLink } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { JsonLd } from '@/components/atoms/JsonLd';
import { AdultNotice } from '@/components/molecules/AdultNotice';
import { ScoreScale } from '@/components/molecules/ScoreScale';
import { AdSlot } from '@/components/organisms/AdSlot';
import { CtaBox } from '@/components/organisms/CtaBox';
import { AGE_ESTIMATES, OVERALL_AVERAGE, TYPICAL_ADULT, range } from '@/lib/estimates';
import { WEB_APPLICATION } from '@/lib/schema';

const FACTS = [
  { icon: 'list', title: '100 Questions', text: 'Answer honestly about your life experiences' },
  { icon: 'lock', title: 'Anonymous', text: 'Your answers are private and never leave your browser' },
  { icon: 'share', title: 'Share Results', text: 'Compare your score with friends' },
] as const;

const TRUST = ['100% Anonymous', 'No Sign-Up Required', 'Instant Results'];

const STEPS = [
  { title: 'Answer all 100 questions honestly', text: 'Click on any question to mark it. Be honest with yourself!' },
  { title: 'Click on each experience you’ve had', text: 'Your progress is automatically saved as you go.' },
  { title: 'Get your purity score (0-100)', text: 'Your score is calculated based on how many experiences you’ve had.' },
  { title: 'Share your results (optional)', text: 'Compare your score with friends on social media.' },
];

/** Entry points to the guides, each with its key answer visible. */
const GUIDE_CARDS = [
  {
    href: '/rice-purity-test-average-score-by-age',
    title: 'Average Score by Age',
    answer: `Estimated average: ${range(OVERALL_AVERAGE)}`,
    text: 'See Rice Purity Test average score ranges by age group and compare your result',
    featured: true,
  },
  {
    href: '/rice-purity-test-questions',
    title: 'All 100 Questions',
    answer: '6 themes, 1 point each',
    text: 'View all Rice Purity Test questions and understand what the test covers',
    featured: true,
  },
  {
    href: '/rice-purity-test-score',
    title: 'Understanding Your Score',
    answer: 'Score = 100 − items checked',
    text: 'Complete guide on how to interpret your Rice Purity Test score',
  },
  {
    href: '/rice-purity-test-meaning',
    title: 'What It Means',
    answer: 'A checklist, not a moral grade',
    text: 'Learn what the Rice Purity Test means and its purpose',
  },
  {
    href: '/rice-purity-test-history',
    title: 'History & Origins',
    answer: 'Began in 1924 at Rice University',
    text: 'Discover the fascinating history of the Rice Purity Test',
  },
  {
    href: '/about',
    title: 'About the Test',
    answer: 'Who runs this site',
    text: 'How this version of the test was built and how the data works',
  },
  {
    href: '/blog',
    title: 'Blog & Guides',
    answer: 'Every guide in one place',
    text: 'Read comprehensive guides, tips, and insights about the Rice Purity Test',
  },
];

const SCORE_TABLE = [
  ['90–100', 'Very few items checked; common for new college students.'],
  ['77–89', 'Dating, kissing and some social items; typical at 18 to 21.'],
  ['55–76', 'Where most adults land. The overall average is estimated in the mid-60s.'],
  ['30–54', 'Well into the later sections of the list; more common with age.'],
  ['0–29', 'Uncommon; most of the list checked.'],
];

const TIPS = [
  {
    title: 'Answer for your whole life, not just recently',
    text: 'The test covers experiences across your entire life — not just the last few months. The question is "have you ever," not "do you currently." People often undercount because they\'re thinking about their present self rather than their full history. If it happened, check it.',
  },
  {
    title: 'When a question is ambiguous, go with your gut',
    text: 'Some questions are deliberately broad. If your first instinct is "yes, kind of" — that probably counts. Overthinking them leads to under-reporting. Your gut reaction after a quick read is usually more honest than whatever conclusion you arrive at after analyzing it for 30 seconds.',
  },
  {
    title: 'Nobody\'s watching',
    text: 'Your answers are processed entirely in your browser — nothing is sent to a server, and nothing is stored anywhere except this browser. There\'s genuinely no audience. The score is only as useful as it is honest, and right now you\'re the only one who will ever know both the answers and the score.',
  },
];

const FAQ: { q: string; a: React.ReactNode }[] = [
  {
    q: 'Is the Rice Purity Test anonymous?',
    a: 'Your answers are. They never leave your device and there\'s no account or login; the score is worked out in your browser. Like most sites we use Google Analytics to count visits and show ads through Google AdSense, but neither ever receives your answers. Details are in our privacy policy.',
  },
  {
    q: 'How is my score calculated?',
    a: 'It\'s just subtraction. Start at 100, subtract one point for each box you check. Check 35 boxes? Your score is 65. Check 70? Your score is 30. The fewer experiences you\'ve had from the list, the higher your score.',
  },
  {
    q: 'Can I retake the test?',
    a: 'Yes, as many times as you want. Nothing is kept on our side, and you can clear your answers to start fresh. Some people retake it after a few years to see how their score has changed — others take it a second time because they rushed through the first time and want a more honest result.',
  },
  {
    q: 'What does my Rice Purity score mean?',
    a: (
      <>
        It&apos;s a count of how many experiences from a specific list you&apos;ve had. A higher score means fewer
        experiences checked; a lower score means more. Most people land in the 55-75 range. For what each range actually
        means, the <Link href="/rice-purity-test-score" className="link">score guide</Link> goes into real detail.
      </>
    ),
  },
  {
    q: 'Is this the official Rice Purity Test?',
    a: 'No. The test grew out of a Rice University student-newspaper tradition that goes back to 1924, but Rice doesn\'t run any website that hosts it and there is no official online version. This site uses the widely circulated 100-question list with gender-neutral wording and three items replaced (see the questions page).',
  },
  {
    q: 'Why do people take the Rice Purity Test?',
    a: 'Mostly curiosity and social comparison — people want to know where they stand and how they compare with friends. It also works as an icebreaker. Sharing your score opens conversations that might not happen otherwise, especially early in friendships.',
  },
  {
    q: 'How long does it take?',
    a: 'Usually 10-15 minutes if you read each question. Your progress saves automatically, so if you close the tab halfway through, you can pick up where you left off. There\'s no time limit — take as long as you need.',
  },
  {
    q: 'Can I share my results?',
    a: 'Yes. After you finish, you get your score and a share option. Most people text or screenshot their result to friends rather than posting publicly — but both work. Sharing is entirely optional.',
  },
  {
    q: 'Is there an age requirement?',
    a: 'Yes. The questions cover sex, drugs and alcohol, so the test is for adults 18 and older only (see our Terms of Service). Most people who take it are college students and people in their 20s.',
  },
  {
    q: 'What if I\'m unsure how to answer a question?',
    a: (
      <>
        Go with your gut read after the first pass. If you immediately thought &ldquo;yes, technically&rdquo; — that
        counts. If you genuinely can&apos;t tell, leave it unchecked. Confusing items, such as{' '}
        <Link href="/rice-purity-test-questions#q10" className="link">
          &ldquo;kissed horizontally&rdquo;
        </Link>{' '}
        or{' '}
        <Link href="/rice-purity-test-questions#q14" className="link">
          &ldquo;kissed for more than two hours consecutively&rdquo;
        </Link>
        , are explained on the questions page.
      </>
    ),
  },
  {
    q: 'Will my score change if I retake it later?',
    a: 'Probably, yes — especially if years have passed. The test asks about your whole life, so the longer you\'ve lived, the more experiences you\'re likely to check. People who retake it after a few years almost always score lower the second time.',
  },
  {
    q: 'Is the Rice Purity Test scientifically valid?',
    a: 'No — and it was never meant to be. It\'s a casual self-survey created by college students, not a psychological instrument. Your score doesn\'t measure intelligence, character, or anything clinically meaningful. It\'s a conversation starter, not a diagnosis.',
  },
];

const H2 = 'font-display text-h2 font-semibold text-ink';

export default function HomePage() {
  return (
    <main id="main">
      <JsonLd data={WEB_APPLICATION} />

      {/* Hero */}
      <section className="page grid gap-10 pb-12 pt-10 sm:pt-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-16 lg:pb-16">
        <div>
          <p className="eyebrow">A free, anonymous test for adults</p>
          <h1 className="mt-3 font-display text-display font-semibold text-ink">Rice Purity Test</h1>
          <h2 className="mt-4 font-display text-[1.375rem] font-semibold leading-snug text-brand-deep sm:text-[1.625rem]">
            How Innocent Are You? Take the Classic <span className="whitespace-nowrap">100-Question Test</span>
          </h2>
          <p className="mt-4 max-w-[60ch] text-lead text-ink-2">
            Tick every experience on the list you&apos;ve had and you get a score from 0 to 100. Higher means fewer boxes
            checked. It started as a campus tradition at Rice University and is meant to be a fun, private check-in for
            adults. Your answers never leave your browser.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <ButtonLink href="/test" size="lg">
              Take the test <Icon name="arrow-right" className="h-5 w-5" />
            </ButtonLink>
            <Link href="/rice-purity-test-questions" className="link inline-flex min-h-tap items-center">
              Read the 100 questions first
            </Link>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-small font-medium text-ink-2">
            {TRUST.map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5">
                <Icon name="check" className="h-4 w-4 text-brand" />
                {t}
              </li>
            ))}
          </ul>
          <AdultNotice className="mt-6 max-w-[60ch]" />
        </div>

        <div className="card p-6 sm:p-8">
          <p className="eyebrow text-ink-3">How the score works</p>
          <p className="mt-3 font-display text-[1.75rem] font-semibold leading-tight text-ink sm:text-[2rem]">
            100 − items checked
          </p>
          <p className="mt-2 text-small text-ink-2">
            Check 35 boxes and you score 65. Most adults land between {TYPICAL_ADULT.low} and {TYPICAL_ADULT.high}; the
            overall average is estimated at {range(OVERALL_AVERAGE)}.
          </p>
          <ScoreScale className="mt-6" />
          <p className="mt-4 text-xs text-ink-3">
            Ranges are editorial estimates, not survey results.{' '}
            <Link href="/rice-purity-test-average-score-by-age" className="link">
              See typical scores by age
            </Link>
          </p>
        </div>
      </section>

      {/* Facts */}
      <section aria-label="About the test" className="border-y border-line bg-surface">
        <ul className="page grid gap-6 py-8 sm:grid-cols-3">
          {FACTS.map((f) => (
            <li key={f.title} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-content-center rounded-md bg-brand-soft text-brand-deep">
                <Icon name={f.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-ink">{f.title}</p>
                <p className="text-small text-ink-3">{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Guides with their key answers */}
      <section className="page py-14 sm:py-16" aria-labelledby="learn-more">
        <h2 id="learn-more" className={H2}>
          Learn More About the Rice Purity Test
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDE_CARDS.slice(0, 5).map((g, i) => (
            <li key={g.href} className={i === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''}>
              <Link
                href={g.href}
                className={`group flex h-full flex-col rounded-lg border p-5 shadow-card transition-[border-color,box-shadow] hover:shadow-lift sm:p-6 ${
                  g.featured ? 'border-brand-tint bg-brand-soft hover:border-brand' : 'border-line bg-surface hover:border-brand'
                }`}
              >
                <span className="text-small font-semibold text-ink-2 group-hover:text-brand-deep">{g.title}</span>
                <span
                  className={`mt-1.5 font-display font-semibold leading-snug text-ink ${
                    i === 0 ? 'text-[1.75rem] lg:text-[2.25rem]' : 'text-[1.3rem]'
                  }`}
                >
                  {g.answer}
                </span>
                <span className="mt-2 text-small text-ink-3">{g.text}</span>
                {i === 0 && (
                  <p className="mt-5 border-t border-brand-tint pt-4 text-xs font-semibold text-ink-3">
                    Estimated typical range by age
                  </p>
                )}
                {i === 0 && (
                  <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5 text-small">
                    {AGE_ESTIMATES.map((e) => (
                      <div key={e.age} className="contents">
                        <dt className="text-ink-3">Age {e.age}</dt>
                        <dd className="font-semibold tabular-nums text-ink">{range(e)}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                <span className="mt-auto pt-4 text-small font-semibold text-brand-deep" aria-hidden="true">
                  Read the guide →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-3 grid gap-3 sm:grid-cols-2">
          {GUIDE_CARDS.slice(5).map((g) => (
            <li key={g.href}>
              <Link
                href={g.href}
                className="group flex h-full flex-wrap items-baseline gap-x-3 gap-y-1 rounded-lg border border-line bg-surface px-5 py-4 transition-[border-color] hover:border-brand"
              >
                <span className="font-semibold text-ink group-hover:text-brand-deep">{g.title}</span>
                <span className="text-small text-ink-3">
                  {g.answer}. {g.text}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* How it works */}
      <section className="bg-surface py-14 sm:py-16" aria-labelledby="how-it-works">
        <div className="page">
          <h2 id="how-it-works" className={H2}>
            How It Works
          </h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative">
                <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-brand-deep">
                  <span aria-hidden="true" className="grid h-8 w-8 place-content-center rounded-full border-2 border-brand font-display text-[0.9375rem] normal-case tracking-normal">
                    {i + 1}
                  </span>
                  Step {i + 1}
                </p>
                <h3 className="mt-3 font-semibold text-ink">{s.title}</h3>
                <p className="mt-1 text-small text-ink-3">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <div className="page mt-14 grid gap-14 lg:grid-cols-2 lg:gap-16">
        {/* What the test is */}
        <section id="about-the-test" aria-labelledby="what-is-heading">
          <h2 id="what-is-heading" className={H2}>
            What is the Rice Purity Test?
          </h2>
          <div className="mt-4 space-y-4 text-ink-2">
            <p>
              It&apos;s a 100-item &ldquo;have you ever&hellip;&rdquo; checklist about dating, sex, alcohol, drugs and
              run-ins with the law. It grew out of a student tradition at Rice University in Houston: the student
              newspaper, the <em>Thresher</em>, ran an informal purity survey as early as 1924 and revisited the idea for
              decades. The 100-question version moved online in the 1990s and went viral on TikTok in the 2020s.
            </p>
            <p>
              &ldquo;Purity&rdquo; was always tongue-in-cheek. A high score just means fewer boxes checked; it isn&apos;t a
              moral grade. Read more about{' '}
              <Link href="/rice-purity-test-meaning" className="link">
                what the test means
              </Link>{' '}
              and{' '}
              <Link href="/rice-purity-test-history" className="link">
                where it came from
              </Link>
              .
            </p>
          </div>
        </section>

        {/* Score at a glance */}
        <section id="score-interpretation" aria-labelledby="score-glance-heading">
          <h2 id="score-glance-heading" className={H2}>
            What your score means, at a glance
          </h2>
          <p className="mt-4 text-ink-2">Your score is 100 minus the number of items you check, and every item counts the same.</p>
          <div className="table-wrap mt-4">
            <table className="table-clean">
              <thead>
                <tr>
                  <th scope="col">Score</th>
                  <th scope="col">In short</th>
                </tr>
              </thead>
              <tbody>
                {SCORE_TABLE.map(([s, t]) => (
                  <tr key={s}>
                    <td className="whitespace-nowrap font-semibold text-ink">{s}</td>
                    <td>{t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-ink-2">
            See the full{' '}
            <Link href="/rice-purity-test-score" className="link">
              score chart
            </Link>{' '}
            and{' '}
            <Link href="/rice-purity-test-average-score-by-age" className="link">
              typical scores by age
            </Link>
            .
          </p>
        </section>
      </div>

      <div className="page mt-14">
        <AdSlot name="home-mid" />
      </div>

      {/* Tips */}
      <section id="tips" className="page mt-14" aria-labelledby="tips-heading">
        <h2 id="tips-heading" className={H2}>
          Tips for Taking the Rice Purity Test
        </h2>
        <p className="mt-4 max-w-measure text-ink-2">
          Most people don&apos;t need much preparation — it&apos;s a checkbox list, not an exam. But a few things genuinely
          affect how useful your score ends up being.
        </p>
        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div className="card p-6 sm:p-8">
            <h3 className="text-h3 font-semibold text-ink">Three Things That Actually Matter</h3>
            <ol className="mt-5 space-y-6">
              {TIPS.map((t, i) => (
                <li key={t.title} className="flex gap-4">
                  <span className="font-display text-[1.5rem] font-semibold leading-none text-brand">{i + 1}</span>
                  <div>
                    <h4 className="font-semibold text-ink">{t.title}</h4>
                    <p className="mt-1 text-ink-2">{t.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-lg bg-sunken p-6 sm:p-8">
            <h3 className="text-h3 font-semibold text-ink">What to Do With Your Score</h3>
            <p className="mt-3 text-ink-2">
              Share it with a friend you trust and compare — that&apos;s where the interesting conversations happen. Two
              people can have very similar scores and completely different stories behind them. Or very different scores
              and much more overlap than they expected. The number opens the conversation; it doesn&apos;t close it.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ (visible; no FAQPage markup, those rich results are retired) */}
      <section id="faq" className="page mt-16" aria-labelledby="faq-heading">
        <h2 id="faq-heading" className={H2}>
          Frequently Asked Questions
        </h2>
        <div className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {FAQ.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold text-ink">{f.q}</h3>
              <p className="mt-2 text-ink-2">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="page">
        <CtaBox heading="Ready when you are" secondary={{ href: '/blog/how-to-take-rice-purity-test', label: 'How to take it' }}>
          <p>About 10 minutes, no sign-up, adults only. Your answers stay in your browser.</p>
        </CtaBox>
      </div>
    </main>
  );
}
