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

export function ExtensionDetailsPage({ extensionId }: ExtensionDetailsPageProps) {
  return (
    <main className="pt-20 pb-16 px-4 sm:px-6 md:px-32">
      <div className="max-w-7xl mx-auto">
        <ExtensionHeader extensionId={extensionId} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <ExtensionScreenshots extensionId={extensionId} />
            <ExtensionDescription extensionId={extensionId} />
            <ExtensionReviews extensionId={extensionId} />
          </div>
          <div className="space-y-6">
            <ExtensionStats extensionId={extensionId} />
            <ExtensionActions extensionId={extensionId} />
          </div>
        </div>
      </div>
    </main>
  );
}
