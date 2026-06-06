import carryImage from "@assets/optimized/Hero_SmallCard_Carry.webp";
import hydrateImage from "@assets/optimized/Hero_SmallCard_Hydrate.webp";
import pawPureImage from "@assets/optimized/Hero_SmallCard_PawPure.webp";

export type ProductArt = "bottle" | "cleaner" | "bag";

export type Product = {
  id: string;
  slug: string;
  art: ProductArt;
  tag: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  compareAtPrice?: number;
  image: string;
  gallery: string[];
  category: string;
  tags: string[];
  benefits: string[];
  features: string[];
  includedItems: string[];
  careInstructions: string[];
  shippingNote: string;
  bestFor: string;
  buyerNote: string;
  imageRequirement: string;
};

export const currencyFormatter = new Intl.NumberFormat("en-PH", {
  style: "currency",
  currency: "PHP",
  maximumFractionDigits: 0
});

export function formatPrice(price: number) {
  return currencyFormatter.format(price);
}

export const products: Product[] = [
  {
    id: "hydration",
    slug: "trailsip-portable-pet-water-bottle",
    art: "bottle",
    tag: "Outdoor hydration",
    name: "TrailSip Portable Pet Water Bottle",
    shortDescription: "Hydrate your pet anywhere without carrying a separate bowl.",
    fullDescription:
      "TrailSip is a portable pet water bottle designed for walks, parks, road trips, and outdoor adventures. It helps your pet drink easily while keeping your bag clean and your walk simple.",
    price: 799,
    image: hydrateImage,
    gallery: [hydrateImage],
    category: "Hydration",
    tags: ["Outdoor hydration", "Daily walks", "Travel"],
    benefits: [
      "Built-in travel bowl",
      "Easy one-hand use",
      "Great for walks and trips",
      "Helps reduce messy water breaks",
      "Lightweight and portable"
    ],
    features: ["Leak-conscious walking design", "Compact bottle-and-bowl routine", "Made for everyday routes"],
    includedItems: ["Portable pet water bottle", "Built-in sipping tray", "Basic care card"],
    careInstructions: ["Rinse after every outdoor use", "Air dry before storage", "Hand wash before first use"],
    shippingNote: "Shipping details will be confirmed before fulfillment.",
    bestFor: "Daily walks, parks, and road trips",
    buyerNote: "Great when you want fewer loose pieces in your bag.",
    imageRequirement: "Temporary product visual from the hero small-card artwork until final product photos are available."
  },
  {
    id: "cleaning",
    slug: "pawpure-cleaning-cup",
    art: "cleaner",
    tag: "Easy cleanup",
    name: "PawPure Cleaning Cup",
    shortDescription: "Quickly clean muddy paws before your pet enters your home or car.",
    fullDescription:
      "PawPure helps remove dirt, mud, and outdoor mess after walks, rainy days, parks, and travel. It is made for pet owners who want cleaner floors, cleaner cars, and easier post-walk cleanup.",
    price: 699,
    image: pawPureImage,
    gallery: [pawPureImage],
    category: "Cleaning",
    tags: ["Easy cleanup", "Rainy days", "Car care"],
    benefits: [
      "Helps clean muddy paws fast",
      "Useful after walks and rainy days",
      "Great for cars, condos, and apartments",
      "Simple rinse-and-clean routine",
      "Reduces indoor mess"
    ],
    features: ["Soft paw-cleaning routine", "Portable post-walk cleanup", "Simple rinse-and-dry workflow"],
    includedItems: ["Paw cleaning cup", "Starter care card", "Usage guidance"],
    careInstructions: ["Rinse cup after use", "Let interior dry fully", "Use with clean water only"],
    shippingNote: "Shipping details will be confirmed before fulfillment.",
    bestFor: "Muddy paws, rainy days, and post-park rinses",
    buyerNote: "Best paired with a towel or wipes for drying.",
    imageRequirement: "Temporary product visual from the hero small-card artwork until final product photos are available."
  },
  {
    id: "travel-bags",
    slug: "trailpack-essentials-bag",
    art: "bag",
    tag: "Walk-ready storage",
    name: "TrailPack Essentials Bag",
    shortDescription: "Carry treats, poop bags, keys, and pet walking essentials hands-free.",
    fullDescription:
      "TrailPack keeps your walking essentials organized so you can focus on your pet. It is designed for daily walks, park visits, errands, and short outdoor trips.",
    price: 899,
    image: carryImage,
    gallery: [carryImage],
    category: "Travel Bags",
    tags: ["Walk-ready storage", "Hands-free", "Daily kit"],
    benefits: [
      "Hands-free walking storage",
      "Holds treats, keys, bags, and small items",
      "Great for daily walks",
      "Helps organize pet essentials",
      "Lightweight and travel-friendly"
    ],
    features: ["Crossbody-friendly walking setup", "Small-gear organization", "Made for quick grab-and-go routines"],
    includedItems: ["Essentials bag", "Basic care card", "Packing checklist"],
    careInstructions: ["Spot clean with mild soap", "Air dry fully", "Store away from excess moisture"],
    shippingNote: "Shipping details will be confirmed before fulfillment.",
    bestFor: "Longer walks, errands, and multi-pet outings",
    buyerNote: "Ideal as the base piece for a complete walk kit.",
    imageRequirement: "Temporary product visual from the hero small-card artwork until final product photos are available."
  }
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}
