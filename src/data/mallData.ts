import type {
  BrandItem,
  DiningVenue,
  EntertainmentAttraction,
  EventCapability,
  LeasingCategory,
  NavSection,
} from "@/types";
import type {
  AcousticFeature,
  AudienceSegment,
  SponsorshipTier,
  TechnicalSpec,
} from "@/types/modules.type";

export const NAV_SECTIONS: NavSection[] = [
  { id: "hero", label: "Overview", index: 0 },
  { id: "why-dubai-mall", label: "The Property", index: 1 },
  { id: "retail", label: "Retail", index: 2 },
  { id: "luxury-district", label: "Luxury", index: 3 },
  { id: "dining", label: "Dining", index: 4 },
  { id: "entertainment", label: "Entertainment", index: 5 },
  { id: "events", label: "Events", index: 6 },
];

export const PROPERTY_STATS = [
  {
    value: 1124511,
    suffix: "sqm",
    label: "Total Area",
    description: "Gross Leasable Area",
  },
  {
    value: 105,
    suffix: "M+",
    label: "Annual Visitors",
    description: "2023 record footfall",
  },
  {
    value: 1200,
    suffix: "+",
    label: "Retail Outlets",
    description: "Fashion, luxury & lifestyle",
  },
  {
    value: 200,
    suffix: "+",
    label: "Food & Beverage",
    description: "Restaurants and cafes",
  },
  {
    value: 22,
    suffix: " screens",
    label: "Reel Cinemas",
    description: "IMAX & VIP included",
  },
  {
    value: 14000,
    suffix: "+",
    label: "Parking Spaces",
    description: "Seamless arrival",
  },
];

export const DEMOGRAPHICS = [
  { label: "International Visitors", value: "62%", bar: 62 },
  { label: "Premium Spenders", value: "48%", bar: 48 },
  { label: "Age 25–44", value: "54%", bar: 54 },
  { label: "Tourism Crossover", value: "38%", bar: 38 },
];

export const WHY_METRICS = [
  {
    label: "Global Destination",
    value: "#1 Mall",
    desc: "By annual visitor footfall worldwide",
  },
  {
    label: "Downtown Dubai",
    value: "0 min",
    desc: "Adjacent to Burj Khalifa & DIFC",
  },
  {
    label: "Metro Access",
    value: "2 Lines",
    desc: "Direct metro connectivity",
  },
  {
    label: "Airport Distance",
    value: "15 min",
    desc: "From DXB International Airport",
  },
  {
    label: "Tourist Density",
    value: "62%",
    desc: "International visitors ratio",
  },
  {
    label: "Catchment Area",
    value: "3.3B",
    desc: "Within 4-hour flight radius",
  },
];

export const RETAIL_HIGHLIGHTS = [
  {
    label: "Fashion Avenue",
    desc: "World-class luxury fashion in a dedicated promenade housing 70+ designer labels",
    stat: "70+ labels",
    image: "/retail-corridor.avif",
  },
  {
    label: "Dubai Mall Expansion",
    desc: "A billion-dollar expansion bringing 240 new stores — the growth opportunity of a decade",
    stat: "240 new stores",
    image: "/luxury-district.avif",
  },
  {
    label: "Ground Lease",
    desc: "Premium ground-floor positions with unmatched visibility and foot traffic conversion",
    stat: "89% occupancy",
    image: "/retail-corridor.avif",
  },
];

export const TENANT_CATEGORIES = [
  { name: "Ultra-Luxury", count: "40+", bar: 40 },
  { name: "Contemporary Luxury", count: "120+", bar: 60 },
  { name: "Premium Fashion", count: "280+", bar: 75 },
  { name: "Lifestyle & Sport", count: "180+", bar: 55 },
  { name: "Electronics & Tech", count: "60+", bar: 35 },
  { name: "Beauty & Wellness", count: "90+", bar: 45 },
];

