const express = require('express')
const app = express()
const session = require('express-session')
const cors = require('cors')

const fs = require('fs')

const passport = require('passport')

const users = [];

app.use(cors({
    origin : 'http://localhost:3000'
}))
app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.post('/api/register',(req,res)=>{
    const id = new Date().toString()
    
    console.log(req.body);

    res.json(id)
})

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

app.post('/api/register',(req,res)=>{

    res.send("hihihihihi")
})

app.post('/post',(req,res)=>{
    res.send("hi");
})

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render('html')
})


app.listen(4000,console.log('Success'))