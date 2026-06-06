import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import carryCardImage from "@assets/optimized/Hero_SmallCard_Carry.webp";
import hydrateCardImage from "@assets/optimized/Hero_SmallCard_Hydrate.webp";
import pawPureCardImage from "@assets/optimized/Hero_SmallCard_PawPure.webp";
import heroImage from "@assets/hero_image_petStore_v3-optimized.jpg";
import {
  heroCopyVariants,
  heroFloatVariants,
  heroItemVariants,
  heroStageItemVariants,
  heroStageVariants,
  heroTitleLineVariants,
  heroTitleVariants
} from "@/lib/motion";

function keepHeroTransformOnCompositor(_: unknown, generatedTransform: string) {
  return generatedTransform === "none" ? "translateZ(0)" : `${generatedTransform} translateZ(0)`;
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero">
      <motion.div
        className="hero-copy"
        variants={heroCopyVariants}
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : "visible"}
      >
        <motion.p className="eyebrow hero-copy-motion" variants={heroItemVariants} transformTemplate={keepHeroTransformOnCompositor}>
          Welcome to WagTrail
        </motion.p>
        <motion.h1 className="hero-title" variants={heroTitleVariants}>
          <motion.span className="hero-title-line" variants={heroTitleLineVariants} transformTemplate={keepHeroTransformOnCompositor}>
            PET
          </motion.span>
          <motion.span className="hero-title-line" variants={heroTitleLineVariants} transformTemplate={keepHeroTransformOnCompositor}>
            WALKS
          </motion.span>
          <motion.span className="hero-title-line" variants={heroTitleLineVariants} transformTemplate={keepHeroTransformOnCompositor}>
            MADE
          </motion.span>
          <motion.span className="hero-title-line" variants={heroTitleLineVariants} transformTemplate={keepHeroTransformOnCompositor}>
            EASIER
          </motion.span>
        </motion.h1>
        <motion.p className="hero-text hero-copy-motion" variants={heroItemVariants} transformTemplate={keepHeroTransformOnCompositor}>
          Hydrate, clean, and carry everything your pet needs for walks, parks, road trips, and everyday outdoor
          adventures.
        </motion.p>
        <motion.div
          className="hero-ctas hero-copy-motion"
          aria-label="Hero actions"
          variants={heroItemVariants}
          transformTemplate={keepHeroTransformOnCompositor}
        >
          <a className="button button-primary" href="#shop">
            Shop Walk Essentials
          </a>
          <a className="button button-secondary" href="#products">
            Build Your Walk Kit
          </a>
        </motion.div>
        <motion.p className="hero-assurance hero-copy-motion" variants={heroItemVariants} transformTemplate={keepHeroTransformOnCompositor}>
          Pre-launch walk kits for cleaner outings, easier packing, and happier pets.
        </motion.p>
        <motion.div
          className="hero-metrics hero-copy-motion"
          aria-label="WagTrail highlights"
          variants={heroItemVariants}
          transformTemplate={keepHeroTransformOnCompositor}
        >
          <span>
            <strong>3</strong> essentials
          </span>
          <span>
            <strong>1</strong> daily kit
          </span>
        </motion.div>
      </motion.div>

      <HeroStage reduceMotion={reduceMotion ?? false} />
    </section>
  );
}

function HeroStage({ reduceMotion }: { reduceMotion: boolean }) {
  const [floatReady, setFloatReady] = useState(reduceMotion);

  return (
    <motion.div
      className={`hero-stage ${floatReady ? "is-float-ready" : ""}`}
      variants={heroStageVariants}
      initial={reduceMotion ? false : "hidden"}
      animate={reduceMotion ? undefined : "visible"}
      aria-label="WagTrail dog and travel accessories"
    >
      <motion.div className="stage-shape shape-one" variants={heroStageItemVariants} aria-hidden="true" />
      <motion.div className="stage-shape shape-two" variants={heroStageItemVariants} aria-hidden="true" />
      <motion.img
        className="hero-image"
        src={heroImage}
        alt="A happy dog and cat in a warm WagTrail-style illustrated frame."
        variants={heroStageItemVariants}
      />
      <FloatingCard className="float-hydrate" image={hydrateCardImage} label="TrailSip" action="Hydrate" />
      <FloatingCard className="float-clean" image={pawPureCardImage} label="PawPure" action="Clean up" />
      <FloatingCard
        className="float-carry"
        image={carryCardImage}
        label="TrailPack"
        action="Carry"
        onRevealComplete={() => setFloatReady(true)}
      />
    </motion.div>
  );
}

type FloatingCardProps = {
  className: string;
  image: string;
  label: string;
  action: string;
  onRevealComplete?: () => void;
};

function FloatingCard({ className, image, label, action, onRevealComplete }: FloatingCardProps) {
  return (
    <motion.article
      className={`float-card ${className}`}
      variants={heroFloatVariants}
      onAnimationComplete={onRevealComplete}
      aria-label={`${label} product card`}
    >
      <span className="float-icon" aria-hidden="true">
        <img src={image} alt="" />
      </span>
      <div>
        <strong>{label}</strong>
        <span className="float-action">{action}</span>
      </div>
    </motion.article>
  );
}
