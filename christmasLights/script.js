const circle = document.querySelectorAll(".circle")
const play = document.querySelector("#play")
const stop = document.querySelector("#stop")
const title = document.querySelector("#title")
let length = circle.length;
const submitBtn = document.querySelector(".submit")



const on = function() {
    console.log("On button clicked"); // For debugging
    for (let i = 0; i< length;i++) {
        circle[i].removeAttribute("style")//remove any previously applied class
        circle[i].style.animationPlayState = "running"
        
    }
}
const off = function() {
    console.log("Off button clicked"); // For debugging
    title.style.animation = "none" //stop animation

    for (let i=0; i<length;i++) {
        circle[i].style.animation = "none"
        circle[i].style.background = "#563268"
    }

}
function convert() {
    let speed = document.querySelector("#quantity").value;
    for (let i=0; i<length;i++) {
        circle[i].style.animationDuration = speed + "s"
    }

}
play.addEventListener("click" ,on);
stop.addEventListener("click" ,off);