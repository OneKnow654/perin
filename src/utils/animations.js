// ─── Framer Motion Variants (Apple-smooth, spring-based) ───────────────────

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.0,
    },
  },
};

// Apple-style spring for interactive elements
export const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

// Viewport config (trigger once when 10% visible)
export const viewport = { once: true, amount: 0.1 };

export const slideBlur = {
  initial: { x: 30, opacity: 0, filter: "blur(8px)" },
  animate: { x: 0, opacity: 1, filter: "blur(0px)" },
  exit: { x: -30, opacity: 0, filter: "blur(8px)" },
  transition: { duration: 0.45, ease: [0.65, 0, 0.35, 1] }
};
