import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../../redux/actions";
import Style from "./SearchBar.module.css";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [countrysearch, setCountrysearch] = useState("");

  const handleChange = (event) => {
    setCountrysearch(event.target.value);
  };
  const handleSubmit = (event) => {
    dispatch(searchCountry(countrysearch));
    navigate(`/countries`, { replace: true });
    navigate(`/countries/${countrysearch}`, { replace: true });
    
  };

  return (
    <div className={Style.div}>
      <input
        type="text"
        placeholder="Buscador de país"
        className={Style.label}
        value={countrysearch}
        onChange={handleChange}
      />

      <button
        className={Style.button}
        onClick={() => {
          handleSubmit();
          setCountrysearch("");
        }}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
