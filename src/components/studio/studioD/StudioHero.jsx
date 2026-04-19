import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useState, useRef } from "react";

import "swiper/css";
import "swiper/css/effect-fade";

import img1 from "../../../assets/studioD-1.webp";
import img2 from "../../../assets/studioD-2.webp";
import img3 from "../../../assets/studioD-3.webp";
import img4 from "../../../assets/studioD-4.webp";
import img5 from "../../../assets/studioD-5.webp";
import img6 from "../../../assets/studioD-6.webp";
import img7 from "../../../assets/studioD-7.webp";
import img8 from "../../../assets/studioD-8.webp";

const slides = [img1, img2, img3, img4, img5, img6, img7, img8];

export default function StudioDHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      {/* SWIPER */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full relative z-0"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen overflow-hidden">

              {/* Image with subtle zoom */}
              <img
                src={img}
                alt={`Studio D ${index}`}
                className="w-full h-full object-cover scale-105 transition-transform duration-[6000ms] ease-out"
              />

              {/* Overlay (lighter for better visibility) */}
              <div className="absolute inset-0 bg-black/25"></div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* OVERLAY CONTENT */}
      <div className="absolute bottom-20 left-6 md:left-16 text-white z-20 pt-24 pointer-events-none">

        {/* BIG TITLE */}
        <h1 className="text-[30px] md:text-[140px] font-['League_Spartan'] tracking-wide leading-none">
          STUDIO D
        </h1>

        

        {/* INDICATORS */}
        <div className="flex gap-3 mt-4 pointer-events-auto">
          {slides.map((_, i) => (
            <button
  key={i}
  onClick={() => swiperRef.current?.slideToLoop(i)}
  className={`h-[3px] transition-all duration-500 ${
    i === activeIndex
      ? "w-14 bg-white"
      : "w-8 bg-white/30 hover:bg-white/60"
  }`}
/>
          ))}
        </div>

      </div>

      {/* PROGRESS ANIMATION STYLE */}
      <style jsx>{`
        .animate-progress {
          width: 100%;
          animation: progressBar 5s linear forwards;
        }

        @keyframes progressBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>

    </section>
  );
}