import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterContinent, getCountriesFront, orderByPopulation, orderByName} from "../../redux/actions";
import Country from "../Country/Country";

import Pagination from "../Pagination/Pagination";
import Style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const { name } = useParams();

  const { country, currentPage, countryFiltered } = useSelector(
    (state) => state
  );
  
  const countries = country;

  useEffect(() => {
    if(!name) dispatch(getCountriesFront());
  }, []);
  const handleFilter = (event) => {
    dispatch(filterContinent(event.target.value));
  };
  const handleOrderByPopulation = (event) => {
    dispatch(orderByPopulation(event.target.value));
  
  }
  const handleOrderByName = (event) => {
    dispatch(orderByName(event.target.value));
  }
  
  
  let filteredCountries = countries;

  if (countryFiltered.length > 0) {
    filteredCountries = countryFiltered;
  }else
  if (name) {
    filteredCountries = countries.filter((country) => {
      return country.name.toLowerCase().includes(name.toLowerCase());
    });
  }


  return (
    <div>
      <button>
        <NavLink to="/form">Agregar actividad</NavLink>
      </button>
      <div>
        <span>  Filtrar por continente  </span>
          <select onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceanía</option>
            <option value="Antartic">Antartic</option>
          </select>
        <span>  Ordenar por población  </span>
          <select onChange={handleOrderByPopulation}>
            <option value="ASC">Ascendente</option>
            <option value="DESC">Descendente</option>
          </select>
        <span>  Ordenar por nombre  </span>
          <select onChange={handleOrderByName} >
            <option value="ASC">Ascendente</option>
            <option value="DESC">Descendente</option>
          </select>
        <span>
           <NavLink to= "/activities">
           <button >Actividad turística</button>
            </NavLink>
        </span>
              
      </div>

      <div className={Style.country}>
        {filteredCountries
          .slice((currentPage - 1) * 10, currentPage * 10)
          .map(({ id, name, flag, continent, activities }) => {
            return (
              <Country
                key={id}
                id={id}
                name={name}
                flag={flag}
                continent={continent}
                activities={activities}
                
              />
            );
          })}
      </div>
      <Pagination></Pagination>
    </div>
  );
};

export default Home;
