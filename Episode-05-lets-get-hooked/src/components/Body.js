import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";

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

export default Body;