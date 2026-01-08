import React from 'react';

interface TextProps {
  as?: 'p' | 'span' | 'div';
  variant?: 'body' | 'small' | 'large';
  color?: 'default' | 'muted' | 'accent' | 'white';
  className?: string;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  as: Component = 'p',
  variant = 'body',
  color = 'default',
  className = '',
  children,
}) => {
  const variantClasses = {
    body: 'text-base',
    small: 'text-sm',
    large: 'text-lg',
  };

  const colorClasses = {
    default: 'text-gray-700',
    muted: 'text-gray-500',
    accent: 'text-green-500',
    white: 'text-white',
  };

  return (
    <Component
      className={`${variantClasses[variant]} ${colorClasses[color]} ${className}`}
    >
      {children}
    </Component>
  );
};
