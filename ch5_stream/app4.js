const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();

const readStream = fs.createReadStream('./copy_example.txt.gz');
const writeStream = fs.createWriteStream('./uncompressed_example.txt');

readStream.pipe(gunzip).pipe(writeStream);