import { intro } from "../../data/home";
import Btn from "./Btn";

function About() {
    return ( 
        <>
        	{/* <!--================ Start About Us Area =================--> */}
	<section className="about_area ">
		<div className="gap_90"></div>
		<div className="container">
			<div className="row justify-content-start align-items-center">
				<div className="col-lg-5">
					<div className="about_img">
						<img className="" src={require("../../img/about-us.png")} alt=""/>
					</div>
				</div>

				<div className="offset-lg-1 col-lg-5">
					<div className="main_title text-left">
						<div dangerouslySetInnerHTML={{__html:intro.heading}}>

						</div>
						<div dangerouslySetInnerHTML={{__html:intro.desc}}>

						</div>

						<Btn btnClass={"primary_btn"} link={"/"} btnText={"Download CV"} />

					</div>
				</div>
			</div>
		</div>
		<div className="gap_90"></div>
	</section>
	{/* <!--================ End About Us Area =================--> */}
        </>
     );
}

export default About;