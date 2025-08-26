import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { QueryProvider } from '@/components/providers/QueryProvider';
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'ExtensionSpot - Discover Underrated Chrome Extensions',
    template: '%s | ExtensionSpot',
  },
  description:
    'Discover underrated, emerging, and niche Chrome extensions that often get overlooked on mainstream platforms. Find productivity tools, developer utilities, and innovative browser enhancements.',
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
    'extension marketplace',
    'extension reviews',
    'extension ratings',
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
    type: 'website',
    locale: 'en_US',
    url: 'https://extensionspot.com',
    siteName: 'ExtensionSpot',
    title: 'ExtensionSpot - Discover Underrated Chrome Extensions',
    description:
      'Discover underrated, emerging, and niche Chrome extensions that often get overlooked on mainstream platforms.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ExtensionSpot - Chrome Extension Discovery Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@extensionspot',
    creator: '@extensionspot',
    title: 'ExtensionSpot - Discover Underrated Chrome Extensions',
    description:
      'Discover underrated, emerging, and niche Chrome extensions that often get overlooked on mainstream platforms.',
    images: ['/og-image.png'],
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
  category: 'technology',
  classification: 'Chrome Extension Marketplace',
  other: {
    'application-name': 'ExtensionSpot',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'ExtensionSpot',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-config': '/browserconfig.xml',
    'msapplication-TileColor': '#000000',
    'msapplication-tap-highlight': 'no',
    'theme-color': '#000000',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        elements: {
          rootBox: 'mt-24',
        },
      }}
    >
      <html lang='en'>
        <head>
          <link rel='icon' href='/favicon.ico' />
          <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
          <link rel='manifest' href='/manifest.json' />
          <meta name='theme-color' content='#000000' />
          <meta name='msapplication-TileColor' content='#000000' />
          <meta name='msapplication-config' content='/browserconfig.xml' />

          {/* Structured Data */}
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'ExtensionSpot',
                url: 'https://extensionspot.com',
                description:
                  'Discover underrated, emerging, and niche Chrome extensions',
                potentialAction: {
                  '@type': 'SearchAction',
                  target:
                    'https://extensionspot.com/extensions?search={search_term_string}',
                  'query-input': 'required name=search_term_string',
                },
                publisher: {
                  '@type': 'Organization',
                  name: 'ExtensionSpot',
                  url: 'https://extensionspot.com',
                },
              }),
            }}
          />

          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'ExtensionSpot',
                url: 'https://extensionspot.com',
                logo: 'https://extensionspot.com/logo.png',
                sameAs: [
                  'https://twitter.com/extensionspot',
                  'https://github.com/extensionspot',
                ],
                contactPoint: {
                  '@type': 'ContactPoint',
                  contactType: 'customer service',
                  email: 'hello@extensionspot.com',
                },
              }),
            }}
          />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
        >
          <QueryProvider>
            <Navigation />

            {children}
            <Footer />
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
