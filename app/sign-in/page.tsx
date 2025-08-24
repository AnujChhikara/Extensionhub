import { Metadata } from 'next';
import { SignIn } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'Sign In - ExtensionSpot',
  description:
    'Sign in to your ExtensionSpot account to access your dashboard, manage bookmarks, and submit reviews.',
  keywords: [
    'sign in',
    'login',
    'user account',
    'extension profile',
    'authentication',
    'user dashboard',
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
    canonical: '/sign-in',
  },
  openGraph: {
    title: 'Sign In - ExtensionSpot',
    description:
      'Sign in to your ExtensionSpot account to access your dashboard.',
    url: 'https://extensionspot.com/sign-in',
    siteName: 'ExtensionSpot',
    images: [
      {
        url: '/og-signin.png',
        width: 1200,
        height: 630,
        alt: 'ExtensionSpot Sign In',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign In - ExtensionSpot',
    description:
      'Sign in to your ExtensionSpot account to access your dashboard.',
    images: ['/og-signin.png'],
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

export default function SignInPage() {
  return (
    <div className='min-h-screen bg-black flex items-center justify-center'>
      <SignIn
        appearance={{
          elements: {
            rootBox: 'mx-auto',
            card: 'bg-white/5 backdrop-blur-sm border border-white/10',
            headerTitle: 'text-white',
            headerSubtitle: 'text-gray-400',
            formButtonPrimary: 'bg-blue-600 hover:bg-blue-700',
            formFieldInput: 'bg-white/5 border border-white/10 text-white',
            formFieldLabel: 'text-gray-300',
            footerActionLink: 'text-blue-400 hover:text-blue-300',
            dividerLine: 'bg-white/10',
            dividerText: 'text-gray-400',
            socialButtonsBlockButton:
              'bg-white/5 border border-white/10 text-white hover:bg-white/10',
          },
        }}
      />
    </div>
  );
}
