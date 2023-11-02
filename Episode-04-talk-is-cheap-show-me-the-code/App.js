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


const RestaurantCard = (props) => {

    const {resName,courisal,avgRating,costForTwo,deliveryTime} = props.restData;

    return (
        <div className="restaurant-card" style={{backgroundColor: "#f0f0f0"}} >
            <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf" />
            <h3>{resName}</h3>
            <h4>{courisal}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>₹{costForTwo / 100} FOR TWO </h4>
            <h4>{deliveryTime} Minutes</h4>
        </div>
    );
};

const restList = [
                    {id:"1",resName:"Burger King",courisal:"Burgers,American, Kandiwali West",avgRating:"4.5",costForTwo:"40000",deliveryTime:"30"},
                    {id:"2",resName:"KFC",courisal:"Burgers, Ulwe, Navi Mumbai",avgRating:"4.0",costForTwo:"20000",deliveryTime:"10"},
                    {id:"3",resName:"Sardarjis Kichan",courisal:"Biryani, Sector 17, Ulwe",avgRating:"3.8",costForTwo:"30000",deliveryTime:"20"},
                    {id:"4",resName:"Roti Boti",courisal:"Roti Boti, Sector 16, Ulwe",avgRating:"4.7",costForTwo:"50000",deliveryTime:"15"},
                ];

// not use key <<<<< use index as key <<<<<<<<<<<<<<<<<< use unique id as key

const Body = () => {
    return (
        <div className="body">
           <div className="search-container">
                Search
           </div>
           <div className="restaurant-comtainer"> 
            {
                restList.map((restaurant) => (<RestaurantCard key={restaurant.id} restData={restaurant}  />))
            }
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