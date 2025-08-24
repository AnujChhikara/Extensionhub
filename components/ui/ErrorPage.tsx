'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Home, RefreshCw } from 'lucide-react';
import { Button } from './Button';
import Link from 'next/link';

interface ErrorPageProps {
  code?: string;
  title?: string;
  description?: string;
  showHomeButton?: boolean;
  showRefreshButton?: boolean;
  showBackButton?: boolean;
  customActions?: React.ReactNode;
}

export function ErrorPage({
  code = '404',
  title = 'Page Not Found',
  description = "The page you are looking for doesn't exist or has been moved.",
  showHomeButton = true,
  showRefreshButton = true,
  showBackButton = true,
  customActions,
}: ErrorPageProps) {
  const handleRefresh = () => {
    window.location.reload();
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className='min-h-screen bg-black flex items-center justify-center px-4'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center max-w-md mx-auto'
      >
        {/* Error Code */}
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mb-8'
        >
          <div className='text-8xl font-bold text-transparent bg-gradient-to-r from-neutral-900 via-gray-200 to-neutral-900 bg-clip-text mb-4'>
            {code}
          </div>
          <div className='w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto'></div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-3xl font-bold text-white mb-4'
        >
          {title}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='text-gray-400 text-lg mb-8 leading-relaxed'
        >
          {description}
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='flex flex-col sm:flex-row gap-3 justify-center'
        >
          {customActions || (
            <>
              {showBackButton && (
                <Button
                  variant='outline'
                  onClick={handleGoBack}
                  className='flex items-center justify-center'
                >
                  <ArrowLeft className='h-4 w-4 mr-2' />
                  Go Back
                </Button>
              )}

              {showHomeButton && (
                <Link href='/'>
                  <Button className='flex items-center justify-center'>
                    <Home className='h-4 w-4 mr-2' />
                    Go Home
                  </Button>
                </Link>
              )}

              {showRefreshButton && (
                <Button
                  variant='outline'
                  onClick={handleRefresh}
                  className='flex items-center justify-center'
                >
                  <RefreshCw className='h-4 w-4 mr-2' />
                  Refresh
                </Button>
              )}
            </>
          )}
        </motion.div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='mt-12 text-center'
        >
          <p className='text-gray-500 text-sm mb-2'>
            Need help? Contact our support team
          </p>
          <Link
            href='/contact'
            className='text-blue-400 hover:text-blue-300 text-sm underline'
          >
            Get Support
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
