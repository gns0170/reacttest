const express = require('express');
const router = express.Router();
const passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
const session = require('express-session')

const fs = require('fs');

const register = require('../config/register');


router.get('/login',(req,res)=>{
    res.render('hi!Get Test');
})

router.post('/login',
  passport.authenticate('local'),
  function(req, res) {

    const sessionID = req.session.sessionID
    console.log(sessionID);
    res.json(sessionID)
  });

router.post('/register',(req,res)=>{
    
    register(req,res)
    
})
module.exports = router;