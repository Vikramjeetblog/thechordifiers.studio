import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 px-6 border-t border-zinc-900">

      <div className="max-w-4xl mx-auto text-center">

        {/* Brand */}
        <h3 className="tracking-[6px] text-sm text-gray-400">
          CREATOUS COLLECTIVE
        </h3>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-6 text-xl text-gray-400">

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaYoutube />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaFacebook />
          </a>

        </div>

        {/* Description */}
        <p className="text-gray-500 text-xs mt-8 max-w-lg mx-auto">
          The Chordifiers Studio is a property of Creatous Collective Pvt Ltd.
          Next generation creative environment. Siliguri, WB.
        </p>

      </div>

    </footer>
  )
}