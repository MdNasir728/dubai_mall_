// ====================================================
// BOOKING & INQUIRY TYPES
// ====================================================

export interface LeasingInquiry {
  id: string;
  timestamp: number;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  category: "luxury" | "retail" | "fnb" | "popup";
  squareFeetage: string;
  timeline: string;
  budget: string;
  businessDescription: string;
  referenceNumber: string;
  status: "submitted" | "viewed" | "in-progress" | "contacted";
}

export interface EventBookingInquiry {
  id: string;
  timestamp: number;
  eventName: string;
  organizerName: string;
  email: string;
  phone: string;
  eventType: string;
  audience: number;
  preferredDate: string;
  venueId: string;
  technicalNeeds: string;
  referenceNumber: string;
  status: "submitted" | "viewed" | "in-progress" | "confirmed";
}

export interface SponsorshipProposal {
  id: string;
  timestamp: number;
  brandName: string;
  contactName: string;
  email: string;
  phone: string;
  tier: "platinum" | "gold" | "silver" | "bronze";
  campaignDuration: string;
  marketingObjective: string;
  referenceNumber: string;
  status: "submitted" | "viewed" | "in-progress" | "negotiating";
}

export interface InteractionFeedback {
  type: "success" | "error" | "info" | "warning";
  message: string;
  duration: number; // milliseconds
}

export interface Venue {
  id?: string;
  name: string;
  capacity: string;
  capacityNumber?: number;
  features: string[];
  technicalSpecs?: {
    stageDepth?: string;
    stageWidth?: string;
    ceilingHeight?: string;
    soundSystem?: string;
    lightingFixtures?: number;
  };
  image?: string;
  icon: string;
}

export interface SponsorshipTier {
  id?: string;
  name: string;
  investment: string;
  investmentMin?: number;
  investmentMax?: number;
  benefits: string[];
  featured: boolean;
  icon: string;
}

export interface DubaiMallStore {
  // Inquiries & Submissions
  leasingInquiries: LeasingInquiry[];
  eventBookings: EventBookingInquiry[];
  sponsorshipProposals: SponsorshipProposal[];

  // Interaction state
  currentModal: string | null;
  isLoading: boolean;
  feedback: InteractionFeedback | null;

  // User preferences
  selectedVenue: Venue | null;
  selectedSponsorshipTier: SponsorshipTier | null;
  viewedCaseStudies: string[];
  downloadedAssets: string[];

  // Navigation
  activeSection: string;
  scrollProgress: number;
}



export interface AudienceSegment {
  segment: string;
  percentage: string;
  description: string;
  spending: string;
}

export interface TechnicalSpec {
  label: string;
  value: string;
}

export interface AcousticFeature {
  feature: string;
  benefit: string;
}



export interface Event {
  id?: string;
  year: string;
  name: string;
  attendance: string;
  description: string;
  category?: "concert" | "conference" | "activation" | "performance";
}

export interface EventType {
  id: string;
  name: string;
  description: string;
  minCapacity: number;
  maxCapacity: number;
}

export interface EventFormData {
  eventName: string;
  organizerName: string;
  email: string;
  phone: string;
  eventType: string;
  audience: string;
  preferredDate: string;
  venueId: string;
  technicalNeeds: string;
}
