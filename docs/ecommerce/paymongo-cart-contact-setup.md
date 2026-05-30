# WagTrail Ecommerce Setup

## What Was Implemented

This phase adds a pre-launch ecommerce flow for WagTrail:

- Product listing cards with prices, images, details links, and add-to-cart buttons.
- Product detail pages at `/products/:slug`.
- Cart drawer and full cart page at `/cart`.
- LocalStorage cart persistence.
- Server-side PayMongo checkout session creation.
- Checkout success and cancel pages.
- Contact page at `/contact`.

The project remains Vite + React + TypeScript with plain CSS. It is not a Next.js app, so the PayMongo endpoint is implemented as:

- `api/checkout/paymongo.ts` for serverless deployment platforms such as Vercel.
- Vite development middleware in `vite.config.ts` for local testing.

## Files Changed

- Product data: `src/data/products.ts`
- Cart state: `src/cart/CartContext.tsx`
- Cart UI: `src/components/cart/*`
- Product UI: `src/components/product/ProductCard.tsx`
- Pages: `src/pages/*`
- App routing: `src/app/App.tsx`
- Header/mobile nav: `src/sections/Header.tsx`, `src/sections/MobileNav.tsx`
- Styles: `src/styles/ecommerce.css`, `src/styles/responsive.css`
- PayMongo server logic: `server/paymongo/*`
- Serverless endpoint: `api/checkout/paymongo.ts`
- Environment example: `.env.example`

## Product Data Structure

Products live in `src/data/products.ts` and include:

- `id`
- `slug`
- `name`
- `shortDescription`
- `fullDescription`
- `price`
- `image`
- `gallery`
- `category`
- `tags`
- `benefits`
- `features`
- `includedItems`
- `careInstructions`
- `shippingNote`

Prices are stored as Philippine Peso whole-peso numbers, such as `799`, then displayed with `formatPrice()`.

## Cart Behavior

Cart state is managed by `CartProvider` in `src/cart/CartContext.tsx`.

Supported behavior:

- Add product to cart.
- Increase/decrease quantity.
- Remove item.
- Calculate subtotal.
- Persist cart in `localStorage`.
- Show cart count in the header.
- Open a cart drawer.
- Review the full cart at `/cart`.

The cart is not cleared automatically after checkout success yet because verified payment/order storage is not implemented.

## PayMongo Environment Variables

Create a local `.env` or `.env.local` file for development. Do not commit real values.

```env
PAYMONGO_SECRET_KEY=sk_test_your_paymongo_secret_key
NEXT_PUBLIC_SITE_URL=http://127.0.0.1:5173
```

For deployment, set the same variables in the hosting provider dashboard.

## How To Test PayMongo Checkout

1. Add PayMongo test credentials to your local environment.
2. Run the Vite dev server.
3. Add one or more products to cart.
4. Open the cart drawer or `/cart`.
5. Click `Checkout with PayMongo`.
6. The frontend posts cart item IDs and quantities to `/api/checkout/paymongo`.
7. The server validates product IDs and prices against server-side catalog data.
8. The server creates a PayMongo Checkout Session.
9. The browser redirects to the returned PayMongo hosted checkout URL.

Security notes:

- The frontend never receives or imports `PAYMONGO_SECRET_KEY`.
- The server does not trust frontend prices.
- Product totals are calculated server-side.

## Success And Cancel Pages

- `/checkout/success` thanks the customer and explains pre-launch order processing.
- `/checkout/cancel` tells the customer checkout was not completed and links back to the cart.

These pages do not claim automated fulfillment.

## Contact Page Behavior

The contact page lives at `/contact`.

It includes:

- Name
- Email
- Subject
- Message
- Basic required-field validation
- Email format validation
- Success/error messaging

There is no email backend yet. Submissions are logged to the browser console for development only. Future options include Resend, EmailJS, Formspree, Supabase, or a custom SMTP API route.

The email `support@wagtrail.com` is a placeholder until the inbox is created.

## Known Limitations

- This is still a Vite SPA, not a full server-rendered ecommerce framework.
- Direct deep links require the hosting provider to serve the SPA fallback for frontend routes.
- PayMongo webhook automation is not implemented.
- Product images are temporary visual assets from the current WagTrail artwork, not final product photography.
- No order database exists yet.
- No shipping fee logic exists yet.
- Contact form does not send email yet.

## Future Webhook Plan

When ready, add a webhook endpoint that:

1. Listens for successful checkout/payment events.
2. Verifies PayMongo webhook signatures if required by the PayMongo webhook setup.
3. Saves an order record to a database.
4. Marks the order as paid.
5. Sends a customer confirmation email.
6. Notifies the WagTrail admin.
7. Clears the cart only after verified payment.

## Next Recommended Phase

Add persistent order storage, PayMongo webhook verification, admin notifications, email delivery, final product photography, and a production hosting rewrite rule for SPA routes.
