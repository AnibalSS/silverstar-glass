'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-bg-light to-white overflow-hidden">
      {/* Glass accent shapes */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Text Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl font-bold text-text-primary leading-tight"
          >
            Bright, modern glasswork for homes and businesses across DFW.
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg text-text-muted leading-relaxed max-w-lg"
          >
            Professional installations, clean details, and friendly service you can trust in your space.
          </motion.p>

          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 pt-6">
            <button className="btn-primary">
              Request a free estimate
            </button>
            <button className="btn-outline">
              Call now · (469) 616-5555
            </button>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-96 md:h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center shadow-lift">
              <div className="text-center text-text-muted">
                <svg className="w-32 h-32 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <p className="text-lg font-medium">Premium Glass Image</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
