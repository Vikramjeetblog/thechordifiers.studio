import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import slide1 from "../../assets/tcmi1.jpg";
import slide2 from "../../assets/tcmi1.jpg";

const TcmiUpdates = () => {
  return (
    <section className="py-28 bg-[#111111] text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}

        <h2 className="text-4xl md:text-5xl font-['League_Spartan'] mb-16">
          RIGHT NOW AT <span className="text-[#f0e81b]">TCMI</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT — IMAGE SLIDER */}

          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{ delay: 4000 }}
            loop
            className="rounded-lg overflow-hidden"
          >

            <SwiperSlide>
              <img
                src={slide1}
                alt="TCMI Event"
                className="w-full h-[420px] object-cover"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src={slide2}
                alt="TCMI Workshop"
                className="w-full h-[420px] object-cover"
              />
            </SwiperSlide>

          </Swiper>


          {/* RIGHT — UPDATES */}

          <div className="bg-[#1a1a1a] p-10 rounded-lg shadow-lg">

            <div className="space-y-8">

              <div>

                <p className="text-sm text-[#f0e81b]">
                  2 July 2025
                </p>

                <p className="text-lg mt-2">
                  Music production workshop open at TCMI.
                </p>

              </div>

              <div>

                <p className="text-sm text-[#f0e81b]">
                  1 June 2025
                </p>

                <p className="text-lg mt-2">
                  Admissions for new Music Production 2025 batch open.
                </p>

              </div>

            </div>

            {/* Button */}

            <button className="mt-10 border border-[#f0e81b] px-6 py-2 text-[#f0e81b] hover:bg-[#f0e81b] hover:text-black transition">
              More
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TcmiUpdates;