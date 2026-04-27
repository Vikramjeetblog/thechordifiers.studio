import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import studioA from "../assets/studioA-7.jpeg";
import studioB from "../assets/studioB-1.webp";
import studioC from "../assets/studioC-1.webp";
import studioD from "../assets/studioD-1.webp";

const images = [studioA, studioB, studioC, studioD];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.9,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Experience() {
  const ref = useRef(null);
  const navigate = useNavigate();

  const [active, setActive] = useState(0);
  const [isVisible, setIsVisible] = useState(false);


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

  //  Auto slide 
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isVisible]);

  
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

  const imageY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section
      ref={ref}
      id="experience"
      className="bg-black text-white py-32 px-6 relative overflow-hidden"
    >
      {/* ambient glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-yellow-400/10 blur-[200px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-500/10 blur-[200px]" />

      <motion.div
        style={{ y: imageY }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10"
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 h-[360px] md:h-[460px]">

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
              alt="Studio"
              loading="lazy"        // ✅ invisible optimization
              decoding="async"     // ✅ faster rendering
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
        >
          <motion.h2
            variants={item}
            className="text-5xl md:text-7xl font-extrabold leading-[1.1]"
          >
            The Experience
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-8 text-gray-300 max-w-xl text-[17px] md:text-[19px]"
          >
            Built for serious artists who are ready to surrender their lives to
            music and turn raw passion into a lasting legacy.
          </motion.p>

          <motion.div variants={item} className="mt-7 space-y-3 text-gray-400">
            {[
              "Award-winning studio & record label",
              "World-class creative environment",
              "Industry-grade equipment & acoustics",
              "Mentorship from experienced producers",
              "Built for career-focused artists",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-[#f0e81b] rounded-full" />
                <p>{text}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={item} className="flex gap-4 mt-12 flex-wrap">
            <button
              onClick={() => navigate("/thestudio")}
              className="px-7 py-3.5 border border-white/20 hover:bg-white hover:text-black transition"
            >
              EXPLORE STUDIO
            </button>

            <button
              onClick={() => navigate("#contact")}
              className="px-7 py-3.5 border border-white/20 hover:bg-white hover:text-black transition"
            >
              CONTACT US
            </button>

            <button
              onClick={() => navigate("/book")}
              className="px-7 py-3.5 bg-[#f0e81b] text-black font-semibold hover:opacity-90 transition"
            >
              BOOK SESSION
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}