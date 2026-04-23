import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

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
          slug:"artist-mentorship",
          image:mentor,
          desc:"A focused mentorship designed to guide emerging artists in developing their sound and artistic identity."
        },
        {
          name:"Unbreakable Artist Mindset Program",
          slug:"artist-mindset",
          image:mindset,
          desc:"Build the mindset required to succeed in the music industry."
        },
        {
          name:"Music Business Awareness Program (for Parents)",
          slug:"music-business-awareness",
          image:parents,
          desc:"Help parents understand and support music careers."
        }
      ]
    },

    {
      title:"Certification Courses",
      price:true,
      courses:[
        { name:"Music Production Certification Course - Basic (Level 1)", slug:"cert-basic", image:basic },
        { name:"Music Production Certification Course - Intermediate (Level 2)", slug:"cert-intermediate", image:intermediate },
        { name:"Music Production Certification Course - Advanced (Level 3)", slug:"cert-advanced", image:advanced },
        { name:"Music Production Certification Course - Professional (Level 4)", slug:"cert-pro", image:pro }
      ]
    },

    {
      title:"Professional Diploma Courses",
      courses:[
        {
          name:"Diploma in Music Production",
          slug:"diploma-music-production",
          image:diploma1,
          desc:"Transform your creative passion into professional expertise."
        },
        {
          name:"Diploma in Sound Designing",
          slug:"diploma-sound-designing",
          image:diploma2,
          desc:"Master sonic storytelling for film and games."
        },
        {
          name:"Diploma in Music Production & Music Business",
          slug:"diploma-music-business",
          image:diploma3,
          desc:"Production + business knowledge combined."
        },
        {
          name:"Diploma in Sound Designing & Music Production",
          slug:"diploma-sound-production",
          image:diploma4,
          desc:"Dual skill program for modern media."
        },
        {
          name:"Diploma in Sound Designing & Music Production & Music Business",
          slug:"diploma-complete",
          image:diploma5,
          desc:"Complete professional audio + business training."
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
              : "border-white/20 hover:border-[#f0e81b]"}`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* COURSES */}
      {categories
        .filter(cat => activeFilter === "All" || cat.title === activeFilter)
        .map((category,index)=>(

        <section key={index} className="py-24">
          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-4xl md:text-5xl font-['League_Spartan'] mb-4">
              {category.title}
            </h2>

            <div className="w-16 h-[3px] bg-[#f0e81b] mb-8"></div>

            

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

              {category.courses.map((course,i)=>(

                <motion.div
                  key={i}
                  whileHover={{y:-8}}
                  className="group bg-[#141414] border border-[#222] rounded-md overflow-hidden hover:border-[#f0e81b]"
                >

                  {/* IMAGE */}
                  <div className="h-[240px] overflow-hidden">
                    <img src={course.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    <h3 className="text-xl mb-2">
                      {course.name}
                    </h3>

                    {course.desc && (
                      <p className="text-white/70 text-sm mb-4">
                        {course.desc}
                      </p>
                    )}

                    {/*  FIXED BUTTON */}
                    <Link to={`/program/${course.slug}`}>
                      <button className="mt-3 border border-[#f0e81b] text-[#f0e81b] px-5 py-2 text-sm hover:bg-[#f0e81b] hover:text-black transition">
                        Enquire Now
                      </button>
                    </Link>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>
        </section>

      ))}

    </div>
  )
}