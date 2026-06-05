import "./App.css";
import { Footer } from "@/components/Footer";
import { FloatingNav } from "@/components/navigation/FloatingNav";
import { useLenis } from "@/hooks/useLenis";
import { useEffect } from "react";

import { EventBookingModal } from "./components/modals/EventBookingModal/EventBookingModal";
import { GlobalFeedback } from "./components/GlobalFeedback";
import {
  DiningSection,
  EntertainmentSection,
  EventsSection,
  LuxuryDistrictSection,
  RetailSection,
  WhyDubaiMallSection,
} from "./components/sections";
import {
  EventsModule,
  LeasingModule,
  PerformanceModule,
  SponsorshipModule,
} from "./components/modules";
import { LeasingInquiryModal } from "./components/modals/LeasingEnquiryModal/LeasingEnquiryModal";
import HeroSection from "./components/sections/heroSection/HeroSection";

function App() {
  useLenis();
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.title = "Dubai Mall — The World's Destination";
  }, []);

  return (
    <div className="relative bg-background text-foreground overflow-x-hidden">
      <FloatingNav />
      <main>
        <HeroSection />
        <WhyDubaiMallSection />
        <RetailSection />
        <LuxuryDistrictSection />
        <LeasingModule />
        <DiningSection />
        <EntertainmentSection />
        <SponsorshipModule />
        <PerformanceModule />

        <EventsSection />
        <EventsModule />
      </main>
      <Footer />
      <LeasingInquiryModal />
      <EventBookingModal />
      <GlobalFeedback />
    </div>
  );
}

export default App;
