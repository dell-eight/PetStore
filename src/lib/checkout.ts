import type { CartItem } from "@/cart/CartContext";

type CheckoutResponse = {
  checkoutUrl?: string;
  error?: string;
};

export async function createPayMongoCheckout(items: CartItem[]) {
  const response = await fetch("/api/checkout/paymongo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ items })
  });

  const data = (await response.json()) as CheckoutResponse;

  if (!response.ok || !data.checkoutUrl) {
    throw new Error(data.error || "Checkout could not be started.");
  }

  return data.checkoutUrl;
}
