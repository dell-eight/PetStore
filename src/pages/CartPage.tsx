import { useState } from "react";
import { CartLineItem } from "@/components/cart/CartLineItem";
import { useCart } from "@/cart/CartContext";
import { CheckoutConfidence } from "@/components/ui/CheckoutConfidence";
import { formatPrice } from "@/data/products";
import { createPayMongoCheckout } from "@/lib/checkout";

export function CartPage() {
  const { count, detailedItems, items, subtotal } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleCheckout() {
    setLoading(true);
    setError("");
    try {
      const checkoutUrl = await createPayMongoCheckout(items);
      window.location.href = checkoutUrl;
    } catch (checkoutError) {
      setError(checkoutError instanceof Error ? checkoutError.message : "Checkout could not be started.");
      setLoading(false);
    }
  }

  return (
    <section className="page-shell cart-page">
      <div className="section-heading">
        <p className="eyebrow">Cart</p>
        <h1>Review your WagTrail kit.</h1>
      </div>

      {count === 0 ? (
        <div className="empty-page">
          <h2>Your cart is empty.</h2>
          <p>Add walking essentials before starting checkout.</p>
          <a className="button button-primary" href="/products">
            Continue Shopping
          </a>
        </div>
      ) : (
        <div className="cart-page-layout">
          <div className="cart-line-list">
            {detailedItems.map((item) => (
              <CartLineItem key={item.productId} item={item} />
            ))}
          </div>
          <aside className="cart-summary cart-page-summary">
            <h2>Order Summary</h2>
            <div className="cart-summary-row">
              <span>Subtotal</span>
              <strong>{formatPrice(subtotal)}</strong>
            </div>
            <p>Shipping details will be confirmed before fulfillment.</p>
            {error && <p className="form-error">{error}</p>}
            <button className="button button-primary" type="button" onClick={handleCheckout} disabled={loading}>
              {loading ? "Starting checkout..." : "Checkout with PayMongo"}
            </button>
            <a className="button button-secondary" href="/products">
              Continue Shopping
            </a>
            <CheckoutConfidence compact />
          </aside>
        </div>
      )}
    </section>
  );
}
