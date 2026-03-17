
const fs = require("fs");


// craet a promise version of fs.readfile
// crate a promise version of setTimeout
// create a promise version of fs.writefile

function fsReadFilePromise(fileName,encoding){
    return new Promise (function (Resolve,Reject){
        fs.ReadFile(fileName,encoding, function(err,data){
            if (err){
                Reject(err)
            } else (data)
                Resolve(data)
            
        });
    });

}

fsReadFilePromise("a.txt","utf-8")
    .than(function (data){
    console.log(data);
})
  .catch(function (err) {
        console.log("error while read file " );
    });

