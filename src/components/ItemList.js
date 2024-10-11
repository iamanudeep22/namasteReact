import { CDN_URL } from "../Utils/constants";

const ItemList = ({items}) => {
    // console.log(items);
    return (
        <div>
            {items.map(item => <div key={item?.card?.info?.id} className="p-2 m-2 border-b-2 text-left">
                <div className="flex justify-between m-2">
                    <div className="flex flex-col w-9/12">
                        <span>{item?.card?.info?.name}</span>
                        <span> ₹ {item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <img src={CDN_URL + item?.card?.info?.imageId} className="w-3/12 mx-3"/>
                </div>
                
            </div>)}
        </div>
    )
}

export default ItemList;