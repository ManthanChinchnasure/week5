
// it async approach..  


const fs = require("fs");

fs.readFile("a.txt","utf-8", function (err, Contents){
    const trimmedContents = Contents.trim();
    fs.writeFile("a.txt", trimmedContents,function(){
        console.log("done!!!");
    });

    });



    // in this code we have to done the basic part which we remove the extra space here 
    // we disscus the anotherr approach of it..