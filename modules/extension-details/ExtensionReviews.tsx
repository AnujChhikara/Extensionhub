'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Star,
  ThumbsUp,
  MessageCircle,
  Send,
  Trash2,
  Pencil,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useUser } from '@clerk/nextjs';
import {
  addReviewForExtension,
  deleteReviewForExtension,
  listAllExtensionReviews,
  updateReviewForExtension,
} from '@/lib/actions/reviews';

interface ExtensionReviewsProps {
  extensionId: string;
}

export function ExtensionReviews({ extensionId }: ExtensionReviewsProps) {
  const { user, isSignedIn } = useUser();
  const [reviews, setReviews] = useState<any[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [userRating, setUserRating] = useState(0);
  const [userComment, setUserComment] = useState('');
  const [showReviewForm, setShowReviewForm] = useState(false);

  const currentUserId = user?.id ?? null;

  const myReview = useMemo(
    () => (reviews || []).find(r => r.userId === currentUserId) || null,
    [reviews, currentUserId]
  );

  const fetchReviews = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await listAllExtensionReviews(extensionId);
      if (result.success) {
        const docs = (result.data as any)?.documents ?? [];
        setReviews(docs);
      } else {
        setReviews([]);
        setError(result.message);
      }
    } catch (e) {
      setReviews([]);
      setError('Failed to load reviews');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();

    console.log('user: ', user);
  }, [extensionId]);

  useEffect(() => {
    if (myReview) {
      setUserRating(myReview.stars ?? 0);
      setUserComment(myReview.message ?? '');
    } else {
      setUserRating(0);
      setUserComment('');
    }
  }, [myReview]);

  const handleSubmitReview = async () => {
    if (!isSignedIn || !currentUserId) return;
    if (userRating === 0 && !myReview) return;

    try {
      setLoading(true);
      if (myReview) {
        await updateReviewForExtension(myReview.$id, {
          stars: (userRating || null) as any,
          message: userComment || undefined,
        } as any);
      } else {
        await addReviewForExtension({
          extensionId,
          userId: currentUserId,
          vote: undefined as any,
          stars: userRating as any,
          message: userComment || (undefined as any),
          isSuspended: false,
          isDeleted: false,
        } as any);
      }
      await fetchReviews();
      setShowReviewForm(false);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteReview = async () => {
    if (!myReview) return;
    try {
      setLoading(true);
      await deleteReviewForExtension(myReview.$id);
      await fetchReviews();
      setShowReviewForm(false);
    } finally {
      setLoading(false);
    }
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
        {isSignedIn && (
          <Button
            size='sm'
            variant='outline'
            className='border-white/20 text-white hover:bg-white hover:text-black'
            onClick={() => setShowReviewForm(!showReviewForm)}
            disabled={loading}
          >
            <MessageCircle className='h-4 w-4 mr-2' />
            {myReview ? 'Edit Review' : 'Write Review'}
          </Button>
        )}
      </div>

      {/* Review Form */}
      {isSignedIn && showReviewForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className='mb-4 p-3 bg-white/5 rounded-lg border border-white/10'
        >
          <h3 className='text-md font-medium text-white mb-3'>
            {myReview ? 'Update your Review' : 'Write a Review'}
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
            {myReview && (
              <Button
                size='sm'
                variant='secondary'
                className='text-white'
                onClick={handleDeleteReview}
                disabled={loading}
              >
                <Trash2 className='h-4 w-4 mr-2' />
                Delete
              </Button>
            )}
            <Button
              size='sm'
              variant='ghost'
              className='text-gray-400 hover:text-white'
              onClick={() => setShowReviewForm(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              size='sm'
              className='bg-white text-black hover:bg-gray-100'
              onClick={handleSubmitReview}
              disabled={loading || (!myReview && userRating === 0)}
            >
              {myReview ? (
                <Pencil className='h-4 w-4 mr-2' />
              ) : (
                <Send className='h-4 w-4 mr-2' />
              )}
              {myReview ? 'Update' : 'Submit Review'}
            </Button>
          </div>
        </motion.div>
      )}

      {/* Reviews List */}
      <div className='space-y-4'>
        {loading && <p className='text-gray-400 text-sm'>Loading reviews...</p>}
        {!loading && (reviews?.length ?? 0) === 0 && (
          <p className='text-gray-400 text-sm'>
            No reviews yet. Be the first to review!
          </p>
        )}

        {(reviews || []).map(review => (
          <div
            key={review.$id}
            className='border-b border-white/10 pb-4 last:border-b-0'
          >
            <div className='flex items-start justify-between mb-2'>
              <div className='flex items-center space-x-3'>
                <div className='w-7 h-7 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center text-white text-xs font-medium'>
                  {String(review.userId || '?')
                    .charAt(0)
                    .toUpperCase()}
                </div>
                <div>
                  <div className='flex items-center space-x-2'>
                    <span className='text-white font-medium text-md'>
                      {review.userId}
                    </span>
                  </div>
                  <div className='flex items-center space-x-2 mt-1'>
                    <div className='flex items-center space-x-1'>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-2.5 w-2.5 ${
                            i < (review.stars || 0)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className='text-xs text-gray-500'>
                      {new Date(
                        review.$updatedAt || review.$createdAt
                      ).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              {review.userId === currentUserId && !showReviewForm && (
                <Button
                  size='sm'
                  variant='ghost'
                  className='text-gray-400 hover:text-white'
                  onClick={() => setShowReviewForm(true)}
                >
                  <Pencil className='h-4 w-4' />
                </Button>
              )}
            </div>

            {review.message && (
              <p className='text-gray-300 text-md leading-relaxed mb-2'>
                {review.message}
              </p>
            )}

            <div className='flex items-center space-x-4'>
              <button className='flex items-center space-x-1 text-gray-400 hover:text-white transition-colors'>
                <ThumbsUp className='h-3 w-3' />
                <span className='text-xs'>Helpful</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
