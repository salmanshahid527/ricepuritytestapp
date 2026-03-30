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

        {/* Complete History Section */}
        <section id="history" className="py-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <Heading as="h2" size="3xl" className="mb-6 text-center animate-fade-in">
              Complete History of the Rice Purity Test
            </Heading>
            <div className="space-y-4 text-gray-700">
              <Text variant="body" className="leading-relaxed animate-fade-in-delay-1">
                Picture 1980s Houston. Rice University freshmen are arriving on campus, nervous, not knowing anyone. Upperclassmen hand out a paper questionnaire — a list of 100 experiences — and ask everyone to check the ones they've had. Then the scores come out, conversations start, and strangers suddenly have something to talk about. That was the original Rice Purity Test: a low-stakes icebreaker, not a judgment.
              </Text>

              <Text variant="body" className="leading-relaxed">
                It stayed a campus-only thing for years. Then the internet happened. In the late 1990s, students started scanning and posting old versions online. What had been a Houston tradition suddenly reached dorm rooms across the country. The questions were the same, but now anyone could take it — and compare their score with people they'd never met.
              </Text>

              <Text variant="body" className="leading-relaxed">
                Social media turned it into something else entirely. TikTok, Twitter, group chats — people started sharing their scores publicly, debating what different numbers meant, and daring friends to take it. The test became a cultural shorthand for talking about life experience without getting too personal about any single thing. A score is easier to share than a life story.
              </Text>

              <Text variant="body" className="leading-relaxed">
                What's remarkable is how little the core test has changed. The questions from the 1980s are largely the same ones people answer today. The format shifted from paper to HTML forms to full web apps, but the 100-question structure and the simple subtraction formula have stayed constant. That consistency is part of why scores are still meaningful to compare across generations.
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
                The formula is simple: start at 100, subtract one point for every experience you check. So if you check 38 boxes, you get a 62. The number itself is less interesting than what it gets you thinking about — and what happens when you compare it with a friend.
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
                      You've checked almost nothing. This is genuinely rare — less than 5% of people score here. You've either had a very sheltered upbringing, hold strong personal values that kept you away from most of these experiences, or you're quite young and simply haven't had the opportunity yet. None of those are bad things.
                    </Text>
                  </div>

                  <div className="border-l-4 border-green-400 pl-4">
                    <Heading size="lg" className="mb-2 text-gray-800">
                      97-94: Very Pure
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      You've dipped your toes in but kept most of the list unchecked. A score here usually means you've had a handful of the more common social experiences — maybe a party or two, maybe some romantic milestones — but the more unusual or intense items are still largely unticked. Pretty typical for high schoolers and early college students.
                    </Text>
                  </div>

                  <div className="border-l-4 border-yellow-400 pl-4">
                    <Heading size="lg" className="mb-2 text-gray-800">
                      93-77: Relatively Pure
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      You've had real experiences — this isn't a sheltered score. But you've also maintained limits in other areas. This range covers a wide slice of people, from cautious college freshmen to adults who've lived full lives in specific directions. Most people who take the test for the first time land somewhere in here and feel surprised it's not lower.
                    </Text>
                  </div>

                  <div className="border-l-4 border-orange-400 pl-4">
                    <Heading size="lg" className="mb-2 text-gray-800">
                      76-45: Moderate Experience
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      This is where the majority of test takers land — roughly 60% of scores fall in the 55-75 band. You've lived a fairly varied life. You've said yes to things, tried things, maybe regretted a few of them. There's no single story that explains a score in this range; it just means you've been out in the world.
                    </Text>
                  </div>

                  <div className="border-l-4 border-red-400 pl-4">
                    <Heading size="lg" className="mb-2 text-gray-800">
                      44-9: Experienced
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      You've checked a lot of boxes. This usually comes with age, a particular social environment, or simply a life that leaned toward trying things rather than avoiding them. People here often find the test less surprising and more nostalgic — a reminder of a specific period rather than a revelation.
                    </Text>
                  </div>

                  <div className="border-l-4 border-red-600 pl-4">
                    <Heading size="lg" className="mb-2 text-gray-800">
                      8-0: Highly Experienced
                    </Heading>
                    <Text variant="body" className="leading-relaxed">
                      Scoring this low is actually quite uncommon. It means you've encountered nearly everything on a list that covers a very wide range of experiences. Whether that reflects a particular time in your life, a specific environment, or just decades of living — it doesn't say anything about who you are now.
                    </Text>
                  </div>
                </div>
              </div>

              <Text variant="body" className="leading-relaxed mt-4">
                For a deeper breakdown of what each range means — and why your score isn't a verdict on your character — check out the <a href="/rice-purity-test-score" className="text-green-600 underline hover:text-green-700">full score guide</a>.
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
                These numbers come from patterns observed across many test takers. They're self-reported, so treat them as rough reference points rather than hard data — but they're consistent enough to give you a sense of where most people land.
              </Text>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6 shadow-sm animate-fade-in">
                  <Heading size="lg" className="mb-3 text-green-600">
                    Average Score
                  </Heading>
                  <Text variant="large" className="font-bold text-green-700 mb-2">62-68</Text>
                  <Text variant="body" className="leading-relaxed">
                    Most people score somewhere in the low-to-mid 60s. That means checking off roughly a third of the list — which feels about right for someone who's been in the world a few years but hasn't experienced everything on it.
                  </Text>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 shadow-sm animate-fade-in-delay-1">
                  <Heading size="lg" className="mb-3 text-blue-600">
                    Most Common Range
                  </Heading>
                  <Text variant="large" className="font-bold text-blue-700 mb-2">55-75</Text>
                  <Text variant="body" className="leading-relaxed">
                    Around 60% of test takers land in this band. If you score here, you're squarely in the middle — which is less a comment on your character and more a reflection of what a fairly typical adult life looks like.
                  </Text>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 shadow-sm animate-fade-in-delay-2">
                  <Heading size="lg" className="mb-3 text-purple-600">
                    Age Matters
                  </Heading>
                  <Text variant="large" className="font-bold text-purple-700 mb-2">Younger = Higher</Text>
                  <Text variant="body" className="leading-relaxed">
                    An 18-year-old taking this test will almost always score higher than a 30-year-old — not because they're a better person, but because they've had less time to accumulate experiences. The same person, retaking it a decade later, will likely score lower.
                  </Text>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 shadow-sm animate-fade-in-delay-3">
                  <Heading size="lg" className="mb-3 text-amber-600">
                    A Note on Comparisons
                  </Heading>
                  <Text variant="large" className="font-bold text-amber-700 mb-2">Compare Fairly</Text>
                  <Text variant="body" className="leading-relaxed">
                    Comparing your score to someone in a different age group or life stage isn't that meaningful. The more interesting comparison is within your own peer group — same rough age, similar background. That's when scores actually tell you something.
                  </Text>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-6">
                <Heading size="lg" className="mb-3 text-gray-800">
                  Worth Knowing
                </Heading>
                <Text variant="body" className="leading-relaxed">
                  These figures are based on self-reported responses, which means they're only as reliable as people's honesty. Cultural background, personal values, and how you interpret individual questions all affect your score significantly. Two people with nearly identical life histories can score quite differently depending on how literally they read the questions. The number is a starting point for reflection — not a final verdict.
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
                  Yes — completely. Your answers never leave your device. There's no account, no login, no tracking. Everything runs locally in your browser. We built it this way intentionally because the test only works if people feel safe being honest.
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
                  The original test was created at Rice University in the 1980s as a paper handout. There's no single "official" digital version — it's been adapted many times over the decades. This version uses the most widely recognized set of 100 questions that have been in circulation since the test went online.
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
                  The test covers some mature topics, so it's intended for people 13 and older. Parental guidance is reasonable for younger teens. That said, the test is most commonly taken by college students and people in their 20s.
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
