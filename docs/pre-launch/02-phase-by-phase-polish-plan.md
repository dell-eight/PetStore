# WagTrail Phase-By-Phase Website Polish Plan

This plan stops before implementation. Each phase should be approved before work begins.

## Phase 0: Full Audit And Project Cleanup

### Phase Goal

Document current website issues and clean obvious project hygiene without redesigning.

### Why This Matters

You need a clear baseline before polishing. Otherwise, design changes can hide business problems.

### Exact Tasks

- Review current React/Vite structure.
- Confirm build works.
- Document missing ecommerce pieces.
- Identify inactive buttons and placeholder links.
- Identify large assets and performance risks.
- Decide whether generated build artifacts should be ignored.
- Move `@vitejs/plugin-react` to devDependencies if approved.

### Files Likely Affected

- `package.json`
- `.gitignore` if git is initialized later
- Documentation only unless cleanup is approved

### Expected Output

- Clear issue list.
- Clean project baseline.
- No visual redesign yet.

### Testing Checklist

- `npm run build` passes.
- No broken imports.
- No accidental visual changes.

### Mistakes To Avoid

- Do not redesign during cleanup.
- Do not delete existing code.
- Do not remove the current hero asset without replacement.

### Approval Checkpoint

Owner approves cleanup items before changes.

## Phase 1: Brand Foundation Polish

### Phase Goal

Create a consistent design system for WagTrail.

### Why This Matters

The site already looks good, but it needs consistency before adding pages and ecommerce sections.

### Exact Tasks

- Define final color tokens.
- Define typography rules.
- Define spacing scale.
- Define button variants.
- Define card variants.
- Define icon usage rules.
- Define motion rules.
- Document trust badge styles.

### Files Likely Affected

- `src/styles.css`
- `src/App.tsx`
- optional `src/data/`
- optional `src/components/`

### Expected Output

- More consistent visual system.
- Easier future page creation.
- Reduced one-off styling.

### Testing Checklist

- Desktop still matches visual direction.
- Mobile at 375px and 390px has no overflow.
- Focus states remain visible.
- Motion reduction still works.

### Mistakes To Avoid

- Do not make the brand too childish.
- Do not introduce a one-color orange-only palette.
- Do not reduce text contrast.

### Approval Checkpoint

Owner approves final design-system direction.

## Phase 2: Homepage Hero Upgrade

### Phase Goal

Make the first 5 seconds more product-specific and conversion-focused.

### Why This Matters

The current hero is beautiful, but not yet specific enough for paid traffic.

### Exact Tasks

- Improve subheadline.
- Consider CTA labels:
  - "Shop Walk Essentials"
  - "Build Your Walk Kit"
- Add trust microcopy near CTA.
- Make floating cards more product-specific.
- Add a small bundle/story angle.
- Keep illustration strong but optimize asset.

### Files Likely Affected

- `src/App.tsx`
- `src/styles.css`
- `assets/`

### Expected Output

- Clearer product offer.
- Stronger CTA intent.
- Better pre-launch first impression.

### Testing Checklist

- Hero visible and readable at 375px.
- CTA buttons above fold on common mobile screens.
- Hero image does not cause layout shift.
- No broken anchor links.

### Mistakes To Avoid

- Do not overcrowd hero.
- Do not make the headline too long.
- Do not add unsupported claims.

### Approval Checkpoint

Owner approves hero copy and CTA direction.

## Phase 3: Product Section Upgrade

### Phase Goal

Make each product easier to understand and more persuasive.

### Why This Matters

Current product cards are attractive but too light for ecommerce decision-making.

### Exact Tasks

- Add benefit bullets per product.
- Add product objection answers.
- Add launch price context.
- Add product-specific CTA.
- Add placeholder image requirements.
- Prepare product data structure.

### Files Likely Affected

- `src/App.tsx`
- `src/styles.css`
- optional `src/data/products.ts`
- optional `src/components/ProductCard.tsx`

### Expected Output

- Product section feels more like a store.
- Buyers understand why each item exists.
- Future product pages become easier.

### Testing Checklist

- Cards remain readable on mobile.
- Card height is balanced.
- CTAs have meaningful links or approved prelaunch behavior.
- No unsupported claims.

### Mistakes To Avoid

- Do not add too much copy inside cards.
- Do not invent material claims.
- Do not fake reviews.

### Approval Checkpoint

Owner approves product positioning and price placeholders.

## Phase 4: Trust And Conversion Sections

### Phase Goal

Add the missing trust layer.

### Why This Matters

New ecommerce brands lose buyers when policies, contact details, and reassurance are missing.

### Exact Tasks

- Add shipping/returns reassurance.
- Add FAQ preview.
- Add About preview.
- Add social proof placeholder that is honest.
- Add secure checkout message.
- Add product care notes.

### Files Likely Affected

- `src/App.tsx`
- `src/styles.css`
- optional components and data files

### Expected Output

- Site feels more trustworthy.
- Buyers have fewer unanswered questions.

### Testing Checklist

- Trust messages are accurate.
- Mobile sections remain scannable.
- CTAs repeat at logical points.

### Mistakes To Avoid

- Do not claim verified reviews if none exist.
- Do not promise shipping/returns before owner confirms details.
- Do not bury policies.

### Approval Checkpoint

Owner approves trust claims and placeholder wording.

## Phase 5: Mobile Optimization

### Phase Goal

Make the mobile experience feel intentional and fast.

### Why This Matters

Pet ecommerce traffic from TikTok/Facebook will be mostly mobile.

### Exact Tasks

