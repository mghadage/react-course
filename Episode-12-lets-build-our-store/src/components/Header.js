import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    // console.log(loggedInUser);

    return (
        // <div className="container mx-auto px-32 flex h-20 justify-between bg-teal-50 shadow-lg">
        <div className="container mx-auto px-32 flex h-20 justify-between shadow-lg">
            <div className="logo-container">
                <img className="w-20" alt="logo" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Status {onlineStatus ? "🟢" : "🔴" }
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    
                    <li className="px-4"><button className="login-btn" onClick={() => { btnName == "Login" ? setBtnName("Logout") : setBtnName("Login") }}>{btnName}</button></li>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;