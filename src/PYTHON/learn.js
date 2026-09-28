// let promise = new Promise((res,rej)=>{
//     if(10%2!==0){
//         setTimeout(()=>{res("CORRECT")},3000)
//     }
//     else{
//         setTimeout(()=>{rej("INCORRECT")},3000)
//     }
// })

// promise
// .then((ans)=>console.log(ans))
// .catch((error)=>console.log(error))
// .finally(()=>{console.log("ALL DONE")})


// console.log(promise)


let promise1 = new Promise((res,rej)=>{
    res("Done")
})

let promise2 = new Promise((res,rej)=>{
    res("Ok")
})

let promise3 = new Promise((res,rej)=>{
    rej("Reject Hogya")
})

let promise4 = new Promise((res,rej)=>{
    res("true")
})

let Pro = Promise.allSettled([promise1,promise2,promise3,promise4])
.then((ams)=>console.log(ams))
.catch((ams)=>console.log(ams))