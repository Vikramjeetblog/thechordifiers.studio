import React from "react";

const Waitlist = () => {
  return (
    <section className="bg-black text-white py-28 px-6 relative z-10">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold">
          Get Priority Access
        </h2>

        <p className="text-gray-400 mt-3 text-sm tracking-widest">
          Be among the first to experience The Chordifiers Studio
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">

          {/* FREE WAITLIST */}
          <div className="border border-zinc-800 rounded-xl p-8 text-left">

            <h3 className="text-sm text-white/70 font-semibold tracking-widest">
              JOIN THE WAITLIST (FREE)
            </h3>

            <p className="text-gray-400 text-sm mt-2 mb-6">
              Get notified when studio bookings and courses open.
            </p>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 mb-4 outline-none"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 mb-6 outline-none"
            />

            <button className="w-full border border-white text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
              JOIN FREE WAITLIST
            </button>
          </div>


          {/* FOUNDERS PRIORITY */}
          <div className="border border-[#f0e81b] rounded-xl p-8 bg-[#111] text-left relative">

            {/* Scarcity Badge */}
            <span className="absolute top-4 right-4 text-[10px] bg-[#f0e81b] text-black px-3 py-1 rounded-full font-semibold">
              LIMITED
            </span>

            <h3 className="text-sm text-[#f0e81b] font-semibold tracking-widest">
              FOUNDERS PRIORITY ACCESS
            </h3>

            <p className="text-4xl font-bold mt-2">₹99</p>

            <p className="text-sm text-gray-400 mt-2">
              Upgrade for early privileged access
            </p>

            <ul className="text-gray-400 text-sm mt-6 space-y-3">
              <li>✔ Priority booking before public launch</li>
              <li>✔ 2 complimentary studio / jam sessions</li>
              <li>✔ Founding Artist status</li>
              <li>✔ Early access to studio & courses</li>
            </ul>

            <button className="w-full bg-[#f0e81b] text-black py-3 rounded-lg mt-8 font-semibold hover:scale-105 transition">
              UPGRADE TO PRIORITY — ₹99
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Waitlist;