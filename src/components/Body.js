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

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();

        console.log(json);
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
            <div className="filter">

                <div className="search">
                    <input type="text" placeholder="Search for Restaurants" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}/>
                    <button className="search-btn" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        )

                        setFilterRestaurant(filteredRestaurants)

                    }}>Search</button>
                </div>

                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4.2)
                    setFilterRestaurant(filteredList)
                }
                }>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
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