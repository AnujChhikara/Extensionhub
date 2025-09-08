'use client';

import { motion } from 'framer-motion';
import { Star, Download, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import Link from 'next/link';
import { ExtensionDocument } from '@/lib/schemas/extensions';

interface ExtensionCardProps {
  extension: ExtensionDocument;
}

export function ExtensionCard({ extension }: ExtensionCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className='bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-all duration-200'
    >
      <div className='flex items-start gap-4 mb-4'>
        <div className='w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center'>
          {extension.media?.[0] ? (
            <img
              src={extension.media[0]}
              alt={extension.name}
              className='w-8 h-8 rounded'
            />
          ) : (
            <ExternalLink className='w-6 h-6 text-primary' />
          )}
        </div>
        <div className='flex-1 min-w-0'>
          <h3 className='font-semibold text-lg mb-1 line-clamp-1'>
            {extension.name}
          </h3>
          <p className='text-sm text-muted-foreground mb-2'>
            {extension.developer || 'Unknown Developer'}
          </p>
        </div>
      </div>

      <p className='text-sm text-muted-foreground mb-4 line-clamp-2'>
        {extension.description}
      </p>

      <div className='flex flex-wrap gap-2 mb-4'>
        {extension.tags?.slice(0, 3).map(tag => (
          <Badge key={tag} variant='secondary' className='text-xs'>
            {tag}
          </Badge>
        ))}
        {extension.tags && extension.tags.length > 3 && (
          <Badge variant='outline' className='text-xs'>
            +{extension.tags.length - 3} more
          </Badge>
        )}
      </div>

      <div className='flex items-center justify-between pt-4 border-t border-border'>
        <div className='flex items-center gap-4 text-sm text-muted-foreground'>
          <div className='flex items-center gap-1'>
            <Star className='w-4 h-4 fill-current text-yellow-400' />
            <span>N/A</span>
          </div>
          <div className='flex items-center gap-1'>
            <Download className='w-4 h-4' />
            <span>N/A</span>
          </div>
        </div>
        <Link
          href={`/extensions/${extension.$id}`}
          className='text-primary hover:text-primary/80 text-sm font-medium'
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}
