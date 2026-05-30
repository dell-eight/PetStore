export function CheckoutSuccessPage() {
  return (
    <section className="page-shell checkout-status-page">
      <p className="eyebrow">Checkout received</p>
      <h1>Thank you for testing WagTrail checkout.</h1>
      <p>
        Payment confirmation and order processing are being prepared for pre-launch testing. We will confirm your order
        details through email or the contact form during this stage.
      </p>
      <div className="status-actions">
        <a className="button button-primary" href="/products">
          Continue Shopping
        </a>
        <a className="button button-secondary" href="/contact">
          Contact WagTrail
        </a>
      </div>
    </section>
  );
}

export function CheckoutCancelPage() {
  return (
    <section className="page-shell checkout-status-page">
      <p className="eyebrow">Checkout canceled</p>
      <h1>Your checkout was not completed.</h1>
      <p>Your cart remains available so you can review your kit or continue shopping.</p>
      <div className="status-actions">
        <a className="button button-primary" href="/cart">
          Back to Cart
        </a>
        <a className="button button-secondary" href="/products">
          Continue Shopping
        </a>
      </div>
    </section>
  );
}
