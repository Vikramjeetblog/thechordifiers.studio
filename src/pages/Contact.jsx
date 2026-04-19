
import hero from "../assets/institute.webp"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import hero2 from "../assets/institute2.webp";


import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import { useNavigate } from "react-router-dom";
export default function Contact() {
	const navigate = useNavigate();

return (

<div className="bg-[#111111] text-white">


{/* HERO */}

<section
className="h-[360px] flex items-center justify-center bg-cover bg-center"
style={{backgroundImage:`url(${hero})`}}
>

<div className="bg-black/70 w-full h-full flex items-center justify-center">

<h1 className="text-5xl md:text-6xl font-['Anton'] text-[#f0e81b]">
Contact Us
</h1>

</div>

</section>



{/* CONTACT SECTION */}

<section className="py-24">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">


{/* LEFT SIDE INFO */}

<div>

<h2 className="text-4xl font-['League_Spartan'] mb-6">
Get In Touch
</h2>

<p className="text-white/70 mb-10 leading-relaxed">
Have questions about our courses or studio programs?  
Our team will help you choose the right path for your music career.
</p>


<div className="space-y-6">

<div className="flex items-start gap-4">

<div className="text-[#f0e81b] text-xl">
<FaMapMarkerAlt/>
</div>

<div>

<h4 className="font-semibold">
Studio Address
</h4>

<p className="text-white/70 text-sm">
Creatous Collective Pvt Ltd  
Siliguri, West Bengal, India
</p>

</div>

</div>


<div className="flex items-center gap-4">

<div className="text-[#f0e81b] text-xl">
<FaPhoneAlt/>
</div>

<div>

<h4 className="font-semibold">
Phone
</h4>

<p className="text-white/70 text-sm">
+91 XXXXX XXXXX
</p>

</div>

</div>


<div className="flex items-center gap-4">

<div className="text-[#f0e81b] text-xl">
<FaEnvelope/>
</div>

<div>

<h4 className="font-semibold">
Email
</h4>

<p className="text-white/70 text-sm">
info@creatouscollective.com
</p>

</div>

</div>

</div>


{/* MAP */}

<div className="mt-12 border border-white/10">

<iframe
title="studio-location"
src="https://maps.google.com/maps?q=siliguri&t=&z=13&ie=UTF8&iwloc=&output=embed"
className="w-full h-[300px]"
></iframe>

</div>

</div>



{/* CONTACT FORM */}

<div className="bg-[#1a1a1a] border border-white/10 p-10">

<h3 className="text-2xl font-['League_Spartan'] mb-8">
Ask Us a Question
</h3>

<form className="space-y-6">

<input
type="text"
placeholder="Your Name"
className="w-full bg-black border border-white/10 px-4 py-3 outline-none focus:border-[#f0e81b]"
/>

<input
type="email"
placeholder="Email Address"
className="w-full bg-black border border-white/10 px-4 py-3 outline-none focus:border-[#f0e81b]"
/>

<input
type="text"
placeholder="Phone Number"
className="w-full bg-black border border-white/10 px-4 py-3 outline-none focus:border-[#f0e81b]"
/>

<textarea
rows="5"
placeholder="Your Message"
className="w-full bg-black border border-white/10 px-4 py-3 outline-none focus:border-[#f0e81b]"
></textarea>

<button
type="submit"
className="bg-[#f0e81b] text-black px-8 py-3 font-semibold hover:opacity-90"
>
Send Message
</button>

</form>

</div>


</div>

</section>



{/* CTA SECTION */}

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

