"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SplitText } from "../motion/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  short = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  short?: boolean;
}) {
  return (
    <section className={`relative flex items-end overflow-hidden bg-espresso text-ivory ${short ? "min-h-[64svh]" : "min-h-[82svh]"}`}>
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: EASE }}
      >
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      {/* Clear contrast area for text over photography */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/40 to-espresso/45" />
      <div className="container-x relative pb-16 pt-40 md:pb-24">
        <motion.p
          className="eyebrow text-ivory/80"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
        >
          {eyebrow}
        </motion.p>
        <h1 className="mt-6 max-w-5xl font-serif text-[2.9rem] font-medium leading-[1.02] tracking-tight md:text-7xl lg:text-[5.25rem]">
          <SplitText text={title} delay={0.35} />
        </h1>
        {intro && (
          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 0.75 }}
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
