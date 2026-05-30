# Phase 1 Brand Foundation

Status: Implemented  
Scope: Brand foundation only. No Phase 2 hero/copy/product/conversion changes were made.

## Design Direction

WagTrail should feel:

- Cute but professional.
- Warm and practical.
- Premium but approachable.
- Clean enough for ecommerce conversion.
- Friendly without becoming childish.

## Typography System

Current fonts:

- Display: Fredoka.
- Body/UI: Nunito.

Usage rules:

- Use Fredoka for large editorial headings and major section titles.
- Use Nunito for body copy, product details, navigation, CTAs, and support text.
- Keep letter spacing at `0`.
- Avoid shrinking body copy below readable mobile sizes.

## Color System

Core roles:

- Page background: warm cream/off-white.
- Primary accent: warm orange.
- Warm highlight: yellow.
- Secondary accent: sage green.
- Text: charcoal.
- Muted text: deep warm gray/brown.
- Focus indicator: trust blue.

Important rule:

Do not turn the site into a one-color orange theme. The palette needs cream, charcoal, orange/yellow, and sage working together.

## Spacing System

The CSS now defines reusable spacing tokens:

- `--space-1` through `--space-16`
- `--container`
- `--page-gutter`

Usage rules:

- Keep sections aligned to the shared container width.
- Keep mobile gutters predictable.
- Do not add arbitrary one-off spacing unless the component truly needs it.

## Radius System

The CSS now defines:

- `--radius-sm`
- `--radius-md`
- `--radius-lg`
- `--radius-xl`
- `--radius-2xl`
- `--radius-pill`

Usage rules:

- Use pill radius for buttons, nav pills, and small badges.
- Use larger radii for product cards, hero imagery, and CTA bands.
- Keep cards rounded, but avoid making every element equally soft.

## Shadow System

The CSS now defines:

- `--shadow-xs`
- `--shadow-sm`
- `--shadow-md`
- `--shadow-lg`
- `--shadow-focus`

Usage rules:

- Use small shadows for controls.
- Use medium shadows for cards.
- Use large shadows for hero/stage surfaces only.
- Avoid stacking multiple heavy shadows in one section.

## Button Rules

Current variants:

- `.button-primary`
- `.button-secondary`

Rules:

- Primary CTA should be dark/charcoal and visually dominant.
- Secondary CTA should be light and lower emphasis.
- Button hover states should feel tactile but not shift layout.
- Buttons must remain at least comfortable tap height on mobile.

## Card Rules

Current card surfaces:

- Product cards.
- Floating hero cards.
- Trust row items.
- CTA band.

Rules:

- Product cards should stay scannable.
- Floating cards should support the hero, not compete with the headline.
- Trust cards should use concise, specific claims once owner details are confirmed.

## Icon Rules

Rules:

- Use Lucide React for functional UI icons.
- Use CSS/SVG-style marks for decorative product icons.
- Do not use emoji icons in UI.
- Keep icon sizing consistent.

## Motion Rules

Current motion system:

- Shared Framer Motion timing uses a `0.62s` base duration.
- Entry/reveal easing uses a consistent custom cubic-bezier curve.
- Product hover tilt is disabled for reduced-motion users.
- CSS floating cards stop under reduced motion.

Rules:

- Use motion to support comprehension, not decorate every section.
- Avoid new infinite animations unless they have a clear purpose.
- Keep micro-interactions around 150-300ms.
- Respect `prefers-reduced-motion`.

## Phase 1 Files Touched

- `src/styles.css`
- `src/App.tsx`
- `docs/pre-launch/05-phase-1-brand-foundation.md`

## Not Included In Phase 1

These are intentionally left for later approval:

- Hero copy rewrite.
- Product copy rewrite.
- Product data restructuring.
- New trust/conversion sections.
- Footer.
- Policy pages.
- Checkout/cart/search behavior.
- SEO metadata expansion.
- Hero image optimization.

