'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, Share2, Flag, ExternalLink, Github, Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { extensionData } from '@/__mock_data__/index';

interface ExtensionActionsProps {
  extensionId: string;
}

export function ExtensionActions({ extensionId }: ExtensionActionsProps) {
  const extension = extensionData.find(ext => ext.id === extensionId);
  const [isBookmarked, setIsBookmarked] = useState(false);

  if (!extension) {
    return null;
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: extension.name,
          text: extension.shortDescription,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
          } else {
        navigator.clipboard.writeText(window.location.href);
      }
  };

  const handleReport = () => {
    console.log('Report extension:', extension.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="space-y-6"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Actions</h3>
        
        <div className="space-y-3">
          <Button
            size="lg"
            variant="outline"
            className={`w-full ${
              isBookmarked ? 'bg-white text-black' : ''
            }`}
            onClick={() => setIsBookmarked(!isBookmarked)}
          >
            <Bookmark className={`h-4 w-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
            {isBookmarked ? 'Bookmarked' : 'Bookmark'}
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full"
            onClick={handleReport}
          >
            <Flag className="h-4 w-4 mr-2" />
            Report
          </Button>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Links</h3>
        
        <div className="space-y-3">
          <Button
            size="lg"
            variant="outline"
            className="w-full"
            onClick={() => window.open(extension.chromeStoreUrl, '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Chrome Web Store
          </Button>

          {extension.website && (
            <Button
              size="lg"
              variant="outline"
              className="w-full"
              onClick={() => window.open(extension.website, '_blank')}
            >
              <Globe className="h-4 w-4 mr-2" />
              Official Website
            </Button>
          )}

          {extension.github && (
            <Button
              size="lg"
              variant="outline"
              className="w-full"
              onClick={() => window.open(extension.github, '_blank')}
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub Repository
            </Button>
          )}
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Developer</h3>
        
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white font-semibold">
            {extension.developer.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-white font-medium">{extension.developer.name}</span>
              {extension.developer.verified && (
                <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
                  Verified
                </span>
              )}
            </div>
            <p className="text-gray-400 text-sm">Extension Developer</p>
          </div>
        </div>

        <Button
          size="sm"
          variant="outline"
          className="w-full"
        >
          View Profile
        </Button>
      </div>
    </motion.div>
  );
}
