const smallCircle = document.querySelector(".circle");
const bigCircle = document.querySelector(".main");



bigCircle.addEventListener("click", (e) => {

    if (e.target.classList.contains("circle") && !e.target.classList.contains("occupied")) {
        const selectedCircles = document.querySelector(".selected");
        if (selectedCircles) {
            selectedCircles.classList.remove("selected");
        }
        e.target.classList.toggle("selected");
    }
});