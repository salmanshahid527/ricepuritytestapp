'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ResultsTemplate } from '@/components/templates/ResultsTemplate';
import { useScore } from '@/hooks/useScore';
import { getScoreInterpretation } from '@/lib/utils';
import { STORAGE_KEYS } from '@/lib/constants';

export default function ResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [score, setScore] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { displayScore } = useScore(score !== null ? score : undefined);

  useEffect(() => {
    const scoreParam = searchParams.get('score');
    if (scoreParam) {
      const parsedScore = parseInt(scoreParam, 10);
      if (!isNaN(parsedScore)) {
        setScore(parsedScore);
        localStorage.setItem(STORAGE_KEYS.SCORE, parsedScore.toString());
        setIsLoading(false);
      } else {
        router.push('/test');
      }
    } else {
      try {
        const storedScore = localStorage.getItem(STORAGE_KEYS.SCORE);
        if (storedScore) {
          const parsedScore = parseInt(storedScore, 10);
          if (!isNaN(parsedScore)) {
            setScore(parsedScore);
            setIsLoading(false);
          } else {
            router.push('/test');
          }
        } else {
          router.push('/test');
        }
      } catch (error) {
        console.error('Error reading score:', error);
        router.push('/test');
      }
    }
  }, [searchParams, router]);

  const handleRetakeTest = () => {
    localStorage.removeItem(STORAGE_KEYS.ANSWERS);
    localStorage.removeItem(STORAGE_KEYS.SCORE);
    router.push('/test');
  };

  if (isLoading || score === null) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
    );
  }

  const interpretation = getScoreInterpretation(score);

  return (
    <ResultsTemplate
      score={score}
      displayScore={displayScore}
      interpretation={interpretation}
      onRetakeTest={handleRetakeTest}
    />
  );
}
