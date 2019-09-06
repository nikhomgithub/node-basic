const sum = (num1,num2)=>num1+num2;

const pi="mod-b";

class SomeObject{
    constructor(name){
        this._name=name;
        console.log('object constructor');
    }
    get name(){
        return this._name;
    }
}


module.exports.sum=sum;
module.exports.pi=pi;
module.exports.SomeObject=SomeObject;

//or
//module.exports={sum,pi,SomeObject};