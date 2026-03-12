
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Record from "./pages/Record";
import Contact from './pages/Contact'
import Institute from "./pages/Institute";
import Location from "./pages/Location";
import Courses from "./pages/Courses";   // ✅ NEW PAGE

import CursorGlow from "./components/CursorGlow";

import MainLayout from "./layout/MainLayout";
import InstituteLayout from "./layout/InstituteLayout";

import Lenis from "lenis";

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

      <div className="bg-black text-white">

        <CursorGlow />

        <Routes>

          {/* MAIN WEBSITE */}
          <Route element={<MainLayout />}>

            <Route path="/" element={<Home />} />
            <Route path="/record" element={<Record />} />
       
          </Route>


          {/* INSTITUTE WEBSITE */}
          <Route element={<InstituteLayout />}>

            <Route path="/institute" element={<Institute />} />
            <Route path="/institute/location" element={<Location />} />

            {/* ✅ NEW ROUTE */}
            <Route path="/institute/courses" element={<Courses />} />
          <Route path = '/institute/contact' element={<Contact/>}/>
          </Route>

        </Routes>

      </div>

    </BrowserRouter>

  );
}

export default App;

