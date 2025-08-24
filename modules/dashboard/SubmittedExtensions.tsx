'use client';

import { motion } from 'framer-motion';
import { Star, Eye, Heart, Edit, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const mockSubmittedExtensions = [
  {
    id: 'ext001',
    name: 'TabMaster',
    status: 'approved',
    views: 18000,
    likes: 11000,
    rating: 4.6,
    reviewCount: 152,
    lastUpdated: '2024-01-15',
  },
  {
    id: 'ext002',
    name: 'PrivacyGuard',
    status: 'pending',
    views: 3000,
    likes: 2800,
    rating: 4.8,
    reviewCount: 70,
    lastUpdated: '2024-01-10',
  },
  {
    id: 'ext003',
    name: 'MegaClipboard',
    status: 'rejected',
    views: 42000,
    likes: 27000,
    rating: 4.2,
    reviewCount: 230,
    lastUpdated: '2024-01-05',
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'approved':
      return 'text-green-400 bg-green-500/20';
    case 'pending':
      return 'text-yellow-400 bg-yellow-500/20';
    case 'rejected':
      return 'text-red-400 bg-red-500/20';
    default:
      return 'text-gray-400 bg-gray-500/20';
  }
};

const formatNumber = (num: number): string => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

export function SubmittedExtensions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className='bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6'
    >
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-semibold text-white'>My Extensions</h2>
        <Button size='sm' variant='primary'>
          <ExternalLink className='h-4 w-4 mr-2' />
          Submit New
        </Button>
      </div>

      <div className='space-y-4'>
        {mockSubmittedExtensions.map(extension => (
          <div
            key={extension.id}
            className='flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10'
          >
            <div className='flex items-center space-x-4'>
              <div className='w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-white font-semibold'>
                {extension.name.charAt(0)}
              </div>
              <div>
                <div className='flex items-center space-x-2'>
                  <h3 className='text-white font-medium'>{extension.name}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${getStatusColor(extension.status)}`}
                  >
                    {extension.status}
                  </span>
                </div>
                <div className='flex items-center space-x-4 text-sm text-gray-400 mt-1'>
                  <div className='flex items-center space-x-1'>
                    <Eye className='h-3 w-3' />
                    <span>{formatNumber(extension.views)}</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <Heart className='h-3 w-3' />
                    <span>{formatNumber(extension.likes)}</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <Star className='h-3 w-3 text-yellow-400 fill-current' />
                    <span>
                      {extension.rating.toFixed(1)} ({extension.reviewCount})
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex items-center space-x-2'>
              <Button size='sm' variant='outline'>
                <Edit className='h-3 w-3' />
              </Button>
              <Button size='sm' variant='outline'>
                <ExternalLink className='h-3 w-3' />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
