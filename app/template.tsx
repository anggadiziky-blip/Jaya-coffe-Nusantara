"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

// Re-mounts on every navigation: the new page settles in as the curtain lifts.
// The very first page load renders immediately so content never waits on JS.
let hasMounted = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const animate = hasMounted;
  useEffect(() => {
    hasMounted = true;
  }, []);
  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 40 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
    >
      {children}
    </motion.div>
  );
}
