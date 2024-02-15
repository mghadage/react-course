
import CardShimmer from "./CardShimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showItems, setShowIndex] = useState(null);

    if(resInfo == null) 
    {
        return <CardShimmer />
    } 

    const info = resInfo?.data?.cards[0]?.card?.card?.info;
    const categories = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="text-center ">
            <div className="w-7/12 my-4 m-auto p-4 divide-y divide-dashed border-b-8">

                <div className="flex justify-between text-justify">
                    <div className="">
                        <h1 className="font-bold mt-6 text-lg">{info?.name}</h1>
                        <p>{info?.cuisines.join(', ')} <br /> {info?.areaName} </p>
                        <p className="mt-4 flex">
                            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu" alt="DISTANCE_FEE_NON_FOOD_LM" className="RestaurantMessage_icon__1qCvu pr-2" aria-hidden="true" /> {info?.feeDetails?.message}</p>
                    </div>
                    
                    <span className="mt-6">{info?.avgRating}/5 - {info?.totalRatingsString}</span>
                </div>
                <div className="mt-4 p-4 flex text-justify">
                    <svg className="RestaurantTimeCost_icon__8UdT4" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle r="8.35" transform="matrix(-1 0 0 1 9 9)" stroke="#3E4152" stroke-width="1.3"></circle><path d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z" fill="#3E4152"></path></svg>
                    <span className="pl-2 pr-4 mt-[-4]">{info?.sla?.slaString}</span>
                    <svg className="RestaurantTimeCost_icon__8UdT4" width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" fill="none"><circle cx="9" cy="9" r="8.25" stroke="#3E4152" strokeWidth="1.5"></circle><path d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z" fill="#3E4152"></path></svg>
                    <span className="pl-2 pr-4 mt-[-4]">{info?.costForTwoMessage}</span>
                </div>
                
            </div>
            
            {categories.map((category,index) => (<RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} showItems={ showItems == index ? true : false} setShowIndex={() => setShowIndex(index)}  />))}
        </div>
    );
}


export default RestaurantMenu;