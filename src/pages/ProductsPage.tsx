import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";

export function ProductsPage() {
  return (
    <section className="page-shell products-page">
      <div className="section-heading">
        <p className="eyebrow">All products</p>
        <h1>Walk essentials for cleaner, easier outings.</h1>
        <p>Shop the first WagTrail pre-launch kit: hydration, cleanup, and carry gear for daily pet routines.</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
