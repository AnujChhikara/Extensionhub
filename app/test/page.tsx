'use client';

import { Button } from '@/components/ui/Button';
import {
  createUserBookmark,
  removeUserBookmark,
  listUserBookmarks,
} from '@/lib/actions/bookmarks';
import { markExtensionAsViewed, listExtensionViews } from '@/lib/actions/views';
import {
  addNewSubmission,
  listAllSubmissions,
  updateSubmissionStatus,
} from '@/lib/actions/submissions';
import {
  addExtension,
  listAllExtensions,
  deleteExtension,
  suspendExtension,
} from '@/lib/actions/extensions';
import {
  addReviewForExtension,
  listAllExtensionReviews,
  listAllUserReviews,
  deleteReviewForExtension,
  suspendReview,
} from '@/lib/actions/reviews';
import {
  addSpotlight,
  listAllSpotlights,
  listSpotlightForDate,
} from '@/lib/actions/spotlight';
import { useState } from 'react';

export default function TestPage() {
  const [userId, setUserId] = useState('');
  const [extensionId, setExtensionId] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Bookmark listing states
  const [bookmarkUserId, setBookmarkUserId] = useState('');
  const [bookmarkList, setBookmarkList] = useState<{ documents: any[] } | null>(
    null
  );
  const [bookmarkLoading, setBookmarkLoading] = useState(false);

  // Views states
  const [viewUserId, setViewUserId] = useState('');
  const [viewExtensionId, setViewExtensionId] = useState('');
  const [viewCount, setViewCount] = useState<number | null>(null);
  const [viewLoading, setViewLoading] = useState(false);
  const [viewMessage, setViewMessage] = useState('');

  // Submissions states
  const [submissionEmail, setSubmissionEmail] = useState('');
  const [submissionExtensionLink, setSubmissionExtensionLink] = useState('');
  const [submissionGithubLink, setSubmissionGithubLink] = useState('');
  const [submissionWebsiteLink, setSubmissionWebsiteLink] = useState('');
  const [submissionFeedback, setSubmissionFeedback] = useState('');
  const [submissionList, setSubmissionList] = useState<{
    documents: any[];
  } | null>(null);
  const [submissionLoading, setSubmissionLoading] = useState(false);
  const [submissionUpdateId, setSubmissionUpdateId] = useState('');
  const [submissionUpdateStatus, setSubmissionUpdateStatus] = useState<
    'ACCEPTED' | 'REJECTED'
  >('ACCEPTED');
  const [submissionUpdateFeedback, setSubmissionUpdateFeedback] = useState('');
  const [submissionMessage, setSubmissionMessage] = useState('');

  // Extensions states
  const [newExtId, setNewExtId] = useState('');
  const [newExtName, setNewExtName] = useState('');
  const [newExtDescription, setNewExtDescription] = useState('');
  const [newExtLink, setNewExtLink] = useState('');
  const [newExtGithub, setNewExtGithub] = useState('');
  const [newExtWebsite, setNewExtWebsite] = useState('');
  const [newExtOwnerUserId, setNewExtOwnerUserId] = useState('');
  const [extensionsList, setExtensionsList] = useState<{
    documents: any[];
  } | null>(null);
  const [extensionsLoading, setExtensionsLoading] = useState(false);
  const [extensionsMessage, setExtensionsMessage] = useState('');
  const [modifyExtensionId, setModifyExtensionId] = useState('');

  // Reviews states
  const [reviewExtensionId, setReviewExtensionId] = useState('');
  const [reviewUserId, setReviewUserId] = useState('');
  const [reviewStars, setReviewStars] = useState<number | ''>('');
  const [reviewVote, setReviewVote] = useState<'UP' | 'DOWN' | ''>('');
  const [reviewText, setReviewText] = useState('');
  const [reviewsForExt, setReviewsForExt] = useState<{
    documents: any[];
  } | null>(null);
  const [reviewsForUser, setReviewsForUser] = useState<{
    documents: any[];
  } | null>(null);
  const [reviewActionMessage, setReviewActionMessage] = useState('');
  const [reviewLoading, setReviewLoading] = useState(false);
  const [reviewIdToModify, setReviewIdToModify] = useState('');

  // Spotlight states
  const [spotlightDate, setSpotlightDate] = useState(''); // yyyy-mm-dd
  const [spotlightExtensionId, setSpotlightExtensionId] = useState('');
  const [spotlightsList, setSpotlightsList] = useState<{
    documents: any[];
  } | null>(null);
  const [spotlightForDate, setSpotlightForDate] = useState<{
    documents: any[];
  } | null>(null);
  const [spotlightLoading, setSpotlightLoading] = useState(false);
  const [spotlightMessage, setSpotlightMessage] = useState('');

  const handleCreateBookmark = async () => {
    if (!userId || !extensionId) {
      setMessage('Please fill in both fields');
      return;
    }

    setIsLoading(true);
    setMessage('Creating bookmark...');

    try {
      const result = await createUserBookmark({ userId, extensionId });
      setMessage(result.message);
    } catch (error) {
      setMessage('Error creating bookmark');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveBookmark = async () => {
    if (!userId || !extensionId) {
      setMessage('Please fill in both fields');
      return;
    }

    setIsLoading(true);
    setMessage('Removing bookmark...');

    try {
      const result = await removeUserBookmark({ userId, extensionId });
      setMessage(result.message);
    } catch (error) {
      setMessage('Error removing bookmark');
    } finally {
      setIsLoading(false);
    }
  };

  const handleListBookmarks = async () => {
    if (!bookmarkUserId) {
      setMessage('Please enter a user ID');
      return;
    }

    setBookmarkLoading(true);
    try {
      const result = await listUserBookmarks({ userId: bookmarkUserId });
      if (result.success) {
        const data = result.data as { documents: any[] };
        setBookmarkList(data);
        setMessage(`Found ${data?.documents?.length || 0} bookmarks`);
      } else {
        setMessage(result.message);
        setBookmarkList(null);
      }
    } catch (error) {
      setMessage('Error listing bookmarks');
      setBookmarkList(null);
    } finally {
      setBookmarkLoading(false);
    }
  };

  const handleMarkAsViewed = async () => {
    if (!viewUserId || !viewExtensionId) {
      setViewMessage('Please fill in both fields');
      return;
    }

    setViewLoading(true);
    setViewMessage('Marking as viewed...');

    try {
      const result = await markExtensionAsViewed({
        userId: viewUserId,
        extensionId: viewExtensionId,
      });
      setViewMessage(result.message);
    } catch (error) {
      setViewMessage('Error marking as viewed');
    } finally {
      setViewLoading(false);
    }
  };

  const handleListViews = async () => {
    if (!viewExtensionId) {
      setViewMessage('Please enter an extension ID');
      return;
    }

    setViewLoading(true);
    try {
      const result = await listExtensionViews({ extensionId: viewExtensionId });
      if (result.success) {
        const data = result.data as { documents: any[] };
        setViewCount(data?.documents?.length || 0);
        setViewMessage(`Found ${data?.documents?.length || 0} views`);
      } else {
        setViewMessage(result.message);
        setViewCount(null);
      }
    } catch (error) {
      setViewMessage('Error listing views');
      setViewCount(null);
    } finally {
      setViewLoading(false);
    }
  };

  // Submissions handlers
  const handleSubmitSubmission = async () => {
    if (!submissionEmail || !submissionExtensionLink || !userId) {
      setSubmissionMessage('email, extensionLink and userId are required');
      return;
    }
    setSubmissionLoading(true);
    setSubmissionMessage('Submitting...');
    try {
      const result = await addNewSubmission({
        email: submissionEmail,
        extensionLink: submissionExtensionLink,
        userId,
        message: submissionMessage,
        githubLink: submissionGithubLink || undefined,
        websiteLink: submissionWebsiteLink || undefined,
        feedback: submissionFeedback || undefined,
      } as any);
      setSubmissionMessage(result.message);
    } catch (e) {
      setSubmissionMessage('Error submitting');
    } finally {
      setSubmissionLoading(false);
    }
  };

  const handleListSubmissions = async () => {
    setSubmissionLoading(true);
    try {
      const result = await listAllSubmissions();
      if (result.success) {
        setSubmissionList(result.data as { documents: any[] });
        setSubmissionMessage(
          `Found ${(result.data as any)?.documents?.length || 0} submissions`
        );
      } else {
        setSubmissionMessage(result.message);
        setSubmissionList(null);
      }
    } catch (e) {
      setSubmissionMessage('Error listing submissions');
      setSubmissionList(null);
    } finally {
      setSubmissionLoading(false);
    }
  };

  const handleUpdateSubmissionStatus = async () => {
    if (!submissionUpdateId) {
      setSubmissionMessage('Submission id is required');
      return;
    }
    setSubmissionLoading(true);
    try {
      const result = await updateSubmissionStatus({
        id: submissionUpdateId,
        status: submissionUpdateStatus,
        feedback: submissionUpdateFeedback,
      });
      setSubmissionMessage(result.message);
    } catch (e) {
      setSubmissionMessage('Error updating submission');
    } finally {
      setSubmissionLoading(false);
    }
  };

  // Extensions handlers
  const handleCreateExtension = async () => {
    if (!newExtId || !newExtName || !newExtDescription || !newExtLink) {
      setExtensionsMessage(
        'extensionId, name, description, extensionLink required'
      );
      return;
    }
    setExtensionsLoading(true);
    setExtensionsMessage('Creating extension...');
    try {
      const result = await addExtension({
        extensionId: newExtId,
        userId: newExtOwnerUserId,
        vote: 'UP',
        stars: 5,
        message: 'init',
        isSuspended: false,
        isDeleted: false,
        // schema fields below (extra keys will be stripped by zod but present for repo checks)
        name: newExtName,
        description: newExtDescription,
        extensionLink: newExtLink,
        githubLink: newExtGithub || undefined,
        websiteLink: newExtWebsite || undefined,
      } as any);
      setExtensionsMessage(result.message);
    } catch (e) {
      setExtensionsMessage('Error creating extension');
    } finally {
      setExtensionsLoading(false);
    }
  };

  const handleListExtensions = async () => {
    setExtensionsLoading(true);
    try {
      const result = await listAllExtensions();
      if (result.success) {
        setExtensionsList(result.data as { documents: any[] });
        setExtensionsMessage(
          `Found ${(result.data as any)?.documents?.length || 0} extensions`
        );
      } else {
        setExtensionsMessage(result.message);
        setExtensionsList(null);
      }
    } catch (e) {
      setExtensionsMessage('Error listing extensions');
      setExtensionsList(null);
    } finally {
      setExtensionsLoading(false);
    }
  };

  const handleDeleteExtension = async () => {
    if (!modifyExtensionId) {
      setExtensionsMessage('Provide extensionId');
      return;
    }
    setExtensionsLoading(true);
    try {
      const result = await deleteExtension(modifyExtensionId);
      setExtensionsMessage(result.message);
    } catch (e) {
      setExtensionsMessage('Error deleting extension');
    } finally {
      setExtensionsLoading(false);
    }
  };

  const handleSuspendExtension = async () => {
    if (!modifyExtensionId) {
      setExtensionsMessage('Provide extensionId');
      return;
    }
    setExtensionsLoading(true);
    try {
      const result = await suspendExtension(modifyExtensionId);
      setExtensionsMessage(result.message);
    } catch (e) {
      setExtensionsMessage('Error suspending extension');
    } finally {
      setExtensionsLoading(false);
    }
  };

  // Reviews handlers
  const handleAddReview = async () => {
    if (!reviewExtensionId || !reviewUserId) {
      setReviewActionMessage('extensionId and userId required');
      return;
    }
    setReviewLoading(true);
    setReviewActionMessage('Adding review...');
    try {
      const result = await addReviewForExtension({
        extensionId: reviewExtensionId,
        userId: reviewUserId,
        vote: (reviewVote || undefined) as any,
        stars: (reviewStars || undefined) as any,
        message: reviewText || undefined,
        isSuspended: false,
        isDeleted: false,
      } as any);
      setReviewActionMessage(result.message);
    } catch (e) {
      setReviewActionMessage('Error adding review');
    } finally {
      setReviewLoading(false);
    }
  };

  const handleListReviewsForExtension = async () => {
    if (!reviewExtensionId) {
      setReviewActionMessage('extensionId required');
      return;
    }
    setReviewLoading(true);
    try {
      const result = await listAllExtensionReviews(reviewExtensionId);
      if (result.success) {
        setReviewsForExt(result.data as { documents: any[] });
        setReviewActionMessage(
          `Found ${(result.data as any)?.documents?.length || 0} reviews for extension`
        );
      } else {
        setReviewActionMessage(result.message);
        setReviewsForExt(null);
      }
    } catch (e) {
      setReviewActionMessage('Error listing reviews for extension');
      setReviewsForExt(null);
    } finally {
      setReviewLoading(false);
    }
  };

  const handleListReviewsForUser = async () => {
    if (!reviewUserId) {
      setReviewActionMessage('userId required');
      return;
    }
    setReviewLoading(true);
    try {
      const result = await listAllUserReviews(reviewUserId);
      if (result.success) {
        setReviewsForUser(result.data as { documents: any[] });
        setReviewActionMessage(
          `Found ${(result.data as any)?.documents?.length || 0} reviews for user`
        );
      } else {
        setReviewActionMessage(result.message);
        setReviewsForUser(null);
      }
    } catch (e) {
      setReviewActionMessage('Error listing reviews for user');
      setReviewsForUser(null);
    } finally {
      setReviewLoading(false);
    }
  };

  const handleDeleteReview = async () => {
    if (!reviewIdToModify) {
      setReviewActionMessage('reviewId required');
      return;
    }
    setReviewLoading(true);
    try {
      const result = await deleteReviewForExtension(reviewIdToModify);
      setReviewActionMessage(result.message);
    } catch (e) {
      setReviewActionMessage('Error deleting review');
    } finally {
      setReviewLoading(false);
    }
  };

  const handleSuspendReview = async () => {
    if (!reviewIdToModify) {
      setReviewActionMessage('reviewId required');
      return;
    }
    setReviewLoading(true);
    try {
      const result = await suspendReview(reviewIdToModify);
      setReviewActionMessage(result.message);
    } catch (e) {
      setReviewActionMessage('Error suspending review');
    } finally {
      setReviewLoading(false);
    }
  };

  // Spotlight handlers
  const handleAddSpotlight = async () => {
    if (!spotlightDate || !spotlightExtensionId) {
      setSpotlightMessage('date and extensionId required');
      return;
    }
    setSpotlightLoading(true);
    setSpotlightMessage('Adding spotlight...');
    try {
      const date = new Date(spotlightDate);
      const result = await addSpotlight({
        date,
        extensionId: spotlightExtensionId,
      });
      setSpotlightMessage(result.message);
    } catch (e) {
      setSpotlightMessage('Error adding spotlight');
    } finally {
      setSpotlightLoading(false);
    }
  };

  const handleListAllSpotlights = async () => {
    setSpotlightLoading(true);
    try {
      const result = await listAllSpotlights();
      if (result.success) {
        setSpotlightsList(result.data as { documents: any[] });
        setSpotlightMessage(
          `Found ${(result.data as any)?.documents?.length || 0} spotlights`
        );
      } else {
        setSpotlightMessage(result.message);
        setSpotlightsList(null);
      }
    } catch (e) {
      setSpotlightMessage('Error listing spotlights');
      setSpotlightsList(null);
    } finally {
      setSpotlightLoading(false);
    }
  };

  const handleGetSpotlightForDate = async () => {
    if (!spotlightDate) {
      setSpotlightMessage('date required');
      return;
    }
    setSpotlightLoading(true);
    try {
      const date = new Date(spotlightDate);
      const result = await listSpotlightForDate({ date });
      if (result.success) {
        setSpotlightForDate(result.data as { documents: any[] });
        setSpotlightMessage('Fetched spotlight for date');
      } else {
        setSpotlightMessage(result.message);
        setSpotlightForDate(null);
      }
    } catch (e) {
      setSpotlightMessage('Error fetching spotlight for date');
      setSpotlightForDate(null);
    } finally {
      setSpotlightLoading(false);
    }
  };

  return (
    <div className='w-full h-full p-20'>
      <div className='max-w-5xl mx-auto space-y-8'>
        <h2 className='text-3xl font-bold text-center'>
          Server Actions Test UI
        </h2>

        {/* Bookmark Management Section */}
        <div className='bg-black p-6 rounded-lg border border-gray-200'>
          <h3 className='text-xl font-semibold mb-4'>Bookmark Management</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <div>
                <label
                  htmlFor='userId'
                  className='block text-sm font-medium mb-2'
                >
                  User ID
                </label>
                <input
                  id='userId'
                  type='text'
                  value={userId}
                  onChange={e => setUserId(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter user ID'
                />
              </div>

              <div>
                <label
                  htmlFor='extensionId'
                  className='block text-sm font-medium mb-2'
                >
                  Extension ID
                </label>
                <input
                  id='extensionId'
                  type='text'
                  value={extensionId}
                  onChange={e => setExtensionId(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter extension ID'
                />
              </div>

              <div className='flex gap-3'>
                <Button
                  onClick={handleCreateBookmark}
                  disabled={isLoading}
                  className='flex-1'
                >
                  {isLoading ? 'Creating...' : 'Create Bookmark'}
                </Button>
                <Button
                  onClick={handleRemoveBookmark}
                  disabled={isLoading}
                  className='flex-1'
                  variant='secondary'
                >
                  {isLoading ? 'Removing...' : 'Remove Bookmark'}
                </Button>
              </div>
            </div>

            <div className='space-y-4'>
              <div>
                <label
                  htmlFor='bookmarkUserId'
                  className='block text-sm font-medium mb-2'
                >
                  User ID for Listing
                </label>
                <input
                  id='bookmarkUserId'
                  type='text'
                  value={bookmarkUserId}
                  onChange={e => setBookmarkUserId(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter user ID to list bookmarks'
                />
              </div>

              <Button
                onClick={handleListBookmarks}
                disabled={bookmarkLoading}
                className='w-full'
                variant='outline'
              >
                {bookmarkLoading ? 'Loading...' : 'List User Bookmarks'}
              </Button>

              {bookmarkList && (
                <div className='p-3 bg-gray-800 rounded-md'>
                  <p className='text-sm font-medium'>
                    Bookmarks Count: {bookmarkList?.documents?.length || 0}
                  </p>
                  {bookmarkList?.documents?.length > 0 && (
                    <div className='mt-2'>
                      <p className='text-xs text-gray-200 mb-1'>
                        Extension IDs:
                      </p>
                      <div className='space-y-1'>
                        {bookmarkList.documents.map(
                          (bookmark: any, index: number) => (
                            <div
                              key={index}
                              className='text-xs bg-gray-700 p-2 rounded border'
                            >
                              {bookmark.extensionId}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {message && (
            <div className='mt-4 p-3 bg-gray-900 rounded-md'>
              <p className='text-sm text-gray-200'>{message}</p>
            </div>
          )}
        </div>

        {/* Views Management Section */}
        <div className='bg-black p-6 rounded-lg border border-gray-200'>
          <h3 className='text-xl font-semibold mb-4'>Views Management</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <div>
                <label
                  htmlFor='viewUserId'
                  className='block text-sm font-medium mb-2'
                >
                  User ID
                </label>
                <input
                  id='viewUserId'
                  type='text'
                  value={viewUserId}
                  onChange={e => setViewUserId(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter user ID'
                />
              </div>

              <div>
                <label
                  htmlFor='viewExtensionId'
                  className='block text-sm font-medium mb-2'
                >
                  Extension ID
                </label>
                <input
                  id='viewExtensionId'
                  type='text'
                  value={viewExtensionId}
                  onChange={e => setViewExtensionId(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter extension ID'
                />
              </div>

              <Button
                onClick={handleMarkAsViewed}
                disabled={viewLoading}
                className='w-full'
              >
                {viewLoading ? 'Marking...' : 'Mark Extension as Viewed'}
              </Button>
            </div>

            <div className='space-y-4'>
              <div>
                <label
                  htmlFor='viewCountExtensionId'
                  className='block text-sm font-medium mb-2'
                >
                  Extension ID for View Count
                </label>
                <input
                  id='viewCountExtensionId'
                  type='text'
                  value={viewExtensionId}
                  onChange={e => setViewExtensionId(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter extension ID to count views'
                />
              </div>

              <Button
                onClick={handleListViews}
                disabled={viewLoading}
                className='w-full'
                variant='outline'
              >
                {viewLoading ? 'Loading...' : 'Get View Count'}
              </Button>

              {viewCount !== null && (
                <div className='p-3 bg-gray-800 rounded-md'>
                  <p className='text-sm font-medium'>
                    Views Count: {viewCount}
                  </p>
                </div>
              )}
            </div>
          </div>

          {viewMessage && (
            <div className='mt-4 p-3 bg-gray-900 rounded-md'>
              <p className='text-sm text-gray-200'>{viewMessage}</p>
            </div>
          )}
        </div>

        {/* Submissions Section */}
        <div className='bg-black p-6 rounded-lg border border-gray-200'>
          <h3 className='text-xl font-semibold mb-4'>Submissions</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <div className='grid grid-cols-1 gap-4'>
                <input
                  type='email'
                  placeholder='email'
                  value={submissionEmail}
                  onChange={e => setSubmissionEmail(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <input
                  type='url'
                  placeholder='extensionLink (url)'
                  value={submissionExtensionLink}
                  onChange={e => setSubmissionExtensionLink(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <input
                  type='text'
                  placeholder='userId'
                  value={userId}
                  onChange={e => setUserId(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <input
                  type='url'
                  placeholder='githubLink (optional)'
                  value={submissionGithubLink}
                  onChange={e => setSubmissionGithubLink(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <input
                  type='url'
                  placeholder='websiteLink (optional)'
                  value={submissionWebsiteLink}
                  onChange={e => setSubmissionWebsiteLink(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <textarea
                  placeholder='message (optional)'
                  value={submissionMessage}
                  onChange={e => setSubmissionMessage(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <textarea
                  placeholder='feedback (optional)'
                  value={submissionFeedback}
                  onChange={e => setSubmissionFeedback(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
              </div>
              <Button
                onClick={handleSubmitSubmission}
                disabled={submissionLoading}
                className='w-full'
              >
                {submissionLoading ? 'Submitting...' : 'Submit'}
              </Button>
            </div>

            <div className='space-y-4'>
              <Button
                onClick={handleListSubmissions}
                disabled={submissionLoading}
                className='w-full'
                variant='outline'
              >
                {submissionLoading ? 'Loading...' : 'List All Submissions'}
              </Button>

              {submissionList && (
                <div className='p-3 bg-gray-800 rounded-md'>
                  <p className='text-sm font-medium'>
                    Submissions Count: {submissionList?.documents?.length || 0}
                  </p>
                </div>
              )}

              {(submissionList?.documents ?? []).length > 0 && (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {(submissionList?.documents ?? []).map((sub: any) => (
                    <div
                      key={sub.$id}
                      className='rounded border p-4 bg-gray-700'
                    >
                      <div className='flex items-center justify-between'>
                        <span className='text-xs text-gray-200'>
                          id: {sub.$id}
                        </span>
                        <span className='text-xs text-gray-200'>
                          user: {sub.userId}
                        </span>
                      </div>
                      <p className='text-sm mt-1'>email: {sub.email}</p>
                      <p className='text-sm truncate'>
                        link: {sub.extensionLink}
                      </p>
                      {sub.githubLink && (
                        <p className='text-sm truncate'>
                          github: {sub.githubLink}
                        </p>
                      )}
                      {sub.websiteLink && (
                        <p className='text-sm truncate'>
                          website: {sub.websiteLink}
                        </p>
                      )}
                      {sub.message && (
                        <p className='text-sm mt-1'>message: {sub.message}</p>
                      )}
                      {sub.feedback && (
                        <p className='text-sm mt-1'>feedback: {sub.feedback}</p>
                      )}
                      <p className='text-xs mt-2'>status: {sub.status}</p>
                    </div>
                  ))}
                </div>
              )}

              <div className='grid grid-cols-1 gap-3'>
                <input
                  type='text'
                  placeholder='submission id'
                  value={submissionUpdateId}
                  onChange={e => setSubmissionUpdateId(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <select
                  value={submissionUpdateStatus}
                  onChange={e =>
                    setSubmissionUpdateStatus(
                      e.target.value as 'ACCEPTED' | 'REJECTED'
                    )
                  }
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                >
                  <option value='ACCEPTED'>ACCEPTED</option>
                  <option value='REJECTED'>REJECTED</option>
                </select>
                <input
                  type='text'
                  placeholder='feedback'
                  value={submissionUpdateFeedback}
                  onChange={e => setSubmissionUpdateFeedback(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <Button
                  onClick={handleUpdateSubmissionStatus}
                  className='w-full'
                >
                  Update Submission Status
                </Button>
              </div>
            </div>
          </div>

          {submissionMessage && (
            <div className='mt-4 p-3 bg-gray-900 rounded-md'>
              <p className='text-sm text-gray-200'>{submissionMessage}</p>
            </div>
          )}
        </div>

        {/* Extensions Section */}
        <div className='bg-black p-6 rounded-lg border border-gray-200'>
          <h3 className='text-xl font-semibold mb-4'>Extensions</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <div className='grid grid-cols-1 gap-3'>
                <input
                  type='text'
                  placeholder='extensionId'
                  value={newExtId}
                  onChange={e => setNewExtId(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <input
                  type='text'
                  placeholder='name'
                  value={newExtName}
                  onChange={e => setNewExtName(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <textarea
                  placeholder='description'
                  value={newExtDescription}
                  onChange={e => setNewExtDescription(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <input
                  type='url'
                  placeholder='extensionLink (url)'
                  value={newExtLink}
                  onChange={e => setNewExtLink(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <input
                  type='url'
                  placeholder='githubLink (optional)'
                  value={newExtGithub}
                  onChange={e => setNewExtGithub(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <input
                  type='url'
                  placeholder='websiteLink (optional)'
                  value={newExtWebsite}
                  onChange={e => setNewExtWebsite(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <input
                  type='text'
                  placeholder='owner userId (optional)'
                  value={newExtOwnerUserId}
                  onChange={e => setNewExtOwnerUserId(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
              </div>
              <Button onClick={handleCreateExtension} className='w-full'>
                Create Extension
              </Button>
            </div>

            <div className='space-y-4'>
              <div className='flex gap-3'>
                <Button
                  onClick={handleListExtensions}
                  disabled={extensionsLoading}
                  variant='outline'
                  className='flex-1'
                >
                  {extensionsLoading ? 'Loading...' : 'List All Extensions'}
                </Button>
              </div>

              {extensionsList && (
                <div className='p-3 bg-gray-800 rounded-md'>
                  <p className='text-sm font-medium'>
                    Extensions Count: {extensionsList?.documents?.length || 0}
                  </p>
                </div>
              )}

              {(extensionsList?.documents ?? []).length > 0 && (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {(extensionsList?.documents ?? []).map((ext: any) => (
                    <div
                      key={ext.$id}
                      className='rounded border p-4 bg-gray-700'
                    >
                      <div className='flex items-center justify-between'>
                        <h4 className='font-semibold'>{ext.name}</h4>
                        <span className='text-xs text-gray-200'>{ext.$id}</span>
                      </div>
                      <p className='text-sm text-gray-200 mt-1 line-clamp-3'>
                        {ext.description}
                      </p>
                      <div className='mt-2 space-y-1 text-sm'>
                        {ext.extensionLink && (
                          <p>
                            Link:{' '}
                            <a
                              className='text-blue-600 underline'
                              href={ext.extensionLink}
                              target='_blank'
                              rel='noreferrer'
                            >
                              {ext.extensionLink}
                            </a>
                          </p>
                        )}
                        {ext.githubLink && (
                          <p>
                            GitHub:{' '}
                            <a
                              className='text-blue-600 underline'
                              href={ext.githubLink}
                              target='_blank'
                              rel='noreferrer'
                            >
                              {ext.githubLink}
                            </a>
                          </p>
                        )}
                        {ext.websiteLink && (
                          <p>
                            Website:{' '}
                            <a
                              className='text-blue-600 underline'
                              href={ext.websiteLink}
                              target='_blank'
                              rel='noreferrer'
                            >
                              {ext.websiteLink}
                            </a>
                          </p>
                        )}
                        {Array.isArray(ext.tags) && ext.tags.length > 0 && (
                          <p>Tags: {ext.tags.join(', ')}</p>
                        )}
                        {Array.isArray(ext.labels) && ext.labels.length > 0 && (
                          <p>Labels: {ext.labels.join(', ')}</p>
                        )}
                        {ext.developer && <p>Developer: {ext.developer}</p>}
                        <p>
                          Status:{' '}
                          {ext.isSuspended
                            ? 'Suspended'
                            : ext.isDeleted
                              ? 'Deleted'
                              : 'Active'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className='grid grid-cols-1 gap-3'>
                <input
                  type='text'
                  placeholder='extensionId'
                  value={modifyExtensionId}
                  onChange={e => setModifyExtensionId(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <div className='flex gap-3'>
                  <Button onClick={handleDeleteExtension} className='flex-1'>
                    Delete Extension
                  </Button>
                  <Button onClick={handleSuspendExtension} className='flex-1'>
                    Suspend Extension
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {extensionsMessage && (
            <div className='mt-4 p-3 bg-gray-900 rounded-md'>
              <p className='text-sm text-gray-200'>{extensionsMessage}</p>
            </div>
          )}
        </div>

        {/* Reviews Section */}
        <div className='bg-black p-6 rounded-lg border border-gray-200'>
          <h3 className='text-xl font-semibold mb-4'>Reviews</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <div className='grid grid-cols-1 gap-3'>
                <input
                  type='text'
                  placeholder='extensionId'
                  value={reviewExtensionId}
                  onChange={e => setReviewExtensionId(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <input
                  type='text'
                  placeholder='userId'
                  value={reviewUserId}
                  onChange={e => setReviewUserId(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <select
                  value={reviewVote}
                  onChange={e => setReviewVote((e.target.value as any) || '')}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                >
                  <option value=''>vote (optional)</option>
                  <option value='UP'>UP</option>
                  <option value='DOWN'>DOWN</option>
                </select>
                <input
                  type='number'
                  min={1}
                  max={5}
                  placeholder='stars (1-5 optional)'
                  value={reviewStars}
                  onChange={e =>
                    setReviewStars(
                      e.target.value === '' ? '' : Number(e.target.value)
                    )
                  }
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <textarea
                  placeholder='message (optional)'
                  value={reviewText}
                  onChange={e => setReviewText(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
              </div>
              <Button onClick={handleAddReview} className='w-full'>
                Add Review
              </Button>

              <div className='grid grid-cols-1 gap-3'>
                <Button
                  onClick={handleListReviewsForExtension}
                  className='w-full'
                  variant='outline'
                >
                  List Reviews for Extension
                </Button>
                <Button
                  onClick={handleListReviewsForUser}
                  className='w-full'
                  variant='outline'
                >
                  List Reviews for User
                </Button>
              </div>
            </div>

            <div className='space-y-4'>
              {(reviewsForExt || reviewsForUser) && (
                <div className='p-3 bg-gray-800 rounded-md'>
                  <p className='text-sm font-medium'>
                    {reviewsForExt
                      ? `Reviews for extension: ${reviewsForExt?.documents?.length || 0}`
                      : `Reviews for user: ${reviewsForUser?.documents?.length || 0}`}
                  </p>
                </div>
              )}

              {(reviewsForExt?.documents ?? []).length > 0 && (
                <div className='mt-2'>
                  <h4 className='text-sm font-semibold mb-2'>
                    Extension Reviews
                  </h4>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {(reviewsForExt?.documents ?? []).map((rev: any) => (
                      <div
                        key={rev.$id}
                        className='rounded border p-4 bg-gray-700'
                      >
                        <div className='flex items-center justify-between'>
                          <span className='text-xs text-gray-200'>
                            id: {rev.$id}
                          </span>
                          <span className='text-xs text-gray-200'>
                            user: {rev.userId}
                          </span>
                        </div>
                        <p className='text-sm mt-1'>
                          vote: {rev.vote ?? '-'} | stars: {rev.stars ?? '-'}
                        </p>
                        {rev.message && (
                          <p className='text-sm text-gray-200 mt-1'>
                            {rev.message}
                          </p>
                        )}
                        <p className='text-xs mt-2'>
                          status:{' '}
                          {rev.isSuspended
                            ? 'Suspended'
                            : rev.isDeleted
                              ? 'Deleted'
                              : 'Active'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(reviewsForUser?.documents ?? []).length > 0 && (
                <div className='mt-4'>
                  <h4 className='text-sm font-semibold mb-2'>User Reviews</h4>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {(reviewsForUser?.documents ?? []).map((rev: any) => (
                      <div
                        key={rev.$id}
                        className='rounded border p-4 bg-gray-700'
                      >
                        <div className='flex items-center justify-between'>
                          <span className='text-xs text-gray-200'>
                            id: {rev.$id}
                          </span>
                          <span className='text-xs text-gray-200'>
                            ext: {rev.extensionId}
                          </span>
                        </div>
                        <p className='text-sm mt-1'>
                          vote: {rev.vote ?? '-'} | stars: {rev.stars ?? '-'}
                        </p>
                        {rev.message && (
                          <p className='text-sm text-gray-200 mt-1'>
                            {rev.message}
                          </p>
                        )}
                        <p className='text-xs mt-2'>
                          status:{' '}
                          {rev.isSuspended
                            ? 'Suspended'
                            : rev.isDeleted
                              ? 'Deleted'
                              : 'Active'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className='grid grid-cols-1 gap-3'>
                <input
                  type='text'
                  placeholder='reviewId'
                  value={reviewIdToModify}
                  onChange={e => setReviewIdToModify(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <div className='flex gap-3'>
                  <Button onClick={handleDeleteReview} className='flex-1'>
                    Delete Review
                  </Button>
                  <Button onClick={handleSuspendReview} className='flex-1'>
                    Suspend Review
                  </Button>
                </div>
              </div>

              {reviewActionMessage && (
                <div className='mt-2 p-3 bg-gray-900 rounded-md'>
                  <p className='text-sm text-gray-200'>{reviewActionMessage}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Spotlight Section */}
        <div className='bg-black p-6 rounded-lg border border-gray-200'>
          <h3 className='text-xl font-semibold mb-4'>Spotlight</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <div className='grid grid-cols-1 gap-3'>
                <input
                  type='date'
                  value={spotlightDate}
                  onChange={e => setSpotlightDate(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
                <input
                  type='text'
                  placeholder='extensionId'
                  value={spotlightExtensionId}
                  onChange={e => setSpotlightExtensionId(e.target.value)}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md'
                />
              </div>
              <Button onClick={handleAddSpotlight} className='w-full'>
                Add Spotlight for Date
              </Button>
            </div>

            <div className='space-y-4'>
              <div className='flex gap-3'>
                <Button
                  onClick={handleListAllSpotlights}
                  disabled={spotlightLoading}
                  className='flex-1'
                  variant='outline'
                >
                  {spotlightLoading ? 'Loading...' : 'List All Spotlights'}
                </Button>
                <Button
                  onClick={handleGetSpotlightForDate}
                  disabled={spotlightLoading}
                  className='flex-1'
                  variant='outline'
                >
                  {spotlightLoading ? 'Loading...' : 'Get Spotlight for Date'}
                </Button>
              </div>

              {spotlightsList && (
                <div className='p-3 bg-gray-800 rounded-md'>
                  <p className='text-sm font-medium'>
                    Spotlights Count: {spotlightsList?.documents?.length || 0}
                  </p>
                </div>
              )}

              {(spotlightsList?.documents ?? []).length > 0 && (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {(spotlightsList?.documents ?? []).map((s: any) => (
                    <div key={s.$id} className='rounded border p-4 bg-gray-700'>
                      <p className='text-sm'>
                        date: {new Date(s.date).toDateString()}
                      </p>
                      <p className='text-sm'>extensionId: {s.extensionId}</p>
                    </div>
                  ))}
                </div>
              )}

              {(spotlightForDate?.documents ?? []).length > 0 && (
                <div className='grid grid-cols-1 gap-4'>
                  {(spotlightForDate?.documents ?? []).map((s: any) => (
                    <div key={s.$id} className='rounded border p-4 bg-gray-700'>
                      <p className='text-sm'>
                        date: {new Date(s.date).toDateString()}
                      </p>
                      <p className='text-sm'>extensionId: {s.extensionId}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {spotlightMessage && (
            <div className='mt-4 p-3 bg-gray-900 rounded-md'>
              <p className='text-sm text-gray-200'>{spotlightMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
