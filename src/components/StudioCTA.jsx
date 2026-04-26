import { useNavigate } from "react-router-dom";

export default function StudioCTA() {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white py-28 px-6 relative overflow-hidden">

      {/*  AMBIENT GLOW */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-[#f0e81b]/10 blur-[150px]" />
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-500/10 blur-[150px]" />

      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* HEADING */}
        <h2 className="text-3xl md:text-6xl font-extrabold leading-tight">
          Ready to Take Your Sound Seriously?
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-400 mt-6 text-base md:text-lg max-w-2xl mx-auto">
          Whether you're recording your first track or finalizing your next release,
          step into a space built for real music creation.
        </p>

        {/* BUTTONS */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

          {/* PRIMARY CTA */}
          <button
            onClick={() => navigate("/book")}
            className="bg-[#f0e81b] text-black px-8 py-4 font-semibold tracking-wide rounded-lg hover:scale-105 transition"
          >
            BOOK A SESSION
          </button>

          {/* SECONDARY CTA */}
          <button
            onClick={() => navigate("/institute/contact")}
            className="border border-white/20 px-8 py-4 rounded-lg hover:bg-white hover:text-black transition"
          >
            VISIT THE STUDIO
          </button>

        </div>

      </div>
    </section>
  );
}
