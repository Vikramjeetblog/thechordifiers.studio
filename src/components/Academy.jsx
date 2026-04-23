import { useNavigate } from "react-router-dom";

export default function Academy() {

  const navigate = useNavigate();

  return (
    <section
      id="academy"
      className="bg-black text-white py-32 px-6 relative overflow-hidden"
    >
      {/* subtle glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-600/10 blur-[160px]" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-yellow-400/10 blur-[160px]" />

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* TITLE */}
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
        THE CHORDIFIRES MUSIC INSTITUTE
        <span className="block">
            ( TCMI )
         </span>
        </h3>

        {/* SUBTITLE */}
        <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-[17px] md:text-[19px] leading-relaxed">
          Stop watching tutorials. Start building a career inside a real studio.
          This is where serious artists turn skill into identity.
        </p>

        {/* 🔥 MAIN CTA (NEW - VERY IMPORTANT) */}
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

          {/* CARD 1 */}
          <div className="border border-zinc-800 rounded-2xl p-8 text-left hover:border-zinc-600 transition bg-zinc-900/30 backdrop-blur-sm">
            <h3 className="font-semibold text-xl">
               Professional Diploma Courses
            </h3>

            <p className="text-gray-400 mt-4 text-[15px] leading-relaxed">
              A complete 1-year transformation covering music production,
              engineering, and the real business behind the industry.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="border border-zinc-800 rounded-2xl p-8 text-left hover:border-zinc-600 transition bg-zinc-900/30 backdrop-blur-sm">
            <h3 className="font-semibold text-xl">
            Certifications Courses
            </h3>

            <p className="text-gray-400 mt-4 text-[15px] leading-relaxed">
              Intensive 3-month programs focused on Mixing, Mastering,
              Vocals, and specialized creative skills.
            </p>
          </div>

        </div>

        {/* AI BOX (UPGRADED) */}
        <div className="mt-20 border border-purple-800/40 rounded-2xl p-8 max-w-3xl mx-auto bg-zinc-900/40 backdrop-blur-md">

          <p className="text-xs text-gray-500 tracking-[0.2em] mb-6">
            BUILD YOUR ROADMAP WITH AI
          </p>

          <div className="flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="What is your music dream? (e.g., Film composer, Producer...)"
              className="flex-1 bg-black border border-zinc-700 rounded-lg px-5 py-4 outline-none text-sm focus:border-purple-500 transition"
            />

            <button className="bg-white text-black px-6 py-4 rounded-lg text-sm font-semibold hover:scale-105 transition">
              ANALYZE MY FUTURE
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}