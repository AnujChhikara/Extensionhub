'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const mockBookmarkedExtensions = [
  {
    id: 'ext004',
    name: 'DarkMode Pro',
    rating: 4.7,
    reviewCount: 195,
    category: 'Appearance',
  },
  {
    id: 'ext005',
    name: 'Grammar Checker',
    rating: 4.3,
    reviewCount: 340,
    category: 'Writing',
  },
  {
    id: 'ext006',
    name: 'Quick Screenshot',
    rating: 4.4,
    reviewCount: 280,
    category: 'Productivity',
  },
  {
    id: 'ext007',
    name: 'FocusTimer',
    rating: 4.9,
    reviewCount: 410,
    category: 'Productivity',
  },
];

export function BookmarkedExtensions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className='bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6'
    >
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-semibold text-white'>
          Bookmarked Extensions
        </h2>
        <Button
          size='sm'
          variant='outline'
          className='border-white/20 text-white hover:bg-white hover:text-black'
        >
          View All
        </Button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {mockBookmarkedExtensions.map(extension => (
          <div
            key={extension.id}
            className='flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors'
          >
            <div className='w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-white font-semibold text-sm'>
              {extension.name.charAt(0)}
            </div>
            <div className='flex-1 min-w-0'>
              <h3 className='text-white font-medium text-sm truncate'>
                {extension.name}
              </h3>
              <div className='flex items-center space-x-2 text-xs text-gray-400 mt-1'>
                <div className='flex items-center space-x-1'>
                  <Star className='h-3 w-3 text-yellow-400 fill-current' />
                  <span>{extension.rating.toFixed(1)}</span>
                </div>
                <span>•</span>
                <span>{extension.category}</span>
              </div>
            </div>
            <Button
              size='sm'
              variant='ghost'
              className='text-gray-400 hover:text-white p-1'
            >
              <ExternalLink className='h-3 w-3' />
            </Button>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
