import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../../redux/actions";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [countrysearch, setCountrysearch] = useState("");

  const handleChange = (event) => {
    
    setCountrysearch(event.target.value);
  };
  const handleSubmit = (event) => {
    
    dispatch(searchCountry(countrysearch));
  };

  return (
    <div>
      <div>
        <label htmlFor="country">País</label>
        <input
          type="text"
          name="country"
          value={countrysearch}
          onChange={handleChange}
        />
        <Link to="/home">
        <button
          onClick={() => {
            handleSubmit();
            setCountrysearch("");
          }}
        >
          Buscar
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
