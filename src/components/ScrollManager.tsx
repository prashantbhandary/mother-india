"use client";

import { useEffect } from "react";

/**
 * Forces every page load / reload to start at the hero:
 * - disables the browser's automatic scroll restoration,
 * - strips any leftover #section hash from the URL,
 * - scrolls to the top.
 */
export default function ScrollManager() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}
