const { Country } = require("../db");
const { Op }= require("sequelize");


const getCountryByName = async (name) => {
    //buscador por nombre exacto
    
    // const country = await Country.findAll({where: {name: name}})
    let country = await Country.findAll( {
        attributes: ["name", "capital", "id", "flag"],
            through: {
                attributes: [],
            },
        
        where: {name: { [Op.iLike]: `%${name}%`}}});

    if(country.length===0)throw Error("El país buscado no existe.");
    
    return country;

};


module.exports = getCountryByName;
