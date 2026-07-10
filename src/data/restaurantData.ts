/**
 * Central data module for MOTHER INDIA RESTAURANT & BAR, Kyoto.
 * All page copy, menu content, contact details, and testimonials live here
 * so components stay purely presentational.
 *
 * Menu items, prices, and photos sourced from the restaurant's official
 * Tabelog listing (https://tabelog.com/en/kyoto/A2601/A260202/26043494/).
 */

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
  name: string;
  /** Display-ready price, e.g. "¥1,050". Omitted when included with sets / variable. */
  price?: string;
  description?: string;
  /** Marked as an official house recommendation on the restaurant's Tabelog menu. */
  recommended?: boolean;
  /** Local photo path under /public when real photography exists for this item. */
  photo?: string;
}

export interface FullMenuSection {
  id: string;
  name: string;
  /** Optional note rendered above the section's item list. */
  note?: string;
  /** Optional feature image shown beside the section's list. */
  image?: { src: string; alt: string; caption: string };
  items: PricedItem[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  /** Bento sizing hint: "lg" = 2x2, "wide" = 2x1, "sm" = 1x1. */
  size: "lg" | "wide" | "sm";
}

export interface Testimonial {
  quote: string;
  author: string;
  rating: number;
  context: string;
}

export interface Amenity {
  label: string;
  available: boolean;
  icon: AmenityIcon;
}

export interface ScheduleEntry {
  days: string;
  time: string;
}

export interface RestaurantData {
  metadata: {
    brandName: string;
    subTitle: string;
    legalName: string;
    tagline: string;
    description: string;
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
    address: { english: string; japanese: string; accessHint: string };
    hours: { schedule: ScheduleEntry[]; note: string };
  };
  amenities: Amenity[];
  paymentMethods: { modes: string[]; note: string };
  fullMenu: {
    /** The nine curry choices offered with every dinner set. */
    curryChoices: string[];
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
    tagline: "Authentic Indian & Jain Culinary Excellence in the Heart of Kyoto",
    description:
      "Experience the rich tapestry of authentic Indian cuisine. Located on the 4th floor in Nakagyo Ward, we specialize in meticulously crafted traditional curries, custom spice profiles, and dedicated vegetarian and Jain menus served with warm hospitality.",
    seoKeywords: [
      "Indian restaurant Kyoto",
      "Jain food Kyoto",
      "Vegetarian restaurant Kyoto",
      "Halal food Kyoto",
      "Best curry Kyoto",
      "Nakagyo Ward dining",
      "Cheese naan Kyoto",
      "Biryani Kyoto",
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
      src: "/images/hero-naan-curry.jpg",
      alt: "Freshly baked naan draped over a thali with butter curry and tandoori chicken",
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
      accessHint:
        "Conveniently located on the 4th floor (elevator available). Look out for our prominent street-level signboard while walking down the vibrant lanes of Nakagyo Ward.",
    },
    hours: {
      schedule: [{ days: "Monday - Sunday", time: "11:00 AM – 11:00 PM" }],
      note: "Serving exceptional lunch platters, mid-day bites, and exquisite dinner courses 7 days a week.",
    },
  },

  amenities: [
    { label: "Dine-In Experience", available: true, icon: "Utensils" },
    { label: "Takeout / Curbside Pickup", available: true, icon: "ShoppingBag" },
    { label: "Table Reservations", available: true, icon: "CalendarCheck" },
    { label: "Vegetarian Paradiso", available: true, icon: "Leaf" },
    { label: "Authentic Jain Menu", available: true, icon: "Heart" },
    { label: "Free Guest Wi-Fi", available: true, icon: "Wifi" },
    { label: "Child Friendly", available: true, icon: "Smile" },
    { label: "Paid Parking Nearby", available: true, icon: "Car" },
  ],

  paymentMethods: {
    modes: ["Credit Cards", "Debit Cards", "Cash"],
    note: "All major international and local Japanese payment processing configurations supported.",
  },

