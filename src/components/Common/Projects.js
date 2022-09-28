import { useEffect, useRef, useState } from "react"
import Isotope from "isotope-layout";
import { projects } from "../../data/home";
import SingleProject from "./SingleProject";
import Btn from "./Btn";


function Projects({s}) {


        // React isotop helped link https://codepen.io/ilovepku/pen/zYYKaYy

        // init one ref to store the future isotope object
        const isotope = useRef()
        // store the filter keyword in a state
        const [filterKey, setFilterKey] = useState('*');
        const [data, setData] = useState(projects.project);
        

       const change = (tabname) =>{
          if(tabname === '*'){
            setData(projects.project);
            setFilterKey(tabname);

          }else{
            let filterData = projects.project.filter((item)=>{ return tag(item.tag) === tabname});
            setData(filterData);
            setFilterKey(tabname);
          }
       }

          const tag = (text) =>{
            return text.replace(" ","-");
          }



    return ( 
        <>
        	{/* <!--================Start Portfolio Area =================--> */}
	<section className="portfolio_area" id="portfolio">
    <div className="gap_90"></div>
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div dangerouslySetInnerHTML={{__html:projects.heading}} className="main_title text-left">
						
					</div>
				</div>
			</div>
			<div className="filters portfolio-filter">
				<ul>
					{
                        projects.allTags.map((item) =>
                        <button onClick={() =>change(`${tag(item)}`)} className={`button is-checked ${tag(item) === filterKey ? 'active' : ''}`}  data-filter={tag(item)}>{tag(item) == "*" ? 'All' : tag(item)}</button>

                        )
                    }
				</ul>
			</div>
	
			<div className="filters-content">
				<div className="row portfolio-grid justify-content-start">
                    {
                        data.slice(0,6).map((item)=>
                        <SingleProject key={item.id} data={item}/>
                        )
                    }
				</div>
			</div>
      <div className="text-center">
      <Btn  link={'/portfolio'} btnClass={'primary_btn'} btnText={'See All'}></Btn>
      </div>
		</div>
    <div className="gap_90"></div>


	</section>
	{/* <!--================End Portfolio Area =================--> */}
        </>
     );
}

export default Projects;