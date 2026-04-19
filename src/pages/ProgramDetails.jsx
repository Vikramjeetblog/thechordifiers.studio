import { useParams, useNavigate } from "react-router-dom";
import { programs } from "../data/programs";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProgramDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const program = programs.find((p) => p.slug === slug);
  const [tab, setTab] = useState("overview");

  if (!program) return <div className="p-6 sm:p-10">Program Not Found</div>;

  const currentHero = program.hero?.[tab] || program.hero?.overview;

  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section className="bg-[#111111] text-white min-h-screen overflow-x-hidden">

      {/* ================= HERO ================= */}
      <div
        ref={heroRef}
        className="h-[28vh] sm:h-[35vh] md:h-[45vh] lg:h-[60vh] relative overflow-hidden"
      >
        <motion.img
          key={currentHero?.image}
          src={currentHero?.image}
          style={{ scale }}
          className="w-full h-full object-cover"
          alt={currentHero?.title || program.title}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90" />

        <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4 sm:px-6">
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light leading-tight max-w-4xl">
            {currentHero?.title}
          </h1>
        </div>
      </div>

      {/* ================= BREADCRUMB ================= */}
      <div className="bg-[#0d0d0d] border-b border-white/10 py-2 sm:py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-[11px] sm:text-xs md:text-sm text-gray-400 overflow-x-auto whitespace-nowrap">
          Home <span className="mx-2">›</span>
          Courses <span className="mx-2">›</span>
          <span className="text-white">{program.title}</span>
          <span className="mx-2">›</span>
          <span className="text-[#f0e81b] capitalize">
            {tab === "about" ? "About" : tab}
          </span>
        </div>
      </div>

      {/* ================= TABS ================= */}
      <div className="bg-[#111111] border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 w-full">
            {["overview", "about", "careers"].map((t, i) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`
                  py-3 md:py-3.5
                  text-[11px] md:text-xs
                  uppercase tracking-[0.12em]
                  transition-all duration-300
                  text-center
                  border-b-2
                  ${i !== 2 ? "border-r border-white/10" : ""}
                  ${
                    tab === t
                      ? "text-[#f0e81b] border-b-[#f0e81b] bg-[#1a1a1a]"
                      : "text-gray-400 border-b-transparent hover:text-white"
                  }
                `}
              >
                {t === "about"
                  ? `ABOUT THE ${program.type?.toUpperCase() || "COURSE"}`
                  : t.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="bg-[#0d0d0d] py-6 sm:py-8 md:py-10 pb-10 sm:pb-14 md:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-[#f5f5f5] text-black p-5 sm:p-6 md:p-10 rounded-sm shadow-lg">

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6">
              FAST-TRACK YOUR CAREER IN MUSIC PRODUCTION AND SOUND ENGINEERING
            </h2>

            {tab === "overview" && (
              <p className="text-sm sm:text-base text-gray-700 mb-6">
                {program.overview}
              </p>
            )}

            {tab === "about" && (
              <p className="text-sm sm:text-base text-gray-700 mb-6">
                {program.about}
              </p>
            )}

            {tab === "careers" && (
              <ul className="space-y-3 text-sm sm:text-base text-gray-700">
                {program.careers.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-yellow-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}

          </div>
        </div>
      </div>

      {/* ================= CTA BAR ================= */}
      <div className="bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#111111] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <h3 className="text-sm sm:text-base md:text-lg text-[#f2f2f2]">
            SPEAK WITH OUR TEAM
          </h3>

          <div className="flex gap-3 sm:gap-4 w-full sm:w-auto">

            {/* REGISTER */}
           <button
  onClick={() => {
    if (program.type === "Course") {
      navigate("/register/certification");
    } else if (program.type === "Diploma") {
      navigate("/register/diploma");
    } else if (program.type === "Program") {
      navigate("/register/mentorship");
    } else {
      navigate("/register/mentorship"); // fallback
    }
  }}
>
  Register
</button>

            {/* BOOK CALL */}
            <button
              onClick={() =>
                navigate(`/book-a-call?type=${program.type}&name=${program.slug}`)
              }
              className="px-5 py-3 bg-[#f0e81b] text-black hover:brightness-90 transition text-sm uppercase flex items-center gap-2"
            >
              Book a Call →
            </button>

          </div>
        </div>
      </div>

    </section>
  );
}