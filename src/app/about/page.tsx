import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';

const BASE_URL = 'https://www.ricepuritytestapp.com';

export const metadata: Metadata = {
  title: 'About This Site | Rice Purity Test',
  description: 'Who runs this site, why it exists, and how the question set and data work.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/about` },
};

const FOOT_LINKS = [
  { href: '/rice-purity-test-questions', label: 'All 100 questions' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy policy' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface">

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'About' },
          ]}
        />

        <Heading as="h1" size="3xl" className="mb-8 text-ink">
          About this site
        </Heading>

        <article className="space-y-8 max-w-">
          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              Who runs it
            </Heading>
            <Text variant="body" className="leading-relaxed text-ink">
              This site is run by <strong>Salman Shahid</strong>, 
              I'm a developer based in Lahore, Pakistan, and I run a small company called Teknoesis.
               I built this site after going looking for the original Rice Purity Test and finding dozens of copies instead, all running the same file with a different logo on top.
               Not one of them had a person's name on it.
               You can email me at {' '}
                <a 
                href="mailto:support@ricepuritytestapp.com" 
                className="text-ink hover:underline font-semibold  hover:text-plum"
              >
                contact@ricepuritytestapp.com
              </a>  
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              Why it exists
            </Heading>
            <Text variant="body" className="leading-relaxed text-ink">
              There are a great many versions of this test online and most of them are
              the same page repeated: the same hundred questions, the same score, no
              explanation and no accountability. This one tries to be different in
              three specific ways the question set is written rather than copied,
              every number published here comes with a sample size or is not published
              at all, and there is a name attached to it.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              How the question set was built
            </Heading>
            <Text variant="body" className="leading-relaxed text-ink">
              The hundred items were written for this site. They are grouped into ten
              categories of ten and ordered from common experiences to rare ones. Items
              that score things we do not think should be scored anything involving
              family members, animals, minors or self-harm  are not included. The list
              is reviewed regularly and the review date is shown on the questions
              page.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              How the data works
            </Heading>
            <Text variant="body" className="leading-relaxed text-ink">
              Readers can add their score anonymously after finishing. We store the
              score, an age band and a country. We never store individual answers, and
              we never store anything that identifies a person. Aggregate figures are
              published with the number of responses behind them. Where we have no
              data, we say so instead of estimating.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              What this site is not
            </Heading>
            <Text variant="body" className="leading-relaxed text-ink">
              It is not affiliated with, endorsed by, or connected to Rice University.
              It is not a psychological assessment and it does not diagnose anything.
              It is intended for adults aged 18 and over.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              Corrections
            </Heading>
            <Text variant="body" className="leading-relaxed text-ink">
              If something here is wrong, tell me and I will fix it. Corrections to
              published pages are noted at the foot of the page with the date.
            </Text>
          </section>

          <p className="text-sm pt-6 border-t border-line">
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
      </main>

      
    </div>
  );
}
