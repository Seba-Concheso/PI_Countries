import { Link, useNavigate } from "react-router-dom";

import Style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { getCountriesFront, searchCountry } from "../../redux/actions";

const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    getCountriesFront();
    navigate("/home", { replace: true });
    window.location.reload();
  };

  return (
    <nav>
      <div className={Style.navbar}>
        <Link to="/home">
          <button onClick={handleClick}>Home</button>
        </Link>
        <Link to="/about">About</Link>
        <SearchBar onSearch={SearchBar} />
      </div>
    </nav>
  );
};

export default NavBar;
