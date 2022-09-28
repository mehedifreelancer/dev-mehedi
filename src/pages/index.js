import About from "../components/Common/About";
import Footer from "../components/Common/Footer";
import Navbar from "../components/Common/Navbar";
import Newsletter from "../components/Common/Newsletter";
import Projects from "../components/Common/Projects";
import Services from "../components/Common/Services";
import Testimonial from "../components/Common/Testimonial";
import Hero from "../components/Home/Hero";
import MarketPlaces from "../components/Home/MarketPlaces";
import '../data/dynamic.js';
import setTitle from "../js/title";

function HomePage() {

    setTitle('Home');
    return ( 
        <>
    
    <Hero/>
    <About/>
    <MarketPlaces/>
    <Services/>
    <Projects/>
    <Testimonial/>
    <Newsletter/>

        </>
     );
}

export default HomePage;