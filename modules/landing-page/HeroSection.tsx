'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Chrome,
  Search,
  Star,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { HoverBorderGradient } from '@/components/ui/HoverBorder';

export function HeroSection() {
  return (
    <section className='pt-32 pb-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-24'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <div className='inline-flex items-center space-x-2 bg-white text-black px-3 py-1 rounded-full text-sm font-medium'>
              <div className='w-3 h-3 bg-orange-500 rounded-sm'></div>
              <span>Chrome Extension Marketplace</span>
            </div>

            <h1 className='text-4xl lg:text-5xl font-bold text-white leading-tight'>
              Discover Your Perfect
              <span className='block font-serif text-gray-200'>
                Chrome Extensions
              </span>
            </h1>

            <p className='text-lg text-gray-400 max-w-lg'>
              Discover great Chrome extensions that got overlooked but deserve
              your attention—uncover powerful tools hidden from the spotlight.
            </p>

            <div className='flex flex-col sm:flex-row gap-3'>
              <Button
                size='md'
                variant='primary'
                onClick={() => (window.location.href = '/extensions')}
              >
                Start Exploring <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
              <Button
                variant='outline'
                size='md'
                onClick={() => (window.location.href = '/extensions')}
              >
                View Examples
              </Button>
            </div>

            <div className='space-y-2'>
              <div className='flex items-center space-x-3 text-gray-300'>
                <Check className='h-4 w-4 text-white' />
                <span className='text-sm'>Real-time Search & Discovery</span>
              </div>
              <div className='flex items-center space-x-3 text-gray-300'>
                <Check className='h-4 w-4 text-white' />
                <span className='text-sm'>Community Reviews & Ratings</span>
              </div>
              <div className='flex items-center space-x-3 text-gray-300'>
                <Check className='h-4 w-4 text-white' />
                <span className='text-sm'>
                  Analytics & Performance Insights
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='relative'
          >
            <div className='bg-white/5 backdrop-blur-2xl rounded-xl  border border-black p-5'>
              <div className='flex items-center justify-between space-x-2 mb-4'>
                <HoverBorderGradient className='text-white  font-semibold  rounded-3xl px-2 py-1 flex items-center space-x-2'>
                  <Sparkles className='h-4 w-4 text-yellow-200' />
                  <p>Spotlight of the Day</p>
                </HoverBorderGradient>
                <div className='flex items-center space-x-2'>
                  <div className='w-3 h-3 bg-red-500 rounded-full'></div>
                  <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
                  <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                </div>
              </div>

              <div className='space-y-4 '>
                <div className='bg-white/5 backdrop-blur-md rounded-lg p-3 border border-black'>
                  <div className='flex items-start space-x-3'>
                    <div className='w-10 h-10 bg-white rounded-lg flex items-center justify-center'>
                      <Chrome className='h-5 w-5 text-black' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-white font-semibold text-sm'>
                        Productivity Pro
                      </h3>
                      <p className='text-gray-400 text-xs'>
                        Enhance your workflow with smart shortcuts
                      </p>
                      <div className='flex items-center space-x-2 mt-1'>
                        <div className='flex items-center space-x-1'>
                          <Star className='h-3 w-3 text-white fill-current' />
                          <span className='text-gray-300 text-xs'>4.8</span>
                        </div>
                        <span className='text-gray-500 text-xs'>•</span>
                        <span className='text-gray-400 text-xs'>
                          10K+ users
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='space-y-3'>
                  <div className='relative'>
                    <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
                    <input
                      type='text'
                      placeholder='Search extensions...'
                      className='w-full bg-white/5 backdrop-blur-md border border-black rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white text-sm'
                    />
                  </div>

                  <div className='flex space-x-2 mt-4'>
                    <button className='px-2 py-1 bg-white text-black text-xs rounded-md hover:bg-gray-200 transition-colors'>
                      Trending
                    </button>
                    <button className='px-2 py-1 bg-white/5 backdrop-blur-md text-gray-300 text-xs rounded-md hover:bg-gray-600 transition-colors'>
                      New
                    </button>
                    <button className='px-2 py-1 bg-white/5 backdrop-blur-md text-gray-300 text-xs rounded-md hover:bg-gray-600 transition-colors'>
                      Popular
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
