"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { TransitionLink } from "./motion/TransitionLink";
import { Logo } from "./Logo";
import { brand, nav } from "@/lib/data";

const EASE = [0.76, 0, 0.24, 1] as const;

export function Header() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 160 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setHidden(false);
  }, [pathname]);

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
  }, [open, lenis]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" || pathname === "" : pathname.startsWith(href));
  const solid = scrolled && !open;

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          solid ? "border-b border-line bg-ivory/92 text-espresso backdrop-blur-md" : "border-b border-transparent text-ivory"
        }`}
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="container-x flex h-20 items-center justify-between">
          {/* Emblem-only at small size, per logo application rules */}
          <TransitionLink href="/" aria-label="Jaya Coffee Nusantara, home" className="relative z-10 block h-11 w-11">
            <span className={`absolute inset-0 transition-opacity duration-500 ${solid ? "opacity-0" : "opacity-100"}`}>
              <Logo variant="emblem" tone="ivory" className="w-11" priority />
            </span>
            <span className={`absolute inset-0 transition-opacity duration-500 ${solid ? "opacity-100" : "opacity-0"}`}>
              <Logo variant="emblem" className="w-11" priority />
            </span>
          </TransitionLink>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
            {nav.slice(1, -1).map((item) => (
              <TransitionLink
                key={item.href}
                href={item.href}
                className="group relative py-2 text-[0.8125rem] font-medium tracking-wide"
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-tan transition-transform duration-500 ease-out-expo ${
                    isActive(item.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </TransitionLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <TransitionLink
              href="/contact"
              className={`hidden rounded-full border px-5 py-2.5 text-[0.8125rem] font-medium tracking-wide transition-colors duration-300 sm:inline-block ${
                solid
                  ? "border-espresso hover:bg-espresso hover:text-ivory"
                  : "border-ivory/60 hover:border-ivory hover:bg-ivory hover:text-espresso"
              }`}
            >
              Business Inquiry
            </TransitionLink>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <motion.span className="block h-px w-6 bg-current" animate={open ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }} />
              <motion.span className="block h-px w-6 bg-current" animate={open ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col bg-espresso text-ivory lg:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <nav className="container-x flex flex-1 flex-col justify-center gap-2 pt-20" aria-label="Mobile">
              {nav.map((item, i) => (
                <div key={item.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.7, ease: EASE, delay: 0.15 + i * 0.05 }}
                  >
                    <TransitionLink
                      href={item.href}
                      className={`block py-1 font-serif text-[2.6rem] leading-tight ${isActive(item.href) ? "italic text-tan" : ""}`}
                    >
                      {item.label}
                    </TransitionLink>
                  </motion.div>
                </div>
              ))}
            </nav>
            <motion.p
              className="container-x pb-10 text-sm text-ivory/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.5 } }}
              exit={{ opacity: 0 }}
            >
              {brand.tagline}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
