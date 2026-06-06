import chatBubbleCheckImage from "@assets/optimized/ChatBubble_&_Check.webp";
import miniPouchImage from "@assets/optimized/MiniPouch.webp";
import pawBubblesImage from "@assets/optimized/Paw_&_bubbles.webp";
import pawTrailImage from "@assets/optimized/PawTrail.webp";
import {
  ClipboardCheck,
  HeartHandshake,
  MessageCircle,
  PackageCheck,
  RotateCcw,
  ShieldCheck,
  Truck,
  type LucideIcon
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
] as const;

export const trustItems = [
  { image: pawTrailImage, label: "Built for daily walks" },
  { image: pawBubblesImage, label: "Quick outdoor cleanup" },
  { image: miniPouchImage, label: "Easy to carry anywhere" },
  { image: chatBubbleCheckImage, label: "Improving with feedback" }
] as const;

export type ReassuranceItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export const reassuranceItems: ReassuranceItem[] = [
  {
    icon: Truck,
    title: "Clear delivery updates",
    text: "Processing and shipping details are confirmed before fulfillment so buyers know what happens after checkout."
  },
  {
    icon: RotateCcw,
    title: "Support if something arrives wrong",
    text: "If an item arrives damaged, customers can send order details and photos so the issue can be reviewed quickly."
  },
  {
    icon: ShieldCheck,
    title: "Secure PayMongo checkout",
    text: "Checkout is handled through PayMongo so payment steps stay clear, familiar, and protected."
  },
  {
    icon: ClipboardCheck,
    title: "Simple care guidance",
    text: "Each walking essential includes easy use and care notes for cleaner daily routines."
  }
];

export const checkoutConfidenceItems: ReassuranceItem[] = [
  {
    icon: ShieldCheck,
    title: "Secure checkout",
    text: "PayMongo handles the payment flow."
  },
  {
    icon: PackageCheck,
    title: "Order updates",
    text: "Processing and shipping details are confirmed before fulfillment."
  },
  {
    icon: MessageCircle,
    title: "Support nearby",
    text: "Questions before ordering? Send us a message anytime."
  }
];

export const faqItems = [
  {
    question: "What products does WagTrail sell?",
    answer:
      "WagTrail offers smart walk and travel essentials for pets, including hydration bottles, cleaning tools, and carry accessories designed to make daily walks cleaner, easier, and happier."
  },
  {
    question: "Are your products for dogs only?",
    answer:
      "Most of our products are made for dogs, but some items may also be useful for cats depending on their size, behavior, and travel needs."
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery times may vary depending on your location. After placing an order, customers will receive updates about processing and shipping."
  },
  {
    question: "Do you offer Cash on Delivery?",
    answer:
      "Cash on Delivery may be offered depending on the final checkout and delivery setup. Available payment options will be clearly shown before customers place an order."
  },
  {
    question: "How do I know which product is right for my pet?",
    answer:
      "Each product page should include simple details, use cases, and recommendations to help customers choose the right item for their pet's walking or travel routine."
  },
  {
    question: "Can I contact you before ordering?",
    answer: "Yes. Customers can contact us through the contact page for product questions, order concerns, or general support."
  },
  {
    question: "What if I receive a damaged item?",
    answer:
      "Customers should contact support with photos of the item and order details so the issue can be reviewed and resolved."
  },
  {
    question: "Do you accept returns or exchanges?",
    answer:
      "Returns and exchanges are planned to be handled with a customer-friendly policy. The final return window, item condition rules, and exchange steps will be updated once the store policy is finalized."
  }
];

export const proofIcon = HeartHandshake;
