import { RevealSection } from "@/components/layout/RevealSection";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";

export function ProductShowcase() {
  return (
    <RevealSection className="products" id="shop">
      <div className="section-heading">
        <p className="eyebrow">Walk-ready favorites</p>
        <h2 id="products">Everything for the route, rinse, and ride.</h2>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </RevealSection>
  );
}
