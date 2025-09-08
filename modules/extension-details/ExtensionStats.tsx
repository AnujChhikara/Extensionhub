'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  Download,
  Eye,
  Heart,
  Bookmark,
  Calendar,
  Shield,
} from 'lucide-react';
import { getExtensionById } from '@/lib/actions/extensions';
import { ExtensionDocument } from '@/lib/schemas/extensions';

interface ExtensionStatsProps {
  extensionId: string;
}

export function ExtensionStats({ extensionId }: ExtensionStatsProps) {
  const [extension, setExtension] = useState<ExtensionDocument | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExtension = async () => {
      try {
        setLoading(true);
        const result = await getExtensionById(extensionId);

        if (result.success && result.data) {
          setExtension(result.data);
        }
      } catch (err) {
        console.error('Failed to load extension stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchExtension();
  }, [extensionId]);

  if (loading) {
    return (
      <div className='animate-pulse bg-card rounded-xl border border-border p-6'>
        <div className='h-6 bg-gray-200 rounded mb-4'></div>
        <div className='space-y-3'>
          {[...Array(4)].map((_, i) => (
            <div key={i} className='h-4 bg-gray-200 rounded'></div>
          ))}
        </div>
      </div>
    );
  }

  if (!extension) {
    return null;
  }

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const stats = [
    {
      icon: Star,
      label: 'Rating',
      value: 'N/A',
      color: 'text-yellow-500',
    },
    {
      icon: Download,
      label: 'Downloads',
      value: 'N/A',
      color: 'text-blue-500',
    },
    {
      icon: Calendar,
      label: 'Last Updated',
      value: formatDate(extension.$updatedAt),
      color: 'text-green-500',
    },
    {
      icon: Calendar,
      label: 'Created',
      value: formatDate(extension.$createdAt),
      color: 'text-purple-500',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='bg-card rounded-xl border border-border p-6'
    >
      <h3 className='text-lg font-semibold mb-6'>Extension Stats</h3>

      <div className='space-y-4'>
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className='flex items-center justify-between py-2'
          >
            <div className='flex items-center gap-3'>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <span className='text-sm font-medium'>{stat.label}</span>
            </div>
            <span className='text-sm text-muted-foreground font-mono'>
              {stat.value}
            </span>
          </motion.div>
        ))}
      </div>

      {extension.appPermissions && extension.appPermissions.length > 0 && (
        <div className='mt-6 pt-6 border-t border-border'>
          <h4 className='text-sm font-semibold mb-3 flex items-center gap-2'>
            <Shield className='w-4 h-4 text-orange-500' />
            Permissions
          </h4>
          <div className='space-y-2'>
            {extension.appPermissions.map((permission, index) => (
              <div
                key={index}
                className='text-xs text-muted-foreground bg-muted/50 rounded px-2 py-1'
              >
                {permission}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className='mt-6 pt-6 border-t border-border'>
        <div className='flex items-center justify-between text-xs text-muted-foreground'>
          <span>Status</span>
          <span
            className={`px-2 py-1 rounded ${
              extension.isSuspended
                ? 'bg-red-100 text-red-800'
                : 'bg-green-100 text-green-800'
            }`}
          >
            {extension.isSuspended ? 'Suspended' : 'Active'}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
