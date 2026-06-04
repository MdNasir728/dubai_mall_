import "./App.css";
import { useLenis } from "./hooks/useLenis";
import { useEffect } from "react";

function App() {
  useLenis();

  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.title = "Dubai Mall — The World's Destination";
  }, []);

  return (
    <>
      <section id="center">
        <div>Home</div>
      </section>
    </>
  );
}

export default App;
