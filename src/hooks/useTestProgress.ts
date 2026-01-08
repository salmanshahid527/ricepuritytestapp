import { useState, useEffect, useCallback } from 'react';
import { TestAnswers } from '@/types';
import { TOTAL_QUESTIONS, STORAGE_KEYS } from '@/lib/constants';
import { useLocalStorage } from './useLocalStorage';

export function useTestProgress() {
  const [answers, setAnswers] = useLocalStorage<TestAnswers>(
    STORAGE_KEYS.ANSWERS,
    {}
  );

  const updateAnswer = useCallback((questionId: number, checked: boolean) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: checked,
    }));
  }, [setAnswers]);

  const clearAll = useCallback(() => {
    setAnswers({});
  }, [setAnswers]);

  const answeredCount = Object.values(answers).filter(Boolean).length;
  const progress = Math.round((answeredCount / TOTAL_QUESTIONS) * 100);

  return {
    answers,
    updateAnswer,
    clearAll,
    answeredCount,
    progress,
    totalQuestions: TOTAL_QUESTIONS,
  };
}
