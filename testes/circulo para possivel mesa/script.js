const smallCircle = document.querySelector(".circle");
const bigCircle = document.querySelector(".main");



bigCircle.addEventListener("click", (e) =>{
    if(e.target.classList.contains("circle") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected");
    }
});