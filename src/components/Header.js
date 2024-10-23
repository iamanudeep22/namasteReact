import { Link } from "react-router-dom";
import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useSelector } from "react-redux";


const Header = () => {

    // let btnName = "Login";

    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);


    return (
        <div className="flex justify-between items-center shadow-lg m-4">
            <div className="logo-container">
                <img className="w-32" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul className="flex p-4 m-4 gap-5 items-center">
                    <li>
                        Online Status : {onlineStatus? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link className="hover:text-orange-500" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="hover:text-orange-500" to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link className="hover:text-orange-500" to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className="hover:text-orange-500" to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link className="hover:text-orange-500" to="/cart">Cart ({cartItems.length} items)</Link>
                    </li>
                    <button className="p-1 m-1 w-24 border border-orange-500 text-orange-500 rounded-xl hover:bg-orange-400 hover:text-white" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;