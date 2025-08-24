import { Metadata } from 'next';
import { SignUp } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'Sign Up - ExtensionSpot',
  description:
    'Create your ExtensionSpot account to discover Chrome extensions, manage bookmarks, and submit reviews.',
  keywords: [
    'sign up',
    'register',
    'create account',
    'extension discovery',
    'user registration',
    'extension community',
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
    canonical: '/sign-up',
  },
  openGraph: {
    title: 'Sign Up - ExtensionSpot',
    description:
      'Create your ExtensionSpot account to discover Chrome extensions.',
    url: 'https://extensionspot.com/sign-up',
    siteName: 'ExtensionSpot',
    images: [
      {
        url: '/og-signup.png',
        width: 1200,
        height: 630,
        alt: 'ExtensionSpot Sign Up',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sign Up - ExtensionSpot',
    description:
      'Create your ExtensionSpot account to discover Chrome extensions.',
    images: ['/og-signup.png'],
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

export default function SignUpPage() {
  return (
    <div className='min-h-screen bg-black flex items-center justify-center'>
      <SignUp
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
