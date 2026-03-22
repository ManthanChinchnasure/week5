
//  appproach promise base in async await....
// ideal method to do the this type of promise..

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

async function main ()  {
    try {
        await CleanFile("g.txt");
        console.log("the file cleaning is done")
    } catch (err){
        console.log("error while cleaning the file");
    }
}

  main ();
