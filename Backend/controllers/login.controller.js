const db = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function getTokenUser(req, res) {
    let body = req.body;
    db.sequelize.models.User.findOne({ where: { username: body.username } })
    .then((user) => {
        if (!user) {
            return res.status(400).json({
                ok: false,
                error: {
                    message: "Incorrect user or password"
                }
            })
          }
 
        if (body.password !== user.password){    
            return res.status(400).json({
                ok: false,
                error: {
                    message: "Incorrect user or password"
                }
            });
        }
    
        let token = jwt.sign({
            user
        }, '123456',{
            expiresIn: 60 * 24
        })    
    
        res.status(200).json({
            ok: true,
            user: user.username,
            token,
        });        
    }).catch((err) => {
        res.status(500).json({
            error: err
          });
    });
    }; 

    module.exports = {
        getTokenUser
    }