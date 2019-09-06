const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use('/public/',express.static(path.join(__dirname,'static'))); //public is alias

app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
})
app.get('/image',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','trex.png'));
})
app.get('/json',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','new.json'));
})

app.post('/',(req,res)=>{
    //database work here
    res.send(req.body)
    //{"name":"Nikhom","email":"a@mail.com"}
})

app.listen('3000',()=>{
    console.log('App is listening');
})