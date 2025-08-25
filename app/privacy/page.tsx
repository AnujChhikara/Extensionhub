import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - ExtensionSpot',
  description:
    'Learn about ExtensionSpot&apos;s privacy policy and how we collect, use, and protect your personal information.',
  keywords: [
    'privacy policy',
    'data protection',
    'personal information',
    'user privacy',
    'data collection',
    'privacy rights',
    'GDPR compliance',
    'extension privacy',
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
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - ExtensionSpot',
    description:
      'Learn about ExtensionSpot&apos;s privacy policy and how we protect your data.',
    url: 'https://extensionspot.com/privacy',
    siteName: 'ExtensionSpot',
    images: [
      {
        url: '/og-privacy.png',
        width: 1200,
        height: 630,
        alt: 'ExtensionSpot Privacy Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - ExtensionSpot',
    description:
      "Learn about ExtensionSpot's privacy policy and how we protect your data.",
    images: ['/og-privacy.png'],
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

export default function PrivacyPage() {
  return (
    <div className='min-h-screen bg-black pt-24 pb-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='text-4xl font-bold text-white mb-8'>Privacy Policy</h1>

        <div className='prose prose-invert max-w-none'>
          <p className='text-gray-300 mb-6'>
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              1. Information We Collect
            </h2>
            <p className='text-gray-300 mb-4'>
              We collect information you provide directly to us, such as when
              you create an account, submit reviews, or contact us. This may
              include your name, email address, and any other information you
              choose to provide.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              2. How We Use Your Information
            </h2>
            <p className='text-gray-300 mb-4'>
              We use the information we collect to provide, maintain, and
              improve our services, to communicate with you, and to develop new
              features and functionality.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              3. Information Sharing
            </h2>
            <p className='text-gray-300 mb-4'>
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              described in this privacy policy or as required by law.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              4. Data Security
            </h2>
            <p className='text-gray-300 mb-4'>
              We implement appropriate security measures to protect your
              personal information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              5. Cookies and Tracking
            </h2>
            <p className='text-gray-300 mb-4'>
              We use cookies and similar tracking technologies to enhance your
              experience on our website and to analyze how our services are
              used.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              6. Your Rights
            </h2>
            <p className='text-gray-300 mb-4'>
              You have the right to access, update, or delete your personal
              information. You may also have the right to restrict or object to
              certain processing of your information.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              7. Children&apos;s Privacy
            </h2>
            <p className='text-gray-300 mb-4'>
              Our services are not intended for children under the age of 13. We
              do not knowingly collect personal information from children under
              13.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              8. Changes to This Policy
            </h2>
            <p className='text-gray-300 mb-4'>
              We may update this privacy policy from time to time. We will
              notify you of any changes by posting the new privacy policy on
              this page.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              9. Contact Us
            </h2>
            <p className='text-gray-300 mb-4'>
              If you have any questions about this privacy policy, please
              contact us at privacy@extensionspot.com.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
