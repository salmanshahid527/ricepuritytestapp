import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { Logo } from '../atoms/Logo';
import Link from 'next/link';

export const Hero: React.FC = () => {
  return (
    <section className="text-center py-10 md:py-16 animate-fade-in">
      {/* Logo */}
      <div className="flex justify-center mb-5 hover:scale-110 transition-transform duration-300">
        <Logo size="lg" showText={false} showTagline={false} />
      </div>

      {/* Headings */}
      <Heading as="h1" size="4xl" className="mb-3 animate-slide-up">
        Rice Purity Test — Take the Free 100-Question Test Online
      </Heading>
      <p className="text-xl font-medium text-green-500 mb-4 animate-slide-up-delay-1">
        How Innocent Are You? Find Out Instantly
      </p>
      <Text variant="large" color="muted" className="max-w-2xl mx-auto mb-8 animate-fade-in-delay-2 leading-relaxed">
        The original Rice Purity Test — 100 questions about life experiences. Completely anonymous, instant results. Taken by over 500,000 people worldwide.
      </Text>

      {/* CTA */}
      <Link href="/test">
        <Button size="lg" className="animate-pulse hover:animate-none hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
          Start the Test — It&apos;s Free
        </Button>
      </Link>

      {/* Trust badges */}
      <div className="flex flex-wrap justify-center gap-5 mt-6 animate-fade-in-delay-2">
        {[
          '100% Anonymous',
          'No Sign-Up Required',
          'Instant Results',
          '10–15 Minutes',
        ].map((badge) => (
          <div key={badge} className="flex items-center gap-1.5 text-sm text-gray-500">
            <span className="text-green-500 font-bold">✓</span>
            <span>{badge}</span>
          </div>
        ))}
      </div>

      {/* Stats bar */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto">
        <div className="bg-green-50 border border-green-100 rounded-xl p-3.5">
          <div className="text-xl font-bold text-green-600">500K+</div>
          <div className="text-xs text-gray-500 mt-0.5">Tests Taken</div>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-3.5">
          <div className="text-xl font-bold text-blue-600">100</div>
          <div className="text-xs text-gray-500 mt-0.5">Questions</div>
        </div>
        <div className="bg-purple-50 border border-purple-100 rounded-xl p-3.5">
          <div className="text-xl font-bold text-purple-600">0</div>
          <div className="text-xs text-gray-500 mt-0.5">Data Stored</div>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-3.5">
          <div className="text-xl font-bold text-amber-600">Free</div>
          <div className="text-xs text-gray-500 mt-0.5">Always Free</div>
        </div>
      </div>
    </section>
  );
};
