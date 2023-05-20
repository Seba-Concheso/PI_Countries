import { Link } from "react-router-dom";
import  Style  from "./NotFound.module.css";
const NotFound = () => {
    return (
        <div className={Style.notfound}>
        <div className={Style.conteiner}>
        <h1>404</h1>
        <h2>Upps!!, Aquí no hay nada.</h2>
        <Link to="/home">
            <button className={Style.button}>Go back to Home</button>
        </Link>
        </div>
        </div>
    );
    }


export default NotFound;
