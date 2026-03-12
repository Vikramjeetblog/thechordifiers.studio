import React, { useState } from "react";
import poster1 from "../../assets/batiNaHoti.jpg";
import poster2 from "../../assets/citiesOnFires.jpg";

const OurWorkSection = () => {
  const [hoveredVideo1, setHoveredVideo1] = useState(false);
  const [hoveredVideo2, setHoveredVideo2] = useState(false);

  return (
    <section className="py-28 bg-[#111111] text-[#f2f2f2]">

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}

        <div className="text-center mb-20">

          <h2 className="text-4xl md:text-5xl font-['League_Spartan'] tracking-wide">
            OUR <span className="text-[#f0e81b]">WORK</span>
          </h2>

          <div className="w-24 h-[3px] bg-[#f0e81b] mx-auto mt-6"></div>

          <p className="text-[#f2f2f2]/60 mt-6 max-w-xl mx-auto font-['Inter']">
            The creative projects and music productions developed
            at The Chordifiers studio.
          </p>

        </div>


        {/* Row 1 */}

        <div className="grid md:grid-cols-2 gap-14 items-center mb-28 bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg">

          <div
            className="relative h-[260px] md:h-[320px]"
            onMouseEnter={() => setHoveredVideo1(true)}
            onMouseLeave={() => setHoveredVideo1(false)}
          >

            {hoveredVideo1 ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/r2GYhQB23Io?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1"
                title="Beti Na Hoti"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <img
                src={poster1}
                alt="Beti Na Hoti"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

          </div>

          <div className="p-10">

            <h3 className="text-3xl md:text-4xl font-['League_Spartan'] mb-6">
              BETI NA HOTI
            </h3>

            <p className="text-[#f2f2f2]/70 leading-relaxed font-['Inter'] text-lg">
              A quiet storm of pain and resilience, this song echoes India's unspoken stories of violence and injustice.
            </p>

          </div>

        </div>


        {/* Row 2 */}

        <div className="grid md:grid-cols-2 gap-14 items-center bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg">

          <div className="p-10 md:order-1 order-2">

            <h3 className="text-3xl md:text-4xl font-['League_Spartan'] mb-6">
              CITIES ON FIRES
            </h3>

            <p className="text-[#f2f2f2]/70 leading-relaxed font-['Inter'] text-lg">
              War divides what humanity unites—peace is our shared destiny, not destruction.
            </p>

          </div>

          <div
            className="relative h-[260px] md:h-[320px] md:order-2 order-1"
            onMouseEnter={() => setHoveredVideo2(true)}
            onMouseLeave={() => setHoveredVideo2(false)}
          >

            {hoveredVideo2 ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/unuEh1CLgZw?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3&playsinline=1"
                title="Cities on Fires"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            ) : (
              <img
                src={poster2}
                alt="Cities on Fires"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default OurWorkSection;