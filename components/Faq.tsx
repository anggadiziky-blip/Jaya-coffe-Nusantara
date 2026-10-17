"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { faqs } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="border-b border-line">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q} className="border-t border-line">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-2xl font-medium md:text-3xl">{f.q}</span>
              <span className="relative block h-4 w-4 shrink-0" aria-hidden>
                <span className="absolute left-0 top-1/2 h-px w-4 bg-current" />
                <motion.span
                  className="absolute left-0 top-1/2 h-px w-4 bg-current"
                  animate={{ rotate: isOpen ? 0 : 90 }}
                  transition={{ duration: 0.5, ease: EASE }}
                />
              </span>
            </button>
            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="overflow-hidden"
            >
              <p className="max-w-2xl pb-8 leading-relaxed text-stone-dark">{f.a}</p>
            </motion.div>
          </li>
        );
      })}
    </ul>
  );
}
