import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

import video1 from "../../../assets/studiovideo1.mp4";
import video2 from "../../../assets/studiovideo2.mp4";

import img1 from "../../../assets/studioA-7.jpeg";
import img2 from "../../../assets/studiogallery5.jpeg";
import img3 from "../../../assets/studiogallery3.jpeg";
import img4 from "../../../assets/gallery10.jpeg";

const media = [
  { type: "image", src: img1 },
  { type: "image", src: img2 },
  { type: "video", src: video1 },
  { type: "image", src: img3 },
  { type: "video", src: video2 },
  { type: "image", src: img4 },
];

const StudioMoments = () => {
  const [active, setActive] = useState(null);
  const containerRef = useRef();

  // 🔥 Auto scroll
  useEffect(() => {
    const container = containerRef.current;
    let interval;

    const start = () => {
      interval = setInterval(() => {
        container?.scrollBy({ left: 300, behavior: "smooth" });
      }, 3000);
    };

    const stop = () => clearInterval(interval);

    start();

    container?.addEventListener("mouseenter", stop);
    container?.addEventListener("mouseleave", start);

    return () => stop();
  }, []);

  const scroll = (dir) => {
    containerRef.current.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black text-white py-24 relative">

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Studio Moments
        </h2>
        <p className="text-gray-400 mt-2 text-sm tracking-widest">
          REAL SESSIONS. REAL ENERGY.
        </p>
      </div>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-3 rounded-full"
      >
        <FiChevronLeft size={22} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/70 p-3 rounded-full"
      >
        <FiChevronRight size={22} />
      </button>

      {/* Gallery */}
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
        className="flex gap-6 overflow-x-auto px-6 cursor-grab active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {media.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            onClick={() => setActive(item)}
            className="min-w-[280px] md:min-w-[420px] h-[360px] relative group rounded-xl overflow-hidden cursor-pointer"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />

            {/* Play icon */}
            {item.type === "video" && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/80 p-4 rounded-full">
                  <FaPlay className="text-white ml-[2px]" />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[999]">

          {/* Close */}
          <button
            onClick={() => setActive(null)}
            className="absolute top-6 right-6 text-white bg-black/70 p-3 rounded-full"
          >
            <FiX size={22} />
          </button>

          <div className="max-w-5xl w-full px-4">
            {active.type === "image" ? (
              <img
                src={active.src}
                alt=""
                className="w-full max-h-[85vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={active.src}
                autoPlay
                muted   // ✅ CRITICAL FIX
                loop
                playsInline
                preload="auto"
                controls={false}
                controlsList="nodownload noplaybackrate noremoteplayback"
                disablePictureInPicture
                ref={(el) => {
                  if (el) el.muted = true; // ✅ FORCE mute (important)
                }}
                className="w-full max-h-[85vh] rounded-lg object-contain"
              />
            )}
          </div>
        </div>
      )}

    </section>
  );
};

export default StudioMoments;