import { RevealSection } from "@/components/layout/RevealSection";
import { trustItems } from "@/constants/site";

export function TrustRow() {
  return (
    <RevealSection className="trust-row" ariaLabel="Why pet owners choose WagTrail">
      {trustItems.map((item) => (
        <div key={item.label}>
          <span aria-hidden="true">
            <img src={item.image} alt="" />
          </span>
          <p>{item.label}</p>
        </div>
      ))}
    </RevealSection>
  );
}
