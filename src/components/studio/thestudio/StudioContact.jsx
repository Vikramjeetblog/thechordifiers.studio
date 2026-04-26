
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Toast from "../../../components/Toast";
export default function StudioContact() {
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

  //  HANDLE CHANGE (with restrictions)
  const handleChange = (e) => {
    const { name, value } = e.target;

    // NAME  only letters
    if (name === "name") {
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    }

    // PHONE  only digits max 10
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

{/* CONTACT SECTION */}
<section className="py-24">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
<Toast
  message={message}
  type={status}
  onClose={() => {
    setMessage("");
    setStatus("");
  }}
/>
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
<h4 className="font-semibold">Studio Address</h4>
<p className="text-white/70 text-sm">
  The Chordifiers Studio, Shaktigarh Main Road, Ward 31<br />
  Siliguri, Dist. Darjeeling, West Bengal – 734004
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
<p className="text-white/70 text-sm">thechordifiersstudio@gmail.com</p>
</div>
</div>
</div>

<div className="mt-12 border border-white/10">
<iframe
title="studio-location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.5492559700447!2d88.4100217742397!3d26.69489467677753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441acea247e9b%3A0x77c74beed4aadd84!2sThe%20Chordifiers%20Studio%20(TCS)!5e0!3m2!1sen!2sin!4v1749987584228!5m2!1sen!2sin"
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







</div>

)

}

