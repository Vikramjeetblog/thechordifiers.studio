
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
import hero1 from "../assets/institute.webp";
import hero2 from "../assets/institute2.webp";
import hero3 from "../assets/institute3.png";

import studio1 from "../assets/studio1.webp";
import studio2 from "../assets/studio2.jpg";
import studio3 from "../assets/studio3.webp";

export default function Location() {
const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    });
  }, []);

  return (

<div className="bg-[#111111] text-white">

{/* HERO SECTION */}

<section className="relative h-screen pt-14 overflow-hidden">

<Swiper
modules={[Autoplay, EffectFade, Pagination]}
effect="fade"
pagination={{ clickable: true }}
autoplay={{ delay: 5000, disableOnInteraction:false }}
loop
className="h-full"
>

{/* SLIDE 1 */}

<SwiperSlide>

<div className="relative h-full flex items-center justify-center text-center">

<div
className="absolute inset-0 bg-cover bg-center hero-zoom"
style={{ backgroundImage: `url(${hero1})` }}
/>

<div className="absolute inset-0 bg-black/70"></div>

<div className="relative z-10 max-w-4xl px-6 space-y-6">

<h2 className="text-3xl md:text-5xl font-['League_Spartan']">
The chordifiers Studio
</h2>

<h3 className="text-4xl md:text-6xl font-['Anton'] text-[#f0e81b]">
Our Siliguri Campus
</h3>

<p className="text-white/80 text-lg">
Located inside one of Mumbai's leading recording studios.
</p>

<button 
  onClick={() => navigate("/book-a-call")}
  className="mt-4 border border-[#f0e81b] text-[#f0e81b] px-8 py-3 hover:bg-[#f0e81b] hover:text-black transition">
Book A Tour
</button>

</div>

</div>

</SwiperSlide>


{/* SLIDE 2 */}

<SwiperSlide>

<div className="relative h-full flex items-center justify-center text-center">

<div className="absolute inset-0 grid grid-cols-3">

<img src={studio1} className="w-full h-full object-cover"/>
<img src={studio2} className="w-full h-full object-cover"/>
<img src={studio3} className="w-full h-full object-cover"/>

</div>

<div className="absolute inset-0 bg-black/70"></div>

<div className="relative z-10 max-w-4xl px-6 space-y-6">

<h2 className="text-4xl md:text-6xl font-['League_Spartan']">
Our Beautiful Studios
</h2>

<h3 className="text-3xl md:text-5xl font-['Anton'] text-[#f0e81b]">
Being Upgraded in 2025!
</h3>

<p className="text-white/80 text-lg">
Experience upgraded production environments and modern
studio technology designed for the next generation
of music creators.
</p>

</div>

</div>

</SwiperSlide>


{/* SLIDE 3 */}

<SwiperSlide>

<div className="relative h-full flex items-center justify-center text-center">

<div
className="absolute inset-0 bg-cover bg-center hero-zoom"
style={{ backgroundImage: `url(${hero2})` }}
/>

<div className="absolute inset-0 bg-black/70"></div>

<div className="relative z-10 max-w-4xl px-6 space-y-6">

<h2 className="text-4xl md:text-6xl font-['League_Spartan']">
Professional
</h2>

<h3 className="text-5xl md:text-7xl font-['Anton'] text-[#f0e81b]">
Studio Facilities
</h3>

<p className="text-white/80 text-lg">
Learn music production using industry-standard equipment
and real recording workflows.
</p>

</div>

</div>

</SwiperSlide>

</Swiper>

</section>


{/* SECOND SECTION */}

<section className="py-28">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">

<div data-aos="fade-right">

<h2 className="text-4xl md:text-5xl font-['League_Spartan'] mb-6">
Welcome To Our Creative Campus
</h2>

<p className="text-white/70 mb-4 leading-relaxed text-lg">
Our institute operates inside a professional music production
environment where students work with the same equipment,
software and studio workflows used by industry professionals.
</p>

<p className="text-white/70 mb-4 leading-relaxed text-lg">
Students gain hands-on experience in recording, mixing,
mastering and sound design while collaborating inside
a real studio ecosystem.
</p>

<p className="text-white/70 leading-relaxed text-lg">
The goal is to combine creativity with technical knowledge,
helping students develop both artistic confidence and
professional production skills.
</p>

</div>

<div className="space-y-6" data-aos="fade-left">

{[
"Professional Studio Environment",
"Hands-On Practical Learning",
"Industry Mentorship",
"Real Project Experience"
].map((item, i) => (

<div key={i} className="flex gap-4 items-start">

<div className="w-10 h-10 bg-[#f0e81b] text-black flex items-center justify-center rounded-full font-bold">
{i + 1}
</div>

<p className="text-white/70 text-lg">{item}</p>

</div>

))}

</div>

</div>

</section>


{/* FACILITIES */}

<section className="bg-[#0e0e0e] py-28">

<div className="max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

<div data-aos="fade-right">

<h2 className="text-4xl md:text-5xl font-['League_Spartan'] mb-6">
Our Facilities
</h2>

<div className="w-20 h-[3px] bg-[#f0e81b] mb-6"></div>

<p className="text-white/70 mb-4 leading-relaxed text-lg">
Our campus provides a professional environment designed
for modern music production, recording and sound engineering.
</p>

<button
  onClick={() => navigate("/book-a-call")}
 className="bg-[#f0e81b] text-black px-8 py-3 font-semibold hover:opacity-90 transition">
Book a Campus Call
</button>

</div>

<div data-aos="fade-left">

<img
src={studio1}
className="w-full h-[340px] object-cover rounded-lg shadow-lg"
/>

</div>

</div>

<div className="grid md:grid-cols-3 gap-10">

{[studio1, studio2, studio3].map((studio, i) => (

<div
key={i}
className="group relative overflow-hidden rounded-lg"
data-aos="zoom-in"
>

<img
src={studio}
className="w-full h-[420px] object-cover transition duration-700 group-hover:scale-110"
/>

</div>

))}

</div>

</div>

</section>


{/* CONTACT */}

<section className="py-32">

<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 overflow-hidden rounded-lg shadow-xl">

<div className="bg-[#f0e81b] text-black p-16">

<h2 className="text-5xl font-['League_Spartan'] mb-8">
CONTACT US
</h2>

<p className="mb-10 text-lg">
Visit our campus to explore opportunities in music production.
</p>

<div className="space-y-8 text-lg">

<p>
The Chordifiers Studio<br/>
Siliguri, West Bengal
</p>

<p>
Phone: +91 98929 37097
</p>

<p>
Email: info@chordifiers.com
</p>

</div>

</div>

<iframe
title="map"
src="https://maps.google.com/maps?q=khar%20west%20mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
className="w-full h-[520px]"
/>

</div>

</section>


{/* TESTIMONIAL */}

<section
className="relative py-36 bg-cover bg-center"
style={{ backgroundImage: `url(${hero2})` }}
>

<div className="absolute inset-0 bg-black/70"></div>

<div className="relative max-w-5xl mx-auto px-6 text-center">

<Swiper
modules={[Autoplay, Pagination]}
autoplay={{ delay: 5000 }}
pagination={{ clickable: true }}
loop
>

{[
{
text: "Applying for the diploma was the best decision I made for my music career.",
name: "Aarav Mehta",
role: "Alumni",
},
{
text: "Learning inside a professional recording studio environment gave me real industry exposure.",
name: "Riya Kapoor",
role: "Student",
},
{
text: "The mentors are incredible. They teach how the music industry actually works.",
name: "Karan Shah",
role: "Graduate",
},
].map((item, index) => (

<SwiperSlide key={index}>

<div className="py-24">

<p className="text-2xl md:text-3xl leading-relaxed max-w-3xl mx-auto mb-10">
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
);
}

