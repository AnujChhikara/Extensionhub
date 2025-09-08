'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, Image } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { getExtensionById } from '@/lib/actions/extensions';
import { ExtensionDocument } from '@/lib/schemas/extensions';

interface ExtensionScreenshotsProps {
  extensionId: string;
}

export function ExtensionScreenshots({
  extensionId,
}: ExtensionScreenshotsProps) {
  const [extension, setExtension] = useState<ExtensionDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchExtension = async () => {
      try {
        setLoading(true);
        const result = await getExtensionById(extensionId);

        if (result.success && result.data) {
          setExtension(result.data);
        }
      } catch (err) {
        console.error('Failed to load extension screenshots:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchExtension();
  }, [extensionId]);

  if (loading) {
    return (
      <div className='animate-pulse bg-card rounded-xl border border-border p-8'>
        <div className='h-6 bg-gray-200 rounded mb-4'></div>
        <div className='h-64 bg-gray-200 rounded'></div>
      </div>
    );
  }

  if (!extension || !extension.media || extension.media.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className='bg-card rounded-xl border border-border p-8'
      >
        <h2 className='text-xl font-semibold mb-6'>Screenshots</h2>
        <div className='flex flex-col items-center justify-center py-16 text-muted-foreground'>
          <Image className='w-12 h-12 mb-4' />
          <p className='text-lg mb-2'>No screenshots available</p>
          <p className='text-sm text-center'>
            Screenshots will be displayed here once they are uploaded by the
            developer.
          </p>
        </div>
      </motion.div>
    );
  }

  const nextImage = () => {
    setCurrentIndex(prev => (prev + 1) % extension.media!.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      prev => (prev - 1 + extension.media!.length) % extension.media!.length
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className='bg-card rounded-xl border border-border p-6'
    >
      <h2 className='text-xl font-semibold mb-6'>Screenshots</h2>

      <div className='relative group'>
        <div className='aspect-video bg-muted rounded-lg overflow-hidden'>
          <img
            src={extension.media[currentIndex]}
            alt={`${extension.name} screenshot ${currentIndex + 1}`}
            className='w-full h-full object-cover'
          />
        </div>

        {extension.media.length > 1 && (
          <>
            <Button
              variant='outline'
              size='sm'
              onClick={prevImage}
              className='absolute left-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'
            >
              <ChevronLeft className='w-4 h-4' />
            </Button>
            <Button
              variant='outline'
              size='sm'
              onClick={nextImage}
              className='absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity'
            >
              <ChevronRight className='w-4 h-4' />
            </Button>
          </>
        )}

        <Button
          variant='outline'
          size='sm'
          className='absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity'
          onClick={() => {
            // Open image in new tab
            window.open(extension.media![currentIndex], '_blank');
          }}
        >
          <Maximize2 className='w-4 h-4' />
        </Button>
      </div>

      {extension.media.length > 1 && (
        <div className='flex justify-center mt-4 gap-2'>
          {extension.media.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      )}

      <div className='mt-4 text-sm text-muted-foreground text-center'>
        {currentIndex + 1} of {extension.media.length}
      </div>
    </motion.div>
  );
}
