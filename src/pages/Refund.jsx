import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    id: "general",
    title: "1. General Refund Policy",
    text: "We want you to be satisfied with our products. Refunds are offered on a case-by-case basis. Once approved, refunds will be processed within 5–6 working days."
  },
  {
    id: "website-products",
    title: "2. Website Products (Digital Downloads, E-books, Templates)",
    text: "Due to the digital nature of these products, all sales are final and non-refundable. Once downloaded, we cannot verify deletion. However, if you face any issues, please contact us and we will assist you."
  },
  {
    id: "services",
    title: "3. Services",
    text: "Refunds for services are available only if requested within 12 hours of purchase. To request a refund, email us with your details including name, email used for purchase, service name, and reason for the request."
  },
  {
    id: "courses",
    title: "4. Digital Courses & Memberships",
    text: "All sales for digital courses and memberships are final. Refunds are not available. Please review all course details carefully before purchasing."
  },
  {
    id: "contact",
    title: "Contact Us",
    text: "For any questions or refund requests, contact us at thechordifiresStudio@gmail.com."
  }
];

export default function RefundPolicy() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (window.scrollY / totalHeight) * 100;
      setScroll(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#111111] text-[#f2f2f2] min-h-screen relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#f0e81b]/10 blur-[200px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#f0e81b]/5 blur-[200px] rounded-full"></div>

      {/* Scroll Progress */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-[#f0e81b] z-50"
        style={{ width: `${scroll}%` }}
      />

      <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#f0e81b] mb-6">
            Refund Policy
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            At <span className="text-[#f0e81b]">The Chordifiers Studio</span>,
            we strive to provide the best experience. Please review our refund
            guidelines carefully before making a purchase.
          </p>

          <p className="text-sm text-gray-500 mt-4">
            Last Updated: April 26, 2026
          </p>
        </motion.div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group p-[1px] rounded-2xl bg-gradient-to-r from-[#f0e81b]/0 via-[#f0e81b]/40 to-[#f0e81b]/0"
            >
              <div className="bg-[#151515] p-8 rounded-2xl transition group-hover:shadow-[0_0_40px_rgba(240,232,27,0.15)]">

                <h2 className="text-2xl text-[#f0e81b] mb-4 font-semibold">
                  {section.title}
                </h2>

                <p className="text-gray-300 leading-relaxed">
                  {section.text}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-24 border-t border-[#f0e81b]/30 pt-6 text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} The Chordifiers Studio. All rights reserved.
        </div>

      </div>
    </div>
  );
}