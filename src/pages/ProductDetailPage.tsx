import { useMemo, useState } from "react";
import { ArrowLeft, Check, Minus, Plus, ShoppingBag, Zap } from "lucide-react";
import { useCart } from "@/cart/CartContext";
import { ProductCard } from "@/components/product/ProductCard";
import { formatPrice, getProductBySlug, products } from "@/data/products";

type ProductDetailPageProps = {
  slug: string;
};

export function ProductDetailPage({ slug }: ProductDetailPageProps) {
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const relatedProducts = useMemo(() => products.filter((item) => item.slug !== slug), [slug]);

  if (!product) {
    return (
      <section className="page-shell empty-page">
        <p className="eyebrow">Product not found</p>
        <h1>This WagTrail product is not available.</h1>
        <a className="button button-primary" href="/products">
          Back to Products
        </a>
      </section>
    );
  }

  function handleAddToCart() {
    if (!product) return;
    addItem(product.id, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  function handleBuyNow() {
    if (!product) return;
    addItem(product.id, quantity);
    window.history.pushState({}, "", "/cart");
    window.dispatchEvent(new PopStateEvent("popstate"));
  }

  return (
    <section className="page-shell product-detail-page">
      <a className="back-link" href="/products">
        <ArrowLeft size={18} />
        Products
      </a>

      <div className="product-detail-layout">
        <div className="product-gallery">
          <div className="product-gallery-main">
            <img src={product.image} alt={`${product.name} product visual`} />
          </div>
          <p>{product.imageRequirement}</p>
        </div>

        <article className="purchase-panel">
          <span className="product-tag">{product.tag}</span>
          <h1>{product.name}</h1>
          <strong className="detail-price">{formatPrice(product.price)}</strong>
          <p>{product.shortDescription}</p>
          <p className="checkout-note">Secure checkout. Local PH payment options available through PayMongo.</p>

          <div className="quantity-row">
            <span>Quantity</span>
            <div className="quantity-control">
              <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} aria-label="Decrease quantity">
                <Minus size={16} />
              </button>
              <strong>{quantity}</strong>
              <button type="button" onClick={() => setQuantity((current) => Math.min(99, current + 1))} aria-label="Increase quantity">
                <Plus size={16} />
              </button>
            </div>
          </div>

          <div className="detail-actions">
            <button className="button button-primary" type="button" onClick={handleAddToCart}>
              <ShoppingBag size={18} />
              {added ? "Added to Cart" : "Add to Cart"}
            </button>
            <button className="button button-secondary" type="button" onClick={handleBuyNow}>
              <Zap size={18} />
              Buy Now
            </button>
          </div>

          <div className="purchase-reassurance">
            <p>{product.shippingNote}</p>
            <p>Return and refund terms are being finalized before public launch.</p>
          </div>
        </article>
      </div>

      <div className="detail-content-grid">
        <article>
          <h2>Product Details</h2>
          <p>{product.fullDescription}</p>
        </article>
        <article>
          <h2>Benefits</h2>
          <ul>
            {product.benefits.map((benefit) => (
              <li key={benefit}>
                <Check size={16} />
                {benefit}
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h2>Features</h2>
          <ul>
            {product.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </article>
        <article>
          <h2>Included + Care</h2>
          <ul>
            {[...product.includedItems, ...product.careInstructions].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="related-products">
        <div className="section-heading">
          <p className="eyebrow">Related products</p>
          <h2>Complete the walking kit.</h2>
        </div>
        <div className="product-grid">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
