import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  DubaiMallStore,
  LeasingInquiry,
  EventBookingInquiry,
  SponsorshipProposal,
  Venue,
  SponsorshipTier,
  InteractionFeedback,
} from "@/types/modules.type";

const generateReferenceNumber = (): string => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `DM-${timestamp}-${random}`;
};

interface DubaiMallStoreState extends DubaiMallStore {
  // Leasing actions
  submitLeasingInquiry: (
    inquiry: Omit<
      LeasingInquiry,
      "id" | "timestamp" | "referenceNumber" | "status"
    >,
  ) => LeasingInquiry;
  deleteLeasingInquiry: (id: string) => void;
  updateLeasingInquiryStatus: (
    id: string,
    status: LeasingInquiry["status"],
  ) => void;

  // Event booking actions
  submitEventBooking: (
    booking: Omit<
      EventBookingInquiry,
      "id" | "timestamp" | "referenceNumber" | "status"
    >,
  ) => EventBookingInquiry;
  deleteEventBooking: (id: string) => void;
  updateEventBookingStatus: (
    id: string,
    status: EventBookingInquiry["status"],
  ) => void;

  // Sponsorship actions
  submitSponsorshipProposal: (
    proposal: Omit<
      SponsorshipProposal,
      "id" | "timestamp" | "referenceNumber" | "status"
    >,
  ) => SponsorshipProposal;
  deleteSponsorshipProposal: (id: string) => void;
  updateSponsorshipStatus: (
    id: string,
    status: SponsorshipProposal["status"],
  ) => void;

  // Modal & interaction actions
  openModal: (modalName: string) => void;
  closeModal: () => void;
  setLoading: (isLoading: boolean) => void;
  showFeedback: (feedback: Omit<InteractionFeedback, "duration">) => void;
  clearFeedback: () => void;

  // Selection actions
  setSelectedVenue: (venue: Venue | null) => void;
  setSelectedSponsorshipTier: (tier: SponsorshipTier | null) => void;
  addViewedCaseStudy: (id: string) => void;
  addDownloadedAsset: (id: string) => void;

  // Navigation
  setActiveSection: (section: string) => void;
  setScrollProgress: (progress: number) => void;

  // Utilities
  clearAllData: () => void;
  getAllSubmissions: () => {
    leasing: LeasingInquiry[];
    events: EventBookingInquiry[];
    sponsorship: SponsorshipProposal[];
  };
}

const initialState: DubaiMallStore = {
  leasingInquiries: [],
  eventBookings: [],
  sponsorshipProposals: [],
  currentModal: null,
  isLoading: false,
  feedback: null,
  selectedVenue: null,
  selectedSponsorshipTier: null,
  viewedCaseStudies: [],
  downloadedAssets: [],
  activeSection: "hero",
  scrollProgress: 0,
};

