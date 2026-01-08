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
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none active:scale-95';
  
  const variantClasses = {
    primary: 'bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30',
    secondary: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-green-400 shadow-sm',
    outline: 'border-2 border-green-500 text-green-500 hover:bg-green-50',
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
