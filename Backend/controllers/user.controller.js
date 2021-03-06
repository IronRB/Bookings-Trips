const db = require("../models");

async function findAll(req, res) {
  let users = await db.sequelize.models.User.findAll();
  res.status(200).json(users);
  };

async function findUserForID(req, res) {
  let id = req.params.id
  let users = await db.sequelize.models.User.findOne({ where: { id } });
  if (!users) {
    return res.status(400).json({
        ok: false,
        error: {
            message: "User no exist"
        }
    })
  }
    res.status(200).json(users);
  };  

async function findUserForUsername(req, res) {
  console.log("query: "+req.query.username)
  let username = req.params.username
  let users = await db.sequelize.models.User.findOne({ where: { name: username } });
  res.status(200).json(users);
  };  
  
  async function createUser(req, res) {
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
      if(created){
        res.status(200).json({
          user,
          created});
      }else{
        res.status(200).json({
          "exist": !created,
          created});
      }

    };  

module.exports = {
  findAll,
  findUserForID,
  findUserForUsername,
  createUser
}