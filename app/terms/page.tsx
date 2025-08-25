import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - ExtensionSpot',
  description:
    'Read ExtensionSpot&apos;s terms of service and user agreement. Learn about our policies, user rights, and platform guidelines.',
  keywords: [
    'terms of service',
    'user agreement',
    'terms and conditions',
    'platform policies',
    'user rights',
    'legal terms',
    'extension platform terms',
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
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service - ExtensionSpot',
    description:
      'Read ExtensionSpot&apos;s terms of service and user agreement.',
    url: 'https://extensionspot.com/terms',
    siteName: 'ExtensionSpot',
    images: [
      {
        url: '/og-terms.png',
        width: 1200,
        height: 630,
        alt: 'ExtensionSpot Terms of Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - ExtensionSpot',
    description:
      'Read ExtensionSpot&apos;s terms of service and user agreement.',
    images: ['/og-terms.png'],
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

export default function TermsPage() {
  return (
    <div className='min-h-screen bg-black pt-24 pb-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='text-4xl font-bold text-white mb-8'>Terms of Service</h1>

        <div className='prose prose-invert max-w-none'>
          <p className='text-gray-300 mb-6'>
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              1. Acceptance of Terms
            </h2>
            <p className='text-gray-300 mb-4'>
              By accessing and using ExtensionSpot, you accept and agree to be
              bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              2. Use License
            </h2>
            <p className='text-gray-300 mb-4'>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on ExtensionSpot&apos;s
              website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              3. Disclaimer
            </h2>
            <p className='text-gray-300 mb-4'>
              The materials on ExtensionSpot&apos;s website are provided on an
              &apos;as is&apos; basis. ExtensionSpot makes no warranties,
              expressed or implied, and hereby disclaims and negates all other
              warranties including without limitation, implied warranties or
              conditions of merchantability, fitness for a particular purpose,
              or non-infringement of intellectual property or other violation of
              rights.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              4. Limitations
            </h2>
            <p className='text-gray-300 mb-4'>
              In no event shall ExtensionSpot or its suppliers be liable for any
              damages (including, without limitation, damages for loss of data
              or profit, or due to business interruption) arising out of the use
              or inability to use the materials on ExtensionSpot&apos;s website.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              5. Accuracy of Materials
            </h2>
            <p className='text-gray-300 mb-4'>
              The materials appearing on ExtensionSpot&apos;s website could
              include technical, typographical, or photographic errors.
              ExtensionSpot does not warrant that any of the materials on its
              website are accurate, complete or current.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-4'>6. Links</h2>
            <p className='text-gray-300 mb-4'>
              ExtensionSpot has not reviewed all of the sites linked to its
              website and is not responsible for the contents of any such linked
              site. The inclusion of any link does not imply endorsement by
              ExtensionSpot of the site.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              7. Modifications
            </h2>
            <p className='text-gray-300 mb-4'>
              ExtensionSpot may revise these terms of service for its website at
              any time without notice. By using this website you are agreeing to
              be bound by the then current version of these Terms of Service.
            </p>
          </section>

          <section className='mb-8'>
            <h2 className='text-2xl font-semibold text-white mb-4'>
              8. Governing Law
            </h2>
            <p className='text-gray-300 mb-4'>
              These terms and conditions are governed by and construed in
              accordance with the laws and you irrevocably submit to the
              exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
