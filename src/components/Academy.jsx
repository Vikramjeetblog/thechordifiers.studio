import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import academyBg from "../assets/studioD-7.webp";

export default function Academy() {
  const navigate = useNavigate();
  const ref = useRef(null);

  const [isVisible, setIsVisible] = useState(false);

  //  Load image ONLY when section is near viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="academy"
      className="relative text-white py-32 px-6 overflow-hidden"
    >
      {/*  BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        {isVisible && (
          <img
            src={academyBg}
            alt="Academy"
            loading="lazy"        // ✅ lazy load
            decoding="async"     // ✅ faster render
            className="w-full h-full object-cover"
          />
        )}

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      </div>

      {/* glow  */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600/10 blur-[160px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-yellow-400/10 blur-[160px]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* TITLE */}
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
          THE CHORDIFIRES MUSIC INSTITUTE
          <span className="block">( TCMI )</span>
        </h3>

        {/* SUBTITLE */}
        <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-[17px] md:text-[19px] leading-relaxed">
          Stop watching tutorials. Start building a career inside a real studio.
          This is where serious artists turn skill into identity.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <button
            onClick={() => navigate("/institute")}
            className="bg-[#f0e81b] text-black px-8 py-4 text-sm font-semibold tracking-wide rounded-lg hover:scale-105 transition"
          >
            EXPLORE INSTITUTE
          </button>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="border border-zinc-700 rounded-2xl p-8 text-left bg-black/40 backdrop-blur-md hover:border-zinc-500 transition">
            <h3 className="font-semibold text-xl">
              Professional Diploma Courses
            </h3>
            <p className="text-gray-300 mt-4 text-[15px] leading-relaxed">
              A complete 1-year transformation covering music production,
              engineering, and the real business behind the industry.
            </p>
          </div>

          <div className="border border-zinc-700 rounded-2xl p-8 text-left bg-black/40 backdrop-blur-md hover:border-zinc-500 transition">
            <h3 className="font-semibold text-xl">
              Certifications Courses
            </h3>
            <p className="text-gray-300 mt-4 text-[15px] leading-relaxed">
              Intensive 3-month programs focused on Mixing, Mastering,
              Vocals, and specialized creative skills.
            </p>
          </div>
        </div>

        {/* AI BOX */}
        <div className="mt-20 border border-purple-800/40 rounded-2xl p-8 max-w-3xl mx-auto bg-black/50 backdrop-blur-md">
          <p className="text-xs text-gray-400 tracking-[0.2em] mb-6">
            BUILD YOUR ROADMAP WITH AI
          </p>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="What is your music dream? (e.g., Film composer, Producer...)"
              className="flex-1 bg-black border border-zinc-700 rounded-lg px-5 py-4 outline-none text-sm focus:border-[#f0e81b] transition"
            />

            <button className="bg-[#f0e81b] text-black px-6 py-4 rounded-lg text-sm font-semibold hover:scale-105 transition">
              ANALYZE MY FUTURE
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}