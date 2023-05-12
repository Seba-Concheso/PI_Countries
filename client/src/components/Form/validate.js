


const validate = (form) => {
    const error = {};
    if(!form.country)error.country = " Debe completar un país. ";
    if(!form.name)error.name = " Debe completar un nombre. ";
    if(form.difficulty===0)error.difficulty= " Debe seleccionar una opción del 1 al 5. ";
    if(form.duration===0)error.duration = "Debe colocar como mínimo 1 hora. ";
return error;

};

export default validate;
