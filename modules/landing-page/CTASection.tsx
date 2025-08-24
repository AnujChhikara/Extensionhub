'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function CTASection() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Discover Amazing Extensions?
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            Join thousands of users who have found their perfect Chrome extensions on ExtensionSpot
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button size="md" variant="primary" className="group">
              <Heart className="mr-2 h-4 w-4" />
              Start Exploring
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="md">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
