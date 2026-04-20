import Navbar from "./Navbar";
import { FaPlay } from "react-icons/fa";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import studioD from "../assets/studioB-1.webp"; // make sure file exists
import heroBg from "../assets/hero.jpg";
const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 1.2,
      staggerChildren: 0.25
    }
  }
};

const maskItem = {
  hidden: { y: "100%" },
  show: {
    y: "0%",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function Hero() {
  const navigate = useNavigate();

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 🔥 NEW STATE (modal)
  const [openPreview, setOpenPreview] = useState(false);

  const handleMouseMove = (e) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-white overflow-hidden pt-28 pb-24"
    >

      {/* Background */}
      <motion.div
        style={{
          y,
         backgroundImage: `url(${heroBg})`
        }}
        initial={{ scale: 1.15 }}
        animate={{
          scale: 1,
          y: [0, -20, 0]
        }}
        transition={{
          scale: { duration: 10, ease: "easeOut" },
          y: { duration: 10, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute inset-0 bg-cover bg-center"
      />

      {/* Light Sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          x: ["-40%", "40%", "-40%"]
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background:
            "linear-gradient(110deg, transparent 40%, rgba(255,255,255,0.25), transparent 60%)",
          filter: "blur(100px)"
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

      {/* Mouse Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            500px circle at ${mousePos.x}px ${mousePos.y}px,
            rgba(255,220,150,0.25),
            transparent 60%
          )`
        }}
      />

      <Navbar />

      {/* HERO CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center max-w-5xl px-6"
      >

        <div className="overflow-hidden mb-6">
          <motion.p
            variants={maskItem}
            className="text-xs tracking-[6px] text-gray-300"
          >
            A NEW ERA OF SOUND IS BEING BUILT
          </motion.p>
        </div>

        <div className="overflow-hidden">
          <motion.h1
            variants={maskItem}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[90px] font-extrabold tracking-tight leading-[1.05] drop-shadow-[0_5px_20px_rgba(0,0,0,0.8)]"
          >
            THE <br/>
            CHORDIFIERS <br />
            STUDIO
          </motion.h1>
        </div>

        <div className="overflow-hidden mt-6">
          <motion.p
            variants={maskItem}
            className="text-gray-300 max-w-xl mx-auto text-sm md:text-base"
          >
            We are currently under renovations, crafting a next-generation
            creative environment for artists, producers, and visionaries.
          </motion.p>
        </div>

        {/* BUTTONS */}
        <motion.div
          variants={maskItem}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >

          {/* WAITLIST */}
          
           <motion.button
  whileHover={{ scale: 1.08 }}
  whileTap={{ scale: 0.96 }}
  onClick={() => navigate("/#waitlist")}
  className="backdrop-blur-md bg-white/90 text-black px-7 py-3 rounded-full font-semibold shadow-xl hover:bg-yellow-400 transition"
>
  JOIN ARTIST WAITLIST
</motion.button>

          {/*  STUDIO PREVIEW (UPDATED) */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setOpenPreview(true)}
            className="flex items-center gap-2 backdrop-blur-md border border-white/40 px-7 py-3 rounded-full hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition"
          >
            <FaPlay size={12} />
            STUDIO PREVIEW
          </motion.button>

          {/* COURSES */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/institute/courses")}
            className="border border-white/40 backdrop-blur-md px-7 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            EXPLORE COURSES
          </motion.button>

        </motion.div>

      </motion.div>

      {/* 🔥 MODAL (NO UI CHANGE TO PAGE) */}
      <AnimatePresence>
        {openPreview && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            <div className="absolute inset-0" onClick={() => setOpenPreview(false)} />

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-[90%] max-w-4xl h-[500px] overflow-hidden rounded-xl border border-white/10"
            >

              <img
                src={studioD}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
                <div>
                  <h2 className="text-4xl font-['Anton'] text-[#f0e81b] mb-4">
                    STUDIO PREVIEW
                  </h2>

                  <p className="text-white/70">
                    Coming Soon — Experience the next generation studio environment
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpenPreview(false)}
                className="absolute top-4 right-4 text-white text-xl"
              >
                ✕
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}