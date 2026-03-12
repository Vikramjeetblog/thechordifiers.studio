import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import visionImg from "../assets/studio.webp";

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

  /* PARALLAX IMAGE */
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section
      ref={ref}
      id="vision"
      className="bg-black text-white py-32 px-6 relative overflow-hidden"
    >

      {/* ambient glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-yellow-400/10 blur-[200px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-500/10 blur-[200px]" />

      {/* floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-[3px] h-[3px] bg-white rounded-full opacity-40"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight
            }}
            animate={{
              y: ["0%", "-120%"],
              opacity: [0.3, 1, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* animated soundwave bars */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center gap-[4px] opacity-20 pointer-events-none">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="w-[3px] bg-yellow-400"
            animate={{
              height: [10, 40 + Math.random() * 80, 10]
            }}
            transition={{
              duration: 1 + Math.random(),
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* film grain */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')"
        }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">

        {/* PARALLAX IMAGE */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, scale: 1.15 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-zinc-800 h-[360px] md:h-[460px]"
        >

          <motion.img
            src={visionImg}
            alt="Studio Vision"
            className="w-full h-full object-cover"
            animate={{
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="absolute inset-0 bg-black/40" />

          {/* light sweep */}
          <motion.div
            animate={{ x: ["-200%", "200%"] }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />

          {/* glow */}
          <motion.div
            animate={{
              opacity: [0.2, 0.35, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,210,120,0.25),transparent_70%)]"
          />

        </motion.div>


        {/* TEXT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

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

          {/* stats */}
          <motion.div
            variants={item}
            className="flex gap-14 mt-12"
          >

            <motion.div>
              <h3 className="text-3xl font-black bg-gradient-to-r from-[#FFD700] via-[#FFC300] to-[#FFB000] bg-clip-text text-transparent">
                100%
              </h3>
              <p className="text-xs text-gray-500 tracking-widest mt-1">
                ACOUSTICALLY PERFECT
              </p>
            </motion.div>

            <motion.div>
              <h3 className="text-4xl font-bold text-yellow-400">
                24/7
              </h3>
              <p className="text-xs text-gray-500 tracking-widest mt-1">
                CREATIVE ACCESS
              </p>
            </motion.div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}