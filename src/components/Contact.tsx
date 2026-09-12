'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-gradient-to-b from-white to-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">Ready to Start?</h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Contact us for your free estimate or ask any questions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg p-8 shadow-card border border-border-light text-center"
          >
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-lg font-bold text-text-primary mb-2">Call Us</h3>
            <p className="text-primary font-bold text-xl">(469) 616-5555</p>
            <p className="text-text-muted text-sm mt-2">Available Mon-Sat, 8am-6pm</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg p-8 shadow-card border border-border-light text-center"
          >
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-lg font-bold text-text-primary mb-2">Service Area</h3>
            <p className="text-text-muted">Dallas, Fort Worth, Arlington, and surrounding DFW areas</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg p-8 shadow-card border border-border-light text-center"
          >
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-lg font-bold text-text-primary mb-2">Text Us</h3>
            <p className="text-text-muted">Quick responses to your questions via text</p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-lift border border-border-light"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg-card border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-bg-card border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                required
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-bg-card border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              required
            />
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 bg-bg-card border border-border-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              required
            ></textarea>
            <button type="submit" className="btn-primary w-full">
              Request Free Estimate
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
