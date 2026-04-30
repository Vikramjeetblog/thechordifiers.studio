import Navbar from "./Navbar";
import { FaPlay } from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import StudioPreviewModal from "../components/StudioPreviewModal";

// IMAGES
import studioA from "../assets/studioA-7.jpeg";
import studioB from "../assets/studioB-1.webp";
import studioC from "../assets/studioC-10.webp";
import studioD from "../assets/studioD-7.webp";

export default function Hero() {
  const navigate = useNavigate();
  const [hoveredBtn, setHoveredBtn] = useState(null);

  //  memoize images
  const images = useMemo(() => [studioA, studioB, studioC, studioD], []);

  const [index, setIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  //  Preload all images in background 
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  //  Slider 
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-white pt-28 pb-24">

      {/* BACKGROUND IMAGE */}
      <img
        src={images[index]}
        alt="studio"
        fetchPriority="high"     // ✅ faster first load
        decoding="async"        // ✅ better rendering
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

      <Navbar />

      {/* CONTENT */}
      <div className="relative z-10 text-center max-w-5xl px-6">

        <div className="mb-6">
          <span className="px-4 py-1.5 bg-black/50 border border-white/10 rounded-full text-xs tracking-[3px] text-[#f0e81b]">
            A NEW ERA OF SOUND IS BEING BUILT
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-extrabold leading-[1.05]">
          THE <br /> CHORDIFIERS <br /> STUDIO
        </h1>

        <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base mt-6">
          We are currently under renovations, crafting a next-generation
          creative environment for artists, producers, and visionaries.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">

          <button
            onMouseEnter={() => setHoveredBtn("artist")}
            onMouseLeave={() => setHoveredBtn(null)}
            onClick={() => navigate("/#waitlist")}
            className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:bg-[#f0e81b]"
          >
            {hoveredBtn === "artist" ? "JOIN PRIORITY LIST" : "FOR ARTISTS"}
          </button>

          <button
            onClick={() => setIsPreviewOpen(true)}
            className="flex items-center gap-3 border border-white/40 px-6 py-3 rounded-full hover:bg-[#f0e81b] hover:text-black transition"
          >
            <FaPlay size={12} />
            <span className="text-sm">WATCH THE STUDIO PREVIEW</span>
          </button>

          <button
            onMouseEnter={() => setHoveredBtn("student")}
            onMouseLeave={() => setHoveredBtn(null)}
            onClick={() => navigate("/institute/#courses")}
            className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:bg-[#f0e81b]"
          >
            {hoveredBtn === "student" ? "EXPLORE COURSES" : "FOR STUDENTS"}
          </button>

        </div>

      </div>

      {/* DOTS */}
      <div className="absolute bottom-6 flex gap-2 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-[#f0e81b]" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      <StudioPreviewModal
        open={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />

    </section>
  );
}