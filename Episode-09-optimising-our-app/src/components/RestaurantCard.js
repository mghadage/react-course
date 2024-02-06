
import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    
    const {restData} = props;
    const {id,name,avgRating,cuisines,areaName,cloudinaryImageId} = restData?.info;
    console.log('restaurant-card: ',restData);

    return (
        
        <div className="restaurant-card" style={{backgroundColor: "#f0f0f0"}} >
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h2>{name}</h2>
            <h3>{avgRating}/5</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{areaName}</h4>
        </div>
        
    );
};

export default RestaurantCard;