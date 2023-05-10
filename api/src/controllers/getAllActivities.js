const {Activity} = require("../db");

const {Country}= require("../db");


const getAllActivities = async () =>{
    const countries = await Activity.findAll(
        
        {
        attributes: ["name", "difficulty", "duration", "season", "description"],
            through: {
                attributes: [],
            }
        },
        {
        include:{
            model: Country,
            attributes: ["name"],    //Con el include trato de colocar solo el nobre de la actividad en los paises
            through: {
                attributes: [],
            }
        }
    })
    
    return countries;
}

module.exports = getAllActivities;