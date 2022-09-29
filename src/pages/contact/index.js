import CommonBanner from "../../components/Common/CommonBanner";
import Contact from "../../components/Common/Contact/Contact";
import ContactForm from "../../components/Common/Contact/ContactForm";
import Map from "../../components/Common/Contact/Map";
import Loader from "../../components/Common/Loader";
import Preloader from "../../js/loader";
import setTitle from "../../js/title";

function ContactPage() {

    setTitle('Contact');
    const loader = Preloader();
    return ( 
        <>
        <Loader loader={loader}/>
        <CommonBanner title={"Contact With Mehedi"} path={"Home - Contact"}/>
        <Contact/>
        </>
     );
}

export default ContactPage;