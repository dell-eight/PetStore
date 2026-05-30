import { Minus, Plus, Trash2 } from "lucide-react";
import { formatPrice } from "@/data/products";
import type { CartItem } from "@/cart/CartContext";
import { useCart } from "@/cart/CartContext";

type CartLineItemProps = {
  item: CartItem & {
    product: {
      id: string;
      name: string;
      slug: string;
      image: string;
      tag: string;
      price: number;
    };
    lineTotal: number;
  };
};

export function CartLineItem({ item }: CartLineItemProps) {
  const { decrementItem, incrementItem, removeItem } = useCart();

  return (
    <article className="cart-line-item">
      <a className="cart-line-image" href={`/products/${item.product.slug}`} aria-label={`View ${item.product.name}`}>
        <img src={item.product.image} alt="" />
      </a>
      <div className="cart-line-main">
        <div>
          <span>{item.product.tag}</span>
          <h3>{item.product.name}</h3>
          <p>{formatPrice(item.product.price)} each</p>
        </div>
        <div className="cart-line-controls">
          <div className="quantity-control" aria-label={`Quantity for ${item.product.name}`}>
            <button type="button" onClick={() => decrementItem(item.productId)} aria-label="Decrease quantity">
              <Minus size={14} />
            </button>
            <strong>{item.quantity}</strong>
            <button type="button" onClick={() => incrementItem(item.productId)} aria-label="Increase quantity">
              <Plus size={14} />
            </button>
          </div>
          <strong>{formatPrice(item.lineTotal)}</strong>
          <button className="remove-item-button" type="button" onClick={() => removeItem(item.productId)} aria-label="Remove item">
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </article>
  );
}
