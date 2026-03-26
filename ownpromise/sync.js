const fs = require("fs");

function CleanFileSync (filepath,cb){
    const Contents = fs.readFileSync(filepath,"utf-8");
    const trimmedContents = Contents.trim();
    fs.writeFileSync("a.txt", trimmedContents)
}

CleanFileSync("a.txt");


// here the trim remove the extra part of space will remove....