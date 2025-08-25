import React from 'react';
import { cn } from '@/lib/utils';

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <div
      className={cn(
        'animate-spotlight pointer-events-none absolute z-[1] opacity-0',
        className
      )}
    >
      <div
        className='w-[800px] h-[800px] rounded-full bg-gradient-radial from-white/20 via-white/10 to-transparent blur-2xl'
        style={{
          background: `radial-gradient(circle, ${fill || 'rgba(255, 255, 255, 0.2)'} 0%, rgba(255, 255, 255, 0.1) 30%, transparent 70%)`,
        }}
      />
    </div>
  );
};
