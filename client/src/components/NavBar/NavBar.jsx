import { Link, useNavigate } from "react-router-dom";
import Style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { getCountriesFront } from "../../redux/actions";

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
          <button className={Style.home} onClick={handleClick}>
            Home
          </button>
        </Link>
        <Link to="/about">
          <button className={Style.about}>About</button>
        </Link>
        <SearchBar className={Style.searchBar} onSearch={SearchBar} />
        <span className={Style.span}>Countries</span>
        
      </div>
    </nav>
  );
};

export default NavBar;
