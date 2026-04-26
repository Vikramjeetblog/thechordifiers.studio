import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useState } from "react";

import studioVideo from "../assets/Studio-Preview.mp4";
import studioFallback from "../assets/studioC-1.webp";
export default function StudioPreviewModal({ open, onClose }) {
  const [loaded, setLoaded] = useState(false);

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
            {/* 🔥 FALLBACK IMAGE */}
            <img
              src={studioFallback}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                loaded ? "opacity-0" : "opacity-100"
              }`}
            />

            {/* 🔥 VIDEO */}
            <video
              src={studioVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onCanPlay={() => setLoaded(true)} // ✅ fade video in
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center px-6">
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
              className="absolute top-4 right-4 bg-black/70 p-3 rounded-full text-white hover:scale-110 transition"
            >
              <FiX size={22} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
