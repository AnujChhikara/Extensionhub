'use client';

import { Spotlight } from '@/components/ui/Spotlight';
import { LandingPage } from '@/modules/landing-page';

export default function App() {
  return (
    <div className='min-h-screen bg-black relative overflow-hidden'>
      <Spotlight
        className='-top-40 left-0 md:-top-20 md:left-60'
        fill='white'
      />

      <LandingPage />
    </div>
  );
}
