import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";

// IMAGES
import studioA from "../assets/gallery1.jpeg";
import studioB from "../assets/gallery7.jpeg";
import studioC from "../assets/vision.webp";
import studioD from "../assets/vision2.webp";
import studioE from "../assets/vision3.webp";
import studioF from "../assets/vision4.webp";

const images = [studioA, studioB, studioC, studioD, studioE, studioF];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.6,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Vision() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // ✅ Detect when section is visible (NO UI change)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Auto slider ONLY when visible
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isVisible]);

  // ✅ Stable functions (prevents re-renders)
  const nextSlide = useCallback(() => {
    setActive((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActive((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section
      ref={ref}
      id="vision"
      className="bg-black text-white py-24 px-6 relative overflow-hidden"
    >
      {/* ambient glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-yellow-400/10 blur-[200px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-500/10 blur-[200px]" />

      <motion.div
        style={{ y: imageY }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10"
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 h-[340px] md:h-[460px]">
          
          {/* NAV BUTTONS */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 p-2 rounded-full"
          >
            <FiChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 p-2 rounded-full"
          >
            <FiChevronRight size={20} />
          </button>

          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={images[active]}
              alt="Vision"
              loading="lazy"           // ✅ optimization (no UI change)
              decoding="async"        // ✅ faster rendering
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/40" />

          {/* dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === active ? "w-6 bg-[#f0e81b]" : "w-2 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* TEXT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-xl"
        >
          <motion.p
            variants={item}
            className="text-xs tracking-[4px] text-[#f0e81b] mb-4"
          >
            BEHIND THE BUILD
          </motion.p>

          <motion.h2
            variants={item}
            className="text-4xl md:text-6xl font-extrabold leading-[1.1]"
          >
            <span className="block text-white mb-2">THIS IS MORE</span>
            <span className="block text-white mb-2">THAN A STUDIO.</span>
            <span className="block text-white/60">THIS IS YOUR 2ND HOME.</span>
          </motion.h2>

          <motion.div
            variants={item}
            className="w-12 h-[2px] bg-white mt-6 mb-6"
          />

          <motion.p
            variants={item}
            className="text-gray-400 text-[15px] md:text-[17px] leading-relaxed"
          >
            We aren't just changing the gear; we are changing the energy.
            The Chordifiers Studio is being rebuilt from the ground up.
          </motion.p>

          <HashLink smooth to="/about-us#gallery">
            <motion.button
              variants={item}
              className="mt-8 px-6 py-3 border border-white/30 hover:bg-white hover:text-black transition"
            >
              EXPLORE GALLERY
            </motion.button>
          </HashLink>
        </motion.div>
      </motion.div>
    </section>
  );
}