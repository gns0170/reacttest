

const express = require('express');
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


const cors = require('cors');
app.use(cors({
    method:['GET','POST'],
    origin: 'http://localhost:3000',
    credentials : true,
}));


app.get('/', (req,res,next)=>{
    res.send("hi11");
    next();
})

/*
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
var LocalStrategy = require('passport-local').Strategy;

app.use(cookieParser('keyboard cat'));
app.use(session({secret: 'keyboard cat'}));
app.use(passport.initialize());
app.use(passport.session());
*/

app.use('/api',(req,res,next)=>
    
    res.json('hi')

);




app.listen(4000,()=>{
    console.log('Success')
})



