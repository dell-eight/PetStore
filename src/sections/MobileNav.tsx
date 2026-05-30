import { Phone, ShoppingBag } from "lucide-react";
import { navItems } from "@/constants/site";
import { slugifyNavItem } from "@/lib/slugify";

type MobileNavProps = {
  open: boolean;
  onNavigate: () => void;
};

export function MobileNav({ open, onNavigate }: MobileNavProps) {
  return (
    <nav className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile menu">
      {navItems.map((item) => (
        <a key={item} href={`#${slugifyNavItem(item)}`} onClick={onNavigate}>
          {item}
        </a>
      ))}
    </nav>
  );
}

export function MobileQuickCta() {
  return (
    <nav className="mobile-quick-cta" aria-label="Quick shopping actions">
      <a href="#shop">
        <ShoppingBag size={18} />
        <span>Shop Kit</span>
      </a>
      <a href="mailto:hello@wagtrail.example">
        <Phone size={18} />
        <span>Contact</span>
      </a>
    </nav>
  );
}
