import { colors, contact, hero, marketPlace } from "../../data/home";
import SingleMarketPlace from "./SingleMarketPlace";

function MarketPlaces() {
    return ( 

        <>
        	{/* <!--================ Srart Brand Area =================--> */}
	<section className="brand_area ">
	<div className="gap_90"></div>
		<div className="container">

		<div className="row justify-content-center">
				<div className="col-lg-8 text-center">
					<div className="main_title">
						<h2>Carere <span style={{color:`${colors.light}`}}>&</span> Companies </h2>
						<p>{marketPlace.desc}</p>
					</div>
				</div>
			</div>

			<div className="row justify-content-center">
				<div className="col-lg-6">
					<div className="row">
						{
                            marketPlace.market.map((item) =>
                            <SingleMarketPlace key={item.id} data={item} />
                            )
                        }
					</div>
				</div>
				<div className="offset-lg-2 col-lg-4 col-md-12">
					<div className="client-info">
						<div className="d-flex mb-50">
							<span className="lage">{hero.exp}</span>
							<span className="smll">Years Experience Working</span>
						</div>
						<div className="call-now d-flex">
							<div>
								<span className="fa fa-phone"></span>
							</div>
							<div className="ml-15">
								<p style={{textTransform:'capitalize'}}>call me with on click</p>
								<a href="tel:+8801781873064" ><h3>(+880)- {contact.phone}</h3></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="gap_90"></div>
	</section>
	{/* <!--================ End Brand Area =================--> */}
        </>
     );
}

export default MarketPlaces;