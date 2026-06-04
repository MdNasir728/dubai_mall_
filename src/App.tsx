import "./App.css";
import { Footer } from "@/components/Footer";
import { FloatingNav } from "@/components/navigation/FloatingNav";
import { HeroSection } from "@/components/sections/heroSection/HeroSection";
import { useLenis } from "@/hooks/useLenis";
import { useEffect } from "react";
import { WhyDubaiMallSection } from "@/components/sections/whyDubaiMallSection/WhyDubaiMallSection";
import { RetailSection } from "@/components/sections/RetailSection/RetailSection";
import { LuxuryDistrictSection } from "@/components/sections/LuxuryDistrictSection/LuxuryDistrictSection";
import { DiningSection } from "@/components/sections/DiningSection/DiningSection";
import { EntertainmentSection } from "@/components/sections/EntertainmentSection/EntertainmentSection";

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
        <DiningSection />
        <EntertainmentSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
