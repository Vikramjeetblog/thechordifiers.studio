import { motion } from "framer-motion";
import mizzie from "../assets/mizzie.jpg";
import sweta from "../assets/sweta.jpg";
import diyaan from "../assets/diyaan.jpg";
import dhruv from "../assets/dhruv.png";
import mayank from "../assets/mayank.png";
import ost from "../assets/ost.png";
import aryan from "../assets/aryan.png";
import { useNavigate } from "react-router-dom"; 
const artists = [
  {
    name: "MizzieLmb",
    image: mizzie,
    location: "Zimbabwe",
    desc: "A powerful voice with electrifying stage energy, Mizzie is redefining modern music expression.",
  },
  {
    name: "Sweta",
    image: sweta,
    location: "Kurseong",
    desc: "Known for her soulful tone and emotional depth, Sweta brings raw storytelling into music.",
  },
  {
    name: "Diyaan",
    image: diyaan,
    location: "Kashmir",
    desc: "Blending culture and sound, Diyaan creates a unique sonic identity rooted in originality.",
  },

  {
    name: "Aryan",
    image: aryan,
    location: "Mumbai",
    desc: "Blending culture and sound, Diyaan creates a unique sonic identity rooted in originality.",
  },
  {
    name: "Mayank",
    image: mayank,
    location: "Greator Noida",
    desc: "Blending culture and sound, Diyaan creates a unique sonic identity rooted in originality.",
  },
  {
    name: "Dhruv",
    image: dhruv,
    location: "Delhi",
    desc: "Blending culture and sound, Diyaan creates a unique sonic identity rooted in originality.",
  },
  {
    name: "Off The Streets",
    image: ost,
    location: "Bhopal",
    desc: "Blending culture and sound, Diyaan creates a unique sonic identity rooted in originality.",
  }
];

export default function RecordLabelArtists() {
const navigate = useNavigate();
  return (
    <div className="bg-[#111111] text-white">

      {/* HERO */}

      <section className="py-28 text-center">

        <h1 className="text-4xl md:text-6xl font-['League_Spartan'] tracking-widest">
          OUR ARTISTS
        </h1>

        <div className="w-24 h-[3px] bg-[#f0e81b] mx-auto mt-6 mb-6"></div>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Discover emerging talent from The Chordifiers. Artists shaping
          the future of music through creativity and passion.
        </p>

      </section>


      {/* TIMELINE */}

      <section className="pb-24">

        <div className="max-w-5xl mx-auto px-6 relative">

          {/* LINE */}

          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-[2px] bg-gray-700"></div>

          {artists.map((artist, index) => (

            <div
              key={artist.name}
              className={`relative mb-20 flex flex-col md:items-center md:justify-between ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >

              {/* NODE */}

              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-4 md:top-1/2 md:-translate-y-1/2 w-5 h-5 border-2 border-[#f0e81b] bg-[#111] rounded-full shadow-[0_0_12px_#f0e81b]"></div>


              {/* IMAGE */}

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative group ml-12 md:ml-0"
              >

                <img
                  src={artist.image}
                  className="w-44 md:w-56 rounded-md border border-[#f0e81b] shadow-[0_12px_40px_rgba(240,232,27,0.25)]"
                />

                {/* HOVER OVERLAY */}

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">

                  <button className="border border-[#f0e81b] px-4 py-2 text-[#f0e81b] hover:bg-[#f0e81b] hover:text-black transition">
                     Play Demo
                  </button>

                </div>

              </motion.div>


              {/* TEXT */}

              <div className="w-full md:w-1/2 pl-12 md:pl-8 pr-2 md:pr-8 mt-6 md:mt-0">

                <h3 className="text-2xl md:text-3xl text-[#f0e81b] font-['Anton']">
                  {artist.name}
                </h3>

                <div className="w-16 h-[3px] bg-[#f0e81b] my-3"></div>

                <p className="text-gray-400 uppercase tracking-widest text-sm mb-3">
                  {artist.location}
                </p>

                <p className="text-gray-300 leading-relaxed">
                  {artist.desc}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* STATS */}

      <section className="py-20 bg-[#0e0e0e] text-center">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          {[
            ["50+", "Artists Trained"],
            ["100+", "Tracks Produced"],
            ["10+", "Industry Collaborations"]
          ].map((item, i) => (

            <div key={i}>

              <h3 className="text-4xl font-['Anton'] text-[#f0e81b]">
                {item[0]}
              </h3>

              <p className="text-gray-400 mt-2">
                {item[1]}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* CTA */}

      <section className="py-24 text-center">

        <h2 className="text-3xl md:text-5xl font-['League_Spartan'] mb-6">
          Are You The Next Artist?
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Join The Chordifiers and start your journey in professional
          music production and performance.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

         

          <button
          onClick={() => navigate("/book-a-call")}
           className="border border-[#f0e81b] text-[#f0e81b] px-8 py-3 hover:bg-[#f0e81b] hover:text-black transition">
            Book Studio Visit
          </button>

        </div>

      </section>

    </div>
  );
}