- Test 360px, 375px, 390px, 414px, 768px.
- Improve mobile header behavior.
- Confirm no horizontal scrolling.
- Optimize CTA tap areas.
- Reduce heavy animations on mobile.
- Compress hero image.
- Consider sticky bottom CTA.

### Files Likely Affected

- `src/styles.css`
- `src/App.tsx`
- `assets/`

### Expected Output

- Better mobile conversion readiness.
- Faster perceived load.

### Testing Checklist

- No horizontal overflow.
- Buttons are at least 44px tall.
- Text is readable without zoom.
- Menu works with keyboard and touch.

### Mistakes To Avoid

- Do not hide important product info.
- Do not let hero consume too much of the journey.
- Do not add intrusive sticky UI.

### Approval Checkpoint

Owner approves mobile behavior.

## Phase 6: SEO And Accessibility

### Phase Goal

Make the site easier to find, read, and navigate.

### Why This Matters

SEO and accessibility also improve user trust and conversion.

### Exact Tasks

- Improve title and meta description.
- Add Open Graph metadata.
- Add product keyword content.
- Add semantic FAQ structure.
- Improve alt text.
- Confirm heading hierarchy.
- Improve focus/keyboard behavior.
- Validate contrast.

### Files Likely Affected

- `index.html`
- `src/App.tsx`
- `src/styles.css`

### Expected Output

- Better SEO basics.
- Better accessibility baseline.

### Testing Checklist

- One `h1`.
- Meaningful `h2` sections.
- Focus visible.
- Links are not `#`.
- Reduced motion is respected.

### Mistakes To Avoid

- Do not keyword-stuff.
- Do not add alt text like "image."
- Do not use color alone for meaning.

### Approval Checkpoint

Owner approves SEO copy.

## Phase 7: Pre-Launch Business Pages

### Phase Goal

Create essential trust pages.

### Why This Matters

Customers expect these pages before buying from a new store.

### Pages To Create Or Improve

- About page.
- Contact page.
- FAQ page.
- Shipping policy page.
- Return/refund policy page.
- Privacy policy page.
- Terms of service page.

### Placeholder Rule

Use placeholder copy only where details are missing, and mark it clearly as requiring owner review.

### Files Likely Affected

- `src/App.tsx`
- routing setup if added
- `src/pages/`
- `src/components/`
- `src/data/`

### Expected Output

- Site feels like a real business.
- Footer has useful links.

### Testing Checklist

- Every footer link works.
- Legal placeholders are clearly marked.
- Contact email is real or clearly pending.

### Mistakes To Avoid

- Do not present legal placeholder text as final.
- Do not invent shipping timelines.
- Do not hide contact information.

### Approval Checkpoint

Owner approves page list and legal placeholder style.

## Phase 8: Ecommerce Readiness

### Phase Goal

Prepare for real checkout.

### Why This Matters

The site cannot convert until product data, cart, and checkout are connected.

### Exact Tasks

- Choose Shopify Buy Button or Shopify Storefront API.
- Define product IDs/handles.
- Define product data structure.
- Add cart flow or checkout handoff.
- Prepare PayMongo notes if selling locally.
- Add inventory/supplier notes.
- Add product image requirements.

### Files Likely Affected

- `src/data/products.ts`
- `src/components/Cart.tsx`
- `src/components/ProductCard.tsx`
- environment variables
- future checkout integration files

### Expected Output

- A clear path from product interest to checkout.

### Testing Checklist

- Product CTA opens correct product/checkout.
- Cart updates correctly.
- Checkout handoff works.
- No test keys are exposed.

### Mistakes To Avoid

- Do not hard-code private API keys.
- Do not launch without test orders.
- Do not connect payment before policies are ready.

### Approval Checkpoint

Owner selects ecommerce integration.

## Phase 9: Analytics And Testing Setup

### Phase Goal

Track the behaviors that matter.

### Why This Matters

Without analytics, you cannot know what to improve after launch.

### Recommended Setup

- Google Analytics.
- Meta Pixel.
- TikTok Pixel.
- CTA click tracking.
- Product click tracking.
- Checkout click tracking.
- Purchase tracking once checkout exists.

### Implementation Rule

Only implement if owner provides IDs and confirms platforms.

### Files Likely Affected

- `index.html`
- analytics utility file
- environment variables

### Expected Output

- Tracking checklist or working tracking setup.

### Testing Checklist

- Events fire once.
- Pixels are not duplicated.
- No private data is sent improperly.

### Mistakes To Avoid

- Do not add fake IDs.
- Do not track sensitive personal info.
- Do not install pixels before privacy policy is ready.

### Approval Checkpoint

Owner provides tracking IDs and approves event list.

## Phase 10: Final Pre-Launch Checklist

### Phase Goal

Confirm the site is safe to show to real buyers.

### Why This Matters

This prevents avoidable trust, checkout, and mobile issues during launch.

### Exact Tasks

- Final design QA.
- Final copy QA.
- Mobile QA.
- SEO QA.
- Accessibility QA.
- Performance QA.
- Product page QA.
- Policy QA.
- Payment QA.
- Analytics QA.
- Deployment QA.

### Files Likely Affected

- Any final bugfix files.

### Expected Output

- Launch-ready checklist signed off.

### Testing Checklist

- Build passes.
- Local preview passes.
- Mobile passes.
- Product/checkout passes.
- Policies reviewed.
- Analytics verified.
- Deployment verified.

### Mistakes To Avoid

- Do not launch paid ads before test order.
- Do not launch without return/refund policy.
- Do not launch with placeholder support email.

### Approval Checkpoint

Owner gives final launch approval.

