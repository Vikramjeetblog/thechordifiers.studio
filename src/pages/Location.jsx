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
              CONTACT US
            </h3>

            <p className="mb-10 text-lg">
              Visit our campus to explore opportunities in music production.
            </p>

            <div className="space-y-8 text-lg">

              <p>
                The Chordifiers Studio <br />
                Siliguri, West Bengal
              </p>

              <p>
                Phone: +91 7811092672
              </p>

              <p>
                Email: thechordifiers@gmail.com
              </p>

            </div>
          </div>

          {/* MAP */}
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.5492559700447!2d88.4100217742397!3d26.69489467677753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441acea247e9b%3A0x77c74beed4aadd84!2sThe%20Chordifiers%20Studio%20(TCS)!5e0!3m2!1sen!2sin!4v1749987584228!5m2!1sen!2sin"
            className="w-full h-[520px]"
          />

        </div>

      </section>

    </div>
  );
}