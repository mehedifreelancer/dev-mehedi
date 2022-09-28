import BlogSidebar from "../../components/Common/Blog/BlogSidebar";
import CommentArea from "../../components/Common/Blog/CommentArea";
import SingleBlog from "../../components/Common/Blog/SingleBlog";

function BlogDetails() {
    return ( 

        <>
            <section class="blog_area single-post-area section_gap">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 posts-list">
                    <div class="single-post row">
                        <SingleBlog/>
                        <CommentArea/>
                    </div>


                </div>
                <div class="col-lg-4">
                    <BlogSidebar/>
                </div>
            </div>
        </div>
    </section>
        </>
     );
}

export default BlogDetails;