import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { footer } from "../../../data/home";

function BlogSidebar() {
    return ( 
        <>
        <div className="blog_right_sidebar">
                        <aside className="single_sidebar_widget search_widget">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search Posts"/>
                                <span className="input-group-btn">
                                    <button className="btn btn-default" type="button"><i className="lnr lnr-magnifier"></i></button>
                                </span>
                            </div>
                            <div className="br"></div>
                        </aside>
                        <aside className="single_sidebar_widget author_widget">
                            <img className="author_img rounded-circle" src={require("../../../img/blog/author.png")} alt=""/>
                            <h4>Charlie Barber</h4>
                            <p>Senior blog writer</p>
                            <div className="social_icon d-flex justify-content-center">
                                {
                                    footer.socials.map((item)=>
                                    <Link><FontAwesomeIcon icon={item.icon}/></Link>
                                    )
                                }
                            </div>
                            <p>Boot camps have its supporters andit sdetractors. Some people do not understand why you should have to spend money on boot camp when you can get. Boot camps have itssuppor ters andits detractors.</p>
                            <div className="br"></div>
                        </aside>
                        <aside className="single_sidebar_widget popular_post_widget">
                            <h3 className="widget_title">Popular Posts</h3>
                            <div className="media post_item d-flex">
                                <img src={require("../../../img/blog/popular-post/post1.jpg")} alt="post"/>
                                <div className="media-body">
                                    <a href="single-blog.html"><h3>Space The Final Frontier</h3></a>
                                    <p>02 Hours ago</p>
                                </div>
                            </div>

                            <div className="media post_item d-flex">
                                <img src={require("../../../img/blog/popular-post/post1.jpg")} alt="post"/>
                                <div className="media-body">
                                    <a href="single-blog.html"><h3>Space The Final Frontier</h3></a>
                                    <p>02 Hours ago</p>
                                </div>
                            </div>

                            <div className="br"></div>
                        </aside>
                        <aside className="single_sidebar_widget ads_widget">
                            <a href="#"><img className="img-fluid w-100" src={require("../../../img/blog/add.jpg")} alt=""/></a>
                            <div className="br"></div>
                        </aside>
                        <aside className="single_sidebar_widget post_category_widget">
                            <h4 className="widget_title">Post Catgories</h4>
                            <ul className="list cat-list">
                                <li>
                                    <a href="#" className="d-flex justify-content-between">
                                        <p>Technology</p>
                                        <p>37</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-flex justify-content-between">
                                        <p>Lifestyle</p>
                                        <p>24</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-flex justify-content-between">
                                        <p>Fashion</p>
                                        <p>59</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-flex justify-content-between">
                                        <p>Art</p>
                                        <p>29</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-flex justify-content-between">
                                        <p>Food</p>
                                        <p>15</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-flex justify-content-between">
                                        <p>Architecture</p>
                                        <p>09</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="d-flex justify-content-between">
                                        <p>Adventure</p>
                                        <p>44</p>
                                    </a>
                                </li>															
                            </ul>
                            <div className="br"></div>
                        </aside>

                        <aside className="single-sidebar-widget tag_cloud_widget">
                            <h4 className="widget_title">Tag Clouds</h4>
                            <ul className="list">
                                <li><a href="#">Technology</a></li>
                                <li><a href="#">Fashion</a></li>
                                <li><a href="#">Architecture</a></li>
                                <li><a href="#">Fashion</a></li>
                                <li><a href="#">Food</a></li>
                                <li><a href="#">Technology</a></li>
                                <li><a href="#">Lifestyle</a></li>
                                <li><a href="#">Art</a></li>
                                <li><a href="#">Adventure</a></li>
                                <li><a href="#">Food</a></li>
                                <li><a href="#">Lifestyle</a></li>
                                <li><a href="#">Adventure</a></li>
                            </ul>
                        </aside>
                    </div>
        </>
     );
}

export default BlogSidebar;