import { services } from "../../data/home";
import SingleService from "./SingleService";

function Services() {
    return ( 
        <>
        	{/* <!--================ Start Features Area =================--> */}
	<section className="features_area">
		<div className="gap_90"></div>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-8 text-center">
					<div className="main_title">
						<h2>{services.heading} </h2>
						<p dangerouslySetInnerHTML={{__html:services.desc}}>
						</p>
					</div>
				</div>
			</div>
			<div className="row feature_inner d-flex justify-content-center">
				{
                    services.service.map((item)=>
                    <SingleService key={item.id} data={item} />
                    )
                }
			</div>
		</div>
	</section>
	{/* <!--================ End Features Area =================--> */}
        </>
     );
}

export default Services;