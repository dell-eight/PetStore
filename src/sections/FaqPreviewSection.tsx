import { motion } from "framer-motion";
import { RevealSection } from "@/components/layout/RevealSection";
import { faqItems } from "@/constants/site";
import { cardItem, sectionItem, sectionStagger } from "@/lib/motion";

export function FaqPreviewSection() {
  const previewItems = faqItems.slice(0, 3);

  return (
    <RevealSection className="faq-preview" id="faq" ariaLabel="WagTrail frequently asked questions preview" stagger>
      <motion.div className="section-heading" variants={sectionItem}>
        <p className="eyebrow">FAQ preview</p>
        <h2>Short answers before the full policy pages arrive.</h2>
        <a className="faq-preview-link" href="/faq">
          View all questions
        </a>
      </motion.div>
      <motion.div className="faq-list" variants={sectionStagger}>
        {previewItems.map((item) => (
          <motion.article className="faq-item" key={item.question} variants={cardItem}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </motion.article>
        ))}
      </motion.div>
    </RevealSection>
  );
}
