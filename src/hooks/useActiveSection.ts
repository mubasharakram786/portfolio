"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in view. A section becomes "active" when
 * it crosses a thin band slightly above the middle of the viewport.
 */
export function useActiveSection(ids: readonly string[], initial = "home") {
  const [active, setActive] = useState(initial);
  const key = ids.join("|");

  useEffect(() => {
    const elements = key
      .split("|")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
