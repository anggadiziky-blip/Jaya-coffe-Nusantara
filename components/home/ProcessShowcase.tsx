"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { tradeSteps as processSteps } from "@/lib/data";
import { Reveal } from "../motion/Reveal";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProcessShowcase() {
  const [active, setActive] = useState(0);

  return (
    <div className="mt-16 grid gap-12 lg:mt-24 lg:grid-cols-12 lg:gap-16">
      <ol className="lg:col-span-6">
        {processSteps.map((step, i) => (
          <Reveal as="li" key={step.title} delay={i * 0.06}>
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className="group grid w-full grid-cols-[3rem_1fr] gap-4 border-t border-ivory/15 py-7 text-left md:grid-cols-[4rem_1fr]"
              aria-pressed={active === i}
            >
              <span className={`pt-2 font-mono text-xs transition-colors duration-500 ${active === i ? "text-tan" : "text-ivory/50"}`}>
                0{i + 1}
              </span>
              <span>
                <span
                  className={`block font-serif text-3xl font-medium transition-all duration-500 ease-out-expo md:text-4xl ${
                    active === i ? "translate-x-2 text-ivory" : "text-ivory/50 group-hover:text-ivory/85"
                  }`}
                >
                  {step.title}
                </span>
                <motion.span
                  className="block overflow-hidden"
                  initial={false}
                  animate={{ height: active === i ? "auto" : 0, opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <span className="block max-w-md pt-3 pl-2 text-sm leading-relaxed text-ivory/75">{step.text}</span>
                </motion.span>
              </span>
            </button>
          </Reveal>
        ))}
      </ol>

      <Reveal className="relative aspect-[4/5] overflow-hidden lg:col-span-6 lg:aspect-auto" delay={0.1}>
        <AnimatePresence initial={false}>
          <motion.div
            key={active}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            <Image src={processSteps[active].image} alt={processSteps[active].title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </motion.div>
        </AnimatePresence>
      </Reveal>
    </div>
  );
}
