import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import CardShimmer from "./CardShimmer";



// not use key <<<<< use index as key <<<<<<<<<<<<<<<<<< use unique id as key
const Body = () => {

    const [listOfRestaurant,setListOfRestaurant] = useState([]);

    const filterData = () => {
        const filteredData = listOfRestaurant.filter((res) => res.info.avgRating > 4);
        setListOfRestaurant(filteredData);
    }

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2183307&lng=72.9780897&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        // console.log(json.data.cards);
        // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurant(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    }


    // conditional rendering = redering on the basis of condition 
    if(listOfRestaurant.length === 0)
    {
        return <CardShimmer />
    }

    return (
        <div className="body">
           <div className="filter-container">
                <button className="filter-btn" onClick={filterData}>Top Rated Restaurant</button>
           </div>
           <div className="restaurant-container"> 
            {
                listOfRestaurant.map((restaurant) => (<RestaurantCard key={restaurant.info.id} restData={restaurant}  />))
            }
           </div>
        </div>
    );
}

export default Body;