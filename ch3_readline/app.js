const readline = require('readline');
const rl=readline.createInterface({
        input:process.stdin,
        output:process.stdout
})  //process=global variable in node, stdin is input in bash, stdout is output in bash

const num1=Math.floor((Math.random()*10)+1);
const num2=Math.floor((Math.random()*10)+1);
const answer=num1+num2;

rl.question(`What is ${num1}+${num2} ? \n`,  //ask question
    (userInput)=>{                           //answer
    if(userInput.trim()==answer){            //correct answer   
        console.log("Correct")
        rl.close();
    }
    else{
        rl.setPrompt(`Incorrect , tray again\n`);  //wrong answer + ask again
        rl.prompt();                                         
        rl.on('line',(userInput)=>{                //answer
            if(userInput.trim()==answer){          //correct answer
                console.log("Correct")
                rl.close();
            }
            else{
                rl.setPrompt(`Incorrect , tray again\n`);   //wrong answer + ask again
                rl.prompt();
            }
        })
    }
});

rl.on('close',()=>{
    console.log('Good Bye !!!!!')
});