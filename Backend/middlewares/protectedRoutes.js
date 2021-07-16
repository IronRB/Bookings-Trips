const {PRIVATEKEY} = require("../config");
const protectedRoutes = require('express').Router(); 

protectedRoutes.use((req, res, next) => {
    const token = req.headers['authorization'];
 
    if (token) {
      jwt.verify(token, PRIVATEKEY, (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Invalid Token' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'No Token was sent.' 
      });
    }
 });