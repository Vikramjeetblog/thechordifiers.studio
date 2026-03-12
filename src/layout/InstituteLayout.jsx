import { Outlet } from "react-router-dom";
import InstituteNavbar from "../components/institute/Navbar";
import Footer from "../components/Footer"
const InstituteLayout = () => {
  return (
    <>
      <InstituteNavbar />
      <Outlet />
    <Footer/>
    </>
  );
};

export default InstituteLayout;