"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className, iconOnly = false, size = 'md' }: LogoProps) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-10 w-10'
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className={cn(
        "bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden",
        sizeClasses[size]
      )}>
        <img 
          src="/placeholder.svg" 
          alt="Guardian AI Logo" 
          className="w-full h-full object-cover p-1.5 invert"
        />
      </div>
      {!iconOnly && (
        <span className={cn(
          "font-bold text-slate-900 tracking-tight",
          size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'
        )}>
          Guardian AI
        </span>
      )}
    </div>
  );
};

export default Logo;