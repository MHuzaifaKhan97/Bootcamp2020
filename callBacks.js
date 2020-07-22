console.log('Start')

// const data = "data";

// setTimeout(function(){
//     console.log(data);
// },1000)



// Callbacks

function printGreet(msg, alertGreet) {
    if (msg === 'evening') {
        evening(alertGreet);
    }
    else if (msg === 'morning') {
        morning(alertGreet);
    }
    else {
        night(alertGreet)
    }
}

function morning(alertGreet){
    alert('good morning')
}

function evening(alertGreet){
    alert('good evening')
}
function night(alertGreet){
    alert('good night')
}
function alertGreet(msg){
    alert(msg)
}
printGreet('morning',alertGreet);
console.log("End")