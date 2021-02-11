const db = require("../models");

async function findAll(req, res) {
  let Flight = await db.sequelize.models.Flight.findAll({attributes: ["id", "rate", "schedule", "origin", "destiny", "freeSeats"]});
  res.status(200).json(Flight);
  };

async function findUserForID(req, res) {
  let id = req.params.id
  let Flight = await db.sequelize.models.Flight.findOne({attributes: ["id", "rate", "schedule", "origin", "destiny", "freeSeats"]},{ where: { id } });
  if (!Flight) {
    return res.status(400).json({
        ok: false,
        error: {
            message: "Flight no exist"
        }
    })
  }
    res.status(200).json(Flight);
  };  

  module.exports = {
    findAll,
    findUserForID
  }