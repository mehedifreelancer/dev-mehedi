import Slider from "react-slick";
import { testimonial } from "../../data/home";
import SingleTestimonial from "./SingleTesttimonial";


function Testimonial() {

    const settings = {
        dots: true,
        infinite: true,
		arrows:false,
		autoplay:true,
		autoplaySpeed:6000,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 2,
		responsive: [
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			},
			{
				breakpoint: 425,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				}
			  },
		  ]
      };


    return ( 
        
        <>
        	{/* <!--================ Start Testimonial Area =================--> */}
	<div className="testimonial_area ">
	<div className="gap_90"></div>
		<div className="container">
			<div className="d-flex justify-content-center">
				<div className="col-lg-8 text-center">
					<div className="main_title">
						<div dangerouslySetInnerHTML={{__html:testimonial.heading}}>

						</div>
						<div dangerouslySetInnerHTML={{__html:testimonial.desc}}>
							
						</div>
					</div>
				</div>
			</div>
				<div className="testi_slider">
        			<Slider {...settings}>
						{
							testimonial.reviews.map((item)=>
							<SingleTestimonial key={item.id} data={item} />
							)
						}
                    </Slider>
        		</div>
		</div>
	<div className="gap_90"></div>
	</div>
	{/* <!--================ End Testimonial Area =================--> */}
        </>
     );
}

export default Testimonial;