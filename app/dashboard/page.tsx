import { Metadata } from 'next';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { UserDashboard } from '@/modules/dashboard';

export const metadata: Metadata = {
  title: 'User Dashboard - ExtensionSpot',
  description:
    'Manage your Chrome extension profile, bookmarks, reviews, and submissions. Track your activity and discover personalized extension recommendations.',
  keywords: [
    'user dashboard',
    'extension profile',
    'bookmarked extensions',
    'extension reviews',
    'submitted extensions',
    'extension management',
    'personal dashboard',
    'extension activity',
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
    canonical: '/dashboard',
  },
  openGraph: {
    title: 'User Dashboard - ExtensionSpot',
    description:
      'Manage your Chrome extension profile, bookmarks, reviews, and submissions.',
    url: 'https://extensionspot.com/dashboard',
    siteName: 'ExtensionSpot',
    images: [
      {
        url: '/og-dashboard.png',
        width: 1200,
        height: 630,
        alt: 'ExtensionSpot User Dashboard',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'User Dashboard - ExtensionSpot',
    description:
      'Manage your Chrome extension profile, bookmarks, reviews, and submissions.',
    images: ['/og-dashboard.png'],
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

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div>
      <UserDashboard />
    </div>
  );
}
