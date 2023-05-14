import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesFront } from "../../redux/actions";
import Country from "../Country/Country";
import Pagination from "../Pagination/Pagination";
import Style from "./Home.module.css";








const Home = () => {
  const dispatch = useDispatch();
  
  const {country, currentPage} = useSelector((state) => state);
  const countries= country;
  useEffect(() => {
    dispatch(getCountriesFront());
  }, []);






  return (
    <div>
   
          <button>
            <NavLink to="/form">Agregar actividad</NavLink>
           </button>
      <div className={Style.country}>
      {countries.slice((currentPage -1)*10, currentPage *10).map(({ id, name, flag, continent, activities }) => {
        return (
          <Country
          key={id}
          id={id}
          name={name}
          flag={flag}
          continent={continent}
          
          />
          );
        })}
      </div>
      <Pagination></Pagination>
    </div>
  );
};

export default Home;
