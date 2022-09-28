function SingleBlog() {
    return ( 

        <>
                            <article className="row blog_item">
                            <div className="col-md-3">
                                <div className="blog_info text-right">
                                    <div className="post_tag">
                                        <a className="badge bg-primary text-white m-1" href="#">Lifestyle</a>
                                        <a className="badge bg-primary text-white m-1" href="#">Politics,</a>
                                        <a className="badge bg-primary text-white m-1" href="#">Food,</a>
                                    </div>
                                    <ul className="blog_meta list">
                                        <li><a href="#">Mark wiens<i className="lnr lnr-user"></i></a></li>
                                        <li><a href="#">12 Dec, 2017<i className="lnr lnr-calendar-full"></i></a></li>
                                        <li><a href="#">1.2M Views<i className="lnr lnr-eye"></i></a></li>
                                        <li><a href="#">06 Comments<i className="lnr lnr-bubble"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="blog_post">
                                    <img src={require("../../../img/blog/main-blog/m-blog-1.jpg")} alt=""/>
                                    <div className="blog_details">
                                        <a href="single-blog.html"><h2>Astronomy Binoculars A Great Alternative</h2></a>
                                        <p>MCSE boot camps have its supporters and its detractors. Some people do not understand why you should have to spend money on boot camp when you can get the MCSE study materials yourself at a fraction.</p>
                                        <a href="single-blog.html" className="primary_btn"><span>View More</span></a>
                                    </div>
                                </div>
                            </div>
                        </article>
        </>
     );
}

export default SingleBlog;