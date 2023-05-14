import { Link } from "react-router-dom";
import Style from "./Country.module.css";

const Country = ({ id, name, flag, continent}) => {
  return (
    <div className={Style.country}>
      <Link to={`/countries/${id}`}>
        <h2>{name}</h2>
      </Link>
      <img className={Style.image} src={flag} alt={name} />
      
      <h3>{continent}</h3>
      
      <h2>{id}</h2>
    </div>
  );
};

export default Country;
