# Code Structure

This project is a Vite + React + TypeScript ecommerce landing page. It uses plain CSS, Framer Motion for animation, Lucide React for icons, and static content/data files.

## Folder Structure

```text
assets/
  Images, logos, and other media imported by the app.

src/
  app/
    Route-level app composition. Keep routing/page orchestration here.

  components/
    layout/
      Reusable layout primitives shared by multiple sections.
    product/
      Product-specific reusable UI components.
    ui/
      Small generic UI controls such as icon buttons.

  constants/
    Reusable site content and configuration such as nav links, FAQ copy, trust items, and reassurance cards.

  data/
    Static business data such as product catalog entries.

  lib/
    Shared utilities, animation variants, and helper functions.

  sections/
    Large page sections such as Header, Hero, ProductShowcase, FAQ, and final CTA.

  styles/
    CSS organized by responsibility and imported through `styles/index.css`.
```

## Where To Add New Code

- Add new full-width page areas to `src/sections/`.
- Add reusable UI pieces to `src/components/ui/`.
- Add repeated layout wrappers to `src/components/layout/`.
- Add product card or catalog UI to `src/components/product/`.
- Add product/content data to `src/data/`.
- Add site-wide copy/configuration to `src/constants/`.
- Add helper functions or animation variants to `src/lib/`.
- Add media files to `assets/` and import them through `@assets/...`.

## Styling Rules

- Import only `src/styles/index.css` from the React entry point.
- Put design tokens and CSS custom properties in `src/styles/theme.css`.
- Put browser resets, document styles, and shared element defaults in `src/styles/base.css`.
- Put header/navigation styles in `src/styles/header.css`.
- Put hero-only styles in `src/styles/hero.css`.
- Put content section and card styles in `src/styles/sections.css`.
- Put keyframes and reduced-motion overrides in `src/styles/animations.css`.
- Put breakpoint and input-mode overrides in `src/styles/responsive.css`.
- Preserve existing class names when refactoring to avoid visual regressions.

## Import Rules

- Use `@/...` for files inside `src`.
- Use `@assets/...` for files inside `assets`.
- Avoid long parent-relative imports such as `../../../`.

## Maintenance Rules

- Keep `src/app/App.tsx` focused on page composition.
- Keep section components responsible for one visible page section.
- Keep product data out of components unless it is purely presentational.
- Keep animation constants centralized in `src/lib/motion.ts`.
- Run `npm run build` after structural changes.
- Add a lint script before introducing broader team workflows or CI rules.
