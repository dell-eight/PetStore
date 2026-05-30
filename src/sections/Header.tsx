import { Menu, Phone, Search, ShoppingBag } from "lucide-react";
import logoImage from "@assets/Logo_v2.png";
import { IconButton } from "@/components/ui/IconButton";
import { navItems } from "@/constants/site";
import { slugifyNavItem } from "@/lib/slugify";

type HeaderProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="#" aria-label="WagTrail home">
        <span className="brand-mark" aria-hidden="true">
          <img src={logoImage} alt="" />
        </span>
        <span>WagTrail</span>
      </a>

      <nav className="desktop-nav" aria-label="Main menu">
        {navItems.map((item) => (
          <a key={item} href={`#${slugifyNavItem(item)}`}>
            {item}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <IconButton label="Search">
          <Search size={20} />
        </IconButton>
        <IconButton label="Cart">
          <ShoppingBag size={20} />
        </IconButton>
        <IconButton label="Contact WagTrail">
          <Phone size={20} />
        </IconButton>
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
