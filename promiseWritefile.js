// fs readfilePromisified..
// fs writefielpromise..


function fsReadAndWritePromise(filepath,encoding) {
    return  new Promise (function (resolve,reject){
        fsReadFilePromisified(filepath, encoding)
        .then(function (content){
            content = content.toUpperclass();
            fsWriteFilePromisified(filepath,content)
            resolve()
        })
        

    })
}

fsReadAndWriteFilePromisified("a.txt", "utf-8")



// ReferenceError: fsReadAndWriteFilePromisified is not defined
// becacuse we not define the function so yet it not call to excute the programe...