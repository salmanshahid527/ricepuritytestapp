import React from 'react';
import { ProgressBar } from '../molecules/ProgressBar';
import type { Question } from '@/types';

interface QuestionFlowProps {
  question: Question;
  currentIndex: number;
  total: number;
  onAnswer: (value: boolean) => void;
  onBack: () => void;
}

export const QuestionFlow: React.FC<QuestionFlowProps> = ({
  question,
  currentIndex,
  total,
  onAnswer,
  onBack,
}) => {
  return (
    <>
      <ProgressBar current={currentIndex} total={total} />

      <section className="py-12">
        <div className="max-w-[640px] mx-auto px-5">
          <p className="font-mono text-xs tracking-widest uppercase text-plum text-center mb-6">
            Item {currentIndex + 1} of {total}
          </p>

          <div className="bg-surface border border-line rounded-2xl p-8 text-center mb-6">
            <span className="inline-block font-mono text-xs font-semibold text-plum border-b-2 border-amber pb-0.5 mb-4">
              Q{String(question.id).padStart(3, '0')}
            </span>
            <p className="font-display font-bold text-2xl text-ink leading-snug mb-4">
              {question.text}
            </p>
            <p className="text-sm text-slate">Answer for your whole life so far.</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              onClick={() => onAnswer(true)}
              className="bg-amber text-ink font-display font-bold text-lg rounded-xl min-h-[64px] hover:brightness-105 transition-all"
            >
              Yes
            </button>
            <button
              onClick={() => onAnswer(false)}
              className="bg-surface text-ink border-2 border-ink font-display font-bold text-lg rounded-xl min-h-[64px] hover:border-plum hover:text-plum transition-all"
            >
              No
            </button>
          </div>

          <div className="text-center space-y-3 mb-8">
            <button
              onClick={() => onAnswer(false)}
              className="text-slate text-sm hover:text-plum underline underline-offset-2"
            >
              Skip this question
            </button>
            {currentIndex > 0 && (
              <div>
                <button
                  onClick={onBack}
                  className="text-slate text-sm hover:text-plum underline underline-offset-2"
                >
                  ← Previous question
                </button>
              </div>
            )}
          </div>

          <div className="bg-bone border border-line rounded-lg px-5 py-4 max-w-[500px] mx-auto">
            <p className="font-mono text-xs uppercase tracking-widest text-plum mb-2">
              Your progress
            </p>
            <p className="text-sm text-ink">
              Progress is saved on this device. Close the tab and come back — it will
              be here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};