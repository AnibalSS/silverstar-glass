'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-primary">
            ✨ Silverstar
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <Link href="#services" className="text-text-primary hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#gallery" className="text-text-primary hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link href="#process" className="text-text-primary hover:text-primary transition-colors">
              Process
            </Link>
            <Link href="#contact" className="text-text-primary hover:text-primary transition-colors">
              Contact
            </Link>
            <button className="btn-primary text-sm">
              Free Estimate
            </button>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-bg-card border-t border-border-light"
        >
          <div className="px-4 py-4 space-y-3">
            <Link href="#services" className="block text-text-primary hover:text-primary">
              Services
            </Link>
            <Link href="#gallery" className="block text-text-primary hover:text-primary">
              Gallery
            </Link>
            <Link href="#process" className="block text-text-primary hover:text-primary">
              Process
            </Link>
            <Link href="#contact" className="block text-text-primary hover:text-primary">
              Contact
            </Link>
            <button className="btn-primary w-full text-sm">
              Free Estimate
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
