'use client';

import { motion } from 'framer-motion';
import { extensionData } from '@/__mock_data__/index';
import { ExtensionCard } from './ExtensionCard';

export function ExtensionGrid() {
  const handleViewDetails = (id: string) => {
    console.log('View details for extension:', id);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"
    >
      {extensionData.slice(0, 8).map((extension, index) => (
        <motion.div
          key={extension.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <ExtensionCard
            extension={extension}
            onViewDetails={handleViewDetails}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
