import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Tabelog online booking form for MOTHER INDIA (rcd=26043494).
 * The visit date is generated at call time (tomorrow, 7 PM) so the
 * link never goes stale.
 */
export function buildBookingUrl(lang: "en" | "ja" = "en") {
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const ymd = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
  const base =
    lang === "ja"
      ? "https://tabelog.com/booking/form_course/new"
      : "https://tabelog.com/en/booking/form_course/new";
  return `${base}?member=2&rcd=26043494&visit_date=${ymd}&visit_time=1900`;
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
