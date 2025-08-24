'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ThumbsUp, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { extensionData } from '@/__mock_data__/index';

interface ExtensionReviewsProps {
  extensionId: string;
}

const mockReviews = [
  {
    id: 1,
    user: 'John Doe',
    rating: 5,
    comment:
      'Excellent extension! Really helps with my productivity. The interface is clean and intuitive.',
    date: '2024-01-15',
    helpful: 12,
    verified: true,
  },
  {
    id: 2,
    user: 'Sarah Wilson',
    rating: 4,
    comment:
      'Great functionality, but could use a few more features. Overall very satisfied.',
    date: '2024-01-10',
    helpful: 8,
    verified: false,
  },
  {
    id: 3,
    user: 'Mike Johnson',
    rating: 5,
    comment:
      'This extension has completely transformed how I work. Highly recommended!',
    date: '2024-01-08',
    helpful: 15,
    verified: true,
  },
];

export function ExtensionReviews({ extensionId }: ExtensionReviewsProps) {
  const extension = extensionData.find(ext => ext.id === extensionId);
  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);

  if (!extension) {
    return null;
  }

  const handleSubmitReview = () => {
    if (userRating === 0) return;

    console.log('Submitting review:', {
      rating: userRating,
      comment: userComment,
    });
    setUserRating(0);
    setUserComment('');
    setShowReviewForm(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className='bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4'
    >
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-lg font-semibold text-white'>Reviews</h2>
        <Button
          size='sm'
          variant='outline'
          className='border-white/20 text-white hover:bg-white hover:text-black'
          onClick={() => setShowReviewForm(!showReviewForm)}
        >
          <MessageCircle className='h-4 w-4 mr-2' />
          Write Review
        </Button>
      </div>

      {/* Review Form */}
      {showReviewForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className='mb-4 p-3 bg-white/5 rounded-lg border border-white/10'
        >
          <h3 className='text-md font-medium text-white mb-3'>
            Write a Review
          </h3>

          {/* Rating Stars */}
          <div className='flex items-center space-x-2 mb-3'>
            <span className='text-gray-300 text-md'>Rating:</span>
            <div className='flex items-center space-x-1'>
              {[1, 2, 3, 4, 5].map(star => (
                <button
                  key={star}
                  onClick={() => setUserRating(star)}
                  className='focus:outline-none'
                >
                  <Star
                    className={`h-5 w-5 ${
                      star <= userRating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-600 hover:text-yellow-400'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Comment */}
          <textarea
            value={userComment}
            onChange={e => setUserComment(e.target.value)}
            placeholder='Share your experience with this extension...'
            className='w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white resize-none text-md'
            rows={3}
          />

          <div className='flex items-center justify-end space-x-3 mt-3'>
            <Button
              size='sm'
              variant='ghost'
              className='text-gray-400 hover:text-white'
              onClick={() => setShowReviewForm(false)}
            >
              Cancel
            </Button>
            <Button
              size='sm'
              className='bg-white text-black hover:bg-gray-100'
              onClick={handleSubmitReview}
              disabled={userRating === 0}
            >
              <Send className='h-4 w-4 mr-2' />
              Submit Review
            </Button>
          </div>
        </motion.div>
      )}

      {/* Reviews List */}
      <div className='space-y-4'>
        {mockReviews.map(review => (
          <div
            key={review.id}
            className='border-b border-white/10 pb-4 last:border-b-0'
          >
            <div className='flex items-start justify-between mb-2'>
              <div className='flex items-center space-x-3'>
                <div className='w-7 h-7 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white text-xs font-medium'>
                  {review.user.charAt(0)}
                </div>
                <div>
                  <div className='flex items-center space-x-2'>
                    <span className='text-white font-medium text-md'>
                      {review.user}
                    </span>
                    {review.verified && (
                      <span className='text-xs bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded-full'>
                        Verified
                      </span>
                    )}
                  </div>
                  <div className='flex items-center space-x-2 mt-1'>
                    <div className='flex items-center space-x-1'>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-2.5 w-2.5 ${
                            i < review.rating
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className='text-xs text-gray-500'>
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className='text-gray-300 text-md leading-relaxed mb-2'>
              {review.comment}
            </p>

            <div className='flex items-center space-x-4'>
              <button className='flex items-center space-x-1 text-gray-400 hover:text-white transition-colors'>
                <ThumbsUp className='h-3 w-3' />
                <span className='text-xs'>Helpful ({review.helpful})</span>
              </button>
              <button className='text-gray-400 hover:text-white transition-colors text-xs'>
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
