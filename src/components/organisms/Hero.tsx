import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { Logo } from '../atoms/Logo';
import Link from 'next/link';

export const Hero: React.FC = () => {
  return (
    <section className="text-center py-8 md:py-12 animate-fade-in">
      <div className="flex justify-center mb-4 hover:scale-110 transition-transform duration-300">
        <Logo size="lg" showText={true} showTagline={true} />
      </div>
      <Heading as="h1" size="4xl" className="mb-4 animate-slide-up">
        Rice Purity Test
      </Heading>
      <Heading as="h2" size="xl" className="mb-3 text-green-500 animate-slide-up-delay-1">
        How Innocent Are You? Take the Official 100-Question Test
      </Heading>
      <Text variant="large" color="muted" className="max-w-3xl mx-auto mb-6 animate-fade-in-delay-2">
        The Rice Purity Test is a self-graded survey that assesses participants' supposed degree of innocence in worldly matters, generally on a percentage scale with 100% being the most innocent. It includes 100 questions about life experiences.
      </Text>
      <Link href="/test">
        <Button size="lg" className="animate-pulse hover:animate-none hover:scale-110 transition-transform duration-300">
          Start the Test
        </Button>
      </Link>
    </section>
  );
};
