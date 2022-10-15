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
				<div className="col-lg-6">
					<div className="about_img">
						<img className="img-fluid " src={require("../../img/banner/71619-coding.gif")} alt=""/>
					</div>
				</div>

				<div className="col-lg-6">
					<div className="main_title text-left">
						<div dangerouslySetInnerHTML={{__html:intro.heading}}>

						</div>
						<div className="intro" dangerouslySetInnerHTML={{__html:intro.desc}}>

						</div>

						<div className="text-center ">
						<a className='primary_btn  px-3' href="../../file/Mehedi_Hasan's_resume.pdf" download> Download CV </a>

						</div>
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