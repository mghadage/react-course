import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cardSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <div className="m-4 p-4 text-center">
            <h1 className="font-bold text-2xl">Cart Items</h1>
            <button className="px-3 py-2 bg-slate-500 text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
            <div className="w-7/12 m-auto">
                { cartItems.length == 0 && <h1 className="mt-8">Cart is empty. Add items to the cart!</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;