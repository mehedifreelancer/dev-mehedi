
import { useEffect, useState } from "react";
import { render } from "react-dom";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Footer from "./components/Common/Footer";
import Navbar from "./components/Common/Navbar";
import HomePage from "./pages";
import AboutPage from "./pages/about";
import BlogPage from "./pages/blog";
import BlogDetails from "./pages/blog/details";
import ContactPage from "./pages/contact";
import PortfolioPage from "./pages/portfolio";
import PortfolioDetails from "./pages/portfolio/details";
import ServicePage from "./pages/service";


function App() {



  return(
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/service" element={<ServicePage/>} />
      <Route path="/about" element={<AboutPage/>} />
      <Route path="/portfolio" element={<PortfolioPage/>} />
      <Route path="/projectDetails/:id/:title" element={<PortfolioDetails/>} />
      <Route path="/blogDetails" element={<BlogDetails/>} />
      <Route path="/contact" element={<ContactPage/>} />
      <Route path="/blog" element={<BlogPage/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )       
       
}

export default App;