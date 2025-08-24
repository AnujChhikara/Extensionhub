'use client';

import { ErrorPage } from '@/components/ui/ErrorPage';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <ErrorPage
      code='500'
      title='Something went wrong'
      description='An unexpected error occurred. Please try again or contact support if the problem persists.'
      customActions={
        <button
          onClick={reset}
          className='inline-flex items-center justify-center px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors'
        >
          Try Again
        </button>
      }
    />
  );
}
