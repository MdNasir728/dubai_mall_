// ====================================================
// VENUE DATA
// ====================================================

import type { Event, EventType, Venue } from "@/types/modules.type";

export const VENUES: Venue[] = [
  {
    id: "grand-atrium",
    name: "Grand Atrium",
    capacity: "50,000+",
    capacityNumber: 50000,
    features: [
      "Modular staging",
      "360° sightlines",
      "Full production support",
      "Climate controlled",
    ],
    technicalSpecs: {
      stageDepth: "Dynamic",
      ceilingHeight: "60m+",
      soundSystem: "L-Acoustics arena system",
      lightingFixtures: 12000,
    },
    icon: "🎭",
  },
  {
    id: "convention-center",
    name: "Convention Center",
    capacity: "12,000+",
    capacityNumber: 12000,
    features: [
      "Flexible breakout rooms",
      "AV infrastructure",
      "Registration areas",
      "WiFi 6 coverage",
    ],
    technicalSpecs: {
      stageDepth: "20m",
      soundSystem: "Distributed speaker network",
      lightingFixtures: 4000,
    },
    icon: "🎤",
  },
  {
    id: "performance-theater",
    name: "Performance Theater",
    capacity: "2,800",
    capacityNumber: 2800,
    features: [
      "State-of-the-art acoustics",
      "Retractable seating",
      "Professional lighting",
      "Orchestra pit",
    ],
    technicalSpecs: {
      stageDepth: "45m",
      stageWidth: "62m",
      ceilingHeight: "28m",
      soundSystem: "L-Acoustics premium",
      lightingFixtures: 18000,
    },
    icon: "🎬",
  },
  {
    id: "outdoor-plaza",
    name: "Outdoor Plaza",
    capacity: "100,000+",
    capacityNumber: 100000,
    features: [
      "Weather systems",
      "Lighting rigs",
      "Sound distribution",
      "Spectator areas",
    ],
    technicalSpecs: {
      stageDepth: "Variable",
      ceilingHeight: "Open air",
      soundSystem: "Directional array",
      lightingFixtures: 8000,
    },
    icon: "🌟",
  },
];

// ====================================================
// PAST EVENTS DATA
// ====================================================

export const PAST_EVENTS: Event[] = [
  {
    id: "fashion-forward-2024",
    year: "2024",
    name: "Fashion Forward Dubai",
    attendance: "850K+",
    description: "Largest fashion and lifestyle event in the region",
    category: "activation",
  },
  {
    id: "dsf-2024",
    year: "2024",
    name: "Dubai Shopping Festival",
    attendance: "2.5M+",
    description: "Global retail celebration with 1,200+ brands",
    category: "activation",
  },
  {
    id: "expo-2023",
    year: "2023",
    name: "Expo 2020 Activation",
    attendance: "1.2M+",
    description: "Integrated programming across all venues",
    category: "activation",
  },
  {
    id: "global-summit-2023",
    year: "2023",
    name: "Global Brand Summit",
    attendance: "15K+",
    description: "C-level executives and decision-makers",
    category: "conference",
  },
  {
    id: "dubai-opera-2024",
    year: "2024",
    name: "Dubai Opera Orchestra",
    attendance: "8K+",
    description: "Wagner's Ring Cycle - 4 nights",
    category: "performance",
  },
];

// ====================================================
// EVENT TYPES
// ====================================================

export const EVENT_TYPES: EventType[] = [
  {
    id: "concert",
    name: "Concert & Live Music",
    description: "From intimate performances to world-scale concerts",
    minCapacity: 500,
    maxCapacity: 100000,
  },
  {
    id: "conference",
    name: "Conference & Summit",
    description: "Business gatherings and professional summits",
    minCapacity: 100,
    maxCapacity: 50000,
  },
  {
    id: "product-launch",
    name: "Product Launch",
    description: "Brand activations and product introductions",
    minCapacity: 500,
    maxCapacity: 50000,
  },
  {
    id: "exhibition",
    name: "Exhibition & Trade Show",
    description: "Multi-day exhibitions and conventions",
    minCapacity: 1000,
    maxCapacity: 100000,
  },
  {
    id: "gala",
    name: "Gala & Private Event",
    description: "Intimate gatherings and exclusive events",
    minCapacity: 100,
    maxCapacity: 5000,
  },
  {
    id: "festival",
    name: "Festival & Celebration",
    description: "Large-scale festivals and celebrations",
    minCapacity: 5000,
    maxCapacity: 100000,
  },
];
