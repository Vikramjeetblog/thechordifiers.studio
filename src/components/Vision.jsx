import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// MEDIA
import bts1 from "../assets/studiogallery1.jpg";
import bts2 from "../assets/studiogallery3.jpeg";
import bts4 from "../assets/studiogallery2.jpeg";

import vid1 from "../assets/studiovideo3.mp4";
import vid2 from "../assets/video1.mp4";
import vid3 from "../assets/video3.mp4";
import vid4 from "../assets/video2.mp4";

const media = [
  { type: "video", src: vid1 },
  { type: "image", src: bts1 },
  { type: "image", src: bts2 },
  { type: "video", src: vid2 },
  { type: "video", src: vid4 },
  { type: "image", src: bts4 },
  { type: "video", src: vid3 }
];

// ✅ VIDEO COMPONENT (NO BLANK ISSUE)
function VideoCard({ src, fallback }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* IMAGE FIRST */}
      <img
        src={fallback}
        className="absolute inset-0 w-full h-full object-cover"
        alt="fallback"
      />

      {/* VIDEO */}
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => setLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default function Vision() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={ref}
      id="vision"
      className="bg-black text-white py-20 px-4 md:px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* 🎬 LEFT SIDE */}
        <motion.div style={{ y }} className="relative">

          {/* NAV */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 vision-prev bg-white/10 p-2 rounded-full cursor-pointer">
            <FiChevronLeft size={18} />
          </div>

          <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 vision-next bg-white/10 p-2 rounded-full cursor-pointer">
            <FiChevronRight size={18} />
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={14}
            slidesPerView={1} // ✅ mobile fix
            navigation={{
              nextEl: ".vision-next",
              prevEl: ".vision-prev"
            }}
            breakpoints={{
              640: { slidesPerView: 1.1 },
              768: { slidesPerView: 1.4 },
              1024: { slidesPerView: 1.8 }
            }}
          >
            {media.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="h-[220px] sm:h-[260px] md:h-[300px] rounded-xl overflow-hidden relative group cursor-pointer">

                  {item.type === "video" ? (
                    <VideoCard src={item.src} fallback={bts1} />
                  ) : (
                    <img
                      src={item.src}
                      className="w-full h-full object-cover"
                      alt="studio"
                    />
                  )}

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/25" />

                  {/* PLAY ICON */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/50 p-2 md:p-3 rounded-full">
                      <FaPlay size={10} />
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* 🎯 RIGHT SIDE TEXT */}
        <motion.div className="hidden md:flex justify-end">
          {/* ❌ HIDDEN ON MOBILE */}

          <div className="bg-[#0a0a0a] border border-[#f0e81b]/30 rounded-2xl p-8 max-w-lg relative">

            <div className="absolute inset-0 bg-[#f0e81b]/5 blur-2xl pointer-events-none" />

            <p className="text-xs tracking-[6px] text-[#f0e81b] mb-5">
              BEHIND THE BUILD
            </p>

            <h2 className="text-4xl font-extrabold leading-tight">
              <span className="text-[#f0e81b] block mb-2">THIS IS MORE</span>
              <span className="text-white block mb-2">THAN A STUDIO.</span>
              <span className="text-white/50 block">THIS IS YOUR 2ND HOME.</span>
            </h2>

            <div className="w-16 h-[2px] bg-[#f0e81b] mt-6 mb-6" />

            <p className="text-gray-400 text-sm leading-relaxed">
              We aren't just changing the gear; we are changing the energy.
              The Chordifiers Studio is being rebuilt from the ground up.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}