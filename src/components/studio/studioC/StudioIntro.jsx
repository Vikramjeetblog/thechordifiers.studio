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
          Built for Recording. Designed for Clarity.
        </h2>

        {/* HIGHLIGHT LINE */}
        <p className="text-xl md:text-2xl font-semibold mb-10">
          Not a practice room. A recording environment.
        </p>

        {/* DESCRIPTION */}
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Studio C is purpose-built for recording artists who want clean, 
          professional sound from the source. Whether you're tracking vocals, 
          instruments, or laying down ideas, the space is designed to capture 
          every detail with precision.
        </p>

        <p className="text-white/70 text-lg leading-relaxed mb-6">
          The room is tuned for clarity and consistency, allowing artists to 
          perform naturally while maintaining studio-grade recording quality. 
          From first take to final output, every session is focused, efficient, 
          and distraction-free.
        </p>

        <p className="text-white/70 text-lg leading-relaxed">
          This is where recordings start sounding like finished records.
        </p>

        {/* FEATURES */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm text-gray-300">

          <div>
            <p className="text-[#f0e81b] mb-2">Vocal Recording</p>
            <p>Clean, controlled environment for studio-quality vocals.</p>
          </div>

          <div>
            <p className="text-[#f0e81b] mb-2">Instrument Tracking</p>
            <p>Capture live instruments with clarity and balance.</p>
          </div>

          <div>
            <p className="text-[#f0e81b] mb-2">Session Workflow</p>
            <p>Optimized setup for smooth and efficient recording sessions.</p>
          </div>

        </div>

      </div>
    </section>
  );
}