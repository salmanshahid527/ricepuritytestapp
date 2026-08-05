'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is the test anonymous?",
      answer:
        "Yes. Your answers are held in your browser's local storage so you can close the tab and come back. They are not sent to us, they are not tied to an account, and clearing your browser data removes them.",
    },
    {
      question: "Is there an official version?",
      answer:
        "No. The test has circulated in many forms for decades and no organisation maintains an authoritative list, this site included. The version here is our own, written to be clear and to avoid questions we think have no business being scored.",
    },
    {
      question: "Does a low score mean something is wrong with me?",
      answer:
        "No. The score counts experiences, and experiences accumulate with age, opportunity and circumstance. It measures how much of a particular list applies to you. That is all it has ever measured.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-16 bg-[#f5f3f0] border-t border-b border-[#e6e2dd]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Main Heading Component */}
        <Heading as="h2" size="3xl" className="font-display font-extrabold md:text-4xl text-[#1f1d2b] mb-10 tracking-tight">
          Common questions
        </Heading>

        {/* FAQ Accordions Stack */}
        <div className="max-w-2xl space-y-4 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-[#e6e2dd] rounded-2xl overflow-hidden shadow-sm transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-7 py-6 text-left flex justify-between items-center cursor-pointer focus:outline-none"
                >
                  <Text as="span" variant="large" className="font-display font-bold text-[#1f1d2b]">
                    {faq.question}
                  </Text>
                  <span className="text-[#4a2e58] font-mono text-2xl font-semibold leading-none ml-4">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-7 pb-6 pt-1">
                    <Text variant="body" className="text-[#1f1d2b] text-[0.98rem] leading-relaxed opacity-90">
                      {faq.answer}
                    </Text>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Footer Links Bar */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2 text-sm text-[#6e6a7c]">
          <span className="font-mono uppercase text-xs tracking-wider font-semibold text-[#8c889a] mr-2">
            KEEP READING
          </span>

          <Link
            href="/rice-purity-test-questions"
            className="text-[#4a2e58] underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            All 100 questions
          </Link>
          <span>·</span>

          <Link
            href="/rice-purity-test-score"
            className="text-[#4a2e58] underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            Score guide
          </Link>
          <span>·</span>

          <Link
            href="/rice-purity-test-average-score-by-age"
            className="text-[#4a2e58] underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            Averages by age
          </Link>
          <span>·</span>

          <Link
            href="/rice-purity-test-history"
            className="text-[#4a2e58] underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            History of the test
          </Link>
        </div>
      </div>
    </section>
  );
}