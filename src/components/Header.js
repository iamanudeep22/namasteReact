import { Link } from "react-router-dom";
import { useState } from "react";
import { LOGO_URL } from "../Utils/constants";


const Header = () => {

    // let btnName = "Login";

    const [btnName, setBtnName] = useState("Login");


    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link className="undln-none" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="undln-none" to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link className="undln-none" to="/contact">Contact</Link>
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