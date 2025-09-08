'use client';

import { motion } from 'framer-motion';
import { ExtensionCard } from './ExtensionCard';
import { listAllExtensions } from '@/lib/actions/extensions';
import { useEffect, useState } from 'react';
import { ExtensionDocument } from '@/lib/schemas/extensions';

export function ExtensionGrid() {
  const [extensions, setExtensions] = useState<ExtensionDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExtensions = async () => {
      try {
        setLoading(true);
        const result = await listAllExtensions();

        if (result.success && result.data) {
          setExtensions(result.data.documents || []);
        } else {
          setError('Failed to load extensions');
        }
      } catch (err) {
        setError('An error occurred while loading extensions');
      } finally {
        setLoading(false);
      }
    };

    fetchExtensions();
  }, []);

  if (loading) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8'>
        {[...Array(6)].map((_, index) => (
          <div key={index} className='animate-pulse'>
            <div className='bg-gray-200 rounded-lg h-64 w-full'></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className='text-center py-12'>
        <p className='text-gray-600'>{error}</p>
      </div>
    );
  }

  if (extensions.length === 0) {
    return (
      <div className='text-center py-12'>
        <p className='text-gray-600'>No extensions found.</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8'
    >
      {extensions.map((extension, index) => (
        <motion.div
          key={extension.$id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <ExtensionCard extension={extension} />
        </motion.div>
      ))}
    </motion.div>
  );
}
