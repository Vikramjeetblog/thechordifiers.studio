import React from "react";
import aboutImg from "../../assets/institute.webp";

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
            We believe learning music should be an exciting experience.
            That's why we offer thoughtfully designed courses in a creative
            and inspiring environment.
          </p>

          <p className="text-[#f2f2f2]/80 text-lg leading-relaxed mt-6 font-['Inter']">
            With access to modern facilities, up-to-date equipment,
            and experienced mentors, our students learn in a setting
            that mirrors the real music industry.
          </p>

          <p className="text-[#f2f2f2]/80 text-lg leading-relaxed mt-6 font-['Inter']">
            Whether you're just starting out or looking to level up
            your skills, we offer a wide range of diploma and certification
            programs.
          </p>

          <p className="text-[#f2f2f2]/80 text-lg leading-relaxed mt-6 font-['Inter']">
            From live classes to flexible online options, our courses are
            designed to fit your goals, your schedule, and your unique
            learning style.
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