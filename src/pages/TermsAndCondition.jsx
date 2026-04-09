import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    id: "intro",
    title: "Introduction",
    text: "The Chordifiers Studio values your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services."
  },
  {
    id: "info",
    title: "Information We Collect",
    text: "Personal details (name, email, phone number) when you contact us.Payment details for service bookings (securely processed).Cookies and analytics data to improve website performance."
  },
  {
    id: "usage",
    title: "How We Use Your Information",
    text: "We use your information to Provide and manage our services.Send updates about events, services, or promotions.Ensure site security and optimize user experience."
  },
  {
    id: "security",
    title: "Data Protection",
    text: "We adopt industry-standard security measures to protect your personal data from unauthorized access, alteration, or disclosure."
  },
  {
    id: "thirdparty",
    title: "Third-Party Services",
    text: "Our website may integrate analytics tools, payment gateways, or embedded media that may collect data according to their own privacy policies."
  },
  {
    id: "rights",
    title: "Your Rights",
    text: "You may request access, correction, or deletion of your personal data stored by us at any time by contacting our team."
  },
  {
    id: "updates",
    title: "Policy Updates",
    text: "We may update this Privacy Policy periodically. Updates will always be reflected on this page with the latest revision date."
  }
];

export default function TermsAndCondition() {

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
            Terms And Conditions
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed">
            At <span className="text-[#f0e81b]">The Chordifiers Studio</span>,
            protecting your privacy is important to us. This policy explains how
            we collect, use, and safeguard your information when you interact
            with our website and services.
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