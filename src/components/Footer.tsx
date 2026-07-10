"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Banknote,
  Check,
  Clock,
  Copy,
  CreditCard,
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react";

import { RESTAURANT_DATA } from "@/data/restaurantData";
import SectionHeading from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn, scrollToSection } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

export default function Footer() {
  const { metadata, contact, paymentMethods } = RESTAURANT_DATA;
  const [copied, setCopied] = useState(false);

  const copyJapaneseAddress = async () => {
    try {
      await navigator.clipboard.writeText(contact.address.japanese);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — leave the address selectable.
    }
  };

  return (
    <footer className="border-t border-white/5 bg-obsidian-soft">
      {/* Visit / Map block */}
      <section id="visit" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <SectionHeading
          eyebrow="Visit Us"
          title="Find Us in Nakagyo Ward"
          description={contact.address.accessHint}
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact & hours card */}
          <motion.div
            {...fadeUp}
            className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-obsidian-card p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-saffron/25 bg-saffron/10">
                <MapPin className="size-5 text-saffron-bright" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="font-display text-lg text-cream">Address</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-300">
                  {contact.address.english}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-stone-400" lang="ja">
                  {contact.address.japanese}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={copyJapaneseAddress}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "sm" }),
                      copied && "border-emerald-deep/60 text-emerald-soft"
                    )}
                  >
                    {copied ? (
                      <Check aria-hidden="true" />
                    ) : (
                      <Copy aria-hidden="true" />
                    )}
                    {copied ? "Copied!" : "Copy Japanese address"}
                  </button>
                  <a
                    href={metadata.gMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: "ghost", size: "sm" })}
                  >
                    <ExternalLink aria-hidden="true" />
                    Open in Google Maps
                  </a>
                </div>
                <p className="mt-3 text-xs text-stone-500">
                  Tip: copy the Japanese address and show it to your taxi driver.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-emerald-deep/40 bg-emerald-deep/10">
                <Clock className="size-5 text-emerald-soft" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg text-cream">Opening Hours</h3>
                {contact.hours.schedule.map((entry) => (
                  <p key={entry.days} className="mt-2 text-sm text-stone-300">
                    <span className="font-medium text-cream">{entry.days}</span>
                    <span className="mx-2 text-stone-600">·</span>
                    <span className="tabular-nums">{entry.time}</span>
                  </p>
                ))}
                <p className="mt-2 text-xs leading-relaxed text-stone-500">
                  {contact.hours.note}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-saffron/25 bg-saffron/10">
                <Phone className="size-5 text-saffron-bright" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-lg text-cream">Reservations</h3>
                <a
                  href={contact.phone.dial}
                  className="mt-2 inline-block text-lg font-semibold tabular-nums text-saffron-glow transition-colors hover:text-saffron-bright"
                >
                  {contact.phone.display}
                </a>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1.5 text-xs text-stone-400">
                    <CreditCard className="size-3.5" aria-hidden="true" />
                    <Banknote className="size-3.5" aria-hidden="true" />
                  </span>
                  {paymentMethods.modes.map((mode) => (
                    <Badge key={mode} tone="neutral">
                      {mode}
                    </Badge>
                  ))}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-stone-500">
                  {paymentMethods.note}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Embedded map */}
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.12 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-obsidian-card"
          >
            <iframe
              src={metadata.gMapsEmbedUrl}
              title={`Map to ${metadata.legalName}, Kyoto`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[380px] w-full border-0 lg:min-h-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row lg:px-8">
          <div className="text-center md:text-left">
            <p className="font-display text-lg text-cream">{metadata.brandName}</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-saffron-bright">
              {metadata.subTitle}
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {[
                { href: "#story", label: "Our Story" },
                { href: "#menu", label: "Menu" },
                { href: "#gallery", label: "Gallery" },
                { href: "#reviews", label: "Reviews" },
                { href: "#visit", label: "Visit Us" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.href.slice(1));
                    }}
                    className="text-sm text-stone-400 transition-colors hover:text-saffron-glow"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {[
                { href: metadata.tabelogUrl, label: "Tabelog" },
                { href: metadata.tabelogMenuUrl, label: "Menu on Tabelog" },
                { href: metadata.gMapsLink, label: "Google Maps" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-stone-500 transition-colors hover:text-saffron-glow"
                  >
                    {link.label}
                    <ExternalLink className="size-3" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-center text-xs leading-relaxed text-stone-500 md:text-right">
            © {new Date().getFullYear()} {metadata.legalName}
            <span className="block">Crafted with warmth in Kyoto</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
