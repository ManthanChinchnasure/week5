const fs = require("fs");

fs.readFile("a.txt","utf-8", function(err, data){

    if (err){
        console.log("err while be done");
    } else  {
        console.log(data);
    }
});