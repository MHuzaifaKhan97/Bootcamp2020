// Example 01

// let promise = new Promise(function (resolve, reject) {

//     setTimeout(() => {
//         console.log("New Promise")
//     }, 1000);
//     resolve()
// });

// promise.then(() => {
//     console.log("Success");
// })

// Example 02



const anyFunction = () => {
    return (((Math.floor(Math.random()*10)) % 2 ) === 0 ) ? true : false;
}
// console.log(anyFunction());

function resolvePromise(){console.log("Success")}
function rejectPromise(){console.log("Failure")}

const result =  new Promise((resolve,reject) => {
    console.log("Start")
    setTimeout(() => (anyFunction() ? resolve() : reject()),2000);
})

result.then(() => {
    resolvePromise()
    return 2;
})
.then((val)=> {
    console.log("Value get from above then is : "+val );
    return val * val;
})
.then((val) => {
    console.log("Val get from above then is : "+val);
})
.catch(() => {
    rejectPromise()
})

console.log("End")

























