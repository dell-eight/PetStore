import { X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/cart/CartContext";
import { CartLineItem } from "@/components/cart/CartLineItem";
import { CheckoutConfidence } from "@/components/ui/CheckoutConfidence";
import { formatPrice } from "@/data/products";
import { createPayMongoCheckout } from "@/lib/checkout";

export function CartDrawer() {
  const { closeCart, count, detailedItems, drawerOpen, items, subtotal } = useCart();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setError("");
    setLoading(true);
    try {
      const checkoutUrl = await createPayMongoCheckout(items);
      window.location.href = checkoutUrl;
    } catch (checkoutError) {
      setError(checkoutError instanceof Error ? checkoutError.message : "Checkout could not be started.");
      setLoading(false);
    }
  }

  return (
    <>
      <button
        className={`cart-backdrop ${drawerOpen ? "is-open" : ""}`}
        type="button"
        aria-label="Close cart"
        onClick={closeCart}
      />
      <aside className={`cart-drawer ${drawerOpen ? "is-open" : ""}`} aria-label="Shopping cart" aria-hidden={!drawerOpen}>
        <div className="cart-drawer-header">
          <div>
            <p className="eyebrow">Your kit</p>
            <h2>Cart</h2>
          </div>
          <button type="button" aria-label="Close cart" onClick={closeCart}>
            <X size={20} />
          </button>
        </div>

        {count === 0 ? (
          <div className="cart-empty-state">
            <h3>Your cart is ready for walk essentials.</h3>
            <p>Add TrailSip, PawPure, or TrailPack to build your first WagTrail kit.</p>
            <a className="button button-primary" href="/products" onClick={closeCart}>
              Shop Products
            </a>
          </div>
        ) : (
          <>
            <div className="cart-line-list">
              {detailedItems.map((item) => (
                <CartLineItem key={item.productId} item={item} />
              ))}
            </div>
            <div className="cart-summary">
              <div className="cart-summary-row">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <p>Shipping details will be confirmed before fulfillment.</p>
              {error && <p className="form-error">{error}</p>}
              <button className="button button-primary" type="button" onClick={handleCheckout} disabled={loading}>
                {loading ? "Starting checkout..." : "Checkout with PayMongo"}
              </button>
              <a className="button button-secondary" href="/cart" onClick={closeCart}>
                View Full Cart
              </a>
              <CheckoutConfidence compact />
            </div>
          </>
        )}
      </aside>
    </>
  );
}
