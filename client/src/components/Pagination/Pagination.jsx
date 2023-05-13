import { useDispatch, useSelector } from "react-redux";
import { nextPage, previusPage } from "../../redux/actions";



const Pagination = () => {
    const dispatch= useDispatch();
    const {country, currentPage} = useSelector(state => state);
   

return (
    <div>

        <button
        disabled ={currentPage ===1}
        onClick={()=> dispatch(previusPage())}>Prev:
        </button>
        <p>Página: {currentPage}/{Math.ceil(country.length/10)}</p>
        <button
        disabled ={currentPage === Math.ceil(country.length/10)}
        onClick={()=> dispatch(nextPage())}>Prox:
        </button>
    </div>
)
}


export default Pagination;