import studio from "../../assets/studio.jpg";

export default function InstituteStudio() {

  return (
    <section className="bg-[#0f0f0f] text-white py-28">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}

        <img
          src={studio}
          alt="Studio Training"
          className="rounded-lg shadow-xl border border-[#f0e81b]"
        />

        {/* Text */}

        <div>

          <h2 className="text-4xl md:text-5xl font-['League_Spartan'] tracking-widest">
            LEARN INSIDE A REAL
          </h2>

          <h3 className="text-4xl md:text-5xl text-[#f0e81b] font-['Anton'] mt-2">
            RECORDING STUDIO
          </h3>

          <div className="w-20 h-[3px] bg-[#f0e81b] mt-6 mb-8"></div>

          <p className="text-gray-400 font-['Inter'] leading-relaxed mb-8">
            Experience music education inside a real professional recording
            studio environment. Our students learn using industry-standard
            equipment while working on real projects and collaborations.
          </p>

          <button className="border border-[#f0e81b] px-6 py-3 font-['League_Gothic'] tracking-widest hover:bg-[#f0e81b] hover:text-black transition">
            EXPLORE PROGRAMS
          </button>

        </div>

      </div>

    </section>
  );
}