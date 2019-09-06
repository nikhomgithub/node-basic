const fs = require('fs');


fs.mkdir('subF',(err)=>{
    if(err)
        console.log(err)
    else{
        console.log('Folder created')
        fs.writeFile('./subF/c.txt',"This is c.txt",(err)=>{
            if(err)
                console.log(err)
            else{
                console.log("File c.txt created");
                fs.unlink('./subF/c.txt',(err)=>{
                    if(err)
                        console.log(err)
                    else{
                        console.log('File c.txt deleted');
                        fs.rmdir('subF',(err)=>{
                            if(err)
                                console.log(err)
                            else
                                console.log('Folder subF deleted')
                        })
                    }
                })
            }
        })
    }   
})
