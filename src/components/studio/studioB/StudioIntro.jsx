export default function StudioBIntro() {
  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-5xl mx-auto">

        {/* LABEL */}
        <p className="text-[#f0e81b] text-xs tracking-[4px] mb-6">
          STUDIO B
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
          Built for Recording & Jam Sessions. Designed for Flow.
        </h2>

        {/* HIGHLIGHT LINE */}
        <p className="text-xl md:text-2xl font-semibold mb-10">
          Create, collaborate, and capture ideas in one space.
        </p>

        {/* DESCRIPTION */}
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Studio B is designed for artists who want both creative freedom and 
          recording capability. Whether you're jamming with your band, rehearsing, 
          or capturing live ideas, the space adapts to your workflow.
        </p>

        <p className="text-white/70 text-lg leading-relaxed mb-6">
          The environment supports both spontaneous sessions and structured 
          recordings, making it ideal for collaborations, practice sessions, 
          and content creation. It’s a space where ideas evolve naturally.
        </p>

        <p className="text-white/70 text-lg leading-relaxed">
          This is where creativity flows — and moments turn into music.
        </p>

        {/* FEATURES */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm text-gray-300">

          <div>
            <p className="text-[#f0e81b] mb-2">Jam Sessions</p>
            <p>Perfect space for bands and artists to rehearse and collaborate.</p>
          </div>

          <div>
            <p className="text-[#f0e81b] mb-2">Live Recording</p>
            <p>Capture raw ideas and performances in real time.</p>
          </div>

          <div>
            <p className="text-[#f0e81b] mb-2">Flexible Setup</p>
            <p>Adaptable layout for both practice and recording sessions.</p>
          </div>

        </div>

      </div>
    </section>
  );
}