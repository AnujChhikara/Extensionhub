'use client';

import { motion } from 'framer-motion';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ExtensionFilters() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className='bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4 mb-6'
    >
      <div className='flex items-center space-x-4 mb-4'>
        <div className='relative flex-1'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
          <input
            type='text'
            placeholder='Search extensions...'
            className='w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white text-sm'
          />
        </div>

        <div className='flex items-center space-x-2'>
          <select className='bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white'>
            <option value='discovery-desc'>Discovery Score</option>
            <option value='rating-desc'>Highest Rated</option>
            <option value='popular-desc'>Most Popular</option>
            <option value='newest-desc'>Newest</option>
            <option value='name-asc'>Name A-Z</option>
          </select>

          <Button
            size='sm'
            variant='outline'
            className='border-white/20 text-white hover:bg-white hover:text-black'
          >
            <Filter className='h-4 w-4 mr-2' />
            Filters
            <ChevronDown className='h-4 w-4 ml-2' />
          </Button>
        </div>
      </div>

      <div className='flex items-center justify-between mb-4'>
        <span className='text-gray-300 text-sm'>10 extensions found</span>
      </div>
    </motion.div>
  );
}
