import { motion, useReducedMotion } from "framer-motion";
import { motionTiming, reveal } from "@/lib/motion";

type RevealSectionProps = {
  children: React.ReactNode;
  className: string;
  id?: string;
  ariaLabel?: string;
};

export function RevealSection({ children, className, id, ariaLabel }: RevealSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      id={id}
      aria-label={ariaLabel}
      variants={reveal}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.18 }}
      transition={motionTiming}
    >
      {children}
    </motion.section>
  );
}
