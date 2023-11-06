import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import CardShimmer from "./CardShimmer";



// not use key <<<<< use index as key <<<<<<<<<<<<<<<<<< use unique id as key
const Body = () => {

    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    const [filteredListOfRestaurant,setFilteredListOfRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2183307&lng=72.9780897&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setListOfRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredListOfRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    }


    // conditional rendering = redering on the basis of condition 

    return listOfRestaurant.length == 0 ? <CardShimmer /> : (
        <div className="body">
           <div className="filter-container">
            <div className="search-container">
                <input type="text" className="search-inputbox" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <button className="search-btn" onClick={() => {
                    const filteredData = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredListOfRestaurant(filteredData);
                }}>search</button>

                <button className="filter-btn" onClick={() => {
                    const filteredData = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                    setFilteredListOfRestaurant(filteredData);
                }}>Top Rated Restaurant</button>
            </div>
           </div>
           <div className="restaurant-container"> 
            {
                filteredListOfRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} restData={restaurant}  />))
            }
           </div>
        </div>
    );
}

export default Body;