import Btn from "./Btn";

function SingleProject({data}) {

    const tag = data.tag.replace(" ","-");
    return ( 

        <>
        			<div className={`col-lg-4 col-md-6 all  element-item ${tag}`}>
						<div className="portfolio_box">
							<div className="single_portfolio">
								<img style={{height:'270px',objectFit:'cover'}} className="img-fluid w-100 img-thumbnail" src={data.image ===''? require('../../img/placeholder-image.webp'): data.image} alt=""/>
								<div className="overlay"></div>
								<a href="img/portfolio/p1.jpg" className="img-gal">
									<div className="icon d-flex flex-column justify-content-between ">
										<a target="_blank" href={`${data.link}`} className="primary_btn btn-sm mb-3 pe-1 ps-1">Visit Site</a>
										<Btn link={`/projectDetails/${data.id}/${data.title}`} btnClass={'primary_btn btn-sm mb-3 pe-1 ps-1'} btnText={'Details'}/>
									</div>
								</a>
							</div>
							<div className="short_info">
								<h4><a href="portfolio-details.html">{data.title}</a></h4>
                                {
                                    data.stacks.map((item,index)=>
                                    <span key={index} className="badge bg-primary me-1">{item}</span>
                                    )
                                }
							</div>
						</div>
					</div>
        </>
     );
}

export default SingleProject;