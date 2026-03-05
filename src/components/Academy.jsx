export default function Academy() {
  return (
    <section className="bg-black text-white py-28 px-6 relative z-10"id="academy">

      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold">
          THE TCMI ACADEMY
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Stop watching tutorials. Start building a career in a live studio
          environment. Limited to 30 serious candidates.
        </p>


        {/* Course Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">

          {/* Card 1 */}
          <div className="border border-zinc-800 rounded-xl p-6 text-left hover:border-zinc-600 transition">

            <h3 className="font-semibold text-lg">
              🎓 Professional Diploma
            </h3>

            <p className="text-gray-400 mt-3 text-sm">
              A comprehensive 1-year journey covering production,
              engineering, and the business of music.
            </p>

          </div>


          {/* Card 2 */}
          <div className="border border-zinc-800 rounded-xl p-6 text-left hover:border-zinc-600 transition">

            <h3 className="font-semibold text-lg">
              ⚡ Short-Term Certs
            </h3>

            <p className="text-gray-400 mt-3 text-sm">
              Focused 3-month intensives for specialized skills like
              Mixing, Mastering, or Vocals.
            </p>

          </div>

        </div>


        {/* AI Career Builder */}
        <div className="mt-12 border border-purple-900 rounded-xl p-6 max-w-3xl mx-auto">

          <p className="text-xs text-gray-400 tracking-widest mb-4">
            BUILD YOUR ROADMAP WITH AI
          </p>

          <div className="flex flex-col md:flex-row gap-4">

            <input
              type="text"
              placeholder="What is your music dream? (e.g., Become a film composer)"
              className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 outline-none"
            />

            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              ANALYZE MY FUTURE
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}