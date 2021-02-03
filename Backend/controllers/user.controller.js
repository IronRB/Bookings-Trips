const db = require("../models");

async function findAll(req, res) {
  let users = await db.sequelize.models.User.findAll();
  res.status(200).json(users);
  };

async function findUserForID(req, res) {
  console.log(req.params.id)
  console.log("query: "+req.query.username)
  let id = req.params.id
  let users = await db.sequelize.models.User.findOne({ where: { id } });
  res.status(200).json(users);
  };  

async function findUserForUsername(req, res) {
  console.log("query: "+req.query.username)
  let username = req.params.username
  let users = await db.sequelize.models.User.findOne({ where: { name: username } });
  res.status(200).json(users);
  };  
  
  async function createUser(req, res) {
    console.log(req.body)
    let userReq = req.body
    let [user,created] = await db.sequelize.models.User.findOrCreate({ 
      where: { username: userReq.username}, 
      defaults: {
        name: userReq.name,
        username: userReq.username,
        password: userReq.password,
        age: userReq.age,
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }
      });
    res.status(200).json({"instanceCreate": created});
    };  

module.exports = {
  findAll,
  findUserForID,
  findUserForUsername,
  createUser
}