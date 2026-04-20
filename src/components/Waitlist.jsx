import React from 'react'

const Waitlist = () => {
	return (
		<div>
			  <section className="bg-black text-white py-28 px-6 relative z-10">

      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold">
          CLAIM YOUR SPOT
        </h2>

        <p className="text-gray-400 mt-3 text-sm tracking-widest">
          SCARCITY IS REAL. ACCESS IS LIMITED.
        </p>


        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-14">


          {/* Free Waitlist */}
          <div className="border border-zinc-800 rounded-xl p-8">

            <h3 className="text-lg font-semibold mb-2">
              Free Waitlist
            </h3>

            <p className="text-xs text-gray-400 mb-6">
              GENERAL NOTIFICATION ONLY
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

            <button className="w-full border border-zinc-700 py-3 rounded-lg hover:bg-zinc-800 transition">
              JOIN FREE WAITLIST
            </button>

          </div>



          {/* Founders Access */}
          <div className="border border-zinc-800 rounded-xl p-8">

            <h3 className="text-sm text-[#f0e81b] font-semibold tracking-widest">
              FOUNDERS PRIORITY ACCESS
            </h3>

            <p className="text-4xl font-bold mt-2">₹99</p>


            <ul className="text-gray-400 text-sm mt-6 space-y-3">

              <li>✔ Priority booking access (Pre-launch)</li>
              <li>✔ 2 Free Jam/Recording Sessions</li>
              <li>✔ Founding Artist Digital Badge</li>
              <li>✔ Exclusive Studio Walkthrough Invite</li>

            </ul>


            <button className="w-full bg-[#f0e81b] text-black py-3 rounded-lg mt-8 font-semibold hover:scale-105 transition">
              GET FOUNDERS PASS
            </button>

          </div>


        </div>

      </div>

    </section>
		</div>
	)
}

export default Waitlist