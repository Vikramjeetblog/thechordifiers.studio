import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import InstituteHero from "../components/institute/InstituteHero.jsx";
import InstituteAbout from "../components/institute/InstituteAbout.jsx";
import Location from "./Location";
import Courses from "./Courses";
import InstitueContact from "../components/institute/InstitueContact";

export default function Institute() {
  const location = useLocation();

  // scroll to top when no hash
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <main className="bg-[#111111] text-white">

      {/* HERO */}
      <section id="home" className="scroll-mt-14">
        <InstituteHero />
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-18">
        <InstituteAbout />
      </section>

      {/* COURSES */}
      <section id="courses" className="scroll-mt-20">
        <Courses />
      </section>

      {/* LOCATION */}
      <section id="location" className="scroll-mt-16">
        <Location />
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-42">
        <InstitueContact />
      </section>

    </main>
  );
}