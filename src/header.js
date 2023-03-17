import { useNavigate } from "react-router-dom";


const Header = () => {
    let navigate = useNavigate()
    return ( 
        <div>
            <ul className="header">
                <li className='first-li'>Sell on jumia</li>
                <li>Jumia</li>
                <li onClick={()=>navigate("/order")}>Order</li>
                <li>Food</li>
                <li>Party</li>
                <li>Prime</li>
                <li className="last-li">Logistics</li>
            </ul>
        </div>
     );
}
 
export default Header;