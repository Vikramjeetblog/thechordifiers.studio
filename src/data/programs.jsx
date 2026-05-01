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
    overview: (
      <>
      <p>A complete, in-depth program designed like a professional music college — built for serious career artists.</p>
      </>
      ),
    about:(
      <>
      <p>This is not a short course. This is <strong>professional training.</strong> </p>
      <p>You will learn: </p>
      <ul className="list-disc pl-5 space-y-2">
       <li>DAWs (Ableton, Logic, Studio One)</li>
       <li>Composition & arrangement</li>
       <li>Recording & vocal production</li>
       <li>Mixing & mastering</li>
       <li>Track release preparation</li>
       <li>Career mentorship</li>

      </ul>
      <p>Led by
      <strong>
      Mr. Raull Das, Founder and CEO of The Chordifiers Studio (TCS) & The Chordifiers Music Institute (TCMI) (10+ years industry experience, certified by Berklee College of Music - USA, University of Edinburgh - Scotland & House of EDM - Bangalore) 
      </strong>
       this program reflects real-world experience and Designed & Built inside an
      <strong>
      award-winning studio & record Label environment,
      </strong>
       this level prepares you for real progression and guided by experienced professionals. 
      </p>
      <p>This is for those who want to make music their career. </p>
      </>
      ),
    careers:(
    <ul className="list-disc pl-5 space-y-2">
    <li>Music Producer</li>
    <li>Mixing Engineer</li>
    <li>Composer</li>
    <li>Independent Artist</li>
    </ul>
    ),
  },

  {
    slug: "diploma-sound-designing",
    type: "Diploma",
    hero: {
      overview: { image: d2, title: "Diploma in Sound Designing" },
      about: { image: d2, title: "About the Diploma" },
      careers: { image: d2, title: "Career Opportunities" },
    },
   overview: (
    <>
    <p>Master the art of creating unique sounds and build your identity as a sound designer</p>
    </>
    ),
    
    about:(
    <>
    <p>You will learn: </p>
    <ul  className="list-disc pl-5 space-y-2">
    <li>Synthesis (Serum, Vital, Analog)</li>
    <li>Sound creation (Bass, Leads, FX)</li>
    <li>Cin ematic & EDM sound design</li>
    <li>Sampling & re-synthesis</li>
    <li>Portfolio creation</li>
    </ul>
    <p>
    Led by<strong>
    Mr. Raull Das, Founder and CEO of The Chordifiers Studio (TCS) & The Chordifiers Music Institute (TCMI) (10+ years industry experience, certified by Berklee College of Music - USA, University of Edinburgh - Scotland & House of EDM - Bangalore)
    </strong>
     this program reflects real-world experience and Designed & Built inside an 
<strong> award-winning studio & record Label environment, </strong>
    award-winning studio & record Label environment, 
    </p>
    <p>Build your signature sound. </p>
    </>
    ),
    careers:(
    <ul className="list-disc pl-5 space-y-2">
    <li>Sound Designer</li>
    <li>Sound Designer</li>
    <li>Film/Game Audio Designer</li>
   
    </ul>
    ),
  },
  {
  slug: "diploma-music-business",
  type: "Diploma",
  hero: {
    overview: { image: d3, title: "Diploma in Music Production & Music Business" },
    about: { image: d3, title: "About the Diploma" },
    careers: { image: d3, title: "Career Opportunities" },
  },

  overview: (
    <>
      <p>
        Learn both creation and business — because talent alone is not enough.
      </p>
    </>
  ),

  about: (
    <>
      <p><strong>ABOUT THE DIPLOMA</strong></p>

      <p>You will learn:</p>

      <ul className="list-disc pl-5 space-y-2">
        <li>Music production & recording</li>
        <li>Distribution & monetization</li>
        <li>Branding & PR</li>
        <li>Marketing strategies</li>
        <li>Release planning</li>
      </ul>

      <p>
        Led by <strong>Mr. Raull Das, Founder and CEO</strong> of The Chordifiers Studio (TCS) 
        & The Chordifiers Music Institute (TCMI) (10+ years industry experience, certified by 
        Berklee College of Music - USA, University of Edinburgh - Scotland & House of EDM - Bangalore), 
        this program reflects real-world experience and is designed & built inside an 
        <strong> award-winning studio & record label environment</strong>.
      </p>

      <p>
        This level prepares you for real progression and is guided by experienced professionals.
      </p>

      <p><strong>Turn music into a business.</strong></p>
    </>
  ),

  careers: (
    <ul className="list-disc pl-5 space-y-2">
      <li>Independent Artist</li>
      <li>Music Entrepreneur</li>
      <li>Label Artist</li>
    </ul>
  ),
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
    overview:(
      <>
     <p>Start your music journey with strong fundamentals inside a structured system designed for beginners. </p>
      </>
      ),
    about:(
      <>
      <p>This level builds your<strong> core musical foundation,</strong> which most self-taught artists lack. </p>
      <p>You will learn: </p>
      <ul className="list-disc pl-5 space-y-2">
      <li>Music history & evolution</li>
      <li>Music theory fundamentals</li>
      <li>Staff notation</li>
     <li> Core musical understanding </li>
      </ul>
      <p>Led by <strong>Mr. Raull Das, Founder and CEO of The Chordifiers Studio (TCS) & The Chordifiers Music Institute (TCMI) (10+ years industry experience, certified by Berklee College of Music - USA, University of Edinburgh - Scotland & House of EDM - Bangalore) this program reflects real-world experience and Designed inside an award-winning studio environment,
      </strong>this level prepares you for real progression.</p>
     <p>Perfect for beginners who want to start the right way.</p>
      </>
      ),
    careers:(
      <ul className="list-disc pl-5 space-y-2">
      <li>Beginner Music Producer</li>
      <li>Songwriter (Foundation Level)</li>
      <li> Music Student Pathway  </li>
    
      </ul>
      ),
  },

  {
    slug: "cert-intermediate",
    type: "Course",
    hero: {
      overview: { image: c2, title: "Certification Level 2" },
      about: { image: c2, title: "About the Course" },
      careers: { image: c2, title: "Career Opportunities" },
    },
    overview:(
      <>
     <p>Move from theory to creation — start building real tracks and understanding production workflows.  </p>
      </>
      ),
    about:(
      <>
      <p>This level focuses on <strong>practical music creation. </strong>  </p>
      <p>You will learn: </p>
      <ul className="list-disc pl-5 space-y-2">
      <li>Deep DAW understanding</li>
      <li>Time signatures & rhythm structure</li>
      <li>Melody writing</li>
     <li>Chord progressions</li>
     <li>Plugin basics</li>
     <li>Creating your first track</li>
      </ul>
      <p>Led by <strong>Mr. Raull Das, Founder and CEO of The Chordifiers Studio (TCS) & The Chordifiers Music Institute (TCMI) (10+ years industry experience, certified by Berklee College of Music - USA, University of Edinburgh - Scotland & House of EDM - Bangalore)
      </strong> this program reflects real-world experience and Designed inside an <strong> award-winning studio environment,</strong>this level prepares you for real progression.    </p>
     <p>This is where you start sounding like a producer.</p>
      </>
      ),
    careers:(
      <ul className="list-disc pl-5 space-y-2">
      <li>Independent Music Creator</li>
      <li>Beginner Producer</li>
      <li>Beat Maker</li>
    
      </ul>
      ),
  },

  {
    slug: "cert-advanced",
    type: "Course",
    hero: {
      overview: { image: c3, title: "Certification Level 3" },
      about: { image: c3, title: "About the Course" },
      careers: { image: c3, title: "Career Opportunities" },
    },
    overview:(
    <>
    <p>Step into real production workflows — recording, editing, and mixing.</p>
    </>
    ),
    about: (
    <>
    <p>Now you enter<strong> real studio-level processes.</strong></p>
    <p>You will learn: </p>
    <ul className="list-disc pl-5 space-y-2">
    <li>Recording vocals & instruments</li>
    <li>Gain staging techniques</li>
    <li>Audio editing & arrangement</li>
    <li>Basic mixing & mastering</li>
    <li>Practical production workflow</li>
    </ul>
    <p>Led by 
    <strong>
     Mr. Raull Das, Founder and CEO of The Chordifiers Studio (TCS) & The Chordifiers Music Institute (TCMI) (10+ years industry experience, certified by Berklee College of Music - USA, University of Edinburgh - Scotland & House of EDM - Bangalore)
    </strong> 
    this program reflects real-world experience and Designed inside
    <strong>
    n award-winning studio environment,
    </strong>
     this level prepares you for real progression. 
    </p>
    <p>This is where hobby turns into skill. </p>
    </>
    ),
    careers:(
    <ul className="list-disc pl-5 space-y-2">
    <li>Music Producer</li>
    <li>Recording Artist</li>
    <li>Studio Assistant</li>
  
    </ul>

    ),
  },

  {
    slug: "cert-pro",
    type: "Course",
    hero: {
      overview: { image: c4, title: "Certification Level 4" },
      about: { image: c4, title: "About the Course" },
      careers: { image: c4, title: "Career Opportunities" },
    },
    overview: (
    <>
    <p>Become industry-ready with advanced production, mixing, and career training. </p>
    </>
    ),
    about:(
    <>
    <p>This is your transition into a <strong>rofessional artist/producer.</strong></p>
    <p>You will learn:</p>
    <ul className="list-disc pl-5 space-y-2">
    <li>Advanced mixing & mastering</li>
    <li>Sound design tools & plugins</li>
    <li>Pro track arrangement</li>
    <li>Industry secrets & workflows</li>
    <li>Career strategy & artist positioning</li>
     
    </ul>
    <p>Includes<strong> 6 months internship </strong>inside a real studio environment.</p>
    <p>Led by
    <strong>
    Mr. Raull Das, Founder and CEO of The Chordifiers Studio 
    (TCS) & The Chordifiers Music Institute 
    (TCMI) (10+ years industry experience, 
    certified by Berklee College of Music -
     USA, University of Edinburgh - Scotland 
     & House of EDM - Bangalore)
    </strong>
     this program reflects real-world experience and Designed inside an
     <strong>award-winning studio environment</strong>
     his level prepares you for real progression. 
    </p>
    <p>This is where you become industry-ready. </p>
    </>
    ),
    careers:(
    <ul className="list-disc pl-5 space-y-2">
    <li>Professional Music Producer</li>
    <li>Mixing & Mastering Engineer</li>
  <li>Sound Designer</li>
  <li>Studio Professional</li>
    </ul>
    ),
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
    overview: (
      <>
    
      
      <p>Fast-track your journey from confusion to clarity with direct 1:1 mentorship inside an award-winning studio & record label ecosystem. </p>
      <p>This is not a course — this is structured guidance designed to shape your identity, direction, and long-term career in music.</p>
      </>
      ),
   about: (
  <>
   
    <p>
      Most artists struggle not because of lack of talent — but because they lack direction.
    </p>

    <p>
      At The Chordifiers Music Institute (TCMI), <strong>Mr. Raull Das, Founder and CEO</strong> 
      (10+ years industry experience, certified by Berklee College of Music - USA, 
      University of Edinburgh - Scotland & House of EDM - Bangalore), this program gives you 
      what most artists never get — <strong>real mentorship.</strong>
    </p>

    <p>You will learn how to:</p>

    <ul className="list-disc pl-5 space-y-2">
      <li>Build a clear artist identity</li>
      <li>Plan your long-term career path</li>
      <li>Understand real music growth strategies</li>
      <li>Avoid costly industry mistakes</li>
      <li>Stay consistent with structured guidance</li>
    </ul>

    <p>
      This program reflects real-world experience and is designed inside an 
      <strong> award-winning music production facility</strong>, where learning is practical, strategic, and real.
    </p>

    <p>
     This is for artists who are serious about building a career — not just making songs.
    </p>
  </>
),
    careers: (
    <ul className="list-disc pl-5 space-y-2">
      <li>Independent Artist / Performer</li>
      <li>Music Producer / Composer</li>
      <li>DJ / Live Performer</li>
      <li>Songwriter</li>
      <li>Artist Brand Developer</li>
    </ul>
    )

    ,
  },

  {
    slug: "artist-mindset",
    type: "Program",
    hero: {
      overview: { image: s2, title: "Unbreakable Artist Mindset" },
      about: { image: s2, title: "About the Program" },
      careers: { image: s2, title: "Career Growth" },
    },
    overview:(
    <>
    <p> Your talent means nothing without discipline, clarity, and execution. </p>
    <p>This program is built to transform your mindset into a <strong>professional, unstoppable artist system. </strong></p>
    </>
    
    ), 
    about: (
    <>
    <p>Every artist faces the same hidden enemies — self-doubt, overthinking, inconsistency, and fear. </p>
    <p>This program is designed to break those patterns. </p>
    <p>Inside our award-winning creative ecosystem, guided by industry professionals, you will: </p>
    <ul className="list-disc pl-5 space-y-2">
      <li>Eliminate self-doubt & overthinking</li>
      <li>Build discipline like a working artist</li>
      <li>Overcome creative blocks</li>
      <li>Develop emotional strength & clarity </li>
      <li>Execute consistently without fear</li>
    </ul>
    <p>Led by<strong> Mr. Raull Das, Founder and CEO of
     The Chordifiers Studio (TCS) & The Chordifiers Music
      Institute (TCMI) (10+ years industry
       experience, certified by Berklee
        College of Music - USA, University
         of Edinburgh - Scotland & House of
          EDM - Bangalore) this program 
          reflects real-world experience
           from an award winning studio & record label 
           environment.</strong> </p>
      <p>This is not motivation. This is <strong>mental reprogramming for artists.</strong> </p>
      <p>If your mindset is not strong, your career will not survive. </p>
    </>
    ),
    careers:(
    <ul className="list-disc pl-5 space-y-2">
      <li>Professional Artist / Performer</li>
      <li>Creative Entrepreneur</li>
      <li>Content Creator / Music Influencer</li>
      <li>Independent Musician</li>
    
    </ul>
    ),
  },

  {
    slug: "music-business-awareness",
    type: "Program",
    hero: {
      overview: { image: s3, title: "Music Business Awareness (Parents)" },
      about: { image: s3, title: "About the Program" },
      careers: { image: s3, title: "Industry Awareness" },
    },
    overview: (
    <>
    <p>Understand how a career in music actually works — from industry structure to income models — so you can confidently support your child’s passion.</p>
    </>
    ),
    about:(
    <>
    <p>One of the biggest barriers in music careers is <strong>lack of awareness — especially from families.</strong></p>
    <p> At TCMI, we bridge that gap.</p>
    <p>This This program helps parents understand:</p>
    <ul className="list-disc pl-5 space-y-2"> 
    <li> How the modern music industry works</li>
    <li> Real career paths in music </li>
    <li>Income & monetization opportunities</li>
    <li> Long-term career stability in creative fields</li>
    <li> How to support and guide their child effectively</li>
    </ul>
    <p>Led by <strong>Mr. Raull Das, Founder and CEO of The Chordifiers Studio (TCS)
     & The Chordifiers Music Institute (TCMI)  (10+ years industry experience, certified by Berklee College of Music - USA, University of Edinburgh - Scotland & House of EDM - Bangalore) this program reflects real-world experience from an award-winning studio & record label environment.</strong></p>
<p>When parents understand the industry, artists grow faster.</p> 
    </>

    ),
    careers:(
    <ul className="list-disc pl-5 space-y-2"> 
    <li>Music Production </li>
    <li>Sound Engineering </li>
    <li>Artist Branding & Marketing </li>
    <li>Performance & Live Music</li>
    
    </ul>
    ),
  },

];