const fs = require("fs");

function CleanFile (filepath,  afterdone) {
    return new Promise (function (resolve, reject){
        fs.readFile(filepath,"utf-8",function (err,contents){
            if (err){
                reject();
            } else {
                 const trimmedContents = contents.trim();
                fs.writeFile(filepath, trimmedContents,function (){
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



function cleanManyFiles(prefix){
    return new Promise (async function (resolve,reject){
        try {
        await CleanFile(prefix + "1.txt");
        await CleanFile(prefix + "2.txt");
        await  CleanFile(prefix + "3.txt");
         resolve ();

        } catch(err) {

        reject ();

        }
    })


}



// write a promisified funcation that take a file prefix as an input (a)\
// and clean ((prefix_1.txt),(prefix)2.txt),(prefix)3.txt))

cleanManyFiles("a")
  .then(function (){
    console.log ("all 3 files have been cleanned");

  })
  .catch(function (){
    console.log("error while cleaning these 3 files")
  })