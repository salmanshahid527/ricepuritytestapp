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
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-400 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in shadow-sm cursor-pointer">
              <Heading size="xl" className="mb-2 text-green-500">
                100 Questions
              </Heading>
              <Text color="default" className="text-gray-600">
                Answer honestly about your life experiences
              </Text>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-400 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-delay-1 shadow-sm cursor-pointer">
              <Heading size="xl" className="mb-2 text-green-500">
                Anonymous
              </Heading>
              <Text color="default" className="text-gray-600">
                Your answers are private and not stored
              </Text>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-400 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-delay-2 shadow-sm cursor-pointer">
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
        <section className="py-8">
          <div className="max-w-3xl mx-auto">
            <Heading size="3xl" className="mb-6 text-center animate-fade-in">
              How It Works
            </Heading>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up shadow-sm cursor-pointer">
                <Heading size="lg" className="mb-2 text-green-500">
                  Step 1: Answer all 100 questions honestly
                </Heading>
                <Text color="default" className="text-gray-600">
                  Click on any question to mark it. Be honest with yourself!
                </Text>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-1 shadow-sm cursor-pointer">
                <Heading size="lg" className="mb-2 text-green-500">
                  Step 2: Click on each experience you've had
                </Heading>
                <Text color="default" className="text-gray-600">
                  Your progress is automatically saved as you go.
                </Text>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-2 shadow-sm cursor-pointer">
                <Heading size="lg" className="mb-2 text-green-500">
                  Step 3: Get your purity score (0-100)
                </Heading>
                <Text color="default" className="text-gray-600">
                  Your score is calculated based on how many experiences you've had.
                </Text>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-3 shadow-sm cursor-pointer">
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

        {/* Trust Badges */}
        <section className="py-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-6 text-center">
              <div className="flex items-center gap-2 animate-pulse hover:animate-none hover:scale-110 transition-transform">
                <span className="text-green-500 text-2xl">✅</span>
                <Text variant="body" className="font-semibold">100% Anonymous</Text>
              </div>
              <div className="flex items-center gap-2 animate-pulse hover:animate-none hover:scale-110 transition-transform delay-75">
                <span className="text-green-500 text-2xl">✅</span>
                <Text variant="body" className="font-semibold">No Sign-Up Required</Text>
              </div>
              <div className="flex items-center gap-2 animate-pulse hover:animate-none hover:scale-110 transition-transform delay-150">
                <span className="text-green-500 text-2xl">✅</span>
                <Text variant="body" className="font-semibold">Instant Results</Text>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-6">
          <div className="max-w-4xl mx-auto text-center">
            <Text variant="large" className="text-gray-700 animate-bounce">
              🔥 <strong>10,000+</strong> people took the test this week
            </Text>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <Heading size="3xl" className="mb-6 text-center animate-fade-in">
              About the Rice Purity Test
            </Heading>
            <div className="space-y-4 text-gray-700">
              <Text variant="body" className="leading-relaxed animate-fade-in-delay-1">
                The Rice Purity Test has been a tradition at Rice University for decades. Originally created to foster bonding among students, it has become a popular online quiz taken by millions worldwide.
              </Text>
              
              <div className="animate-slide-up-delay-2">
                <Heading size="xl" className="mb-3 text-green-500">
                  Origins and History
                </Heading>
                <Text variant="body" className="leading-relaxed">
                  Created at Rice University in Houston, Texas, this self-assessment survey was designed to gauge the maturity level of students. The test consists of 100 questions covering various life experiences, from innocent activities to more mature encounters.
                </Text>
              </div>
              
              <div className="animate-slide-up-delay-3">
                <Heading size="xl" className="mb-3 text-green-500">
                  How to Interpret Your Score
                </Heading>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li className="hover:text-green-600 transition-colors"><strong>100-98:</strong> Extremely Pure - You've had very few experiences</li>
                  <li className="hover:text-green-600 transition-colors"><strong>97-94:</strong> Very Pure - You're quite innocent</li>
                  <li className="hover:text-green-600 transition-colors"><strong>93-77:</strong> Relatively Pure - Some experiences but still innocent</li>
                  <li className="hover:text-green-600 transition-colors"><strong>76-45:</strong> Moderate - Average range of experiences</li>
                  <li className="hover:text-green-600 transition-colors"><strong>44-9:</strong> Experienced - You've had many experiences</li>
                  <li className="hover:text-green-600 transition-colors"><strong>8-0:</strong> Highly Experienced - You've done most things on the list</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Heading size="3xl" className="mb-6 text-center animate-fade-in">
              Frequently Asked Questions
            </Heading>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up cursor-pointer">
                <Heading size="lg" className="mb-2 text-green-500">
                  Is the Rice Purity Test anonymous?
                </Heading>
                <Text color="default" className="text-gray-700">
                  Yes! The Rice Purity Test is completely anonymous. We do not collect, store, or track your answers. Your responses remain private and are only visible to you.
                </Text>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-1 cursor-pointer">
                <Heading size="lg" className="mb-2 text-green-500">
                  How is my score calculated?
                </Heading>
                <Text color="default" className="text-gray-700">
                  Your score is calculated by counting the number of experiences you've had and subtracting from 100. The formula is: Score = 100 - (number of checked boxes). A higher score means you're more "pure" or have had fewer experiences.
                </Text>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-2 cursor-pointer">
                <Heading size="lg" className="mb-2 text-green-500">
                  Can I retake the test?
                </Heading>
                <Text color="default" className="text-gray-700">
                  Absolutely! You can take the Rice Purity Test as many times as you like. Your previous results are not stored, so each test is independent.
                </Text>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-3 cursor-pointer">
                <Heading size="lg" className="mb-2 text-green-500">
                  What does my Rice Purity score mean?
                </Heading>
                <Text color="default" className="text-gray-700">
                  Your score indicates your level of "innocence" based on life experiences. There's no right or wrong score - it's simply a fun way to reflect on your experiences and compare with friends.
                </Text>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in cursor-pointer">
                <Heading size="lg" className="mb-2 text-green-500">
                  Is this the official Rice Purity Test?
                </Heading>
                <Text color="default" className="text-gray-700">
                  While we strive to maintain the authenticity of the original Rice University test, the official version has evolved over the years. This version contains the most commonly recognized 100 questions.
                </Text>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-1 cursor-pointer">
                <Heading size="lg" className="mb-2 text-green-500">
                  Why should I take the Rice Purity Test?
                </Heading>
                <Text color="default" className="text-gray-700">
                  The test is a fun, introspective way to reflect on your life experiences. It's popular among college students and young adults as an icebreaker and conversation starter.
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
