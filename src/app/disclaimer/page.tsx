import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';

const BASE_URL = 'https://www.ricepuritytestapp.com';

export const metadata: Metadata = {
  title: 'Disclaimer | Rice Purity Test',
  description:
    'This site is for entertainment and self-reflection only. Read our full disclaimer.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/disclaimer` },
};

const FOOT_LINKS = [
  { href: '/about', label: 'About this site' },
  { href: '/help', label: 'Help resources' },
  { href: '/privacy', label: 'Privacy policy' },
];

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-surface">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Disclaimer' },
          ]}
        />

        <Heading as="h1" size="3xl" className="mb-8 text-ink">
          Disclaimer
        </Heading>

        <article className="space-y-8">
          <section>
            <Text variant="body" className="leading-relaxed text-ink">
              This disclaimer applies to{' '}
              <a
                href={BASE_URL}
                className="text-plum hover:underline font-semibold"
              >
                ricepuritytestapp.com
              </a>{' '}
              and all its pages.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              Entertainment only
            </Heading>

            <Text variant="body" className="leading-relaxed text-ink">
              Everything on this site is for entertainment and self-reflection.
              The test is an informal questionnaire, not a psychological
              assessment. It has no validated scoring, no clinical use and no
              predictive value. A score does not describe your character, your
              health or your future.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              Not professional advice
            </Heading>

            <Text variant="body" className="leading-relaxed text-ink">
              Nothing here is medical, psychological or legal advice. If you are
              worried about your health, your wellbeing or your safety, speak to
              a qualified professional. Our{' '}
              <Link href="/help" className="text-plum hover:underline">
                help resources page
              </Link>{' '}
              lists places to start.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              No affiliation
            </Heading>

            <Text variant="body" className="leading-relaxed text-ink">
              This site is not affiliated with, endorsed by, or connected to
              Rice University. There is no official version of this test and
              this site does not claim to publish one.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              Accuracy
            </Heading>

            <Text variant="body" className="leading-relaxed text-ink">
              We try to be accurate and publish sample sizes alongside any
              figure we report. Where we do not have data we say so. If you find
              an error, tell us and we will correct it and note the correction.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              Age
            </Heading>

            <Text variant="body" className="leading-relaxed text-ink">
              This site is intended for adults aged 18 and over.
            </Text>
          </section>

          <p className="text-sm pt-6 border-t border-line">
            <strong className="font-mono text-[0.78rem] tracking-widest text-ink">
              KEEP READING&nbsp;&nbsp;
            </strong>

            {FOOT_LINKS.map((link, i) => (
              <React.Fragment key={link.href}>
                {i > 0 && <span className="text-slate">&nbsp;·&nbsp;</span>}
                <Link
                  href={link.href}
                  className="text-plum hover:underline"
                >
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