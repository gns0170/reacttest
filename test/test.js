const express = require('express')
const app = express()
const session = require('express-session')
const cors = require('cors')

const fs = require('fs')

const passport = require('passport')
    ,LocalStrategy = require('passport-local').Strategy;


const users = [];

app.use(cors({
    origin : 'http://localhost:3000'
}))
app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },

  }))

app.post('/api/register',(req,res)=>{
    const id = new Date().getTime()
    
    var data = `const id${id} = ${JSON.stringify(req.body)}`
    users.push(req.body)
    console.log(users)
    fs.writeFile(`./data/users/${id}`, data, 'utf8', function(error){ console.log('write end') });

    res.json(id)
})

app.post('/api/login', 
  passport.authenticate('local'),
  function(req, res) {
    res.json(true)
  });




app.post('/post',(req,res)=>{
    res.send("hi");
})

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render('html')
})


app.listen(4000,console.log('Success'))