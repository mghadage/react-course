
import CardShimmer from "./CardShimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if(resInfo == null) 
    {
        return <CardShimmer />
    } 

    const info = resInfo?.data?.cards[0]?.card?.card?.info;
    const offers = resInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;


    return (
        <div className="menu">
            <div className="restaurant-info">
                <h1>{info?.name}</h1>
                <h4>{info?.avgRating}/5 - {info?.totalRatingsString}</h4>
                <p>{info?.cuisines.join(', ')} <br /> {info?.areaName} </p>
                <p>{info?.feeDetails?.message}</p>
                <hr />
            </div>
            
            <h3>{info?.costForTwoMessage}</h3>
            <ul>
                {
                    offers.map((offers) => (<li key={offers.info.header}>{offers.info.header} | {offers.info.couponCode} - {offers.info.description}</li>))
                }
            </ul>
            <hr />
        </div>
    );
}


export default RestaurantMenu;