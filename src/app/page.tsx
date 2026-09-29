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
              <Link href="/rice-purity-test-average-score-by-age" className="bg-white border border-gray-200 rounded-xl p-6 hover:border-green-400 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-slide-up-delay-1">
                <Heading size="lg" className="mb-2 text-green-500">
                  Average Score by Age
                </Heading>
                <Text color="default" className="text-gray-700">
                  See Rice Purity Test average score ranges by age group and compare your result
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

        {/* What the test is */}
        <section id="about-the-test" className="py-8 bg-white">
          <div className="max-w-3xl mx-auto space-y-4">
            <Heading as="h2" size="3xl" className="mb-2 text-center">
              What is the Rice Purity Test?
            </Heading>
            <Text variant="body" className="leading-relaxed text-gray-700">
              It&apos;s a 100-item &ldquo;have you ever&hellip;&rdquo; checklist about dating, sex, alcohol, drugs and
              run-ins with the law. It grew out of a student tradition at Rice University in Houston: the student
              newspaper, the <em>Thresher</em>, ran an informal purity survey as early as 1924 and revisited the idea for
              decades. The 100-question version moved online in the 1990s and went viral on TikTok in the 2020s.
            </Text>
            <Text variant="body" className="leading-relaxed text-gray-700">
              &ldquo;Purity&rdquo; was always tongue-in-cheek. A high score just means fewer boxes checked; it isn&apos;t a
              moral grade. Read more about{' '}
              <Link href="/rice-purity-test-meaning" className="text-green-600 underline">what the test means</Link> and{' '}
              <Link href="/rice-purity-test-history" className="text-green-600 underline">where it came from</Link>.
            </Text>
          </div>
        </section>

        {/* Score at a glance */}
        <section id="score-interpretation" className="py-8 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <Heading as="h2" size="3xl" className="mb-4 text-center">
              What your score means, at a glance
            </Heading>
            <Text variant="body" className="leading-relaxed text-gray-700 mb-4">
              Your score is 100 minus the number of items you check, and every item counts the same.
            </Text>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm bg-white rounded-xl">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="py-2 px-3 font-semibold text-gray-800">Score</th>
                    <th className="py-2 px-3 font-semibold text-gray-800">In short</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100"><td className="py-2 px-3 font-medium">90–100</td><td className="py-2 px-3">Very few items checked; common for new college students.</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-3 font-medium">77–89</td><td className="py-2 px-3">Dating, kissing and some social items; typical at 18 to 21.</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-3 font-medium">55–76</td><td className="py-2 px-3">Where most adults land. The overall average is estimated in the mid-60s.</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-2 px-3 font-medium">30–54</td><td className="py-2 px-3">Well into the later sections of the list; more common with age.</td></tr>
                  <tr><td className="py-2 px-3 font-medium">0–29</td><td className="py-2 px-3">Uncommon; most of the list checked.</td></tr>
                </tbody>
              </table>
            </div>
            <Text variant="body" className="mt-4 text-gray-700">
              See the full <Link href="/rice-purity-test-score" className="text-green-600 underline">score chart</Link> and{' '}
              <Link href="/rice-purity-test-average-score-by-age" className="text-green-600 underline">typical scores by age</Link>.
            </Text>
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
                Most people don't need much preparation — it's a checkbox list, not an exam. But a few things genuinely affect how useful your score ends up being.
              </Text>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm animate-slide-up">
                <Heading size="xl" className="mb-4 text-green-500">
                  Three Things That Actually Matter
                </Heading>
                <div className="space-y-4">
                  <div>
                    <Heading size="lg" className="mb-2 text-gray-800">
                      1. Answer for your whole life, not just recently
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      The test covers experiences across your entire life — not just the last few months. The question is "have you ever," not "do you currently." People often undercount because they're thinking about their present self rather than their full history. If it happened, check it.
                    </Text>
                  </div>

                  <div>
                    <Heading size="lg" className="mb-2 text-gray-800">
                      2. When a question is ambiguous, go with your gut
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      Some questions are deliberately broad. If your first instinct is "yes, kind of" — that probably counts. Overthinking them leads to under-reporting. Your gut reaction after a quick read is usually more honest than whatever conclusion you arrive at after analyzing it for 30 seconds.
                    </Text>
                  </div>

                  <div>
                    <Heading size="lg" className="mb-2 text-gray-800">
                      3. Nobody's watching
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      Your answers are processed entirely in your browser — nothing is sent to a server, nothing is stored. There's genuinely no audience. The score is only as useful as it is honest, and right now you're the only one who will ever know both the answers and the score.
                    </Text>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm mt-4 animate-slide-up-delay-1">
                <Heading size="xl" className="mb-4 text-green-500">
                  What to Do With Your Score
                </Heading>
                <Text variant="body" className="leading-relaxed">
                  Share it with a friend you trust and compare — that's where the interesting conversations happen. Two people can have very similar scores and completely different stories behind them. Or very different scores and much more overlap than they expected. The number opens the conversation; it doesn't close it.
                </Text>
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
                  Your answers are. They never leave your device and there's no account or login; the score is worked out in your browser. Like most sites we use Google Analytics to count visits and show ads through Google AdSense, but neither ever receives your answers. Details are in our privacy policy.
                </Text>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-1 cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  How is my score calculated?
                </Heading>
                <Text color="default" className="text-gray-700">
                  It's just subtraction. Start at 100, subtract one point for each box you check. Check 35 boxes? Your score is 65. Check 70? Your score is 30. The fewer experiences you've had from the list, the higher your score.
                </Text>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-2 cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  Can I retake the test?
                </Heading>
                <Text color="default" className="text-gray-700">
                  Yes, as many times as you want. Since nothing is stored, each attempt starts fresh. Some people retake it after a few years to see how their score has changed — others take it a second time because they rushed through the first time and want a more honest result.
                </Text>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-3 cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  What does my Rice Purity score mean?
                </Heading>
                <Text color="default" className="text-gray-700">
                  It's a count of how many experiences from a specific list you've had. A higher score means fewer experiences checked; a lower score means more. Most people land in the 55-75 range. For what each range actually means, the <a href="/rice-purity-test-score" className="text-green-600 underline hover:text-green-700">score guide</a> goes into real detail.
                </Text>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  Is this the official Rice Purity Test?
                </Heading>
                <Text color="default" className="text-gray-700">
                  No. The test grew out of a Rice University student-newspaper tradition that goes back to 1924, but Rice doesn't run any website that hosts it and there is no official online version. This site uses the widely circulated 100-question list with gender-neutral wording and three items replaced (see the questions page).
                </Text>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-1 cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  Why do people take the Rice Purity Test?
                </Heading>
                <Text color="default" className="text-gray-700">
                  Mostly curiosity and social comparison — people want to know where they stand and how they compare with friends. It also works as an icebreaker. Sharing your score opens conversations that might not happen otherwise, especially early in friendships.
                </Text>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-2 cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  How long does it take?
                </Heading>
                <Text color="default" className="text-gray-700">
                  Usually 10-15 minutes if you read each question. Your progress saves automatically, so if you close the tab halfway through, you can pick up where you left off. There's no time limit — take as long as you need.
                </Text>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-3 cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  Can I share my results?
                </Heading>
                <Text color="default" className="text-gray-700">
                  Yes. After you finish, you get your score and a share option. Most people text or screenshot their result to friends rather than posting publicly — but both work. Sharing is entirely optional.
                </Text>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  Is there an age requirement?
                </Heading>
                <Text color="default" className="text-gray-700">
                  Yes. The questions cover sex, drugs and alcohol, so the test is for adults 18 and older only (see our Terms of Service). Most people who take it are college students and people in their 20s.
                </Text>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-1 cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  What if I'm unsure how to answer a question?
                </Heading>
                <Text color="default" className="text-gray-700">
                  Go with your gut read after the first pass. If you immediately thought "yes, technically" — that counts. If you genuinely can't tell, leave it unchecked. The goal is honest self-reflection, not a technically perfect answer.
                </Text>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-2 cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  Will my score change if I retake it later?
                </Heading>
                <Text color="default" className="text-gray-700">
                  Probably, yes — especially if years have passed. The test asks about your whole life, so the longer you've lived, the more experiences you're likely to check. People who retake it after a few years almost always score lower the second time.
                </Text>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:border-green-400 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 animate-slide-up-delay-3 cursor-pointer">
                <Heading as="h3" size="lg" className="mb-2 text-green-500">
                  Is the Rice Purity Test scientifically valid?
                </Heading>
                <Text color="default" className="text-gray-700">
                  No — and it was never meant to be. It's a casual self-survey created by college students, not a psychological instrument. Your score doesn't measure intelligence, character, or anything clinically meaningful. It's a conversation starter, not a diagnosis.
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
