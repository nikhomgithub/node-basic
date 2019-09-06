const EventEmitter = require('events');

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }
    get name(){
        return this._name;
    }
}

const peter=new Person('Peter');
console.log(peter.name);

const pedro=new Person('Pedro');
pedro.on('ActName',()=>{
    console.log(`my name is ${pedro.name}`);
});

const jane=new Person('Jane');
pedro.on('ActName',()=>{
    console.log(`my name is ${jane.name}`);
});

pedro.emit('ActName');
jane.emit('ActName');