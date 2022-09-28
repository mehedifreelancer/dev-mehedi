import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function SingleTestimonial({data}) {
    return ( 
        <>
                            <div className="testi_item ">
                                <div className='marker d-flex  justify-content-center align-items-center'>
                                    <a href={data.endorsmentLink}><p className='text-white mb-0'>Endorsment Link</p></a>
                                </div>
        				<div className="row">
        					<div className="col-lg-2">
        						<img className='client-img' src={data.clientImage ===''? require('../../img/placeholder-image.webp'): data.clientImage} alt=""/>
        					</div>
        					<div className="col-lg-10">
        						<div className="testi_text">
        							<div className='d-flex gap-4'>
                                    <h4>{data.clientName}</h4>
                                    <span><img className='flag' src={data.countryFlag === ''? require('../../img/placeholder-image.webp'): data.countryFlag} ></img></span>
                                    </div>
                                    <span>from: {data.countryName}</span>
                                    <div className='star d-flex gap-1'>
                                        {
                                            data.stars.map((item)=>
                                            <FontAwesomeIcon className={`${item == 1 ? 'gold_star':''}`} icon={faStar} />
                                            )
                                        }
                                    </div>
									<p className='mt-3'><i>"{data.comment}"</i></p>
        						</div>
        					</div>
        				</div>
        			</div>
        </>
     );
}

export default SingleTestimonial;