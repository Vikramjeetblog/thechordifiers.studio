import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";


import studio1 from "../assets/studioA-7.jpeg";
import studio2 from "../assets/studioA-2.jpeg";
import studio3 from "../assets/studioB-1.webp";
import studio4 from "../assets/studioB-2.webp";
import studio5 from "../assets/studioC-1.webp";
import studio6 from "../assets/studioC-3.webp";
import studio7 from "../assets/studioD-6.webp";
import studio8 from "../assets/studioD-7.webp";

const images = [studio1, studio2, studio3, studio4,studio5,studio6,studio7,studio8];

export default function StudioPreviewModal({ open, onClose }) {
  const [index, setIndex] = useState(0);

  //  Auto change images
  useEffect(() => {
    if (!open) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center"
        >
          {/* BACKDROP */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* MODAL */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
            className="relative w-[95%] md:w-[85%] max-w-6xl h-[70vh] md:h-[80vh] rounded-xl overflow-hidden border border-white/10"
          >
            {/* 🔥 IMAGE STACK (NO FLICKER, NO TRANSPARENCY GAP) */}
            {images.map((img, i) => (
              <motion.img
                key={i}
                src={img}
                animate={{
                  opacity: i === index ? 1 : 0,
                  scale: i === index ? 1 : 1.05,
                }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ))}

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-center px-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-['Anton'] text-[#f0e81b] mb-4">
                  STUDIO PREVIEW
                </h2>

                <p className="text-white/70 text-lg">
                  Experience our real studio environment
                </p>
              </div>
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white text-xl hover:scale-110 transition"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}