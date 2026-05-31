import { motion, useReducedMotion } from "framer-motion";
import { RevealSection } from "@/components/layout/RevealSection";
import { trustItems } from "@/constants/site";
import { cardItem } from "@/lib/motion";

export function TrustRow() {
  const reduceMotion = useReducedMotion();

  return (
    <RevealSection className="trust-row" ariaLabel="Why pet owners choose WagTrail" stagger>
      {trustItems.map((item) => (
        <motion.div
          key={item.label}
          variants={reduceMotion ? undefined : cardItem}
          whileHover={reduceMotion ? undefined : { y: -3 }}
          transition={{ duration: 0.24 }}
        >
          <span aria-hidden="true">
            <img src={item.image} alt="" />
          </span>
          <p>{item.label}</p>
        </motion.div>
      ))}
    </RevealSection>
  );
}
