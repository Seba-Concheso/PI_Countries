const { Router } = require("express");
const createActivity = require("../controllers/createActivity");
const getAllActivities = require("../controllers/getAllActivities");
const getActivityByName = require("../controllers/getActivityByName");
const { Op } = require("sequelize");
const { Country } = require("../db");

const activityRouter = Router();

// *********************** Ruta para crear una actividad turistica   **************************************
const validate = async (req, res, next) => {
  const { name, difficulty, duration, season, description, country } = req.body;
  if (!name || !difficulty || !duration || !season || !country || !description)
    return res.status(405).json({ error: "Faltan campos para completar." });

  next();
};
// const validateId = async (req, res, next) => {
//   // const { country } = req.body;
//   console.log(req.body.country + " este es el pais validateId");
//   let countryId = await Country.findAll({
//     where: { name: { [Op.iLike]: `%${req.body.country}%` } },
//   });
//   console.log(countryId + " este es el countryID pais validateId");
//   if (countryId.length === 0)
//     return res.status(404).json({ error: "El país buscado no existe." });
//   next();
// };

activityRouter.post("/activities", validate, async (req, res) => {
  try {
    const { name, difficulty, duration, season, country, description } =
      req.body;
    let countryResult = await Country.findAll({
      attributes: ["id"],
      through: {
        attributes: [],
      },
      where: {
        name: {
          [Op.iLike]: `%${country}%`,
        },
      },
    });
    console.log(countryResult + " este es el countryID pais");
    if (countryResult.length === 0)
      return res.status(404).json({ error: "El país buscado no existe." });
    let countryid = countryResult[0].id;

    const newActivity = await createActivity({
      name,
      difficulty,
      duration,
      season,
      description,
      country: countryid,
    });

    await newActivity.addCountry(countryid);
    return res.status(201).json(newActivity);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

// *********************** Ruta para obtener todas las actividades   ****************************************

activityRouter.get("/activities", async (req, res) => {
  try {
    const { name } = req.query;
    let activity;
    if (name) {
      activity = await getActivityByName(name); //Esta función me va a buscar el nombre que me pide el usuario
    } else activity = await getAllActivities(); //Esta funcion me devuelve todos los usuarios de mi DDBB si no se pasa query.

    return res.status(200).json(activity);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
});

// ***********************  Ruta para actualizar alguna actividad   ****************************************

// ****************************** Ruta para borrar alguna actividad(limitado a administrador) *******************************************

module.exports = activityRouter;
