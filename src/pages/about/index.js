import About from "../../components/Common/About";
import CommonBanner from "../../components/Common/CommonBanner";
import Loader from "../../components/Common/Loader";
import Testimonial from "../../components/Common/Testimonial";
import MarketPlaces from "../../components/Home/MarketPlaces";
import Preloader from "../../js/loader";
import setTitle from "../../js/title";

function AboutPage() {

    setTitle('About');
    const loader = Preloader();
    return ( 

        <>
        <Loader loader={loader}/>
        <CommonBanner title={"About Me"} path={"Home About"}/>
        <About/>
        <MarketPlaces/>
        <Testimonial/>
        </>
     );
}

export default AboutPage;