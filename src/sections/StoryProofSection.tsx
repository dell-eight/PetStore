import { RevealSection } from "@/components/layout/RevealSection";
import { proofIcon as HeartHandshake } from "@/constants/site";

export function StoryProofSection() {
  return (
    <RevealSection className="story-proof" ariaLabel="WagTrail about and social proof preview">
      <article className="about-preview">
        <p className="eyebrow">Why WagTrail</p>
        <h2>Built around cleaner exits, lighter pockets, and less walk-day scramble.</h2>
        <p>
          WagTrail focuses on the practical little moments around pet outings: water on the route, paws before the car,
          and one place for the things owners always reach for.
        </p>
      </article>
      <article className="proof-preview">
        <span className="proof-icon" aria-hidden="true">
          <HeartHandshake size={24} />
        </span>
        <h3>Social proof status</h3>
        <p>
          Verified customer reviews are not published yet. Early product feedback and owner testing notes will be added
          once the pre-launch review process is complete.
        </p>
      </article>
    </RevealSection>
  );
}
