'use client';

import { Plus } from 'lucide-react';
import { AddExtensionModal } from './AddExtensionModal';

interface AddExtensionButtonProps {
  variant?: 'default' | 'floating';
  onSuccess?: () => void;
}

export function AddExtensionButton({
  variant = 'default',
  onSuccess,
}: AddExtensionButtonProps) {
  const CustomTrigger = (
    <button className='group relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300'>
      <span className='relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0'>
        <Plus className='w-4 h-4 mr-2 inline' />
        Submit Extension
      </span>
    </button>
  );

  const FloatingTrigger = (
    <button className='fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110'>
      <Plus className='w-6 h-6' />
    </button>
  );

  return (
    <AddExtensionModal
      trigger={variant === 'floating' ? FloatingTrigger : CustomTrigger}
      onSuccess={onSuccess}
    />
  );
}
