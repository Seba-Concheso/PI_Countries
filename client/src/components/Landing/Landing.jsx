import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import Style from "./Landing.module.css";
import { getCountriesByApi } from "../../redux/actions";





const Landing = ()=>{
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountriesByApi())
    }  , [dispatch])

    const handleClick = ()=>{
        dispatch(getCountriesByApi())
    }


   
    return (
        <div className={Style.div}>
            <h1 className={Style.h1} >Bienvenidos</h1>
            <button onClick={handleClick} className={Style.button} >
            <NavLink to= "/countries">INGRESAR</NavLink>
            </button>
        </div>
    )
};

export default Landing;
