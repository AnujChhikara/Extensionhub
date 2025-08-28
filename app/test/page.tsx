'use client';

import { Button } from '@/components/ui/Button';
import {
  createUserBookmark,
  removeUserBookmark,
  listUserBookmarks,
} from '@/lib/actions/bookmarks';
import { markExtensionAsViewed, listExtensionViews } from '@/lib/actions/views';
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
      console.log('view result: ', result);
      if (result.success) {
        const data = result.data as { documents: any[] };
        setViewCount(data?.documents?.length || 0);
        setViewMessage(`Found ${data?.documents?.length || 0} views`);
      } else {
        setViewMessage(result.message);
        setViewCount(null);
      }
    } catch (error) {
      console.log('error in list view: ', error);
      setViewMessage('Error listing views');
      setViewCount(null);
    } finally {
      setViewLoading(false);
    }
  };

  return (
    <div className='w-full h-full p-20'>
      <div className='max-w-4xl mx-auto space-y-8'>
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
                <div className='p-3 bg-gray-50 rounded-md'>
                  <p className='text-sm font-medium'>
                    Bookmarks Count: {bookmarkList?.documents?.length || 0}
                  </p>
                  {bookmarkList?.documents?.length > 0 && (
                    <div className='mt-2'>
                      <p className='text-xs text-gray-600 mb-1'>
                        Extension IDs:
                      </p>
                      <div className='space-y-1'>
                        {bookmarkList.documents.map(
                          (bookmark: any, index: number) => (
                            <div
                              key={index}
                              className='text-xs bg-white p-2 rounded border'
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
            <div className='mt-4 p-3 bg-gray-100 rounded-md'>
              <p className='text-sm text-gray-700'>{message}</p>
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
                <div className='p-3 bg-gray-50 rounded-md'>
                  <p className='text-sm font-medium'>
                    Views Count: {viewCount}
                  </p>
                </div>
              )}
            </div>
          </div>

          {viewMessage && (
            <div className='mt-4 p-3 bg-gray-100 rounded-md'>
              <p className='text-sm text-gray-700'>{viewMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
