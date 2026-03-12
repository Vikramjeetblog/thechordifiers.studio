import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import hero1 from "../../assets/institute.webp";
import hero2 from "../../assets/institute2.webp";
import hero3 from "../../assets/institute3.png";

export default function InstituteHero() {

  return (

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

                <button className="border border-[#f0e81b] text-[#f0e81b] px-8 py-3 transition duration-300 hover:bg-[#f0e81b] hover:text-black hover:-translate-y-1">
                  Explore Programs
                </button>

                <button className="border border-white text-white px-8 py-3 transition duration-300 hover:bg-white hover:text-black hover:-translate-y-1">
                  Apply Now
                </button>

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
                Hands-on training, real studio workflow and industry-ready
                skills for modern producers.
              </p>

              <button className="border border-white text-white px-8 py-3 transition duration-300 hover:bg-white hover:text-black hover:-translate-y-1">
                View Programs
              </button>

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
                Start your journey in professional music production
                inside a real working recording studio.
              </p>

              <button className="border border-[#f0e81b] text-[#f0e81b] px-8 py-3 transition duration-300 hover:bg-[#f0e81b] hover:text-black hover:-translate-y-1">
                Apply Now
              </button>

            </div>

          </div>

        </SwiperSlide>

      </Swiper>

    </section>

  );

}