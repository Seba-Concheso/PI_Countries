import { Link } from "react-router-dom";
import Style from "./Country.module.css";

const Country = (country, Activity) => {
  return (
    <div className={Style.country}>
      <Link to={`/countries/${country.id}`}>
        <h2>{country.name}</h2>
      </Link>
      <img className={Style.image} src={country.flag} alt={country.name} />
      
      <h3>{country.continent}</h3>
      <h4>{Activity.name}</h4>
      
      <h2>{country.id}</h2>
    </div>
  );
};

export default Country;
