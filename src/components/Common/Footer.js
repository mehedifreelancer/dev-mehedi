import { footer } from "../../data/home";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";

function Footer() {
    return ( 
        <>
        	{/* <!--================Footer Area =================--> */}
	<footer className="footer_area">
		<div className="gap_90"></div>
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-12">
					<div className="footer_top flex-column">
						<div className="footer_logo">
							<a href="#">
								<img src="img/logo.png" alt=""/>
							</a>
							<h4>Follow Me</h4>
						</div>
						<div className="footer_social">
							{
								footer.socials.map((item)=>
								<Link className={item}>
									<FontAwesomeIcon icon={item.icon}/>
								</Link>
								)
							}
						</div>
					</div>
				</div>
			</div>
			<div className="row footer_bottom justify-content-center">
				<p className="col-lg-8 col-sm-12 footer-text">{footer.copyrightText}</p>
			</div>
		</div>
	</footer>
        </>
     );
}

export default Footer;