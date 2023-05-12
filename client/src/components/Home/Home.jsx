import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesFront } from "../../redux/actions";
import Country from "../Country/Country";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(getCountriesFront());
  }, []);
  return (
    <div>
      {countries.map(({ id, name, flag, continent, activities }) => {
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

      <button>
        <NavLink to="/form">Agregar actividad</NavLink>
      </button>
    </div>
  );
};

export default Home;
