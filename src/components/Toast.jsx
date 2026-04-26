import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle, FiXCircle, FiX } from "react-icons/fi";

export default function Toast({ message, type, onClose }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          className="fixed top-6 right-6 z-[9999]"
        >
          <div
            className={`flex items-center gap-3 px-5 py-3 rounded-lg shadow-lg backdrop-blur-md border ${
              type === "success"
                ? "bg-green-500/10 border-green-500/30 text-green-400"
                : "bg-red-500/10 border-red-500/30 text-red-400"
            }`}
          >
            {/* ICON */}
            {type === "success" ? (
              <FiCheckCircle size={20} />
            ) : (
              <FiXCircle size={20} />
            )}

            {/* MESSAGE */}
            <span className="text-sm">{message}</span>

            {/* CLOSE */}
            <button onClick={onClose}>
              <FiX size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}