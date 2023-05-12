import { Link } from"react-router-dom";



const Landing = ()=> {
    return(
        <div>
            <h1>Bienvenidos</h1>
                <button>
                    <Link to="/" >INGRESAR</Link>
                </button>
        </div>
    )
};

export default Landing;
