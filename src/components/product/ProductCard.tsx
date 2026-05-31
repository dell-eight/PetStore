import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/cart/CartContext";
import { cardItem, motionTiming } from "@/lib/motion";
import { formatPrice, type Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const reduceMotion = useReducedMotion();
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleAddToCart() {
    addItem(product.id);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  }

  return (
    <motion.article
      className="product-card"
      id={product.id}
      variants={reduceMotion ? undefined : cardItem}
      whileHover={reduceMotion ? undefined : { y: -8, rotateX: 1.5, rotateY: -1.5 }}
      transition={motionTiming}
    >
      <div className="product-image" aria-hidden="true">
        <img src={product.image} alt="" />
      </div>
      <span className="product-tag">{product.tag}</span>
      <h3>{product.name}</h3>
      <p>{product.shortDescription}</p>
      <ul className="product-benefits" aria-label={`${product.name} benefits`}>
        {product.benefits.slice(0, 3).map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
      <div className="product-use">
        <span>Best for</span>
        <strong>{product.bestFor}</strong>
        <p>{product.buyerNote}</p>
      </div>
      <div className="product-meta">
        <div className="product-price">
          <strong>{formatPrice(product.price)}</strong>
          <span>Pre-launch price</span>
        </div>
        <div className="product-actions">
          <a href={`/products/${product.slug}`} aria-label={`View details: ${product.name}`}>
            View Details
          </a>
          <button type="button" onClick={handleAddToCart} aria-live="polite">
            <ShoppingBag size={16} />
            {added ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </motion.article>
  );
}
