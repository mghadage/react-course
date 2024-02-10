
import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    
    const {restData} = props;
    const {id,name,avgRating,cuisines,areaName,cloudinaryImageId} = restData?.info;
    console.log('restaurant-card: ',restData);

    return (
        
        <div className="h-96 m-2 p-4 w-[245px] bg-gray-100 rounded-lg hover:bg-gray-200">
            <img className="w-56 h-40 rounded-lg" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h2 className="font-bold py-4 text-lg">{name}</h2>
            <h3>{avgRating}/5</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
        </div>
        
    );
};

export default RestaurantCard;