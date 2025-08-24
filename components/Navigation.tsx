'use client';

import { Button } from '@/components/ui/Button';
import { SignInModal } from '@/components/ui/SignInModal';
import { motion } from 'framer-motion';
import { Github, Moon, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Navigation() {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 backdrop-blur-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-14'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className='flex items-center space-x-2'
          >
            <Link href='/' className='flex items-center space-x-2'>
              <div className='flex items-center space-x-1'>
                <div className='w-5 h-5 bg-white rounded-sm'></div>
                <div className='w-5 h-5 bg-gray-400 rounded-sm'></div>
              </div>
              <span className='text-lg font-bold text-white'>
                ExtensionSpot
              </span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className='hidden md:flex items-center space-x-6'
          >
            <Link
              href='/extensions'
              className='text-gray-300 hover:text-white transition-colors text-sm'
            >
              Extensions
            </Link>
            <a
              href='#features'
              className='text-gray-300 hover:text-white transition-colors text-sm'
            >
              Features
            </a>
            <a
              href='#pricing'
              className='text-gray-300 hover:text-white transition-colors text-sm'
            >
              Pricing
            </a>
            <a
              href='#roadmap'
              className='text-gray-300 hover:text-white transition-colors text-sm'
            >
              Roadmap
            </a>
            <a
              href='#faq'
              className='text-gray-300 hover:text-white transition-colors text-sm'
            >
              FAQ
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className='flex items-center space-x-4'
          >
            <div className='hidden md:flex items-center space-x-1 text-gray-300'>
              <Github className='h-4 w-4' />
              <span className='text-sm'>2.1k</span>
            </div>
            <button className='p-2 text-gray-300 hover:text-white transition-colors'>
              <Moon className='h-4 w-4' />
            </button>
            <Button
              size='sm'
              variant='primary'
              onClick={() => setIsSignInModalOpen(true)}
            >
              <User className='mr-1 h-3 w-3' />
              Sign In
            </Button>
          </motion.div>
        </div>
      </div>

      <SignInModal
        isOpen={isSignInModalOpen}
        onClose={() => setIsSignInModalOpen(false)}
      />
    </nav>
  );
}
