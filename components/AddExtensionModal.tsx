'use client';

import { useState } from 'react';
import { Loader2, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/Button';

interface AddExtensionModalProps {
  trigger?: React.ReactNode;
  onSuccess?: () => void;
}

// TODO: use tanstack query to submit the extension
export function AddExtensionModal({
  trigger,
  onSuccess,
}: AddExtensionModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const isValidChromeStoreUrl = (url: string) => {
    try {
      const urlObj = new URL(url);
      return (
        urlObj.hostname === 'chromewebstore.google.com' &&
        urlObj.pathname.startsWith('/detail/')
      );
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!isValidChromeStoreUrl(url)) {
      setError('Please enter a valid Chrome Web Store extension URL');
      return;
    }

    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setSuccess(true);
    setUrl('');

    setTimeout(() => {
      setIsOpen(false);
      setSuccess(false);
      onSuccess?.();
    }, 2000);

    setIsLoading(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setUrl('');
    setError('');
    setSuccess(false);
  };

  const isUrlValid = url && isValidChromeStoreUrl(url);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant='primary' size='md'>
            <ExternalLink className='w-4 h-4 mr-2' />
            Submit Extension
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Submit Chrome Extension</DialogTitle>
          <DialogDescription>
            Submit a Chrome Web Store extension URL for review and inclusion in
            our directory.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='space-y-4 flex flex-col '>
            <label htmlFor='extension-url' className='text-sm font-medium'>
              Extension URL
            </label>
            <input
              id='extension-url'
              type='url'
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder='https://chromewebstore.google.com/detail/efaidnbmnnnibpcajpcglclefindmkaj'
              className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              disabled={isLoading}
              required
            />
            <p className='text-xs text-gray-500'>
              Example:
              https://chromewebstore.google.com/detail/efaidnbmnnnibpcajpcglclefindmkaj
            </p>
          </div>

          {error && (
            <div className='p-3 bg-red-50 border border-red-200 rounded-lg'>
              <p className='text-sm text-red-600'>{error}</p>
            </div>
          )}

          {success && (
            <div className='p-3 bg-green-50 border border-green-200 rounded-lg'>
              <p className='text-sm text-green-600'>
                Extension submitted successfully! We&apos;ll review it shortly.
              </p>
            </div>
          )}

          <DialogFooter className='flex-col sm:flex-row gap-2'>
            <Button
              variant='outline'
              onClick={handleClose}
              disabled={isLoading}
              className='w-full sm:w-auto'
            >
              Cancel
            </Button>
            <Button
              variant='primary'
              disabled={!isUrlValid || isLoading}
              className='w-full sm:w-auto'
            >
              {isLoading ? (
                <>
                  <Loader2 className='w-4 h-4 mr-2 animate-spin' />
                  Submitting...
                </>
              ) : (
                'Submit Extension'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
