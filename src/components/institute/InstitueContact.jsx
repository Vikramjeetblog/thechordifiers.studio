
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import hero2 from "../../assets/institute2.webp";

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import Toast from "../../components/Toast";
import "swiper/css"
import "swiper/css/pagination"
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
 const [message, setMessage] = useState("");
 const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  //  HANDLE CHANE
  const handleChange = (e) => {
    const { name, value } = e.target;

    // NAME 
    if (name === "name") {
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    }

    // PHONE 
    if (name === "phone") {
      const digits = value.replace(/\D/g, "");
      if (digits.length > 10) return;
      return setForm({ ...form, phone: digits });
    }

    setForm({ ...form, [name]: value });
  };

  //  VALIDATION
  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
      newErrors.name = "Only letters allowed";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Phone must be exactly 10 digits";
    }

    return newErrors;
  };

  //  SUBMIT
 const SCRIPT_URL = "YOUR_SCRIPT_LINK_HERE"; // 🔥 ONLY CHANGE THIS

const handleSubmit = async (e) => {
  e.preventDefault();

  const validationErrors = validate();
  setErrors(validationErrors);

  if (Object.keys(validationErrors).length > 0) return;

  try {
    setLoading(true);
    setMessage("");
    setStatus("");

    await fetch('https://script.google.com/macros/s/AKfycbz7acdaXq-jpgIMt4rMrhru7SdroDZd4ahiR9K8-AIX7UBWTiYLyP48irtJlWdtBKBvuA/exec', {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setStatus("success");
    setMessage("Message sent successfully!");

    setForm({
      name: "",
      email: "",
      phone: "",
      message: ""
    });

    setErrors({});

  } catch (error) {
    console.error(error);
    setStatus("error");
    setMessage("Something went wrong. Please try again.");
  } finally {
    setLoading(false);

    setTimeout(() => {
      setMessage("");
      setStatus("");
    }, 3000);
  }
};

  return (

<div className="bg-[#111111] text-white">

{/* HERO */}
<section>
<div className=" w-full h-full flex items-center justify-center">
  <Toast
  message={message}
  type={status}
  onClose={() => {
    setMessage("");
    setStatus("");
  }}
/>
<h1 className="text-4xl md:text-6xl font-['Anton'] mb-4 tracking-wide">
  <span className="text-white">CONTACT</span>{" "}
  <span className="text-[#f0e81b]">US</span>
</h1>
</div>
</section>

{/* CONTACT  */}
<section className="py-24">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

{/* LEFT SIDE */}
<div>
<h2 className="text-4xl font-['League_Spartan'] mb-6">Get In Touch</h2>
<p className="text-white/70 mb-10 leading-relaxed">
Have questions about our courses or studio programs?  
Our team will help you choose the right path for your music career.
</p>

<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="text-[#f0e81b] text-xl"><FaMapMarkerAlt/></div>
<div>
<h4 className="font-semibold">Institute Address</h4>
<p className="text-white/70 text-sm">
The Chordifiers Music Institute (TCMI),<br/> Shaktigarh Main Road, Ward 31, Saktigarh,<br/> Siliguri, West Bengal
</p>
</div>
</div>

<div className="flex items-center gap-4">
<div className="text-[#f0e81b] text-xl"><FaPhoneAlt/></div>
<div>
<h4 className="font-semibold">Phone</h4>
<p className="text-white/70 text-sm">+91 7811092672</p>
</div>
</div>

<div className="flex items-center gap-4">
<div className="text-[#f0e81b] text-xl"><FaEnvelope/></div>
<div>
<h4 className="font-semibold">Email</h4>
<p className="text-white/70 text-sm">thechordifiers.musicinstitute@gmail.com</p>
</div>
</div>
</div>

<div className="mt-12 border border-white/10">
<iframe
title="institue-location"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3564.545301064381!2d88.4114563!3d26.6950211!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4413f6a1a5b4d%3A0x40144543d5a04f29!2sThe%20Chordifiers%20Music%20Institute%20(TCMI)!5e0!3m2!1sen!2sin!4v1777120218449!5m2!1sen!2sin"
      width="100%"
      height="260"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
</div>
</div>

{/* FORM */}
<div className="bg-[#1a1a1a] border border-white/10 p-10">
<h3 className="text-2xl font-['League_Spartan'] mb-8">Ask Us a Question</h3>

<form className="space-y-6" onSubmit={handleSubmit}>

{/* NAME */}
<div>
<input
name="name"
type="text"
value={form.name}
onChange={handleChange}
placeholder="Your Name"
className="w-full bg-black border border-white/10 px-4 py-3 outline-none focus:border-[#f0e81b]"
/>
{errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
</div>

{/* EMAIL */}
<div>
<input
name="email"
type="email"
value={form.email}
onChange={handleChange}
placeholder="Email Address"
className="w-full bg-black border border-white/10 px-4 py-3 outline-none focus:border-[#f0e81b]"
/>
{errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
</div>

{/* PHONE */}
<div>
<input
name="phone"
type="text"
value={form.phone}
onChange={handleChange}
placeholder="Phone Number"
className="w-full bg-black border border-white/10 px-4 py-3 outline-none focus:border-[#f0e81b]"
/>
{errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
</div>

{/* MESSAGE */}
<textarea
name="message"
rows="5"
value={form.message}
onChange={handleChange}
placeholder="Your Message"
className="w-full bg-black border border-white/10 px-4 py-3 outline-none focus:border-[#f0e81b]"
></textarea>

<button
  type="submit"
  disabled={loading}
  className={`px-8 py-3 font-semibold transition ${
    loading
      ? "bg-gray-500 cursor-not-allowed"
      : "bg-[#f0e81b] text-black hover:opacity-90"
  }`}
>
  {loading ? "Sending..." : "Send Message"}
</button>

</form>
</div>

</div>
</section>

{/* CTA  */}

<section className="bg-[#0e0e0e] py-24 text-center">

<h2 className="text-4xl font-['League_Spartan'] mb-6">
Ready to Start Your Music Career?
</h2>

<button
  onClick={() => navigate("/book-a-call")}
   className="bg-[#f0e81b] text-black px-8 py-3 font-semibold hover:opacity-90">
Book a Career Call
</button>

</section>
{/* TESTIMONIAL */}

<section
className="relative py-36 bg-cover bg-center"
style={{ backgroundImage: `url(${hero2})` }}
>

<div className="absolute inset-0 bg-black/70"></div>

<div className="relative max-w-4xl mx-auto px-6 text-center">

<Swiper
modules={[Autoplay, Pagination]}
autoplay={{delay:4500}}
pagination={{clickable:true}}
loop
>

{[
{
text:"Applying for the diploma was the best decision I made for my music career.",
name:"Aarav Mehta",
role:"Alumni"
},
{
text:"Learning inside a professional recording studio environment gave me real industry exposure.",
name:"Riya Kapoor",
role:"Student"
},
{
text:"The mentors are incredible. They teach how the music industry actually works.",
name:"Karan Shah",
role:"Graduate"
}
].map((item,index)=>(

<SwiperSlide key={index}>

<div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-xl p-12">

<div className="text-[#f0e81b] mb-6 text-lg">
★★★★★
</div>

<p className="text-2xl md:text-3xl leading-relaxed mb-10">
{item.text}
</p>

<h4 className="text-xl font-semibold">
{item.name}
</h4>

<p className="text-white/60 text-sm">
{item.role}
</p>

</div>

</SwiperSlide>

))}

</Swiper>

</div>

</section>


</div>

)

}

