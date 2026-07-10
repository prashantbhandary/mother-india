"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

import { RESTAURANT_DATA, type PricedItem } from "@/data/restaurantData";
import SectionHeading from "@/components/SectionHeading";
import MotionSlider from "@/components/MotionSlider";
import { cn } from "@/lib/utils";

interface SignatureDish extends PricedItem {
  photo: string;
  sectionName: string;
}

function SignatureCard({ dish }: { dish: SignatureDish }) {
  return (
    <figure className="group relative h-64 w-64 shrink-0 overflow-hidden rounded-3xl border border-white/8 bg-obsidian-card sm:h-72 sm:w-72">
      <Image
        src={dish.photo}
        alt={dish.name}
        fill
        sizes="288px"
        draggable={false}
        className="pointer-events-none select-none object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/20 to-transparent"
      />
      <figcaption className="absolute inset-x-0 bottom-0 p-5">
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-saffron-glow">
          {dish.sectionName}
        </p>
        <div className="flex items-baseline justify-between gap-3">
          <span className="font-display text-lg leading-tight text-cream">
            {dish.name}
          </span>
          {dish.price && (
            <span className="shrink-0 text-sm font-medium tabular-nums text-stone-300">
              {dish.price}
            </span>
          )}
        </div>
      </figcaption>
    </figure>
  );
}

function MenuRow({ item }: { item: PricedItem }) {
  return (
    <li className="flex items-start gap-4 border-b border-white/5 py-3.5">
      {item.photo && (
        <Image
          src={item.photo}
          alt={item.name}
          width={64}
          height={64}
          className="size-16 shrink-0 rounded-xl border border-white/10 object-cover"
        />
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-3">
          <h4
            className={cn(
              "flex items-center gap-1.5 text-sm font-medium sm:text-base",
              item.recommended ? "text-saffron-glow" : "text-cream"
            )}
          >
            {item.name}
            {item.recommended && (
              <Star
                className="size-3.5 shrink-0 fill-saffron-bright text-saffron-bright"
                aria-label="House recommendation"
              />
            )}
          </h4>
          <span
            aria-hidden="true"
            className="mb-1 flex-1 border-b border-dotted border-white/15"
          />
          {item.price && (
            <span className="shrink-0 text-sm tabular-nums text-stone-300 sm:text-base">
              {item.price}
            </span>
          )}
        </div>
        {item.description && (
          <p className="mt-1 pr-2 text-xs leading-relaxed text-stone-500">
            {item.description}
          </p>
        )}
      </div>
    </li>
  );
}

export default function MenuShowcase() {
  const { fullMenu, metadata } = RESTAURANT_DATA;
  const { sections, curryChoices } = fullMenu;
  const [activeId, setActiveId] = useState(sections[0].id);

  const active = sections.find((section) => section.id === activeId) ?? sections[0];
  const midpoint = Math.ceil(active.items.length / 2);
  const columns = [active.items.slice(0, midpoint), active.items.slice(midpoint)];

  const signatureDishes: SignatureDish[] = sections.flatMap((section) =>
    section.items
      .filter((item): item is PricedItem & { photo: string } =>
        Boolean(item.photo)
      )
      .map((item) => ({ ...item, sectionName: section.name }))
  );

  return (
    <section id="menu" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(220,38,38,0.05),transparent_50%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="From Our Kitchen"
          title="The Full Menu"
          description="Ground-from-scratch spices, overnight-simmered lentils, and breads baked to order — every dish adjusted to your palate."
        />
      </div>

      {/* Signature dishes slider */}
      <MotionSlider
        label="Signature dishes"
        speed={24}
        step={300}
        className="mb-14"
      >
        {signatureDishes.map((dish) => (
          <SignatureCard key={dish.name} dish={dish} />
        ))}
      </MotionSlider>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Category tabs with sliding indicator */}
        <div
          role="tablist"
          aria-label="Menu categories"
          className="mb-10 flex flex-wrap justify-center gap-2"
        >
          {sections.map((section) => {
            const isActive = section.id === activeId;
            return (
              <button
                key={section.id}
                role="tab"
                aria-selected={isActive}
                aria-controls="menu-panel"
                type="button"
                onClick={() => setActiveId(section.id)}
                className={cn(
                  "relative cursor-pointer rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-200 sm:px-5",
                  isActive ? "text-obsidian" : "text-stone-400 hover:text-cream"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="menu-tab-pill"
                    className="absolute inset-0 rounded-full bg-saffron shadow-[0_0_24px_-6px_rgba(217,119,6,0.7)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{section.name}</span>
              </button>
            );
          })}
        </div>

        {/* Animated section panel */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            id="menu-panel"
            role="tabpanel"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "grid items-start gap-8",
              active.image && "lg:grid-cols-[380px_1fr] lg:gap-12"
            )}
          >
            {/* Section feature image */}
            {active.image && (
              <figure className="overflow-hidden rounded-3xl border border-white/10 bg-obsidian-card lg:sticky lg:top-24">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={active.image.src}
                    alt={active.image.alt}
                    fill
                    sizes="(min-width: 1024px) 380px, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-5 py-4 text-xs leading-relaxed text-stone-400">
                  {active.image.caption}
                </figcaption>
              </figure>
            )}

            <div>
              {active.note && (
                <p className="mb-6 rounded-2xl border border-saffron/20 bg-saffron/5 px-5 py-3.5 text-xs leading-relaxed text-stone-300 sm:text-sm">
                  {active.note}
                </p>
              )}

              {/* Curry chooser for dinner sets */}
              {active.id === "sets" && (
                <div className="mb-6 flex flex-wrap gap-2">
                  {curryChoices.map((choice) => (
                    <span
                      key={choice}
                      className="rounded-full border border-emerald-deep/40 bg-emerald-deep/10 px-3 py-1 text-[11px] font-medium text-emerald-soft"
                    >
                      {choice}
                    </span>
                  ))}
                </div>
              )}

              <div className="grid gap-x-10 md:grid-cols-2">
                {columns.map((columnItems, columnIndex) => (
                  <ul key={columnIndex}>
                    {columnItems.map((item) => (
                      <MenuRow key={item.name} item={item} />
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="mt-12 flex flex-col items-center justify-center gap-2 text-center text-sm text-stone-500 sm:flex-row sm:gap-6">
          <span>
            Spice levels fully customizable · Jain &amp; Halal preparations on
            request
          </span>
          <a
            href={metadata.tabelogMenuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-saffron-glow transition-colors hover:text-saffron-bright"
          >
            Full menu on Tabelog
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  );
}
