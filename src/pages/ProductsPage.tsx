import { motion, useReducedMotion } from "framer-motion";
import { Leaf, PawPrint, ShoppingBag } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import shopBundleImage from "@assets/products/all-products_2.webp";
import { sectionStagger } from "@/lib/motion";

const shopRevealItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0.01,
    transition: { duration: 0.58, ease: [0.2, 0.7, 0.2, 1] as const }
  }
};

const shopMockupItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.72, delay: 0.18, ease: [0.2, 0.7, 0.2, 1] as const }
  }
};

const featureChips = [
  {
    icon: Leaf,
    label: "Thoughtfully designed",
    text: "For pets and their humans"
  },
  {
    icon: PawPrint,
    label: "Everyday essential",
    text: "Hydrate, clean, carry"
  },
  {
    icon: ShoppingBag,
    label: "Adventure ready",
    text: "For walks, parks, & travel"
  }
];

export function ProductsPage() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className="page-shell products-page"
      variants={sectionStagger}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? undefined : "visible"}
    >
      <div className="shop-hero" aria-labelledby="shop-page-title">
        <motion.div className="shop-hero-copy" variants={sectionStagger}>
          <motion.p className="eyebrow shop-eyebrow" variants={shopRevealItem}>
            Shop all products
          </motion.p>
          <motion.h1 id="shop-page-title" variants={shopRevealItem}>
            Walk essentials
            <span>for cleaner,</span>
            <span>easier outings.</span>
          </motion.h1>
          <motion.p variants={shopRevealItem}>
            Shop the first WagTrail pre-launch kit: hydration, cleanup, and carry gear for daily pet routines.
          </motion.p>
          <motion.div className="shop-feature-chips" variants={sectionStagger}>
            {featureChips.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div className="shop-feature-chip" key={item.label} variants={shopRevealItem}>
                  <span aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <div>
                    <strong>{item.label}</strong>
                    <small>{item.text}</small>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.div className="shop-hero-art" variants={shopMockupItem} aria-label="WagTrail walk essentials bundle">
          <img className="shop-bundle-image" src={shopBundleImage} alt="TrailSip, TrailPack, and PawPure product bundle" />
        </motion.div>
      </div>

      <motion.div className="shop-products-heading" variants={shopRevealItem}>
        <div aria-hidden="true" />
        <h2>Our Walk Essentials</h2>
        <div aria-hidden="true" />
        <p>Everything you need for cleaner, happier adventures together.</p>
      </motion.div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </motion.section>
  );
}