export const LUXURY_BRANDS: BrandItem[] = [
  { name: "Louis Vuitton", tier: "ultra-luxury", category: "Fashion" },
  { name: "Chanel", tier: "ultra-luxury", category: "Fashion" },
  { name: "Hermès", tier: "ultra-luxury", category: "Fashion" },
  { name: "Rolex", tier: "ultra-luxury", category: "Watches" },
  { name: "Cartier", tier: "ultra-luxury", category: "Jewellery" },
  { name: "Dior", tier: "ultra-luxury", category: "Fashion" },
  { name: "Valentino", tier: "luxury", category: "Fashion" },
  { name: "Gucci", tier: "luxury", category: "Fashion" },
  { name: "Prada", tier: "luxury", category: "Fashion" },
  { name: "Versace", tier: "luxury", category: "Fashion" },
  { name: "Burberry", tier: "luxury", category: "Fashion" },
  { name: "Tiffany & Co.", tier: "luxury", category: "Jewellery" },
  { name: "Bottega Veneta", tier: "luxury", category: "Fashion" },
  { name: "Givenchy", tier: "luxury", category: "Fashion" },
  { name: "Dolce & Gabbana", tier: "luxury", category: "Fashion" },
  { name: "Balenciaga", tier: "luxury", category: "Fashion" },
];

export const DINING_STATS = [
  { value: "200+", label: "Restaurants & Cafes" },
  { value: "40", label: "Nations Represented" },
  { value: "3", label: "Michelin Partnerships" },
  { value: "$320M", label: "F&B Annual Revenue" },
];

export const DINING_VENUES: DiningVenue[] = [
  {
    name: "Atmosphere",
    cuisine: "International Fine Dining",
    description:
      "Dining at 442 metres above ground — the world's highest restaurant in the Burj Khalifa.",
    highlight: "World's Highest Restaurant",
  },
  {
    name: "Thiptara",
    cuisine: "Royal Thai",
    description:
      "Authentic Thai cuisine with panoramic views of the Dubai Fountain — a sensory masterpiece.",
    highlight: "Fountain Terrace Views",
  },
  {
    name: "Zuma",
    cuisine: "Contemporary Japanese",
    description:
      "Izakaya dining concept elevated to global icon status. A culinary journey through modern Japan.",
    highlight: "Celebrity Favourite",
  },
  {
    name: "Nobu",
    cuisine: "New World Japanese",
    description:
      "Nobu Matsuhisa's legendary concept. Black cod miso and signature cocktails.",
    highlight: "Global Icon",
  },
];

export const ENTERTAINMENT_ATTRACTIONS: EntertainmentAttraction[] = [
  {
    name: "Dubai Aquarium",
    description:
      "10 million litre tank holding over 33,000 aquatic animals. The world's largest suspended aquarium.",
    highlight: "33,000 Marine Animals",
    icon: "🐠",
  },
  {
    name: "Dubai Ice Rink",
    description:
      "Olympic-size ice rink in the heart of the mall. Figure skating shows and public sessions.",
    highlight: "Olympic Standard",
    icon: "⛸️",
  },
  {
    name: "Dubai Fountain",
    description:
      "The world's largest choreographed fountain system. 6,600 lights, 25 colour projectors.",
    highlight: "World's Largest Fountain",
    icon: "⛲",
  },
  {
    name: "VR Park",
    description:
      "Dubai's largest virtual reality theme park. 30+ unique VR and augmented reality experiences.",
    highlight: "30+ VR Experiences",
    icon: "🎮",
  },
  {
    name: "KidZania",
    description:
      "An award-winning edutainment centre where children can experience over 40 real-world professions.",
    highlight: "Award-Winning Experience",
    icon: "🎭",
  },
  {
    name: "Reel Cinemas",
    description:
      "22 state-of-the-art screens including IMAX, 4DX, and VIP private screening rooms.",
    highlight: "22 Screens",
    icon: "🎬",
  },
];

