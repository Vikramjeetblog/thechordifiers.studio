export default function StudioCIntro() {
  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-5xl mx-auto">

        {/* LABEL */}
        <p className="text-[#f0e81b] text-xs tracking-[4px] mb-6">
          STUDIO A
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
          Built for Recording & Mixing. Designed for Control.
        </h2>

        {/* HIGHLIGHT LINE */}
        <p className="text-xl md:text-2xl font-semibold mb-10">
          From first take to final sound — all in one space.
        </p>

        {/* DESCRIPTION */}
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Studio A is a hybrid space built for both recording and mixing. 
          Whether you're capturing vocals, instruments, or shaping your track 
          in post-production, the environment is designed to support the entire 
          creative process.
        </p>

        <p className="text-white/70 text-lg leading-relaxed mb-6">
          The room delivers clean recording conditions alongside accurate 
          monitoring, allowing you to move seamlessly from tracking to mixing 
          without losing momentum. Every detail — from performance to balance — 
          is handled in one focused workflow.
        </p>

        <p className="text-white/70 text-lg leading-relaxed">
          This is where ideas are recorded, refined, and turned into finished tracks.
        </p>

        {/* FEATURES */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm text-gray-300">

          <div>
            <p className="text-[#f0e81b] mb-2">Vocal & Instrument Recording</p>
            <p>Capture performances in a clean, controlled environment.</p>
          </div>

          <div>
            <p className="text-[#f0e81b] mb-2">Mixing & Balance</p>
            <p>Shape your sound with clarity across all elements.</p>
          </div>

          <div>
            <p className="text-[#f0e81b] mb-2">Seamless Workflow</p>
            <p>Record, edit, and mix without switching spaces.</p>
          </div>

        </div>

      </div>
    </section>
  );
}