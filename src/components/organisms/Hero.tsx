import React from 'react';
import Link from 'next/link';
import { Button } from '../atoms/Button';
import { Text } from '../atoms/Text';
import { Heading } from '../atoms/Heading';



export const Hero: React.FC = () => {
  // Distribution bar heights — bell-curve style, peak around 55-65
  const bars = [8, 12, 16, 22, 28, 35, 42, 50, 58, 68, 78, 88, 96, 100, 96, 88, 78, 68, 58, 50, 42, 35, 28, 22, 16, 12, 8, 6];

  return (
    <section className="bg-surface border-b border-line py-14 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-start">
          
          {/* LEFT COLUMN */}
          <div>
            <p className="font-mono text-xs font-semibold tracking-widest uppercase text-plum mb-4">
              100 Questions · Anonymous · No Sign-Up · 18+
            </p>

            {/* <h1 className="font-display font-extrabold text-4xl sm:text-5xl leading-[1.05] tracking-tight text-ink mb-5">
              How innocent are you, really?
            </h1> */}
<Heading as="h1" size="4xl" className="font-display font-extrabold leading-[1.05] tracking-tight text-ink mb-5"
>
  How innocent are you, really?
</Heading>

<Text  variant="large" className="text-slate leading-relaxed max-w-[58ch] mb-6">
        One hundred yes-or-no questions about experiences people have, from
              the ordinary to the unusual. Answer honestly and you get a single
              number out of 100, plus a plain explanation of what it does and
              does not mean.
            </Text>

            <div className="flex flex-wrap gap-3 mb-4">
              <Link href="/test">
                <Button
                  size="md"
                  className="bg-amber text-ink font-display font-semibold rounded-lg min-h-[48px] px-6 hover:brightness-105"
                >
                  Start the test
                </Button>
              </Link>
              <Link href="/rice-purity-test-score">
                <Button
                  size="md"
                  className="bg-surface text-ink border border-ink font-display font-semibold rounded-lg min-h-[48px] px-6 hover:border-plum hover:text-plum"
                >
                  Read the score guide
                </Button>
              </Link>
            </div>

            <p className="font-mono text-xs text-slate">
              Your answers stay in your browser. Nothing is sent to a server.
            </p>
          </div>

          {/* RIGHT COLUMN — distribution panel */}
          <div className="bg-bone border border-line rounded-xl p-6">
            <p className="font-mono text-xs font-semibold tracking-widest uppercase text-plum mb-4">
              Where scores actually land
            </p>

            {/* Bar chart */}
            <div className="relative">
              <div className="flex items-end gap-[3px] h-20">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-plum-tint rounded-sm"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>

              {/* Amber "62" marker */}
              <div
                className="absolute -top-6 flex flex-col items-center"
                style={{ left: '62%', transform: 'translateX(-50%)' }}
              >
                <span className="font-mono text-xs font-bold bg-amber text-ink px-2 py-0.5 rounded">
                  62
                </span>
                <span className="w-px h-6 bg-amber mt-0.5" />
              </div>

              {/* Baseline track */}
              <div className="h-2.5 bg-plum-tint rounded-full mt-1 overflow-hidden">
                <div className="h-full bg-plum rounded-full" style={{ width: '62%' }} />
              </div>
            </div>

            <div className="flex justify-between font-mono text-xs text-slate mt-2 mb-4">
              <span>0</span>
              <span>100</span>
            </div>

            <p className="text-sm text-slate leading-relaxed mb-3">
              Most people sit somewhere between 40 and 80. The curve here is
              built from responses readers choose to add after finishing — never
              from figures we made up.
            </p>

            <p className="text-sm text-ink font-semibold leading-relaxed">
              The curve shown is illustrative. We will publish real
              figures once enough readers have added theirs.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};