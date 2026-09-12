'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const steps = [
  {
    number: 1,
    title: 'Reach out',
    description: 'Call, text, or send photos. We respond quickly and professionally.',
    icon: '📞',
  },
  {
    number: 2,
    title: 'Get a clear plan',
    description: 'Receive options, pricing, and timeline tailored to your needs.',
    icon: '📋',
  },
  {
    number: 3,
    title: 'Install day',
    description: 'Clean work, respectful of your space. Professional throughout.',
    icon: '🔧',
  },
  {
    number: 4,
    title: 'Enjoy the result',
    description: 'Bright, modern glass that feels right in your space.',
    icon: '✨',
  },
];

export default function Process() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" ref={ref} className="py-24 bg-bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">How It Works</h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            A simple, transparent process from start to finish
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="relative"
            >
              {/* Connecting line */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-full h-1 bg-gradient-to-r from-primary/30 to-accent/30"></div>
              )}

              <div className="relative z-10 bg-white rounded-lg p-6 shadow-card border border-border-light">
                {/* Step number circle */}
                <div className="absolute -top-6 left-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lift">
                  {step.number}
                </div>

                <div className="text-4xl mb-4 mt-2">{step.icon}</div>

                <h3 className="text-lg font-bold text-text-primary mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
