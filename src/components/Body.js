import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { SWIGGY_API } from "../Utils/constants";




const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filterRestaurant, setFilterRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    // console.log(listOfRestaurants)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();

        // console.log(json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus){
        return(
            <h1>Looks like you're offline!! Please check your internet connections</h1>
        )
    }

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="flex gap-8 ml-8">

                <div className="m-1">
                    <input type="text" data-testid="searchInput" placeholder="Search for Restaurants" className="p-1 bg-gray-200 rounded-l-xl text-orange-500 outline-none" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}/>
                    <button className="p-1 w-20  rounded-r-xl bg-orange-400 text-white" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )

                        setFilterRestaurant(filteredRestaurants)

                    }}>Search</button>
                </div>

                <button className="p-1 m-1 w-64 bg-orange-400 text-white rounded-xl" onClick={() => {
                    const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4.2)
                    setFilterRestaurant(filteredList)
                }
                }>Top Rated Restaurants</button>
            </div>
            <div className="flex flex-wrap justify-center items-center">
                {
                    filterRestaurant.map(
                        (restaurants) => <Link key={restaurants?.info?.id} to={"/restaurants/"+restaurants?.info?.id} className="undln-none"><RestaurantCard  resData={restaurants}/></Link>
                    )
                }

            </div>
        </div>
    )
}

export default Body;