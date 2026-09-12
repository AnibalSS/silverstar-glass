'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    city: 'Dallas, TX',
    quote: 'Silverstar installed beautiful new windows in our home. The team was professional, clean, and finished on time. Highly recommend!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    city: 'Arlington, TX',
    quote: 'Best glass shop in DFW. Custom shower enclosure turned out absolutely stunning. Great communication throughout.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Jessica Martinez',
    city: 'Fort Worth, TX',
    quote: 'Free estimate was super helpful. No pressure, just honest advice. They did exactly what they promised.',
    rating: 5,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
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

export default function Testimonials() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">What Clients Say</h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Real feedback from real customers
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className="bg-bg-card rounded-lg p-8 border border-border-light shadow-card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-lg">⭐</span>
                ))}
              </div>

              <p className="text-text-primary leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-border-light pt-4">
                <p className="font-bold text-text-primary">{testimonial.name}</p>
                <p className="text-sm text-text-muted">{testimonial.city}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
