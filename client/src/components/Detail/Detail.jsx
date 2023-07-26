import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../../redux/actions";
import { Link } from "react-router-dom";
import Style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryDetail);

  useEffect(() => {
    dispatch(getDetail(id));
  }, [id]);

  return (
    <div className={Style.body}>
      <div className={Style.conteiner}>
        <h1 className={Style.name}>{countryDetail.name}</h1>
        <img className={Style.flag} src={countryDetail.flag} alt={countryDetail.name} />
        <div className={Style.divInfo}>
          <h3 className={Style.info}>Capital: {countryDetail.capital}</h3>
          <h4 className={Style.info}>Continente: {countryDetail.continent}</h4>
          <h4 className={Style.info}>Subregión: {countryDetail.subregion}</h4>
          <h4 className={Style.info}>Área: {countryDetail.area} Km²</h4>
          <h4 className={Style.info}>Población: {countryDetail.population}</h4>
        </div>
        <div className={Style.activities}>
          <h4 className={Style.activitiestitle}>
            Actividades:{" "}
            {countryDetail.activities?.map((act, index) => {
              return (
                <li key={index} className={Style.activityitem}>
                  <h4 className={Style.activityname}>Nombre: {act.name}</h4>
                  <p className={Style.activitydetails}>
                    <h4>Dificultad: {act.difficulty}</h4>
                    <h4>Duración: {act.duration} horas.</h4>
                    <h4>Temporada: {act.season}</h4>
                    <h4>Descripción: {act.description}</h4>
                  </p>
                </li>
              );
            })}
          </h4>
          <Link to={countryDetail.maps} target="_blank" rel="noopener noreferrer">
            <h4 className={Style.mapa}>Mapa</h4>
          </Link>
        </div>
        <Link to="/home">
          <button className={Style.button}>Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
