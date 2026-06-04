// ====================================================
// NAVIGATION STORE — Zustand
// ====================================================

import { create } from "zustand";
import type { NavigationState, SectionId } from "@/types";

export const useNavigationStore = create<NavigationState>((set) => ({
  activeSection: "hero",
  setActiveSection: (section: SectionId) => set({ activeSection: section }),
  isNavVisible: false,
  setNavVisible: (visible: boolean) => set({ isNavVisible: visible }),
}));
