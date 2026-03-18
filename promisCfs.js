
const fs = require("fs");

//create = C
// create a promise version of fs.readfile
// create a promise version of setTimeout
// create a promise version of fs.writefile

function fsReadFilePromise(fileName,encoding){
    return new Promise (function (resolve,reject){      // in it the mistake which i learn in it the  link is mention..            
        fs.readFile(fileName,encoding, function(err,data){
            if (err){
                reject(err)
            } else {
                resolve(data)
            }
        });
    });

}

fsReadFilePromise("a.txt","utf-8")
    .then(function (data){
    console.log(data);
})
  .catch(function (err) {
        console.log("error while read file " );
    });

