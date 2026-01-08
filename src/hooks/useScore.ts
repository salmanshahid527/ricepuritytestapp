import { useState, useEffect } from 'react';
import { STORAGE_KEYS } from '@/lib/constants';

export function useScore(initialScore?: number) {
  const [score, setScore] = useState<number>(initialScore ?? 0);
  const [displayScore, setDisplayScore] = useState<number>(0);

  useEffect(() => {
    const animateScore = (targetScore: number) => {
      const duration = 2000;
      const steps = 60;
      const increment = targetScore / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetScore) {
          setDisplayScore(targetScore);
          clearInterval(timer);
        } else {
          setDisplayScore(Math.floor(current));
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    if (initialScore !== undefined && initialScore !== null) {
      setScore(initialScore);
      const cleanup = animateScore(initialScore);
      return cleanup;
    } else {
      try {
        const storedScore = localStorage.getItem(STORAGE_KEYS.SCORE);
        if (storedScore) {
          const parsedScore = parseInt(storedScore, 10);
          if (!isNaN(parsedScore)) {
            setScore(parsedScore);
            const cleanup = animateScore(parsedScore);
            return cleanup;
          }
        }
      } catch (error) {
        console.error('Error reading score from localStorage:', error);
      }
    }
  }, [initialScore]);

  return { score, displayScore };
}
