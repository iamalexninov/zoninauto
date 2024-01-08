import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../pages/Home/Home";
import AboutPreview from "../components/AboutPreview/AboutPreview";
import Catalogue from "../pages/Catalogue/Catalogue";
import Contact from "../pages/Contact/Contact";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPreview />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
