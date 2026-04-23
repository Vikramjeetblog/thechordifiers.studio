export default function StudioDIntro() {
  return (
    <section className="bg-black text-white py-24 px-6">

      <div className="max-w-5xl mx-auto">

        {/* LABEL */}
        <p className="text-[#f0e81b] text-xs tracking-[4px] mb-6">
          STUDIO D
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
          Built for Mixing. Designed for Precision.
        </h2>

        {/* HIGHLIGHT */}
        <p className="text-xl md:text-2xl font-semibold mb-10">
          This is where your sound becomes final.
        </p>

        {/* DESCRIPTION */}
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Studio D is dedicated to mixing and mastering — the stage where your
          music transforms from a project into a professional release. Every
          detail, balance, and frequency is refined to achieve clarity,
          depth, and impact.
        </p>

        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Designed for accurate monitoring and critical listening, this space
          allows engineers and artists to make confident decisions that
          translate across all platforms — from headphones to large systems.
        </p>

        <p className="text-white/70 text-lg leading-relaxed">
          This is where your music is finalized for the world.
        </p>

        {/* FEATURES */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm text-gray-300">

          <div>
            <p className="text-[#f0e81b] mb-2">Precision Monitoring</p>
            <p>Hear every detail with accurate frequency response.</p>
          </div>

          <div>
            <p className="text-[#f0e81b] mb-2">Mix & Balance</p>
            <p>Perfect levels, clarity, and stereo imaging.</p>
          </div>

          <div>
            <p className="text-[#f0e81b] mb-2">Master Ready</p>
            <p>Final output optimized for all streaming platforms.</p>
          </div>

        </div>

      </div>
    </section>
  );
}