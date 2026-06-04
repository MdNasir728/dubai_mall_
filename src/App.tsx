import "./App.css";
import { Footer } from "@/components/Footer";
import { FloatingNav } from "@/components/navigation/FloatingNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { useLenis } from "@/hooks/useLenis";
import { useEffect } from "react";

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

      </main>
      <Footer />
    </div>
  );
}

export default App;
