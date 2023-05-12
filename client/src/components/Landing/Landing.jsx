import {NavLink} from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCountriesApi } from "../../redux/actions";

const Landing = ()=>{
    const dispatch = useDispatch();

    const handleChange = ()=> { 
        dispatch(getCountriesApi())
    }
   
    console.log("estoy en landing");
    return (
        <div>
            <h1>Bienvenidos</h1>
            <button onClick={handleChange}>
            <NavLink to= "/home">INGRESAR</NavLink>
            </button>
        </div>
    )
};

export default Landing;
