export const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0.01 }
};

export const sectionStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

export const sectionItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0.01,
    transition: { duration: 0.54, ease: [0.2, 0.7, 0.2, 1] as const }
  }
};

export const cardItem = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0.01,
    scale: 1,
    transition: { duration: 0.58, ease: [0.2, 0.7, 0.2, 1] as const }
  }
};

export const motionTiming = {
  duration: 1.50,
  ease: [0.2, 0.7, 0.2, 1] as const
};

export const heroCopyVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12
    }
  }
};

export const heroItemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0.01,
    transition: motionTiming
  }
};

export const heroTitleVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.18
    }
  }
};

export const heroTitleLineVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0.01,
    transition: { ...motionTiming, duration: 0.72 }
  }
};

export const heroStageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.28
    }
  }
};

export const heroStageItemVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...motionTiming, duration: 0.8 }
  }
};

export const heroFloatVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { ...motionTiming, duration: 0.58 }
  }
};
