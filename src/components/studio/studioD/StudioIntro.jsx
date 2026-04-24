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
          Built for Mixing & Mastering. Designed for Perfection.
        </h2>

        {/* HIGHLIGHT */}
        <p className="text-xl md:text-2xl font-semibold mb-10">
          The final stage where your music becomes release-ready.
        </p>

        {/* DESCRIPTION */}
        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Studio D is the final destination in your production journey. 
          Designed for both mixing and mastering, this space is built to refine 
          every element of your track — from balance and depth to loudness and clarity.
        </p>

        <p className="text-white/70 text-lg leading-relaxed mb-6">
          Equipped with advanced monitoring systems and high-end processing tools, 
          the room allows for critical listening and precise decision-making. 
          Every adjustment is made with accuracy, ensuring your music translates 
          seamlessly across all platforms and playback systems.
        </p>

        <p className="text-white/70 text-lg leading-relaxed">
          This is where your music is polished, finalized, and prepared for the world.
        </p>

        {/* FEATURES */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm text-gray-300">

          <div>
            <p className="text-[#f0e81b] mb-2">Advanced Mixing</p>
            <p>Refine balance, depth, and dynamics with precision.</p>
          </div>

          <div>
            <p className="text-[#f0e81b] mb-2">Mastering Suite</p>
            <p>Optimize loudness and clarity for all platforms.</p>
          </div>

          <div>
            <p className="text-[#f0e81b] mb-2">High-End Monitoring</p>
            <p>Accurate listening environment for critical decisions.</p>
          </div>

        </div>

      </div>
    </section>
  );
}