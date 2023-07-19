const { Activity} = require("../db");

const createActivity = async (

  name,
  difficulty,
  duration,
  season,
  description
) => {
  const newActivity = await Activity.create(
    name,
    difficulty,
    duration,
    season,
    description
  );

  return newActivity;
};

module.exports = createActivity;
