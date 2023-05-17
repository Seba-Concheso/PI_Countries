import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchCountry } from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [countrysearch, setCountrysearch] = useState("");

  const handleChange = (event) => {
    
    setCountrysearch(event.target.value);
  };
  const handleSubmit = (event) => {
    
    dispatch(searchCountry(countrysearch));
    navigate(`/home/${countrysearch}`);
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
        
        <button
          onClick={() => {
            handleSubmit();
            setCountrysearch("");
          }}
        >
          Buscar
        </button>
        
      </div>
    </div>
  );
};

export default SearchBar;
