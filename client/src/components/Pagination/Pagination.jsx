import { useDispatch, useSelector } from "react-redux";
import { nextPage, previusPage } from "../../redux/actions";
import Style from "./Pagination.module.css";

const Pagination = () => {
  const dispatch = useDispatch();
  const { country, currentPage } = useSelector((state) => state);

  return (
    <div className={Style.div}>
      <div>
      <button  className={Style.buttonIzq}
        disabled={currentPage === 1}
        onClick={() => dispatch(previusPage())}
      >
        
      </button >
      </div>
      <p className={Style.pagina}>
         { currentPage}/{Math.ceil(country.length / 10)}
      </p>
      <button className={Style.buttonDer}
        disabled={currentPage === Math.ceil(country.length / 10)}
        onClick={() => dispatch(nextPage())}
      >
        
      </button>
    </div>
  );
};

export default Pagination;
