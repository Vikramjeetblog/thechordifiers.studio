import { useEffect } from "react";
import Home from "./pages/Home";
import CursorGlow from "./components/CursorGlow";
import Lenis from "lenis";

function App() {

  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };

  }, []);

  return (
    <div className="bg-black text-white">
      <CursorGlow />
      <Home />
    </div>
  );
}

export default App;
