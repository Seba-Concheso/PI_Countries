import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import validate from "./validate";
import {
  createActivity,
  orderByName,
} from "../../redux/actions";
import { Link } from "react-router-dom";
import Style from "./Form.module.css";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const country = useSelector((state) => state.country);
  
  const [form, setForm] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    description: "",
    country: [],
  });
  const [error, setError] = useState({});
  const [formCompleted, setFormCompleted] = useState(false);

  

  useEffect(() => {
    dispatch(orderByName("ASC"));
    checkForm();
  }, [dispatch]);

  const handleChangeCountry = (event) => {
    setForm({ ...form, country: [...form.country, event.target.value] });
    setError(
      validate({
        ...form,
        country: [...form.country, event.target.value],
      })
    );
    console.log(form.country +  "  form.country");
  };

  const handleChange = (event) => {
    
    setForm({ ...form, [event.target.name]: event.target.value });
    setError(
      validate({
        ...form,
        [event.target.name]: event.target.value,
      })
    );
  };

  const checkForm = () => {
    const { name, difficulty, duration, season, description, country } = form;
    const isNameValid = name !== "";
    const isDifficultyValid = difficulty !== 0;
    const isDurationValid = duration !== 0;
    const isSeasonValid = season !== "";
    const isDescriptionValid = description !== "";
    const isCountryValid = country.length !== 0;
  
    setFormCompleted(
      isNameValid &&
      isDifficultyValid &&
      isDurationValid &&
      isSeasonValid &&
      isDescriptionValid &&
      isCountryValid
    );
  };
  
 
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createActivity(form));
    window.alert("Actividad creada con éxito");
    navigate("/countries");
  };
  

  return (
    <form onSubmit={handleSubmit} className={Style.form}>
      <div className={Style.divform}>
        
        <label htmlFor="name" className={Style.label}>
          {" "}
          Nombre{" "}
        </label>
        <input
          className={Style.input}
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {error.name && <p className={Style.error}>{error.name}</p>}

        <label htmlFor="difficulty" className={Style.label}>
          {" "}
          Dificultad{" "}
        </label>
        <select
          className={Style.select}
          name="difficulty"
          value={form.difficulty}
          onChange={handleChange}
        >
          <option value={0}> sin completar </option>
          <option value={1}> 1-Muy fácil </option>
          <option value={2}> 2-fácil </option>
          <option value={3}> 3-intermedio </option>
          <option value={4}> 4-difícil </option>
          <option value={5}> 5-Muy difícil </option>
        </select>
        {error.difficulty && <p className={Style.error}>{error.difficulty}</p>}

        <label htmlFor="duration" className={Style.label}>
          {" "}
          Duración(en horas){" "}
        </label>
        <input
          className={Style.input}
          type="number"
          name="duration"
          value={form.duration}
          onChange={handleChange}
        />
        {error.duration && <p className={Style.error}>{error.duration}</p>}

        <label htmlFor="season" className={Style.label}>
          {" "}
          Temporada{" "}
        </label>
        <select
          className={Style.select}
          name="season"
          value={form.season}
          onChange={handleChange}
        >
          <option value="none">sin completar</option>
          <option value="autumn">Otoño</option>
          <option value="winter">Invierno</option>
          <option value="spring">Primavera</option>
          <option value="summer">Verano</option>
        </select>
        {error.season && <p className={Style.error}>{error.season}</p>}

        <label htmlFor="country" className={Style.label}>País/es</label>
        <select
          className={Style.select}
          value={form.country}
          onChange={handleChangeCountry}
        >
          <option value=" ">Seleccione un país</option>
          {country.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>

        {error.country && <p className={Style.error}>{error.country}</p>}
        

        <label htmlFor="description" className={Style.label}>
          {" "}
          Descripción{" "}
        </label>

        <textarea
          className={Style.textarea}
          name="description"
          rows="10"
          value={form.description}
          onChange={handleChange}
        />

        <div className={Style.divbutton}>
          <button
            disabled={!formCompleted}
            type="submit"
            className={Style.button}
          >
            Enviar
          </button>
          <Link to="/countries">
            <button className={Style.button}>Cancelar</button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Form;
