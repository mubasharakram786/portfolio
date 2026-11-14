"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Pixels the content drifts down while its section scrolls out of view. Negative drifts up. */
  offset?: number;
  /** Fade out as the section leaves the viewport. */
  fade?: boolean;
}

/** Scroll-linked drift for decorative/hero content. Disabled for reduced motion. */
export function Parallax({ children, className, offset = 80, fade = false }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <motion.div ref={ref} className={className} style={reduce ? undefined : { y, opacity: fade ? opacity : undefined }}>
      {children}
    </motion.div>
  );
}