  fullMenu: {
    curryChoices: [
      "Daily Special Curry",
      "Vegetable Curry",
      "Chicken Curry",
      "Spinach Chicken",
      "Butter Chicken",
      "Keema Curry",
      "Seafood Curry",
      "Dal (Lentils)",
      "Mutton Curry",
    ],
    sections: [
      {
        id: "veg-curries",
        name: "Vegetable Curries",
        note: "Every curry is cooked to order — tell us your spice level, from gentle and aromatic to boldly fiery. Jain preparations available.",
        image: {
          src: "/images/menu/naan-thali.jpg",
          alt: "Giant fresh naan with dal makhani, butter curry, chicken tikka and rice on a steel thali",
          caption: "Curries served the traditional way — with fresh tandoor naan, rice & papad",
        },
        items: [
          { name: "Vegetable Curry", price: "¥1,050" },
          {
            name: "Dal Makhani",
            price: "¥1,050",
            recommended: true,
            description:
              "Black lentils simmered overnight, finished with butter and cream",
          },
          { name: "Chana Masala", price: "¥1,100" },
          { name: "Aloo Gobi", price: "¥1,100" },
          { name: "Aloo Baingan", price: "¥1,150" },
          { name: "Aloo Jeera", price: "¥1,050" },
          { name: "Palak Paneer", price: "¥1,150" },
          { name: "Aloo Palak", price: "¥1,050" },
          { name: "Matar Paneer", price: "¥1,150" },
          { name: "Mushroom Paneer", price: "¥1,150" },
          { name: "Kadai Paneer", price: "¥1,250" },
          {
            name: "Paneer Butter Masala",
            price: "¥1,200",
            recommended: true,
            description:
              "Fresh cottage cheese in a velvety, aromatic butter-tomato cream",
          },
        ],
      },
      {
        id: "seafood-curries",
        name: "Seafood Curries",
        items: [
          { name: "Seafood Curry", price: "¥1,100" },
          { name: "Prawn Curry", price: "¥1,250" },
          { name: "Prawn Masala", price: "¥1,300" },
          { name: "Palak Prawn (Spinach)", price: "¥1,250" },
        ],
      },
      {
        id: "naan",
        name: "Naan & Breads",
        note: "Baked to order in our tandoor and brought to your table piping hot.",
        image: {
          src: "/images/menu/cheese-naan.jpg",
          alt: "Cheese naan slices with molten cheese pulling apart",
          caption: "Our famous cheese naan — molten, generous, unforgettable",
        },
        items: [
          { name: "Plain Naan", price: "¥390" },
          { name: "Butter Naan", price: "¥490" },
          {
            name: "Cheese Naan",
            price: "¥650",
            photo: "/images/menu/cheese-naan.jpg",
            description: "The house favorite — generously stuffed, molten and rich",
          },
          { name: "Masala Kulcha", price: "¥650" },
          { name: "Garlic Naan", price: "¥470" },
          { name: "Sesame Naan", price: "¥470" },
          { name: "Chocolate Naan", price: "¥750" },
          { name: "Anko Naan (Sweet Red Bean)", price: "¥750" },
          { name: "Honey Naan", price: "¥490" },
          { name: "Honey Cheese Naan", price: "¥700" },
          { name: "Coconut Naan", price: "¥700" },
          { name: "Basil Naan", price: "¥490" },
          { name: "Roti", price: "¥200" },
          { name: "Paratha", price: "¥350" },
        ],
      },
      {
        id: "rice-biryani",
        name: "Rice & Biryani",
        note: "Fried rice can be upgraded to fragrant basmati for a small supplement.",
        image: {
          src: "/images/menu/biryani-raita.jpg",
          alt: "Biryani with egg, almonds and red onion, served with raita and curry",
          caption: "Layered basmati biryani, served with cooling raita",
        },
        items: [
          { name: "Rice", price: "¥400" },
          { name: "Basmati Rice", price: "¥600" },
          { name: "Saffron Rice", price: "¥825" },
          { name: "Egg Fried Rice", price: "¥850" },
          { name: "Gapao Rice", price: "¥1,200" },
          { name: "Garlic Rice", price: "¥780" },
          {
            name: "Chicken Biryani",
            price: "¥1,350",
            photo: "/images/menu/biryani-platter.jpg",
            description: "Fragrant basmati layered with spiced chicken, almonds and herbs",
          },
          { name: "Mutton Biryani", price: "¥1,450" },
          { name: "Prawn Biryani", price: "¥1,550" },
          { name: "Prawn Fried Rice", price: "¥1,250" },
          { name: "Vegetable Fried Rice", price: "¥1,100" },
          { name: "Chicken Fried Rice", price: "¥1,200" },
          { name: "Seafood Fried Rice", price: "¥1,100" },
        ],
      },
      {
        id: "sets",
        name: "Dinner Sets",
        note: "Choose your curry from nine kitchen classics — see the list below. Sets include salad and a drink unless noted.",
        image: {
          src: "/images/menu/cheese-naan-set.jpg",
          alt: "Cheese naan set with dal makhani, rice, salad, chicken tikka and lassi",
          caption: "The Cheese Naan Set — a Kyoto lunchtime legend",
        },
        items: [
          {
            name: "A Set",
            price: "¥1,450",
            photo: "/images/menu/dinner-set-thali.jpg",
            description: "One curry · chicken tikka · plain naan · rice · salad · drink",
          },
          {
            name: "Cheese Naan Set",
            price: "¥1,750",
            photo: "/images/menu/cheese-naan-set.jpg",
            description: "One curry · chicken tikka · cheese naan · rice · salad · drink",
          },
          {
            name: "MOTHER INDIA Set",
            price: "¥2,350",
            photo: "/images/menu/two-curry-thali.jpg",
            description:
              "Two curries · tandoori chicken · seekh kebab · naan · rice · salad · dessert · drink (draft beer OK)",
          },
          {
            name: "Kids Set",
            price: "¥900",
            description: "Mild butter chicken · naan · fries · salad · dessert · drink",
          },
          {
            name: "Biryani Set",
            price: "¥2,250–",
            description:
              "Chicken ¥2,250 / Mutton ¥2,350 — biryani, mini curry, raita, salad, chutney & sliced onion",
          },
          { name: "Ladies' Set", price: "¥1,900" },
          {
            name: "Gents' Set",
            price: "¥2,100",
            description:
              "Two curries · chicken tikka · naan · rice · salad · dessert · drink (draft beer OK)",
          },
          {
            name: "Beer Set",
            price: "¥2,050",
            description: "Mini curry · mini naan · full tandoori chicken · salad · draft beer",
          },
          {
            name: "Curry Beer Set",
            price: "¥1,850",
            description: "One curry · plain naan · chicken tikka · salad · draft beer",
          },
          {
            name: "Student Set",
            price: "¥1,550",
            description:
              "One curry · naan (honey / cheese / sesame / garlic) · chicken tikka · salad · drink",
          },
        ],
      },
      {
        id: "snacks",
        name: "Snacks & Momos",
        image: {
          src: "/images/menu/samosa.jpg",
          alt: "Two golden samosas with shredded salad and ketchup",
          caption: "Hand-folded samosas, crisp from the fryer",
        },
        items: [
          { name: "Paneer Chilli", price: "¥1,190" },
          {
            name: "Momo",
            price: "¥950",
            description: "Nepali-style steamed dumplings with house chutney",
          },
          { name: "Soup Momo (7 pc)", price: "¥1,150" },
          { name: "Momo Chilli (6 pc)", price: "¥1,150" },
          {
            name: "Samosa (2 pc)",
            price: "¥600",
            photo: "/images/menu/samosa.jpg",
            description: "Crisp pastry, spiced potato-pea filling",
          },
          { name: "Samosa Chaat", price: "¥950" },
          { name: "Prawn Pakora (6 pc)", price: "¥1,100" },
          { name: "Vegetable Pakora", price: "¥850" },
          { name: "French Fries", price: "¥550" },
        ],
      },
      {
        id: "desserts",
        name: "Desserts",
        items: [
          { name: "Vanilla Ice Cream", price: "¥300" },
          { name: "Cassis Ice Cream", price: "¥300" },
          {
            name: "Gulab Jamun (2 pc)",
            price: "¥500",
            description: "Warm milk dumplings soaked in rose-scented syrup",
          },
          {
            name: "Rasgulla (2 pc)",
            price: "¥500",
            description: "Soft cheese dumplings in a light sugar syrup",
          },
        ],
      },
      {
        id: "drinks",
        name: "Drinks & Bar",
        note: "Sets include a soft drink — green tea, chai, coffee, cola, juices, Calpis, or a classic / mango / strawberry / blueberry lassi.",
        image: {
          src: "/images/menu/sweet-lassi.jpg",
          alt: "Frothy white lassi in a tall glass with flowers behind",
          caption: "House lassi — churned fresh, never from mix",
        },
        items: [
          { name: "Kirin Draft Beer (Medium)", price: "¥600" },
          { name: "Kirin Harekaze", price: "¥650" },
          {
            name: "Cobra Beer",
            price: "¥750",
            description: "India's smooth classic lager",
          },
          {
            name: "Kyoto Craft Beer",
            price: "¥720",
            description: "Kölsch / Alt / Kura no Kahori / Yamada Nishiki / ALL",
          },
          { name: "Kirin Greens Free (Non-Alcoholic)", price: "¥550" },
          {
            name: "Kyoto Sake (180ml)",
            price: "¥650",
            description: "Kōden (Miyazu) or Tsuki no Katsura (Fushimi)",
          },
          { name: "Lemon Sour", price: "¥550" },
          { name: "Highball", price: "¥550" },
          { name: "Whisky (Grand Duke)", price: "¥650" },
          {
            name: "Fratelli Indian Wine (Bottle)",
            price: "¥2,500",
            description: "Red or white, from Maharashtra's celebrated vineyards",
          },
          {
            name: "Banana Smoothie",
            price: "¥700",
            recommended: true,
            photo: "/images/menu/banana-lassi.jpg",
            description: "Whole bananas blended fresh — soy or almond milk +¥100",
          },
          { name: "Apple Smoothie", price: "¥750" },
          { name: "Mixed Berry Smoothie", price: "¥750" },
          { name: "Pineapple Smoothie", price: "¥850" },
          { name: "Banana Berry Smoothie", price: "¥850" },
          { name: "Green Vegetable Smoothie", price: "¥750" },
        ],
      },
    ],
  },

