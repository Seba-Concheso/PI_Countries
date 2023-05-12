import { Link } from "react-router-dom";

const Country = ({ id, name, flag, continent, activity }) => {
  return (
    <div>
      <h2>{id}</h2>
      <Link to={`/countries/${id}`}>
        <h2>{name}</h2>
      </Link>
      <img src={flag} alt={name} />
      <h3>{continent}</h3>
      <h4>{activity}</h4>
    </div>
  );
};

export default Country;
