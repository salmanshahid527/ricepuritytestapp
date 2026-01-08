import React from 'react';
import { ScoreDisplay } from '../molecules/ScoreDisplay';

interface ScoreCardProps {
  score: number;
  displayScore: number;
  interpretation: {
    title: string;
    description: string;
    colorClass: string;
    bgClass: string;
  };
}

export const ScoreCard: React.FC<ScoreCardProps> = ({
  score,
  displayScore,
  interpretation,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-12 animate-scale-in shadow-lg">
      <ScoreDisplay
        score={score}
        displayScore={displayScore}
        interpretation={interpretation}
      />
    </div>
  );
};
