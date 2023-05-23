import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, filterActivitiesByName } from "../../redux/actions";
import { Link } from "react-router-dom";
import Style from "./Activities.module.css";

const Activities = () => {
  const dispatch = useDispatch();
  const { activities, activitiesFiltered } = useSelector((state) => state);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  const handleFilter = (event) => {
    setFilter(event.target.value);
  };
  const handleClick = () => {
    dispatch(filterActivitiesByName(filter));
    setFilter("");
  };

  let filteredActivities = activities;
  
  if (activitiesFiltered.length > 0) {
    filteredActivities = activitiesFiltered;
  }

  return (
    <div>
      <h1>Actividades</h1>
      <div>
        <label htmlFor="filter">filtrar por actividad:</label>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilter}
        />
        <button onClick={handleClick}>Filtrar/todos</button>
      </div>
      <div className={Style.conteiner}>
        {filteredActivities?.map((act, index) => {
          return (
            <div key={index} className={Style.activity}>
              <h4>Nombre: {act.name}</h4>
              <h4>Dificultad: {act.difficulty}</h4>
              <h4>Duración: {act.duration} horas.</h4>
              <h4>Temporada: {act.season}</h4>
              <h4>Descripción: {act.description}</h4>
              <h4>Paises disponibles:</h4>
              <ul>
                {act.countries?.map((c, index) => {
                  return <li key={index}>{c.name}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div>
        <Link to="/home">
          <button>Volver</button>
        </Link>
      </div>
    </div>
  );
};

export default Activities;
