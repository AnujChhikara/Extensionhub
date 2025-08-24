'use client';

export function Footer() {
  return (
    <footer className=' bg-black'>
      <div className=' py-8 backdrop-blur-2xl'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center space-x-2 mb-4 md:mb-0'>
              <div className='flex items-center space-x-1'>
                <div className='w-4 h-4 bg-white rounded-sm'></div>
                <div className='w-4 h-4 bg-gray-400 rounded-sm'></div>
              </div>
              <span className='text-base font-semibold text-white'>
                ExtensionSpot
              </span>
            </div>
            <div className='text-gray-400 text-sm'>
              © 2024 ExtensionSpot. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
