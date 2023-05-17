const validate = (form, countries) => {
  const error = {};
  if (!form.country) {
    error.country = " Debe completar un país. ";
  } else {
    const foundCountry =
      countries && countries.find((co) => co.name === form.name);
    if (!foundCountry) error.country = " El país ingresado no existe. ";
  }
  if (!form.name) error.name = " Debe completar un nombre. ";
  if (form.difficulty === 0)
    error.difficulty = " Debe seleccionar una opción del 1 al 5. ";
  if (form.duration === 0) error.duration = "Debe colocar como mínimo 1 hora. ";
  return error;
};

export default validate;
