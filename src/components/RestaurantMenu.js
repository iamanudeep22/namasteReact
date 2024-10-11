import Shimmer from './Shimmer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../Utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null ) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card.card.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    
    
    
    return (
        <div className="text-center py-3">
            <h1 className="font-bold text-lg">{name}</h1>
            <h3 className="font-semibold">{cuisines.join(', ')}</h3>
            <h3 className="font-semibold">{costForTwoMessage}</h3>

            {
                categories.map( (category, index) => (<RestaurantCategory key={index} 
                    data={category?.card?.card} 
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                    />))
            }
        </div>
    )
}

export default RestaurantMenu;