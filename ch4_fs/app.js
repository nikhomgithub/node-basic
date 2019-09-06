const fs = require('fs');

//create a file
fs.writeFile('a.txt',"   this is old Data \n",(err)=>{
    if(err)
        console.log(err);
    else{
        console.log("File created");
        fs.rename('a.txt','b.txt',(err)=>{
            if(err)
                console.log(err);
            else{
                console.log("File renamed");
                fs.appendFile('b.txt','   New Append Data',(err)=>{
                    if(err)
                        console.log(err);
                    else{
                        console.log("File append");
                        fs.readFile('b.txt','utf8',(err,file)=>{  //
                            if(err)
                                console.log(err);
                            else    
                                console.log('File read')
                                console.log(file);
                                fs.unlink('b.txt',(err)=>{
                                    if(err)
                                        console.log(err)
                                    else
                                        console.log('File Deleted')
                                })
                        })
                    }
                })
            }
        })
    }
});


