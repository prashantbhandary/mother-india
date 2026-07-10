import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smooth-scrolls to an in-page section without writing a #hash to the URL,
 * so reloading the site always starts back at the top.
 */
export function scrollToSection(id: string) {
  const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
    return;
  }
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
}
