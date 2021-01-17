//express 모듈
const express = require('express')
const app = express()
const session = require('express-session')
const flash = require('connect-flash')

//nodejs 모듈
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors')  


//express 기본
app.use(cors({
    origin : 'http://localhost:3000'
}))
app.use(express.static("public"));
app.use(express.urlencoded({extended : false}))
app.use(express.json())

//로그인 세션
app.use(session ({
    name : "sessionID",
    secret:"Hello",
    resave:false,
    saveUninitialized:true,
    cookie:{
        secure:false,
        maxAge: 600*1000
    }
}))


//passport 관련
app.use(passport.initialize())
app.use(passport.session())
require('./config/passport.js')(passport);
app.use(flash())

//기능 분리 가져오기
const aboutLogin = require('./routes/aboutLogin.js');

//뷰 엔진
app.set('view engine', 'ejs')

//구현
app.get('/',(req,res)=>{
    res.render('html')
})





app.use('/api',(req,res)=>
  aboutLogin
  );



1
app.post('/post',(req,res)=>{
    res.send("hi");
})






app.listen(4000,console.log('Success'))