'use client';

import { Metadata } from 'next';
import { ErrorPage } from '@/components/ui/ErrorPage';

export const metadata: Metadata = {
  title: 'Server Error - ExtensionSpot',
  description:
    'Something went wrong on our end. Please try again later or contact support if the problem persists.',
  keywords: [
    'server error',
    '500 error',
    'technical issue',
    'Chrome extensions',
    'extension discovery',
  ],
  authors: [{ name: 'ExtensionSpot Team' }],
  creator: 'ExtensionSpot',
  publisher: 'ExtensionSpot',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://extensionspot.com'),
  alternates: {
    canonical: '/error',
  },
  openGraph: {
    title: 'Server Error - ExtensionSpot',
    description: 'Something went wrong on our end. Please try again later.',
    url: 'https://extensionspot.com/error',
    siteName: 'ExtensionSpot',
    images: [
      {
        url: '/og-error.png',
        width: 1200,
        height: 630,
        alt: 'ExtensionSpot Server Error',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Server Error - ExtensionSpot',
    description: 'Something went wrong on our end. Please try again later.',
    images: ['/og-error.png'],
    creator: '@extensionspot',
    site: '@extensionspot',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function ErrorPageComponent({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorPage
      code='500'
      title='Server Error'
      description='Something went wrong on our end. Please try again later or contact support if the problem persists.'
      customActions={
        <button
          onClick={reset}
          className='bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors'
        >
          Try Again
        </button>
      }
    />
  );
}
