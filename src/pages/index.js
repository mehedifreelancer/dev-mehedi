import About from "../components/Common/About";
import Loader from "../components/Common/Loader";
import Newsletter from "../components/Common/Newsletter";
import Projects from "../components/Common/Projects";
import Services from "../components/Common/Services";
import Testimonial from "../components/Common/Testimonial";
import Hero from "../components/Home/Hero";
import MarketPlaces from "../components/Home/MarketPlaces";
import '../data/dynamic.js';
import Preloader from "../js/loader";
import setTitle from "../js/title";

function HomePage() {

    setTitle('Home');
    const loader = Preloader();

    return ( 
        <>
    
    <Loader loader={loader}/>
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