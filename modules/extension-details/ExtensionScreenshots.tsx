'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { extensionData } from '@/__mock_data__/index';

interface ExtensionScreenshotsProps {
  extensionId: string;
}

export function ExtensionScreenshots({
  extensionId,
}: ExtensionScreenshotsProps) {
  const extension = extensionData.find(ext => ext.id === extensionId);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (
    !extension ||
    !extension.screenshots ||
    extension.screenshots.length === 0
  ) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className='bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8'
      >
        <h2 className='text-xl font-semibold text-white mb-4'>Screenshots</h2>
        <div className='aspect-video bg-white/5 rounded-lg flex items-center justify-center'>
          <p className='text-gray-400'>No screenshots available</p>
        </div>
      </motion.div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % extension.screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      prev =>
        (prev - 1 + extension.screenshots.length) % extension.screenshots.length
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className='bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4'
    >
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-xl font-semibold text-white'>Screenshots</h2>
        <div className='flex items-center space-x-2'>
          <span className='text-sm text-gray-400'>
            {currentIndex + 1} of {extension.screenshots.length}
          </span>
        </div>
      </div>

      {/* Main Screenshot */}
      <div className='relative mb-3'>
        <div className='aspect-video bg-white/5 rounded-lg overflow-hidden'>
          <div className='w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center'>
            <div className='text-center'>
              <div className='w-12 h-12 bg-white/10 rounded-lg mx-auto mb-3 flex items-center justify-center'>
                <Maximize2 className='h-6 w-6 text-white' />
              </div>
              <p className='text-white font-medium'>
                Screenshot {currentIndex + 1}
              </p>
              <p className='text-gray-400 text-sm mt-1'>
                Demo of {extension.name}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        {extension.screenshots.length > 1 && (
          <>
            <Button
              size='sm'
              variant='outline'
              className='absolute left-4 top-1/2 transform -translate-y-1/2 border-white/20 text-white hover:bg-white hover:text-black'
              onClick={prevSlide}
            >
              <ChevronLeft className='h-4 w-4' />
            </Button>
            <Button
              size='sm'
              variant='outline'
              className='absolute right-4 top-1/2 transform -translate-y-1/2 border-white/20 text-white hover:bg-white hover:text-black'
              onClick={nextSlide}
            >
              <ChevronRight className='h-4 w-4' />
            </Button>
          </>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {extension.screenshots.length > 1 && (
        <div className='flex space-x-2 overflow-x-auto pb-2'>
          {extension.screenshots.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-20 h-12 rounded-lg border-2 transition-all ${
                index === currentIndex
                  ? 'border-white bg-white/10'
                  : 'border-white/20 bg-white/5 hover:border-white/40'
              }`}
            >
              <div className='w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded flex items-center justify-center'>
                <span className='text-xs text-white'>{index + 1}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </motion.div>
  );
}
