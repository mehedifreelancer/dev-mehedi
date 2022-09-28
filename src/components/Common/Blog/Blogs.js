import BlogSidebar from "./BlogSidebar";
import SingleBlog from "./SingleBlog";

function Blogs() {
    return ( 

        <>
            <section className="blog_area">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="blog_left_sidebar">
                        <SingleBlog/>
                        <nav className="blog-pagination justify-content-center d-flex">
                            <ul className="pagination">
                                <li className="page-item">
                                    <a href="#" className="page-link" aria-label="Previous">
                                        <span aria-hidden="true">
                                            <span className="lnr lnr-chevron-left"></span>
                                        </span>
                                    </a>
                                </li>
                                <li className="page-item"><a href="#" className="page-link">01</a></li>
                                <li className="page-item active"><a href="#" className="page-link">02</a></li>
                                <li className="page-item"><a href="#" className="page-link">03</a></li>
                                <li className="page-item"><a href="#" className="page-link">04</a></li>
                                <li className="page-item"><a href="#" className="page-link">09</a></li>
                                <li className="page-item">
                                    <a href="#" className="page-link" aria-label="Next">
                                        <span aria-hidden="true">
                                            <span className="lnr lnr-chevron-right"></span>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-lg-4">
                    <BlogSidebar/>
                </div>
            </div>
        </div>
    </section>
        </>
     );
}

export default Blogs;