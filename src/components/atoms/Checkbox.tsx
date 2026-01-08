import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  className = '',
  ...props
}) => {
  return (
    <label className={`flex items-center cursor-pointer group ${className}`}>
      <input
        type="checkbox"
        className="w-5 h-5 rounded border-gray-300 bg-white text-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 cursor-pointer transition-all duration-200"
        {...props}
      />
      {label && (
        <span className="ml-3 text-gray-700 group-hover:text-gray-900 transition-colors">
          {label}
        </span>
      )}
    </label>
  );
};
