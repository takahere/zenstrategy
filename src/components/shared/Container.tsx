'use client';

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean;
}

const Container = ({
  children,
  className = '',
  maxWidth = 'xl',
  padding = true,
}: ContainerProps) => {
  const maxWidthClasses = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-7xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  const paddingClasses = padding ? 'px-4 sm:px-6 lg:px-12' : '';
  
  return (
    <div className={`mx-auto ${maxWidthClasses[maxWidth]} ${paddingClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Container; 