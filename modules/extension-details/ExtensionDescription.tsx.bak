'use client';

import { motion } from 'framer-motion';
import { extensionData } from '@/__mock_data__/index';

interface ExtensionDescriptionProps {
  extensionId: string;
}

export function ExtensionDescription({
  extensionId,
}: ExtensionDescriptionProps) {
  const extension = extensionData.find(ext => ext.id === extensionId);

  if (!extension) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className='bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4'
    >
      <h2 className='text-xl font-semibold text-white mb-6'>
        About this extension
      </h2>

      {/* Full Description */}
      <div className='prose prose-invert max-w-none mb-8'>
        <p className='text-gray-300 leading-relaxed text-base'>
          {extension.fullDescription}
        </p>
      </div>

      {/* Tags */}
      <div className='mb-6'>
        <h3 className='text-lg font-medium text-white mb-3'>Tags</h3>
        <div className='flex flex-wrap gap-2'>
          {extension.tags.map((tag, index) => (
            <span
              key={index}
              className='text-sm text-gray-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Permissions */}
      <div>
        <h3 className='text-lg font-medium text-white mb-3'>Permissions</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          {extension.permissions.map((permission, index) => (
            <div
              key={index}
              className='flex items-center space-x-2 text-sm text-gray-300'
            >
              <div className='w-2 h-2 bg-gray-500 rounded-full'></div>
              <span>{permission}</span>
            </div>
          ))}
        </div>
        <p className='text-xs text-gray-500 mt-2'>
          This extension requires these permissions to function properly. You
          can review and manage permissions in your browser settings.
        </p>
      </div>
    </motion.div>
  );
}
