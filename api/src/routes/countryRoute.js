const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getCountriesByApi = require("../controllers/getCountryByApi");
const getCountries = require("../controllers/getCountries");
const getCountryByName = require("../controllers/getCountryByName");

const countryRoutes = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//*********************** Ruta para obtener todos los países desde la API.*******************************

countryRoutes.get("/", async (_req, res) => {
  //se hace automático cuando ingresa a home.(creo)

  try {
    const paises = await getCountriesByApi();

    res.status(200).json(paises);
  } catch (error) {
    res.status(500).json({ error: "error al obtener datos." });
  }
});

countryRoutes.get("/countries", async (req, res) => {
  try {
    const { name } = req.query;
    let country;
    if (name) {
      
      country = await getCountryByName(name); //Esta función me va a buscar el nombre que me pide el usuario
    } else country = await getCountries(); //Esta funcion me devuelve todos los usuarios de mi DDBB si no se pasa query.
    
    return res.status(200).json(country);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

module.exports = countryRoutes;
