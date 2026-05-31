import { motion, useReducedMotion } from "framer-motion";
import { motionTiming, reveal, sectionStagger } from "@/lib/motion";

type RevealSectionProps = {
  children: React.ReactNode;
  className: string;
  id?: string;
  ariaLabel?: string;
  stagger?: boolean;
};

function keepRevealOnCompositor(_: unknown, generatedTransform: string) {
  return generatedTransform === "none" ? "translateZ(0)" : `${generatedTransform} translateZ(0)`;
}

export function RevealSection({ children, className, id, ariaLabel, stagger = false }: RevealSectionProps) {
  const reduceMotion = useReducedMotion();
  const variants = stagger
    ? {
        hidden: reveal.hidden,
        visible: {
          ...reveal.visible,
          transition: sectionStagger.visible.transition
        }
      }
    : reveal;

  return (
    <motion.section
      className={`${className} reveal-section`}
      id={id}
      aria-label={ariaLabel}
      variants={variants}
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
