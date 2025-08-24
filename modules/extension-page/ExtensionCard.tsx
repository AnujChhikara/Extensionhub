'use client';

import { motion } from 'framer-motion';
import { Star, Download, ExternalLink, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useRouter } from 'next/navigation';

interface ExtensionCardProps {
  extension: any;
  onViewDetails: (id: string) => void;
}

export function ExtensionCard({ extension, onViewDetails }: ExtensionCardProps) {
  const router = useRouter();

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const handleViewDetails = () => {
    router.push(`/extensions/${extension.id}`);
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:bg-white/10 transition-all duration-300"
    >
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        {extension.trending && (
          <div className="flex items-center space-x-1 bg-orange-500/20 text-orange-300 px-3 py-1.5 rounded-full text-xs font-medium">
            <TrendingUp className="h-3 w-3" />
            <span>Trending</span>
          </div>
        )}
        {extension.underrated && (
          <div className="flex items-center space-x-1 bg-purple-500/20 text-purple-300 px-3 py-1.5 rounded-full text-xs font-medium">
            <Sparkles className="h-3 w-3" />
            <span>Hidden Gem</span>
          </div>
        )}
      </div>

      <div className="flex items-start space-x-4 mb-5">
        <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-semibold text-base flex-shrink-0">
          {extension.name.charAt(0).toUpperCase()}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-base truncate group-hover:text-gray-200 transition-colors mb-2">
            {extension.name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
            {extension.shortDescription}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm font-medium">{extension.averageRating.toFixed(1)}</span>
          </div>
          <span className="text-gray-500 text-sm">({formatNumber(extension.totalReviews)})</span>
        </div>
        <div className="flex items-center space-x-1.5 text-gray-400 text-sm">
          <Download className="h-4 w-4" />
          <span>{formatNumber(extension.views)}</span>
        </div>
      </div>

      <div className="mb-5">
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-sm text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-full font-medium">
            {extension.category[0]}
          </span>
          {extension.featured && (
            <span className="text-sm text-yellow-400 bg-yellow-500/20 px-3 py-1.5 rounded-full font-medium">
              Featured
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {extension.tags.slice(0, 3).map((tag: string, index: number) => (
            <span
              key={index}
              className="text-sm text-gray-300 bg-white/5 px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
          {extension.tags.length > 3 && (
            <span className="text-sm text-gray-500 px-3 py-1.5">
              +{extension.tags.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between mb-5 text-sm text-gray-400">
        <span>by {extension.developer.name}</span>
        <span>v{extension.version}</span>
      </div>

      <div className="flex items-center space-x-3">
        <Button
          size="md"
          variant="primary"
          className="flex-1"
          onClick={handleViewDetails}
        >
          View Details
        </Button>
        <Button
          size="md"
          variant="outline"
          className="px-4"
          onClick={() => window.open(extension.chromeStoreUrl, '_blank')}
        >
          <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}
