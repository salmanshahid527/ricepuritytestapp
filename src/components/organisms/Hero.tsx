import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { Button } from '../atoms/Button';
import { Logo } from '../atoms/Logo';
import Link from 'next/link';

export const Hero: React.FC = () => {
  return (
    <section className="text-center py-16 md:py-24 animate-fade-in">
      <div className="flex justify-center mb-8">
        <Logo size="lg" showText={true} showTagline={true} />
      </div>
      <Heading size="4xl" className="mb-6">
        Rice Purity Test - Take the Official 100 Question Innocence Test
      </Heading>
      <Heading size="xl" className="mb-4 text-green-500">
        How innocent are you? Discover your purity score with the original Rice University test.
      </Heading>
      <Text variant="large" color="muted" className="max-w-3xl mx-auto mb-8">
        The Rice Purity Test is a self-graded survey that assesses participants' supposed degree of innocence in worldly matters, generally on a percentage scale with 100% being the most innocent. It includes 100 questions about life experiences.
      </Text>
      <Link href="/test">
        <Button size="lg" className="animate-slide-up">
          Start the Test
        </Button>
      </Link>
    </section>
  );
};
