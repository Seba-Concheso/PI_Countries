import { Link } from "react-router-dom";
import Style from "./NavBar.module.css";


const NavBar = () => {
    return (
    <nav>
        <div className={Style.navbar}>
            <Link to="/home">Home</Link>
            
        
        </div>
    </nav>
    );
};

export default NavBar;