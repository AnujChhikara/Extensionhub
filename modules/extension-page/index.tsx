'use client';

import { ExtensionHeader } from './ExtensionHeader';
import { ExtensionFilters } from './ExtensionFilters';
import { ExtensionGrid } from './ExtensionGrid';
import { ExtensionPagination } from './ExtensionPagination';

export function ExtensionPage() {
  return (
    <main className='pt-24 pb-16 px-4 sm:px-6 md:px-32 bg-background min-h-screen'>
      <div className='max-w-7xl mx-auto'>
        <ExtensionHeader />
        <ExtensionFilters />
        <ExtensionGrid />
        <ExtensionPagination />
      </div>
    </main>
  );
}
