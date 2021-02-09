const db = require("../models");

async function findAll(req, res) {
  let cities = await db.sequelize.models.City.findAll();
  res.status(200).json(cities);
  };

async function findUserForID(req, res) {
  let id = req.params.id
  let city = await db.sequelize.models.City.findOne({ where: { id } });
  if (!city) {
    return res.status(400).json({
        ok: false,
        error: {
            message: "City no exist"
        }
    })
  }
    res.status(200).json(city);
  };  

  module.exports = {
    findAll,
    findUserForID
  }