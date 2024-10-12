import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
// import { useDispatch } from "react-redux";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            {cartItems.length === 0 && <h2>Cart is Empty. Add items to your Cart</h2>}
            <div className="w-8/12 m-auto">
                {cartItems.length > 0 && <button className="my-2 p-2 bg-orange-400 text-white rounded-md" onClick={handleClearCart}>Clear Cart</button>}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;
