import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/About Us/AboutUs";
import Catalogue from "../pages/Catalogue/Catalogue";
import Contact from "../pages/Contact/Contact";
import SignIn from "../pages/Sign In/SignIn";
import SignUp from "../pages/Sign Up/SignUp";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
