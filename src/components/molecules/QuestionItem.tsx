import React from 'react';
import { Checkbox } from '../atoms/Checkbox';
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

  // Color variations based on question number for visual variety
  const getColorClasses = () => {
    const colorIndex = (id - 1) % 5;
    const colorMap = [
      { border: 'border-blue-200', bg: 'bg-blue-50', hoverBorder: 'hover:border-blue-400', hoverBg: 'hover:bg-blue-100' },
      { border: 'border-purple-200', bg: 'bg-purple-50', hoverBorder: 'hover:border-purple-400', hoverBg: 'hover:bg-purple-100' },
      { border: 'border-pink-200', bg: 'bg-pink-50', hoverBorder: 'hover:border-pink-400', hoverBg: 'hover:bg-pink-100' },
      { border: 'border-cyan-200', bg: 'bg-cyan-50', hoverBorder: 'hover:border-cyan-400', hoverBg: 'hover:bg-cyan-100' },
      { border: 'border-amber-200', bg: 'bg-amber-50', hoverBorder: 'hover:border-amber-400', hoverBg: 'hover:bg-amber-100' },
    ];
    return colorMap[colorIndex];
  };

  const colors = getColorClasses();

  return (
    <div 
      onClick={handleClick}
      className={`rounded-lg p-3 transition-all duration-300 animate-fade-in cursor-pointer shadow-sm hover:scale-[1.02] ${
        checked 
          ? 'border-green-500 bg-green-50 hover:bg-green-100 border-2 animate-pulse' 
          : `${colors.border} ${colors.bg} ${colors.hoverBorder} ${colors.hoverBg} border hover:shadow-md`
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 ${
            checked 
              ? 'bg-green-500 text-white scale-110 animate-bounce' 
              : 'bg-gray-200 text-gray-600 hover:scale-110'
          }`}>
            {id}
          </div>
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            onClick={(e) => e.stopPropagation()}
            aria-label={`Question ${id}: ${text}`}
            className="w-5 h-5 rounded border-gray-300 bg-white text-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer transition-all duration-200 hover:scale-110"
          />
        </div>
        <Text className={`flex-1 transition-colors duration-300 ${checked ? 'text-gray-800 font-medium' : 'text-gray-700'}`}>{text}</Text>
      </div>
    </div>
  );
};
