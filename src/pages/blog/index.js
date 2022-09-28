import BlogCats from "../../components/Common/Blog/BlogCats";
import Blogs from "../../components/Common/Blog/Blogs";
import CommonBanner from "../../components/Common/CommonBanner";

function BlogPage() {
    return ( 
        <>
        <CommonBanner title={"Blog Page" } path={"Home - Blog"}/>
        <BlogCats/>
        <Blogs/>
        </>
     );
}

export default BlogPage;