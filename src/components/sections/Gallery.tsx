"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import { RESTAURANT_DATA } from "@/data/restaurantData";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const SLIDE_DURATION = 5000; // ms each photo stays in the spotlight

export default function Gallery() {
  const { gallery, metadata } = RESTAURANT_DATA;
  const reduceMotion = useReducedMotion();
  const count = gallery.length;

  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: 1 | -1) =>
      setSlide(([current]) => [(current + dir + count) % count, dir]),
    [count]
  );

  const jumpTo = (target: number) =>
    setSlide(([current]) => [target, target > current ? 1 : -1]);

  // Auto-advance the spotlight unless hovered or reduced motion is preferred.
  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = setTimeout(() => go(1), SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [index, paused, reduceMotion, go]);

  const active = gallery[index];

  return (
    <section id="gallery" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(21,128,61,0.06),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="From the Table"
          title="A Feast for the Eyes First"
          description="A slow tour through our kitchen's greatest hits — sit back and watch, or swipe through at your own pace."
        />

        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Restaurant photo spotlight"
          className="mx-auto max-w-5xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Spotlight frame */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) go(1);
              else if (info.offset.x > 80) go(-1);
            }}
            className="relative aspect-[4/3] cursor-grab overflow-hidden rounded-3xl border border-white/10 bg-obsidian-card shadow-[0_32px_96px_-32px_rgba(0,0,0,0.9)] active:cursor-grabbing sm:aspect-[16/9]"
          >
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={active.src}
                custom={direction}
                initial={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: direction * 48, scale: 1.04 }
                }
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={
                  reduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: direction * -48, scale: 0.98 }
                }
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                {/* Slow Ken Burns drift while the photo is in the spotlight */}
                <motion.div
                  animate={
                    reduceMotion ? undefined : { scale: [1, 1.08], x: [0, -10] }
                  }
                  transition={{
                    duration: SLIDE_DURATION / 1000 + 1.5,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.src}
                    alt={active.alt}
                    fill
                    sizes="(min-width: 1024px) 1024px, 100vw"
                    draggable={false}
                    className="pointer-events-none select-none object-cover"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Editorial overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/10 to-obsidian/20"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={active.caption}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-2xl leading-tight text-cream sm:text-4xl"
                >
                  {active.caption}
                </motion.p>
              </AnimatePresence>
              <p className="shrink-0 pb-1 text-xs font-medium tabular-nums tracking-[0.3em] text-saffron-glow sm:text-sm">
                {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </p>
            </div>

            {/* Auto-advance progress bar */}
            {!reduceMotion && !paused && (
              <motion.div
                key={`progress-${index}`}
                aria-hidden="true"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-saffron"
              />
            )}

            {/* Arrows */}
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 sm:px-4">
              <button
                type="button"
                aria-label="Previous photo"
                onClick={() => go(-1)}
                className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-obsidian/60 text-cream backdrop-blur-md transition-colors hover:border-saffron/60 hover:text-saffron-glow"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={() => go(1)}
                className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-obsidian/60 text-cream backdrop-blur-md transition-colors hover:border-saffron/60 hover:text-saffron-glow"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </motion.div>

          {/* Thumbnail rail */}
          <div className="mt-5 flex gap-2.5 overflow-x-auto pb-2">
            {gallery.map((photo, thumbIndex) => (
              <button
                key={photo.src + photo.caption}
                type="button"
                aria-label={`Show photo: ${photo.caption}`}
                aria-current={thumbIndex === index}
                onClick={() => jumpTo(thumbIndex)}
                className={cn(
                  "relative h-14 w-20 shrink-0 cursor-pointer overflow-hidden rounded-xl border transition-all duration-200",
                  thumbIndex === index
                    ? "border-saffron ring-2 ring-saffron/40"
                    : "border-white/10 opacity-50 hover:opacity-100"
                )}
              >
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes="80px"
                  draggable={false}
                  className="pointer-events-none select-none object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={metadata.tabelogPhotosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-cream transition-colors hover:border-saffron/60 hover:text-saffron-glow"
          >
            <Camera className="size-4" aria-hidden="true" />
            See all photos on Tabelog
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
          <a
            href={metadata.tabelogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-stone-400 transition-colors hover:text-cream"
          >
            Read reviews on Tabelog
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
