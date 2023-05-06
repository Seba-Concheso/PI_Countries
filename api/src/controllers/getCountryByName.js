const {Country}= require("../models/Country.js");



const getCountryByName = async (req, res)=> {
    //vamos a pedir a la BBDD los paises que tengan nombre.
    try {
       res.send("Obtener los paises por nombre")
    } catch (error) {
        
    }
}

module.exports= getCountryByName;