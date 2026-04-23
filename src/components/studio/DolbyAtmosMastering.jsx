
import React from "react";
import studioD from "../../assets/studioD-3.webp";

const DolbyAtmosMastering = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center">

      <div className="relative w-[90%] max-w-4xl h-[500px] rounded-xl overflow-hidden">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white text-3xl"
        >
          ×
        </button>

        <img
          src={studioD}
          alt="Studio D"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold uppercase tracking-widest">
            Coming Soon
          </h1>
        </div>

      </div>
    </div>
  );
};

export default DolbyAtmosMastering;