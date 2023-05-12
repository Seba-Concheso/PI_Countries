import {NavLink} from "react-router-dom";

const Landing = ()=>{
    console.log("estoy en landing");
    return (
        <div>
            <h1>Bienvenidos</h1>
            <button>
            <NavLink to= "/home">INGRESAR</NavLink>
            </button>
        </div>
    )
};

export default Landing;
