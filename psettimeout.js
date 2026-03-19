function setTimeoutPromisified(dealy){
    return new Promise (function (resolve,reject){
        setTimeout(function (){
            resolve()
        },dealy)
    })
}
setTimeoutPromisified(1000)
.then(function (){
    console.log("i second term")
})

.catch (function (){
     console.log("error ha declare")
})

.finally( function (){
   console.log("finally after either then or catch")

})

