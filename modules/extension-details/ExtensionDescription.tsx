'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getExtensionById } from '@/lib/actions/extensions';
import { ExtensionDocument } from '@/lib/schemas/extensions';

interface ExtensionDescriptionProps {
  extensionId: string;
}

export function ExtensionDescription({
  extensionId,
}: ExtensionDescriptionProps) {
  const [extension, setExtension] = useState<ExtensionDocument | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExtension = async () => {
      try {
        setLoading(true);
        const result = await getExtensionById(extensionId);

        if (result.success && result.data) {
          setExtension(result.data);
        }
      } catch (err) {
        console.error('Failed to load extension description:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchExtension();
  }, [extensionId]);

  if (loading) {
    return (
      <div className='animate-pulse bg-card rounded-xl border border-border p-6'>
        <div className='h-6 bg-gray-200 rounded mb-4'></div>
        <div className='space-y-3'>
          {[...Array(3)].map((_, i) => (
            <div key={i} className='h-4 bg-gray-200 rounded'></div>
          ))}
        </div>
      </div>
    );
  }

  if (!extension) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className='bg-card rounded-xl border border-border p-6'
    >
      <h2 className='text-xl font-semibold mb-6'>About this extension</h2>

      <div className='prose prose-sm max-w-none text-muted-foreground'>
        <p className='leading-relaxed'>{extension.description}</p>
      </div>

      {extension.tags && extension.tags.length > 0 && (
        <div className='mt-6 pt-6 border-t border-border'>
          <h3 className='text-sm font-semibold mb-3'>Tags</h3>
          <div className='flex flex-wrap gap-2'>
            {extension.tags.map(tag => (
              <span
                key={tag}
                className='px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-xs'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {extension.labels && extension.labels.length > 0 && (
        <div className='mt-4'>
          <h3 className='text-sm font-semibold mb-3'>Labels</h3>
          <div className='flex flex-wrap gap-2'>
            {extension.labels.map(label => (
              <span
                key={label}
                className='px-2 py-1 bg-primary/10 text-primary rounded text-xs border border-primary/20'
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
