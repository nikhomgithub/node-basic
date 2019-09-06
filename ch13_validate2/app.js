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

    const people = {
                       person:{
                            title:"mr",
                            name:"Mentor",
                            surname:"Plus",
                            age:14
                            },
                       cars:["Toyota","Honda","Tesla"],
                       books:[
                           {title:"Harry"},
                           {title:"Wolf"},
                           {title:"Fantasy"}
                       ]
                    }
    
    const personSchema = joi.object().keys({
        title:joi.string().trim().length(2).required(),
        name : joi.string().trim().required(),
        surname : joi.string().trim().required(),
        age : joi.number().required()
    })

    const carSchema = joi.array().items(joi.string())

    const bookSchema = joi.array().items(joi.object().keys({
        title:joi.string().trim().required()
    }))

    const schema = joi.object().keys({
        person:personSchema,
        cars:carSchema,
        books:bookSchema
    })

    joi.validate(people,schema,(err,result)=>{
        if(err){
            console.log(err)
            res.json({msg:'err'})
        }
        else{
            console.log(result);
            res.json({msg:'done'})
        }
    })
})

app.listen('3000',()=>{
    console.log('App is listening');
})