'use client';

import { motion } from 'framer-motion';
import { Search, Star, TrendingUp, Users, Shield, Zap } from 'lucide-react';
import { FeatureCard } from '@/components/ui/FeatureCard';

export function FeaturesSection() {
  const features = [
    {
      icon: <Search className='h-5 w-5' />,
      title: 'Smart Discovery',
      description:
        'Find hidden gems and underrated extensions with our intelligent recommendation engine.',
    },
    {
      icon: <Star className='h-5 w-5' />,
      title: 'Authentic Reviews',
      description:
        'Read genuine user reviews and ratings from the community to make informed decisions.',
    },
    {
      icon: <TrendingUp className='h-5 w-5' />,
      title: 'Analytics Dashboard',
      description:
        "Track your extension's performance with detailed analytics and insights.",
    },
    {
      icon: <Users className='h-5 w-5' />,
      title: 'Community Driven',
      description:
        'Join a vibrant community of developers and users sharing their experiences.',
    },
    {
      icon: <Shield className='h-5 w-5' />,
      title: 'Security First',
      description:
        'All extensions are thoroughly vetted for security and privacy compliance.',
    },
    {
      icon: <Zap className='h-5 w-5' />,
      title: 'Lightning Fast',
      description:
        'Experience blazing fast search and discovery with our optimized platform.',
    },
  ];

  return (
    <section className='py-16'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Why Choose ExtensionSpot?
          </h2>
          <p className='text-lg text-gray-400 max-w-2xl mx-auto'>
            We&apos;re building the ultimate platform for Chrome extension
            discovery, helping you find the tools that truly enhance your
            browsing experience.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
