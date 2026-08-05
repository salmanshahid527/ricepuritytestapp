import React from 'react';
import { Logo } from '../atoms/Logo';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-plum-deep text-[#DED2E6] pt-12 pb-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-8">
          {/* Brand column */}
          <div>
            <Link href="/" className="inline-flex">
              <Logo variant="light" size="sm" showText={true} showTagline={true} />
            </Link>
            <p className="text-[#C9B8D4] text-sm mt-3 max-w-[34ch]">
              A 100-item self-assessment for adults. Anonymous, free, no sign-up.
            </p>
          </div>

          {/* The Test column */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-amber font-semibold mb-3">
              The Test
            </h4>
            <ul className="space-y-2">
              <li><Link href="/test" className="text-sm hover:text-white hover:underline transition-colors">Take the test</Link></li>
              <li><Link href="/rice-purity-test-questions" className="text-sm hover:text-white hover:underline transition-colors">All 100 questions</Link></li>
              <li><Link href="/rice-purity-test-score" className="text-sm hover:text-white hover:underline transition-colors">Score guide</Link></li>
              <li><Link href="/rice-purity-test-average-score-by-age" className="text-sm hover:text-white hover:underline transition-colors">Averages by age</Link></li>
            </ul>
          </div>

          {/* About column */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-amber font-semibold mb-3">
              About
            </h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-white hover:underline transition-colors">Who runs this site</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-white hover:underline transition-colors">Contact</Link></li>
              <li><Link href="/rice-purity-test-history" className="text-sm hover:text-white hover:underline transition-colors">History of the test</Link></li>
              <li><Link href="/help" className="text-sm hover:text-white hover:underline transition-colors">Help resources</Link></li>
            </ul>
          </div>

          {/* Legal column */}
           <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-amber font-semibold mb-3">
              Legal
            </h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm hover:text-white hover:underline transition-colors">Privacy policy</Link></li>
              <li><Link href="/cookies" className="text-sm hover:text-white hover:underline transition-colors">Cookie policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-white hover:underline transition-colors">Terms of service</Link></li>
              <li><Link href="/disclaimer" className="text-sm hover:text-white hover:underline transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        {/* Legal / bottom strip */}
        <div className="border-t border-plum mt-9 pt-6">
          <p className="font-mono text-sm text-[#C9B8D4] mb-1.5">
            Not affiliated with, endorsed by, or connected to Rice University.
          </p>
          <p className="text-[#9F8FAC] text-[0.85rem] mb-1.5">
            This test is for entertainment and self-reflection. It is not a psychological or medical assessment, and it does not diagnose anything.
          </p>
          <p className="text-[#9F8FAC] text-[0.85rem]">
            Intended for adults aged 18 and over. &nbsp;·&nbsp; © 2026 ricepuritytestapp.com
          </p>
          <p className="text-xs text-[#9F8FAC] mt-3">
            Email: <a href="mailto:contact@ricepuritytestapp.com" className="text-amber hover:underline">contact@ricepuritytestapp.com</a>
            {' '}•{' '}
            For press inquiries: <a href="mailto:press@ricepuritytestapp.com" className="text-amber hover:underline">press@ricepuritytestapp.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
