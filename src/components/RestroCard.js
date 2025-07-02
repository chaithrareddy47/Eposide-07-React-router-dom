import { CDN_URL } from "../utils/Data"

const RestroCard = ({ resData }) => {
    const { name, cloudinaryImageId, areaName, costForTwo, cuisines } =
      resData?.info;
  return (
    <div className="res-container">
      <div className="res-image">
        <img src={`${CDN_URL}${cloudinaryImageId}`} alt="" />
      </div>
      <div className="res-desc">
        <h2>{name}</h2>
              <p>{costForTwo}</p>
              
              <p>{ areaName}</p>
              <p>{ cuisines.join(", ")}</p>
      </div>
    </div>
  );
}

export default RestroCard
