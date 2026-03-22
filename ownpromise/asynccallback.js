// async call back approach 

const fs = require("fs");

function CleanFile (filepath,  Cb) {
    fs.readFile(filepath,"utf-8",function (err,contents){
        const trimmedContents = contents.trim();
        fs.writeFile("a.txt", trimmedContents,function (){
            Cb ();
        });
      
    });
}

CleanFile("a.txt", function (){
    console.log("done the file cleaning !!!")
});


/*
using callback you dont want to print..

in  it done the two thing read and write..

when both term done we call the callback 
because we use a morden function ..

in it where the file read and write then it call the callback wg=hich
we define the the function after it done the file.


 ........................the flow of the code how it work.......................

Flow of execution:
CleanFile is called
fs.readFile starts (async)
File gets read
Content is trimmed
fs.writeFile runs (async)
File is overwritten with cleaned text
Callback runs → prints:
done the file cleaning !!!



*/