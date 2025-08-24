'use client';

import { motion } from 'framer-motion';
import { Star, Download, Eye, Heart, Bookmark, Calendar } from 'lucide-react';
import { extensionData } from '@/__mock_data__/index';

interface ExtensionStatsProps {
  extensionId: string;
}

export function ExtensionStats({ extensionId }: ExtensionStatsProps) {
  const extension = extensionData.find(ext => ext.id === extensionId);

  if (!extension) {
    return null;
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className='bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6'
    >
      <h2 className='text-xl font-semibold text-white mb-6'>Statistics</h2>

      {/* Rating Breakdown */}
      <div className='mb-6'>
        <h3 className='text-lg font-medium text-white mb-4'>
          Rating Breakdown
        </h3>
        <div className='space-y-3'>
          {[5, 4, 3, 2, 1].map(rating => {
            const count =
              extension.ratingDistribution[
                rating.toString() as keyof typeof extension.ratingDistribution
              ] || 0;
            const percentage =
              extension.totalReviews > 0
                ? (count / extension.totalReviews) * 100
                : 0;

            return (
              <div key={rating} className='flex items-center space-x-3'>
                <div className='flex items-center space-x-1 w-8'>
                  <span className='text-sm text-gray-400'>{rating}</span>
                  <Star className='h-3 w-3 text-yellow-400 fill-current' />
                </div>
                <div className='flex-1 bg-gray-800 rounded-full h-2'>
                  <div
                    className='bg-yellow-400 h-2 rounded-full'
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <span className='text-sm text-gray-400 w-12 text-right'>
                  {count}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Key Stats */}
      <div className='space-y-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Eye className='h-4 w-4 text-gray-400' />
            <span className='text-gray-300'>Views</span>
          </div>
          <span className='text-white font-medium'>
            {formatNumber(extension.views)}
          </span>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Heart className='h-4 w-4 text-gray-400' />
            <span className='text-gray-300'>Likes</span>
          </div>
          <span className='text-white font-medium'>
            {formatNumber(extension.likes)}
          </span>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Bookmark className='h-4 w-4 text-gray-400' />
            <span className='text-gray-300'>Bookmarks</span>
          </div>
          <span className='text-white font-medium'>
            {formatNumber(extension.bookmarks)}
          </span>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Download className='h-4 w-4 text-gray-400' />
            <span className='text-gray-300'>Downloads</span>
          </div>
          <span className='text-white font-medium'>
            {formatNumber(extension.views)}
          </span>
        </div>
      </div>

      {/* Dates */}
      <div className='mt-6 pt-6 border-t border-white/10 space-y-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Calendar className='h-4 w-4 text-gray-400' />
            <span className='text-gray-300'>Last Updated</span>
          </div>
          <span className='text-white text-sm'>
            {formatDate(extension.lastUpdated)}
          </span>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-gray-300'>Submitted</span>
          <span className='text-white text-sm'>
            {formatDate(extension.submissionDate)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
