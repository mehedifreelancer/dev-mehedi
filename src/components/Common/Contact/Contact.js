import ContactForm from "./ContactForm";
import Map from "./Map";

function Contact() {
    return ( 
        <>
        <section className="contact_area ">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="contact_info">
                        <div className="info_item">
                            <i className="lnr lnr-home"></i>
                            <h6>Dhaka,Bangladesh</h6>
                            <p>Nadda, Baridhara</p>
                        </div>
                        <div className="info_item">
                            <i className="lnr lnr-phone-handset"></i>
                            <h6><a href="#">01781873064</a></h6>
                            <p>Don't forget to knock through mobile</p>
                        </div>
                        <div className="info_item">
                            <i className="lnr lnr-envelope"></i>
                            <h6><a href="#">mehediaiyub451@gmail.com</a></h6>
                            <p>Send me your mail anytime!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <ContactForm/>
                </div>
            </div>
            <Map height={"450px"}/>
        </div>
    </section>
        </>
     );
}

export default Contact;