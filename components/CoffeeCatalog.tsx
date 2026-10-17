"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { origins, products } from "@/lib/data";
import { ProductCard } from "./ProductCard";

const EASE = [0.16, 1, 0.3, 1] as const;
const species = ["All", "Arabica", "Robusta"] as const;
const islandOf = (slug: string) => origins.find((o) => o.slug === slug)?.island ?? "";
const islands = ["All islands", ...Array.from(new Set(origins.map((o) => o.island)))];

export function CoffeeCatalog() {
  const [sp, setSp] = useState<(typeof species)[number]>("All");
  const [isl, setIsl] = useState("All islands");

  const list = useMemo(
    () => products.filter((p) => (sp === "All" || p.species === sp) && (isl === "All islands" || islandOf(p.originSlug) === isl)),
    [sp, isl],
  );

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-[0.8125rem] font-medium transition-colors duration-300 ${
      active ? "border-espresso bg-espresso text-ivory" : "border-espresso/20 text-espresso hover:border-espresso"
    }`;

  return (
    <>
      <div className="flex flex-col gap-6 border-b border-line pb-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by species">
          {species.map((s) => (
            <button key={s} type="button" onClick={() => setSp(s)} className={chip(sp === s)} aria-pressed={sp === s}>
              {s}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by island">
          {islands.map((i) => (
            <button key={i} type="button" onClick={() => setIsl(i)} className={chip(isl === i)} aria-pressed={isl === i}>
              {i}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-6 font-mono text-xs uppercase tracking-wider text-stone-dark" aria-live="polite">
        {list.length} {list.length === 1 ? "profile" : "profiles"}
      </p>

      <motion.div layout className="mt-10 grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.04 }}
            >
              <ProductCard product={p} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {list.length === 0 && <p className="py-24 text-center font-serif text-2xl text-stone-dark">No profiles match this combination.</p>}
    </>
  );
}
