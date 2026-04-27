import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";

// ✅ Instant load
import Hero from "../components/Hero";
import Vision from "../components/Vision";

// Lazy-loaded
const Expereince = lazy(() => import("../components/Expereince"));
const Academy = lazy(() => import("../components/Academy"));
const Waitlist = lazy(() => import("../components/Waitlist"));
const StudioContact = lazy(() => import("../components/StudioContact"));

export default function Home() {
  const location = useLocation();

  //  Smooth scroll to section
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          window.scrollTo({
            top: el.offsetTop - 80,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  //  Preload lazy components
  useEffect(() => {
    import("../components/Expereince");
    import("../components/Academy");
    import("../components/Waitlist");
    import("../components/StudioContact");
  }, []);

  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="vision">
        <Vision />
      </section>

      <Suspense fallback={<div className="h-[300px]" />}>
        <section id="experience">
          <Expereince />
        </section>

        <section id="academy">
          <Academy />
        </section>

        <section id="waitlist">
          <Waitlist />
        </section>

        <section id="contact">
          <StudioContact />
        </section>
      </Suspense>
    </>
  );
}