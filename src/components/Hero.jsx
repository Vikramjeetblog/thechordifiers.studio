import Navbar from "./Navbar";
import { FaPlay } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

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

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 120]);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
          backgroundImage: "url('/src/assets/hero.jpg')"
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

        {/* Subtitle */}
        <div className="overflow-hidden mb-6">
          <motion.p
            variants={maskItem}
            className="text-xs tracking-[6px] text-gray-300"
          >
            A NEW ERA OF SOUND IS BEING BUILT
          </motion.p>
        </div>

        {/* Title */}
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

        {/* Description */}
        <div className="overflow-hidden mt-6">
          <motion.p
            variants={maskItem}
            className="text-gray-300 max-w-xl mx-auto text-sm md:text-base"
          >
            We are currently under renovations, crafting a next-generation
            creative environment for artists, producers, and visionaries.
          </motion.p>
        </div>

        {/* Buttons */}
        <motion.div
          variants={maskItem}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >

          {/* Button 1 */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="backdrop-blur-md bg-white/90 text-black px-7 py-3 rounded-full font-semibold shadow-xl hover:bg-yellow-400 transition"
          >
            JOIN ARTIST WAITLIST
          </motion.button>

          {/* Button 2 */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 backdrop-blur-md border border-white/40 px-7 py-3 rounded-full hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition"
          >
            <FaPlay size={12} />
            STUDIO PREVIEW
          </motion.button>

          {/* Button 3 */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="border border-white/40 backdrop-blur-md px-7 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            EXPLORE COURSES
          </motion.button>

        </motion.div>

      </motion.div>


      

        
            


    </section>
  );
}