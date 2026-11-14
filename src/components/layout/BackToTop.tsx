"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrolledPast } from "@/hooks/useScrolledPast";

export function BackToTop() {
  const visible = useScrolledPast(700);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#home"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="fixed right-5 bottom-5 z-40 grid size-11 place-items-center rounded-full border border-border-strong bg-surface/90 text-foreground shadow-lift backdrop-blur transition-colors hover:border-accent/60 hover:text-accent sm:right-8 sm:bottom-8"
        >
          <ArrowUp className="size-4" aria-hidden />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
