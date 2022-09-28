import Map from "./Map";

function ContactForm() {
    return ( 
        <form className="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
        <div className="col-md-6">
            <div className="form-group">
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name"/>
            </div>
            <div className="form-group">
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject"/>
            </div>

        </div>

        <div className="col-md-6">
        <div className="form-group">
                <textarea className="form-control" name="message" id="message" rows="1" placeholder="Enter Message"></textarea>
            </div>
        </div>

        <div className="col-md-12 text-right d-flex justify-content-end">
            <button type="submit" value="submit" className="primary_btn">
                <span>Send Message</span>
            </button>
        </div>
    </form>
     );
}

export default ContactForm;