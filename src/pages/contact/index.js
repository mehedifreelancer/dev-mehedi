import CommonBanner from "../../components/Common/CommonBanner";
import Contact from "../../components/Common/Contact/Contact";
import ContactForm from "../../components/Common/Contact/ContactForm";
import Map from "../../components/Common/Contact/Map";
import setTitle from "../../js/title";

function ContactPage() {

    setTitle('Contact')
    return ( 
        <>
        <CommonBanner title={"Contact With Mehedi"} path={"Home - Contact"}/>
        <Contact/>
        </>
     );
}

export default ContactPage;