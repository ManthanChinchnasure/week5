// own asyncAwait..
// assigiment readthe File,removeExtra space of File.. and Write the back the file..
 

//  approach 1 ( SYNC funcation call)
const fs = require("fs");

let Content = fs.readFileSync("a.txt", "utf-8");
//console.log(content);
            //console.log(content.trim());
 // trim basicly done remove the extra part of space it will remove it.


 const trimmedContent = Content.trim();
 fs.writeFileSync("a.txt",trimmedContent);


// in this code we have to discover the actual part of file where the space is add
// it remove to doing the the writeFileSync function..