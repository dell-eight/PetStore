import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProductById, products, type Product } from "@/data/products";

export type CartItem = {
  productId: string;
  quantity: number;
};

type CartProductItem = CartItem & {
  product: Product;
  lineTotal: number;
};

type CartContextValue = {
  items: CartItem[];
  detailedItems: CartProductItem[];
  count: number;
  subtotal: number;
  drawerOpen: boolean;
  addItem: (productId: string, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  incrementItem: (productId: string) => void;
  decrementItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const STORAGE_KEY = "wagtrail-cart";
const CartContext = createContext<CartContextValue | undefined>(undefined);

function normalizeItems(items: CartItem[]) {
  return items
    .filter((item) => getProductById(item.productId) && item.quantity > 0)
    .map((item) => ({ productId: item.productId, quantity: Math.min(Math.max(1, item.quantity), 99) }));
}

function readStoredCart() {
  if (typeof window === "undefined") return [];

  try {
    const parsed = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
    if (!Array.isArray(parsed)) return [];
    return normalizeItems(parsed);
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setItems(readStoredCart());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [hydrated, items]);

  const detailedItems = useMemo(
    () =>
      items.flatMap((item) => {
        const product = getProductById(item.productId);
        if (!product) return [];
        return [{ ...item, product, lineTotal: product.price * item.quantity }];
      }),
    [items]
  );

  const subtotal = detailedItems.reduce((total, item) => total + item.lineTotal, 0);
  const count = items.reduce((total, item) => total + item.quantity, 0);

  function addItem(productId: string, quantity = 1) {
    if (!products.some((product) => product.id === productId)) return;
    setItems((current) => {
      const existing = current.find((item) => item.productId === productId);
      if (!existing) return [...current, { productId, quantity: Math.max(1, quantity) }];
      return current.map((item) =>
        item.productId === productId ? { ...item, quantity: Math.min(item.quantity + Math.max(1, quantity), 99) } : item
      );
    });
    setDrawerOpen(true);
  }

  function setQuantity(productId: string, quantity: number) {
    setItems((current) => {
      if (quantity <= 0) return current.filter((item) => item.productId !== productId);
      return current.map((item) => (item.productId === productId ? { ...item, quantity: Math.min(quantity, 99) } : item));
    });
  }

  const value: CartContextValue = {
    items,
    detailedItems,
    count,
    subtotal,
    drawerOpen,
    addItem,
    setQuantity,
    incrementItem: (productId) => setQuantity(productId, (items.find((item) => item.productId === productId)?.quantity ?? 0) + 1),
    decrementItem: (productId) => setQuantity(productId, (items.find((item) => item.productId === productId)?.quantity ?? 0) - 1),
    removeItem: (productId) => setItems((current) => current.filter((item) => item.productId !== productId)),
    clearCart: () => setItems([]),
    openCart: () => setDrawerOpen(true),
    closeCart: () => setDrawerOpen(false)
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) {
    throw new Error("useCart must be used within CartProvider");
  }
  return value;
}
