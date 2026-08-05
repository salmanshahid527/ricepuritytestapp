'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AgeGate } from '@/components/organisms/AgeGate';
import { QuestionFlow } from '@/components/organisms/QuestionFlow';
import { questions } from '@/lib/questions';
import { calculateScore } from '@/lib/utils';
import { STORAGE_KEYS } from '@/lib/constants';
import type { TestAnswers } from '@/types';

const AGE_GATE_KEY = 'rpt_age_confirmed';
const ANSWERS_KEY = 'rpt_test_answers';

export default function TestPage() {
  const router = useRouter();
  const [ageOk, setAgeOk] = useState(false);
  const [ageChecked, setAgeChecked] = useState(false);
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<TestAnswers>({});

  useEffect(() => {
    const savedAge = localStorage.getItem(AGE_GATE_KEY);
    if (savedAge === 'true') setAgeOk(true);
    setAgeChecked(true);

    const savedAnswers = localStorage.getItem(ANSWERS_KEY);
    if (savedAnswers) {
      try {
        const parsed = JSON.parse(savedAnswers);
        setAnswers(parsed);
        const answeredIds = Object.keys(parsed).length;
        setIdx(Math.min(answeredIds, questions.length - 1));
      } catch {}
    }
  }, []);

  const passGate = () => {
    localStorage.setItem(AGE_GATE_KEY, 'true');
    setAgeOk(true);
  };

  const handleAnswer = (value: boolean) => {
    const q = questions[idx];
    const newAnswers = { ...answers, [q.id]: value };
    setAnswers(newAnswers);
    localStorage.setItem(ANSWERS_KEY, JSON.stringify(newAnswers));

    if (idx + 1 >= questions.length) {
      const score = calculateScore(newAnswers);
      localStorage.setItem(STORAGE_KEYS.SCORE, score.toString());
      router.push('/results');
    } else {
      setIdx(idx + 1);
    }
  };

  const handleBack = () => {
    if (idx > 0) setIdx(idx - 1);
  };

  if (!ageChecked) return null;

  if (!ageOk) {
    return <AgeGate onConfirm={passGate} />;
  }

  return (
    <QuestionFlow
      question={questions[idx]}
      currentIndex={idx}
      total={questions.length}
      onAnswer={handleAnswer}
      onBack={handleBack}
    />
  );
}
