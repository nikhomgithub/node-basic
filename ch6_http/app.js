const http = require('http');
const server = http.createServer((req,res)=>{
    res.write('Hello from Node Js');
    res.end();
});

server.listen('3000',()=>{
    console.log('Server is listening')
});