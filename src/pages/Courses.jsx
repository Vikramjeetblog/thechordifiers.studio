import { useState } from "react"
import { motion } from "framer-motion"

import hero from "../assets/institute.webp"
import hero2 from "../assets/institute2.webp"

/* course images */
import mentor from "../assets/16.webp"
import mindset from "../assets/17.webp"
import parents from "../assets/18.webp"
import basic from "../assets/31.webp"
import intermediate from "../assets/32.webp"
import advanced from "../assets/33.webp"
import pro from "../assets/35.webp"
import diploma1 from "../assets/2.webp"
import diploma2 from "../assets/12.webp"
import diploma3 from "../assets/13.webp"
import diploma4 from "../assets/15.webp"
import diploma5 from "../assets/1.webp"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

export default function Courses() {

const [activeFilter,setActiveFilter] = useState("All")

const filters = [
"All",
"Signature Program",
"Certification Courses",
"Professional Diploma Courses"
]

const categories = [

{
title:"Signature Program",
courses:[
{
name:"Artist Mentorship Program",
image:mentor,
desc:"A focused mentorship designed to guide emerging artists in developing their sound and artistic identity."
},
{
name:"Unbreakable Artist Mindset Program",
image:mindset,
desc:"Build the mindset required to succeed in the music industry with discipline, focus and resilience."
},
{
name:"Music Business Awareness Program (for Parents)",
image:parents,
desc:"A program designed for parents to understand the music industry and support aspiring artists."
}
]
},

{
title:"Certification Courses",
price:true,
courses:[
{ name:"Music Production Certification Course - Basic (Level 1)", image:basic },
{ name:"Music Production Certification Course - Intermediate (Level 2)", image:intermediate },
{ name:"Music Production Certification Course - Advanced (Level 3)", image:advanced },
{ name:"Music Production Certification Course - Professional (Level 4)", image:pro }
]
},

{
title:"Professional Diploma Courses",
courses:[
{
name:"Diploma in Music Production",
image:diploma1,
desc:"Transform your creative passion into professional expertise with advanced studio workflows."
},
{
name:"Diploma in Sound Designing",
image:diploma2,
desc:"Master the art of sonic storytelling for film, games and immersive media."
},
{
name:"Diploma in Music Production & Music Business",
image:diploma3,
desc:"Combine professional production skills with essential music industry business knowledge."
},
{
name:"Diploma in Sound Designing & Music Production",
image:diploma4,
desc:"Learn both sound design and music production techniques used across modern media."
},
{
name:"Diploma in Sound Designing & Music Production & Music Business",
image:diploma5,
desc:"Master sound design, music production and the music business ecosystem."
}
]
}

]

return (

<div className="bg-[#111111] text-white pb-24">

{/* HERO */}

<section
className="h-[360px] flex items-center justify-center bg-cover bg-center"
style={{backgroundImage:`url(${hero})`}}
>

<div className="bg-black/70 w-full h-full flex items-center justify-center">

<h1 className="text-5xl md:text-6xl font-['Anton'] text-[#f0e81b]">
Our Courses
</h1>

</div>

</section>


{/* FILTERS */}

<div className="max-w-7xl mx-auto px-6 pt-16 flex flex-wrap gap-4 justify-center">

{filters.map(filter => (

<button
key={filter}
onClick={()=>setActiveFilter(filter)}
className={`px-5 py-2 text-sm border transition
${activeFilter === filter
? "bg-[#f0e81b] text-black border-[#f0e81b]"
: "border-white/20 hover:border-[#f0e81b]"}
`}
>
{filter}
</button>

))}

</div>


{/* COURSE CATEGORIES */}

{categories
.filter(cat => activeFilter === "All" || cat.title === activeFilter)
.map((category,index)=>(

<section key={index} className="py-24">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-4xl md:text-5xl font-['League_Spartan'] mb-4">
{category.title}
</h2>

<div className="w-16 h-[3px] bg-[#f0e81b] mb-8"></div>

{/* Price UI */}

{category.price && (

<div className="mb-12 flex items-center gap-4">

<span className="text-gray-400 line-through text-lg">
₹9,999
</span>

<span className="text-[#f0e81b] text-3xl font-bold">
₹3,999
</span>

<span className="bg-[#f0e81b] text-black text-xs px-3 py-1 rounded">
Limited Offer
</span>

</div>

)}

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{category.courses.map((course,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
viewport={{once:true}}
transition={{duration:0.5}}
whileHover={{y:-8}}
className="group bg-gradient-to-b from-[#1a1a1a] to-[#141414] border border-[#222] rounded-md overflow-hidden hover:border-[#f0e81b]"
>

{/* IMAGE */}

<div className="h-[240px] bg-black flex items-start justify-center overflow-hidden">

<img
src={course.image}
className="w-full h-auto object-contain group-hover:scale-105 transition duration-700"
/>

</div>

{/* CONTENT */}

<div className="p-6">

<h3 className="text-xl font-['League_Spartan'] mb-2">
{course.name}
</h3>

<div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">

{course.desc && (
<p className="text-white/70 text-sm mt-3">
{course.desc}
</p>
)}

</div>

<button className="mt-5 border border-[#f0e81b] text-[#f0e81b] px-5 py-2 text-sm hover:bg-[#f0e81b] hover:text-black transition">
Enquire Now
</button>

</div>

</motion.div>

))}

</div>

</div>

</section>

))}


{/* CTA */}

<section className="bg-[#0e0e0e] py-24 text-center">

<h2 className="text-4xl font-['League_Spartan'] mb-6">
Not sure which course fits you?
</h2>

<button className="bg-[#f0e81b] text-black px-8 py-3 font-semibold hover:opacity-90">
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


{/* STICKY ENQUIRY BAR */}







</div>

)

}