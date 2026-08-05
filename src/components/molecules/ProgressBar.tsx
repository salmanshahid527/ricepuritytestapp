import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const pct = Math.round((current / total) * 100);

  return (
    <div className="sticky top-0 z-40 bg-surface border-b border-line py-3">
      <div className="max-w-[1120px] mx-auto px-5">
        <div className="flex justify-between items-center text-sm mb-2">
          <span className="text-ink font-medium">
            Question {current + 1} of {total}
          </span>
          <a href="/" className="text-slate hover:text-plum text-sm">
            Exit
          </a>
        </div>
        <div className="h-1.5 bg-line rounded-full overflow-hidden">
          <div
            className="h-full bg-plum transition-all duration-300 rounded-full"
            style={{ width: `${pct}%` }}
          />
        </div>
      </div>
    </div>
  );
};
