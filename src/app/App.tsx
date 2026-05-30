import { useState } from "react";
import { ConversionSection } from "@/sections/ConversionSection";
import { FaqPreviewSection } from "@/sections/FaqPreviewSection";
import { FinalCtaSection } from "@/sections/FinalCtaSection";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { MobileNav, MobileQuickCta } from "@/sections/MobileNav";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { StoryProofSection } from "@/sections/StoryProofSection";
import { TrustRow } from "@/sections/TrustRow";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileNav open={menuOpen} onNavigate={() => setMenuOpen(false)} />
      <MobileQuickCta />
      <main>
        <Hero />
        <TrustRow />
        <ProductShowcase />
        <ConversionSection />
        <StoryProofSection />
        <FaqPreviewSection />
        <FinalCtaSection />
      </main>
    </>
  );
}

export default App;
