'use client';

import { UserProfile } from './UserProfile';
import { SubmittedExtensions } from './SubmittedExtensions';
import { BookmarkedExtensions } from './BookmarkedExtensions';
import { UserReviews } from './UserReviews';
import { DashboardSettings } from './DashboardSettings';

export function UserDashboard() {
  return (
    <main className='pt-28 pb-16 px-4 sm:px-6 md:px-32'>
      <div className='max-w-7xl mx-auto'>
        {/* Main Content Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
          {/* Left Column - Profile & Settings */}
          <div className='space-y-6'>
            <UserProfile />
            <DashboardSettings />
          </div>

          {/* Center Column - Main Content */}
          <div className='lg:col-span-2 space-y-6'>
            <SubmittedExtensions />
            <BookmarkedExtensions />
            <UserReviews />
          </div>
        </div>
      </div>
    </main>
  );
}
