'use client';

import { ExtensionHeader } from './ExtensionHeader';
import { ExtensionScreenshots } from './ExtensionScreenshots';
import { ExtensionDescription } from './ExtensionDescription';
import { ExtensionStats } from './ExtensionStats';
import { ExtensionReviews } from './ExtensionReviews';
import { ExtensionActions } from './ExtensionActions';

interface ExtensionDetailsPageProps {
  extensionId: string;
}

export function ExtensionDetailsPage({
  extensionId,
}: ExtensionDetailsPageProps) {
  return (
    <main className='pt-24 pb-12 px-4 sm:px-6 md:px-16 bg-background min-h-screen'>
      <div className='max-w-6xl mx-auto'>
        <ExtensionHeader extensionId={extensionId} />
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6'>
          <div className='lg:col-span-2 space-y-6'>
            <ExtensionScreenshots extensionId={extensionId} />
            <ExtensionDescription extensionId={extensionId} />
            <ExtensionReviews extensionId={extensionId} />
          </div>
          <div className='space-y-4'>
            <ExtensionStats extensionId={extensionId} />
            <ExtensionActions extensionId={extensionId} />
          </div>
        </div>
      </div>
    </main>
  );
}
