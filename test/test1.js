const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    res.render('test1')
})

app.listen(4002,console.log('Success'))