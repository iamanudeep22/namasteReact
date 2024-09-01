import { CDN_URL } from "../Utils/constants";

const RestaurantCard = ({resData}) => {

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info
    return (
        <div className="res-card">
            <img src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;