const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const routers = require('../routers');

server.use(cors());

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

//const db = require("../models");

//db.sequelize.sync();

server.get("/", (req, res) => {
    res.json({ message: "Welcome to booking application." });
  });

server.use("/", routers);

server.use("/flights", (req, res) => {
  res.status(200).json([
    {
      booking: "w123",
      schedule: new Date().toDateString(),
      rate: "1000",
      origin: "Medellin",
      destiny: "Cali",
      freeSeats: 20,   
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    },
    {
      booking: "w789",
      schedule: new Date().toDateString(),
      rate: "2500",
      origin: "Medellin",
      destiny: "Bogota",
      freeSeats: 15,   
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
    }
  ]);   
});

module.exports = server;