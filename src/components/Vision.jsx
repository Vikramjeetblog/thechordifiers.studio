import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiMinus } from "react-icons/fi";
import { IoIosClose} from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// MEDIA
import bts1 from "../assets/studiogallery1.jpg";
import bts2 from "../assets/studiogallery3.jpeg";
import bts3 from "../assets/studiogallery2.jpeg";
import bts4 from "../assets/studiogallery5.jpeg";

import vid1 from "../assets/studiovideo1.mp4";
import vid2 from "../assets/studiovideo2.mp4";

const media = [
  { type: "video", src: vid1 },
  { type: "image", src: bts1 },
  { type: "image", src: bts2 },
  { type: "video", src: vid2 },
  { type: "image", src: bts3 },
  { type: "image", src: bts4 },
];


// 🔥 ANIMATION VARIANTS
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Vision() {
  const ref = useRef(null);
  const [previewIndex, setPreviewIndex] = useState(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <section
      ref={ref}
      id="vision"
      className="bg-black text-white py-28 px-6 relative overflow-hidden"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* 🔥 SWIPER */}
        <motion.div style={{ y }} className="relative">

          {/* NAV BUTTONS */}
          <div className="absolute -left-4 top-1/2 z-20 -translate-y-1/2 vision-prev cursor-pointer bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition">
            <FiChevronLeft size={20} />
          </div>

          <div className="absolute -right-4 top-1/2 z-20 -translate-y-1/2 vision-next cursor-pointer bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition">
            <FiChevronRight size={20} />
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            navigation={{
              nextEl: ".vision-next",
              prevEl: ".vision-prev"
            }}
            breakpoints={{
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2 }
            }}
          >

            {media.map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  onClick={() => setPreviewIndex(i)}
                  className="h-[260px] md:h-[300px] rounded-xl overflow-hidden relative group cursor-pointer"
                >

                  {/* MEDIA */}
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  ) : (
                    <video
                      src={item.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  )}

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition" />

                  {/* PLAY ICON */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/40 backdrop-blur-sm p-2 rounded-full group-hover:scale-110 transition">
                      <FaPlay size={12} />
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}

          </Swiper>

        </motion.div>

        {/* 🔥 TEXT WITH ANIMATION */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col justify-center h-full max-w-xl"
        >

          {/* LABEL */}
          <motion.p
            variants={item}
            className="text-[10px] md:text-xs tracking-[6px] text-[#f0e81b]/80 mb-5"
          >
            BEHIND THE BUILD
          </motion.p>

          {/* HEADING */}
          <motion.h2
            variants={item}
            className="text-4xl md:text-6xl lg:text-[64px] font-extrabold leading-[1.1] tracking-tight"
          >
            <span className="text-white block mb-2">THIS IS MORE</span>
            <span className="text-white block mb-2">THAN A STUDIO.</span>
            <span className="text-white/40 block">THIS IS YOUR 2ND HOME.</span>
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            variants={item}
            className="mt-8 text-gray-400 text-[15px] leading-relaxed max-w-md"
          >
            We aren't just changing the gear; we are changing the energy.
            The Chordifiers Studio is being rebuilt from the ground up
            to ensure every artist who walks in feels the weight of a
            global music standard.
          </motion.p>

        </motion.div>

      </div>

      {/*  MODAL */}
      
<AnimatePresence>
  {previewIndex !== null && (
    <motion.div
      className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      {/* BACKDROP */}
      <div
        className="absolute inset-0 z-10"
        onClick={() => setPreviewIndex(null)}
      />

      {/* CONTENT */}
      {media[previewIndex].type === "image" ? (
        <motion.img
          src={media[previewIndex].src}
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          className="relative z-20 max-w-[90%] max-h-[80vh] rounded-xl object-cover"
        />
      ) : (
        <motion.video
          src={media[previewIndex].src}
          autoPlay
          muted
          controls
          playsInline
          preload="metadata"
          controlsList="nodownload"
          className="relative z-20 max-w-[90%] max-h-[80vh] rounded-xl"
        />
      )}

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setPreviewIndex(null)}
        className="absolute top-6 right-6 z-30 bg-white/10 backdrop-blur-md px-4 py-2 rounded-md hover:bg-white/20 transition"
      >
        <IoIosClose size={18} />
      </button>

    </motion.div>
  )}
</AnimatePresence>
    </section>
  );
}