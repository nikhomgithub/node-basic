const express = require ('express')
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/exam',(req,res)=>{
    res.send('example route');
})

app.get('/person/:name/:age',(req,res)=>{
    res.send(`${req.params.name} : ${req.params.age}`)
})
//http://localhost:3000/person/nikhom/40
app.get('/que',(req,res)=>{
    res.send(req.query);
})
//http://localhost:3000/que?name=nikhom&age=40
//{"name":"nikhom","age":"40"}

app.listen('3000',()=>{
    console.log('app server listening');
})