const fs = require("fs");

 function fsReadFilePromisified( filepath ,encoding){
    return new Promise (function  (resolve , reject){
        fsReadFilePromisoified(filepath,encoding ,function(err,data) {
            if (err){
                reject("data is not find out");
            } else {
               resolve("the resolve");
            }

        })
    })


}

async function main (){
    let file1Contents = await fsReadFilePromisified("a.txt","utf-8");
    let file2Contents = await fsReadFilePromisified("b.txt","utf-8");
    let file3Contents = await fsReadFilePromisified("c.txt","utf-8");

    console.log(file1Contents);
    console.log(file2Contents);
    console.log(file3Contents);

}

main ();
console.log("hii");


// in this code this never stop-- stack keep going growing then -- crash
 // that why in it error is MAximun call size exceeded..


 // i have read some artical about how it working .. 

 // above code not working insted of use "aw.js" code it run correctly..

 // in this code two mistake are in line 5
 //  is fsReadFilePromisified = replace with = fs.readFile


 // second is mistake line 9
 // where resolve("the resolve") = replace with = resolve(data);