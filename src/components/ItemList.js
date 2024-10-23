import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/constants";
import { addItem } from "../Utils/cartSlice";

const ItemList = ({items}) => {
    // console.log(items);
    
    const dispatch = useDispatch();
    
    const handleAddItem = (item) => {
        // dispatch an action
        dispatch(addItem(item));

    }
    return (
        <div>
            {items.map(item => <div data-testid="foodItems" key={item?.card?.info?.id} className="p-2 m-2 border-b-2 text-left">
                <div className="flex justify-between m-2">
                    <div className="flex flex-col w-9/12">
                        <span>{item?.card?.info?.name}</span>
                        <span> ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                        <p className="text-xs">{item.card.info.description}</p>
                        <button className="my-2 w-12 h-6 rounded-md bg-orange-400 text-sm text-white" onClick={() => handleAddItem(item)}>ADD</button>
                    </div>
                    <img src={CDN_URL + item?.card?.info?.imageId} className="w-3/12 mx-3"/>
                </div>
                
            </div>)}
        </div>
    )
}

export default ItemList;