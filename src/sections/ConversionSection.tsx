import { RevealSection } from "@/components/layout/RevealSection";
import { reassuranceItems } from "@/constants/site";

export function ConversionSection() {
  return (
    <RevealSection className="conversion" id="trust" ariaLabel="WagTrail trust and conversion information">
      <div className="section-heading">
        <p className="eyebrow">Before checkout</p>
        <h2>Clear answers for a first-time WagTrail buyer.</h2>
      </div>
      <div className="reassurance-grid">
        {reassuranceItems.map((item) => {
          const Icon = item.icon;

          return (
            <article className="reassurance-card" key={item.title}>
              <span aria-hidden="true">
                <Icon size={22} />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </RevealSection>
  );
}
