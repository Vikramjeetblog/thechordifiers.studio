import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import img1 from "../../assets/institute7.png";
import img2 from "../../assets/institute8.jpeg";
import img3 from "../../assets/institute9.png";
import img4 from "../../assets/vision5.jpeg"
import img5 from "../../assets/institute11.jpeg"

import video1 from "../../assets/institute1.mp4";
import video2 from "../../assets/institute2.mp4";
import video3 from "../../assets/institute3.mp4";
import video4 from "../../assets/institute4.mp4";
import video5 from "../../assets/video1.mp4";
import video6 from "../../assets/studiovideo3.mp4";
import video7 from "../../assets/institute11.mp4";

//  GALLERY DATA 
const galleryItems = [
  { type: "image", src: img1 },
  { type: "image", src: img2 },
  { type: "video", src: video1 },
  { type: "image", src: img3 },
  { type: "video", src: video2 },
  { type: "image", src: img4 },
  { type: "video", src: video7 },
  
  { type: "video", src: video3 },
  { type: "image", src: img5 },
  { type: "video", src: video4 },

  
  { type: "video", src: video5 },
  
  { type: "video", src: video6 },
];

const InstituteGallery = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <section className="bg-black text-white py-20 px-6 relative overflow-hidden">
      {/* TOP GRADIENT */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black via-black/80 to-transparent z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADING */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            OUR <span className="text-[#f0e81b]">GALLERY</span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base max-w-xl mx-auto">
            A glimpse into our sessions, spaces, and creative energy.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setActiveItem(item)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`relative group overflow-hidden rounded-xl border border-white/10 cursor-pointer
                ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}
                ${index === 4 ? "md:col-span-2" : ""}
              `}
            >
              {/* IMAGE */}
              {item.type === "image" && (
                <img
                  src={item.src}
                  alt="gallery"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              )}

              {/* VIDEO */}
              {item.type === "video" && (
                <video
                  src={item.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              )}

              {/* PLAY ICON */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-black/60 rounded-full flex items-center justify-center">
                    <FaPlay className="text-white text-sm ml-1" />
                  </div>
                </div>
              )}

              {/* HOVER OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {activeItem && (
        <div className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center px-4">
          <button
            onClick={() => setActiveItem(null)}
            className="absolute top-6 right-6 text-white text-2xl"
          >
            <FiX />
          </button>

          {activeItem.type === "image" ? (
            <img
              src={activeItem.src}
              className="max-h-[90vh] rounded-lg"
              alt="preview"
            />
          ) : (
            <video
              src={activeItem.src}
              controls
              autoPlay
              className="max-h-[90vh] rounded-lg"
            />
          )}
        </div>
      )}
    </section>
  );
};

export default InstituteGallery;