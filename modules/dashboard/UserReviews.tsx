'use client';

import { motion } from 'framer-motion';
import { Star, ThumbsUp, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const mockUserReviews = [
  {
    id: 1,
    extensionName: 'DarkMode Pro',
    rating: 5,
    comment: 'Excellent extension! Really helps with my productivity.',
    date: '2024-01-15',
    helpful: 12,
    flagged: false,
  },
  {
    id: 2,
    extensionName: 'Grammar Checker',
    rating: 4,
    comment: 'Great functionality, but could use a few more features.',
    date: '2024-01-10',
    helpful: 8,
    flagged: false,
  },
  {
    id: 3,
    extensionName: 'Quick Screenshot',
    rating: 5,
    comment: 'This extension has completely transformed how I work.',
    date: '2024-01-08',
    helpful: 15,
    flagged: true,
  },
];

export function UserReviews() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className='bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6'
    >
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-semibold text-white'>My Reviews</h2>
        <Button size='sm' variant='outline'>
          View All
        </Button>
      </div>

      <div className='space-y-4'>
        {mockUserReviews.map(review => (
          <div
            key={review.id}
            className={`p-4 rounded-lg border ${
              review.flagged
                ? 'bg-red-500/10 border-red-500/20'
                : 'bg-white/5 border-white/10'
            }`}
          >
            <div className='flex items-start justify-between mb-2'>
              <div className='flex items-center space-x-2'>
                <h3 className='text-white font-medium text-sm'>
                  {review.extensionName}
                </h3>
                {review.flagged && (
                  <span className='text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full'>
                    Flagged
                  </span>
                )}
              </div>
              <div className='flex items-center space-x-1'>
                <Button
                  size='sm'
                  variant='ghost'
                  className='text-gray-400 hover:text-white p-1'
                >
                  <Edit className='h-3 w-3' />
                </Button>
                <Button
                  size='sm'
                  variant='ghost'
                  className='text-gray-400 hover:text-red-400 p-1'
                >
                  <Trash2 className='h-3 w-3' />
                </Button>
              </div>
            </div>

            <div className='flex items-center space-x-2 mb-2'>
              <div className='flex items-center space-x-1'>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < review.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className='text-xs text-gray-400'>
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>

            <p className='text-gray-300 text-sm mb-2 line-clamp-2'>
              {review.comment}
            </p>

            <div className='flex items-center space-x-4'>
              <div className='flex items-center space-x-1 text-gray-400 text-xs'>
                <ThumbsUp className='h-3 w-3' />
                <span>{review.helpful} helpful</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
