import { motion } from "framer-motion";
import mizzie from "../assets/mizzie.jpg";
import sweta from "../assets/sweta.jpg";
import diyaan from "../assets/diyaan.jpg";

const artists = [
  {
    name: "MizzieLmb",
    image: mizzie,
    location: "Zimbabwe",
    desc: "is a talented artist from Zimbabwe, celebrated for her strong voice and electrifying energy. As part of The Chordifiers Studio, she’s redefining music with her unique approach. Don’t miss her latest creations!"
  },
  {
    name: "Sweta",
    image: sweta,
    location: "Kurseong",
    desc: "a rising artist from Kurseong, is known for her heartfelt and soothing voice. Proudly representing The Chordifiers Studio, she’s bringing fresh energy to the music scene. Stay tuned for her upcoming projects!"
  },
  {
    name: "Diyaan",
    image: diyaan,
    location: "Kashmir",
    desc: "is an artist from Kashmir, known for their unique sound and captivating music. Representing The Chordifiers Studio, he is making waves from his heart out. Stay tuned for their latest hits!"
  }
];

export default function RecordLabelArtists() {

  return (
    <section className="bg-[#111111] text-white py-20">

      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}

        <h2 className="text-center text-3xl md:text-5xl tracking-widest mb-6 mt-6 font-['League_Spartan']">
          OUR LATEST SIGNED ARTIST
        </h2>

        <div className="w-24 h-[2px] bg-[#f0e81b] mx-auto mt-4 mb-6"></div>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed font-['Inter']">
          Meet the newest talent to join our creative family. With a unique sound
          and undeniable passion, this artist is set to make waves in the music industry.
        </p>

        <div className="relative">

          {/* Timeline line */}

          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-[2px] bg-gray-700"></div>

          {artists.map((artist, index) => (

            <div
              key={artist.name}
              className={`relative mb-16 md:mb-24 flex flex-col md:items-center md:justify-between ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >

              {/* Timeline Node */}

              <div className="absolute left-4 top-2 md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-5 h-5 border-2 border-[#f0e81b] bg-[#111111] rounded-full shadow-[0_0_12px_#f0e81b]"></div>

              {/* Poster */}

              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={artist.image}
                className="w-40 md:w-52 ml-12 md:ml-0 mx-auto md:mx-0 mb-6 md:mb-0 rounded-md border border-[#f0e81b] shadow-[0_12px_40px_rgba(240,232,27,0.25)]"
              />

              {/* Text */}

              <div className="w-full md:w-1/2 pl-12 md:pl-6 pr-2 md:pr-6 text-left">

                {/* Artist Name */}

                <h3 className="text-2xl md:text-3xl text-[#f0e81b] font-['Anton'] tracking-wide">
                  {artist.name}
                </h3>

                {/* Accent Line */}

                <div className="w-16 h-[3px] bg-[#f0e81b] my-3"></div>

                {/* Location */}

                <p className="text-gray-400 text-md mb-3 uppercase tracking-widest font-['League_Gothic']">
                  {artist.location}
                </p>

                {/* Description */}

                <p className="text-gray-300 leading-relaxed font-['Inter'] text-sm md:text-base">
                  {artist.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}