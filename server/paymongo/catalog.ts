export type CheckoutProduct = {
  id: string;
  name: string;
  price: number;
};

export const checkoutProducts: CheckoutProduct[] = [
  { id: "hydration", name: "TrailSip Portable Pet Water Bottle", price: 799 },
  { id: "cleaning", name: "PawPure Cleaning Cup", price: 699 },
  { id: "travel-bags", name: "TrailPack Essentials Bag", price: 899 }
];

export function getCheckoutProduct(id: string) {
  return checkoutProducts.find((product) => product.id === id);
}
