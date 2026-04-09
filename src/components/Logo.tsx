"use client";

import React from 'react';
import { Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const Logo = ({ className, iconOnly = false, size = 'md' }: LogoProps) => {
  const iconSize = {
    sm: 18,
    md: 24,
    lg: 32
  };

  const containerSize = {
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-2.5'
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className={cn(
        "bg-slate-900 rounded-xl flex items-center justify-center shadow-lg shadow-slate-200",
        containerSize[size]
      )}>
        <Shield 
          size={iconSize[size]} 
          className="text-white fill-white/10" 
          strokeWidth={2.5}
        />
      </div>
      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span className={cn(
            "font-black text-slate-900 tracking-tight uppercase",
            size === 'sm' ? 'text-base' : size === 'lg' ? 'text-2xl' : 'text-xl'
          )}>
            Guardian AI
          </span>
          {size !== 'sm' && (
            <span className={cn(
              "text-slate-400 font-medium tracking-wide mt-0.5",
              size === 'lg' ? 'text-[10px]' : 'text-[8px]'
            )}>
              Where Safety Meets Technology
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;