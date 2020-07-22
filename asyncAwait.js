
function resolved() {console.log("Success")}
function rejected() {console.log("Failure")}

function anyValue() {
    return ((Math.floor(Math.random()*10)) % 2 == 0) ? true : false; 
}
console.log(anyValue())

function fetchAPI(){
    let promise = new Promise((res,rej) => {
        setTimeout(() => (anyValue() ? resolved() : rejected() ),2000);
    })
    return promise;
}



// fetchAPI()
// .then(resolved)
// .catch(rejected)


async function _asyncJS(){
    let data = await fetchAPI();
    // setTimeout(() => {
    //    console.log(data); 
    // }, 2000);
    data.then(resolved).catch(rejected)
}

_asyncJS()