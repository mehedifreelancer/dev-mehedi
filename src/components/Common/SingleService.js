function SingleService({data}) {
    return ( 
        <>
        <div className="col-lg-3 col-md-6 ">
					<div className="feature_item">
						<img className='img-fluid w-100 shadow rounded' src={data.image ===''? require('../../img/placeholder-image.webp'): data.image} alt=""/>
						<h4>{data.title}</h4>
                        <div className='badge bg-primary p-2'>Level : {data.quality}</div>
					</div>
				</div>
        </>
     );
}

export default SingleService;