export const EVENT_STATS = [
  { label: "Brand Activations", count: "240+", desc: "Annual campaigns" },
  { label: "Fashion Shows", count: "18", desc: "International showcases" },
  { label: "Concerts & Gigs", count: "120+", desc: "Live performances" },
  { label: "Product Launches", count: "95+", desc: "Global reveals" },
  { label: "Art Exhibitions", count: "35", desc: "Cultural showcases" },
  { label: "Sports Events", count: "50+", desc: "World-class competitions" },
];

export const PAST_BRANDS = [
  "Lamborghini",
  "Ferrari",
  "Apple",
  "Samsung",
  "Rolex",
  "Dior",
  "Netflix",
  "PlayStation",
  "Adidas",
  "Nike",
  "Bulgari",
  "TAG Heuer",
];

export const EVENT_CAPABILITIES: EventCapability[] = [
  {
    name: "Grand Atrium",
    capacity: "5,000 guests",
    description:
      "Four-storey glass-roofed atrium — spectacular for brand launches, fashion shows, and galas.",
  },
  {
    name: "Dubai Fountain Boardwalk",
    capacity: "Unlimited outdoor",
    description:
      "Iconic waterfront promenade perfect for concerts, activations, and experiential marketing.",
  },
  {
    name: "Convention Halls",
    capacity: "2,500 delegates",
    description:
      "Fully equipped halls for international conferences, product launches, and trade events.",
  },
  {
    name: "Luxury Event Suites",
    capacity: "50–500 guests",
    description:
      "Bespoke private event spaces for VIP dinners, brand experiences, and exclusive showcases.",
  },
];

export const LEASING_CATEGORIES: LeasingCategory[] = [
  {
    id: "luxury",
    name: "Luxury & Flagship",
    icon: "👑",
    description: "Premium positioning for ultra-luxury brands",
    details: {
      avgSpaceSize: "3,000–10,000 sqm",
      targetTenants: [
        "Louis Vuitton",
        "Hermès",
        "Gucci",
        "Rolex",
        "Cartier",
        "Ferrari Store",
      ],
      premiumBenefits: [
        "Prime location guarantee",
        "Custom fit-out support",
        "Dedicated concierge team",
        "VIP event hosting",
        "Exclusive marketing campaigns",
      ],
      financialTerms: "Base rent + % of sales (3–5%)",
      leaseLength: "10–15 years",
    },
    featured: true,
  },
  {
    id: "retail",
    name: "Contemporary Retail",
    icon: "🛍️",
    description: "Diverse mid-tier and established brands",
    details: {
      avgSpaceSize: "500–3,000 sqm",
      targetTenants: [
        "Zara",
        "H&M",
        "Uniqlo",
        "Sephora",
        "Apple",
        "Nike Store",
      ],
      premiumBenefits: [
        "Flexible space configurations",
        "Co-marketing support",
        "Integrated mall technology",
        "Cross-promotion opportunities",
        "Traffic insights and analytics",
      ],
      financialTerms: "Base rent + % of sales (2–4%)",
      leaseLength: "5–10 years",
    },
    featured: false,
  },
  {
    id: "fnb",
    name: "Food & Beverage",
    icon: "🍽️",
    description: "Dining destinations and lifestyle concepts",
    details: {
      avgSpaceSize: "300–2,000 sqm",
      targetTenants: [
        "Michelin-starred concepts",
        "Celebrity chef brands",
        "Specialty cafes",
        "Quick-service formats",
        "Beverage concepts",
      ],
      premiumBenefits: [
        "High foot-traffic locations",
        "Operational support",
        "Event integration",
        "Lifestyle positioning",
        "Premium exhaust management",
      ],
      financialTerms: "Base rent + % of sales (4–8%)",
      leaseLength: "5–7 years",
    },
    featured: false,
  },
  {
    id: "popup",
    name: "Pop-Up & Seasonal",
    icon: "🎪",
    description: "Short-term, flexible brand experiences",
    details: {
      avgSpaceSize: "100–1,000 sqm",
      targetTenants: [
        "Emerging brands",
        "Seasonal activations",
        "Festival concepts",
        "Limited editions",
        "Experiential pop-ups",
      ],
      premiumBenefits: [
        "Rapid lease approval",
        "Flexible terms (4–12 weeks)",
        "Turnkey setup support",
        "Marketing inclusion",
        "Access to premium locations",
      ],
      financialTerms: "Daily/weekly rates + % of sales",
      leaseLength: "4 weeks–3 months",
    },
    featured: false,
  },
];

