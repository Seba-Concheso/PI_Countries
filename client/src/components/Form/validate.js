const validate = (form, ) => {
  console.log("Principio   " + form.country);

  const error = {};
  if (form.country ==="Seleccione un país") error.country = " Debe completar un país. ";
  
  if (!form.name) error.name = " Debe completar un nombre. ";
  if (form.difficulty === 0)
    error.difficulty = " Debe seleccionar una opción. ";
  if (form.duration === 0) error.duration = "Debe colocar como mínimo 1 hora. ";
  if(form.season === 0) error.season = "Debe seleccionar una estación. ";
  return error;
};

export default validate;
