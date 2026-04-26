import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import video1 from "../../../assets/studiovideo1.mp4";
import video2 from "../../../assets/studiovideo2.mp4";

import img1 from "../../../assets/studioA-7.jpeg";
import img2 from "../../../assets/studiogallery5.jpeg";
import img3 from "../../../assets/studiogallery3.jpeg";
import img4 from "../../../assets/gallery10.jpeg";

const media = [
  { type: "image", src: img1 },
  { type: "video", src: video1 },
  { type: "image", src: img2 },
  { type: "video", src: video2 },
  { type: "image", src: img3 },
  { type: "image", src: img4 },
];

export default function StudioMomentsHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // 🔥 Auto slide (pause supported)
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % media.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  // 🔥 Manual controls
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % media.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-black"
      onClick={() => setPaused(!paused)} // 🔥 click to pause/resume
    >

      {/* 🔥 MEDIA */}
      <AnimatePresence mode="wait">
        {media[index].type === "image" ? (
          <motion.img
            key={media[index].src}
            src={media[index].src}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <motion.video
            key={media[index].src}
            src={media[index].src}
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
      </AnimatePresence>

      {/* 🔥 OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* 🔥 TEXT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-5xl md:text-7xl font-['Anton'] text-[#f0e81b] mb-4">
          STUDIO MOMENTS
        </h1>

        <p className="text-white/70 text-lg md:text-xl max-w-xl">
          Real sessions. Real energy. Experience the studio like never before.
        </p>

        {/* 🔥 PAUSE INDICATOR */}
        {paused && (
          <span className="mt-4 text-white/60 text-sm">
            Paused
          </span>
        )}
      </div>

      {/* 🔥 ARROWS */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black p-3 rounded-full text-white"
      >
        <FiChevronLeft size={24} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black p-3 rounded-full text-white"
      >
        <FiChevronRight size={24} />
      </button>

      {/* 🔥 DOTS */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-20">
        {media.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setIndex(i);
            }}
            className={`w-3 h-3 rounded-full transition ${
              i === index
                ? "bg-[#f0e81b] scale-125"
                : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
}