const { Router } = require("express");
const createActivity = require("../controllers/createActivity");
const getAllActivities = require("../controllers/getAllActivities");
const getActivityByName = require("../controllers/getActivityByName");
const { Op } = require("sequelize");
const { Country } = require("../db");

const activityRouter = Router();

// *********************** Ruta para crear una actividad turistica   **************************************
const validate = async (req, res, next) => {
  const { name, difficulty, duration, season, description } = req.body;
  if (!name || !difficulty || !duration || !season  || !description)
    return res.status(405).json({ error: "Faltan campos para completar." });

  next();
};


activityRouter.post("/activities", validate, async (req, res) => {
  try {
    const { name, difficulty, duration, season, country, description } =
    req.body;
    
    //debo recordar que country es un array de paises y asociarlo a cada id de pais
    const countryids = [];
    for (const countryName of country) {
      const countrydata = await Country.findOne({
        attibute: ["id"],
        through: {
          attributes: [],
        },
        where: {
          name: {
            [Op.iLike]: `%${countryName}%`,
          },
        },
      });
      
      if(!countrydata) return res.status(404).json({ error: "El país buscado no existe." });
      countryids.push(countrydata.id);
    }
    

    const newActivity = await createActivity({
      name,
      difficulty,
      duration,
      season,
      description,
    });
    
  
    await newActivity.addCountry(countryids);
    return res.status(201).json(newActivity);
  } catch (error) {
    // window.alert("El país buscado no existe.");
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
