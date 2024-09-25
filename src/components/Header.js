import { Link } from "react-router-dom";
import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";
import useOnlineStatus from "../Utils/useOnlineStatus";


const Header = () => {

    // let btnName = "Login";

    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status : {onlineStatus? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link className="undln-none" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="undln-none" to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link className="undln-none" to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className="undln-none" to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;