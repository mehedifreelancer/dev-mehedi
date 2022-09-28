import { useEffect } from "react";
import CommonBanner from "../../components/Common/CommonBanner";
import SingleProject from "../../components/Common/SingleProject";
import { projects } from "../../data/home";
import setTitle from "../../js/title";

function PortfolioPage() {

  setTitle('Portfolio')
  useEffect(()=>{
    window.scrollTo(0,0);
  })
    return ( 
        <>
        <CommonBanner title={"Portfolio"} path={"Home - Portfolio"}/>
        <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                projects.project.map((item)=>
                <SingleProject key={item.id} data={item} />
                )
            }
        </div>

        <nav aria-label="...">
        <ul class="pagination pagination-sm d-flex justify-content-center">
          <li class="page-item active" aria-current="page">
            <span class="page-link">1</span>
          </li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
        </ul>
      </nav>


        </div>


        </>
     );
}

export default PortfolioPage;