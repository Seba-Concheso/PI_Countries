const { Country, Activity }= require("../db");


const getCountryDetail = async (id)=> {
    //llega id por params i lo paso a mayúscula
    const idToUpperCase = id.toUpperCase();
  //Recién ahora hago busqueda por PK
    const country = await Country.findByPk(idToUpperCase, 
                                            {include:{
                                                      model: Activity,
                                                        attributes: ["name"],    //Con el include trato de colocar solo el nobre de la actividad en los paises
                                                              through: {
                                                                  attributes: [],
                                                                        }
          
                                                       }
                                            },
                                          );
      
    if(!country)throw Error("País no encontrado");
    return country;

};


module.exports = getCountryDetail;