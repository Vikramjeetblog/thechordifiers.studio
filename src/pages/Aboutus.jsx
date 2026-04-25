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
            Where creativity meets technology
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
              Where creativity meets technology. We empower artists and producers
              to shape the future of sound through innovation and collaboration.
            </p>

            <p className="text-white/70 mb-6 text-lg">
              Award-winning music production studio and record label based in North Bengal.
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 GALLERY (UPDATED) */}
      <section id="gallery" className="py-32 bg-black text-white">

        <h2 className="text-4xl md:text-5xl text-center mb-16 font-['League_Spartan']">
          Studio Gallery
        </h2>

        <div className="max-w-7xl mx-auto px-6">

          {/* 2 ITEMS */}
          {count === 2 && (
            <div className="grid md:grid-cols-2 gap-6">
              {media.map((item, i) => (
                <MediaCard key={i} item={item} setActive={setActive} />
              ))}
            </div>
          )}

          {/* 3 ITEMS */}
          {count === 3 && (
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <MediaCard item={media[0]} setActive={setActive} large />
              </div>
              <div className="flex flex-col gap-6">
                <MediaCard item={media[1]} setActive={setActive} />
                <MediaCard item={media[2]} setActive={setActive} />
              </div>
            </div>
          )}

          {/* 4+ ITEMS */}
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
                  className="w-full max-h-[85vh] object-contain rounded-lg"
                />
              ) : (
                <video
                  src={active.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls={false}
                  controlsList="nodownload"
                  disablePictureInPicture
                  className="w-full max-h-[85vh] rounded-lg object-contain"
                />
              )}
            </div>
          </div>
        )}

      </section>
    </>
  );
}

/* 🔥 MEDIA CARD */
const MediaCard = ({ item, setActive, large }) => {
  return (
    <div
      onClick={() => setActive(item)}
      className={`relative group rounded-xl overflow-hidden cursor-pointer ${
        large ? "h-[500px]" : "h-[260px]"
      }`}
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
            <FaPlay className="text-white ml-[2px]" />
          </div>
        </div>
      )}
    </div>
  );
};