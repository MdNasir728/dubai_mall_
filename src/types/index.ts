export interface NavSection {
  id: string;
  label: string;
  index: number;
}


export type SectionId =
  | "hero"
  | "why-dubai-mall"
  | "retail"
  | "luxury-district"
  | "dining"
  | "entertainment"
  | "events";

export interface NavigationState {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  isNavVisible: boolean;
  setNavVisible: (visible: boolean) => void;
}
