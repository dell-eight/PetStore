import { motion, useReducedMotion } from "framer-motion";
import carryCardImage from "@assets/Hero_SmallCard_Carry.png";
import hydrateCardImage from "@assets/Hero_SmallCard_Hydrate.png";
import pawPureCardImage from "@assets/Hero_SmallCard_PawPure.png";
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
        <motion.p className="eyebrow" variants={heroItemVariants}>
          Welcome to WagTrail
        </motion.p>
        <motion.h1 variants={heroTitleVariants}>
          <motion.span variants={heroTitleLineVariants}>PET</motion.span>
          <motion.span variants={heroTitleLineVariants}>WALKS</motion.span>
          <motion.span variants={heroTitleLineVariants}>MADE</motion.span>
          <motion.span variants={heroTitleLineVariants}>EASIER</motion.span>
        </motion.h1>
        <motion.p className="hero-text" variants={heroItemVariants}>
          Hydrate, clean, and carry everything your pet needs for walks, parks, road trips, and everyday outdoor
          adventures.
        </motion.p>
        <motion.div className="hero-ctas" aria-label="Hero actions" variants={heroItemVariants}>
          <a className="button button-primary" href="#shop">
            Shop Walk Essentials
          </a>
          <a className="button button-secondary" href="#products">
            Build Your Walk Kit
          </a>
        </motion.div>
        <motion.p className="hero-assurance" variants={heroItemVariants}>
          Pre-launch walk kits for cleaner outings, easier packing, and happier pets.
        </motion.p>
        <motion.div className="hero-metrics" aria-label="WagTrail highlights" variants={heroItemVariants}>
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
  return (
    <motion.div
      className="hero-stage"
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
      <FloatingCard className="float-carry" image={carryCardImage} label="TrailPack" action="Carry" />
    </motion.div>
  );
}

type FloatingCardProps = {
  className: string;
  image: string;
  label: string;
  action: string;
};

function FloatingCard({ className, image, label, action }: FloatingCardProps) {
  return (
    <motion.article className={`float-card ${className}`} variants={heroFloatVariants} aria-label={`${label} product card`}>
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
