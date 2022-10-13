import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CommonBanner from "../../components/Common/CommonBanner";
import Loader from "../../components/Common/Loader";
import SingleProject from "../../components/Common/SingleProject";
import { projects } from "../../data/home";
import Preloader from "../../js/loader";
import setTitle from "../../js/title";

function PortfolioPage() {

  setTitle('Portfolio')
  useEffect(()=>{
    window.scroll({
			top: 0,
			left: 100,
			behavior: 'instant'
		  });
  });



    // We start with an empty list of items.
    const items =  projects.project;
    const itemsPerPage = 9;
    const [currentItems, setCurrentItems] = useState(items);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);

      }

  const loader = Preloader();
    return ( 
        <>
          <Loader loader={loader}/>
        <CommonBanner title={"Portfolio"} path={"Home - Portfolio"}/>
        <div className="container">

        <div class="input-group  search">
          <span class="input-group-text" id="basic-addon1"><b className="text-white">Search Project</b></span>
          <input type="text" class="form-control" placeholder="Ex: Technology"  aria-describedby="basic-addon1" />
        </div>


        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                currentItems.map((item)=>
                <SingleProject key={item.id} data={item} />
                )
            }
        </div>



<div className="d-flex justify-content-center">

<ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< prev"
        renderOnZeroPageCount={null}
        pageLinkClassName="page-link"
        activeLinkClassName = "active"
        containerClassName="pagination"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        pageClassName="page-item"
      />
</div>

        </div>


        </>
     );
}

export default PortfolioPage;