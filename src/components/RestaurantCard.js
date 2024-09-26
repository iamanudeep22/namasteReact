import { CDN_URL } from "../Utils/constants";

const RestaurantCard = ({resData}) => {

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData?.info
    return (
        <div className="p-3 m-3 w-[250px] bg-gray-100 rounded-md hover:bg-gray-200">
            <img src={CDN_URL+cloudinaryImageId} className="rounded-lg"/>
            <h3 className="py-1 font-bold text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4 className="font-medium  bg-orange-400 text-white rounded-sm w-20 px-2">{avgRating} stars</h4>
            <h4 className="font-semibold">{costForTwo}</h4>
            <h4 className="font-medium">{sla.slaString}</h4>
        </div>
    )
}

export default RestaurantCard;