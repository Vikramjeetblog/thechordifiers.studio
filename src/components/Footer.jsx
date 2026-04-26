
import { FaInstagram, FaYoutube, FaFacebook, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-900">

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-14">

        {/* BRAND */}
        <div>

          <h3 className="tracking-[6px] text-sm text-gray-400">
            THE CHORDIFIRES STUDIO
          </h3>

          <p className="text-gray-500 text-sm mt-6 leading-relaxed">
            We are a Music Institute, Production house & an Independent Record Label from Siliguri, Darjeeling, India.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-8 text-xl text-gray-400">

            <a
              href="https://www.instagram.com/chordifiers.studio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.youtube.com/channel/UCjv2UfFlSKRsfYcWFZyszow"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaYoutube />
            </a>

            <a
              href="https://www.facebook.com/chordifiers.studio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <FaFacebook />
            </a>

          </div>

        </div>


        {/* QUICK LINKS */}
        <div>

          <h4 className="text-lg font-semibold mb-6 text-white">
            Quick Links
          </h4>

          <ul className="space-y-3 text-gray-400 text-sm">

            <li>
              <a href="/terms" className="hover:text-white transition">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="/Privacy" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/refund" className="hover:text-white transition">
                Refund Policy
              </a>
            </li>

            <li>
              <a href="/institute/contact" className="hover:text-white transition">
                Contact Us
              </a>
            </li>

          </ul>

        </div>


        {/* CONTACT / LOCATION */}
        <div>

          <h4 className="text-lg font-semibold mb-6 text-white">
            Studio Location
          </h4>

          <div className="space-y-4 text-gray-400 text-sm">

            <p className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-[#f0e81b]" />
              THE CHORDIFIRES STUDIO
SHAKTIGARH ROAD NO. 8, Woard 31 Siliguri, Dist- Darjeeling, West Bengal, 734004
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#f0e81b]" />
              +91 7811092672
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-[#f0e81b]" />
            thechordifiersstudio@gmail.com
            </p>

          </div>

        </div>

      </div>


      {/* BOTTOM BAR */}
      <div className="border-t border-zinc-900 py-6 text-center text-gray-500 text-xs">

        © {new Date().getFullYear()} Creatous Collective Pvt Ltd. All Rights Reserved.

      </div>

    </footer>
  );
}

