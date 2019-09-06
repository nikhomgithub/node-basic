const mod_a = require('./mod-a');
const mod_b = require('./mod-b');
const mod_c = require('mod-c');

console.log(mod_a);   //[Function: sum]
console.log(mod_a(1,2));   //3

console.log(mod_b.pi); //mod-b
console.log(mod_b.sum(2,2)); //4
const peter=new mod_b.SomeObject('Peter'); //object constructor
console.log(peter.name);

console.log(mod_c.pi); //mod-c
console.log(mod_c.sum(2,3)); //4
new mod_c.SomeObject(); //object constructor


//how to run
//$node app.js