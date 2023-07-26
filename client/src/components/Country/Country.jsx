import { Link } from "react-router-dom";
import Style from "./Country.module.css";

const Country = (country, Activity) => {
  return (
    <div className={Style.country}>
      {/* <h4 className={Style.id}>{country.id}</h4> */}
      <Link to={`/countries/${country.id}`}>
        <img className={Style.image} src={country.flag} alt={country.name} />
      </Link>
      <h4 className={Style.name}>{country.name}</h4>

      <h3 className={Style.continent}>Continente: {country.continent}</h3>
      <h4>{Activity.name}</h4>
    </div>
  );
};

export default Country;
