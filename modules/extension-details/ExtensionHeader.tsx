'use client';

import { motion } from 'framer-motion';
import { Star, ArrowLeft, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { extensionData } from '@/__mock_data__/index';
import Link from 'next/link';

interface ExtensionHeaderProps {
  extensionId: string;
}

export function ExtensionHeader({ extensionId }: ExtensionHeaderProps) {
  const extension = extensionData.find(ext => ext.id === extensionId);

  if (!extension) {
    return (
      <div className="text-center py-16">
        <h1 className="text-2xl font-bold text-white mb-4">Extension not found</h1>
        <Link href="/extensions">
          <Button className="bg-white text-black hover:bg-gray-100">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Extensions
          </Button>
        </Link>
      </div>
    );
  }

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Back Button */}
      <Link href="/extensions" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Extensions
      </Link>

      {/* Main Header */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-bold text-2xl">
              {extension.name.charAt(0).toUpperCase()}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white mb-2">{extension.name}</h1>
                <p className="text-lg text-gray-400 mb-4">{extension.shortDescription}</p>
                
                {/* Developer Info */}
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-gray-400">by</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium">{extension.developer.name}</span>
                    {extension.developer.verified && (
                      <CheckCircle className="h-4 w-4 text-blue-400" />
                    )}
                  </div>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-400">v{extension.version}</span>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(extension.averageRating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-white font-medium">{extension.averageRating.toFixed(1)}</span>
                  </div>
                  <span className="text-gray-500">({formatNumber(extension.totalReviews)} reviews)</span>
                </div>

                {/* Categories and Tags */}
                <div className="flex flex-wrap gap-2">
                  {extension.category.map((cat, index) => (
                    <span
                      key={index}
                      className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                  {extension.featured && (
                    <span className="text-sm text-yellow-400 bg-yellow-500/20 px-3 py-1.5 rounded-full">
                      Featured
                    </span>
                  )}
                  {extension.trending && (
                    <span className="text-sm text-orange-400 bg-orange-500/20 px-3 py-1.5 rounded-full">
                      Trending
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col space-y-3 lg:flex-shrink-0">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 w-full lg:w-auto"
                  onClick={() => window.open(extension.chromeStoreUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Install Extension
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white hover:text-black w-full lg:w-auto"
                >
                  Add to Chrome
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
