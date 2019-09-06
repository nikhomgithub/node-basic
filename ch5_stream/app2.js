const fs = require('fs');

const readStream = fs.createReadStream('./example.txt','utf8');
const writeStream = fs.createWriteStream('./copy_example.txt');

/*
readStream.on('data',(chunk)=>{
    console.log(chunk);
})
*/

readStream.pipe(writeStream);