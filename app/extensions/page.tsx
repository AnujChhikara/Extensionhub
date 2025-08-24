import { Metadata } from 'next';
import { ExtensionPage } from '@/modules/extension-page';

export const metadata: Metadata = {
  title: 'Browse Chrome Extensions - ExtensionSpot',
  description:
    'Browse and discover thousands of Chrome extensions. Filter by category, rating, and features. Find productivity tools, developer utilities, and innovative browser enhancements.',
  keywords: [
    'browse Chrome extensions',
    'extension directory',
    'Chrome extension list',
    'extension categories',
    'productivity extensions',
    'developer extensions',
    'browser tools',
    'extension search',
    'extension filtering',
    'Chrome web store',
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
    canonical: '/extensions',
  },
  openGraph: {
    title: 'Browse Chrome Extensions - ExtensionSpot',
    description:
      'Browse and discover thousands of Chrome extensions. Filter by category, rating, and features.',
    url: 'https://extensionspot.com/extensions',
    siteName: 'ExtensionSpot',
    images: [
      {
        url: '/og-extensions.png',
        width: 1200,
        height: 630,
        alt: 'Browse Chrome Extensions on ExtensionSpot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Browse Chrome Extensions - ExtensionSpot',
    description:
      'Browse and discover thousands of Chrome extensions. Filter by category, rating, and features.',
    images: ['/og-extensions.png'],
    creator: '@extensionspot',
    site: '@extensionspot',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ExtensionsPage() {
  return <ExtensionPage />;
}
