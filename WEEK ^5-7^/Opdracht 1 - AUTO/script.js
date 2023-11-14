const car = document.getElementById("car")

let carPosition = window.innerHeight - car.height;
let carSpeed = 2;
let animationId;

function moveCarUp() {
    carPosition -= carSpeed;
    car.style.top = carPosition + "px";

    if (carPosition > -car.height) {
        animationId = requestAnimationFrame(moveCarUp);
    }
}

function stopCar() {
    cancelAnimationFrame(animationId);

}
function resitCar() {
    carPosition = window.innerHeight;
}

document.querySelector("button[id='start']").addEventListener("click", moveCarUp);
document.querySelector("button[id='stop']").addEventListener("click", stopCar);
document.querySelector("button[id='resit']").addEventListener("click", resitCar);
