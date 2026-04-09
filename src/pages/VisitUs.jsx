
import studio from "../assets/studio1.webp";

export default function VisitUs(){

return(

<div className="bg-[#111111] text-white">

{/* HERO */}

<section
className="h-screen bg-cover bg-center flex items-center justify-center"
style={{backgroundImage:`url(${studio})`}}
>

<div className="bg-black/60 p-10 text-center">

<h1 className="text-5xl font-['Anton'] text-[#f0e81b]">
Visit The Studio
</h1>

</div>

</section>


{/* INFO */}

<section className="py-28 text-center max-w-3xl mx-auto px-6">

<h2 className="text-4xl font-['League_Spartan'] mb-6">
Come Experience The Space
</h2>

<p className="text-white/70">
Visit The Chordifiers studio to explore the environment
where music is created, recorded and taught.
</p>

</section>


{/* MAP */}

<iframe
title="map"
src="https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
className="w-full h-[500px]"
/>

</div>

)
}
