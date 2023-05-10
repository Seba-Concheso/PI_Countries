// const Activity = require("../models/Activity");

const {Country, Activity}= require("../db");


const getCountries = async () =>{
    const countries = await Country.findAll(
        
        {
        attributes: ["name", "capital", "id", "flag"],
            through: {
                attributes: [],
                    },
        
        include:{
            model: Activity,
            attributes: ["name"],    //Con el include trato de colocar solo el nobre de la actividad en los paises
            through: {
                attributes: [],
                    }
                }
        }    
    );
    
    return countries;
}

module.exports = getCountries;