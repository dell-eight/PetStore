import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, HeartHandshake, Mail, PawPrint, Search, Sparkles } from "lucide-react";
import { useId, useState } from "react";
import { faqItems } from "@/constants/site";
import { sectionStagger } from "@/lib/motion";

const faqRevealItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0.01,
    transition: { duration: 0.58, ease: [0.2, 0.7, 0.2, 1] as const }
  }
};

const faqCardItem = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0.01,
    transition: { duration: 0.5, ease: [0.2, 0.7, 0.2, 1] as const }
  }
};

const supportNotes = [
  "Product fit and walk routines",
  "Delivery and checkout questions",
  "Returns, exchanges, and support"
] as const;

export function FaqPage() {
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <motion.section
      className="page-shell faq-page"
      variants={sectionStagger}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? undefined : "visible"}
    >
      <div className="faq-page-hero" aria-labelledby="faq-page-title">
        <motion.div className="faq-hero-copy" variants={sectionStagger}>
          <motion.p className="eyebrow faq-eyebrow" variants={faqRevealItem}>
            WagTrail answers
          </motion.p>
          <motion.h1 id="faq-page-title" variants={faqRevealItem}>
            Questions before your next walk?
          </motion.h1>
          <motion.p variants={faqRevealItem}>
            Quick, friendly answers about products, delivery, payment options, and support before you build your
            pet's walk kit.
          </motion.p>
        </motion.div>

        <motion.aside className="faq-support-card" variants={faqRevealItem} aria-label="FAQ support summary">
          <span className="faq-support-icon" aria-hidden="true">
            <HeartHandshake size={26} />
          </span>
          <div>
            <strong>Need a paw-by-paw answer?</strong>
            <p>We keep answers simple, but support is nearby when your question needs a little extra care.</p>
          </div>
          <ul aria-label="Common support topics">
            {supportNotes.map((note) => (
              <li key={note}>
                <PawPrint size={15} aria-hidden="true" />
                {note}
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>

      <div className="faq-page-layout">
        <motion.div className="faq-decor-panel" variants={faqRevealItem} aria-hidden="true">
          <span className="faq-decor-badge">
            <Search size={22} />
          </span>
          <strong>Walk kit clarity</strong>
          <p>Helpful notes for cleaner outings, easier packing, and happier pets.</p>
          <div className="faq-decor-paws">
            <PawPrint size={22} />
            <Sparkles size={18} />
            <PawPrint size={18} />
          </div>
        </motion.div>

        <motion.div className="faq-accordion" variants={sectionStagger}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `${baseId}-faq-panel-${index}`;
            const buttonId = `${baseId}-faq-button-${index}`;

            return (
              <motion.article className={`faq-accordion-item ${isOpen ? "is-open" : ""}`} key={item.question} variants={faqCardItem}>
                <button
                  id={buttonId}
                  className="faq-accordion-trigger"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="faq-question-index">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item.question}</span>
                  <ChevronDown className="faq-chevron" size={22} aria-hidden="true" />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="faq-accordion-panel"
                      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                      animate={reduceMotion ? undefined : { height: "auto", opacity: 1 }}
                      exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.24, ease: [0.2, 0.7, 0.2, 1] }}
                    >
                      <p>{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      <motion.div className="faq-contact-cta" variants={faqRevealItem}>
        <div>
          <span aria-hidden="true">
            <Mail size={22} />
          </span>
          <div>
            <h2>Still need help?</h2>
            <p>Send us a message and we'll help with product questions, order concerns, or support details.</p>
          </div>
        </div>
        <a className="button button-primary" href="/contact">
          Send us a message
        </a>
      </motion.div>
    </motion.section>
  );
}
