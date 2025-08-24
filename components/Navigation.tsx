'use client';

import { Button } from '@/components/ui/Button';
import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { Github, LogOut, User } from 'lucide-react';
import Link from 'next/link';

export function Navigation() {
  const { isSignedIn } = useUser();

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

            <Link
              href='/terms'
              className='text-gray-300 hover:text-white transition-colors text-sm'
            >
              Terms
            </Link>
            <Link
              href='/privacy'
              className='text-gray-300 hover:text-white transition-colors text-sm'
            >
              Privacy
            </Link>
            <Link
              href='/about'
              className='text-gray-300 hover:text-white transition-colors text-sm'
            >
              About
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className='flex items-center space-x-4'
          >
            <div className='hidden md:flex items-center space-x-1 text-gray-300'>
              <a
                href='https://github.com/AnujChhikara/Extensionhub'
                target='_blank'
              >
                <Button size='sm' variant='outline'>
                  <Github className='h-4 w-4' />
                  <span className='text-sm'>2.1k</span>
                </Button>
              </a>
            </div>

            {isSignedIn ? (
              <div className='flex items-center space-x-3'>
                <Link href='/dashboard'>
                  <Button size='sm' variant='outline'>
                    <User className='mr-1 h-3 w-3' />
                    Dashboard
                  </Button>
                </Link>
                <SignOutButton>
                  <Button size='sm' variant='primary'>
                    <LogOut className='mr-1 h-3 w-3' />
                    Sign Out
                  </Button>
                </SignOutButton>
              </div>
            ) : (
              <SignInButton mode='modal'>
                <Button size='sm' variant='primary'>
                  <User className='mr-1 h-3 w-3' />
                  Sign In
                </Button>
              </SignInButton>
            )}
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
