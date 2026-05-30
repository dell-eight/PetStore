import { getCheckoutProduct } from "./catalog";

type IncomingCartItem = {
  productId?: unknown;
  quantity?: unknown;
};

type CheckoutRequestBody = {
  items?: IncomingCartItem[];
};

export type CheckoutResult = {
  checkoutUrl: string;
};

function toPositiveQuantity(quantity: unknown) {
  const parsed = Number(quantity);
  if (!Number.isFinite(parsed) || parsed < 1) return 1;
  return Math.min(Math.floor(parsed), 99);
}

export async function createCheckoutSession(body: CheckoutRequestBody, siteUrl: string, secretKey?: string): Promise<CheckoutResult> {
  const items = Array.isArray(body.items) ? body.items : [];
  const lineItems = items.map((item) => {
    const product = typeof item.productId === "string" ? getCheckoutProduct(item.productId) : undefined;
    if (!product) {
      throw new Error("Cart contains an invalid product.");
    }

    return {
      currency: "PHP",
      amount: product.price * 100,
      name: product.name,
      quantity: toPositiveQuantity(item.quantity)
    };
  });

  if (lineItems.length === 0) {
    throw new Error("Cart is empty.");
  }

  if (!secretKey) {
    throw new Error("PAYMONGO_SECRET_KEY is not configured.");
  }

  const normalizedSiteUrl = siteUrl.replace(/\/$/, "");
  const response = await fetch("https://api.paymongo.com/v1/checkout_sessions", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${secretKey}:`).toString("base64")}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      data: {
        attributes: {
          description: "WagTrail pre-launch checkout",
          line_items: lineItems,
          payment_method_types: ["card", "gcash", "grab_pay", "paymaya"],
          success_url: `${normalizedSiteUrl}/checkout/success`,
          cancel_url: `${normalizedSiteUrl}/checkout/cancel`,
          send_email_receipt: false,
          show_description: true,
          show_line_items: true
        }
      }
    })
  });

  const responseBody = await response.json();
  if (!response.ok) {
    const message = responseBody?.errors?.[0]?.detail || responseBody?.errors?.[0]?.code || "PayMongo checkout failed.";
    throw new Error(message);
  }

  const checkoutUrl = responseBody?.data?.attributes?.checkout_url;
  if (!checkoutUrl) {
    throw new Error("PayMongo did not return a checkout URL.");
  }

  return { checkoutUrl };
}
