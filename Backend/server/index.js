const express = require("express");
const server = express();
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

module.exports = server;