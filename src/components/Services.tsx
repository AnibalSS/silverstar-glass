'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    id: 1,
    title: 'Windows',
    description: 'Energy-efficient residential and commercial window installations with precision craftsmanship.',
    icon: '🪟',
  },
  {
    id: 2,
    title: 'Residential & Commercial Glass',
    description: 'Custom glass solutions tailored to your home or business needs with professional expertise.',
    icon: '🏢',
  },
  {
    id: 3,
    title: 'Custom Mirrors',
    description: 'Beautifully crafted mirrors to enhance any space with style and functionality.',
    icon: '✨',
  },
  {
    id: 4,
    title: 'Shower Enclosures',
    description: 'Elegant and durable shower glass installations with clean, modern designs.',
    icon: '🚿',
  },
  {
    id: 5,
    title: 'Screens',
    description: 'Custom-fit screens for windows and doors to keep your space comfortable and secure.',
    icon: '🔲',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Our Services</h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Comprehensive glass solutions for every need
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-card border border-border-light shadow-card hover:shadow-lift hover:border-primary transition-all duration-300 p-6 cursor-pointer"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-primary font-medium text-sm hover:gap-2 transition-all"
              >
                Learn more
                <span className="ml-1">→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
