export const reveal = {
  hidden: { opacity: 0, y: 26, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export const motionTiming = {
  duration: 0.62,
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
    y: 0,
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
    y: 0,
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
