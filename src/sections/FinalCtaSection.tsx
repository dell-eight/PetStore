import { motion } from "framer-motion";
import { RevealSection } from "@/components/layout/RevealSection";
import { sectionItem } from "@/lib/motion";

export function FinalCtaSection() {
  return (
    <RevealSection className="faq-band" stagger>
      <motion.div variants={sectionItem}>
        <p className="eyebrow">Built for outside</p>
        <h2>Ready to shape the launch kit around real walking routines.</h2>
      </motion.div>
      <motion.a className="button button-primary" href="/contact" variants={sectionItem}>
        Contact WagTrail
      </motion.a>
    </RevealSection>
  );
}
