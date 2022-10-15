function Map({height}) {
    return ( 
        <>
        <div className="gap_90"></div>
        <div className="container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3650.2611003688353!2d90.41926811536342!3d23.809312692439207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1665820315466!5m2!1sen!2sbd" style={{width:'100%', height:`${height}`, border:'0px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </>
     );
}

export default Map;