export const useDubaiMallStore = create<DubaiMallStoreState>()(
  persist(
    (set, get) => ({
      ...initialState,

      // ====================================================
      // LEASING ACTIONS
      // ====================================================

      submitLeasingInquiry: (inquiry) => {
        const newInquiry: LeasingInquiry = {
          ...inquiry,
          id: crypto.randomUUID(),
          timestamp: Date.now(),
          referenceNumber: generateReferenceNumber(),
          status: "submitted",
        };

        set((state) => ({
          leasingInquiries: [...state.leasingInquiries, newInquiry],
        }));

        // Show success feedback
        get().showFeedback({
          type: "success",
          message: `Inquiry received! Your reference: ${newInquiry.referenceNumber}`,
        });

        return newInquiry;
      },

      deleteLeasingInquiry: (id) => {
        set((state) => ({
          leasingInquiries: state.leasingInquiries.filter((i) => i.id !== id),
        }));
      },

      updateLeasingInquiryStatus: (id, status) => {
        set((state) => ({
          leasingInquiries: state.leasingInquiries.map((i) =>
            i.id === id ? { ...i, status } : i,
          ),
        }));
      },

      // ====================================================
      // EVENT BOOKING ACTIONS
      // ====================================================

      submitEventBooking: (booking) => {
        const newBooking: EventBookingInquiry = {
          ...booking,
          id: crypto.randomUUID(),
          timestamp: Date.now(),
          referenceNumber: generateReferenceNumber(),
          status: "submitted",
        };

        set((state) => ({
          eventBookings: [...state.eventBookings, newBooking],
        }));

        get().showFeedback({
          type: "success",
          message: `Event booking received! Your reference: ${newBooking.referenceNumber}`,
        });

        return newBooking;
      },

      deleteEventBooking: (id) => {
        set((state) => ({
          eventBookings: state.eventBookings.filter((b) => b.id !== id),
        }));
      },

      updateEventBookingStatus: (id, status) => {
        set((state) => ({
          eventBookings: state.eventBookings.map((b) =>
            b.id === id ? { ...b, status } : b,
          ),
        }));
      },

      // ====================================================
      // SPONSORSHIP ACTIONS
      // ====================================================

      submitSponsorshipProposal: (proposal) => {
        const newProposal: SponsorshipProposal = {
          ...proposal,
          id: crypto.randomUUID(),
          timestamp: Date.now(),
          referenceNumber: generateReferenceNumber(),
          status: "submitted",
        };

        set((state) => ({
          sponsorshipProposals: [...state.sponsorshipProposals, newProposal],
        }));

        get().showFeedback({
          type: "success",
          message: `Partnership inquiry received! Your reference: ${newProposal.referenceNumber}`,
        });

        return newProposal;
      },

      deleteSponsorshipProposal: (id) => {
        set((state) => ({
          sponsorshipProposals: state.sponsorshipProposals.filter(
            (p) => p.id !== id,
          ),
        }));
      },

      updateSponsorshipStatus: (id, status) => {
        set((state) => ({
          sponsorshipProposals: state.sponsorshipProposals.map((p) =>
            p.id === id ? { ...p, status } : p,
          ),
        }));
      },

      // ====================================================
      // MODAL & INTERACTION ACTIONS
      // ====================================================

      openModal: (modalName) => {
        set({ currentModal: modalName });
      },

      closeModal: () => {
        set({ currentModal: null });
      },

      setLoading: (isLoading) => {
        set({ isLoading });
      },

      showFeedback: (feedback) => {
        set({
          feedback: {
            ...feedback,
            duration: (feedback as any).duration ?? 4000,
          },
        });

        // Auto-clear after duration
        setTimeout(
          () => {
            set({ feedback: null });
          },
          (feedback as any).duration ?? 4000,
        );
      },

      clearFeedback: () => {
        set({ feedback: null });
      },

      // ====================================================
      // SELECTION ACTIONS
      // ====================================================

      setSelectedVenue: (venue) => {
        set({ selectedVenue: venue });
      },

      setSelectedSponsorshipTier: (tier) => {
        set({ selectedSponsorshipTier: tier });
      },

      addViewedCaseStudy: (id) => {
        set((state) => ({
          viewedCaseStudies: [...new Set([...state.viewedCaseStudies, id])],
        }));
      },

      addDownloadedAsset: (id) => {
        set((state) => ({
          downloadedAssets: [...new Set([...state.downloadedAssets, id])],
        }));
      },

      // ====================================================
      // NAVIGATION ACTIONS
      // ====================================================

      setActiveSection: (section) => {
        set({ activeSection: section });
      },

      setScrollProgress: (progress) => {
        set({ scrollProgress: progress });
      },

      // ====================================================
      // UTILITIES
      // ====================================================

      clearAllData: () => {
        set(initialState);
      },

      getAllSubmissions: () => {
        const state = get();
        return {
          leasing: state.leasingInquiries,
          events: state.eventBookings,
          sponsorship: state.sponsorshipProposals,
        };
      },
    }),
    {
      name: "dubai-mall-store",
      partialize: (state) => ({
        leasingInquiries: state.leasingInquiries,
        eventBookings: state.eventBookings,
        sponsorshipProposals: state.sponsorshipProposals,
        viewedCaseStudies: state.viewedCaseStudies,
        downloadedAssets: state.downloadedAssets,
      }),
    },
  ),
);
