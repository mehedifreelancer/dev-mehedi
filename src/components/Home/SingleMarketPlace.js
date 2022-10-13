import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

function SingleMarketPlace({ data }) {
  return (
    <>
      <div className="col-lg-4 col-md-4 col-6">
        <OverlayTrigger
          placement="top"
          overlay={
            <Tooltip className="CustomTooltip" id={`tooltip-top`}>
               <div
          className=""
        >
          <div className=" text-center">
            {data.tooltip !== '' ? data.tooltip : 'Nothing to see'}
          </div>
        </div>
            </Tooltip>
          }
        >

        <div
          className="single-brand-item  d-flex justify-content-center align-items-center align-content-center"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          data-bs-title="Tooltip on top"
        >
          <div className="">
            <img
              src={
                data.logo === ""
                  ? require("../../img/placeholder-image.webp")
                  : require(`../../img/companies/${data.logo}`) 
              }
              alt=""
            />
          </div>
        </div>
		</OverlayTrigger>
      </div>
    </>
  );
}

export default SingleMarketPlace;
