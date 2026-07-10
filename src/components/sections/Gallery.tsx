"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, ExternalLink } from "lucide-react";

import { RESTAURANT_DATA, type GalleryImage } from "@/data/restaurantData";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";

const SIZE_CLASSES: Record<GalleryImage["size"], string> = {
  lg: "col-span-2 row-span-2",
  wide: "col-span-2 row-span-1",
  sm: "col-span-1 row-span-1",
};

const item = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Gallery() {
  const { gallery, metadata } = RESTAURANT_DATA;

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
          description="Real plates, photographed at our tables in Nakagyo Ward — from molten cheese naan to saffron-streaked biryani."
        />

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.05 }}
          className="grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[180px] sm:gap-4 lg:grid-cols-4"
        >
          {gallery.map((photo) => (
            <motion.li
              key={photo.src + photo.caption}
              variants={item}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/8 bg-obsidian-card",
                SIZE_CLASSES[photo.size]
              )}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"
              />
              <span className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-obsidian/60 px-3 py-1 text-[11px] font-medium text-cream backdrop-blur-sm">
                {photo.caption}
              </span>
            </motion.li>
          ))}
        </motion.ul>

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
