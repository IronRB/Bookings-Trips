const db = require("../models");
var jwt = require('jsonwebtoken');

async function findAll(req, res) {
  let Flight = await db.sequelize.models.Booking.findAll();
  res.status(200).json(Flight);
  };

async function findUserForID(req, res) {
  let id = req.params.id
  let Booking = await db.sequelize.models.Booking.findOne({ where: { id } });
  if (!Booking) {
    return res.status(400).json({
        ok: false,
        error: {
            message: "Booking no exist"
        }
    })
  }
    res.status(200).json(Booking);
  };  

async function CreateBooking(req, res) {
  
  if(!req.headers.authorization) {
        return res
         .status(403)
         .send({message: "Header authorization invalid"});
  }
    
  let token = req.headers.authorization;
  let payload = jwt.decode(token);
  let idUser = payload.user.id
  let User = await db.sequelize.models.User.findOne({ where: { id: idUser } });
  if (!User) {
    return res.status(400).json({
        ok: false,
        error: {
            message: "User no exist"
        }
    })
  }

  if (User.age < 18) {
    return res.status(400).json({
        ok: false,
        error: {
            message: "User dont can to make this action"
        }
    })
  }

  if(!req.body.flight){
    return res.status(400).json({
        ok: false,
        error: {
            message: "Flight is invalid"
        }
    })
  }

  let idFlight = req.body.flight;
  let Flights = await db.sequelize.models.Flight.findAll({attributes: ["id", "rate", "schedule", "origin", "destiny", "freeSeats"]});
  if (!Flights) {
    return res.status(400).json({
        ok: false,
        error: {
            message: "No flights available"
        }
    })
  }

  let flight = Flights.filter( f => f.id == idFlight);

  flight.freeSeats = flight.freeSeats-1;

  let {id,name,age} = User
  console.log("*************id: "+flight[0].id)
  console.log("*************idUser: "+id)
  let [booking,created] = await db.sequelize.models.Booking.findOrCreate({
    where: { user: id, createdAt: flight[0].schedule}, 
    defaults: {
      user: id,
      flight: flight[0].id,
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }
  })

  if(created){
    res.status(200).json({
      User: {
        id,
        name,
        age
      },
      Flight: flight[0],
      dateCreated: booking.createdAt,
      created: true});
  }else{
    res.status(409).json({
      "message": "The user have booking created",
      "exist": !created,
      created});
  }


  };  

  module.exports = {
    findAll,
    findUserForID,
    CreateBooking
  }