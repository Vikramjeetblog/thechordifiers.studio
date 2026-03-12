export default function InstituteCTA() {

  return (

    <section className="py-28 bg-[#111111] text-white">

      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* Title */}

        <h2 className="text-4xl md:text-5xl font-['League_Spartan'] tracking-widest">
          START YOUR MUSIC JOURNEY
        </h2>

        <div className="w-24 h-[2px] bg-[#f0e81b] mx-auto mt-6 mb-8"></div>

        {/* Description */}

        <p className="text-gray-400 font-['Inter'] leading-relaxed mb-10">
          Learn music production inside a real working recording studio and
          build professional skills with hands-on training and industry mentorship.
          Admissions opening soon for our diploma and certification programs.
        </p>

        {/* Button */}

        <button className="bg-[#f0e81b] text-black px-8 py-3 font-semibold font-['League_Gothic'] tracking-wider hover:scale-105 transition">
          JOIN STUDENT PRIORITY LIST
        </button>

        {/* Small Note */}

        <p className="text-gray-500 text-sm mt-6 font-['Inter']">
          Limited seats available. Early applicants will receive priority access.
        </p>

      </div>

    </section>

  );
}