import React from "react";
import video1 from "../../../assets/studiovideo1.mp4";
import video2 from "../../../assets/studiovideo2.mp4";

import img1 from "../../../assets/studiogallery1.jpg";
import img2 from "../../../assets/studiogallery5.jpeg";
import img3 from "../../../assets/studiogallery3.jpeg";
import img4 from "../../../assets/studiogallery4.jpeg";
const media = [
   { type: "video", src: video1 },
  { type: "image", src: img1 },
  { type: "image", src: img2 },
  { type: "video", src: video2 },
  { type: "image", src: img3 },
  { type: "image", src: img4 },
];

const StudioMoments = () => {
  return (
    <section className="bg-black text-white py-24 px-6">

      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-14 text-center">
        <h2 className="text-4xl md:text-5xl font-bold">
          Studio Moments
        </h2>
        <p className="text-gray-400 mt-3 text-sm tracking-widest">
          REAL SESSIONS. REAL ENERGY.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">

        {media.map((item, i) => (
          <div
            key={i}
            className="break-inside-avoid rounded-xl overflow-hidden group relative"
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt=""
                className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover group-hover:scale-105 transition duration-500"
              />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}

      </div>
    </section>
  );
};

export default StudioMoments;