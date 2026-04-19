// Diploma images
import d1 from "../assets/2.webp";
import d2 from "../assets/12.webp";
import d3 from "../assets/13.webp";
import d4 from "../assets/15.webp";
import d5 from "../assets/1.webp";

// Certification images
import c1 from "../assets/31.webp";
import c2 from "../assets/32.webp";
import c3 from "../assets/33.webp";
import c4 from "../assets/35.webp";

// Signature images
import s1 from "../assets/16.webp";
import s2 from "../assets/17.webp";
import s3 from "../assets/18.webp";
export const programs = [

  /* ================= DIPLOMA ================= */

  {
    slug: "diploma-music-production",
    type: "Diploma",
    hero: {
      overview: { image: d1, title: "Diploma in Music Production" },
      about: { image: d1, title: "About the Diploma" },
      careers: { image: d1, title: "Career Opportunities" },
    },
    overview: "Learn music production from basics to advanced workflows.",
    about: "Covers DAW, beat making, mixing & mastering.",
    careers: ["Music Producer", "Composer", "Sound Designer"],
  },

  {
    slug: "diploma-music-production-business",
    type: "Diploma",
    hero: {
      overview: { image: d3, title: "Diploma in Music Production & Music Business" },
      about: { image: d3, title: "About the Diploma" },
      careers: { image: d3, title: "Career Opportunities" },
    },
    overview: "Production + business skills combined.",
    about: "Learn monetization, distribution & branding.",
    careers: ["Producer", "Music Entrepreneur"],
  },

  {
    slug: "diploma-sound-designing",
    type: "Diploma",
    hero: {
      overview: { image: d2, title: "Diploma in Sound Designing" },
      about: { image: d2, title: "About the Diploma" },
      careers: { image: d2, title: "Career Opportunities" },
    },
    overview: "Master sound design for film & media.",
    about: "Learn audio editing, Foley & sound creation.",
    careers: ["Sound Designer", "Audio Engineer"],
  },

  {
    slug: "diploma-sound-production",
    type: "Diploma",
    hero: {
      overview: { image: d4, title: "Diploma in Sound Designing & Music Production" },
      about: { image: d4, title: "About the Diploma" },
      careers: { image: d4, title: "Career Opportunities" },
    },
    overview: "Dual skills in sound + production.",
    about: "Complete creative audio workflow training.",
    careers: ["Producer", "Sound Designer"],
  },

  {
    slug: "diploma-complete",
    type: "Diploma",
    hero: {
      overview: { image: d5, title: "Diploma in Sound Designing, Music Production & Business" },
      about: { image: d5, title: "About the Diploma" },
      careers: { image: d5, title: "Career Opportunities" },
    },
    overview: "Complete industry-ready diploma.",
    about: "Covers production, sound design & business.",
    careers: ["Producer", "Entrepreneur"],
  },

  /* ================= CERTIFICATION ================= */

  {
    slug: "cert-basic",
    type: "Course",
    hero: {
      overview: { image: c1, title: "Certification Level 1" },
      about: { image: c1, title: "About the Course" },
      careers: { image: c1, title: "Career Opportunities" },
    },
    overview: "Beginner music production.",
    about: "Learn basics of DAW & sound.",
    careers: ["Beginner Producer"],
  },

  {
    slug: "cert-intermediate",
    type: "Course",
    hero: {
      overview: { image: c2, title: "Certification Level 2" },
      about: { image: c2, title: "About the Course" },
      careers: { image: c2, title: "Career Opportunities" },
    },
    overview: "Intermediate production.",
    about: "Improve workflow & creativity.",
    careers: ["Intermediate Producer"],
  },

  {
    slug: "cert-advanced",
    type: "Course",
    hero: {
      overview: { image: c3, title: "Certification Level 3" },
      about: { image: c3, title: "About the Course" },
      careers: { image: c3, title: "Career Opportunities" },
    },
    overview: "Advanced techniques.",
    about: "Professional mixing & mastering.",
    careers: ["Advanced Producer"],
  },

  {
    slug: "cert-pro",
    type: "Course",
    hero: {
      overview: { image: c4, title: "Certification Level 4" },
      about: { image: c4, title: "About the Course" },
      careers: { image: c4, title: "Career Opportunities" },
    },
    overview: "Professional level training.",
    about: "Industry-ready workflows.",
    careers: ["Professional Producer"],
  },

  /* ================= SIGNATURE ================= */

  {
    slug: "artist-mentorship",
    type: "Program",
    hero: {
      overview: { image: s1, title: "Artist Mentorship Program" },
      about: { image: s1, title: "About the Program" },
      careers: { image: s1, title: "Career Opportunities" },
    },
    overview: "1:1 mentorship for artists.",
    about: "Build your sound & identity.",
    careers: ["Independent Artist"],
  },

  {
    slug: "artist-mindset",
    type: "Program",
    hero: {
      overview: { image: s2, title: "Unbreakable Artist Mindset" },
      about: { image: s2, title: "About the Program" },
      careers: { image: s2, title: "Career Growth" },
    },
    overview: "Mental strength training.",
    about: "Develop discipline & mindset.",
    careers: ["Confident Artist"],
  },

  {
    slug: "music-business-awareness",
    type: "Program",
    hero: {
      overview: { image: s3, title: "Music Business Awareness (Parents)" },
      about: { image: s3, title: "About the Program" },
      careers: { image: s3, title: "Industry Awareness" },
    },
    overview: "Understand music careers.",
    about: "Guide your child better.",
    careers: ["Informed Parents"],
  },

];