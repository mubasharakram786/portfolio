"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};

/**
 * Current year, resolved in the browser after hydration so the statically
 * prerendered page never bakes in (or shows) a stale year.
 */
export function CurrentYear() {
  const year = useSyncExternalStore(
    noop,
    () => new Date().getFullYear(),
    () => null,
  );
  return <>{year}</>;
}
