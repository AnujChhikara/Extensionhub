import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About & Contact - ExtensionSpot',
  description: 'Learn about ExtensionSpot and get in touch with us',
};

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-black pt-28 pb-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* About Section */}
        <section className='mb-16'>
          <div className='mb-12'>
            <h1 className='text-4xl font-bold text-white mb-4'>
              About ExtensionSpot
            </h1>
            <p className='text-xl text-gray-400  mx-auto'>
              Discover underrated, emerging, and niche Chrome extensions that
              often get overlooked on mainstream platforms.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-2xl font-semibold text-white mb-6'>
                Our Mission
              </h2>
              <p className='text-gray-300 leading-relaxed mb-6'>
                ExtensionSpot was created to help users discover high-quality,
                underrated, and emerging Chrome extensions that often get
                overlooked on mainstream platforms. We wanted to provide a
                dedicated space where innovative and niche extensions can get
                the visibility they deserve.
              </p>
              <p className='text-gray-300 leading-relaxed mb-6'>
                Our platform focuses on community-driven discovery, detailed
                reviews, and comprehensive extension information to help users
                make informed decisions about which extensions to install.
              </p>
              <p className='text-gray-300 leading-relaxed'>
                Whether you&apos;re a developer looking to showcase your
                extension or a user seeking the perfect tool for your workflow,
                ExtensionSpot is here to connect you with the best Chrome
                extensions available.
              </p>
            </div>

            <div className='bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8'>
              <h3 className='text-xl font-semibold text-white mb-4'>
                What We Offer
              </h3>
              <ul className='space-y-3 text-gray-300'>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
                  Curated extension discovery
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
                  Detailed reviews and ratings
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
                  Developer-friendly platform
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
                  Community-driven recommendations
                </li>
                <li className='flex items-center'>
                  <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
                  Comprehensive extension information
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className='mb-16'>
          <h2 className='text-3xl font-bold text-white text-center mb-12'>
            Our Team
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>A</span>
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>
                Alex Johnson
              </h3>
              <p className='text-gray-400'>Founder & CEO</p>
            </div>
            <div className='text-center'>
              <div className='w-24 h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>S</span>
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>
                Sarah Chen
              </h3>
              <p className='text-gray-400'>Lead Developer</p>
            </div>
            <div className='text-center'>
              <div className='w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center'>
                <span className='text-white font-bold text-xl'>M</span>
              </div>
              <h3 className='text-xl font-semibold text-white mb-2'>
                Mike Rodriguez
              </h3>
              <p className='text-gray-400'>Product Manager</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
