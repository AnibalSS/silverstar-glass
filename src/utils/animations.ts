import { motion, Variants } from 'framer-motion';

/**
 * Fade-in + slide-up animation
 * Used for section entrances and card animations
 */
export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

/**
 * Scale-in animation
 * Used for hero images and cards
 */
export const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

/**
 * Staggered container animation
 * Used to stagger child animations
 */
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/**
 * Staggered item animation
 * Used as children of staggerContainer
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};
