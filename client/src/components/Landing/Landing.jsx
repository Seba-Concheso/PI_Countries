import {NavLink} from "react-router-dom";
import Style from "./Landing.module.css";





const Landing = ()=>{
   
    return (
        <div className={Style.div}>
            <h1 className={Style.h1} >Bienvenidos</h1>
            <button className={Style.button} >
            <NavLink to= "/home">INGRESAR</NavLink>
            </button>
        </div>
    )
};

export default Landing;
