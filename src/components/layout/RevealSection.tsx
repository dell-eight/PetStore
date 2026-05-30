import { motion, useReducedMotion } from "framer-motion";
import { motionTiming, reveal } from "@/lib/motion";

type RevealSectionProps = {
  children: React.ReactNode;
  className: string;
  id?: string;
  ariaLabel?: string;
};

function keepRevealOnCompositor(_: unknown, generatedTransform: string) {
  return generatedTransform === "none" ? "translateZ(0)" : `${generatedTransform} translateZ(0)`;
}

export function RevealSection({ children, className, id, ariaLabel }: RevealSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={`${className} reveal-section`}
      id={id}
      aria-label={ariaLabel}
      variants={reveal}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.18 }}
      transition={motionTiming}
      transformTemplate={keepRevealOnCompositor}
    >
      {children}
    </motion.section>
  );
}
