"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";
import { nav } from "@/lib/data";
import { Logo } from "../Logo";

type Phase = "idle" | "cover" | "covered" | "reveal";

const TransitionContext = createContext<{ navigate: (href: string) => void }>({
  navigate: () => {},
});

export const usePageTransition = () => useContext(TransitionContext);

const EASE = [0.76, 0, 0.24, 1] as const;

// "/about/" and "/about" are the same page (static export uses trailing slashes).
const norm = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p);

function labelFor(pathname: string) {
  const p = norm(pathname);
  const match = [...nav].reverse().find((n) => (n.href === "/" ? p === "/" : p.startsWith(n.href)));
  return match?.label ?? "";
}

// A single espresso panel slides up to cover the page, the route changes
// underneath it, then the panel continues upward to reveal the new page.
export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const [label, setLabel] = useState("");
  const target = useRef<string | null>(null);

  const navigate = useCallback(
    (href: string) => {
      const url = new URL(href, window.location.href);
      if (norm(url.pathname) === norm(pathname)) {
        // Same page, different query (e.g. a preset on the inquiry form): update in place.
        if (url.search !== window.location.search) {
          router.push(href, { scroll: false });
          return;
        }
        const el = url.hash ? document.getElementById(url.hash.slice(1)) : null;
        if (lenis) lenis.scrollTo(el ?? 0, { offset: el ? -80 : 0 });
        else window.scrollTo({ top: el ? el.offsetTop - 80 : 0, behavior: "smooth" });
        return;
      }
      if (phase !== "idle") return;
      if (reduce) {
        router.push(href);
        return;
      }
      target.current = href;
      setLabel(labelFor(url.pathname));
      router.prefetch(href);
      lenis?.stop();
      setPhase("cover");
    },
    [pathname, phase, reduce, router, lenis],
  );

  // Once the new route has rendered underneath the curtain, reveal it.
  useEffect(() => {
    if (phase !== "covered") return;
    lenis?.start();
    const hash = target.current?.split("#")[1];
    const anchor = hash ? document.getElementById(hash) : null;
    if (anchor) {
      const top = anchor.getBoundingClientRect().top + window.scrollY - 80;
      if (lenis) lenis.scrollTo(top, { immediate: true, force: true });
      else window.scrollTo(0, top);
    } else {
      lenis?.scrollTo(0, { immediate: true, force: true });
      window.scrollTo(0, 0);
    }
    setPhase("reveal");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const onComplete = () => {
    if (phase === "cover") {
      setPhase("covered");
      if (target.current) router.push(target.current, { scroll: false });
    } else if (phase === "reveal") {
      setPhase("idle");
      target.current = null;
    }
  };

  const y = phase === "idle" ? "100%" : phase === "reveal" ? "-100%" : "0%";
  const shown = phase === "cover" || phase === "covered";

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      <motion.div
        aria-hidden
        className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso text-ivory"
        initial={false}
        animate={{ y }}
        transition={phase === "idle" ? { duration: 0 } : { duration: phase === "cover" ? 0.75 : 0.85, ease: EASE }}
        onAnimationComplete={onComplete}
        style={{ pointerEvents: phase === "idle" ? "none" : "auto" }}
      >
        <motion.div
          className="flex flex-col items-center gap-6"
          animate={{ opacity: shown ? 1 : 0, y: phase === "reveal" ? -24 : 0 }}
          transition={{ duration: 0.5, ease: EASE, delay: phase === "cover" ? 0.3 : 0 }}
        >
          <Logo variant="emblem" tone="ivory" className="w-14" />
          {label && <span className="font-serif text-4xl italic md:text-5xl">{label}</span>}
          <motion.span
            className="block h-px w-24 origin-left bg-tan"
            animate={{ scaleX: phase === "covered" ? 1 : 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          />
        </motion.div>
      </motion.div>
    </TransitionContext.Provider>
  );
}
