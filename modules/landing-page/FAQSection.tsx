'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqData = [
  {
    question: 'What is the purpose of this Chrome extension marketplace?',
    answer:
      'This marketplace was created to help users discover high-quality, underrated, and emerging Chrome extensions that often get overlooked on mainstream platforms. We wanted to provide a dedicated space where innovative and niche extensions can get the visibility they deserve.',
  },

  {
    question: 'How does this website benefit extension developers?',
    answer:
      'Developers get a specialized platform to showcase their extensions beyond download counts. They can access detailed feedback, analytics, and a community focused on quality and innovation, helping them improve and grow their user base.',
  },
  {
    question: 'What makes this marketplace unique?',
    answer:
      'We employ intelligent discovery algorithms to surface extensions based on quality, user feedback, and engagement rather than solely on popularity. We also spotlight underrated and overrated extensions to help users make informed choices.',
  },
  {
    question: 'Can users contribute to the platform?',
    answer:
      'Yes, users can submit extensions, write reviews, rate extensions, bookmark favorites, and report issues. This community-driven approach shapes the quality and reputation of the extensions listed.',
  },
  {
    question:
      'How do you ensure the security and quality of listed extensions?',
    answer:
      'Every submitted extension undergoes moderation including automated and manual checks. User reports and reviews help maintain quality standards. We prioritize the safety and privacy of our users.',
  },
];

export function FAQSection() {
  return (
    <section id='faq' className='py-20 bg-black'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
            Frequently Asked Questions
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Everything you need to know about our Chrome extension marketplace
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type='single' collapsible className='w-full'>
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='border-gray-800'
              >
                <AccordionTrigger className='text-left text-white hover:text-gray-300 transition-colors py-6'>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className='text-gray-400 pb-6 leading-relaxed'>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
