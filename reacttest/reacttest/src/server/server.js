

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

app.use('/api',(req,res)=>{
    a = req.body;
    res.send(a);
})

app.listen(4000,()=>{
    console.log('Success')
})