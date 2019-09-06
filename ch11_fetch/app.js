const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use('/public/',express.static(path.join(__dirname,'static'))); //public is alias

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
})); 

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
})

app.get('/text',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','test.txt'));
})

app.get('/json',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','new.json'));
})

app.post('/',(req,res)=>{
    return res.status(200).json({server:req.body})
})

app.listen('3000',()=>{
    console.log('App is listening');
})