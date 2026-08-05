import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Heading } from '@/components/atoms/Heading';
import { Text } from '@/components/atoms/Text';
import { Breadcrumbs } from '@/components/molecules/Breadcrumbs';

const BASE_URL = 'https://www.ricepuritytestapp.com';

export const metadata: Metadata = {
  title: 'Finding Support | Rice Purity Test',
  description:
    'Free, confidential support resources if the test brought something up for you.',
  robots: { index: true, follow: true },
  alternates: { canonical: `${BASE_URL}/help` },
};

const FOOT_LINKS = [
  { href: '/about', label: 'About this site' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy policy' },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-surface">
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Help resources' },
          ]}
        />

        <Heading as="h1" size="3xl" className="mb-8 text-ink">
          Finding support
        </Heading>

        <article className="space-y-8">
          <section>
            <Text variant="body" className="leading-relaxed text-ink">
              Some of the questions in this test touch on experiences that are
              hard to think about. If reading them or answering them left you
              feeling low, distressed, or unsafe, support is available and it
              is free.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              Where to find help
            </Heading>

            <Text variant="body" className="leading-relaxed text-ink mb-4">
              Help lines change numbers, hours and coverage, so rather than
              publish a list that quietly goes out of date, this page points to
              directories that are actively maintained:
            </Text>

            <ul className="list-disc list-inside space-y-3 text-ink leading-relaxed">
              <li>
                <strong>Find A Helpline</strong> — findahelpline.com lists free,
                confidential helplines by country.
              </li>

              <li>
                <strong>
                  International Association for Suicide Prevention
                </strong>{' '}
                — maintains a global directory of crisis centres.
              </li>

              <li>
                <strong>Your local emergency number</strong>, if you or someone
                else is in immediate danger.
              </li>

              <li>
                <strong>Your own doctor</strong>, who can refer you to services
                near you and is bound by confidentiality.
              </li>
            </ul>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              Talking to someone
            </Heading>

            <Text variant="body" className="leading-relaxed text-ink">
              If you would rather talk to someone you know, that counts too.
              Telling one person is often the hardest and most useful step.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              Sexual health and consent
            </Heading>

            <Text variant="body" className="leading-relaxed text-ink">
              Several questions in the test ask about sexual experience. If any
              of them raised something you want to talk to someone about — a
              health question, or something that happened that you did not
              consent to — your local sexual health service and national support
              organisations can help, and both are confidential.
            </Text>
          </section>

          <section>
            <Heading as="h2" size="xl" className="mb-3 text-ink">
              Site policy
            </Heading>

            <Text variant="body" className="leading-relaxed text-ink">
              No advertising, no tracking and no affiliate links appear on this
              page, and every external resource is reviewed regularly to help
              keep the information accurate.
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