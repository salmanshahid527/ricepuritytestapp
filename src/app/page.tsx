'use client';

import React from 'react';
import { Hero } from '@/components/organisms/Hero';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';
import { Text } from '@/components/atoms/Text';
import { Heading } from '@/components/atoms/Heading';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4">
        <Hero />
        
        {/* Info Cards */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all duration-300 animate-fade-in shadow-sm">
              <Heading size="xl" className="mb-2 text-green-500">
                100 Questions
              </Heading>
              <Text color="default" className="text-gray-600">
                Answer honestly about your life experiences
              </Text>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all duration-300 animate-fade-in-delay-1 shadow-sm">
              <Heading size="xl" className="mb-2 text-green-500">
                Anonymous
              </Heading>
              <Text color="default" className="text-gray-600">
                Your answers are private and not stored
              </Text>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all duration-300 animate-fade-in-delay-2 shadow-sm">
              <Heading size="xl" className="mb-2 text-green-500">
                Share Results
              </Heading>
              <Text color="default" className="text-gray-600">
                Compare your score with friends
              </Text>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto">
            <Heading size="3xl" className="mb-8 text-center">
              How It Works
            </Heading>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all duration-300 animate-slide-up shadow-sm">
                <Heading size="lg" className="mb-2 text-green-500">
                  Step 1: Answer all 100 questions honestly
                </Heading>
                <Text color="default" className="text-gray-600">
                  Click on any question to mark it. Be honest with yourself!
                </Text>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all duration-300 animate-slide-up-delay-1 shadow-sm">
                <Heading size="lg" className="mb-2 text-green-500">
                  Step 2: Click on each experience you've had
                </Heading>
                <Text color="default" className="text-gray-600">
                  Your progress is automatically saved as you go.
                </Text>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all duration-300 animate-slide-up-delay-2 shadow-sm">
                <Heading size="lg" className="mb-2 text-green-500">
                  Step 3: Get your purity score (0-100)
                </Heading>
                <Text color="default" className="text-gray-600">
                  Your score is calculated based on how many experiences you've had.
                </Text>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg transition-all duration-300 animate-slide-up-delay-3 shadow-sm">
                <Heading size="lg" className="mb-2 text-green-500">
                  Step 4: Share your results (optional)
                </Heading>
                <Text color="default" className="text-gray-600">
                  Compare your score with friends on social media.
                </Text>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
