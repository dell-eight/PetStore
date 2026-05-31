import { motion } from "framer-motion";
import { RevealSection } from "@/components/layout/RevealSection";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { sectionItem, sectionStagger } from "@/lib/motion";

export function ProductShowcase() {
  return (
    <RevealSection className="products" id="shop" stagger>
      <motion.div className="section-heading" variants={sectionItem}>
        <p className="eyebrow">Walk-ready favorites</p>
        <h2 id="products">Everything for the route, rinse, and ride.</h2>
      </motion.div>
      <motion.div className="product-grid" variants={sectionStagger}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>
    </RevealSection>
  );
}
