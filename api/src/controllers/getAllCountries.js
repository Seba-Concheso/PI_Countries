const{Country}= require("../db");
const axios = require("axios");


const getAllCountries= async ()=>{
    const response= await axios.get('https://restcountries.com/v3.1/all');
    
    const arrayCountries= await response.data.map((country) => {
        return {
            id: country.cca3,
            name: country.name.common,
            capital: country.capital?.[0],
            flag: country.flags.png,
            maps: country.maps.googleMaps,
            continent: country.region,
            subregion: country.subregion,
            area: country.area,
            population: country.population
        }
    })
    
    
    return await Country.bulkCreate(arrayCountries); 
    // return arrayCountries;
};

module.exports = getAllCountries;



// ggg//