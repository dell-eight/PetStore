import { Phone, ShoppingBag } from "lucide-react";
import { navItems } from "@/constants/site";
import { isNavItemActive, type CurrentLocation } from "@/lib/navigation";

type MobileNavProps = {
  open: boolean;
  currentLocation: CurrentLocation;
  onNavigate: () => void;
};

export function MobileNav({ open, currentLocation, onNavigate }: MobileNavProps) {
  return (
    <nav className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile menu">
      {navItems.map((item) => {
        const active = isNavItemActive(item, currentLocation);

        return (
          <a
            key={item.href}
            className={active ? "is-active" : undefined}
            href={item.href}
            aria-current={active ? "page" : undefined}
            onClick={onNavigate}
          >
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}

export function MobileQuickCta({ currentLocation }: { currentLocation: CurrentLocation }) {
  const showQuickCta = currentLocation.pathname === "/" || currentLocation.pathname === "/products";

  if (!showQuickCta) return null;

  return (
    <nav className="mobile-quick-cta" aria-label="Quick shopping actions">
      <a href="/#shop">
        <ShoppingBag size={18} />
        <span>Shop Kit</span>
      </a>
      <a href="/contact">
        <Phone size={18} />
        <span>Contact</span>
      </a>
    </nav>
  );
}
