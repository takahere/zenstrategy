'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7C5CFF]';
  
  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-[#7C5CFF] text-white hover:bg-[#6a4de6] focus:ring-[#7C5CFF]',
    secondary: 'bg-white text-[#2D2D2D] hover:bg-gray-100 border border-gray-300 focus:ring-gray-500',
    outline: 'bg-transparent text-[#7C5CFF] hover:bg-[#F7F5FF] border border-[#7C5CFF] focus:ring-[#7C5CFF]',
  };
  
  // Combine styles
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;
  
  // Render as link if href is provided
  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }
  
  // Otherwise render as button
  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button; 