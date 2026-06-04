import type { BrandItem, DiningVenue, EntertainmentAttraction, NavSection } from "@/types";

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
    image: "/retail-corridor.webp",
  },
  {
    label: "Dubai Mall Expansion",
    desc: "A billion-dollar expansion bringing 240 new stores — the growth opportunity of a decade",
    stat: "240 new stores",
    image: "/luxury-district.webp",
  },
  {
    label: "Ground Lease",
    desc: "Premium ground-floor positions with unmatched visibility and foot traffic conversion",
    stat: "89% occupancy",
    image: "/retail-corridor.webp",
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
