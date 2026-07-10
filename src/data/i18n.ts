/**
 * Bilingual (English / Japanese) support.
 * `L` is a localized string pair — every user-facing string in the data
 * module and components resolves through it via `useLang().t`.
 */

export type Lang = "en" | "ja";

export interface L {
  en: string;
  ja: string;
}

/** Shared UI strings used across multiple components. */
export const UI = {
  nav: {
    story: { en: "Our Story", ja: "私たちについて" },
    menu: { en: "Menu", ja: "メニュー" },
    gallery: { en: "Gallery", ja: "ギャラリー" },
    reviews: { en: "Reviews", ja: "口コミ" },
    visit: { en: "Visit Us", ja: "アクセス" },
    reserve: { en: "Reserve a Table", ja: "オンライン予約" },
    callNow: { en: "Call Now", ja: "電話する" },
    brandSub: { en: "Restaurant & Bar · Kyoto", ja: "レストラン＆バー・京都" },
  },
  hero: {
    openDaily: { en: "Open Daily", ja: "年中無休" },
    explore: { en: "Explore Our Menu", ja: "メニューを見る" },
    location: {
      en: "4F Hijikata Bldg. · Nakagyo Ward",
      ja: "ヒジカタビル4F・中京区",
    },
    scrollLabel: { en: "Scroll to our story", ja: "ストーリーへスクロール" },
    daysLine: { en: "Monday - Sunday", ja: "月曜〜日曜" },
  },
  menu: {
    eyebrow: { en: "From Our Kitchen", ja: "キッチンから" },
    title: { en: "The Full Menu", ja: "フルメニュー" },
    description: {
      en: "Ground-from-scratch spices, overnight-simmered lentils, and breads baked to order — every dish adjusted to your palate.",
      ja: "挽きたてのスパイス、一晩煮込んだ豆、焼きたてのパン — すべてのお料理をお好みに合わせてお作りします。",
    },
    signatureLabel: { en: "Signature dishes", ja: "看板メニュー" },
    footerLine: {
      en: "Spice levels fully customizable · Jain & Halal preparations on request",
      ja: "辛さ調整自由・ジャイン／ハラール対応可",
    },
    tabelogLink: { en: "Full menu on Tabelog", ja: "食べログでフルメニューを見る" },
    recommendedLabel: { en: "House recommendation", ja: "おすすめ" },
  },
  gallery: {
    eyebrow: { en: "From the Table", ja: "テーブルから" },
    title: { en: "A Feast for the Eyes First", ja: "まずは目でご馳走を" },
    scrollDescription: {
      en: "Keep scrolling — the table rolls past you, dish by dish.",
      ja: "スクロールすると、料理が一皿ずつ流れていきます。",
    },
    swipeDescription: {
      en: "Real plates, photographed at our tables in Nakagyo Ward — swipe through the feast.",
      ja: "中京区の店内で撮影した本物のお料理 — スワイプしてご覧ください。",
    },
    keepScrolling: { en: "Keep scrolling", ja: "スクロールを続ける" },
    allPhotos: { en: "See all photos on Tabelog", ja: "食べログで全ての写真を見る" },
    readReviews: { en: "Read reviews on Tabelog", ja: "食べログの口コミを読む" },
  },
  amenities: {
    eyebrow: { en: "Everything You Need", ja: "快適なひととき" },
    title: {
      en: "Thoughtful Comforts, Warm Hospitality",
      ja: "行き届いた設備と、心のこもったおもてなし",
    },
    description: {
      en: "From dedicated Jain preparation to family-friendly seating, every detail is designed around your comfort.",
      ja: "ジャイン専用の調理からお子様連れのお席まで、細部までお客様の快適さを考えています。",
    },
  },
  reviews: {
    eyebrow: { en: "Guest Stories", ja: "お客様の声" },
    title: {
      en: "Loved by Travelers From Around the World",
      ja: "世界中の旅行者に愛されています",
    },
    description: {
      en: "Real words from real guests — rated 5.0 by diners who found their way up to the fourth floor.",
      ja: "4階まで足を運んでくださったお客様からの、5.0評価の本物の声。",
    },
  },
  story: {
    eyebrow: { en: "Ambience & Heritage", ja: "雰囲気と伝統" },
    titleLead: { en: "A Hidden Gem Above the", ja: "京都の路地に佇む" },
    titleAccent: { en: "Lanes of Kyoto", ja: "隠れた名店" },
    body: {
      en: "Step inside and the city hum gives way to the aroma of toasted cumin, simmering tomato gravies, and fresh-baked rotis — the homey warmth of an Indian family kitchen in the heart of Nakagyo Ward.",
      ja: "一歩足を踏み入れると、街の喧騒はクミンの香ばしさ、煮込みトマトグレービー、焼きたてロティの香りへと変わります。中京区の中心にある、インドの家庭の温かさそのままの空間です。",
    },
    chip4f: { en: "Hijikata Building", ja: "ヒジカタビル" },
  },
  visit: {
    eyebrow: { en: "Visit Us", ja: "アクセス" },
    title: { en: "Find Us in Nakagyo Ward", ja: "中京区でお待ちしています" },
    address: { en: "Address", ja: "住所" },
    hours: { en: "Opening Hours", ja: "営業時間" },
    reservations: { en: "Reservations", ja: "ご予約" },
    copyAddress: { en: "Copy Japanese address", ja: "日本語住所をコピー" },
    copied: { en: "Copied!", ja: "コピーしました！" },
    openMaps: { en: "Open in Google Maps", ja: "Googleマップで開く" },
    taxiTip: {
      en: "Tip: copy the Japanese address and show it to your taxi driver.",
      ja: "ヒント：日本語住所をコピーして、タクシーの運転手にご提示ください。",
    },
    bookOnline: { en: "Book online", ja: "オンライン予約" },
    tabelog: { en: "Tabelog", ja: "食べログ" },
    tabelogMenu: { en: "Menu on Tabelog", ja: "食べログのメニュー" },
    googleMaps: { en: "Google Maps", ja: "Googleマップ" },
    crafted: { en: "Crafted with warmth in Kyoto", ja: "京都より心を込めて" },
  },
} as const;
