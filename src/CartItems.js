import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartItems = () => {
    const itemsList =useSelector(state=>state.cart.itemsList)
    return ( 
        <div className="cart-container">
            <h3>Cart Items</h3>
            {itemsList.map(item=>{
                const {id, name, price, quantity, totalPrice} = item;
                return(
                    <CartItem key={id} id={id} itemName={name} itemPrice={price} quantity={quantity} totalPrice={totalPrice} />
                )
            })}
                
        </div>
     );
}
 
export default CartItems;