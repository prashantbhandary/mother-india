/**
 * Central data module for MOTHER INDIA RESTAURANT & BAR, Kyoto.
 * All page copy, menu content, contact details, and testimonials live here
 * so components stay purely presentational.
 *
 * Menu items, prices, photos, and Japanese names sourced from the
 * restaurant's official Tabelog listing
 * (https://tabelog.com/en/kyoto/A2601/A260202/26043494/).
 *
 * Every user-facing string is a localized `L` pair ({ en, ja }) resolved
 * through `useLang().t` at render time.
 */

import type { L } from "@/data/i18n";

export type AmenityIcon =
  | "Utensils"
  | "ShoppingBag"
  | "CalendarCheck"
  | "Leaf"
  | "Heart"
  | "Wifi"
  | "Smile"
  | "Car";

export interface PricedItem {
  name: L;
  /** Display-ready price, e.g. "¥1,050". Omitted when included with sets / variable. */
  price?: string;
  description?: L;
  /** Marked as an official house recommendation on the restaurant's Tabelog menu. */
  recommended?: boolean;
  /** Local photo path under /public when real photography exists for this item. */
  photo?: string;
}

export interface FullMenuSection {
  id: string;
  name: L;
  /** Optional note rendered above the section's item list. */
  note?: L;
  /** Optional feature image shown beside the section's list. */
  image?: { src: string; alt: string; caption: L };
  items: PricedItem[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: L;
  /** Card sizing hint: "lg" = widest, "wide" = medium, "sm" = compact. */
  size: "lg" | "wide" | "sm";
}

export interface Testimonial {
  quote: L;
  author: L;
  rating: number;
  context: L;
}

export interface Amenity {
  label: L;
  available: boolean;
  icon: AmenityIcon;
}

export interface ScheduleEntry {
  days: L;
  time: string;
}

export interface RestaurantData {
  metadata: {
    brandName: string;
    subTitle: string;
    legalName: string;
    tagline: L;
    description: L;
    seoKeywords: string[];
    gMapsLink: string;
    gMapsEmbedUrl: string;
    tabelogUrl: string;
    tabelogMenuUrl: string;
    tabelogPhotosUrl: string;
    heroImage: { src: string; alt: string };
  };
  contact: {
    phone: { display: string; dial: string };
    address: { english: string; japanese: string; accessHint: L };
    hours: { schedule: ScheduleEntry[]; note: L };
  };
  amenities: Amenity[];
  paymentMethods: { modes: L[]; note: L };
  fullMenu: {
    /** The nine curry choices offered with every dinner set. */
    curryChoices: L[];
    sections: FullMenuSection[];
  };
  gallery: GalleryImage[];
  testimonials: Testimonial[];
}

export const RESTAURANT_DATA: RestaurantData = {
  metadata: {
    brandName: "Mother India",
    subTitle: "Restaurant & Bar Kyoto",
    legalName: "MOTHER INDIA RESTAURANT & BAR",
    tagline: {
      en: "Authentic Indian & Jain Culinary Excellence in the Heart of Kyoto",
      ja: "京都の中心で味わう、本格インド＆ジャイン料理",
    },
    description: {
      en: "Experience the rich tapestry of authentic Indian cuisine. Located on the 4th floor in Nakagyo Ward, we specialize in meticulously crafted traditional curries, custom spice profiles, and dedicated vegetarian and Jain menus served with warm hospitality.",
      ja: "本格インド料理の豊かな味わいをご体験ください。中京区のビル4階に位置し、丁寧に仕込んだ伝統のカレー、お好みに合わせた辛さ調整、ベジタリアン・ジャイン専用メニューを、心のこもったおもてなしと共にご提供しています。",
    },
    seoKeywords: [
      "Indian restaurant Kyoto",
      "Jain food Kyoto",
      "Vegetarian restaurant Kyoto",
      "Halal food Kyoto",
      "Best curry Kyoto",
      "Nakagyo Ward dining",
      "Cheese naan Kyoto",
      "Biryani Kyoto",
      "京都 インド料理",
      "京都 カレー",
    ],
    gMapsLink: "https://maps.app.goo.gl/hy4edM9sEvyLiDe9A",
    gMapsEmbedUrl:
      "https://www.google.com/maps?q=MOTHER+INDIA+RESTAURANT+%26+BAR,+435-2+Ebisucho,+Nakagyo+Ward,+Kyoto,+604-8005&output=embed",
    tabelogUrl: "https://tabelog.com/en/kyoto/A2601/A260202/26043494/",
    tabelogMenuUrl:
      "https://tabelog.com/en/kyoto/A2601/A260202/26043494/dtlmenu/",
    tabelogPhotosUrl:
      "https://tabelog.com/en/kyoto/A2601/A260202/26043494/dtlphotolst/",
    heroImage: {
      src: "/chair-landing.jpg",
      alt: "Mother India's bright dining room with chandelier, booth seating and large windows over Nakagyo Ward",
    },
  },

  contact: {
    phone: {
      display: "+81 75-211-5131",
      dial: "tel:+81752115131",
    },
    address: {
      english:
        "Hijikata Bldg. 4th Floor, 435-2 Ebisuchō, Nakagyo Ward, Kyoto, 604-8005, Japan",
      japanese: "〒604-8005 京都府京都市中京区恵比須町435-2 ヒジカタビル 4F",
      accessHint: {
        en: "Conveniently located on the 4th floor (elevator available). Look out for our prominent street-level signboard while walking down the vibrant lanes of Nakagyo Ward.",
        ja: "ビルの4階にございます（エレベーターあり）。中京区の通り沿いに掲げた大きな看板が目印です。",
      },
    },
    hours: {
      schedule: [
        {
          days: { en: "Monday - Sunday", ja: "月曜〜日曜" },
          time: "11:00 AM – 11:00 PM",
        },
      ],
      note: {
        en: "Serving exceptional lunch platters, mid-day bites, and exquisite dinner courses 7 days a week.",
        ja: "ランチからディナーまで、年中無休で営業しております。",
      },
    },
  },

  amenities: [
    {
      label: { en: "Dine-In Experience", ja: "店内でのお食事" },
      available: true,
      icon: "Utensils",
    },
    {
      label: { en: "Takeout / Curbside Pickup", ja: "テイクアウト対応" },
      available: true,
      icon: "ShoppingBag",
    },
    {
      label: { en: "Table Reservations", ja: "テーブル予約" },
      available: true,
      icon: "CalendarCheck",
    },
    {
      label: { en: "Vegetarian Paradiso", ja: "ベジタリアン充実" },
      available: true,
      icon: "Leaf",
    },
    {
      label: { en: "Authentic Jain Menu", ja: "本格ジャインメニュー" },
      available: true,
      icon: "Heart",
    },
    {
      label: { en: "Free Guest Wi-Fi", ja: "無料Wi-Fi" },
      available: true,
      icon: "Wifi",
    },
    {
      label: { en: "Child Friendly", ja: "お子様連れ歓迎" },
      available: true,
      icon: "Smile",
    },
    {
      label: { en: "Paid Parking Nearby", ja: "近隣に有料駐車場" },
      available: true,
      icon: "Car",
    },
  ],

  paymentMethods: {
    modes: [
      { en: "Credit Cards", ja: "クレジットカード" },
      { en: "Debit Cards", ja: "デビットカード" },
      { en: "Cash", ja: "現金" },
    ],
    note: {
      en: "All major international and local Japanese payment processing configurations supported.",
      ja: "国内外の主要な決済方法に幅広く対応しています。",
    },
  },

  fullMenu: {
    curryChoices: [
      { en: "Daily Special Curry", ja: "日替わりカレー" },
      { en: "Vegetable Curry", ja: "野菜カレー" },
      { en: "Chicken Curry", ja: "チキンカレー" },
      { en: "Spinach Chicken", ja: "ほうれん草チキン" },
      { en: "Butter Chicken", ja: "バターチキン" },
      { en: "Keema Curry", ja: "キーマカレー" },
      { en: "Seafood Curry", ja: "シーフードカレー" },
      { en: "Dal (Lentils)", ja: "ダル（豆）" },
      { en: "Mutton Curry", ja: "マトンカレー" },
    ],
    sections: [
      {
        id: "veg-curries",
        name: { en: "Vegetable Curries", ja: "ベジタブルカレー" },
        note: {
          en: "Every curry is cooked to order — tell us your spice level, from gentle and aromatic to boldly fiery. Jain preparations available.",
          ja: "カレーはすべて作りたて。辛さはマイルドから激辛までお好みに合わせて調整します。ジャイン対応も可能です。",
        },
        image: {
          src: "/images/menu/naan-thali.jpg",
          alt: "Giant fresh naan with dal makhani, butter curry, chicken tikka and rice on a steel thali",
          caption: {
            en: "Curries served the traditional way — with fresh tandoor naan, rice & papad",
            ja: "伝統のスタイルで — 焼きたてナン、ライス、パパド添え",
          },
        },
        items: [
          { name: { en: "Vegetable Curry", ja: "野菜カレー" }, price: "¥1,050" },
          {
            name: { en: "Dal Makhani", ja: "ダルマカニ" },
            price: "¥1,050",
            recommended: true,
            description: {
              en: "Black lentils simmered overnight, finished with butter and cream",
              ja: "黒豆を一晩じっくり煮込み、バターとクリームで仕上げた逸品",
            },
          },
          { name: { en: "Chana Masala", ja: "チャナマサラ" }, price: "¥1,100" },
          { name: { en: "Aloo Gobi", ja: "アルゴビ" }, price: "¥1,100" },
          { name: { en: "Aloo Baingan", ja: "アルベイガン" }, price: "¥1,150" },
          { name: { en: "Aloo Jeera", ja: "アルジーラ" }, price: "¥1,050" },
          {
            name: { en: "Palak Paneer", ja: "ほうれん草パニール" },
            price: "¥1,150",
          },
          { name: { en: "Aloo Palak", ja: "アルパラック" }, price: "¥1,050" },
          { name: { en: "Matar Paneer", ja: "マトルパニール" }, price: "¥1,150" },
          {
            name: { en: "Mushroom Paneer", ja: "マッシュルームパニール" },
            price: "¥1,150",
          },
          { name: { en: "Kadai Paneer", ja: "カダイパニール" }, price: "¥1,250" },
          {
            name: { en: "Paneer Butter Masala", ja: "パニールバターマサラ" },
            price: "¥1,200",
            recommended: true,
            description: {
              en: "Fresh cottage cheese in a velvety, aromatic butter-tomato cream",
              ja: "自家製パニールを香り高いバタートマトクリームで",
            },
          },
        ],
      },
      {
        id: "seafood-curries",
        name: { en: "Seafood Curries", ja: "シーフードカレー" },
        items: [
          {
            name: { en: "Seafood Curry", ja: "シーフードカレー" },
            price: "¥1,100",
          },
          { name: { en: "Prawn Curry", ja: "プラウンカレー" }, price: "¥1,250" },
          { name: { en: "Prawn Masala", ja: "プラウンマサラ" }, price: "¥1,300" },
          {
            name: { en: "Palak Prawn (Spinach)", ja: "ほうれん草プラウン" },
            price: "¥1,250",
          },
        ],
      },
      {
        id: "naan",
        name: { en: "Naan & Breads", ja: "ナン＆ブレッド" },
        note: {
          en: "Baked to order in our tandoor and brought to your table piping hot.",
          ja: "タンドール窯で焼きたてを、熱々のままお席へお届けします。",
        },
        image: {
          src: "/images/menu/cheese-naan.jpg",
          alt: "Cheese naan slices with molten cheese pulling apart",
          caption: {
            en: "Our famous cheese naan — molten, generous, unforgettable",
            ja: "名物チーズナン — とろけるチーズをたっぷりと",
          },
        },
        items: [
          { name: { en: "Plain Naan", ja: "プレーンナン" }, price: "¥390" },
          { name: { en: "Butter Naan", ja: "バターナン" }, price: "¥490" },
          {
            name: { en: "Cheese Naan", ja: "チーズナン" },
            price: "¥650",
            photo: "/images/menu/cheese-naan.jpg",
            description: {
              en: "The house favorite — generously stuffed, molten and rich",
              ja: "当店一番人気 — とろけるチーズをたっぷり包んで",
            },
          },
          { name: { en: "Masala Kulcha", ja: "マサラクルチャ" }, price: "¥650" },
          { name: { en: "Garlic Naan", ja: "ガーリックナン" }, price: "¥470" },
          { name: { en: "Sesame Naan", ja: "ゴマナン" }, price: "¥470" },
          { name: { en: "Chocolate Naan", ja: "チョコナン" }, price: "¥750" },
          {
            name: { en: "Anko Naan (Sweet Red Bean)", ja: "あんこナン" },
            price: "¥750",
          },
          { name: { en: "Honey Naan", ja: "ハニーナン" }, price: "¥490" },
          {
            name: { en: "Honey Cheese Naan", ja: "ハニーチーズナン" },
            price: "¥700",
          },
          { name: { en: "Coconut Naan", ja: "ココナッツナン" }, price: "¥700" },
          { name: { en: "Basil Naan", ja: "バジルナン" }, price: "¥490" },
          { name: { en: "Roti", ja: "ロティ" }, price: "¥200" },
          { name: { en: "Paratha", ja: "プランタ" }, price: "¥350" },
        ],
      },
      {
        id: "rice-biryani",
        name: { en: "Rice & Biryani", ja: "ライス＆ビリヤニ" },
        note: {
          en: "Fried rice can be upgraded to fragrant basmati for a small supplement.",
          ja: "フライドライスは少額の追加で香り高いバスマティ米に変更できます。",
        },
        image: {
          src: "/images/menu/biryani-raita.jpg",
          alt: "Biryani with egg, almonds and red onion, served with raita and curry",
          caption: {
            en: "Layered basmati biryani, served with cooling raita",
            ja: "重ねて炊き上げたバスマティビリヤニ、ライタ添え",
          },
        },
        items: [
          { name: { en: "Rice", ja: "ライス" }, price: "¥400" },
          {
            name: { en: "Basmati Rice", ja: "バスマティライス" },
            price: "¥600",
          },
          {
            name: { en: "Saffron Rice", ja: "サフランライス" },
            price: "¥825",
          },
          {
            name: { en: "Egg Fried Rice", ja: "エッグフライライス" },
            price: "¥850",
          },
          { name: { en: "Gapao Rice", ja: "ガパオライス" }, price: "¥1,200" },
          {
            name: { en: "Garlic Rice", ja: "ガーリックライス" },
            price: "¥780",
          },
          {
            name: { en: "Chicken Biryani", ja: "チキンビリヤニ" },
            price: "¥1,350",
            photo: "/images/menu/biryani-platter.jpg",
            description: {
              en: "Fragrant basmati layered with spiced chicken, almonds and herbs",
              ja: "スパイスチキンとアーモンド、ハーブを重ねた香り高いバスマティ",
            },
          },
          {
            name: { en: "Mutton Biryani", ja: "マトンビリヤニ" },
            price: "¥1,450",
          },
          {
            name: { en: "Prawn Biryani", ja: "海老ビリヤニ" },
            price: "¥1,550",
          },
          {
            name: { en: "Prawn Fried Rice", ja: "海老チャーハン" },
            price: "¥1,250",
          },
          {
            name: { en: "Vegetable Fried Rice", ja: "ベジタブルフライドライス" },
            price: "¥1,100",
          },
          {
            name: { en: "Chicken Fried Rice", ja: "チキンフライドライス" },
            price: "¥1,200",
          },
          {
            name: { en: "Seafood Fried Rice", ja: "シーフードフライドライス" },
            price: "¥1,100",
          },
        ],
      },
      {
        id: "sets",
        name: { en: "Dinner Sets", ja: "ディナーセット" },
        note: {
          en: "Choose your curry from nine kitchen classics — see the list below. Sets include salad and a drink unless noted.",
          ja: "カレーは定番9種類からお選びください。セットにはサラダとドリンクが付きます（記載のない場合を除く）。",
        },
        image: {
          src: "/images/menu/cheese-naan-set.jpg",
          alt: "Cheese naan set with dal makhani, rice, salad, chicken tikka and lassi",
          caption: {
            en: "The Cheese Naan Set — a Kyoto lunchtime legend",
            ja: "チーズナンセット — 京都ランチの定番",
          },
        },
        items: [
          {
            name: { en: "A Set", ja: "Aセット" },
            price: "¥1,450",
            photo: "/images/menu/dinner-set-thali.jpg",
            description: {
              en: "One curry · chicken tikka · plain naan · rice · salad · drink",
              ja: "カレー1種・チキンティッカ・プレーンナン・ライス・サラダ・ドリンク",
            },
          },
          {
            name: { en: "Cheese Naan Set", ja: "チーズナンセット" },
            price: "¥1,750",
            photo: "/images/menu/cheese-naan-set.jpg",
            description: {
              en: "One curry · chicken tikka · cheese naan · rice · salad · drink",
              ja: "カレー1種・チキンティッカ・チーズナン・ライス・サラダ・ドリンク",
            },
          },
          {
            name: { en: "MOTHER INDIA Set", ja: "マザーインディアセット" },
            price: "¥2,350",
            photo: "/images/menu/two-curry-thali.jpg",
            description: {
              en: "Two curries · tandoori chicken · seekh kebab · naan · rice · salad · dessert · drink (draft beer OK)",
              ja: "カレー2種・タンドリーチキン・シークカバブ・ナン・ライス・サラダ・デザート・ドリンク（生ビール可）",
            },
          },
          {
            name: { en: "Kids Set", ja: "お子様セット" },
            price: "¥900",
            description: {
              en: "Mild butter chicken · naan · fries · salad · dessert · drink",
              ja: "マイルドバターチキン・ナン・ポテト・サラダ・デザート・ドリンク",
            },
          },
          {
            name: { en: "Biryani Set", ja: "ビリヤニセット" },
            price: "¥2,250–",
            description: {
              en: "Chicken ¥2,250 / Mutton ¥2,350 — biryani, mini curry, raita, salad, chutney & sliced onion",
              ja: "チキン¥2,250／マトン¥2,350 — ビリヤニ、ミニカレー、ライタ、サラダ、チャツネ、スライスオニオン",
            },
          },
          {
            name: { en: "Ladies' Set", ja: "レディースセット" },
            price: "¥1,900",
          },
          {
            name: { en: "Gents' Set", ja: "ジェンズセット" },
            price: "¥2,100",
            description: {
              en: "Two curries · chicken tikka · naan · rice · salad · dessert · drink (draft beer OK)",
              ja: "カレー2種・チキンティッカ・ナン・ライス・サラダ・デザート・ドリンク（生ビール可）",
            },
          },
          {
            name: { en: "Beer Set", ja: "ビールセット" },
            price: "¥2,050",
            description: {
              en: "Mini curry · mini naan · full tandoori chicken · salad · draft beer",
              ja: "ミニカレー・ミニナン・タンドリーチキン1本・サラダ・生ビール",
            },
          },
          {
            name: { en: "Curry Beer Set", ja: "カレービールセット" },
            price: "¥1,850",
            description: {
              en: "One curry · plain naan · chicken tikka · salad · draft beer",
              ja: "カレー1種・プレーンナン・チキンティッカ・サラダ・生ビール",
            },
          },
          {
            name: { en: "Student Set", ja: "学生セット" },
            price: "¥1,550",
            description: {
              en: "One curry · naan (honey / cheese / sesame / garlic) · chicken tikka · salad · drink",
              ja: "カレー1種・ナン（ハニー／チーズ／ゴマ／ガーリック）・チキンティッカ・サラダ・ドリンク",
            },
          },
        ],
      },
      {
        id: "snacks",
        name: { en: "Snacks & Momos", ja: "おつまみ＆モモ" },
        image: {
          src: "/images/menu/samosa.jpg",
          alt: "Two golden samosas with shredded salad and ketchup",
          caption: {
            en: "Hand-folded samosas, crisp from the fryer",
            ja: "手包みのサモサ、揚げたてサクサク",
          },
        },
        items: [
          {
            name: { en: "Paneer Chilli", ja: "パニールチリ" },
            price: "¥1,190",
          },
          {
            name: { en: "Momo", ja: "モモ" },
            price: "¥950",
            description: {
              en: "Nepali-style steamed dumplings with house chutney",
              ja: "ネパール式蒸し餃子、自家製チャツネ添え",
            },
          },
          {
            name: { en: "Soup Momo (7 pc)", ja: "スープモモ（7p）" },
            price: "¥1,150",
          },
          {
            name: { en: "Momo Chilli (6 pc)", ja: "モモチリ（6p）" },
            price: "¥1,150",
          },
          {
            name: { en: "Samosa (2 pc)", ja: "サモサ（2p）" },
            price: "¥600",
            photo: "/images/menu/samosa.jpg",
            description: {
              en: "Crisp pastry, spiced potato-pea filling",
              ja: "サクサク生地にスパイス香るポテトと豆の餡",
            },
          },
          {
            name: { en: "Samosa Chaat", ja: "サモサチャット" },
            price: "¥950",
          },
          {
            name: { en: "Prawn Pakora (6 pc)", ja: "海老パコラ（6p）" },
            price: "¥1,100",
          },
          {
            name: { en: "Vegetable Pakora", ja: "野菜パコラ" },
            price: "¥850",
          },
          {
            name: { en: "French Fries", ja: "ポテトフライ" },
            price: "¥550",
          },
        ],
      },
      {
        id: "desserts",
        name: { en: "Desserts", ja: "デザート" },
        items: [
          {
            name: { en: "Vanilla Ice Cream", ja: "バニラアイスクリーム" },
            price: "¥300",
          },
          {
            name: { en: "Cassis Ice Cream", ja: "カシスアイスクリーム" },
            price: "¥300",
          },
          {
            name: { en: "Gulab Jamun (2 pc)", ja: "グラブジャムン（2p）" },
            price: "¥500",
            description: {
              en: "Warm milk dumplings soaked in rose-scented syrup",
              ja: "ローズシロップに浸した温かいミルク団子",
            },
          },
          {
            name: { en: "Rasgulla (2 pc)", ja: "ラスグッラ（2p）" },
            price: "¥500",
            description: {
              en: "Soft cheese dumplings in a light sugar syrup",
              ja: "軽いシロップに浮かぶ、ふんわりチーズ団子",
            },
          },
        ],
      },
      {
        id: "drinks",
        name: { en: "Drinks & Bar", ja: "ドリンク＆バー" },
        note: {
          en: "Sets include a soft drink — green tea, chai, coffee, cola, juices, Calpis, or a classic / mango / strawberry / blueberry lassi.",
          ja: "セットのソフトドリンク：緑茶・チャイ・コーヒー・コーラ・ジュース・カルピス、またはラッシー（プレーン／マンゴー／ストロベリー／ブルーベリー）。",
        },
        image: {
          src: "/images/menu/sweet-lassi.jpg",
          alt: "Frothy white lassi in a tall glass with flowers behind",
          caption: {
            en: "House lassi — churned fresh, never from mix",
            ja: "自家製ラッシー — いつも作りたて",
          },
        },
        items: [
          {
            name: { en: "Kirin Draft Beer (Medium)", ja: "キリン生ビール（中）" },
            price: "¥600",
          },
          {
            name: { en: "Kirin Harekaze", ja: "キリン晴れ風" },
            price: "¥650",
          },
          {
            name: { en: "Cobra Beer", ja: "コブラビール" },
            price: "¥750",
            description: {
              en: "India's smooth classic lager",
              ja: "インドの定番スムースラガー",
            },
          },
          {
            name: { en: "Kyoto Craft Beer", ja: "京都クラフトビール" },
            price: "¥720",
            description: {
              en: "Kölsch / Alt / Kura no Kahori / Yamada Nishiki / ALL",
              ja: "ケルシュ／アルト／蔵のかほり／山田錦／ALL",
            },
          },
          {
            name: {
              en: "Kirin Greens Free (Non-Alcoholic)",
              ja: "キリングリーンズフリー（ノンアル）",
            },
            price: "¥550",
          },
          {
            name: { en: "Kyoto Sake (180ml)", ja: "京の地酒（5寸瓶）" },
            price: "¥650",
            description: {
              en: "Kōden (Miyazu) or Tsuki no Katsura (Fushimi)",
              ja: "香田（宮津）／月の桂（伏見）",
            },
          },
          { name: { en: "Lemon Sour", ja: "レモンサワー" }, price: "¥550" },
          { name: { en: "Highball", ja: "ハイボール" }, price: "¥550" },
          {
            name: { en: "Whisky (Grand Duke)", ja: "ウイスキー（グランデューク）" },
            price: "¥650",
          },
          {
            name: {
              en: "Fratelli Indian Wine (Bottle)",
              ja: "フラテッリ インドワイン（ボトル）",
            },
            price: "¥2,500",
            description: {
              en: "Red or white, from Maharashtra's celebrated vineyards",
              ja: "マハラシュトラの名門ワイナリーより、赤・白",
            },
          },
          {
            name: { en: "Banana Smoothie", ja: "バナナスムージー" },
            price: "¥700",
            recommended: true,
            photo: "/images/menu/banana-lassi.jpg",
            description: {
              en: "Whole bananas blended fresh — soy or almond milk +¥100",
              ja: "完熟バナナをまるごと — 豆乳・アーモンドミルク変更＋¥100",
            },
          },
          {
            name: { en: "Apple Smoothie", ja: "アップルスムージー" },
            price: "¥750",
          },
          {
            name: { en: "Mixed Berry Smoothie", ja: "ミックスベリースムージー" },
            price: "¥750",
          },
          {
            name: { en: "Pineapple Smoothie", ja: "パイナップルスムージー" },
            price: "¥850",
          },
          {
            name: { en: "Banana Berry Smoothie", ja: "バナナベリースムージー" },
            price: "¥850",
          },
          {
            name: {
              en: "Green Vegetable Smoothie",
              ja: "グリーンベジタブルスムージー",
            },
            price: "¥750",
          },
        ],
      },
    ],
  },

  gallery: [
    {
      src: "/images/menu/cheese-naan-set.jpg",
      alt: "Cheese naan set with dal makhani, rice, salad, chicken tikka and lassi on a steel thali",
      caption: { en: "Cheese Naan Set", ja: "チーズナンセット" },
      size: "lg",
    },
    {
      src: "/images/menu/naan-thali.jpg",
      alt: "Giant fresh naan with dal makhani, butter curry, chicken tikka and rice on a steel thali",
      caption: { en: "Naan & Curry Thali", ja: "ナン＆カレーターリー" },
      size: "lg",
    },
    {
      src: "/images/menu/biryani-raita.jpg",
      alt: "Biryani topped with egg, almonds and red onion beside a bowl of raita",
      caption: { en: "Biryani & Raita", ja: "ビリヤニ＆ライタ" },
      size: "wide",
    },
    {
      src: "/images/menu/samosa.jpg",
      alt: "Two golden samosas with shredded cabbage salad and ketchup",
      caption: { en: "Crisp Samosas", ja: "サクサクサモサ" },
      size: "sm",
    },
    {
      src: "/images/menu/cheese-naan.jpg",
      alt: "Cheese naan slices with molten cheese pulling apart on a white plate",
      caption: { en: "Molten Cheese Naan", ja: "とろけるチーズナン" },
      size: "sm",
    },
    {
      src: "/images/menu/dinner-set-thali.jpg",
      alt: "Dinner set thali with butter curry, naan, papad, rice, salad and iced coffee",
      caption: { en: "A Set Thali", ja: "Aセットターリー" },
      size: "sm",
    },
    {
      src: "/images/menu/two-curry-thali.jpg",
      alt: "Thali with palak curry, butter curry, chicken tikka, naan and rice",
      caption: { en: "MOTHER INDIA Set", ja: "マザーインディアセット" },
      size: "sm",
    },
    {
      src: "/images/menu/biryani-platter.jpg",
      alt: "Biryani platter ringed with red onion and topped with almonds and cilantro",
      caption: { en: "Biryani Platter", ja: "ビリヤニプラター" },
      size: "wide",
    },
    {
      src: "/images/menu/masala-papad.jpg",
      alt: "Masala papad topped with chopped onion, carrot, cucumber and cilantro",
      caption: { en: "Masala Papad", ja: "マサラパパド" },
      size: "sm",
    },
    {
      src: "/images/menu/sweet-lassi.jpg",
      alt: "Frothy white lassi in a tall glass with red flowers behind",
      caption: { en: "Fresh Lassi", ja: "フレッシュラッシー" },
      size: "sm",
    },
    {
      src: "/images/gallery/bar-bottle-shelf.jpg",
      alt: "Wooden shelves lined with Himalayan and Indian beer bottles",
      caption: { en: "Our Beer Collection", ja: "ビールコレクション" },
      size: "wide",
    },
    {
      src: "/images/menu/naan-curry-set.jpg",
      alt: "Large naan with curry, tandoori chicken, papad and rice on a thali",
      caption: { en: "Naan & Curry Dinner", ja: "ナン＆カレーディナー" },
      size: "sm",
    },
    {
      src: "/images/menu/fresh-salad.jpg",
      alt: "Garden salad with auroral dressing, corn and cucumber",
      caption: { en: "Garden Salad", ja: "ガーデンサラダ" },
      size: "sm",
    },
  ],

  testimonials: [
    {
      quote: {
        en: "We dined here twice during our vacation! Deepakji, Kishanji, and Govindji prepared and served incredible vegetarian meals, including authentic Jain dishes made with absolute care. The service is exceptional and the hospitality warm. A true hidden gem in Kyoto!",
        ja: "旅行中に2回も伺いました！ディーパクさん、キシャンさん、ゴビンドさんが、本格的なジャイン料理を含む素晴らしいベジタリアン料理を心を込めて作ってくださいました。サービスも接客も最高。京都の本当の隠れた名店です！",
      },
      author: {
        en: "International Traveler Family",
        ja: "海外からの旅行者ファミリー",
      },
      rating: 5,
      context: { en: "Dined in Nakagyo Ward", ja: "中京区でお食事" },
    },
    {
      quote: {
        en: "Stumbled upon the large signboard on the street and walked straight up to the 4th floor with no expectations. To our sheer delight, the food, service, and homey ambience were a perfect 5/5! The warm staff catered the à la carte menu perfectly to our spice levels. Outstanding job!",
        ja: "通りの大きな看板を偶然見つけて、期待せずに4階へ。ところが料理もサービスも家庭的な雰囲気も文句なしの5点満点！スタッフが辛さを完璧に合わせてくれました。素晴らしい！",
      },
      author: { en: "Spontaneous Explorer", ja: "ふらっと立ち寄った旅人" },
      rating: 5,
      context: { en: "Late Night Dinner Visit", ja: "深夜のディナー訪問" },
    },
    {
      quote: {
        en: "Incredibly fresh quality Indian food. The chicken curry, daal makhani, and chicken momos were stunning. Highly repeatable and friendly service. Do not miss this place when in Kyoto!",
        ja: "驚くほど新鮮で質の高いインド料理。チキンカレー、ダルマカニ、チキンモモは絶品でした。何度でも通いたくなる、フレンドリーなお店。京都に来たら絶対に外せません！",
      },
      author: { en: "Gourmet Reviewer", ja: "グルメレビュアー" },
      rating: 5,
      context: {
        en: "Verified Google Local Guide",
        ja: "Google認証ローカルガイド",
      },
    },
  ],
};
