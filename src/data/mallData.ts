import type { NavSection } from "@/types";

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
