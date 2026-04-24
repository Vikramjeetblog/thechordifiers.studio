import { motion, AnimatePresence } from "framer-motion";
import studioD from "../assets/studioB-1.webp"; // use your actual file name

export default function StudioPreviewModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center"
        >
          {/* BACKDROP CLICK */}
          <div
            className="absolute inset-0"
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-[95%] md:w-[85%] max-w-6xl h-[70vh] md:h-[80vh] rounded-xl overflow-hidden border border-white/10"
          >
            {/* IMAGE */}
            <img
              src={studioD}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* OVERLAY */}
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

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white text-xl"
            >
              ✕
            </button>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}