"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SplitText } from "../motion/Reveal";
import { Button } from "../ui/Button";
import { brand, images } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

export function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-end overflow-hidden bg-espresso text-ivory">
      <motion.div className="absolute inset-0" style={{ y }}>
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.6, ease: EASE }}
        >
          <Image src={images.highlands} alt="Coffee-growing highlands of Indonesia" fill priority sizes="100vw" className="object-cover" />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/92 via-espresso/35 to-espresso/50" />

      <motion.div className="container-x relative w-full pb-14 pt-40 md:pb-20" style={{ opacity: fade }}>
        <motion.p
          className="eyebrow text-ivory/80"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.4 }}
        >
          {brand.essence}
        </motion.p>
        <h1 className="mt-6 max-w-5xl font-serif text-[3.2rem] font-medium leading-[1] tracking-tight md:text-8xl lg:text-[7rem]">
          <SplitText text="From Nusantara" delay={0.5} />{" "}
          <span className="italic">
            <SplitText text="to the World." delay={0.7} />
          </span>
        </h1>

        <div className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <motion.p
            className="max-w-md text-base leading-relaxed text-ivory/80 md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1 }}
          >
            {brand.intro}
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.1 }}
          >
            <Button href="/origins" variant="light">
              Explore origins
            </Button>
            <Button href="/contact" variant="outline-light">
              Business inquiry
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="mt-14 flex items-center justify-between border-t border-ivory/20 pt-6 text-xs tracking-wide text-ivory/65"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.4 }}
        >
          <span className="flex items-center gap-3">
            <span className="relative block h-8 w-px overflow-hidden bg-ivory/20">
              <motion.span
                className="absolute inset-x-0 top-0 h-1/2 bg-ivory"
                animate={{ y: ["-100%", "200%"] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
            Scroll
          </span>
          <span className="hidden font-mono text-[0.6875rem] uppercase tracking-[0.14em] sm:block">
            Sumatra &middot; Java &middot; Sulawesi &middot; Bali &middot; Flores &middot; Papua
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
