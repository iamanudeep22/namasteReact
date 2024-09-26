import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../Utils/useRestaurantMenu';

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null ) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card.card.info;
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards)
    
    return (
        <div className="flex flex-col justify-center items-center py-2">
            <h1 className="font-bold text-lg">{name}</h1>
            <h3 className="font-semibold">{cuisines.join(', ')}</h3>
            <h3 className="font-semibold">{costForTwoMessage}</h3>
            <ul className="font-semibold bg-gray-200 p-4 rounded-md">
                <span className="bg-orange-400 text-white p-1 my-2 rounded-lg font-bold text-base">Menu:</span>
                {
                    itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;