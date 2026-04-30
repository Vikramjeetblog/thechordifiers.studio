import { motion } from "framer-motion";
import mizzie from "../assets/mizzie.jpg";
import sweta from "../assets/sweta.jpg";
import diyaan from "../assets/diyaan.jpg";
import dhruv from "../assets/dhruv.png";
import mayank from "../assets/mayank.png";
import ost from "../assets/ost.png";
import aryan from "../assets/aryan.png";
import { useNavigate } from "react-router-dom"; 
import LabelSignup from "../forms/LabelSignup";
import labelVideo from "../assets/label.mp4";
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
    desc: "A rising singer-songwriter delivering powerful vocals and emotionally driven music, Aryan brings a fresh sound built for impact.",
  },
  {
    name: "Mayank",
    image: mayank,
    location: "Greater Noida",
    desc:"With a sharp creative edge and evolving sound, Mayank Jain is carving his space with music that connects and stands out.",
  },
  {
    name: "SCAR DG",
    image: dhruv,
    location: "Delhi",
    desc: "Bold, energetic, and unapologetic—SCAR DG brings raw attitude and a hard-hitting sound to the new wave of music",
  },
  {
    name: "Off The Streets",
    image: ost,
    location: "CHENNAI",
    desc: "Driven by raw energy and a powerful band dynamic, OFF THE STREETS delivers a sound built for the stage and beyond",
  }
];

export default function RecordLabelArtists() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#111111] text-white">

      {/*  NEW: ABOUT RECORD LABEL */}
      import labelVideo from "../assets/label.mp4";

<section
  id="record"
  className="relative py-28 text-center px-6 overflow-hidden"
>
  {/* 🎬 BACKGROUND VIDEO */}
  <video
    src={labelVideo}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="absolute inset-0 w-full h-full object-cover scale-105"
  />

  {/* 🌑 OVERLAY (for readability) */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />

  {/* 📄 CONTENT */}
  <div className="relative z-10">
    <h1 className="text-4xl md:text-6xl font-['League_Spartan'] tracking-widest">
      ABOUT OUR RECORD LABEL
    </h1>

    <div className="w-24 h-[3px] bg-[#f0e81b] mx-auto mt-6 mb-6"></div>

    <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
      The Chordifiers Record Label is built for artists who are ready to move beyond
      creation and step into the real music industry. We don’t just produce tracks —
      we develop identities, shape sound, and build careers.
      <br /><br />
      From studio production to release strategy, we work closely with artists to
      transform raw talent into a professional presence.
    </p>

    {/* BUTTON */}
    <div className="mt-10">
      <button
        onClick={() => navigate("/label-signup")}
        className="bg-[#f0e81b] text-black px-8 py-3 font-semibold tracking-wide hover:scale-105 transition shadow-[0_0_20px_rgba(240,232,27,0.3)]"
      >
        LABEL SIGNUP
      </button>
    </div>
  </div>
</section>


      {/* HERO */}
      <section className="pt-12 pb-14 text-center text-center">
        <h1 className="text-4xl md:text-6xl font-['League_Spartan'] tracking-widest">
          OUR LATEST SINGED ARTISTS
        </h1>

        <div className="w-24 h-[3px] bg-[#f0e81b] mx-auto mt-6 mb-6"></div>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        Meet the newest talent to join our creative family. With a unique sound and undeniable passion, this artist is set to make waves in the music industry. Stay tuned for their upcoming releases, exclusive performances, and more as they embark on an exciting journey with us.
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


      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-['League_Spartan'] mb-6">
          Are You The Next Artist?
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Join The Chordifiers and start your journey in professional
          music production and performance.
        </p>

        <button
          onClick={() => navigate("/book-a-call")}
          className="border border-[#f0e81b] text-[#f0e81b] px-8 py-3 hover:bg-[#f0e81b] hover:text-black transition"
        >
          Book Studio Visit
        </button>
      </section>

    </div>
  );
}