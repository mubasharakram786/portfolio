"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { useFinePointer } from "@/hooks/useFinePointer";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Maximum rotation in degrees. */
  max?: number;
}

const SPRING = { stiffness: 180, damping: 18, mass: 0.6 };

/**
 * Perspective tilt that follows the cursor, with a soft glare highlight.
 * Only active on mouse/trackpad devices without reduced-motion; elsewhere it
 * renders a plain wrapper so touch users get the static card.
 */
export function TiltCard({ children, className, max = 5 }: TiltCardProps) {
  const fine = useFinePointer();
  const reduce = useReducedMotion();
  const enabled = fine && !reduce;

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), SPRING);
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), SPRING);
  const gx = useTransform(px, (v) => `${v * 100}%`);
  const gy = useTransform(py, (v) => `${v * 100}%`);
  const glare = useMotionTemplate`radial-gradient(520px circle at ${gx} ${gy}, var(--glow), transparent 45%)`;

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    if (!enabled || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function reset() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.div
      className={cn("group/tilt relative h-full", className)}
      style={enabled ? { rotateX, rotateY, transformPerspective: 1200 } : undefined}
      onPointerMove={handleMove}
      onPointerLeave={reset}
    >
      {children}
      {enabled ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[var(--radius-card)] opacity-0 transition-opacity duration-500 group-hover/tilt:opacity-100"
          style={{ background: glare }}
        />
      ) : null}
    </motion.div>
  );
}
