import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useState } from "react";

// not use key <<<<< use index as key <<<<<<<<<<<<<<<<<< use unique id as key
const Body = () => {

    const [listOfRestaurant,steListOfRestaurant] = useState(restList);

    const filterData = () => {
        const filteredData = listOfRestaurant.filter((res) => res.avgRating > 4);
        steListOfRestaurant(filteredData);
    }

    return (
        <div className="body">
           <div className="filter-container">
                <button className="filter-btn" onClick={filterData}>Top Rated Restaurant</button>
           </div>
           <div className="restaurant-comtainer"> 
            {
                listOfRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.id} restData={restaurant}  />))
            }
           </div>
        </div>
    );
}

export default Body;