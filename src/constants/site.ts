import chatBubbleCheckImage from "@assets/ChatBubble_&_Check.png";
import miniPouchImage from "@assets/MiniPouch.png";
import pawBubblesImage from "@assets/Paw_&_bubbles.png";
import pawTrailImage from "@assets/PawTrail.png";
import { ClipboardCheck, HeartHandshake, RotateCcw, ShieldCheck, Truck, type LucideIcon } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/products" },
  { label: "FAQ", href: "/#faq" },
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
    title: "Shipping clarity before launch",
    text: "Shipping windows and delivery regions will be published before checkout opens."
  },
  {
    icon: RotateCcw,
    title: "Returns under review",
    text: "Return and refund terms are being finalized so buyers know what to expect before purchasing."
  },
  {
    icon: ShieldCheck,
    title: "Secure checkout planned",
    text: "Payments will run through the selected ecommerce checkout provider, not through this static preview."
  },
  {
    icon: ClipboardCheck,
    title: "Care notes included",
    text: "Each walking essential will ship with simple rinse, dry, and storage guidance."
  }
];

export const faqItems = [
  {
    question: "Are WagTrail products available now?",
    answer: "This is a pre-launch homepage. Final product pages, inventory, and checkout are still being prepared."
  },
  {
    question: "Which item should I start with?",
    answer: "TrailSip is the easiest daily pick, PawPure is for muddy paws, and TrailPack keeps the full kit together."
  },
  {
    question: "What are the shipping and return details?",
    answer: "The exact shipping regions, delivery timing, and return window will be reviewed before checkout goes live."
  }
];

export const proofIcon = HeartHandshake;
