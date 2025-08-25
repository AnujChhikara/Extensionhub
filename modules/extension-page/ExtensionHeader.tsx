'use client';

import { motion } from 'framer-motion';
import { AddExtensionModal } from '../../components/AddExtensionModal';

export function ExtensionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='mb-8 flex items-start justify-between'
    >
      <div>
        <h1 className='text-4xl font-bold text-white mb-4'>
          Discover Chrome Extensions
        </h1>
        <p className='text-lg text-gray-400 max-w-2xl'>
          Find the perfect extensions to enhance your browsing experience.
          Discover hidden gems and trending tools from our curated collection.
        </p>
      </div>

      <AddExtensionModal
        onSuccess={() => {
          console.log('Extension submitted successfully!');
        }}
      />
    </motion.div>
  );
}
