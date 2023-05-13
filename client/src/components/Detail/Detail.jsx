import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../../redux/actions";
import { Link } from "react-router-dom";


const Detail = () => {
  const { id } = useParams();
  
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryDetail);
  

  useEffect(() => {
    dispatch(getDetail(id));
  }, [id]);

  return (
    <div>
      <h1>{countryDetail.name}</h1>
      <img src={countryDetail.flag} alt={countryDetail.name} />
      <h2>Capital: {countryDetail.capital}</h2>
      <h4>Continente: {countryDetail.continent}</h4>
      <h4>Subregión: {countryDetail.subregion}</h4>
      <h4>Área: {countryDetail.area} m²</h4>
      <h4>Población: {countryDetail.population}</h4>
      <Link to={countryDetail.maps}>
      <h4  >Mapa</h4>
      </Link>
    <div>
      <Link to="/home">
      <button >Volver</button>
      </Link>
    </div>
    </div>
  );
};

export default Detail;
