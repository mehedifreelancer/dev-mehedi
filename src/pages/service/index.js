import CommonBanner from "../../components/Common/CommonBanner";
import Newsletter from "../../components/Common/Newsletter";
import Services from "../../components/Common/Services";
import Testimonial from "../../components/Common/Testimonial";

function ServicePage() {
    return ( 

        <>
        <CommonBanner title={'Services'}/>
        <Services/>
        <Testimonial/>
        <Newsletter/>
        </>
     );
}

export default ServicePage;