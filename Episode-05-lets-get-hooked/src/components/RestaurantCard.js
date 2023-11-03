
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

export default RestaurantCard;