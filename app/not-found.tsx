import { Metadata } from 'next';
import { ErrorPage } from '@/components/ui/ErrorPage';

export const metadata: Metadata = {
  title: 'Page Not Found - ExtensionSpot',
  description:
    'The page you are looking for could not be found. Browse our Chrome extensions or return to the homepage.',
  keywords: [
    '404 error',
    'page not found',
    'Chrome extensions',
    'extension discovery',
    'browser extensions',
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
    canonical: '/404',
  },
  openGraph: {
    title: 'Page Not Found - ExtensionSpot',
    description: 'The page you are looking for could not be found.',
    url: 'https://extensionspot.com/404',
    siteName: 'ExtensionSpot',
    images: [
      {
        url: '/og-404.png',
        width: 1200,
        height: 630,
        alt: 'ExtensionSpot 404 Error',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Not Found - ExtensionSpot',
    description: 'The page you are looking for could not be found.',
    images: ['/og-404.png'],
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

export default function NotFoundPage() {
  return (
    <ErrorPage
      code='404'
      title='Page Not Found'
      description='The page you are looking for could not be found. It might have been moved, deleted, or you entered the wrong URL.'
    />
  );
}
