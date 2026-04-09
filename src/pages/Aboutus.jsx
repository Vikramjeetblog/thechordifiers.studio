import { useState } from "react";
import { motion } from "framer-motion";
import hero from "../assets/institute.webp";
import studio from "../assets/studio1.webp";
import studioWide from "../assets/studio2.jpg";
const timeline = [
  { date: "Aug 2022", title: "Founded & Established" },
  { date: "Mar 2023", title: "Top 10 Music Studios in North Bengal" },
  { date: "Apr 2023", title: "First Music Production School Introduced" },
  { date: "Jun 2023", title: "Introduced Additional Courses" },
  { date: "Jun 2024", title: "Studio Renovations Started" },
  { date: "Nov 2024", title: "Renovations Ongoing" },
  { date: "Dec 2024", title: "Top 3 Studio & School in North Bengal" },
  { date: "2025", title: "Relaunching Soon" }
];

export default function NotebookTimeline() {

const [page,setPage] = useState(0)
const [direction,setDirection] = useState("next")

const next = ()=>{
 if(page < timeline.length-2){
  setDirection("next")
  setPage(page+2)
 }
}

const prev = ()=>{
 if(page > 0){
  setDirection("prev")
  setPage(page-2)
 }
}

return(
<>
{/* HERO */}

<section
className="relative h-screen flex items-center justify-center bg-cover bg-center"
style={{ backgroundImage:`url(${hero})` }}
>

<div className="absolute inset-0 bg-black/70"></div>

<div className="relative text-center">

<h1 className="text-8xl font-['Anton'] text-[#f0e81b] mb-6">
THE CHORDIFIERS
</h1>

<p className="text-lg text-white/70">
Where creativity meets technology
</p>

</div>

</section>

{/* SIGNATURE STATEMENT */}

<section className="py-44 text-center">

<h2 className="text-[110px] font-['Anton'] leading-tight">

WE DON'T JUST
<br/>

<span className="text-[#f0e81b]">
RECORD
</span>

<br/>

MUSIC

</h2>

<p className="mt-10 text-xl text-white/60 max-w-xl mx-auto">
We empower artists and producers to shape the future of sound.
</p>

</section>



{/* ABOUT STUDIO */}

<section className="py-36">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

<img
src={studio}
className="w-full h-[520px] object-cover"
/>

<div>

<h2 className="text-5xl font-['League_Spartan'] mb-8">
About The Studio
</h2>

<p className="text-white/70 mb-6 leading-relaxed text-lg">
The Chordifiers Studio is an award-winning music production studio
and independent record label based in North Bengal.
Recognised at WBIFF 2025.
</p>

<p className="text-white/70 mb-6 leading-relaxed text-lg">
We specialise in music production, music videos,
films and professional training programs.
</p>

<p className="text-white/70 text-lg">
Trusted by artists, brands and creators across
North Bengal, Darjeeling, Siliguri and Sikkim.
</p>

</div>

</div>

</section>



{/* STUDIO ATMOSPHERE */}

<section className="relative h-[70vh]">

<img
src={studioWide}
className="absolute inset-0 w-full h-full object-cover"
/>

<div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center">

<h2 className="text-6xl font-['Anton'] text-[#f0e81b]">
CRAFTING SOUND
</h2>

</div>

</section>



{/* STUDIO GALLERY */}

<section className="py-32">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 px-6">

<img
src={studio}
className="w-full h-[420px] object-cover"
/>

<img
src={studioWide}
className="w-full h-[420px] object-cover"
/>

<img
src={studioWide}
className="md:col-span-2 w-full h-[450px] object-cover"
/>

</div>

</section>

<section className="py-40 bg-black flex flex-col items-center">

<h2 className="text-5xl text-white mb-20 font-['League_Spartan']">
Our Story
</h2>


<div className="relative w-[900px] h-[520px] perspective-[2000px]">


{/* PAGE STACK LEFT */}

<div className="absolute -left-4 top-4">

{[...Array(6)].map((_,i)=>(
<div
key={i}
className="w-[880px] h-[500px] bg-[#e8dfcc] absolute rounded-sm"
style={{
top:`${i*3}px`,
left:`${i*2}px`,
opacity:0.4
}}
/>
))}

</div>


{/* BOOK BASE */}

<div className="relative w-full h-full flex shadow-2xl overflow-hidden rounded-md">


{/* SPINE */}

<div className="absolute left-1/2 top-0 bottom-0 w-[50px]
bg-gradient-to-r from-black/60 via-black/20 to-black/60
rounded-full blur-[4px] z-20"></div>


{/* LEFT PAGE */}

<div className="
w-1/2 relative bg-[#f6f1e6] p-20 border-r border-black/10
shadow-[inset_-60px_0_60px_-40px_rgba(0,0,0,0.35)]
transition-transform duration-300 hover:-translate-y-1
">

{/* PAPER TEXTURE */}

<div
className="absolute inset-0 opacity-[0.06] pointer-events-none"
style={{
backgroundImage:`url("https://www.transparenttextures.com/patterns/paper-fibers.png")`
}}
/>


{/* MARGIN LINE */}

<div className="absolute left-[45px] top-0 bottom-0 w-[2px] bg-red-400/70"></div>


{/* NOTEBOOK LINES */}

<div className="absolute inset-0 pointer-events-none
bg-[repeating-linear-gradient(to_bottom,transparent,transparent_32px,#dcd6c8_33px)]"></div>


<div className="relative">

<p className="text-sm text-[#b58900] mb-6">
{timeline[page]?.date}
</p>

<h3 className="text-2xl text-gray-800 leading-relaxed">
{timeline[page]?.title}
</h3>

</div>


{/* PAGE NUMBER */}

<div className="absolute bottom-6 left-10 text-xs text-black/40">
Page {page+1}
</div>


{/* CORNER FOLD */}

<div className="absolute bottom-0 right-0 w-14 h-14
bg-gradient-to-tr from-black/20 to-transparent
clip-path-[polygon(100%_0,0_100%,100%_100%)]"
/>

</div>



{/* RIGHT PAGE */}

<div className="
w-1/2 relative bg-[#f6f1e6] p-20 border-l border-black/10
shadow-[inset_60px_0_60px_-40px_rgba(0,0,0,0.35)]
transition-transform duration-300 hover:-translate-y-1
">

<div
className="absolute inset-0 opacity-[0.06] pointer-events-none"
style={{
backgroundImage:`url("https://www.transparenttextures.com/patterns/paper-fibers.png")`
}}
/>

<div className="absolute left-[45px] top-0 bottom-0 w-[2px] bg-red-400/70"></div>

<div className="absolute inset-0 pointer-events-none
bg-[repeating-linear-gradient(to_bottom,transparent,transparent_32px,#dcd6c8_33px)]"></div>


<div className="relative">

<p className="text-sm text-[#b58900] mb-6">
{timeline[page+1]?.date}
</p>

<h3 className="text-2xl text-gray-800 leading-relaxed">
{timeline[page+1]?.title}
</h3>

</div>


<div className="absolute bottom-6 right-10 text-xs text-black/40">
Page {page+2}
</div>


<div className="absolute bottom-0 right-0 w-14 h-14
bg-gradient-to-tr from-black/20 to-transparent
clip-path-[polygon(100%_0,0_100%,100%_100%)]"
/>

</div>

</div>


{/* FLIPPING PAGE */}

<motion.div
key={page}
className={`absolute top-0 ${
direction==="next"
? "left-1/2 origin-left"
: "right-1/2 origin-right"
} w-1/2 h-full cursor-pointer`}
initial={{rotateY:0}}
animate={{rotateY: direction==="next"?-180:180}}
transition={{duration:0.9,ease:"easeInOut"}}
style={{transformStyle:"preserve-3d"}}
onClick={direction==="next"?next:prev}
>


{/* FRONT */}

<div
className="absolute inset-0 bg-[#f6f1e6] p-20"
style={{backfaceVisibility:"hidden"}}
>

{/* CURL SHADOW */}

<div className="absolute inset-0
bg-gradient-to-r from-black/20 via-transparent to-black/30
opacity-40 pointer-events-none"/>


<p className="text-sm text-[#b58900] mb-6">
{direction==="next"
? timeline[page+1]?.date
: timeline[page]?.date}
</p>

<h3 className="text-2xl text-gray-800">
{direction==="next"
? timeline[page+1]?.title
: timeline[page]?.title}
</h3>

</div>


{/* BACK */}

<div
className="absolute inset-0 bg-[#f6f1e6] p-20"
style={{
transform:"rotateY(180deg)",
backfaceVisibility:"hidden"
}}
>

<p className="text-sm text-[#b58900] mb-6">
{direction==="next"
? timeline[page+2]?.date
: timeline[page-1]?.date}
</p>

<h3 className="text-2xl text-gray-800">
{direction==="next"
? timeline[page+2]?.title
: timeline[page-1]?.title}
</h3>

</div>

</motion.div>



{/* CONTROLS */}

<div className="flex gap-6 mt-10 justify-center">

<button
onClick={prev}
className="border border-white/30 text-white px-6 py-2 hover:border-white"
>
Previous
</button>

<button
onClick={next}
className="border border-white/30 text-white px-6 py-2 hover:border-white"
>
Next
</button>

</div>


</div>

</section>



<section className="py-32 bg-[#0b0b0b]">

<div className="max-w-7xl mx-auto grid md:grid-cols-2 overflow-hidden rounded-lg border border-white/10">

{/* LEFT SIDE */}

<div className="p-16 bg-[#111]">

<h2 className="text-4xl font-['Anton'] text-[#f0e81b] mb-6">
Visit Us
</h2>

<p className="text-white/70 mb-10 leading-relaxed max-w-md">
We’d love to welcome you to The Chordifiers Studio. Visit our studio to explore
music production, recording sessions and creative collaborations.
</p>

<div className="space-y-8 text-white/80">

<div>
<p className="text-sm text-[#f0e81b] tracking-wider mb-1">STUDIO LOCATION</p>
<p>The Chordifiers Studio<br/>North Bengal, India</p>
</div>

<div>
<p className="text-sm text-[#f0e81b] tracking-wider mb-1">PHONE</p>
<p>+91 XXXXX XXXXX</p>
</div>

<div>
<p className="text-sm text-[#f0e81b] tracking-wider mb-1">EMAIL</p>
<p>info@thechordifiers.studio</p>
</div>

<div>
<p className="text-sm text-[#f0e81b] tracking-wider mb-1">STUDIO HOURS</p>
<p>Mon – Sat : 11 AM – 7 PM</p>
</div>

</div>

</div>



{/* MAP SIDE */}

<div className="relative">

<iframe
title="map"
src="https://maps.google.com/maps?q=Darjeeling%20West%20Bengal&t=&z=13&ie=UTF8&iwloc=&output=embed"
className="w-full h-[520px]"
/>

{/* FLOATING LOCATION CARD */}

<div className="absolute bottom-8 left-8 bg-black/90 backdrop-blur-md border border-white/10 p-6 rounded-lg max-w-[260px]">

<p className="text-[#f0e81b] text-sm mb-1 tracking-wider">
THE CHORDIFIERS
</p>

<p className="text-white text-sm mb-4">
North Bengal, India
</p>

<a
href="https://maps.google.com/?q=Darjeeling West Bengal"
target="_blank"
rel="noreferrer"
className="inline-block text-sm border border-[#f0e81b] text-[#f0e81b] px-4 py-2 hover:bg-[#f0e81b] hover:text-black transition"
>
Open in Maps →
</a>

</div>

</div>

</div>

</section>
</>
)

}