'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Download, ExternalLink, Github, Globe } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { getExtensionById } from '@/lib/actions/extensions';
import { ExtensionDocument } from '@/lib/schemas/extensions';

interface ExtensionHeaderProps {
  extensionId: string;
}

export function ExtensionHeader({ extensionId }: ExtensionHeaderProps) {
  const [extension, setExtension] = useState<ExtensionDocument | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchExtension = async () => {
      try {
        setLoading(true);
        const result = await getExtensionById(extensionId);

        if (result.success && result.data) {
          setExtension(result.data);
        } else {
          setError('Extension not found');
        }
      } catch (err) {
        setError('Failed to load extension');
      } finally {
        setLoading(false);
      }
    };

    fetchExtension();
  }, [extensionId]);

  if (loading) {
    return (
      <div className='animate-pulse'>
        <div className='h-8 bg-gray-200 rounded w-3/4 mb-4'></div>
        <div className='h-4 bg-gray-200 rounded w-1/2 mb-2'></div>
        <div className='h-4 bg-gray-200 rounded w-full'></div>
      </div>
    );
  }

  if (error || !extension) {
    return (
      <div className='text-center py-12'>
        <p className='text-red-600'>{error}</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='bg-card rounded-xl border border-border p-8'
    >
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center flex-shrink-0'>
          {extension.media?.[0] ? (
            <img
              src={extension.media[0]}
              alt={extension.name}
              className='w-16 h-16 rounded-lg'
            />
          ) : (
            <ExternalLink className='w-10 h-10 text-primary' />
          )}
        </div>

        <div className='flex-1'>
          <h1 className='text-3xl font-bold mb-2'>{extension.name}</h1>
          <p className='text-muted-foreground mb-2'>
            by {extension.developer || 'Unknown Developer'}
          </p>

          <p className='text-muted-foreground mb-4 leading-relaxed'>
            {extension.description}
          </p>

          <div className='flex flex-wrap gap-2 mb-6'>
            {extension.tags?.map(tag => (
              <Badge key={tag} variant='secondary'>
                {tag}
              </Badge>
            ))}
            {extension.labels?.map(label => (
              <Badge key={label} variant='outline'>
                {label}
              </Badge>
            ))}
          </div>

          <div className='flex flex-wrap gap-4'>
            <Button>
              <a
                href={extension.extensionLink}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2'
              >
                <ExternalLink className='w-4 h-4' />
                Install Extension
              </a>
            </Button>

            {extension.websiteLink && (
              <Button variant='outline'>
                <a
                  href={extension.websiteLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2'
                >
                  <Globe className='w-4 h-4' />
                  Website
                </a>
              </Button>
            )}

            {extension.githubLink && (
              <Button variant='outline'>
                <a
                  href={extension.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2'
                >
                  <Github className='w-4 h-4' />
                  GitHub
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
