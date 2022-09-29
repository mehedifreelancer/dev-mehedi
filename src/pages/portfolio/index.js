import { useEffect } from "react";
import CommonBanner from "../../components/Common/CommonBanner";
import Loader from "../../components/Common/Loader";
import SingleProject from "../../components/Common/SingleProject";
import { projects } from "../../data/home";
import Preloader from "../../js/loader";
import setTitle from "../../js/title";

function PortfolioPage() {

  setTitle('Portfolio')
  useEffect(()=>{
    window.scrollTo(0,0);
  });

  const loader = Preloader();
    return ( 
        <>
          <Loader loader={loader}/>
        <CommonBanner title={"Portfolio"} path={"Home - Portfolio"}/>
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                projects.project.map((item)=>
                <SingleProject key={item.id} data={item} />
                )
            }
        </div>
        </div>


        </>
     );
}

export default PortfolioPage;