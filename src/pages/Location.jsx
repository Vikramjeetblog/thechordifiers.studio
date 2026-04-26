export default function Location() {
  return (
    <div className="bg-[#111111] text-white">

      {/* CONTACT / LOCATION SECTION */}
      <section className="pt-12 pb-32">

        <div className=" w-full h-full flex items-center justify-center ">
<h1 className="text-4xl md:text-6xl font-['Anton'] mb-4 tracking-wide">
  <span className="text-white">OUR</span>{" "}
  <span className="text-[#f0e81b]">LOCATION</span>
</h1>
</div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 overflow-hidden rounded-lg shadow-xl  pt-24">

          {/* LEFT INFO */}
          <div className="bg-[#f0e81b] text-black p-16">

            <h3 className="text-4xl font-['League_Spartan'] mb-8">
              OUR ADDRESS
            </h3>

            <p className="mb-10 text-lg">
              Visit our campus to explore opportunities in music production.
            </p>

            <div className="space-y-8 text-lg">

              <p>
  The Chordifiers Music Institute (TCMI),<br/> Shaktigarh Main Road, Ward 31, Saktigarh, Siliguri, West Bengal
</p>
              <p>
                Phone: +91 7811092672
              </p>

              <p>
                Email: thechordifiers.musicinstitute@gmail.com
              </p>

            </div>
          </div>

          {/* MAP */}
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3564.545301064381!2d88.4114563!3d26.6950211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4413f6a1a5b4d%3A0x40144543d5a04f29!2sThe%20Chordifiers%20Music%20Institute%20(TCMI)!5e0!3m2!1sen!2sin!4v1777120218449!5m2!1sen!2sin"
            className="w-full h-[520px]"
          />

        </div>

      </section>

    </div>
  );
}