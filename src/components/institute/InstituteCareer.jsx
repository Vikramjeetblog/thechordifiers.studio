export default function InstituteCareer() {

  const careers = [
    "Music Producer",
    "Sound Engineer",
    "Mixing & Mastering Engineer",
    "Music Business Manager",
    "Artist Development Specialist"
  ];

  return (
    <section className="bg-[#111111] text-white py-28">

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}

        <h2 className="text-center text-4xl md:text-5xl font-['League_Spartan'] tracking-widest">
          CAREER PATH
        </h2>

        <div className="w-24 h-[2px] bg-[#f0e81b] mx-auto mt-6 mb-16"></div>

        {/* Grid */}

        <div className="grid md:grid-cols-3 gap-8">

          {careers.map((career, index) => (

            <div
              key={index}
              className="border border-gray-800 p-8 text-center hover:border-[#f0e81b] transition"
            >

              <h3 className="text-xl font-['Anton'] text-[#f0e81b]">
                {career}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}