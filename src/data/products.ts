export type Product = {
  id: string;
  art: "bottle" | "cleaner" | "bag";
  tag: string;
  name: string;
  description: string;
  benefits: string[];
  bestFor: string;
  buyerNote: string;
  price: string;
  priceNote: string;
  cta: string;
  imageRequirement: string;
};

export const products: Product[] = [
  {
    id: "hydration",
    art: "bottle",
    tag: "Hydration",
    name: "TrailSip Portable Pet Water Bottle",
    description: "A compact walking bottle that keeps water and a sipping bowl together for everyday routes.",
    benefits: ["Built-in travel bowl", "Easy park and errand hydration", "One-hand walking routine"],
    bestFor: "Daily walks, parks, and road trips",
    buyerNote: "Great when you want fewer loose pieces in your bag.",
    price: "$28",
    priceNote: "Estimated launch price",
    cta: "View TrailSip",
    imageRequirement: "Lifestyle photo showing one-handed use during an outdoor walk."
  },
  {
    id: "cleaning",
    art: "cleaner",
    tag: "Cleanup",
    name: "PawPure Cleaning Cup",
    description: "A rinse cup designed to help clean muddy paws before the ride home or the sofa sprint.",
    benefits: ["Soft paw-rinse routine", "Helpful after grass and trails", "Simple car-door cleanup"],
    bestFor: "Muddy paws, rainy days, and post-park rinses",
    buyerNote: "Best paired with a towel or wipes for drying.",
    price: "$24",
    priceNote: "Estimated launch price",
    cta: "View PawPure",
    imageRequirement: "Close-up photo showing paw rinse scale, grip, and interior brush detail."
  },
  {
    id: "travel-bags",
    art: "bag",
    tag: "Carry",
    name: "TrailPack Essentials Bag",
    description: "A neat crossbody kit for the small gear that usually ends up in pockets, hands, or car seats.",
    benefits: ["Treats, bags, keys, and wipes", "Hands-free walking setup", "Organized grab-and-go kit"],
    bestFor: "Longer walks, errands, and multi-pet outings",
    buyerNote: "Ideal as the base piece for a complete walk kit.",
    price: "$46",
    priceNote: "Estimated launch price",
    cta: "View TrailPack",
    imageRequirement: "Flat-lay and worn-body photos showing pocket capacity and relative size."
  }
];
