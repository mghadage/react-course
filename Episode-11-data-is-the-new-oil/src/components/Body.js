import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import CardShimmer from "./CardShimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


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
        console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like your Offline!! Please check your internet conection</h1>;

    // conditional rendering = redering on the basis of condition 

    return listOfRestaurant.length == 0 ? <CardShimmer /> : (
        <div className="container mx-auto px-[155]">
            <div className="flex">
                
                <div className="m-2 p-4">
                    <input type="text" placeholder="Search..." className="border border-solid bg-white h-10 px-5 pr-10 mt-4 rounded-full text-sm focus:outline-none" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />

                    <button className="px-4 py-2 bg-green-400 m-4 rounded-lg" onClick={() => {
                        const filteredData = listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredListOfRestaurant(filteredData);
                    }}>search</button>

                    
                </div>
                <div className="m-2 p-2 flex items-center">
                    <button className="px-4 py-2 bg-gray-400 rounded-lg" onClick={() => {
                            const filteredData = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                            setFilteredListOfRestaurant(filteredData);
                        }}>Top Rated Restaurant</button>
                </div>
            </div>
           <div className="flex flex-wrap "> 
            {
                filteredListOfRestaurant.map((restaurant) => (<Link to={ "/restaurants/"+restaurant.info.id}><RestaurantCard key={restaurant.info.id} restData={restaurant}  /></Link>))
            }
           </div>
        </div>
    );
}

export default Body;