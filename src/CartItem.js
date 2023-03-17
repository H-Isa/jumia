import { useDispatch } from "react-redux";
import { cartActions } from "./store/cart-slice";


const CartItem = ({id, itemName, itemPrice, quantity, totalPrice}) => {
    
    const dispatch = useDispatch()

    const decrementQuantity =()=>{
       dispatch(cartActions.decrementQuantity(id))
    }
    const incrementQuantity =()=>{
            dispatch(cartActions.addToCart({
                id,
                itemName,
                itemPrice
            }))
    }
    const removeItem = ()=>{
        dispatch(cartActions.removeItem(id))
    }

    return ( 
        <div className="singleItemContainer" >
            <p>{itemName}</p>
            <p>${itemPrice}</p>
            <p>${totalPrice}</p>
            <p>x{quantity}</p>
            <button className="cart-btn" onClick={decrementQuantity}>-</button>
            <button className="cart-btn" onClick={incrementQuantity}>+</button>
            <button className="remove-btn" onClick={removeItem}>Remove Item</button>
        </div>
     );
}
 
export default CartItem;