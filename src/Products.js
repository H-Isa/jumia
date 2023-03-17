import iphone from "./img/iphone13.jpg"
import macbook from "./img/macbook.jpg"
import backpack from "./img/backpack.jpg"
import calculator from "./img/calculator.jpg"
import airpods from "./img/airpods.jpg"
import hoodie from "./img/hoodie.jpg"
import iwatch from "./img/iwatch.jpg"
import balenciaga from "./img/balenciaga.jpg"
import tecno from "./img/tecno.jpg"
import laptop from "./img/laptop.jpg"
import cap from "./img/cap.jpg"
import box from "./img/boxes.jpg"

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "./store/cart-slice"


const itemsList = [
    {id: "1",
     itemPic: iphone,
     itemName: "Iphone",
     itemPrice: 100,
    },

    {id: "2",
     itemPic: macbook,
     itemName: "Macbook",
     itemPrice: 100,
    },

    {id: "3",
     itemPic: backpack,
     itemName: "Backpack",
     itemPrice: 100,
    },

    {id: "4",
     itemPic: calculator,
     itemName: "Calculator",
     itemPrice: 100,
    },

    {id: "5",
     itemPic: airpods,
     itemName: "Airpods",
     itemPrice: 100,
    },

    {id: "6",
     itemPic: hoodie,
     itemName: "Hoodie",
     itemPrice: 100,
    },

    {id: "7",
     itemPic: iwatch,
     itemName: "Iwatch",
     itemPrice: 100,
    },

    {id: "8",
     itemPic: balenciaga,
     itemName: "Balenciaga",
     itemPrice: 100,
    },

     {id: "9",
     itemPic: tecno,
     itemName: "Tecno",
     itemPrice: 100,
    },

    {id: "10",
     itemPic: laptop,
     itemName: "Laptop",
     itemPrice: 100,
    },

    {id: "11",
     itemPic: cap,
     itemName: "Cap",
     itemPrice: 100,
    },

    {id: "12",
     itemPic: box,
     itemName: "Set of boxes",
     itemPrice: 100,
    }
        ]

const Product = ({id, itemName, itemPrice}) => { 
        const dispatch = useDispatch();
        const addToCart = (item)=>{
            const {id, itemName, itemPrice} = item;
            dispatch(cartActions.addToCart({
                id,
                itemName,
                itemPrice
            }))
        }

    return ( 

        <div className="products" >
            <h3>Top Selling Items</h3>
                <div className = "productList">
            {itemsList.map(item=>{
                const {id, itemPic, itemName, itemPrice} = item;
                return(
                <div key={id}>  
                    <div className="singleProduct" >
                       <img src={itemPic} alt="picture" className="productpic" />
                         <p>{itemName}</p>
                         <p>{itemPrice}</p>
                         <button onClick={()=>addToCart(item)} className="addToCartBtn">Add to Cart</button>
                     </div>
                    </div>
                )
            })}
            </div>
        </div>

     );
}
 
export default Product;

