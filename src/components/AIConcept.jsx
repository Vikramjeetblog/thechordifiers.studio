export default function AISection() {
  return (
    <section className="bg-black text-white py-28 px-6 relative z-10">

      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <span className="text-xs tracking-widest bg-blue-500/10 text-blue-400 px-4 py-1 rounded-full">
          AI POWERED SESSION ARCHITECT
        </span>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mt-6">
          Draft Your Next Masterpiece
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 mt-4">
          Describe your vibe. Our AI producer (Gemini) will craft a unique
          session blueprint for your time at The Chordifiers.
        </p>

        {/* Card */}
        <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-left">

          {/* Textarea */}
          <textarea
            placeholder="Describe your mood (e.g., Late night jazz with a modern synth twist, themes of urban loneliness)..."
            className="w-full bg-transparent outline-none text-gray-300 resize-none h-28"
          />

          {/* Footer */}
          <div className="flex items-center justify-between mt-6">

            <span className="text-xs text-gray-500">
              POWERED BY GEMINI 1.5 FLASH
            </span>

            <button className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:scale-105 transition">
              GENERATE BLUEPRINT
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}