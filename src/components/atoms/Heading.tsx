import React from 'react';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  color?: 'default' | 'accent' | 'white';
  className?: string;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  as: Component = 'h2',
  size = 'lg',
  color = 'default',
  className = '',
  children,
}) => {
  const sizeClasses = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl md:text-5xl lg:text-6xl',
  };

  const colorClasses = {
    default: 'text-gray-800',
    accent: 'text-green-500',
    white: 'text-white',
  };

  return (
    <Component
      className={`font-bold ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
    >
      {children}
    </Component>
  );
};
