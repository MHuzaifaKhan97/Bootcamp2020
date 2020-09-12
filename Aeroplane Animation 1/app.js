let cloud = document.getElementById("cloud-div");
let plane = document.getElementById("plane-div");
let bird = document.getElementById("bird");
let bird2 = document.getElementById("bird2");
let bird3 = document.getElementById("bird3");

cloud.animate([
    {transform:'translate(300px,0)'},
    {transform:'translate(10px,0px)'},
],{
    duration:20000,
    iterations:Infinity,
    // playbackRate:-5,
})

bird.animate([
    {transform:'translate(0,0)'},
    {transform:'translate(100px,0px)'},
    {transform:'translate(200px,0px)'},
    {transform:'translate(300px,0px)'},
    {transform:'translate(400px,0px)'},
],{
    duration:20000,
    iterations:Infinity,
    // playbackRate:-5,
})

bird2.animate([
    {transform:'translate(0,0)'},
    {transform:'translate(50px,0px)'},
    {transform:'translate(150px,0px)'},
    {transform:'translate(200px,0px)'},
    {transform:'translate(450px,0px)'},
],{
    duration:20000,
    iterations:Infinity,
    // playbackRate:-5,
})
bird3.animate([
    {transform:'translate(0,0)'},
    {transform:'translate(0px,0px)'},
    {transform:'translate(120px,0px)'},
    {transform:'translate(240px,0px)'},
    {transform:'translate(360px,0px)'},
],{
    duration:20000,
    iterations:Infinity,
    // playbackRate:-5,
})

plane.animate([
    {transform:'translate(0,0) '},
    {transform:'translate(100px,-10px) '},
    {transform:'translate(200px,-20px) '},
    {transform:'translate(300px,-30px) '},
    {transform:'translate(400px,-40px) '},
    {transform:'translate(500px,-50px) '},
    // {transform:'translate(1000px,-200px) rotate(-25deg)'},
    {transform:'translate(600px,-80px) rotate(0deg)'},
    {transform:'translate(700px,-100px) rotate(0deg)'},
    {transform:'translate(800px,-120px) rotate(0deg)'},
    {transform:'translate(900px,-150px) rotate(0deg)'},
    {transform:'translate(1000px,-190px) rotate(0deg)'},
   
],{
    duration:20000,
    iterations:Infinity,
})