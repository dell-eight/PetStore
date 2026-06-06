import { useEffect, useState } from "react";
import { CartProvider } from "@/cart/CartContext";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { CartPage } from "@/pages/CartPage";
import { CheckoutCancelPage, CheckoutSuccessPage } from "@/pages/CheckoutStatusPages";
import { ContactPage } from "@/pages/ContactPage";
import { FaqPage } from "@/pages/FaqPage";
import { HomePage } from "@/pages/HomePage";
import { ProductDetailPage } from "@/pages/ProductDetailPage";
import { ProductsPage } from "@/pages/ProductsPage";
import { Header } from "@/sections/Header";
import { MobileNav, MobileQuickCta } from "@/sections/MobileNav";
import { getCurrentLocation } from "@/lib/navigation";

function renderRoute(pathname: string) {
  if (pathname === "/") return <HomePage />;
  if (pathname === "/products") return <ProductsPage />;
  if (pathname === "/faq") return <FaqPage />;
  if (pathname === "/cart") return <CartPage />;
  if (pathname === "/contact") return <ContactPage />;
  if (pathname === "/checkout/success") return <CheckoutSuccessPage />;
  if (pathname === "/checkout/cancel") return <CheckoutCancelPage />;

  const productMatch = pathname.match(/^\/products\/([^/]+)$/);
  if (productMatch) return <ProductDetailPage slug={decodeURIComponent(productMatch[1])} />;

  return (
    <section className="page-shell empty-page">
      <p className="eyebrow">404</p>
      <h1>This WagTrail page is not available.</h1>
      <a className="button button-primary" href="/">
        Back Home
      </a>
    </section>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentLocation, setCurrentLocation] = useState(getCurrentLocation);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link || link.target || link.hasAttribute("download")) return;

      const url = new URL(link.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname.startsWith("/api/")) return;

      event.preventDefault();
      window.history.pushState({}, "", `${url.pathname}${url.search}${url.hash}`);
      setCurrentLocation(getCurrentLocation());

      if (url.hash) {
        window.setTimeout(() => document.querySelector(url.hash)?.scrollIntoView({ behavior: "smooth" }), 0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }

    function handlePopState() {
      setCurrentLocation(getCurrentLocation());
    }

    document.addEventListener("click", handleClick);
    window.addEventListener("popstate", handlePopState);
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <CartProvider>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} currentLocation={currentLocation} />
      <MobileNav open={menuOpen} currentLocation={currentLocation} onNavigate={() => setMenuOpen(false)} />
      <MobileQuickCta currentLocation={currentLocation} />
      <CartDrawer />
      <main>{renderRoute(currentLocation.pathname)}</main>
    </CartProvider>
  );
}

export default App;
