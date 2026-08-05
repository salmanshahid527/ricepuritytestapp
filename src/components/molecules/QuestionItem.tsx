
import React from 'react';
import { Text } from '../atoms/Text';

interface QuestionItemProps {
  id: number;
  text: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const QuestionItem: React.FC<QuestionItemProps> = ({
  id,
  text,
  checked,
  onChange,
}) => {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <div
      onClick={handleClick}
      className={`rounded-lg p-3 transition-all duration-200 cursor-pointer border ${
        checked
          ? 'border-plum bg-plum-tint'
          : 'border-line bg-surface hover:border-plum hover:bg-bone'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-semibold transition-colors duration-200 flex-shrink-0 ${
              checked
                ? 'bg-plum text-white'
                : 'bg-bone text-slate'
            }`}
          >
            {id}
          </div>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            onClick={(e) => e.stopPropagation()}
            aria-label={`Question ${id}: ${text}`}
            className="w-5 h-5 rounded border-line bg-white text-plum focus:ring-2 focus:ring-amber focus:ring-offset-2 cursor-pointer flex-shrink-0"
          />
        </div>
        <Text
          className={`flex-1 min-w-0 transition-colors duration-200 break-words ${
            checked ? 'text-ink font-medium' : 'text-ink'
          }`}
        >
          {text}
        </Text>
      </div>
    </div>
  );
};
