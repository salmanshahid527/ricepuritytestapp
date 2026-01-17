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
    <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 animate-scale-in shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
      <ScoreDisplay
        score={score}
        displayScore={displayScore}
        interpretation={interpretation}
      />
    </div>
  );
};
