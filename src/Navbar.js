const Navbar = () => {
    return ( 
        <div className="navbar">
            
                <div className="navlogo">JUMIA</div>
                <form action="" className="navSearch">
                    <input type="text" className="navText" placeholder="Search for products brands and categories"  />
                    <button className="navSearchButton">SEARCH</button>
                </form>
                
                <li>Account</li>
                <li>Help</li>
                <li className="navlastchild">Cart</li>
           
        </div>
     );
}
 
export default Navbar;