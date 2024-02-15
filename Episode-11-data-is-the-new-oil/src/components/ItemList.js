import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    
        console.log('items',items);
    return(
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="pt-4 m-2 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div className="py-0">
                            
                            {item.card.info.isVeg ? (
                                <span><i className="inline-block h-4 w-4 bg-green-500 rounded-full"></i></span>
                            ) : (
                                <span><i className="inline-block h-4 w-4 bg-red-500 rounded-full"></i></span>
                            )}
                            
                            
                            {item?.card?.info?.ribbon?.text ? (
                                <span className="text-yellow-500 text-[12px] font-bold">⭐{item?.card?.info?.ribbon?.text}</span>
                            ) : ''}
                            
                            
                            <br></br>
                                <span className="font-bold">{item.card.info.name}</span><br></br>
                                <span>₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span> 
                                {/* <span>{item.card.info.offerTags[0].title+' '+item.card.info.offerTags[0].subTitle}</span> */}
                        </div>
                        <p className="text-xs text-gray-400 my-6">{item.card.info.description}</p>
                    </div>
                    <div className="">
                        <div className="absolute mt-[70]">
                            <button className="p-1 mx-4 bg-white shadow-lg rounded-lg text-green-500 px-4">Add +</button>
                        </div>
                        <img src={CDN_URL+ item.card.info.imageId} className="w-28 h-24 rounded-lg" />
                        
                    </div>
                    
                </div>
                
            ))}
        </div>
    );
}

export default ItemList