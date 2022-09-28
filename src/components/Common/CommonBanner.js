function CommonBanner({title,path}) {
    return ( 
        <>
        <section class="banner_area ">
        <div class="banner_inner d-flex align-items-center">
            <div class="container">
                <div class="banner_content text-center">
                    <h2>{title}</h2>
                    <div class="page_link">
                        <p style={{color:"white"}}>{path}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="gap_90"></div>
    </section>
        </>
     );
}

export default CommonBanner;