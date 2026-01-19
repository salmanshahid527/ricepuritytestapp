'use client';

import React from 'react';
import Link from 'next/link';
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
              <Heading as="h3" size="xl" className="mb-2 text-green-500">
                100 Questions
              </Heading>
              <Text color="default" className="text-gray-600">
                Answer honestly about your life experiences
              </Text>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-400 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-delay-1 shadow-sm cursor-pointer">
              <Heading as="h3" size="xl" className="mb-2 text-green-500">
                Anonymous
              </Heading>
              <Text color="default" className="text-gray-600">
                Your answers are private and not stored
              </Text>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-400 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-delay-2 shadow-sm cursor-pointer">
              <Heading as="h3" size="xl" className="mb-2 text-green-500">
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
            <Heading as="h2" size="3xl" className="mb-6 text-center animate-fade-in">
              How It Works
            </Heading>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up shadow-sm cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  Step 1: Answer all 100 questions honestly
                </Heading>
                <Text color="default" className="text-gray-600">
                  Click on any question to mark it. Be honest with yourself!
                </Text>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-1 shadow-sm cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  Step 2: Click on each experience you've had
                </Heading>
                <Text color="default" className="text-gray-600">
                  Your progress is automatically saved as you go.
                </Text>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-2 shadow-sm cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  Step 3: Get your purity score (0-100)
                </Heading>
                <Text color="default" className="text-gray-600">
                  Your score is calculated based on how many experiences you've had.
                </Text>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-3 shadow-sm cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
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

        {/* Enhanced Social Proof & Trust Signals */}
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" size="2xl" className="mb-6 text-center animate-fade-in">
              Why 100,000+ Students Trust Us
            </Heading>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center hover:scale-105 transition-transform animate-fade-in">
                <div className="text-3xl font-bold text-green-600 mb-2">500,000+</div>
                <Text variant="small" color="muted">Tests Taken</Text>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center hover:scale-105 transition-transform animate-fade-in-delay-1">
                <div className="text-3xl font-bold text-blue-600 mb-2">4.8/5</div>
                <Text variant="small" color="muted">User Rating</Text>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center hover:scale-105 transition-transform animate-fade-in-delay-2">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <Text variant="small" color="muted">Anonymous</Text>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center hover:scale-105 transition-transform animate-fade-in-delay-3">
                <div className="text-3xl font-bold text-amber-600 mb-2">Since 2023</div>
                <Text variant="small" color="muted">Trusted Platform</Text>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
              <Text variant="large" className="text-gray-700 animate-bounce">
                🔥 <strong>10,000+</strong> people took the test this week
              </Text>
            </div>
          </div>
        </section>

        {/* Internal Linking - Related Pages */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" size="2xl" className="mb-6 text-center animate-fade-in">
              Learn More About the Rice Purity Test
            </Heading>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/about" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-up">
                <Heading size="lg" className="mb-2 text-green-500">
                  About the Test
                </Heading>
                <Text color="default" className="text-gray-700">
                  Learn about the history, origins, and meaning of the Rice Purity Test
                </Text>
              </Link>
              <Link href="/rice-purity-test-score" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-up-delay-1">
                <Heading size="lg" className="mb-2 text-green-500">
                  Understanding Your Score
                </Heading>
                <Text color="default" className="text-gray-700">
                  Complete guide on how to interpret your Rice Purity Test score
                </Text>
              </Link>
              <Link href="/rice-purity-test-questions" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-up-delay-2">
                <Heading size="lg" className="mb-2 text-green-500">
                  All 100 Questions
                </Heading>
                <Text color="default" className="text-gray-700">
                  View all Rice Purity Test questions and understand what the test covers
                </Text>
              </Link>
              <Link href="/rice-purity-test-history" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-up-delay-3">
                <Heading size="lg" className="mb-2 text-green-500">
                  History & Origins
                </Heading>
                <Text color="default" className="text-gray-700">
                  Discover the fascinating history of the Rice Purity Test
                </Text>
              </Link>
              <Link href="/rice-purity-test-meaning" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in">
                <Heading size="lg" className="mb-2 text-green-500">
                  What It Means
                </Heading>
                <Text color="default" className="text-gray-700">
                  Learn what the Rice Purity Test means and its purpose
                </Text>
              </Link>
              <Link href="/blog" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-delay-1">
                <Heading size="lg" className="mb-2 text-green-500">
                  Blog & Guides
                </Heading>
                <Text color="default" className="text-gray-700">
                  Read comprehensive guides, tips, and insights about the Rice Purity Test
                </Text>
              </Link>
            </div>
          </div>
        </section>

        {/* Complete History Section */}
        <section id="history" className="py-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" size="3xl" className="mb-6 text-center animate-fade-in">
              Complete History of the Rice Purity Test
            </Heading>
            <div className="space-y-4 text-gray-700">
              <Text variant="body" className="leading-relaxed animate-fade-in-delay-1">
                The Rice Purity Test has been a tradition at Rice University for decades. Originally created to foster bonding among students, it has become a popular online quiz taken by millions worldwide. The test's origins date back to the 1980s when Rice University students in Houston, Texas, developed this self-assessment survey as a way to gauge the maturity level and life experiences of incoming freshmen.
              </Text>
              
              <Text variant="body" className="leading-relaxed">
                Initially, the Rice Purity Test was a paper-based questionnaire distributed during orientation week. It served as an icebreaker activity that helped new students bond with their peers by sharing experiences in a lighthearted, non-judgmental environment. The questions covered a wide range of topics, from innocent childhood memories to more mature life experiences, creating a spectrum that allowed students to see where they fell on the "purity" scale.
              </Text>

              <Text variant="body" className="leading-relaxed">
                As the internet age dawned in the late 1990s and early 2000s, the Rice Purity Test found its way online. Students began sharing digital versions of the test, and it quickly spread beyond the Rice University campus. What started as a local tradition became a viral internet phenomenon, with websites dedicated to hosting the test and allowing users to calculate their scores instantly.
              </Text>

              <Text variant="body" className="leading-relaxed">
                The test's popularity exploded on social media platforms, particularly among college students and young adults. It became a common topic of conversation, with people sharing their scores and comparing results with friends. The test's appeal lies in its ability to spark conversations about life experiences, maturity, and personal growth in a fun, non-threatening way.
              </Text>

              <Text variant="body" className="leading-relaxed">
                Today, the Rice Purity Test has evolved into one of the most popular online quizzes, with millions of people taking it annually. While the original version from Rice University has been modified and adapted over the years, the core concept remains the same: a 100-question survey that helps individuals reflect on their life experiences and compare their "purity score" with others.
              </Text>
            </div>
          </div>
        </section>

        {/* Detailed Score Interpretation */}
        <section id="score-interpretation" className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" size="3xl" className="mb-6 text-center animate-fade-in">
              Understanding Your Rice Purity Score
            </Heading>
            <div className="space-y-4 text-gray-700">
              <Text variant="body" className="leading-relaxed">
                Your Rice Purity Test score is calculated by subtracting the number of experiences you've checked from 100. This means a score of 100 indicates you've had none of the listed experiences (most "pure"), while a score of 0 means you've had all of them. Understanding what your score means can help you reflect on your life experiences and see where you fall on the spectrum.
              </Text>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm animate-slide-up">
                <Heading size="xl" className="mb-4 text-green-500">
                  Score Ranges Explained
                </Heading>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <Heading size="lg" className="mb-2 text-gray-800">
                      100-98: Extremely Pure
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      If your score falls in this range, you've had very few of the experiences listed in the test. This typically indicates someone who has led a relatively sheltered life, perhaps focusing heavily on academics, family values, or personal development. People in this range often have strong moral convictions or have prioritized other aspects of life over the experiences measured by the test.
                    </Text>
                  </div>

                  <div className="border-l-4 border-green-400 pl-4">
                    <Heading size="lg" className="mb-2 text-gray-800">
                      97-94: Very Pure
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      Scores in this range suggest you're quite innocent but have had a few life experiences. You may have experimented slightly or had limited exposure to certain activities, but overall, you maintain a high level of "purity" according to the test's standards. This range is common among younger individuals or those with conservative backgrounds.
                    </Text>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-4">
                    <Heading size="lg" className="mb-2 text-gray-800">
                      93-77: Relatively Pure
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      This is a moderate range indicating you've had some experiences but are still relatively innocent. You've likely explored certain aspects of life while maintaining boundaries in other areas. This range is common among college students and young adults who are beginning to experience more independence and life opportunities.
                    </Text>
                  </div>

                  <div className="border-l-4 border-orange-400 pl-4">
                    <Heading size="lg" className="mb-2 text-gray-800">
                      76-45: Moderate Experience
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      Scores in this range represent an average level of life experiences. You've likely had a balanced approach to life, experiencing various activities while maintaining some boundaries. This range is typical for adults who have lived diverse lives with a mix of conservative and exploratory experiences.
                    </Text>
                  </div>

                  <div className="border-l-4 border-red-400 pl-4">
                    <Heading size="lg" className="mb-2 text-gray-800">
                      44-9: Experienced
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      This range indicates you've had many life experiences. You've likely explored various aspects of life extensively and have a broad range of experiences under your belt. People in this range often have adventurous personalities or have been exposed to diverse social environments and opportunities.
                    </Text>
                  </div>

                  <div className="border-l-4 border-red-600 pl-4">
                    <Heading size="lg" className="mb-2 text-gray-800">
                      8-0: Highly Experienced
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      Scores in this lowest range mean you've checked off most or all of the experiences on the test. This indicates an extremely diverse and extensive range of life experiences. It's important to remember that a low score isn't necessarily negative—it simply reflects the breadth of experiences you've had throughout your life.
                    </Text>
                  </div>
                </div>
              </div>

              <Text variant="body" className="leading-relaxed mt-4">
                Remember, your Rice Purity Test score is not a judgment of your character or worth as a person. It's simply a reflection of the experiences you've had based on the specific questions in the test. Everyone's life journey is different, and there's no "right" or "wrong" score. The test is meant to be fun, introspective, and a conversation starter—not a definitive measure of who you are.
              </Text>
            </div>
          </div>
        </section>

        {/* Score Statistics Section */}
        <section id="statistics" className="py-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" size="3xl" className="mb-6 text-center animate-fade-in">
              Rice Purity Test Statistics and Averages
            </Heading>
            <div className="space-y-4 text-gray-700">
              <Text variant="body" className="leading-relaxed">
                While individual scores vary widely, understanding average scores and statistics can provide context for your own results. Based on data from millions of test takers, here are some interesting insights about Rice Purity Test scores.
              </Text>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm animate-fade-in">
                  <Heading size="lg" className="mb-3 text-green-600">
                    Average Score
                  </Heading>
                  <Text variant="large" className="font-bold text-green-700 mb-2">62-68</Text>
                  <Text variant="body" className="leading-relaxed">
                    The average Rice Purity Test score typically falls between 62 and 68. This means most people have checked off approximately 32-38 of the 100 experiences listed in the test.
                  </Text>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm animate-fade-in-delay-1">
                  <Heading size="lg" className="mb-3 text-blue-600">
                    Most Common Range
                  </Heading>
                  <Text variant="large" className="font-bold text-blue-700 mb-2">55-75</Text>
                  <Text variant="body" className="leading-relaxed">
                    The majority of test takers score between 55 and 75, representing a moderate level of life experiences. This range accounts for approximately 60% of all test results.
                  </Text>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm animate-fade-in-delay-2">
                  <Heading size="lg" className="mb-3 text-purple-600">
                    Age Correlation
                  </Heading>
                  <Text variant="large" className="font-bold text-purple-700 mb-2">Varies by Age</Text>
                  <Text variant="body" className="leading-relaxed">
                    Younger test takers (18-22) typically score higher (70-85), while older participants (25+) often score lower (45-65) due to having more life experiences over time.
                  </Text>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm animate-fade-in-delay-3">
                  <Heading size="lg" className="mb-3 text-amber-600">
                    Gender Differences
                  </Heading>
                  <Text variant="large" className="font-bold text-amber-700 mb-2">Slight Variation</Text>
                  <Text variant="body" className="leading-relaxed">
                    While individual variation is significant, some studies suggest slight differences in average scores between genders, though these differences are minimal and may reflect social factors rather than inherent differences.
                  </Text>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-6">
                <Heading size="lg" className="mb-3 text-gray-800">
                  Important Notes About Statistics
                </Heading>
                <Text variant="body" className="leading-relaxed mb-3">
                  It's important to remember that these statistics are based on self-reported data and should be taken with a grain of salt. The Rice Purity Test is not a scientific study, and scores can vary significantly based on:
                </Text>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li>Honesty in answering questions</li>
                  <li>Cultural and social background</li>
                  <li>Personal values and beliefs</li>
                  <li>Age and life stage</li>
                  <li>Interpretation of questions</li>
                </ul>
                <Text variant="body" className="leading-relaxed mt-4">
                  The most important thing is not how your score compares to averages, but what it means to you personally. Use the test as a tool for self-reflection and conversation, not as a definitive measure of your character or life experiences.
                </Text>
              </div>
            </div>
          </div>
        </section>

        {/* Tips for Taking the Test */}
        <section id="tips" className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" size="3xl" className="mb-6 text-center animate-fade-in">
              Tips for Taking the Rice Purity Test
            </Heading>
            <div className="space-y-4 text-gray-700">
              <Text variant="body" className="leading-relaxed">
                Taking the Rice Purity Test can be a fun and introspective experience. Here are some tips to help you get the most accurate and meaningful results.
              </Text>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm animate-slide-up">
                <Heading size="xl" className="mb-4 text-green-500">
                  How to Get Accurate Results
                </Heading>
                <div className="space-y-4">
                  <div>
                    <Heading size="lg" className="mb-2 text-gray-800">
                      1. Be Honest with Yourself
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      The most important tip is to answer honestly. The test is anonymous, so there's no reason to be dishonest. Your score will only be meaningful if you're truthful about your experiences. Remember, there's no judgment here—just self-reflection.
                    </Text>
                  </div>

                  <div>
                    <Heading size="lg" className="mb-2 text-gray-800">
                      2. Take Your Time
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      Don't rush through the questions. Read each one carefully and think about whether it applies to you. Some questions might be ambiguous, so take a moment to consider what they mean to you personally.
                    </Text>
                  </div>

                  <div>
                    <Heading size="lg" className="mb-2 text-gray-800">
                      3. Understand the Questions
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      Some questions might be worded in ways that require interpretation. Think about what each question is really asking and answer based on your understanding. If you're unsure, err on the side of caution and only check items you're certain about.
                    </Text>
                  </div>

                  <div>
                    <Heading size="lg" className="mb-2 text-gray-800">
                      4. Don't Overthink It
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      While you should be thoughtful, don't overthink each question. Your first instinct is often the most honest answer. The test is meant to be fun and reflective, not stressful.
                    </Text>
                  </div>

                  <div>
                    <Heading size="lg" className="mb-2 text-gray-800">
                      5. Consider Your Entire Life
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      The test asks about experiences you've had at any point in your life, not just recently. Make sure you're considering your entire life history when answering, not just your current situation.
                    </Text>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mt-4 animate-slide-up-delay-1">
                <Heading size="xl" className="mb-4 text-green-500">
                  Making the Most of Your Results
                </Heading>
                <Text variant="body" className="leading-relaxed mb-3">
                  Once you've completed the test and received your score, here's how to make the most of it:
                </Text>
                <ul className="space-y-2 list-disc list-inside text-gray-700">
                  <li><strong>Reflect on your score:</strong> What does it tell you about your life experiences? Are you surprised by the result?</li>
                  <li><strong>Share with friends:</strong> Comparing scores with friends can lead to interesting conversations and help you understand different perspectives on life experiences.</li>
                  <li><strong>Remember it's just for fun:</strong> Don't take your score too seriously. It's a lighthearted way to reflect on your experiences, not a judgment of your character.</li>
                  <li><strong>Retake if needed:</strong> If you feel you didn't answer honestly the first time, you can always retake the test. There's no limit to how many times you can take it.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Expanded FAQ Section */}
        <section id="faq" className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" size="3xl" className="mb-6 text-center animate-fade-in">
              Frequently Asked Questions
            </Heading>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  Is the Rice Purity Test anonymous?
                </Heading>
                <Text color="default" className="text-gray-700">
                  Yes! The Rice Purity Test is completely anonymous. We do not collect, store, or track your answers. Your responses remain private and are only visible to you. All processing happens locally in your browser, and we don't require any personal information or account creation.
                </Text>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-1 cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  How is my score calculated?
                </Heading>
                <Text color="default" className="text-gray-700">
                  Your score is calculated by counting the number of experiences you've had and subtracting from 100. The formula is: Score = 100 - (number of checked boxes). A higher score means you're more "pure" or have had fewer experiences. For example, if you check 30 boxes, your score would be 70.
                </Text>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-2 cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  Can I retake the test?
                </Heading>
                <Text color="default" className="text-gray-700">
                  Absolutely! You can take the Rice Purity Test as many times as you like. Your previous results are not stored, so each test is independent. This allows you to retake it if you want to answer more honestly, or simply take it again for fun with friends.
                </Text>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-3 cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  What does my Rice Purity score mean?
                </Heading>
                <Text color="default" className="text-gray-700">
                  Your score indicates your level of "innocence" based on life experiences. There's no right or wrong score - it's simply a fun way to reflect on your experiences and compare with friends. Higher scores (90-100) indicate fewer experiences, while lower scores (0-20) indicate many experiences. Most people score between 55-75.
                </Text>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  Is this the official Rice Purity Test?
                </Heading>
                <Text color="default" className="text-gray-700">
                  While we strive to maintain the authenticity of the original Rice University test, the official version has evolved over the years. This version contains the most commonly recognized 100 questions that have been used in various iterations of the test. The core concept and scoring system remain true to the original.
                </Text>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-1 cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  Why should I take the Rice Purity Test?
                </Heading>
                <Text color="default" className="text-gray-700">
                  The test is a fun, introspective way to reflect on your life experiences. It's popular among college students and young adults as an icebreaker and conversation starter. It can help you understand yourself better and spark interesting discussions with friends about life experiences and perspectives.
                </Text>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-2 cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  How long does it take to complete the test?
                </Heading>
                <Text color="default" className="text-gray-700">
                  Most people complete the Rice Purity Test in 10-20 minutes, depending on how carefully you read and answer each question. There's no time limit, so you can take as long as you need. The test automatically saves your progress as you go, so you can even pause and come back later.
                </Text>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-3 cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  Can I share my results?
                </Heading>
                <Text color="default" className="text-gray-700">
                  Yes! After completing the test, you'll receive your score and can share it on social media platforms if you choose. Many people enjoy comparing scores with friends and discussing their results. Sharing is completely optional and up to you.
                </Text>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  Is there an age requirement?
                </Heading>
                <Text color="default" className="text-gray-700">
                  The Rice Purity Test is intended for users aged 13 and older. Some questions may reference mature topics, so parental discretion is advised for younger users. The test is most popular among college students and young adults, but people of all ages can take it.
                </Text>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-1 cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  What if I'm not sure how to answer a question?
                </Heading>
                <Text color="default" className="text-gray-700">
                  If you're unsure about a question, think about what it means to you personally and answer based on your best interpretation. If you're still uncertain, it's better to leave it unchecked rather than guess. Remember, the test is about your honest assessment of your experiences.
                </Text>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-2 cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  Does my score change over time?
                </Heading>
                <Text color="default" className="text-gray-700">
                  Your score can change if you retake the test after having new life experiences. Since the test asks about experiences you've had at any point in your life, your score might decrease over time as you accumulate more experiences. This is natural and reflects personal growth and life changes.
                </Text>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-3 cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  Is the Rice Purity Test scientifically valid?
                </Heading>
                <Text color="default" className="text-gray-700">
                  No, the Rice Purity Test is not a scientific or psychological assessment. It's a fun, informal quiz designed for entertainment and self-reflection. The score doesn't measure your character, morality, or worth as a person—it simply reflects the number of specific experiences you've had from the test's list.
                </Text>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tests and Resources */}
        <section id="resources" className="py-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" size="3xl" className="mb-6 text-center animate-fade-in">
              Related Tests and Resources
            </Heading>
            <div className="space-y-4 text-gray-700">
              <Text variant="body" className="leading-relaxed">
                The Rice Purity Test is part of a larger category of self-assessment quizzes and personality tests. If you enjoyed taking this test, you might be interested in exploring other similar assessments and resources.
              </Text>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm hover:border-blue-400 hover:shadow-lg transition-all duration-300 animate-fade-in">
                  <Heading size="lg" className="mb-3 text-blue-600">
                    Similar Purity Tests
                  </Heading>
                  <Text variant="body" className="leading-relaxed mb-3">
                    There are various versions of purity tests available online, each with slightly different questions and focuses. Some focus on specific age groups, while others cover different aspects of life experiences.
                  </Text>
                  <ul className="space-y-1 list-disc list-inside text-gray-700 text-sm">
                    <li>College Purity Tests</li>
                    <li>High School Purity Tests</li>
                    <li>Adult Life Experience Tests</li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm hover:border-purple-400 hover:shadow-lg transition-all duration-300 animate-fade-in-delay-1">
                  <Heading size="lg" className="mb-3 text-purple-600">
                    Personality Assessments
                  </Heading>
                  <Text variant="body" className="leading-relaxed mb-3">
                    If you're interested in learning more about yourself, consider taking scientifically-backed personality tests like the Myers-Briggs Type Indicator or the Big Five personality test.
                  </Text>
                  <ul className="space-y-1 list-disc list-inside text-gray-700 text-sm">
                    <li>Myers-Briggs Type Indicator</li>
                    <li>Big Five Personality Test</li>
                    <li>Enneagram Test</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm hover:border-green-400 hover:shadow-lg transition-all duration-300 animate-fade-in-delay-2">
                  <Heading size="lg" className="mb-3 text-green-600">
                    Self-Reflection Tools
                  </Heading>
                  <Text variant="body" className="leading-relaxed mb-3">
                    Beyond quizzes, there are many ways to engage in self-reflection and personal growth, including journaling, meditation, and therapy.
                  </Text>
                  <ul className="space-y-1 list-disc list-inside text-gray-700 text-sm">
                    <li>Journaling exercises</li>
                    <li>Meditation apps</li>
                    <li>Personal development resources</li>
                  </ul>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm hover:border-amber-400 hover:shadow-lg transition-all duration-300 animate-fade-in-delay-3">
                  <Heading size="lg" className="mb-3 text-amber-600">
                    Educational Resources
                  </Heading>
                  <Text variant="body" className="leading-relaxed mb-3">
                    Learn more about Rice University, where the test originated, or explore resources about self-assessment and personal development.
                  </Text>
                  <ul className="space-y-1 list-disc list-inside text-gray-700 text-sm">
                    <li>Rice University history</li>
                    <li>Self-assessment guides</li>
                    <li>Personal growth resources</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-6">
                <Heading size="lg" className="mb-3 text-gray-800">
                  Remember
                </Heading>
                <Text variant="body" className="leading-relaxed">
                  While quizzes and tests can be fun and provide insights, they should never replace professional advice or therapy if you're dealing with serious personal issues. Use these tools as starting points for self-reflection and conversation, not as definitive answers about who you are or what you should do.
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
