import { motion, useReducedMotion } from "framer-motion";
import { RevealSection } from "@/components/layout/RevealSection";
import { reassuranceItems } from "@/constants/site";
import { cardItem, sectionItem, sectionStagger } from "@/lib/motion";

export function ConversionSection() {
  const reduceMotion = useReducedMotion();

  return (
    <RevealSection className="conversion" id="trust" ariaLabel="WagTrail trust and conversion information" stagger>
      <motion.div className="section-heading" variants={sectionItem}>
        <p className="eyebrow">Before checkout</p>
        <h2>Clear answers for a first-time WagTrail buyer.</h2>
      </motion.div>
      <motion.div className="reassurance-grid" variants={sectionStagger}>
        {reassuranceItems.map((item) => {
          const Icon = item.icon;

          return (
            <motion.article
              className="reassurance-card"
              key={item.title}
              variants={reduceMotion ? undefined : cardItem}
              whileHover={reduceMotion ? undefined : { y: -4 }}
            >
              <span aria-hidden="true">
                <Icon size={22} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </RevealSection>
  );
}
