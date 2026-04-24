export default function StudioCIntro() {
  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-5xl mx-auto">

        {/* LABEL */}
        <p className="text-[#f0e81b] text-xs tracking-[4px] mb-6">
          STUDIO C
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
          Built for Recording & Jam Sessions. Designed for Energy.
        </h2>

        {/* HIGHLIGHT LINE */}
        <p className="text-xl md:text-2xl font-semibold mb-10">
          Built for loud ideas, live sessions, and real performance.
        </p>

        {/* DESCRIPTION */}
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Studio C is designed for artists who create through performance. 
          Whether you're jamming with a full band, rehearsing, or recording 
          high-energy sessions, the space is built to handle movement, volume, 
          and collaboration.
        </p>

        <p className="text-white/70 text-lg leading-relaxed mb-6">
          With a more open layout and flexible setup, Studio C allows artists 
          to perform naturally while still capturing clean, usable recordings. 
          It’s ideal for group sessions, live takes, and content-driven workflows.
        </p>

        <p className="text-white/70 text-lg leading-relaxed">
          This is where performances happen — and music feels alive.
        </p>

        {/* FEATURES */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm text-gray-300">

          <div>
            <p className="text-[#f0e81b] mb-2">Band Jam Sessions</p>
            <p>Spacious setup for full-band rehearsals and live play.</p>
          </div>

          <div>
            <p className="text-[#f0e81b] mb-2">Live Recording</p>
            <p>Capture raw, energetic performances in real time.</p>
          </div>

          <div>
            <p className="text-[#f0e81b] mb-2">Open Performance Space</p>
            <p>Designed for movement, collaboration, and creative flow.</p>
          </div>

        </div>

      </div>
    </section>
  );
}