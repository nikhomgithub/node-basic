const EventEmitter = require('events');

const eventA = new EventEmitter(); 

eventA.on('sigA',(num1,num2)=>{
    const sum=num1+num2;
    console.log(`eventA = ${sum}`);
});

eventA.emit('sigA',1,2);