'use client';

import { motion } from 'framer-motion';
import { Edit, CheckCircle, Mail } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const mockUser = {
  name: 'John Developer',
  email: 'john@example.com',
  avatar: null,
  verified: true,
  joinedDate: '2023-06-15',
  extensionsCount: 3,
  reviewsCount: 12,
  bookmarksCount: 8
};

export function UserProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
    >
      {/* Profile Header */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
          {mockUser.name.charAt(0)}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-semibold text-white">{mockUser.name}</h2>
            {mockUser.verified && (
              <CheckCircle className="h-5 w-5 text-blue-400" />
            )}
          </div>
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <Mail className="h-4 w-4" />
            <span>{mockUser.email}</span>
          </div>
        </div>
        <Button
          size="sm"
          variant="outline"
          className="border-white/20 text-white hover:bg-white hover:text-black"
        >
          <Edit className="h-4 w-4" />
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{mockUser.extensionsCount}</div>
          <div className="text-xs text-gray-400">Extensions</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{mockUser.reviewsCount}</div>
          <div className="text-xs text-gray-400">Reviews</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-white">{mockUser.bookmarksCount}</div>
          <div className="text-xs text-gray-400">Bookmarks</div>
        </div>
      </div>

      {/* Member Since */}
      <div className="text-center text-sm text-gray-400">
        Member since {new Date(mockUser.joinedDate).toLocaleDateString()}
      </div>
    </motion.div>
  );
}
