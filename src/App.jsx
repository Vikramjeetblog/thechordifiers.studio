
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Record from "./pages/Record";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/Privacy";
import Refund from "./pages/Refund";
import TermsAndCondition from './pages/TermsAndCondition';
import AboutUs from "./pages/Aboutus";
import TheStudio from "./pages/TheStudio";
import StudioA from "./pages/StudioA";
import StudioB from "./pages/StudioB";
import StudioC from "./pages/StudioC";
import StudioD from "./pages/StudioD";
import Institute from "./pages/Institute";
import Location from "./pages/Location";
import Courses from "./pages/Courses";

import CursorGlow from "./components/CursorGlow";

import MainLayout from "./layout/MainLayout";
import InstituteLayout from "./layout/InstituteLayout";

import Lenis from "lenis";
import ScrollToTop from "./components/ScrollToTop";
import BookCall from "./pages/BookCall";
import Book from "./components/Book";

import ProgramDetails from "./pages/ProgramDetails";
import MentorshipRegister from "./forms/Mentorship";
import Certification from "./forms/Certification";
import Diploma from "./forms/Diploma";
import LabelSignup from "./forms/LabelSignup"
function App() {



  useEffect(() => {

    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };

  }, []);

  return (

    <BrowserRouter>
       <ScrollToTop />
      <div className="bg-black text-white">

        <CursorGlow />

        <Routes>

          {/* MAIN WEBSITE */}
          <Route element={<MainLayout />}>

            <Route path="/" element={<Home />} />
            <Route path="/record" element={<Record />} />
           <Route path="/program/:slug" element={<ProgramDetails />} />
           <Route path="/book" element={<Book />} />
            <Route path="/register/mentorship" element={<MentorshipRegister />} />
              <Route path="/register/certification" element={<Certification />} />
              <Route path="/register/diploma" element={<Diploma />} />
              <Route path="/Label-Signup" element={<LabelSignup />} />

       {/* STUDIO PAGES */}
        <Route path="/thestudio" element={<TheStudio />} />
         <Route path="/studio-b" element={<StudioB />} />
         <Route path="/studio-d" element={<StudioD />} />
          <Route path="/studio-c" element={<StudioC/>}/>
          <Route path="/studio-a" element ={<StudioA/>}/>
            {/* ABOUT SECTION */}
            <Route path="/about-us" element={<AboutUs />} />
           
            <Route path ="/privacy" element = {<PrivacyPolicy/>}/>
             <Route path ="/refund" element = {<Refund/>}/>
            <Route path = "/terms" element ={<TermsAndCondition/>}/>
          </Route>


          {/* INSTITUTE WEBSITE */}
          <Route element={<InstituteLayout />}>

            <Route path="/institute" element={<Institute />} />
            <Route path="/institute/location" element={<Location />} />
            <Route path="/institute/courses" element={<Courses />} />
            <Route path="/institute/contact" element={<Contact />} />
            <Route path="/book-a-call" element={<BookCall />} />
          

          </Route>

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;
