"use client";

import { useSyncExternalStore } from "react";

const noop = () => () => {};

/** False during SSR / hydration, true afterwards — avoids theme hydration mismatches. */
export function useMounted() {
  return useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );
}
