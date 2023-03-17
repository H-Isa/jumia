import CartItems from "./CartItems";
import Header from "./header";
import Main from "./main";
import Navbar from "./Navbar";
import Product from "./Products";


const Homepage = () => {
    return ( 
        <div>
            <Header />
            <Navbar />
            <Main />
            <Product />
            <CartItems />
        </div>
     );
}
 
export default Homepage;