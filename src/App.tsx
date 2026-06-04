import "./App.css";
import { Footer } from "./components/Footer";
import { useLenis } from "./hooks/useLenis";
import { useEffect } from "react";

function App() {
  useLenis();

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.title = "Dubai Mall — The World's Destination";
  }, []);

  return (
    <div className="relative bg-background text-foreground overflow-x-hidden">
      {/* <FloatingNav /> */}
      <main>
        <section id="center">
          <div>Home</div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
