import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/Hero";
import AIConcept from "../components/AIConcept";
import Vision from "../components/Vision";
import Academy from "../components/Academy";
import Waitlist from "../components/Waitlist";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          window.scrollTo({
            top: el.offsetTop - 80, // adjust for navbar height
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <section id="vision">
        <AIConcept />
        <Vision />
      </section>

      <section id="experience">
        <Academy />
      </section>

      <section id="academy">
        <Waitlist />
      </section>
    </>
  );
}