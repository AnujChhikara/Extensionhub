'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center cursor-pointer justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none';

  const variants = {
    primary: 'bg-white text-black hover:bg-gray-100 border border-neutral-900',
    secondary:
      'bg-black text-white hover:bg-neutral-900 border border-neutral-900',
    outline: 'border border-neutral-900 text-white hover:bg-neutral-900',
    ghost: 'text-white hover:bg-neutral-900/10',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
