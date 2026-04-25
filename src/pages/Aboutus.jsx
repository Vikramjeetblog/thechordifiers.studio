import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import hero from "../assets/institute.webp";
import studio from "../assets/studioD-1.webp";

import bts1 from "../assets/studio12.png";
import bts2 from "../assets/studioA-7.jpeg";
import bts3 from "../assets/studiogallery3.jpeg";
import bts4 from "../assets/studiogallery4.webp";
import bts5 from "../assets/studiogallery5.jpeg";
import bts6 from "../assets/studiogallery6.webp";
import video1 from "../assets/video1.mp4";
import video3 from "../assets/video3.mp4";

const media = [
  { type: "image", src: bts1 },
  { type: "image", src: bts2 },
  { type: "image", src: bts4 },
  { type: "image", src: bts5 },
  { type: "image", src: bts6 },
  { type: "video", src: video3 },
  { type: "image", src: bts3 },
  { type: "video", src: video1 },
];

const timeline = [
  { date: "Aug 2022", title: "Founded & Established" },
  { date: "Mar 2023", title: "Top 10 Studio in North Bengal" },
  { date: "Apr 2023", title: "Started Music Production School" },
  { date: "Jun 2024", title: "Renovation Started" },
  { date: "Dec 2025", title: "Awarded at WBIFF" },
  {date: "2026", title: "Relaunching soon"}
];

export default function AboutPage() {
  const location = useLocation();
  const [active, setActive] = useState(null);

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

  const count = media.length;

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
            WELCOME TO THE CHORDIFIRES STUDIO
          </h1>
          <p className="text-white/70">
            Where creativity meets technology. 
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="pt-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <img
            src={studio}
            className="w-full h-[500px] object-cover rounded-xl"
          />

          <div>
            <h2 className="text-4xl md:text-5xl font-['League_Spartan'] mb-8">
              Welcome to The Chordifires Studio
            </h2>

            <p className="text-white/70 mb-6 text-lg">
              Where creativity meets technology. We empower artists and producers to shape the future of sound through innovation and collaboration.
            The Chordifiers Studio is an award-winning music production studio and independent record label based in North Bengal. Recognised at WBIFF 2025, we specialise in music production, music videos, films, and professional training programs.
         We also operate as an independent artist record label, mentoring, managing, and launching emerging talent while supporting original music releases and long-term career growth.
           We a Trusted by artists, brands, and creators across North Bengal, Darjeeling, Siliguri, and Sikkim.
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 TIMELINE (RESTORED) */}
      <section id="story" className="py-32 bg-black text-white">
        <h2 className="text-4xl text-center mb-20 font-['League_Spartan']">
          Our Story
        </h2>

        <div className="max-w-4xl mx-auto relative px-6">
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#f0e81b]/50"></div>

          <div className="space-y-14">
            {timeline.map((item, i) => (
              <div key={i} className="relative pl-16">
                <div className="absolute left-0 top-2 -translate-x-1/2">
                  <div className="w-3 h-3 bg-[#f0e81b] rounded-full"></div>
                </div>

                <p className="text-sm text-[#f0e81b] mb-2">
                  {item.date}
                </p>

                <h3 className="text-lg text-white">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 GALLERY */}
      <section id="gallery" className="py-32 bg-black text-white">

        <h2 className="text-4xl text-center mb-16 font-['League_Spartan']">
          Studio Gallery
        </h2>

        <div className="max-w-7xl mx-auto px-6">
          {count >= 4 && (
            <div className="grid md:grid-cols-2 gap-6">
              {media.map((item, i) => (
                <MediaCard key={i} item={item} setActive={setActive} />
              ))}
            </div>
          )}
        </div>

        {/* MODAL */}
        {active && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[999]">

            <button
              onClick={() => setActive(null)}
              className="absolute top-6 right-6 bg-black/70 p-3 rounded-full"
            >
              <FiX className="text-white" size={22} />
            </button>

            <div className="max-w-5xl w-full px-4">
              {active.type === "image" ? (
                <img
                  src={active.src}
                  className="w-full max-h-[85vh] object-contain"
                />
              ) : (
                <video
                  src={active.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  className="w-full max-h-[85vh]"
                />
              )}
            </div>
          </div>
        )}
      </section>

      {/* 🔥 VISIT (RESTORED) */}
   <section id="visit" className="py-32 bg-[#0b0b0b] text-white">

  <h2 className="text-4xl text-center mb-16 font-['League_Spartan']">
    Visit The Studio
  </h2>

  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">

    {/* LEFT SIDE */}
    <div>
      <p className="text-white/70 mb-6">
        Visit The Chordifiers Studio and experience <br/>real music production in a professional environment.
      </p>

      <p className="text-white/80 leading-relaxed">
        SHAKTIGARH ROAD NO. 8, Siliguri,<br/> Dist- Darjeeling, West Bengal, 734004
      </p>

      <p className="text-white/80 mt-4">
        +91 7811092672
      </p>

      <p className="text-white/80 mt-2">
        thechordifiersstudio@gmail.com
      </p>
    </div>

    {/* RIGHT SIDE MAP */}
    <iframe
      title="Chordifiers Studio Map"
      src="https://www.google.com/maps?q=The+Chordifiers+Studio+Siliguri&output=embed"
      className="w-full h-[350px] md:h-[400px] rounded-xl border-0"
      loading="lazy"
    />

  </div>
</section>
    </>
  );
}

/* MEDIA CARD */
const MediaCard = ({ item, setActive }) => {
  return (
    <div
      onClick={() => setActive(item)}
      className="relative group rounded-xl overflow-hidden cursor-pointer h-[260px]"
    >
      {item.type === "image" ? (
        <img src={item.src} className="w-full h-full object-cover" />
      ) : (
        <video
          src={item.src}
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />

      {item.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/80 p-3 rounded-full">
            <FaPlay className="text-white" />
          </div>
        </div>
      )}
    </div>
  );
};
