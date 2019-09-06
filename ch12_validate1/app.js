const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const joi = require('joi');

app.use('/public/',express.static(path.join(__dirname,'static'))); //public is alias

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: false
})); 

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));
})


app.post('/',(req,res)=>{
    console.log(req.body)
    
    const schema = joi.object().keys({
        name : joi.string().trim().required(),
        email : joi.string().email().required(),
        password : joi.string().trim().min(2).max(10).required()
    })
    
    joi.validate(req.body,schema,(err,result)=>{
        if(err){
            console.log(err)
            return res.status(404).json({msg:'error'})
        }
        else{
            console.log(result);
            return res.status(200).json({result:result})
        }
    })
})

app.listen('3000',()=>{
    console.log('App is listening');
})