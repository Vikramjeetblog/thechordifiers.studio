import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";

// 🔥 BTS IMAGES
import bts1 from "../assets/bts1.webp";
import bts2 from "../assets/bts2.webp";
import bts3 from "../assets/bts3.webp";
import bts4 from "../assets/bts4.webp";

const images = [bts1, bts2, bts3, bts4];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.9
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Vision() {
  const ref = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [previewIndex, setPreviewIndex] = useState(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={ref}
      id="vision"
      className="bg-black text-white py-32 px-6 relative overflow-hidden"
    >
      {/* ambient glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-[#f0e81b]/10 blur-[200px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-500/10 blur-[200px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* 🔥 GALLERY */}
        <motion.div
          style={{ y: imageY }}
          className="grid grid-cols-2 grid-rows-4 gap-5 md:gap-6 h-[480px] md:h-[560px]"
        >

          {/* HERO IMAGE */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={() => setPreviewIndex(0)}
            className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl border border-white/10 cursor-pointer group"
          >
            <motion.img
              src={images[0]}
              className="w-full h-full object-cover brightness-[0.85]"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 14, repeat: Infinity }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* ✅ ALWAYS VISIBLE ICON */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/50 backdrop-blur-md p-4 rounded-full shadow-md 
              opacity-90 group-hover:scale-110 group-hover:bg-black/70 transition duration-300">
                <FaPlay size={16} className="text-white" />
              </div>
            </div>
          </motion.div>

          {/* SMALL TILES */}
          {images.slice(1).map((img, i) => {
            const index = i + 1;
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() => setPreviewIndex(index)}
                animate={{
                  scale: isActive ? 1.08 : 1,
                  filter:
                    activeIndex !== null && !isActive
                      ? "brightness(0.5) blur(2px)"
                      : "brightness(0.9)"
                }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-xl border border-white/10 cursor-pointer group"
              >
                <motion.img
                  src={img}
                  className="w-full h-full object-cover brightness-[0.85]"
                  animate={{ scale: isActive ? 1.12 : 1.05 }}
                  transition={{ duration: 6 }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* ✅ ALWAYS VISIBLE ICON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/50 backdrop-blur-md p-3 rounded-full shadow-md 
                  opacity-90 group-hover:scale-110 group-hover:bg-black/70 transition duration-300">
                    <FaPlay size={14} className="text-white" />
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* BALANCE TILE */}
          <motion.div
            onClick={() => setPreviewIndex(1)}
            className="relative overflow-hidden rounded-xl border border-white/10 cursor-pointer group"
          >
            <motion.img
              src={bts2}
              className="w-full h-full object-cover brightness-[0.85]"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/50 backdrop-blur-md p-3 rounded-full shadow-md 
              opacity-90 group-hover:scale-110 group-hover:bg-black/70 transition duration-300">
                <FaPlay size={14} className="text-white" />
              </div>
            </div>
          </motion.div>

        </motion.div>

        {/* TEXT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.p
            variants={item}
            className="text-xs tracking-[5px] text-[#f0e81b] mb-4"
          >
            BEHIND THE BUILD
          </motion.p>

          <motion.h2
            variants={item}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            <span className="text-white">
              THIS IS MORE THAN A STUDIO.
            </span>
            <br />
            <span className="text-gray-500">
              THIS IS YOUR 2ND HOME.
            </span>
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-7 text-gray-400 max-w-lg text-[15px] leading-relaxed"
          >
            We aren't just changing the gear; we are changing the energy.
            The Chordifiers Studio is being rebuilt from the ground up
            to ensure every artist who walks in feels the weight of a
            global music standard.
          </motion.p>
        </motion.div>
      </div>

      {/* 🔥 FULLSCREEN MODAL */}
      <AnimatePresence>
        {previewIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0"
              onClick={() => setPreviewIndex(null)}
            />

            <motion.img
              key={previewIndex}
              src={images[previewIndex % images.length]}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-[90%] max-h-[80vh] rounded-xl object-cover"
            />

            <button
              onClick={() => setPreviewIndex(null)}
              className="absolute top-6 right-6 text-white text-2xl"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}