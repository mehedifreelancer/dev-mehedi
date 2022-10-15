import { colors, footer, hero } from '../../data/home';
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
							<h3 className="text-uppercase">Hello</h3>
							<h1 className="text-uppercase">I am <span style={{color:`${colors.light}`}}>{hero.name}</span></h1>
							<h5 className="text-uppercase">
								<span style={{color:`${colors.light}`}}>{hero.roll}</span>
							</h5>
							<div className="d-flex align-items-center">
								<a  className='primary_btn px-3' target='_blank' href={footer.socials[1].link}> Profile</a>
								<a className='primary_btn  px-3' href="../../file/Mehedi_Hasan's_resume.pdf" download> Get CV </a>

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