import { Metadata } from 'next';
import { ExtensionDetailsPage } from '@/modules/extension-details';
import { getExtensionById } from '@/lib/actions/extensions';

interface ExtensionPageProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: ExtensionPageProps): Promise<Metadata> {
  const result = await getExtensionById(params.id);

  if (!result.success || !result.data) {
    return {
      title: 'Extension Not Found - ExtensionSpot',
      description: 'The requested Chrome extension could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const extension = result.data;

  return {
    title: `${extension.name} - Chrome Extension | ExtensionSpot`,
    description:
      extension.description.substring(0, 160) +
      (extension.description.length > 160 ? '...' : ''),
    keywords: [
      extension.name,
      'Chrome extension',
      ...(extension.tags || []),
      ...(extension.labels || []),
      'browser extension',
      'productivity tool',
      'ExtensionSpot',
    ],
    authors: [{ name: extension.developer || 'Unknown Developer' }],
    creator: extension.developer || 'Unknown Developer',
    publisher: 'ExtensionSpot',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL('https://extensionspot.com'),
    alternates: {
      canonical: `/extensions/${params.id}`,
    },
    openGraph: {
      title: `${extension.name} - Chrome Extension`,
      description:
        extension.description.substring(0, 160) +
        (extension.description.length > 160 ? '...' : ''),
      url: `https://extensionspot.com/extensions/${params.id}`,
      siteName: 'ExtensionSpot',
      images: [
        {
          url: extension.media?.[0] || '/default-extension-logo.png',
          width: 512,
          height: 512,
          alt: `${extension.name} logo`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${extension.name} - Chrome Extension`,
      description:
        extension.description.substring(0, 160) +
        (extension.description.length > 160 ? '...' : ''),
      images: [extension.media?.[0] || '/default-extension-logo.png'],
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
}

export default function ExtensionPage({ params }: ExtensionPageProps) {
  return <ExtensionDetailsPage extensionId={params.id} />;
}