  gallery: [
    {
      src: "/images/menu/cheese-naan-set.jpg",
      alt: "Cheese naan set with dal makhani, rice, salad, chicken tikka and lassi on a steel thali",
      caption: "Cheese Naan Set",
      size: "lg",
    },
    {
      src: "/images/menu/naan-thali.jpg",
      alt: "Giant fresh naan with dal makhani, butter curry, chicken tikka and rice on a steel thali",
      caption: "Naan & Curry Thali",
      size: "lg",
    },
    {
      src: "/images/menu/biryani-raita.jpg",
      alt: "Biryani topped with egg, almonds and red onion beside a bowl of raita",
      caption: "Biryani & Raita",
      size: "wide",
    },
    {
      src: "/images/menu/samosa.jpg",
      alt: "Two golden samosas with shredded cabbage salad and ketchup",
      caption: "Crisp Samosas",
      size: "sm",
    },
    {
      src: "/images/menu/cheese-naan.jpg",
      alt: "Cheese naan slices with molten cheese pulling apart on a white plate",
      caption: "Molten Cheese Naan",
      size: "sm",
    },
    {
      src: "/images/menu/dinner-set-thali.jpg",
      alt: "Dinner set thali with butter curry, naan, papad, rice, salad and iced coffee",
      caption: "A Set Thali",
      size: "sm",
    },
    {
      src: "/images/menu/two-curry-thali.jpg",
      alt: "Thali with palak curry, butter curry, chicken tikka, naan and rice",
      caption: "MOTHER INDIA Set",
      size: "sm",
    },
    {
      src: "/images/menu/biryani-platter.jpg",
      alt: "Biryani platter ringed with red onion and topped with almonds and cilantro",
      caption: "Biryani Platter",
      size: "wide",
    },
    {
      src: "/images/menu/masala-papad.jpg",
      alt: "Masala papad topped with chopped onion, carrot, cucumber and cilantro",
      caption: "Masala Papad",
      size: "sm",
    },
    {
      src: "/images/menu/sweet-lassi.jpg",
      alt: "Frothy white lassi in a tall glass with red flowers behind",
      caption: "Fresh Lassi",
      size: "sm",
    },
    {
      src: "/images/gallery/bar-bottle-shelf.jpg",
      alt: "Wooden shelves lined with Himalayan and Indian beer bottles",
      caption: "Our Beer Collection",
      size: "wide",
    },
    {
      src: "/images/menu/naan-curry-set.jpg",
      alt: "Large naan with curry, tandoori chicken, papad and rice on a thali",
      caption: "Naan & Curry Dinner",
      size: "sm",
    },
    {
      src: "/images/menu/fresh-salad.jpg",
      alt: "Garden salad with auroral dressing, corn and cucumber",
      caption: "Garden Salad",
      size: "sm",
    },
  ],

  testimonials: [
    {
      quote:
        "We dined here twice during our vacation! Deepakji, Kishanji, and Govindji prepared and served incredible vegetarian meals, including authentic Jain dishes made with absolute care. The service is exceptional and the hospitality warm. A true hidden gem in Kyoto!",
      author: "International Traveler Family",
      rating: 5,
      context: "Dined in Nakagyo Ward",
    },
    {
      quote:
        "Stumbled upon the large signboard on the street and walked straight up to the 4th floor with no expectations. To our sheer delight, the food, service, and homey ambience were a perfect 5/5! The warm staff catered the à la carte menu perfectly to our spice levels. Outstanding job!",
      author: "Spontaneous Explorer",
      rating: 5,
      context: "Late Night Dinner Visit",
    },
    {
      quote:
        "Incredibly fresh quality Indian food. The chicken curry, daal makhani, and chicken momos were stunning. Highly repeatable and friendly service. Do not miss this place when in Kyoto!",
      author: "Gourmet Reviewer",
      rating: 5,
      context: "Verified Google Local Guide",
    },
  ],
};
