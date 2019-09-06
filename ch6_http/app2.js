const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Hello from NodeJS 555');
        res.end();
    }
    else{
        res.write('Wrong domain');
        res.end();
    }
});

server.listen('3000',()=>{
    console.log('Server is listening')
});