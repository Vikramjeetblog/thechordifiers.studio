import React, { useState } from "react";
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

// VIDEO COMPONENT
function VideoCard({ src, fallback }) {
  const [canPlay, setCanPlay] = useState(false);

  return (
    <div className="relative w-full h-full">
      <img
        src={fallback}
        className="absolute inset-0 w-full h-full object-cover"
        alt="fallback"
      />

      <video
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        autoPlay
        onCanPlay={() => setCanPlay(true)}
        onError={() => setCanPlay(false)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
          canPlay ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default function Vision() {
  return (
    <section
      id="vision"
      className="bg-black text-white py-12 md:py-16 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center">

        {/* LEFT - SLIDER */}
        <div className="relative w-full">

          {/* NAV BUTTONS (HIDE ON MOBILE) */}
          <div className="hidden md:block">
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 vision-prev bg-white/10 p-2 rounded-full cursor-pointer">
              <FiChevronLeft size={20} />
            </div>

            <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 vision-next bg-white/10 p-2 rounded-full cursor-pointer">
              <FiChevronRight size={20} />
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={12}
            slidesPerView={1}
            navigation={{
              nextEl: ".vision-next",
              prevEl: ".vision-prev"
            }}
            breakpoints={{
              640: { slidesPerView: 1.1 },
              768: { slidesPerView: 1.3 },
              1024: { slidesPerView: 1.6 }
            }}
          >
            {media.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="h-[200px] sm:h-[240px] md:h-[280px] rounded-xl overflow-hidden relative">

                  {item.type === "video" ? (
                    <VideoCard src={item.src} fallback={bts1} />
                  ) : (
                    <img
                      src={item.src}
                      className="w-full h-full object-cover"
                      alt="studio"
                    />
                  )}

                  {/* overlay */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* play icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/60 p-2 rounded-full">
                      <FaPlay size={12} />
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT - TEXT */}
        <div className="w-full flex justify-center md:justify-end">
          <div className="bg-[#0a0a0a] border border-[#f0e81b]/30 rounded-2xl p-5 md:p-8 w-full max-w-md relative">

            <div className="absolute inset-0 bg-[#f0e81b]/5 blur-2xl pointer-events-none" />

            <p className="text-[10px] md:text-xs tracking-[3px] md:tracking-[5px] text-[#f0e81b] mb-3">
              BEHIND THE BUILD
            </p>

            <h2 className="text-xl md:text-3xl font-extrabold leading-tight">
              <span className="text-[#f0e81b] block mb-1">THIS IS MORE</span>
              <span className="block mb-1">THAN A STUDIO.</span>
              <span className="text-white/50 block">THIS IS YOUR 2ND HOME.</span>
            </h2>

            <div className="w-10 md:w-16 h-[2px] bg-[#f0e81b] mt-4 mb-4" />

            <p className="text-gray-400 text-sm leading-relaxed">
              We aren't just changing the gear; we are changing the energy.
              The Chordifiers Studio is being rebuilt from the ground up.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}