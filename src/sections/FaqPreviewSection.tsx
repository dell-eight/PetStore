import { RevealSection } from "@/components/layout/RevealSection";
import { faqItems } from "@/constants/site";

export function FaqPreviewSection() {
  return (
    <RevealSection className="faq-preview" id="faq" ariaLabel="WagTrail frequently asked questions preview">
      <div className="section-heading">
        <p className="eyebrow">FAQ preview</p>
        <h2>Short answers before the full policy pages arrive.</h2>
      </div>
      <div className="faq-list">
        {faqItems.map((item) => (
          <article className="faq-item" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </RevealSection>
  );
}
