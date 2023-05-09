const { Country }= require("../db");


const getCountryDetail = async (id)=> {
    //llega id por params i lo paso a mayúscula
    const idToUpperCase = id.toUpperCase();
  //Recién ahora hago busqueda por PK
    const country = await Country.findByPk(idToUpperCase);
      
    if(!country)throw Error("País no encontrado");
    return country;

};


module.exports = getCountryDetail;