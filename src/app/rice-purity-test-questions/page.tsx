import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';
import { Button } from '@/components/atoms/Button';
import { questions } from '@/lib/questions';

const BASE_URL = 'https://www.ricepuritytestapp.com';

export const metadata: Metadata = {
  title: 'All 100 Rice Purity Test Questions, Listed and Explained',
  description: 'The full list of all 100 Rice Purity Test questions, grouped into ten categories, exactly as they appear in the test.',
  keywords: 'rice purity test questions, all rice purity test questions, rice purity test 100 questions',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/rice-purity-test-questions` },
  openGraph: {
    title: 'All 100 Rice Purity Test Questions, Listed and Explained',
    description: 'The full list of all 100 Rice Purity Test questions, grouped into ten categories.',
    url: `${BASE_URL}/rice-purity-test-questions`,
  },
  twitter: { card: 'summary_large_image' },
};

const CATEGORY_META = [
  { t: 'Social life', b: 'Ordinary firsts. Almost everyone answers yes to most of these, which is why they come first — the list should start somewhere recognisable rather than trying to shock you on question one.' },
  { t: 'Dating and relationships', b: 'The shape of a romantic life rather than its content. These items ask about commitment, endings and beginnings, and they are the group most affected by simple age.' },
  { t: 'Intimacy', b: 'The group people expect this test to be about, written as plainly as possible. Nothing here is described in detail, nothing involves anyone who cannot consent, and no item rewards or penalises how you conduct yourself.' },
  { t: 'Alcohol and substances', b: "Substances, including the entirely legal ones. These items are about experience and not about frequency or harm — someone who drank once at a wedding and someone who drinks weekly both answer yes to the same item." },
  { t: 'Nightlife', b: 'Nights out and what happens on them. This category tends to move a score more than people expect, because the items are cumulative — one memorable year can account for most of them.' },
  { t: 'Risk and the law', b: 'Rule-breaking, from the trivial to the serious. Answering yes to items in this group says less about character than the list implies — a parking fine and a court appearance sit next to each other purely because both are countable.' },
  { t: 'Travel and living independently', b: 'Independence, distance and the things that only happen once you are managing your own life. This group correlates with money and passport as much as with anything else — one of several reasons the total is a poor measure of character.' },
  { t: 'Money and work', b: 'Earning it, losing it, owing it. These items are here because a purity test that only asks about sex and alcohol is describing a very narrow idea of experience.' },
  { t: 'Digital life', b: 'The category the original versions of this test predate entirely. It is included because for most people under forty this is where a meaningful share of their experiences now happens.' },
  { t: 'Rarer experiences', b: 'The final ten are genuinely uncommon, which is what makes very low scores rare. If you have answered yes to most of this group, the list has simply happened to match your life — it does not mean anything beyond that.' },
];

function buildCategories() {
  return CATEGORY_META.map((meta, i) => ({
    ...meta,
    id: `cat${i + 1}`,
    items: questions.slice(i * 10, i * 10 + 10),
  }));
}

const FOOT_LINKS = [
  { href: '/test', label: 'Take the test' },
  { href: '/rice-purity-test-score', label: 'Score guide' },
  { href: '/rice-purity-test-average-score-by-age', label: 'Averages by age' },
];

export default function QuestionsPage() {
  const categories = buildCategories();

  return (
    <div className="min-h-screen bg-surface">
      {/* Header/Footer already applied globally via layout.tsx */}

      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'All 100 questions' }]} />

        <Heading as="h1" size="3xl" className="mb-3 text-ink">
          All 100 questions, listed and explained
        </Heading>

        <Text variant="large" className="leading-relaxed text-slate mb-2">
          The full list, grouped into ten categories, with a short note on what each
          group is asking about.
        </Text>

        <p className="font-mono text-xs text-slate mb-10">
          Last reviewed 31 July 2026 · Reading time 9 min
        </p>
     {/* <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 bg-[#f5f3f0] border-t border-b border-[#e6e2dd]"> */}

     <section className="  bg-[#f5f3f0]  ">

        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-10">  {/* items-start HATAYA */}
  
  {/* Sidebar wrapper — ye poori row height tak stretch hoga */}
  <div>
    <aside className="bg-surface border border-line rounded-xl p-5 md:sticky md:top-[90px]">
      <p className="font-mono text-xs tracking-widest uppercase text-plum mb-3">
        On this page
      </p>
      <ol className="space-y-2">
        {categories.map((cat, i) => (
          <li key={cat.id}>
            <a href={`#${cat.id}`} className="text-sm text-slate hover:text-plum no-underline">
              {i + 1}. {cat.t}
            </a>
          </li>
        ))}
      </ol>
      <hr className="border-line my-4" />
      <p className="mb-1.5">
        <Link href="/test" className="text-sm font-semibold text-plum hover:underline">
          Take the test
        </Link>
      </p>
      <p>
        <Link href="/rice-purity-test-score" className="text-sm font-semibold text-plum hover:underline">
          Score guide
        </Link>
      </p>
    </aside>
  </div>

          {/* Main content */}
          <article>
            <Text variant="body" className="leading-relaxed text-ink mb-4">
              Here is the complete list, exactly as it appears in the test, grouped into
              ten categories of ten. Underneath each group there is a short note on what
              that group is actually asking about — because a list of a hundred
              sentences with no explanation is what every other version of this test
              gives you, and it is not much use.
            </Text>
            <Text variant="body" className="leading-relaxed text-ink mb-4">
              You can read the list without taking the test. Nothing on this page is
              scored and nothing you do here is recorded.
            </Text>

            <div className="bg-amber-tint border border-[#EBD6B0] border-l-[5px] border-l-signal rounded-lg px-5 py-4 mb-10">
              <p className="font-mono text-xs uppercase tracking-widest text-[#8A6420] mb-2">
                How scoring works
              </p>
              <Text variant="body" className="text-sm text-ink leading-relaxed">
                You start at 100. Every question you answer yes to removes one point. A
                skipped question counts as no. There is no weighting: the first question
                and the hundredth are worth the same single point, which is deliberate —
                the moment you start weighting items you are making a moral judgement,
                and this is a checklist, not a moral judgement.
              </Text>
            </div>

            {categories.map((cat, ci) => (
              <section key={cat.id} id={cat.id} className="mb-11 scroll-mt-[90px]">
                <Heading as="h2" size="xl" className="mb-2 text-ink">
                  Category {ci + 1} — {cat.t}
                </Heading>
                <Text variant="body" className="text-slate mb-4 leading-relaxed">
                  {cat.b}
                </Text>
                <div className="space-y-2">
                  {cat.items.map((question) => (
                    <div
                      key={question.id}
                      id={`q${String(question.id).padStart(3, '0')}`}
                      className="flex gap-4 items-baseline bg-surface border border-line rounded-lg px-4 py-3"
                    >
                      <span className="font-mono text-xs font-semibold text-plum border-b-2 border-amber pb-px flex-shrink-0 w-14">
                        Q{String(question.id).padStart(3, '0')}
                      </span>
                      <span className="text-ink">{question.text}</span>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            <Heading as="h2" size="xl" className="mb-3 mt-2 text-ink">
              After the list
            </Heading>
            <Text variant="body" className="leading-relaxed text-ink mb-8">
              That is all one hundred. If you want the number, the test asks them one at
              a time and works out the total for you.
            </Text>

            <details className="bg-surface border border-line rounded-lg mb-3 group">
              <summary className="cursor-pointer list-none px-5 py-4 font-semibold flex justify-between items-center gap-4 text-ink">
                Why are these not the questions I have seen elsewhere?
                <span className="text-plum text-xl leading-none group-open:hidden">+</span>
                <span className="text-plum text-xl leading-none hidden group-open:inline">–</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-ink leading-relaxed">
                Because the version that circulates online contains items we are not
                willing to score, and because a list that already exists on fifty other
                sites is not worth publishing again. This set is our own.
              </div>
            </details>

            <details className="bg-surface border border-line rounded-lg mb-8 group">
              <summary className="cursor-pointer list-none px-5 py-4 font-semibold flex justify-between items-center gap-4 text-ink">
                Are the categories part of the score?
                <span className="text-plum text-xl leading-none group-open:hidden">+</span>
                <span className="text-plum text-xl leading-none hidden group-open:inline">–</span>
              </summary>
              <div className="px-5 pb-4 text-sm text-ink leading-relaxed">
                No. The score is the total across all hundred items. The categories
                exist so the results page can tell you where your points came from.
              </div>
            </details>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/test">
                <Button size="lg" variant="primary">Take the test</Button>
              </Link>
              <Link href="/rice-purity-test-score">
                <Button size="lg" variant="secondary">Score guide</Button>
              </Link>
            </div>

            <p className="text-sm pt-4 border-t border-line">
              <strong className="font-mono text-[0.78rem] tracking-widest text-ink">
                KEEP READING&nbsp;&nbsp;
              </strong>
              {FOOT_LINKS.map((link, i) => (
                <React.Fragment key={link.href}>
                  {i > 0 && <span className="text-slate">&nbsp;·&nbsp;</span>}
                  <Link href={link.href} className="text-plum hover:underline">
                    {link.label}
                  </Link>
                </React.Fragment>
              ))}
            </p>
          </article>
        </div>
        </section>
              </main>
    </div>
  );
}