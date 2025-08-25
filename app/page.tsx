import { Metadata } from 'next';
import { Spotlight } from '@/components/ui/Spotlight';
import { LandingPage } from '@/modules/landing-page';

export const metadata: Metadata = {
  title: 'ExtensionSpot - Discover Underrated Chrome Extensions',
  description:
    'Find the best underrated, emerging, and niche Chrome extensions that often get overlooked. Discover productivity tools, developer utilities, and innovative browser enhancements.',
  keywords: [
    'Chrome extensions',
    'browser extensions',
    'productivity tools',
    'developer tools',
    'underrated extensions',
    'niche extensions',
    'browser utilities',
    'Chrome web store alternatives',
    'extension discovery',
    'browser productivity',
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
    canonical: '/',
  },
  openGraph: {
    title: 'ExtensionSpot - Discover Underrated Chrome Extensions',
    description:
      'Find the best underrated, emerging, and niche Chrome extensions that often get overlooked. Discover productivity tools, developer utilities, and innovative browser enhancements.',
    url: 'https://extensionspot.com',
    siteName: 'ExtensionSpot',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ExtensionSpot - Chrome Extension Discovery Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExtensionSpot - Discover Underrated Chrome Extensions',
    description:
      'Find the best underrated, emerging, and niche Chrome extensions that often get overlooked.',
    images: ['/og-image.png'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function HomePage() {
  return (
    <div className='min-h-screen bg-black relative overflow-hidden'>
      <Spotlight
        className='-top-40 left-0 md:-top-80 md:left-10 '
        fill='white'
      />
      <LandingPage />
    </div>
  );
}
