import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import CommonBanner from "../../components/Common/CommonBanner";
import Loader from "../../components/Common/Loader";
import { projects } from "../../data/home";
import Preloader from "../../js/loader";
import setTitle from "../../js/title";

function PortfolioDetails() {

    const loader = Preloader();

    const {id,title} = useParams();
    const data = projects.project.find((item)=> {return item.id == id });
    setTitle(title);


    useEffect(() =>{
        window.scroll({
			top: 0,
			left: 100,
			behavior: 'instant'
		  });
    },[])


    return ( 
       <>
        <Loader loader={loader}/>

        <section className="portfolio_details_area section_gap">
        <CommonBanner title={title} path={'Home - Project - Details'}/>
        <div className="container">
            <div className="portfolio_details_inner">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left_img">
                            <img style={{height:'450px', objectFit:'cover'}} className="img-fluid" src={data.image ===''? require('../../img/placeholder-image.webp'): require(`../../img/portfolio/${data.image}`)} alt=""/>
                        </div>
                    </div>
                    <div className="offset-lg-1 col-lg-5">
                        <div className="portfolio_right_text mt-30">
                            <h4 className="text-uppercase">{title}</h4>
			    <div  dangerouslySetInnerHTML={{__html: data.desc}}> </div>
                            <ul className="list">
                                <li><span>Stacks</span>:
                                {
                                    data.stacks.map((item) => 
                                    <span className="m-1 text-white badge bg-primary ms-2" style={{width:'unset',fontSize:'12px'}}>{item}</span>
                                    )
                                }
                                 </li>
                                <li><span>Client</span>: {data.client}</li>
                                <li><span>Visit link</span><a href={data.link} target="_blank">{data.link}</a></li>
                                <li><span>Completed</span>:  {data.completedDate}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{__html:projects.project[0].desc}} className="desc">

                </div>
            </div>
        </div>
    </section>
       </>
     );
}

export default PortfolioDetails;
