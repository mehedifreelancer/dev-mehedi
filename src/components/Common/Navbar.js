import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { hero, nav } from "../../data/home";

function Navbar() {

	const [pathName, setPathName] = useState('');
	useEffect(() =>{
		setPathName(window.location.pathname);
		window.scroll({
			top: 0,
			left: 100,
			behavior: 'instant'
		  });
		const body = document.querySelector("body");
		body.classList.add("hidden");
	},[pathName])


    return ( 
        <>

		
                	{/* <!--================ Start Header Area =================--> */}


	<header className="header_area ">
		<div className="main_menu">
			<nav className="navbar navbar-expand-lg navbar-light ">
				<div className="container">
					{/* <!-- Brand and toggle get grouped for better mobile display --> */}
					<Link className="navbar-brand logo_h" to={'/'}><h1 className="gradient">{hero.logoName}</h1></Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
						<span className="navbar-toggler-icon"></span>
						<span className="navbar-toggler-icon"></span>
					</button>
					{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
					<div className="collapse navbar-collapse " id="navbarSupportedContent">
						<ul className="nav navbar-nav menu_nav justify-content-end">
							{
								nav.map((item)=>
								<li onClick={() => setPathName(window.location.pathname)} className={`nav-item ${item.link === pathName ? 'active':''}` }><Link to={item.link} className="nav-link" >{item.title}</Link></li>
								)
							}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	</header>
	{/* <!--================ End Header Area =================--> */}
        </>
     );
}

export default Navbar;