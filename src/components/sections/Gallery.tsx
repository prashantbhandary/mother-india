"use client";

import Image from "next/image";
import { Camera, ExternalLink } from "lucide-react";

import { RESTAURANT_DATA, type GalleryImage } from "@/data/restaurantData";
import SectionHeading from "@/components/SectionHeading";
import MotionSlider from "@/components/MotionSlider";
import { cn } from "@/lib/utils";

const SIZE_CLASSES: Record<GalleryImage["size"], string> = {
  lg: "w-[300px] sm:w-[420px]",
  wide: "w-[270px] sm:w-[360px]",
  sm: "w-[220px] sm:w-[280px]",
};

function GalleryCard({ photo }: { photo: GalleryImage }) {
  return (
    <figure
      className={cn(
        "group relative h-72 shrink-0 overflow-hidden rounded-3xl border border-white/8 bg-obsidian-card sm:h-80",
        SIZE_CLASSES[photo.size]
      )}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 640px) 420px, 300px"
        draggable={false}
        className="pointer-events-none select-none object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent"
      />
      <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-obsidian/60 px-3.5 py-1.5 text-xs font-medium text-cream backdrop-blur-sm">
        {photo.caption}
      </figcaption>
    </figure>
  );
}

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
          description="Real plates, photographed at our tables in Nakagyo Ward — drag, or simply watch the feast drift by."
        />
      </div>

      <MotionSlider label="Dish photo gallery" speed={32} step={380}>
        {gallery.map((photo) => (
          <GalleryCard key={photo.src + photo.caption} photo={photo} />
        ))}
      </MotionSlider>

      <div className="relative mx-auto mt-10 flex max-w-7xl flex-col items-center justify-center gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
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
    </section>
  );
}
