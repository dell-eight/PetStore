import { checkoutConfidenceItems } from "@/constants/site";

type CheckoutConfidenceProps = {
  compact?: boolean;
};

export function CheckoutConfidence({ compact = false }: CheckoutConfidenceProps) {
  return (
    <div className={`checkout-confidence ${compact ? "checkout-confidence-compact" : ""}`} aria-label="Checkout confidence details">
      {checkoutConfidenceItems.map((item) => {
        const Icon = item.icon;

        return (
          <div className="checkout-confidence-item" key={item.title}>
            <span aria-hidden="true">
              <Icon size={17} />
            </span>
            <div>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
