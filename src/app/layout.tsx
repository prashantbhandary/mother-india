import type { Metadata, Viewport } from "next";
import {
  Inter,
  Noto_Sans_JP,
  Noto_Serif_JP,
  Playfair_Display,
} from "next/font/google";

import { RESTAURANT_DATA } from "@/data/restaurantData";
import { LanguageProvider } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollManager from "@/components/ScrollManager";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
});

const notoSerifJp = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  display: "swap",
});

const { metadata: brand } = RESTAURANT_DATA;

export const metadata: Metadata = {
  title: {
    default: `${brand.brandName} | ${brand.subTitle}`,
    template: `%s | ${brand.brandName} Kyoto`,
  },
  description: brand.description.en,
  keywords: brand.seoKeywords,
  openGraph: {
    title: `${brand.brandName} | ${brand.subTitle}`,
    description: brand.tagline.en,
    type: "website",
    locale: "en_US",
    alternateLocale: "ja_JP",
    siteName: brand.legalName,
  },
};

export const viewport: Viewport = {
  themeColor: "#0F0F11",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${notoSansJp.variable} ${notoSerifJp.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-obsidian text-cream">
        <LanguageProvider>
          <ScrollManager />
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
