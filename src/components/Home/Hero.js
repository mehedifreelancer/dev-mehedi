import { colors, hero } from '../../data/home';
import Btn from '../Common/Btn';

function Hero() {
    return ( 

        <>
        	{/* <!--================ Start Home Banner Area =================--> */}
	<section className="home_banner_area">
		<div className="banner_inner">
			<div className="container">
				<div className="row">
					<div className="col-lg-7">
						<div className="banner_content">
							<h3 className="text-uppercase">Hell0</h3>
							<h1 className="text-uppercase">I am <span style={{color:`${colors.light}`}}>{hero.name}</span></h1>
							<h5 className="text-uppercase">
								<span style={{color:`${colors.light}`}}>{hero.roll}</span>
							</h5>
							<div className="d-flex align-items-center">
								<Btn btnClass={"primary_btn"} link={"/"} btnText={"Hire Me"}/>
								<Btn btnClass={"primary_btn tr-bg"} link={"/"} btnText={"Get CV"}/>

							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="home_right_img">
							<img className="" src={require('../../img/banner/home-right.png')} alt=""/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!--================ End Home Banner Area =================--> */}
        </>
     );
}

export default Hero;