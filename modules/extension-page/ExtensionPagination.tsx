'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ExtensionPagination() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className='flex items-center justify-center space-x-2 mt-8'
    >
      <Button
        size='sm'
        variant='outline'
        className='border-white/20 text-white hover:bg-white hover:text-black'
        disabled
      >
        <ChevronLeft className='h-4 w-4' />
        Previous
      </Button>

      <div className='flex items-center space-x-1'>
        <Button
          size='sm'
          variant='primary'
          className='bg-white text-black hover:bg-gray-100'
        >
          1
        </Button>
        <Button
          size='sm'
          variant='outline'
          className='border-white/20 text-white hover:bg-white hover:text-black'
        >
          2
        </Button>
      </div>

      <Button
        size='sm'
        variant='outline'
        className='border-white/20 text-white hover:bg-white hover:text-black'
      >
        Next
        <ChevronRight className='h-4 w-4' />
      </Button>
    </motion.div>
  );
}
