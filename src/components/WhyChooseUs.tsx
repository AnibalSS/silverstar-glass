'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const pillars = [
  {
    id: 1,
    title: 'Professional & Modern',
    description: 'Latest techniques and premium materials for exceptional results.',
    icon: '⚡',
  },
  {
    id: 2,
    title: 'Clean, Careful Installs',
    description: 'Meticulous attention to detail in every project we undertake.',
    icon: '🧹',
  },
  {
    id: 3,
    title: 'Friendly Communication',
    description: 'Clear, honest dialogue throughout your entire project journey.',
    icon: '💬',
  },
  {
    id: 4,
    title: 'Residential & Commercial',
    description: 'Expertise serving both homeowners and business owners.',
    icon: '🏆',
  },
];

const badges = ['Locally owned', 'Free estimates', 'Hablamos Español', 'Financing available'];

export default function WhyChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text + Icons */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
              Why Choose Silverstar?
            </h2>

            <div className="space-y-6 mb-8">
              {pillars.map((pillar) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: pillar.id * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="text-3xl flex-shrink-0">{pillar.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary mb-1">{pillar.title}</h3>
                    <p className="text-text-muted">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {badges.map((badge, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="inline-block px-4 py-2 bg-white border border-border-light rounded-full text-sm font-medium text-text-primary"
                >
                  ✓ {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right: Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6 }}
            className="h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center shadow-lift"
          >
            <div className="text-center text-text-muted">
              <svg className="w-32 h-32 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <p className="text-lg font-medium">Team & Expertise</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
