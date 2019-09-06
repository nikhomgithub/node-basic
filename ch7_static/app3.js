const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    const readStream=fs.createReadStream('./static/trex.png');
    res.writeHead(200,{'Content-type':'image/png'});
    readStream.pipe(res);
})

server.listen('3000',()=>{
    console.log('Server is listening')
});
