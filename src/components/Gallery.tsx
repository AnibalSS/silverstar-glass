'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const projects = [
  { id: 1, title: 'Custom Shower', location: 'Garland, TX', category: 'Shower' },
  { id: 2, title: 'Residential Windows', location: 'Arlington, TX', category: 'Windows' },
  { id: 3, title: 'Modern Storefront', location: 'Dallas, TX', category: 'Commercial' },
  { id: 4, title: 'Bathroom Mirror', location: 'Fort Worth, TX', category: 'Mirrors' },
  { id: 5, title: 'Patio Screens', location: 'Frisco, TX', category: 'Screens' },
  { id: 6, title: 'Glass Partition', location: 'Plano, TX', category: 'Commercial' },
];

export default function Gallery() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="gallery" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Featured Projects</h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Real work from real clients across DFW
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <svg className="w-16 h-16 text-text-muted opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>

              <motion.div
                animate={hoveredId === project.id ? { opacity: 1 } : { opacity: 0 }}
                className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all"
              >
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.location}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
