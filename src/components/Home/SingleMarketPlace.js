function SingleMarketPlace({data}) {
    return ( 

        <>
        <div className="col-lg-4 col-md-4 col-sm-6">
			<div className="single-brand-item d-table">
				<div className="d-table-cell text-center">
									<img src={data.logo ===''? require('../../img/placeholder-image.webp'): data.logo} alt="" />
								</div>
							</div>
						</div>
        </>
     );
}

export default SingleMarketPlace;