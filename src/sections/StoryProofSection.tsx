import { motion, useReducedMotion } from "framer-motion";
import { RevealSection } from "@/components/layout/RevealSection";
import { proofIcon as HeartHandshake } from "@/constants/site";
import { cardItem } from "@/lib/motion";

export function StoryProofSection() {
  const reduceMotion = useReducedMotion();

  return (
    <RevealSection className="story-proof" ariaLabel="WagTrail about and social proof preview" stagger>
      <motion.article className="about-preview" variants={reduceMotion ? undefined : cardItem}>
        <p className="eyebrow">Why WagTrail</p>
        <h2>Built around cleaner exits, lighter pockets, and less walk-day scramble.</h2>
        <p>
          WagTrail focuses on the practical little moments around pet outings: water on the route, paws before the car,
          and one place for the things owners always reach for.
        </p>
      </motion.article>
      <motion.article className="proof-preview" variants={reduceMotion ? undefined : cardItem}>
        <span className="proof-icon" aria-hidden="true">
          <HeartHandshake size={24} />
        </span>
        <h3>Social proof status</h3>
        <p>
          Verified customer reviews are not published yet. Early product feedback and owner testing notes will be added
          once the pre-launch review process is complete.
        </p>
      </motion.article>
    </RevealSection>
  );
}
