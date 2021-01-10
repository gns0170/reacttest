const express = require('express')
const app = express()
const session = require('express-session')
const cors = require('cors')

app.use(cors({
    origin : 'http://localhost:3000'
}))
app.use(express.urlencoded({extended : false}))

app.post('/api/register',(req,res)=>{
    res.send(req.body)
})


app.post('/post',(req,res)=>{
    res.send("hi");
})

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render('html')
})


app.listen(4000,console.log('Success'))