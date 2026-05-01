import React from "react";
import aboutImg from "../../assets/studioD-7.webp";

const InstituteAbout = () => {
  return (
    <section className="py-28 bg-[#111111] text-[#f2f2f2]">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Text Content */}

        <div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-['League_Spartan'] tracking-wide">
            ABOUT THE <span className="text-[#f0e81b]">INSTITUTE</span>
          </h2>

          {/* Accent Line */}

          <div className="w-24 h-[3px] bg-[#f0e81b] mt-6 mb-10"></div>

          <p className="text-[#f2f2f2]/80 text-lg leading-relaxed font-['Inter']">
            "TCMI – The Chordifiers Music Institute (Est. 2021) is Siliguri’s First Professional Institute for Music Production, Sound Design & Artist Development.
            We help artists build careers with expert mentorship, practical industry training, and performance-based learning. Offline + Online Courses Available. Courses include: Music Production, Sound Design, Music Business, 
            FL Studio, Ableton Live, Logic Pro, Mixing & Mastering, DJing, and Artist Career Development. Offline + Online Learning | Career-Focused Training | Portfolio + Placement Support Part of Creatous Collective Group | Powered by IADA – 
            International Artist Development 
            Academy (Globally Launching Soon)"
          </p>
        </div>


        {/* Image */}

        <div className="relative">

          <img
            src={aboutImg}
            alt="Music Studio"
            className="rounded-lg"
          />

          {/* Accent Border */}

          <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#f0e81b] rounded-lg"></div>

        </div>

      </div>

    </section>
  );
};

export default InstituteAbout;
