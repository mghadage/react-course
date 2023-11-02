import React  from "react";
import ReactDOM from "react-dom/client";

/** 
 * Header
 *      - Logo
 *      - nav items
 * Body
 *      - search
 *      - restaurant container
 *          - restaurant card
 * Footer
 *      - copyright
 *      - address
 *      - contact
 * */ 

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo" src="https://yt3.googleusercontent.com/8sPYO88IjurKq42N5y8NmLktpN3phKwUp3Q435cX3Al4Tnrv5aVnth_qKkjgaOnHf9G5Kzh3eA=s900-c-k-c0x00ffffff-no-rj" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}


const RestaurantCard = () => {
    return (
        <div className="restaurant-card" style={{backgroundColor: "#f0f0f0"}} >
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" />
            <h3>Burger King</h3>
            <h4>Burgers,American, Kandiwali West</h4>
            <h4>4.5 Stars</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
           <div className="search-container">
                Search
           </div>
           <div className="restaurant-comtainer"> 
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
           </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);