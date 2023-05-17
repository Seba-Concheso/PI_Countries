import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import validate from "./validate";
import { createActivity } from "../../redux/actions";
import { Link } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    description: "",
    country: "",
  });
  const [formCompleted, setFormCompleted] = useState(false);
  const [error, setError] = useState({
    name: "",
    difficulty: 0,
    duration: 0,
    season: "",
    country: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setError(
      validate({
        ...form,
        [event.target.name]: event.target.value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // validate(form);
    dispatch(createActivity(form));
    navigate("/home");
  };
  const formCompletedHandler = () => {
    if (
      form.name !== "" &&
      form.difficulty !== 0 &&
      form.duration !== 0 &&
      form.season !== "" &&
      form.country !== "" &&
      form.description !== ""
    )
      return true;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="country"> País </label>
      <input
        type="text"
        name="country"
        value={form.country}
        onChange={handleChange}
      />
      {error.country && <p>{error.country}</p>}
      <hr />
      <label htmlFor="name"> Nombre </label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      {error.name && <p>{error.name}</p>}

      <hr />
      <label htmlFor="difficulty"> Dificultad </label>
      <select name="difficulty" value={form.difficulty} onChange={handleChange}>
        <option value={0}> sin completar </option>
        <option value={1}> 1-Muy fácil </option>
        <option value={2}> 2-fácil </option>
        <option value={3}> 3-intermedio </option>
        <option value={4}> 4-difícil </option>
        <option value={5}> 5-Muy difícil </option>
      </select>
      {error.difficulty && <p>{error.difficulty}</p>}

      <hr />
      <label htmlFor="duration"> Duración(en horas) </label>
      <input
        type="number"
        name="duration"
        value={form.duration}
        onChange={handleChange}
      />
      {error.duration && <p>{error.duration}</p>}

      <hr />
      <label htmlFor="season"> Temporada </label>
      <select name="season" value={form.season} onChange={handleChange}>
        <option value="none">sin completar</option>
        <option value="autumn">Otoño</option>
        <option value="winter">Invierno</option>
        <option value="spring">Primavera</option>
        <option value="summer">Verano</option>
      </select>
      <hr />
      <hr />
      <label htmlFor="description"> Descripción </label>
      <br />
      <textarea
        name="description"
        rows="10"
        value={form.description}
        onChange={handleChange}
      />

      <hr />
      <button disabled={!formCompletedHandler()} type="submit">
        Aceptar
      </button>
      <Link to="/home">
        <button>Cancelar</button>
      </Link>
    </form>
  );
};

export default Form;
