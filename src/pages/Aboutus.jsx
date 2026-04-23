import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import hero from "../assets/institute.webp";
import studio from "../assets/studioD-1.webp";

import bts1 from "../assets/bts1.webp";
import bts2 from "../assets/bts2.webp";
import bts3 from "../assets/bts3.webp";

const timeline = [
  { date: "Aug 2022", title: "Founded & Established" },
  { date: "Mar 2023", title: "Ranked to Top 10 Music Studio's In North Bengal" },
  { date: "Apr 2023", title: "Introduced the First Music Production School in the town" },
  { date: "Jun 2023", title: "Introduced Other Courses" },
  { date: "Jun 2024", title: "Renovations Started" },
  { date: "Nov 2024", title: "Renovations Ongoing" },
  { date: "Dec 2024", title: "Ranked to Top 3 Music Studio's & School category In North Bengal" },
  { date: "2025", title: "Relaunching Soon" }
];

export default function AboutPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-5xl font-['Anton'] text-[#f0e81b] mb-6">
            WELCOME TO CHORDIFIRES STUDIO
          </h1>

          <p className="text-white/70">
            Where creativity meets technology
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          <img
            src={studio}
            className="w-full h-[500px] object-cover rounded-xl"
          />

          <div>
            <h2 className="text-4xl md:text-5xl font-['League_Spartan'] mb-8">
              Welcome to Chordifires
            </h2>

            <p className="text-white/70 mb-6 text-lg">
              Where creativity meets technology. We empower artists and producers
              to shape the future of sound through innovation and collaboration.
            </p>

            <p className="text-white/70 mb-6 text-lg">
              The Chordifiers Studio is an award-winning music production studio
              and independent record label based in North Bengal. Recognised at
              WBIFF 2025, we specialise in music production, music videos, films,
              and professional training programs.
            </p>

            <p className="text-white/70 mb-6 text-lg">
              We also operate as an independent artist record label, mentoring,
              managing, and launching emerging talent while supporting original
              music releases and long-term career growth.
            </p>

            <p className="text-white/70 text-lg">
              Trusted by artists, brands, and creators across North Bengal,
              Darjeeling, Siliguri, and Sikkim.
            </p>
          </div>
        </div>
      </section>
      {/* TIMELINE */}
      <section  id="story" className="py-32 bg-black text-white">
        <h2 className="text-4xl md:text-5xl text-center mb-20 font-['League_Spartan']">
          Our Story
        </h2>

        <div className="max-w-4xl mx-auto relative px-6">

          {/* LINE */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#f0e81b]/50"></div>

          <div className="space-y-14">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-16">

                {/* DOT (FINAL FIXED) */}
                <div className="absolute left-0 top-2 -translate-x-1/2">

                  {/* glow */}
                  <div className="absolute w-4 h-4 bg-[#f0e81b] rounded-full blur-md opacity-70"></div>

                  {/* core */}
                  <div className="w-3 h-3 bg-[#f0e81b] rounded-full relative z-10"></div>

                </div>

                <p className="text-sm text-[#f0e81b] mb-2 tracking-wide">
                  {item.date}
                </p>

                <h3 className="text-lg md:text-xl text-white font-medium leading-snug">
                  {item.title}
                </h3>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-32 bg-black text-white">

        <p className="text-center text-white/70 max-w-3xl mx-auto mb-10 px-6">
          Step into the heartbeat of creativity at The Chordifiers Studio—each photo unveils our passion, energy, and the magic behind every note.
        </p>

        <h2 className="text-4xl md:text-5xl text-center mb-16 font-['League_Spartan']">
          Studio Gallery
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 px-6">
          <img src={bts1} className="w-full h-[400px] object-cover rounded-xl" />
          <img src={bts2} className="w-full h-[400px] object-cover rounded-xl" />
          <img src={bts3} className="md:col-span-2 w-full h-[450px] object-cover rounded-xl" />
        </div>
      </section>

      

      {/* VISIT */}
      <section id="visit" className="py-32 bg-[#0b0b0b] text-white">

        <h2 className="text-4xl md:text-5xl text-center mb-16 font-['League_Spartan']">
          Visit The Studio
        </h2>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

          <div>
            <p className="text-white/70 mb-6">
              Visit The Chordifiers Studio and experience real music production.
            </p>

            <p className="text-white/80">THE CHORDIFIRES STUDIO  SHAKTIGARH  ROAD NO. 8,<br/> Siliguri,  Dist- Darjeeling, West Bengal, 734004</p>
            <p className="text-white/80 mt-2">+91 7811092672</p>
            <p className="text-white/80 mt-2">thechordifiersstudio@gmail.com</p>
          </div>

          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.5492559700447!2d88.4100217742397!3d26.69489467677753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441acea247e9b%3A0x77c74beed4aadd84!2sThe%20Chordifiers%20Studio%20(TCS)!5e0!3m2!1sen!2sin!4v1749987584228!5m2!1sen!2sin"
            className="w-full h-[350px] md:h-[400px] rounded-xl"
          />

        </div>
      </section>
    </>
  );
}