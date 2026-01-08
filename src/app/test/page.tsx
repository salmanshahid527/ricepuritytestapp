'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TestTemplate } from '@/components/templates/TestTemplate';
import { useTestProgress } from '@/hooks/useTestProgress';
import { questions } from '@/lib/questions';
import { calculateScore } from '@/lib/utils';
import { STORAGE_KEYS } from '@/lib/constants';

export default function TestPage() {
  const router = useRouter();
  const { answers, updateAnswer, answeredCount, progress, totalQuestions, clearAll } = useTestProgress();

  const handleCalculateScore = () => {
    const score = calculateScore(answers);
    localStorage.setItem(STORAGE_KEYS.SCORE, score.toString());
    router.push('/results');
  };

  const handleClearAll = () => {
    clearAll();
  };

  const showCalculateButton = answeredCount > 0;

  return (
    <TestTemplate
      questions={questions}
      answers={answers}
      progress={progress}
      answeredCount={answeredCount}
      totalQuestions={totalQuestions}
      onAnswerChange={updateAnswer}
      onCalculateScore={handleCalculateScore}
      onClearAll={handleClearAll}
      showCalculateButton={showCalculateButton}
    />
  );
}
