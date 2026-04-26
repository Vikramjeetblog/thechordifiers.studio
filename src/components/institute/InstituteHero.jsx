import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { HashLink } from "react-router-hash-link";
import aboutImg from "../../assets/studioD-7.webp";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import hero1 from "../../assets/institute.webp";
import hero2 from "../../assets/institute2.webp";
import hero3 from "../../assets/institute3.png";

export default function InstituteHero() {
  return (
    <>
    <section className="relative h-screen pt-14">

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="h-full"
      >

        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative h-full flex items-center justify-center text-center">

            <div
              className="absolute inset-0 bg-cover bg-top hero-zoom"
              style={{ backgroundImage: `url(${hero2})` }}
            />

            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 max-w-4xl px-6 hero-text space-y-5">

              <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-['League_Spartan'] text-white tracking-[0.3em]">
                THE
              </h1>

              <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-['League_Spartan'] text-white tracking-wider">
                CHORDIFIERS
              </h2>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-['Anton'] text-[#f0e81b]">
                MUSIC INSTITUTE
              </h3>

              <div className="w-20 h-[3px] bg-[#f0e81b] mx-auto"></div>

              <p className="text-white/80 text-base md:text-lg lg:text-xl tracking-wide">
                "We Build Careers"
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">

                {/*  FIXED */}
                <HashLink
                  smooth
                  to="/institute#courses"
                  className="border border-[#f0e81b] text-[#f0e81b] px-8 py-3 transition duration-300 hover:bg-[#f0e81b] hover:text-black hover:-translate-y-1"
                >
                  Explore Programs
                </HashLink>

                <HashLink
                  smooth
                  to="/book-a-call"
                  className="border border-white text-white px-8 py-3 transition duration-300 hover:bg-white hover:text-black hover:-translate-y-1"
                >
                  Apply Now
                </HashLink>

              </div>

            </div>
          </div>
        </SwiperSlide>


        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative h-full flex items-center justify-center text-center">

            <div
              className="absolute inset-0 bg-cover bg-top hero-zoom"
              style={{ backgroundImage: `url(${hero3})` }}
            />

            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 max-w-4xl px-6 hero-text space-y-6">

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-['League_Spartan'] text-white leading-tight">
                BUILD YOUR CAREER
              </h1>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-['Anton'] text-[#f0e81b]">
                IN MUSIC PRODUCTION
              </h2>

              <div className="w-20 h-[3px] bg-[#f0e81b] mx-auto"></div>

              <p className="text-white/80 max-w-lg mx-auto text-base md:text-lg">
                Hands-on training, real studio workflow and industry-ready skills.
              </p>

              {/* ✅ FIXED */}
              <HashLink
                smooth
                to="/institute#courses"
                className="border border-white text-white px-8 py-3 transition duration-300 hover:bg-white hover:text-black hover:-translate-y-1"
              >
                View Programs
              </HashLink>

            </div>
          </div>
        </SwiperSlide>


        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative h-full flex items-center justify-center text-center">

            <div
              className="absolute inset-0 bg-cover bg-top hero-zoom"
              style={{ backgroundImage: `url(${hero1})` }}
            />

            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 max-w-4xl px-6 hero-text space-y-6">

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-['League_Spartan'] text-white tracking-wider">
                APPLICATIONS OPEN FOR
              </h1>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-['Anton'] text-[#f0e81b]">
                2026 INTAKE
              </h2>

              <div className="w-20 h-[3px] bg-[#f0e81b] mx-auto"></div>

              <p className="text-white/80 max-w-lg mx-auto text-base md:text-lg">
                Start your journey in professional music production.
              </p>

              <HashLink
                smooth
                to="/book-a-call"
                className="border border-[#f0e81b] text-[#f0e81b] px-8 py-3 transition duration-300 hover:bg-[#f0e81b] hover:text-black hover:-translate-y-1"
              >
                Apply Now
              </HashLink>

            </div>
          </div>
        </SwiperSlide>

      </Swiper>

    </section>
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
</>
  );
}