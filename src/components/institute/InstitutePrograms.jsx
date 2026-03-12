export default function InstitutePrograms() {

  const signaturePrograms = [
    "Artist Mentorship Program",
    "Unbreakable Artist Mindset Program",
    "Music Business Awareness Program (for Parents)"
  ];

  const certificationCourses = [
    "Music Production Certification Course – Basic (Lvl 1)",
    "Music Production Certification Course – Intermediate (Lvl 2)",
    "Music Production Certification Course – Advanced (Lvl 3)",
    "Music Production Certification Course – Professional (Lvl 4)"
  ];

  const diplomaCourses = [
    "Diploma in Music Production",
    "Diploma in Sound Designing",
    "Diploma in Music Production & Music Business (Specialization)",
    "Diploma in Sound Designing & Music Production (Specialization)",
    "Diploma in Sound Designing & Music Production & Music Business (Specialization)"
  ];

  return (

    <section className="py-24 bg-[#111111] text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}

        <h2 className="text-center text-4xl md:text-5xl font-['League_Spartan'] tracking-widest mb-16">
          PROGRAMS
        </h2>

        {/* SIGNATURE PROGRAMS */}

        <div className="mb-20">

          <h3 className="text-3xl text-[#f0e81b] font-['Anton'] mb-4">
            Signature Programs
          </h3>

          <div className="w-20 h-[3px] bg-[#f0e81b] mb-8"></div>

          <ul className="space-y-4 font-['Inter'] text-gray-300">

            {signaturePrograms.map((program, index) => (
              <li key={index} className="border-b border-gray-800 pb-3">
                {program}
              </li>
            ))}

          </ul>

        </div>

        {/* CERTIFICATION COURSES */}

        <div className="mb-20">

          <h3 className="text-3xl text-[#f0e81b] font-['Anton'] mb-4">
            Certification Courses
          </h3>

          <div className="w-20 h-[3px] bg-[#f0e81b] mb-8"></div>

          <ul className="space-y-4 font-['Inter'] text-gray-300">

            {certificationCourses.map((course, index) => (
              <li key={index} className="border-b border-gray-800 pb-3">
                {course}
              </li>
            ))}

          </ul>

        </div>

        {/* DIPLOMA COURSES */}

        <div>

          <h3 className="text-3xl text-[#f0e81b] font-['Anton'] mb-4">
            Professional Diploma Courses
          </h3>

          <div className="w-20 h-[3px] bg-[#f0e81b] mb-8"></div>

          <ul className="space-y-4 font-['Inter'] text-gray-300">

            {diplomaCourses.map((course, index) => (
              <li key={index} className="border-b border-gray-800 pb-3">
                {course}
              </li>
            ))}

          </ul>

        </div>

      </div>

    </section>

  );
}