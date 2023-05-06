const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getAllCountries}= require("../controllers/getAllCountries")
const {getCountryByName}= require("../controllers/getCountryByName")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//Ruta para obtener todos los países.
router.get("/countries", (req, res) => {
    getAllCountry(req, res);
  });
// Ruta para obtener el detalle de un pais por su id
  router.get("/countries/:idPais", (req, res) => {
    getDetailCountry(req, res);
  });
  // Ruta para obtener pais por su nombre...
  router.get("/countries/:name", (req, res) => {
    getCountryByName(req, res);
  });

  // Ruta para crear una actividad turistica
  router.post("/activities", (req, res) => {
    postActivity(req, res);
  });
  //ruta para obtener todas las actividades
  router.get("/activities", (req, res) => {
    getAllActivities(req, res);
  });
  // ruta para actualizar alguna actividad
  router.put("/activities", (req, res) => {
    updateActivity(req, res);
  });
  // Ruta para borrar alguna actividad
  router.delete("/activities/", (req, res) => {
    deleteActivity(req, res);
  });






module.exports = router;
