import { motion, useReducedMotion } from "framer-motion";
import { motionTiming } from "@/lib/motion";
import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className="product-card"
      id={product.id}
      whileHover={reduceMotion ? undefined : { y: -8, rotateX: 1.5, rotateY: -1.5 }}
      transition={motionTiming}
    >
      <div className={`product-art ${product.art}`} aria-hidden="true" />
      <span className="product-tag">{product.tag}</span>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <ul className="product-benefits" aria-label={`${product.name} benefits`}>
        {product.benefits.map((benefit) => (
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
          <strong>{product.price}</strong>
          <span>{product.priceNote}</span>
        </div>
        <a href={`#${product.id}`} aria-label={`${product.cta}: ${product.name}`}>
          {product.cta}
        </a>
      </div>
    </motion.article>
  );
}
