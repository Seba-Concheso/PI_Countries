const URL = "https://restcountries.com/v3.1/all";
const axios = require("axios");


const getAllCountries = async (req, res)=> {
    //vamos a pedir a la API todos los paises y los guardamos en nuestra base datos.
    try {
       res.send("Obtener todos los paises")
    } catch (error) {
        
    }
}

module.exports= getAllCountries;