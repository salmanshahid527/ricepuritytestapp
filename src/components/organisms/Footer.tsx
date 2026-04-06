import React from 'react';
import { Text } from '../atoms/Text';
import { Logo } from '../atoms/Logo';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 py-10 mt-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-3 hover:opacity-80 transition-opacity">
              <Logo size="sm" showText={true} showTagline={false} />
            </Link>
            <Text variant="small" className="text-gray-500 leading-relaxed">
              The original Rice Purity Test — free, anonymous, and instant. No account required.
            </Text>
            <div className="mt-4 text-xs text-gray-400">
              <a href="mailto:contact@ricepuritytestapp.com" className="text-green-500 hover:underline">
                contact@ricepuritytestapp.com
              </a>
            </div>
          </div>

          {/* Test */}
          <div>
            <div className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">Test</div>
            <nav className="space-y-2">
              <Link href="/test" className="block text-sm text-gray-600 hover:text-green-500 transition-colors">Take the Test</Link>
              <Link href="/rice-purity-test-score" className="block text-sm text-gray-600 hover:text-green-500 transition-colors">Score Guide</Link>
              <Link href="/rice-purity-test-average-score-by-age" className="block text-sm text-gray-600 hover:text-green-500 transition-colors">Average by Age</Link>
              <Link href="/rice-purity-test-questions" className="block text-sm text-gray-600 hover:text-green-500 transition-colors">All 100 Questions</Link>
              <Link href="/rice-purity-test-meaning" className="block text-sm text-gray-600 hover:text-green-500 transition-colors">What It Means</Link>
            </nav>
          </div>

          {/* Blog */}
          <div>
            <div className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">Guides</div>
            <nav className="space-y-2">
              <Link href="/blog" className="block text-sm text-gray-600 hover:text-green-500 transition-colors">All Articles</Link>
              <Link href="/blog/what-is-rice-purity-test" className="block text-sm text-gray-600 hover:text-green-500 transition-colors">Complete Guide</Link>
              <Link href="/blog/rice-purity-test-for-college-students" className="block text-sm text-gray-600 hover:text-green-500 transition-colors">College Students</Link>
              <Link href="/blog/rice-purity-test-with-friends" className="block text-sm text-gray-600 hover:text-green-500 transition-colors">Take with Friends</Link>
              <Link href="/blog/what-is-a-good-rice-purity-score" className="block text-sm text-gray-600 hover:text-green-500 transition-colors">What Is a Good Score?</Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <div className="font-semibold text-gray-700 mb-3 text-sm uppercase tracking-wide">Company</div>
            <nav className="space-y-2">
              <Link href="/about" className="block text-sm text-gray-600 hover:text-green-500 transition-colors">About</Link>
              <Link href="/contact" className="block text-sm text-gray-600 hover:text-green-500 transition-colors">Contact</Link>
              <Link href="/privacy" className="block text-sm text-gray-600 hover:text-green-500 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block text-sm text-gray-600 hover:text-green-500 transition-colors">Terms of Service</Link>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Text variant="small" className="text-gray-400 text-center sm:text-left">
            © 2026 ricepuritytestapp.com · The Rice Purity Test originated at Rice University
          </Text>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <Link href="/privacy" className="hover:text-green-500 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-green-500 transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-green-500 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
