import pic1 from "./img/mainpic.png";
import pic2 from "./img/sidepic1.jpg";
import pic3 from "./img/sidepic2.jpg";

const Main = () => {
    
    return ( 
        <div className="content">
            <nav className="side-nav">
              
                    <li>Supermarket</li>
                    <li>Health and Beauty</li>
                    <li>Home and Office</li>
                    <li>Phones and tablets</li>
                    <li>Computing</li>
                    <li>Electronics</li>
                    <li>Fashion</li>
                    <li>Baby Products</li>
                    <li>Gaming</li>
                    <li>Sporting Goods</li>
                    <li>Automobile</li>
                    <li>Other Categories</li>
                
            </nav>

            <main className="main">
                    <img src={pic1} alt="" className="mainpic" />

            </main>

            <div className="side-pic">
                <img src={pic3} alt="jumia pic" className="pic3"/>
                <img src= {pic2} alt="jumia pic" className="pic2"/>
            </div>
        </div>
     );
}
 
export default Main;