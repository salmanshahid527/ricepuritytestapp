import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-display font-semibold rounded-lg transition-all duration-300 focus:ring-2 focus:ring-amber focus:ring-offset-2 focus:outline-none active:scale-95';

  const variantClasses = {
    primary: 'bg-amber hover:brightness-105 text-ink shadow-sm',
    secondary: 'bg-surface border border-line text-ink hover:bg-bone hover:border-plum',
    outline: 'border-2 border-plum text-plum hover:bg-plum-tint',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};