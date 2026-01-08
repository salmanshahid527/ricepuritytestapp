import React from 'react';
import { Heading } from '../atoms/Heading';
import { Text } from '../atoms/Text';
import { ProgressIndicator } from '../atoms/ProgressIndicator';

interface ScoreDisplayProps {
  score: number;
  displayScore: number;
  interpretation: {
    title: string;
    description: string;
    colorClass: string;
    bgClass: string;
  };
}

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  score,
  displayScore,
  interpretation,
}) => {
  return (
    <div className="flex flex-col items-center space-y-6 animate-scale-in">
      <ProgressIndicator progress={score} size="lg" showLabel={false} />
      <div className="text-center">
        <Heading size="4xl" className="mb-2">
          {displayScore}
        </Heading>
        <Text variant="large" color="muted">
          out of 100
        </Text>
      </div>
      <div className={`${interpretation.bgClass} ${interpretation.colorClass} rounded-lg p-6 max-w-2xl text-center`}>
        <Heading size="xl" className={`mb-2 ${interpretation.colorClass}`}>
          {interpretation.title}
        </Heading>
        <Text variant="body" className={interpretation.colorClass}>
          {interpretation.description}
        </Text>
      </div>
    </div>
  );
};
