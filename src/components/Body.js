import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filterRestaurant, setFilterRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        console.log(json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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