export const SPONSORSHIP_TIERS: SponsorshipTier[] = [
  {
    name: "Platinum",
    investment: "$2M+",
    benefits: [
      "Exclusive naming rights to venue",
      "VIP lounge and hospitality",
      "Full season media exposure",
      "Dedicated activation space",
      "Strategic partnership consultation",
    ],
    featured: true,
    icon: "👑",
  },
  {
    name: "Gold",
    investment: "$1M–$2M",
    benefits: [
      "Co-branding opportunities",
      "Premium event signage",
      "Corporate hospitality packages",
      "Media placements (quarterly)",
      "Brand integration programs",
    ],
    featured: false,
    icon: "⭐",
  },
  {
    name: "Silver",
    investment: "$500K–$1M",
    benefits: [
      "Event sponsorship opportunities",
      "Branded in-mall presence",
      "Digital marketing inclusion",
      "Quarterly report insights",
      "Networking access",
    ],
    featured: false,
    icon: "✨",
  },
  {
    name: "Bronze",
    investment: "$250K–$500K",
    benefits: [
      "Seasonal campaign participation",
      "Logo placement on website",
      "Event ticketing discounts",
      "Annual sponsor recognition",
      "Community event participation",
    ],
    featured: false,
    icon: "💎",
  },
];

export const AUDIENCE_SEGMENTS: AudienceSegment[] = [
  {
    segment: "Luxury Shoppers",
    percentage: "28%",
    description: "Ultra-high-net-worth individuals, luxury brand loyalists",
    spending: "AED 15,000+ per visit",
  },
  {
    segment: "International Tourists",
    percentage: "35%",
    description: "Global travelers, destination seekers, experience-driven",
    spending: "AED 8,000–12,000 per visit",
  },
  {
    segment: "Corporate/B2B",
    percentage: "18%",
    description: "Decision-makers, corporate entertainment, team events",
    spending: "Premium package buyers",
  },
  {
    segment: "Families & Lifestyle",
    percentage: "19%",
    description:
      "Entertainment seekers, dining enthusiasts, entertainment fans",
    spending: "AED 2,000–5,000 per visit",
  },
];

export const TECHNICAL_SPECS: TechnicalSpec[] = [
  { label: "Seating Capacity", value: "2,800" },
  { label: "Stage Depth", value: "45m" },
  { label: "Stage Width", value: "62m" },
  { label: "Ceiling Height", value: "28m" },
  { label: "Loading Dock", value: "Industrial-grade" },
  { label: "Sound System", value: "L-Acoustics" },
];

export const ACOUSTIC_FEATURES: AcousticFeature[] = [
  {
    feature: "Variable Acoustics",
    benefit:
      "Adjustable sound environment for symphony, chamber, or contemporary performances",
  },
  {
    feature: "Retractable Seating",
    benefit:
      "Flexible configurations for different event types and audience sizes",
  },
  {
    feature: "Advanced Lighting Rig",
    benefit: "18,000+ individual lighting fixtures with real-time control",
  },
  {
    feature: "High-Fidelity Recording",
    benefit: "Full broadcast and streaming capabilities in 4K",
  },
  {
    feature: "Strategic Acoustics",
    benefit: "Every seat has optimal sightlines and acoustics",
  },
  {
    feature: "Green Room Facilities",
    benefit: "Premium artist accommodation and dressing facilities",
  },
];

export const PERFORMING_ART_EVENT_TYPES = [
  "Classical Symphony Orchestras",
  "Opera & Ballet",
  "Contemporary & Jazz",
  "Broadway & Musical Theater",
  "Product Launches & Galas",
  "Corporate Events & Conferences",
  "Streaming & Live Recording",
];


