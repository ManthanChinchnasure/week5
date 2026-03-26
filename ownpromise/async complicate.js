const fs = require("fs");

function CleanFile (filepath,  afterdone) {
    return new Promise (function (resolve, reject){
        fs.readFile(filepath,"utf-8",function (err,contents){
            if (err){
                reject();
            } else {
                 const trimmedContents = contents.trim();
                fs.writeFile("a.txt", trimmedContents,function (){
                    if (err){
                         reject();
                    } else {
                          resolve ();
                    }


                });

            }  
                    
         });

    
    })
    
}

CleanFile("a.txt")
       .then( function (){
        console.log("file has been read");
       })
       .catch(function (){
        console.log("error has caused")
       })