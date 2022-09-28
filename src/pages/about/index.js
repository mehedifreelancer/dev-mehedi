import About from "../../components/Common/About";
import CommonBanner from "../../components/Common/CommonBanner";
import Testimonial from "../../components/Common/Testimonial";
import MarketPlaces from "../../components/Home/MarketPlaces";
import setTitle from "../../js/title";

function AboutPage() {

    setTitle('About')
    return ( 

        <>
        <CommonBanner title={"About Us"} path={"Home About"}/>
        <About/>
        <MarketPlaces/>
        <Testimonial/>
        </>
     );
}

export default AboutPage;