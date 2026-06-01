import { Menu, Phone, Search, ShoppingBag } from "lucide-react";
import logoImage from "@assets/Logo.png";
import { useCart } from "@/cart/CartContext";
import { IconButton } from "@/components/ui/IconButton";
import { navItems } from "@/constants/site";
import { isNavItemActive, type CurrentLocation } from "@/lib/navigation";

type HeaderProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  currentLocation: CurrentLocation;
};

export function Header({ menuOpen, setMenuOpen, currentLocation }: HeaderProps) {
  const { count, openCart } = useCart();

  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="#" aria-label="WagTrail home">
        <span className="brand-mark" aria-hidden="true">
          <img src={logoImage} alt="" />
        </span>
        <span>WagTrail</span>
      </a>

      <nav className="desktop-nav" aria-label="Main menu">
        {navItems.map((item) => {
          const active = isNavItemActive(item, currentLocation);

          return (
            <a key={item.href} className={active ? "is-active" : undefined} href={item.href} aria-current={active ? "page" : undefined}>
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="header-actions">
        <IconButton label="Search">
          <Search size={20} />
        </IconButton>
        <button className="icon-button cart-icon-button" type="button" aria-label={`Open cart with ${count} items`} onClick={openCart}>
          <ShoppingBag size={20} />
          {count > 0 && <span className="cart-count">{count}</span>}
        </button>
        <a className="icon-button" href="/contact" aria-label="Contact WagTrail">
          <Phone size={20} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
