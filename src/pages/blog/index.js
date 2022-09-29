import BlogCats from "../../components/Common/Blog/BlogCats";
import Blogs from "../../components/Common/Blog/Blogs";
import CommonBanner from "../../components/Common/CommonBanner";
import Loader from "../../components/Common/Loader";
import Preloader from "../../js/loader";

function BlogPage() {

    const loader = Preloader();

    return ( 
        <>
        <Loader loader={loader}/>
        <CommonBanner title={"Blog Page" } path={"Home - Blog"}/>
        <BlogCats/>
        <Blogs/>
        </>
     );
}

export default BlogPage;