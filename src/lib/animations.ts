import type { Variants } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
};

export const fadeInUpTransition = {
  duration: 0.6,
  ease,
};

export const fadeInLeft: Variants = {
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
};

export const fadeInRight: Variants = {
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  whileInView: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  initial: {},
  whileInView: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};

export const viewportOnce = { once: true, margin: "-100px" } as const;

export const defaultTransition = { duration: 0.6, ease };
