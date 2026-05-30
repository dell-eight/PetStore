import { motion, useReducedMotion } from "framer-motion";
import { ClipboardCheck, HeartHandshake, Menu, Phone, RotateCcw, Search, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import { useState } from "react";
import heroImage from "../assets/hero_image_petStore_v3-optimized.jpg";
import { products, type Product } from "./data/products";

const navItems = ["Shop", "Hydration", "Cleaning", "Travel Bags", "FAQ"];

const trustItems = [
  ["*", "Made for daily walks"],
  ["+", "Easy outdoor cleanup"],
  ["^", "Travel-friendly essentials"],
  ["OK", "Feedback in progress"]
];

const reassuranceItems = [
  {
    icon: Truck,
    title: "Shipping clarity before launch",
    text: "Shipping windows and delivery regions will be published before checkout opens."
  },
  {
    icon: RotateCcw,
    title: "Returns under review",
    text: "Return and refund terms are being finalized so buyers know what to expect before purchasing."
  },
  {
    icon: ShieldCheck,
    title: "Secure checkout planned",
    text: "Payments will run through the selected ecommerce checkout provider, not through this static preview."
  },
  {
    icon: ClipboardCheck,
    title: "Care notes included",
    text: "Each walking essential will ship with simple rinse, dry, and storage guidance."
  }
];

const faqItems = [
  {
    question: "Are WagTrail products available now?",
    answer: "This is a pre-launch homepage. Final product pages, inventory, and checkout are still being prepared."
  },
  {
    question: "Which item should I start with?",
    answer: "TrailSip is the easiest daily pick, PawPure is for muddy paws, and TrailPack keeps the full kit together."
  },
  {
    question: "What are the shipping and return details?",
    answer: "The exact shipping regions, delivery timing, and return window will be reviewed before checkout goes live."
  }
];

const reveal = {
  hidden: { opacity: 0, y: 26, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

const motionTiming = {
  duration: 0.62,
  ease: [0.2, 0.7, 0.2, 1] as const
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileNav open={menuOpen} onNavigate={() => setMenuOpen(false)} />
      <MobileQuickCta />
      <main>
        <section className="hero">
          <motion.div
            className="hero-copy"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ ...motionTiming, duration: 0.7 }}
          >
            <p className="eyebrow">Welcome to WagTrail</p>
            <h1>
              <span>PET</span>
              <span>WALKS</span>
              <span>MADE</span>
              <span>EASIER</span>
            </h1>
            <p className="hero-text">
              Hydrate, clean, and carry everything your pet needs for walks, parks, road trips, and everyday
              outdoor adventures.
            </p>
            <div className="hero-ctas" aria-label="Hero actions">
              <a className="button button-primary" href="#shop">
                Shop Walk Essentials
              </a>
              <a className="button button-secondary" href="#products">
                Build Your Walk Kit
              </a>
            </div>
            <p className="hero-assurance">Pre-launch walk kits for cleaner outings, easier packing, and happier pets.</p>
            <div className="hero-metrics" aria-label="WagTrail highlights">
              <span>
                <strong>3</strong> essentials
              </span>
              <span>
                <strong>1</strong> daily kit
              </span>
            </div>
          </motion.div>

          <HeroStage reduceMotion={reduceMotion ?? false} />
        </section>

        <RevealSection className="trust-row" ariaLabel="Why pet owners choose WagTrail">
          {trustItems.map(([icon, label]) => (
            <div key={label}>
              <span aria-hidden="true">{icon}</span>
              <p>{label}</p>
            </div>
          ))}
        </RevealSection>

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

        <RevealSection className="conversion" id="trust" ariaLabel="WagTrail trust and conversion information">
          <div className="section-heading">
            <p className="eyebrow">Before checkout</p>
            <h2>Clear answers for a first-time WagTrail buyer.</h2>
          </div>
          <div className="reassurance-grid">
            {reassuranceItems.map((item) => {
              const Icon = item.icon;

              return (
                <article className="reassurance-card" key={item.title}>
                  <span aria-hidden="true">
                    <Icon size={22} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </RevealSection>

        <RevealSection className="story-proof" ariaLabel="WagTrail about and social proof preview">
          <article className="about-preview">
            <p className="eyebrow">Why WagTrail</p>
            <h2>Built around cleaner exits, lighter pockets, and less walk-day scramble.</h2>
            <p>
              WagTrail focuses on the practical little moments around pet outings: water on the route, paws before
              the car, and one place for the things owners always reach for.
            </p>
          </article>
          <article className="proof-preview">
            <span className="proof-icon" aria-hidden="true">
              <HeartHandshake size={24} />
            </span>
            <h3>Social proof status</h3>
            <p>
              Verified customer reviews are not published yet. Early product feedback and owner testing notes will be
              added once the pre-launch review process is complete.
            </p>
          </article>
        </RevealSection>

        <RevealSection className="faq-preview" id="faq" ariaLabel="WagTrail frequently asked questions preview">
          <div className="section-heading">
            <p className="eyebrow">FAQ preview</p>
            <h2>Short answers before the full policy pages arrive.</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item) => (
              <article className="faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </RevealSection>

        <RevealSection className="faq-band">
          <div>
            <p className="eyebrow">Built for outside</p>
            <h2>Ready to shape the launch kit around real walking routines.</h2>
          </div>
          <a className="button button-primary" href="mailto:hello@wagtrail.example">
            Contact WagTrail
          </a>
        </RevealSection>
      </main>
    </>
  );
}

type HeaderProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

function Header({ menuOpen, setMenuOpen }: HeaderProps) {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="#" aria-label="WagTrail home">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M12.1 12.8c2.6 0 5.5 2.4 5.5 5 0 1.5-1.1 2.4-2.8 2.1-1-.2-1.8-.8-2.7-.8s-1.7.6-2.7.8c-1.7.3-2.8-.6-2.8-2.1 0-2.6 2.9-5 5.5-5Z" />
            <path d="M6.2 11.4c-1.2.3-2.5-.8-2.9-2.4-.4-1.6.3-3.1 1.5-3.4s2.5.8 2.9 2.4c.4 1.6-.3 3.1-1.5 3.4Zm4-1.8c-1.2.1-2.2-1.2-2.3-2.8-.1-1.7.8-3.1 1.9-3.2 1.2-.1 2.2 1.2 2.3 2.8.1 1.7-.8 3.1-1.9 3.2Zm3.6 0c-1.2-.1-2-1.5-1.9-3.2.1-1.6 1.1-2.9 2.3-2.8 1.1.1 2 1.5 1.9 3.2-.1 1.6-1.1 2.9-2.3 2.8Zm4 1.8c-1.2-.3-1.9-1.8-1.5-3.4.4-1.6 1.7-2.7 2.9-2.4s1.9 1.8 1.5 3.4c-.4 1.6-1.7 2.7-2.9 2.4Z" />
          </svg>
        </span>
        <span>WagTrail</span>
      </a>

      <nav className="desktop-nav" aria-label="Main menu">
        {navItems.map((item) => (
          <a key={item} href={`#${slugify(item)}`}>
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

function IconButton({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <button className="icon-button" type="button" aria-label={label}>
      {children}
    </button>
  );
}

function MobileNav({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  return (
    <nav className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile menu">
      {navItems.map((item) => (
        <a key={item} href={`#${slugify(item)}`} onClick={onNavigate}>
          {item}
        </a>
      ))}
    </nav>
  );
}

function MobileQuickCta() {
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

function HeroStage({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <motion.div
      className="hero-stage"
      initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ ...motionTiming, duration: 0.9 }}
      aria-label="WagTrail dog and travel accessories"
    >
      <div className="stage-shape shape-one" aria-hidden="true" />
      <div className="stage-shape shape-two" aria-hidden="true" />
      <img
        className="hero-image"
        src={heroImage}
        alt="A happy dog and cat in a warm WagTrail-style illustrated frame."
      />
      <FloatingCard className="float-hydrate" iconClass="water-icon" label="TrailSip" action="Hydrate" />
      <FloatingCard className="float-clean" iconClass="paw-icon" label="PawPure" action="Clean up" />
      <FloatingCard className="float-carry" iconClass="bag-icon" label="TrailPack" action="Carry" />
    </motion.div>
  );
}

function FloatingCard({
  className,
  iconClass,
  label,
  action
}: {
  className: string;
  iconClass: string;
  label: string;
  action: string;
}) {
  return (
    <article className={`float-card ${className}`} aria-label={`${label} product card`}>
      <span className={`float-icon ${iconClass}`} aria-hidden="true" />
      <div>
        <strong>{label}</strong>
        <span className="float-action">{action}</span>
      </div>
    </article>
  );
}

type RevealSectionProps = {
  children: React.ReactNode;
  className: string;
  id?: string;
  ariaLabel?: string;
};

function RevealSection({ children, className, id, ariaLabel }: RevealSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      id={id}
      aria-label={ariaLabel}
      variants={reveal}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.18 }}
      transition={motionTiming}
    >
      {children}
    </motion.section>
  );
}

function ProductCard({ product }: { product: Product }) {
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

function slugify(item: string) {
  if (item === "Shop") return "shop";
  if (item === "FAQ") return "faq";
  return item.toLowerCase().replace(/\s+/g, "-");
}

export default App;
