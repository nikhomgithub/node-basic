const fs = require('fs');
const readStream = fs.createReadStream('./appex.txt','utf8');
const writeStream = fs.createWriteStream('./copy_appex.txt');

readStream.on('data',(chunk)=>{
    //console.log(chunk)
    writeStream.write(chunk);

});