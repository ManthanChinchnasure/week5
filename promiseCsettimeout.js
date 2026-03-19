// set Time out Promisefied..

function setTimeoutPromisified(dealy){
    return new Promise ( function (resolve,reject){
        setTimeout(function (){
            resolve()
        },dealy)
    })
}



// setTimeout(function (){          it is setTimeout global... now see promisified
//     console.log("hiiii");
// },1000);

 setTimeoutPromisified(1000)
    .then(function (){
        console.log("i seccond nas passed")
    })
