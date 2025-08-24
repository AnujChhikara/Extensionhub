'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className={cn(
        'group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-5 hover:bg-white/10 transition-all duration-300',
        className
      )}
    >
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-black">
          {icon}
        </div>
        
        <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-gray-200 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-300 leading-relaxed text-sm">
          {description}
        </p>
      </div>
      
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
