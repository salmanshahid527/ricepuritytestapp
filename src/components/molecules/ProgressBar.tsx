import React from 'react';
import { Text } from '../atoms/Text';

interface ProgressBarProps {
  progress: number;
  current: number;
  total: number;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  current,
  total,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <Text variant="small" color="muted">
          Question {current} of {total}
        </Text>
        <Text variant="small" color="muted">
          {progress}% Complete
        </Text>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-500 ease-out rounded-full"
          style={{ width: `${progress}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
};
