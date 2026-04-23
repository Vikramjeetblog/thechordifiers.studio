import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import studio from "../assets/studioB-1.webp";

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

export default function Experience() {
  const ref = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
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

      {/* CONTENT */}
      <motion.div
        style={{ y: imageY }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10"
      >
        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 h-[360px] md:h-[460px]">
          <motion.img
            src={studio}
            alt="Studio Experience"
            className="w-full h-full object-cover"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* TEXT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {/* HEADING */}
          <motion.h2
            variants={item}
            className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight"
          >
            Experience
          </motion.h2>

          {/* PARAGRAPH */}
          <motion.p
            variants={item}
            className="mt-8 text-gray-300 max-w-xl text-[17px] md:text-[19px] leading-relaxed"
          >
            Built for serious artists who are ready to surrender their lives to
            music and turn raw passion into a lasting legacy. 
          </motion.p>

          {/* BULLETS */}
          <motion.div
  variants={item}
  className="mt-7 space-y-3 text-gray-400 text-[15px] md:text-[16px]"
>
  {[
    "Award-winning studio & record label",
    "World-class creative environment",
    "Industry-grade equipment & acoustics",
    "Mentorship from experienced producers",
    "Built for career-focused artists"
  ].map((text, i) => (
    <div key={i} className="flex items-center gap-3">
      <span className="w-2 h-2 bg-[#f0e81b] rounded-full flex-shrink-0" />
      <p>{text}</p>
    </div>
  ))}
</motion.div>

          {/* BUTTONS */}
          <motion.div
            variants={item}
            className="flex gap-4 mt-12 flex-wrap"
          >
            <button
              onClick={() => navigate("/studio-b")}
              className="px-7 py-3.5 text-sm tracking-wide border border-white/20 hover:bg-white hover:text-black transition"
            >
              EXPLORE STUDIO
            </button>

            <button
              onClick={() => navigate("/institute/contact")}
              className="px-7 py-3.5 text-sm tracking-wide border border-white/20 hover:bg-white hover:text-black transition"
            >
              CONTACT US
            </button>

            <button
              onClick={() => navigate("/book-a-call")}
              className="px-7 py-3.5 text-sm tracking-wide bg-[#f0e81b] text-black font-semibold hover:opacity-90 transition"
            >
              BOOK SESSION
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}