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

async function cleanManyFile(prefix) {
     await CleanFile(prefix + "1.txt");
     await CleanFile(prefix + "2.txt");
     await CleanFile(prefix + "3.txt");

}

function cleanManyFile(prefix){
    return new Promise (function (resolve,reject){
        CleanFile(prefix + "1.txt")
         .then(function (){
            CleanFile(prefix + "2.txt")
             .then(function (){
                CleanFile(prefix + "3.txt")
                 .then(function (){
                    resolve ()
                 })
                  .catch(function (){
                      reject  ()
                    })
             })
              .catch(function (){
               reject  ()
              })
         })
         .catch(function (){
            reject  ()
         })
    })
} 



let p = cleanManyFile("a");
console.log(p);