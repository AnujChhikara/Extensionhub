'use client';

import { motion } from 'framer-motion';
import { Settings, Bell, Shield, Mail, Github } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function DashboardSettings() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className='bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6'
    >
      <div className='flex items-center space-x-2 mb-6'>
        <Settings className='h-5 w-5 text-white' />
        <h2 className='text-xl font-semibold text-white'>Settings</h2>
      </div>

      {/* Notification Settings */}
      <div className='space-y-4 mb-6'>
        <h3 className='text-lg font-medium text-white mb-3'>Notifications</h3>

        <div className='space-y-3'>
          <label className='flex items-center space-x-3'>
            <input
              type='checkbox'
              defaultChecked
              className='rounded border-white/20 bg-white/5 text-white focus:ring-white'
            />
            <div className='flex items-center space-x-2'>
              <Bell className='h-4 w-4 text-gray-400' />
              <span className='text-gray-300 text-sm'>
                Extension approval notifications
              </span>
            </div>
          </label>

          <label className='flex items-center space-x-3'>
            <input
              type='checkbox'
              defaultChecked
              className='rounded border-white/20 bg-white/5 text-white focus:ring-white'
            />
            <div className='flex items-center space-x-2'>
              <Mail className='h-4 w-4 text-gray-400' />
              <span className='text-gray-300 text-sm'>
                New review notifications
              </span>
            </div>
          </label>

          <label className='flex items-center space-x-3'>
            <input
              type='checkbox'
              className='rounded border-white/20 bg-white/5 text-white focus:ring-white'
            />
            <div className='flex items-center space-x-2'>
              <Mail className='h-4 w-4 text-gray-400' />
              <span className='text-gray-300 text-sm'>
                Weekly digest emails
              </span>
            </div>
          </label>
        </div>
      </div>

      {/* Privacy Settings */}
      <div className='space-y-4 mb-6'>
        <h3 className='text-lg font-medium text-white mb-3'>Privacy</h3>

        <div className='space-y-3'>
          <label className='flex items-center space-x-3'>
            <input
              type='checkbox'
              defaultChecked
              className='rounded border-white/20 bg-white/5 text-white focus:ring-white'
            />
            <div className='flex items-center space-x-2'>
              <Shield className='h-4 w-4 text-gray-400' />
              <span className='text-gray-300 text-sm'>
                Show profile to other users
              </span>
            </div>
          </label>

          <label className='flex items-center space-x-3'>
            <input
              type='checkbox'
              className='rounded border-white/20 bg-white/5 text-white focus:ring-white'
            />
            <div className='flex items-center space-x-2'>
              <Shield className='h-4 w-4 text-gray-400' />
              <span className='text-gray-300 text-sm'>
                Allow analytics tracking
              </span>
            </div>
          </label>
        </div>
      </div>

      {/* Connected Accounts */}
      <div className='space-y-4'>
        <h3 className='text-lg font-medium text-white mb-3'>
          Connected Accounts
        </h3>

        <div className='space-y-3'>
          <div className='flex items-center justify-between p-3 bg-white/5 rounded-lg'>
            <div className='flex items-center space-x-3'>
              <div className='w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>G</span>
              </div>
              <span className='text-gray-300 text-sm'>Google</span>
            </div>
            <span className='text-xs text-green-400'>Connected</span>
          </div>

          <div className='flex items-center justify-between p-3 bg-white/5 rounded-lg'>
            <div className='flex items-center space-x-3'>
              <Github className='h-4 w-4 text-gray-400' />
              <span className='text-gray-300 text-sm'>GitHub</span>
            </div>
            <Button
              size='sm'
              variant='outline'
              className='border-white/20 text-white hover:bg-white hover:text-black'
            >
              Connect
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
