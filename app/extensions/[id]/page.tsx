import { Metadata } from 'next';
import { ExtensionDetailsPage } from '@/modules/extension-details';
import { getExtensionById } from '@/__mock_data__';

interface ExtensionPageProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: ExtensionPageProps): Promise<Metadata> {
  const extension = getExtensionById(params.id);

  if (!extension) {
    return {
      title: 'Extension Not Found - ExtensionSpot',
      description: 'The requested Chrome extension could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${extension.name} - Chrome Extension | ExtensionSpot`,
    description:
      extension.shortDescription.substring(0, 160) +
      (extension.shortDescription.length > 160 ? '...' : ''),
    keywords: [
      extension.name,
      'Chrome extension',
      ...extension.category,
      ...extension.tags,
      'browser extension',
      'productivity tool',
      'ExtensionSpot',
    ],
    authors: [{ name: extension.developer.name }],
    creator: extension.developer.name,
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
        extension.shortDescription.substring(0, 160) +
        (extension.shortDescription.length > 160 ? '...' : ''),
      url: `https://extensionspot.com/extensions/${params.id}`,
      siteName: 'ExtensionSpot',
      images: [
        {
          url: extension.logo || '/default-extension-logo.png',
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
        extension.shortDescription.substring(0, 160) +
        (extension.shortDescription.length > 160 ? '...' : ''),
      images: [extension.logo || '/default-extension-logo.png'],
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
    other: {
      'extension:rating': extension.averageRating.toString(),
      'extension:downloads': extension.views.toString(),
      'extension:version': extension.version,
      'extension:developer': extension.developer.name,
    },
  };
}

export default function ExtensionPage({ params }: ExtensionPageProps) {
  return <ExtensionDetailsPage extensionId={params.id} />;
}
