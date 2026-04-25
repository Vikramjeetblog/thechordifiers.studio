import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { useState, useRef } from "react";

import "swiper/css";
import "swiper/css/effect-fade";

import img1 from "../../../assets/studioA-7.jpeg";
import img2 from "../../../assets/studioB-1.webp";
import img3 from "../../../assets/studioC-1.webp";
import img4 from "../../../assets/studioD-7.webp";

const slides = [
  { img: img1, title: "STUDIO A" },
  { img: img2, title: "STUDIO B" },
  { img: img3, title: "STUDIO C" },
  { img: img4, title: "STUDIO D" },
];

export default function StudioBHero() {
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
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen overflow-hidden">

              {/* IMAGE */}
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover scale-105 transition-transform duration-[6000ms] ease-out"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/25" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* TEXT CONTENT */}
      <div className="absolute bottom-20 left-6 md:left-16 text-white z-20 pt-24 pointer-events-none">

        {/* TITLE */}
        <h1 className="text-[30px] md:text-[140px] font-['League_Spartan'] tracking-wide leading-none">
          {slides[activeIndex].title}
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

    </section>
  );
}