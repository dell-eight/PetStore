import { ConversionSection } from "@/sections/ConversionSection";
import { FaqPreviewSection } from "@/sections/FaqPreviewSection";
import { FinalCtaSection } from "@/sections/FinalCtaSection";
import { Hero } from "@/sections/Hero";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { StoryProofSection } from "@/sections/StoryProofSection";
import { TrustRow } from "@/sections/TrustRow";

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustRow />
      <ProductShowcase />
      <ConversionSection />
      <StoryProofSection />
      <FaqPreviewSection />
      <FinalCtaSection />
    </>
  );
}
