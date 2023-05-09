const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAllCountries = require("../controllers/getAllCountries");

const countryRoutes = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//*********************** Ruta para obtener todos los países.*******************************

countryRoutes.get("/", async(req, res) => {
    
    try {
        const paises= await getAllCountries();
        

        res.status(200).json(paises)
    } catch (error) {
        res.status(500).json({error: "error al obtener datos."})
        
    }
});


// countryRoutes.post("")







module.exports = countryRoutes;
