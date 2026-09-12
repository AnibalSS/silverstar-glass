'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileActionBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show action bar only on mobile
    const checkMobile = () => {
      setIsVisible(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-border-light shadow-lift"
      >
        <div className="flex gap-3 p-4 max-w-7xl mx-auto">
          <a
            href="tel:+14696165555"
            className="flex-1 px-4 py-3 bg-primary text-white rounded-lg font-medium text-center transition-all hover:shadow-lift active:scale-95"
          >
            📞 Call Now
          </a>
          <button className="flex-1 px-4 py-3 border-2 border-primary text-primary rounded-lg font-medium text-center transition-all hover:bg-primary hover:text-white active:scale-95">
            ✨ Get Quote
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
