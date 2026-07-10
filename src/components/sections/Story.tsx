"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Flame, HandHeart, type LucideIcon } from "lucide-react";

import { RESTAURANT_DATA } from "@/data/restaurantData";
import { UI, type L } from "@/data/i18n";
import { useLang } from "@/components/LanguageProvider";

const easeOut = [0.22, 1, 0.36, 1] as const;

const HIGHLIGHTS: { icon: LucideIcon; title: L; text: L }[] = [
  {
    icon: Building2,
    title: { en: "A Fourth-Floor Surprise", ja: "4階のサプライズ" },
    text: {
      en: "Follow our street-level signboard up the Hijikata Building — an elevator ride away from one of Kyoto's warmest dining rooms.",
      ja: "通りの看板を目印にヒジカタビルへ。エレベーターを上がれば、京都で一番温かなダイニングが待っています。",
    },
  },
  {
    icon: Flame,
    title: { en: "Your Palate, Your Spice", ja: "あなた好みの辛さで" },
    text: {
      en: "Every curry is adjusted to your exact spice level — from gentle and aromatic to boldly fiery, cooked fresh to order.",
      ja: "すべてのカレーはご注文ごとに作りたて。マイルドから激辛まで、お好みの辛さに調整します。",
    },
  },
  {
    icon: HandHeart,
    title: { en: "Jain & Vegetarian Devotion", ja: "ジャイン＆ベジタリアンへの想い" },
    text: {
      en: "Dedicated Jain and vegetarian menus prepared with absolute care, honoring tradition without compromise.",
      ja: "伝統に忠実なジャイン・ベジタリアン専用メニューを、一切の妥協なく心を込めてご用意します。",
    },
  },
];

export default function Story() {
  const { contact } = RESTAURANT_DATA;
  const { t } = useLang();

  return (
    <section id="story" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(217,119,6,0.07),transparent_55%)]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-saffron-bright">
            {t(UI.story.eyebrow)}
          </p>
          <h2 className="font-display text-3xl leading-tight text-cream sm:text-4xl md:text-5xl">
            {t(UI.story.titleLead)}{" "}
            <span className="text-saffron-glow">{t(UI.story.titleAccent)}</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-stone-400">
            {t(contact.address.accessHint)} {t(UI.story.body)}
          </p>

          <ul className="mt-10 space-y-6">
            {HIGHLIGHTS.map((highlight, index) => (
              <motion.li
                key={highlight.title.en}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: index * 0.12, duration: 0.55, ease: easeOut }}
                className="flex items-start gap-4"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-saffron/25 bg-saffron/10">
                  <highlight.icon
                    className="size-5 text-saffron-bright"
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <h3 className="font-display text-lg text-cream">
                    {t(highlight.title)}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-400">
                    {t(highlight.text)}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Visual collage */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: easeOut }}
            className="relative aspect-[4/5] w-4/5 overflow-hidden rounded-3xl border border-white/10"
          >
            <Image
              src="/images/menu/two-curry-thali.jpg"
              alt="MOTHER INDIA set thali with palak curry, butter curry, chicken tikka, naan and rice"
              fill
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 56 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.15, duration: 0.7, ease: easeOut }}
            className="absolute -bottom-10 right-0 aspect-square w-1/2 overflow-hidden rounded-3xl border border-white/10 shadow-[0_24px_64px_-24px_rgba(0,0,0,0.8)]"
          >
            <Image
              src="/images/gallery/bar-bottle-shelf.jpg"
              alt="Wooden shelves lined with Himalayan and Indian beer bottles at the bar"
              fill
              sizes="(min-width: 1024px) 20vw, 40vw"
              className="object-cover"
            />
          </motion.div>

          {/* Floating accent chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.35, duration: 0.5, ease: easeOut }}
            className="absolute -left-2 top-8 rounded-2xl border border-white/10 bg-obsidian-card/90 px-5 py-4 shadow-[0_16px_48px_-16px_rgba(0,0,0,0.8)] backdrop-blur-md sm:-left-6"
          >
            <p className="font-display text-2xl text-saffron-glow">4F</p>
            <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.25em] text-stone-400">
              {t(UI.story.chip4f)}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
